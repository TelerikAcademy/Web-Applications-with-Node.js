class TodosController {
    constructor(data) {
        this.data = data;
    }

    getAll(req, res) {
        return this.data.todos.getAll()
            .then((todos) => {
                return res.render('todos/all', {
                    context: todos,
                });
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
                    name: dbTodo.name,
                    isDone: dbTodo.isDone,
                });

                dbTodo.category = {
                    _id: dbCategory._id,
                    name: dbCategory.name,
                };
                return Promise.all([
                    this.data.todos.updateById(dbTodo),
                    this.data.categories.updateById(dbCategory),
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
    }
}

const init = (data) => {
    return new TodosController(data);
};

module.exports = { init };
