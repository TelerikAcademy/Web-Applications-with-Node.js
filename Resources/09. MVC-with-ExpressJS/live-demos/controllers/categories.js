// controller -> categories.js

'use strict';

module.exports = function(Category) {
  function get(req, res) {
    Category.find({}, function(err, categories) {
      if (err) {
        throw err;
      }
      res.json({
        result: categories
      });
    });
  }

  function getById(req, res) {
    Category.findById(req.params.id, function(err, category) {
      if (err || !category) {
        res.status(404)
          .json({
            message: 'Invalid ID'
          });
      }

      res.json({
        result: category
      });
    });
  }

  function post(req, res) {
    let category = new Category(req.body);
    category.save(function(err) {
      if (err) {
        throw err;
      }

      res.status(201)
        .json({
          result: category
        });
    });
  }

  let controller = {
    get: get,
    getById: getById,
    post: post
  };

  return controller;
};