'use strict';

const data = require('../data');

module.exports = {
    pasteById(req, res, next) {
        data.pasteById(req.params.pasteId)
            .then(paste => {
                if(!paste) {
                    res.status(404).json({ message: 'No paste with such id!' });
                    return;
                }

                req.data = req.data || {};
                req.data.paste = paste;
                next();
            })
            .catch(error => res.status(500).json({ message: 'It broke!(again)' }));
    }
};