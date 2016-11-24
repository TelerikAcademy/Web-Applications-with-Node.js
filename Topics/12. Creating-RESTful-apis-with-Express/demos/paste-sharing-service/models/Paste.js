'use strict';

const mongoose = require('mongoose');

const Paste = new mongoose.Schema({
    content: {
        type: String,
        minlength: 10,
        maxlength: 1000
    },
    lang: String,
    author: {
        username: String,
        _id: String
    },
    deletedAt: {
        type: Date,
        default: null
    },
    comments: [{
        content: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 2000
        },
        author: {
            username: String,
            _id: String
        }
    }]
});

mongoose.model('Paste', Paste);

module.exports = mongoose.model('Paste');