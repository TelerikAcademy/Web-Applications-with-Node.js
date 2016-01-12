// models/index.js
'use strict';

let fs = require('fs'),
  path = require('path');

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('-model') >= 0)
  .forEach(file => require(path.join(__dirname, file)));