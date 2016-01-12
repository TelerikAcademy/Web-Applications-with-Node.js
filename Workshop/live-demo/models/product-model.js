// models/product-model.js
'use strict';

let mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  image: String
});

mongoose.model('Product', productSchema);