var express = require('express');

var app = express();

app.get('/', function (request, response) {
    response.send('Welcome to Express!');
});

app.listen(3000);
