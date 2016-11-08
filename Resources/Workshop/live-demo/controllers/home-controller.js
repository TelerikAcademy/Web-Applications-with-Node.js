// controllers/home-controller.js

'use strict';

module.exports = function(Product) {
  let controller = {
    get: function(req, res) {

      let query = {};
      let selectedProperties = {};

      Product.find(query, selectedProperties, {
        skip: 0, // Starting Row
        limit: 10, // Ending Row
        sort: {
          date: -1
        }
      }, function(err, products) {
        res.render('products-all', {
          data: products
        });
      });
    }
  };

  return controller;
};