const { JSDOM } = require('jsdom');

const initDomParser = (html) => {
    return new Promise((resolve) => {
        const dom = new JSDOM(html);
        const $ = require('jquery')(dom.window);
        resolve($);
    });
};


module.exports = initDomParser;
