'use strict';

const mongoose = require('mongoose');

const pasteSchema = new mongoose.Schema({
    content: {
        type: String,
        minlength: 10,
        maxlength: 2000,
        required: true
    },
    lang: {
        type: String,
        minlength: 1
    },
    author: {
        username: String
    },
    deletedAt: {
        type: Date
    },
    comments: [
        {
            content: {
                type: String,
                required: true,
                minlength: 10
            },
            author: {
                username: String
            }
        }
    ]
});

mongoose.model('Paste', pasteSchema);

module.exports = mongoose.model('Paste');