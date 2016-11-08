'use strict';

let express = require('express');

let router = new express.Router();

router.get('/', function(req, res){
  res.send('It works with messages');
});

//register routes...

module.exports = function(app){
  app.use('/messages', router);
};
