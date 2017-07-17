let driver = null;

const ui = require('./ui');

const async = require('../../../utils/async');

const createItem = (text) => {
    return async()
        .then(() => ui.click('#nav-btn-toggle-items'))
        .then(() => ui.click('#nav-btn-item-add'))
        .then(() => ui.setValue('input[name="text"]', text))
        .then(() => ui.click('form button'));
};

module.exports = {
    setDriver(_driver) {
        driver = _driver;
        ui.setDriver(driver);
    },

    createItem,
};
