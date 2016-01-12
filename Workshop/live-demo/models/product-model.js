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
    required: true,
    default: function() {
      return Date.now();
    }
  },
  description: String,
  price: Number,
  image: String
});


mongoose.model('Product', productSchema);