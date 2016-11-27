'use strict';

const router = require('express').Router(),
    createPastesController = require('../controller/pastes-controller'),
    data = require('../data'),
    auth = require('../middlewares/auth-middleware'),
    dataMiddleware = require('../middlewares/data-middlewares');

const pastesController = createPastesController(data);

module.exports = app => {
    router
        .get('/api/pastes', pastesController.getPastes)
        .post('/api/pastes', pastesController.createPaste)
        .get('/api/pastes/:pasteId', dataMiddleware.pasteById, pastesController.pasteById)
        .put('/api/pastes/:pasteId', auth.isInRole('admin'), pastesController.updatePaste)
        .delete('/api/pastes/:pasteId', auth.isInRole('admin'), pastesController.removePaste)
        .post('/api/pastes/:pasteId/comments', auth.isAuthenticated, dataMiddleware.pasteById, pastesController.createComment)


    app.use(router);
}