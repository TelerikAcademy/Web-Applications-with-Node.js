const BaseData = require('./base/base.data');

const Todo = require('../models/todo.model');

class TodosData extends BaseData {
    constructor(db) {
        super(db, Todo, Todo);
    }

    filterByIsDone(isDone) {
        return this.filterBy({ isDone });
    }

    // create(model) {
    //     return super.create(model)
    //         .then((dbModel) => {
    //             this.db.collection('categories');
    //         });
    // }
}

module.exports = TodosData;
