var express = require('express'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({ secret: 'Passphrase to encrpyt session', resave: true, saveUninitialized: true}));

app.get('/', function (req, res) {
    console.log(req.sessionID);
    req.session.name = req.session.name || new Date().toUTCString();
    res.send(req.session.name);
});

app.listen(3000);