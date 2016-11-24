'use strict';

const passport = require('passport');

module.exports = function (data) {
    return {
        loginLocal(req, res, next) {
            const auth = passport.authenticate('local', function (error, user) {
                if(error) {
                    next(error);
                    return;
                }

                if(!user) {
                    res.json({ 
                        success: false,
                        message: 'Invalid name or password!'
                    });
                }

                req.login(user, error => {
                    if(error) {
                        next(error);
                        return;
                    }

                    res.redirect('/profile');
                });
            });

            auth(req, res, next);
        },
        loginGithub(req, res, next) {
            const auth = passport.authenticate('github', function (error, user) {
                if(error) {
                    next(error);
                    return;
                }

                if(!user) {
                    res.json({ 
                        success: false,
                        message: 'Invalid name or password!'
                    });
                }

                req.login(user, error => {
                    if(error) {
                        next(error);
                        return;
                    }

                    res.redirect('/profile');
                });
            });

            auth(req, res, next);
        },
        logout(req, res) {
            req.logout();
            res.redirect('/home');
        },
        register(req, res) {
            const user = {
                username: req.body.username,
                password: req.body.password
            };

            data.createUser(user)
                .then(dbUser => {
                    res.status(201)
                       .send('<h1>Worked!</h1>');
                })
                .catch(error => res.status(500).json(error));
        }
    }
};