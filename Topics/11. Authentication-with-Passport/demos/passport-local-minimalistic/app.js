'use strict';

const express = require('express'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    data = require('./dummy-data'),
    PORT = 3001;

const app = express();

// setup servev middlewar

app.use(cookieParser()); // session will be maintained via cookies
app.use(bodyParser.urlencoded({ extended: true })); // html forms send credentials in urlencoded by default
app.use(session({ secret: 'purple unicorn' })); // middleware that manages sessions

// passport middleware
app.use(passport.initialize());
app.use(passport.session()); // passport session builds on top of express-session

// configure strategy for passport
const strategy = new LocalStrategy((username, password, done) => {
    data.findUserByCredentials(username, password)
        .then(user => {
            if(user) {
                return done(null, user);
            }

            return done(null, false)
        })
        .catch(error => done(error, null));
});

// tell passport to use the strategy
passport.use(strategy);

// tell passport how to serialize a user to store in a session
// and how to deserialize a user from information serialized in a session
passport.serializeUser((user, done) => {
    // minimalistic example - serialize the user id in the session
    if(user) {
        done(null, user._id);
    }
});

passport.deserializeUser((id, done) => {
    // use the id serialized in the session to retrieve the use from the database
    data.findUserById(id)
        .then(user => {
            if(user) {
                return done(null, user);
            }

            return done(null, false);
        })
        .catch(error => done(error, false));
});

// set up application routes

app.get('/login', (req, res) => res.status(200).send(`
    <form action="/login" method="POST">
        <input type="text" name="username" placeholder="Username">
        <input type="text" name="password" placeholder="Password">
        <input type="submit" value="Login">
    </form>
`));

app.post('/login', 
        // insert authentication middleware here
        // passport.authenticate returns a function that acts as middleware
         passport.authenticate('local', { failureRedirect: '/login' }),
         (req, res) => res.redirect('/profile'));

// passport attaches an isAuthenticated function to each request
app.get('/profile', (req, res) => {
    if(!req.isAuthenticated()) {
        return res.status(401).redirect('/unauthorized');
    }

    res.status(200).send(`Welcome, ${req.user.username}`);
});

app.get('/logout', (req, res) => {
    req.logout();
    res.status(200).redirect('/login');
});

app.get('/unauthorized', (req, res) => res.send('Wa wa!'));

// run the server
app.listen(PORT, () => console.log(`Magic happening on http://localhost:3001`));