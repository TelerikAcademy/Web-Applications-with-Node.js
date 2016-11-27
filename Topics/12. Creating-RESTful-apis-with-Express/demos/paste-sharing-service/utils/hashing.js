'use strict';

const crypto = require('crypto');

module.exports = {
    generateSalt() {
        return crypto.randomBytes(128).toString('base64');
    },
    hashPassword(salt, password) {
        const hmac = crypto.createHmac('sha1', salt);
        return hmac.update(password).digest('hex');
    }
};