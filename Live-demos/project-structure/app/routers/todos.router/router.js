const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/', (req, res) => {
            return controller.getAll(req, res);
        })
        .get('/form', (req, res) => {
            return controller.getForm(req, res);
        })
        .post('/', (req, res) => {
            return controller.create(req, res);
        });

    app.use('/todos', router);
};

module.exports = { attachTo };

// Questions
// how to choose category
// where and how to update the category
