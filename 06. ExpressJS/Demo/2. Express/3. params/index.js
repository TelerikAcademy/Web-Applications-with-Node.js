var express = require('express');

var app = express();

app.get('/customer/:id', function (req, res) {
    res.send('Customer requested is ' + req.params['id']);
});

app.get('/employee/:name', function (req, res) {
    res.send('Employee requested is ' + req.params.name);
});

app.get('/manager', function (req, res) {
    res.send('Manager requested is ' + req.query.name); // ?name=Joe
});

app.get(/^\/range\/(\d+)(?:\.\.(\d+))?$/, function (req, res) {
    var from = req.params[0];
    var to = req.params[1];
    res.send('Range of values using regular expressions for /range/' + from + '..' + to);
});

app.listen(3000);
