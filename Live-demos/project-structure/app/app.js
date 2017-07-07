/* globals __dirname */

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const init = (data) => {
    const app = express();

    // confing start 
    app.set('view engine', 'pug');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/libs', express.static(path.join(__dirname, '../node_modules/')));

    app.use(cookieParser('keyboard cat'));
    app.use(session({ cookie: { maxAge: 60000 } }));

    app.use(require('connect-flash')());
    app.use((req, res, next) => {
        res.locals.messages = require('express-messages')(req, res);
        next();
    });
    // confing end

    require('./routers')
        .attachTo(app, data);

    return Promise.resolve(app);
};

module.exports = {
    init,
};
