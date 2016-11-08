// models/category-model.js
'use strict';


let mongoose = require('mongoose');

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

mongoose.model('Category', schema);