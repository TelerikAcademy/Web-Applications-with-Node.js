'use strict';

const GithubStrategy = require('passport-github2');

// should be read from a configuration file
const GITHUB = {
    CLIENT_ID: '5ccf45cee38770b4f336',
    CLIENT_SECRET: '7e754e7ef68751ba8f63dc98175845a9dba0ebb4',
    callbackURL: 'http://127.0.0.1:3001/login/github/callback'
};

module.exports = function (passport, data) {
    const authStrategy = new GithubStrategy(
        {
            clientID: GITHUB.CLIENT_ID,
            clientSecret: GITHUB.CLIENT_SECRET,
            callbackUrl: GITHUB.callbackURL
        },
        function (accessToken, refreshToken, profile, done) {
            console.log(profile);
            data
                .findByGithubId(profile.id)
                .then(user => {
                    if(user) {
                        return user;
                    } else {
                        return data.createUser({
                            username: profile.username,
                            github_id: profile.id
                        });
                    }
                })
                .then(user => {
                    done(null, user);
                })
                .catch(error => done(error, false));
        });

    passport.use(authStrategy);
}