var events = require('../data/events'),
    constants = require('../common/constants');

var CONTROLLER_NAME = 'events';

module.exports = {
    getCreate: function (req, res) {
        if (!req.user.phoneNumber) {
            // req.session.error = 'Sorry...';
            // res.render(CONTROLLER_NAME + '/users/profile'); // TODO:
        }

        res.render(CONTROLLER_NAME + '/create', {
            categories: constants.categories,
            initiatives: constants.initiatives,
            seasons: constants.seasons
        });
    },
    postCreate: function(req, res) {
        var event = req.body;
        var user = req.user;
        events.create(
            event,
            {
                username: user.username,
                phoneNumber: user.phoneNumber
            },
            function (err, event) {
                if (err) {
                    var data = {
                        categories: constants.categories,
                        initiatives: constants.initiatives,
                        seasons: constants.seasons,
                        errorMessage: err
                    };
                    res.render(CONTROLLER_NAME + '/create', data);
                }
                else {
                    res.redirect('/events/details/' + event._id);
                }
            })
    },
    getActive: function(req, res) {
        var page = req.query.page;
        var pageSize = req.query.pageSize;

        // TODO: get user initatives and season + 'Public' + 'None'

        events.active(page, pageSize, ['Public'], ['None'], function(err, data) {
            res.render(CONTROLLER_NAME + '/active', {
                data: data
            });
        });
    }
};