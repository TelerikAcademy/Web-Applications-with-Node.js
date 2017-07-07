/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const { setupDriver } = require('./utils/setup-driver');
const webdriver = require('selenium-webdriver');


describe('Items routes', () => {
    let driver = null;

    // let driver =
    //     new webdriver.Builder()
    //         .build();

    const appUrl = 'http://localhost:3002';

    beforeEach(() => {
        driver = setupDriver('chrome');
    });

    it('expect h1 with text "I am Home Welcome"', (done) => {
        driver.get(appUrl)
            .then(() => {
                return driver.findElement(
                    webdriver.By.css('h1')
                );
            })
            .then((el) => {
                return el.getText();
            })
            .then((text) => {
                expect(text).to.contain('I am Home');
                done();
            });
    });

    it('expect h1 with text "I am Home Welcome"', (done) => {
        driver.get(appUrl)
            .then(() => {
                return driver.findElement(
                    webdriver.By.css('h1')
                );
            })
            .then((el) => {
                return el.getText();
            })
            .then((text) => {
                expect(text).to.contain('I am Not Home');
                done();
            });
    });
});
