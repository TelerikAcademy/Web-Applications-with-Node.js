'use strict';

let express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

module.exports = function(app) {
  let connectionString = "mongodb://localhost/it-gallery";
  mongoose.connect(connectionString);

  app.use(express.static(path.join(__dirname, '../public')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.set('view engine', 'jade');

  app.get('/', function(req, res) {
    res.redirect('/home');
  });
};