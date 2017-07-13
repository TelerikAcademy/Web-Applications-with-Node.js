const { Router } = require('express');

const attachTo = (app, data) => {
    const apiRouter = new Router();

    apiRouter
        .get('/', (req, res) => {
            return data.categories.getAll()
                .then((todos) => {
                    return res.send(todos);
                });
        });

    app.use('/api/categories', apiRouter);
};

module.exports = { attachTo };

// Questions
// how to choose category
// where and how to update the category
