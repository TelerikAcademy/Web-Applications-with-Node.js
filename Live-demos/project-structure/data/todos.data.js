const BaseData = require('./base/base.data');

const validator = {
    isValid() {
        return true;
    },
};

class TodosData extends BaseData {
    constructor(db) {
        super(db, { name: 'Todo' }, validator);
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
