const webdriver = require('selenium-webdriver');

let driver = null;

const async = require('../../../utils/async');

const waitSeconds = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
};

const waitFor = (selector) => {
    try {
        return driver.findElement(
            webdriver.By.css(selector)
        )
            .catch((err) => {
                return waitFor(selector);
            });
    } catch (err) {
        return waitSeconds(1)
            .then(() => waitFor(selector));
    }
};

const waitForMany = (selector) => {
    try {
        return driver.findElements(
            webdriver.By.css(selector)
        )
            .catch((err) => {
                return waitForMany(selector);
            });
    } catch (err) {
        return waitSeconds(1)
            .then(() => waitForMany(selector));
    }
};

const getText = (selector) => {
    return async()
        .then(() => waitFor(selector))
        .then((element) => element.getText());
};

const getTexts = (selector) => {
    return async()
        .then(() => waitForMany(selector))
        .then((elements) => {
            return Promise.all(
                elements.map((el) => el.getText())
            );
        });
};

const getSelected = (selector) => {
    return async()
        .then(() => waitFor(selector))
        .then((el) => el.isSelected());
};

const setValue = (selector, value) => {
    return async()
        .then(() => waitFor(selector))
        .then((el) => el.sendKeys(value));
};

const click = (selector) => {
    return async()
        .then(() => waitFor(selector))
        .then((el) => el.click());
};

module.exports = {
    setDriver(_driver) {
        driver = _driver;
    },
    waitFor, getText, getTexts, getSelected, setValue, click,
};
