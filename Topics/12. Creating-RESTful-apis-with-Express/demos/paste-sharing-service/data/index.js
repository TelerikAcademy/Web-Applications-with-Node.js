'use strict';

const fs = require('fs'),
    path = require('path');

module.exports = models => {
    const data = {};

    fs.readdirSync(path.join(__dirname))
        .filter(name => name !== 'index.js')
        .forEach(name => {
            const service = require(path.join(__dirname, './' + name)),
                serviceName = name.replace('-service.js', '');

            data[serviceName] = service(models);
        });

    return data;
};