'use strict';

const router = require('express').Router(),
    models = require('../models'),
    data = require('../data')(models),
    pastesController = require('../controllers/pastes-controller')(data);

router
    .get('/api/pastes', pastesController.all)
    .post('/api/pastes', pastesController.create)
    .put('/api/pastes/:id', pastesController.update)
    .delete('/api/pastes/:id', pastesController.delete)
    .post('/api/pastes/:id/comments', pastesController.createComment);

module.exports = app => app.use(router);