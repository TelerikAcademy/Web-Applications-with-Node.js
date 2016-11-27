'use strict';

const express = require('express'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

const data = require('../../data');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'purple unicorn' }));

require('../passport/')(app, data);
require('../../routing/users-router')(app);
require('../../routing/pastes-router')(app);

module.exports = app;