'use strict';

const passport = require('passport'),
    data = require('../../dummy-db');

passport.serializeUser((user, done) => {
    if(user) {
        done(null, user.id);
    }
});

passport.deserializeUser((userId, done) => {
    data
      .findById(userId)
      .then(user => done(null, user || false))
      .catch(error => done(error, false));
});

require('./local-strategy')(passport, data);
require('./github-strategy')(passport, data);

module.exports = app => {
    app.use(passport.initialize());
    app.use(passport.session());
};