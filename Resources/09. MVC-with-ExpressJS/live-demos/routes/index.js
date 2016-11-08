'use strict';

let fs = require('fs');

module.exports = function(app) {
  fs.readdir('./routes', function(err, files) {
    if (err) {
      throw err;
    }

    files.filter(file => file.indexOf('-router') >= 0)
      .forEach(file => require(`${__dirname}/${file}`)(app));
  });
};