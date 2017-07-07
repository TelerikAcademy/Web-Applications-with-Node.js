const init = (data) => {
    const controller = {
        getAll(req, res) {
            return data.items.getAll()
                .then((items) => {
                    return res.render('items/all', {
                        context: items,
                    });
                });
        },
    };

    return controller;
};


module.exports = { init };
