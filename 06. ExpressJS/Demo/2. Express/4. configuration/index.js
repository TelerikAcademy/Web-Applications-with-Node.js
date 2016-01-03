// NODE_ENV=production node index.js

var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon');

var app = express();

app.set('title', 'Production App');
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res) {
    res.send('Running under title ' + app.get('title'));
});

app.listen(3000);
