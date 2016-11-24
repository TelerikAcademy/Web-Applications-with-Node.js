'use strict';

const fs = require('fs'),
    path = require('path');

const models = {};

fs.readdirSync(path.join(__dirname))
    .filter(name => name !== 'index.js')
    .forEach(name => {
        const model = require(path.join(__dirname, './' + name)),
            modelName = name.replace('.js', '');

        models[modelName] = model;
    });

module.exports = models;