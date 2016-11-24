'use strict';

const express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    dbConnectionUrl = 'mongodb://localhost:27017/pastes-db';

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'purple unicorn' }));

mongoose.connect(dbConnectionUrl, err => console.log(err || 'Db connection established!'));
mongoose.Promise = global.Promise;

module.exports = app;