// routers/product-router.js
'use strict';

let express = require('express'),
  multer = require('multer');

var storage = multer.diskStorage({
  destination: './public/images',
  filename: function(req, file, cb) {
    console.log(file);
    let ext = file.originalname.split('.')
      .pop();
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
  }
});

var upload = multer({
  storage: storage
});

let router = new express.Router();

let mongoose = require('mongoose');
let Product = mongoose.model('Product');

let controller = require('../controllers/product-controller')(Product);

router.get('/', controller.get)
  .get('/add', controller.getForm)
  .get('/:id', controller.getById)
  .post('/', upload.single('image-file'), controller.post);

module.exports = function(app) {
  app.use('/products', router);
};