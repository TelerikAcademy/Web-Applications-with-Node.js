const ItemsData = require('./items.data');
const CategoriesData = require('./categories.data');
const TodosData = require('./todos.data');

const init = (db) => {
    return Promise.resolve({
        items: new ItemsData(db),
        todos: new TodosData(db),
        categories: new CategoriesData(db),
    });
};

module.exports = { init };
