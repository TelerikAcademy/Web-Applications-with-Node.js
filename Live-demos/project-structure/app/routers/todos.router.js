const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            return data.todos.getAll()
                .then((todos) => {
                    return res.render('todos/all', {
                        context: todos,
                    });
                });
        })
        .get('/form', (req, res) => {
            return res.render('todos/form');
        })
        .post('/', (req, res) => {
            const todo = req.body;

            // validate item
            let dbTodo = null;
            return Promise.all([
                data.todos.create(todo),
                data.categories.findOrCreateBy({
                    name: todo.category,
                })])
                .then(([_dbTodo, dbCategory]) => {
                    dbTodo = _dbTodo;
                    dbCategory.name = todo.category;

                    dbCategory.todos = dbCategory.todos || [];
                    dbCategory.todos.push({
                        _id: dbTodo._id,
                        name: dbTodo.name,
                        isDone: dbTodo.isDone,
                    });

                    dbTodo.category = {
                        _id: dbCategory._id,
                        name: dbCategory.name,
                    };
                    return Promise.all([
                        data.todos.updateById(dbTodo),
                        data.categories.updateById(dbCategory),
                    ]);
                })
                .then(() => {
                    return res.redirect('/todos');
                })
                .catch((err) => {
                    // connect-flash
                    req.flash('error', err);
                    return res.redirect('/todos/form');
                });
        });

    app.use('/todos', router);
};

module.exports = { attachTo };

// Questions
// how to choose category
// where and how to update the category
