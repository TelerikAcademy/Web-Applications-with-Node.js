var express = require('express'),
    path = require('path'),
    morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);