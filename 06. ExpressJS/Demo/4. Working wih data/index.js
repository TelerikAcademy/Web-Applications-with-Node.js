var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    busboy = require('connect-busboy'),
    home = require('./routes/home.js'),
    customer = require('./routes/customer.js');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(busboy({ immediate: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', home.index);
app.get('/contact', home.contact);
app.get('/customer', customer.index);
app.get('/customer/create', customer.create);
app.get('/customer/details/:id', customer.details);
app.get('/customer/picture/:id', customer.picture);
app.post('/customer/create', customer.createCustomer);
app.get('/customer/edit/:id', customer.edit);
app.post('/customer/edit/:id', customer.editCustomer);
app.get('/customer/delete/:id', customer.delete);

app.locals.clock = { datetime: new Date().toUTCString()};

app.listen(3000);