const attachTo = (app, data) => {
    const controller = require('./controller').init(data);

    app.get('/items', (req, res) => {
        // auth
        return controller.getAll(req, res);
    });

    app.get('/items/form', (req, res) => {
        return res.render('items/form');
    });

    app.post('/items', (req, res) => {
        const item = req.body;

        // validate item
        return data.items.create(item)
            .then((dbItem) => {
                return res.redirect('/items');
            })
            .catch((err) => {
                // connect-flash
                req.flash('error', err);
                return res.redirect('/items/form');
            });
    });
};

module.exports = { attachTo };
