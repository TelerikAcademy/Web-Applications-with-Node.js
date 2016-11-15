/* globals require __dirname module */

const fs = require("fs");

fs.readdirSync(__dirname)
    .filter(fileName => fileName.indexOf("-model") >= 0)
    .forEach(fileName => {
        const klass = require(__dirname + "/" + fileName);
        const funcName = `get${klass.name}`;

        module.exports[funcName] = function(...params) {
            return new klass(...params);
        };
    });