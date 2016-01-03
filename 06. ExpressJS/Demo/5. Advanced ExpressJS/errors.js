var express = require('express');

var app = express();

var sendEmail = function (message) {
    // send email to sysadmin
};

var notFound = function (req, res, next) {
    res.statusCode = 404;
    res.description = 'Not found';
    res.render('404');
};

var errorHandler = function (req, res, next) {
    res.render('error', { description: 'We know it has gone wrong'});
};

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(notFound);
app.use(errorHandler);

app.get('/', function (req, res) {
    res.send('Responding with some text');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.get('/logout', function (req, res) {
    res.render('logout');
});

app.listen(3000);