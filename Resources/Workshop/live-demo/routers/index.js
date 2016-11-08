// routers/index.js
'use strict';

let fs = require('fs'),
  path = require('path');

module.exports = function(app, upload) {
  fs.readdirSync(__dirname)
    .filter(file => file.indexOf('-router') >= 0)
    .forEach(file => require(path.join(__dirname, file))(app));
};