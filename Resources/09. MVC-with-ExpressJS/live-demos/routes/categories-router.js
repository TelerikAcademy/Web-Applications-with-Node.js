//categories-router.js

'use strict';

let express = require('express'),
  mongoose = require('mongoose');

let router = new express.Router();

let Category = mongoose.model('Category');

let controller = require('../controllers/categories')(Category);

router.get('/', controller.get)
  .get('/:id', controller.getById)
  .post('/', controller.post);

//register routes...

module.exports = function(app) {
  app.use('/categories', router);
};