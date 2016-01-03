var express = require('express'),
    util = require('util');


var app = express();

var globalInterceptor = function (req, res, next) {
    console.log(util.format('Path requested is %s', req.path));
    next();
};

var singleInterceptor = function (req, res, next) {
    console.log('singleInterceptor invoked');
    next();
};

app.use(globalInterceptor);

app.get('/', singleInterceptor, function (req, res) {
    res.send('Calling root!');
});

app.get('/other', function (req, res) {
    res.send('Calling other!');
});

app.listen(3000);