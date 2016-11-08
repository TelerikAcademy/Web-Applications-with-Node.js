// controllers/product-controller.js

'use strict';

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 10;

module.exports = function(Product) {
  let controller = {
    get: function(req, res) {
      let page = req.query.page || DEFAULT_PAGE;
      let size = req.query.size || DEFAULT_SIZE;

      Product.find({})
        .skip((page - 1) * size)
        .limit(size)
        .exec(function(err, products) {
          if (err) {
            // res.redirect('error')
            throw err;
          }

          Product.count({})
            .exec(function(err, count) {
              res.render('products-all', {
                data: products,
                pages: (count / size) | 0 + 1,
                page: page
              });
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
      console.log(req.file);
      //validate product

      if (!reqProduct.image && req.file) {
        reqProduct.image = req.file.path.substr('public'.length);
      }

      let product = new Product({
        name: reqProduct.name,
        description: reqProduct.description,
        price: +reqProduct.price,
        image: reqProduct.image,
      });

      product.save(function(err) {
        if (err) {
          throw err;
        }

        res.status(201)
          .redirect('/products/' + product._id);
      });
    }
  };

  return controller;
};