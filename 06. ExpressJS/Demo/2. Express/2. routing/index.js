var express = require('express'),
    home = require('./routes/home.js'),
    customer = require('./routes/customer.js');

var app = express();

app.get('/', home.index);
app.get('/customer', customer.index);
app.get('/customer/list', customer.list);


app.listen(3000);
