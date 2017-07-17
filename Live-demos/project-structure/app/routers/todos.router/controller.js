class TodosController {
    constructor(data) {
        this.data = data;
    }

    getAll(req, res) {
        return res.render('todos/all', {
            context: req.user.todos || [],
        });
    }

    getForm(req, res) {
        return Promise.resolve()
            .then(() => {
                return res.render('todos/form');
            });
    }

    create(req, res) {
        const todo = req.body;

        // validate item
        const category = {
            name: todo.category,
        };

        const user = req.user;

        todo.user = {
            id: user._id,
            username: user.username,
        };

        return Promise
            .all([
                this.data.todos.create(todo),
                this.data.categories.findOrCreateBy(category),
            ])
            .then(([dbTodo, dbCategory]) => {
                dbCategory.name = todo.category;
                dbCategory.todos = dbCategory.todos || [];
                dbCategory.todos.push({
                    _id: dbTodo._id,
                    text: dbTodo.text,
                    isDone: dbTodo.isDone,
                });

                dbTodo.category = {
                    _id: dbCategory._id,
                    name: dbCategory.name,
                };

                user.todos = user.todos || [];
                user.todos.push({
                    _id: dbTodo._id,
                    text: dbTodo.text,
                    isDone: dbTodo.isDone,
                    category: dbTodo.category,
                });

                return Promise.all([
                    this.data.todos.updateById(dbTodo),
                    this.data.categories.updateById(dbCategory),
                    this.data.users.updateById(user),
                ]);
            })
            .then(() => {
                // connect-flash
                return res.redirect('/todos');
            })
            .catch((err) => {
                req.flash('error', err);
                return res.redirect('/todos/form');
            });
    }
}

const init = (data) => {
    return new TodosController(data);
};

module.exports = { init };
