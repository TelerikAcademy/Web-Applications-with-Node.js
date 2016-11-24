'use strict';

const fs = require('fs'),
    path = require('path');

module.exports = app => {
    fs.readdirSync(__dirname)
      .filter(name => name.includes('-router.js'))
      .forEach(name => {
          console.log(name);
          require(path.join(__dirname, './' + name))(app);
      });
};