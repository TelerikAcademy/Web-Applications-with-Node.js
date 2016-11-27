'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 4,
        required: true,
        unique: true
    },
    passHash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ['standart']
    }
});

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');