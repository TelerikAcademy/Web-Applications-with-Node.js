'use strict';

const User = require('../models/User'),
    Paste = require('../models/Paste'),
    mongoose = require('mongoose'),
    hashing = require('../utils/hashing');

// the next 3 lines are mongoose configuration and should be extracted in a config file
const CONNECTION_URL = 'mongodb://localhost:27017/demo-db';

mongoose.connect(CONNECTION_URL);
mongoose.Promise = global.Promise;

module.exports = {
    findById(id) {
        return User.findById(id);
    },
    findByUsername(username) {
        return User.findOne({ username });
    },
    createUser(user) {

        // hash the password so it isn't stored in plain text
        const salt = hashing.generateSalt(),
            passHash = hashing.hashPassword(salt, user.password);

        const newUser = {
            username: user.username,
            roles: user.roles,
            salt,
            passHash
        };

        return User.create(newUser);
    },
    createPaste(paste, author) {
        const newPaste = { content: paste.content, lang: paste.lang };

        if(author) {
            newPaste.author = {
                username: author.username
            }
        }

        return Paste.create(newPaste);
    },
    getPagedPastes(pageNumber, pageSize, options) {

        const { widthDeleted, withDetails } = options;

        const query = Paste.find(withDeleted ? {} : { deletedAt: undefined })
                    .skip(pageNumber * pageSize)
                    .limit(pageSize);

        return detailed ? query : query.select('content lang');
                    
    },
    pasteById(id) {
        return Paste.findById(id);
    },
    updatePasteById(id, updateOptions) {
        return Paste.findByIdAndUpdate(id, updateOptions);
    },
    removePasteById(id) {
        return Paste.findByIdAndUpdate(id, {
            deletedAt: new Date()
        });
    },
    createCommentForPaste(pasteId, comment, author) {

        const newComment = {
            content: comment.content
        };

        if(author) {
            newComment.author = {
                username: author.username
            };
        }

        return Paste.findByIdAndUpdate(pasteId, {
            $push: { comments: newComment }
        });
    }
};