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

                    res.status(200).json({
                        success: true,
                        message: 'Login successful!'
                    });
                });
            });

            auth(req, res, next);
        },
        logout(req, res) {
            req.logout();
            res.status(200).json({ success: true });
        },
        register(req, res) {
            const user = {
                username: req.body.username,
                password: req.body.password,
                roles: req.body.roles
            };
            
            data.createUser(user)
                .then(dbUser => {
                    res.status(201).json(dbUser);
                })
                .catch(error => res.status(500).json(error));
        }
    }
};