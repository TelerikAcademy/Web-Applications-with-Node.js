// controllers/product-controller.js

'use strict';

module.exports = function(Product) {

  let controller = {
    get: function(req, res) {
      Product.find({}, function(err, products) {
        if (err) {
          throw err;
          // res.redirect('error')
        }

        res.render('products-all', {
          data: products
        });
      });
    }
  };

  return controller;
};