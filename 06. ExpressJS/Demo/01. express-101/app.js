'use strict';
//load express
let express = require('express');

//create an Express application
let app = express();

//set the port on which the server application be running
let port = 3001;

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 10;

let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  console.log('Before each the request');
  next();
});

app.use('/api/messages', function(req, res, next) {
  req.query.page = req.query.page || DEFAULT_PAGE;
  req.query.size = req.query.size || DEFAULT_SIZE;
  next();
});

app.get('/api/messages', function(req, res) {
  console.log('Query params:');
  console.log(req.query);
  res.send('Ok!');
});

//run th eapp
let server = app.listen(port, function() {
  let host = server.address()
    .address,
    port = server.address()
    .port;

  console.log(`Server is running at ${host}:${port}`)
});