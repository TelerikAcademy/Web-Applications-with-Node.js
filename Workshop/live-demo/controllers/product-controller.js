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
    },
    getForm: function(req, res) {
      //check if user is authenticated
      res.render('product-add');
      //else
      //res.redirect('login');
    },
    getById: function(req, res) {
      let id = req.params.id;
      Product.findById(id, function(err, product) {
        if (err) {
          throw err;
        }

        if (!product) {
          res.redirect('error-not-found');
          return;
        }

        res.render('product-details', {
          data: product
        });
      });
    },
    post: function(req, res) {
      let reqProduct = req.body;

      //validate product

      let product = new Product({
        name: reqProduct.name,
        description: reqProduct.description,
        price: +reqProduct.price,
        image: reqProduct.image
      });

      product.save(function(err) {
        if (err) {
          throw err;
        }

        console.log('--------------------------------------');
        console.log('JUST BEFORE THE REDIRECT');
        res.status(201)
          .redirect('/products/' + product._id);
      });
    }
  };

  return controller;
};