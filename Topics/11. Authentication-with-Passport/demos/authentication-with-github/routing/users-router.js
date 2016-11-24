'use strict';

const router = require('express').Router(),
    createAuthController = require('../controller/auth-controller'),
    createUsersController = require('../controller/users-controller'),
    data = require('../dummy-db'),
    passport = require('passport');

const authController = createAuthController(data),
    usersController = createUsersController(data);



module.exports = app => {
    router
        .get('/home', usersController.getHome)
        .get('/login', usersController.getLogin)
        .post('/login', authController.loginLocal)
        .get('/login/github', authController.loginGithub)
        .get('/login/github/callback', authController.loginGithub)
        .get('/register', usersController.getRegister)
        .post('/register', authController.register)
        .get('/profile', usersController.getProfile)
        .get('/unauthorized', usersController.getUnauthorized);

    app.use(router);
};