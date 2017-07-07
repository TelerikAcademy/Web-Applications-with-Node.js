const BaseData = require('./base/base.data');
const Item = require('../models/item.model');

class ItemsData extends BaseData {
    constructor(db) {
        super(db, Item, Item);
    }

    _isModelValid(model) {
        // custom validation 
        return super._isModelValid(model);
    }
}

module.exports = ItemsData;
