var Event = require('mongoose').model('Event'),
    constants = require('../common/constants');

var cache = {
    expires: undefined,
    data: undefined
};

module.exports = {
    create: function(event, user, callback) {
        if (constants.categories.indexOf(event.category) < 0
                || constants.initiatives.indexOf(event.initiative) < 0
                || constants.seasons.indexOf(event.season) < 0) {
            callback('Invalid category, initiative or season!');
            return;
        }
        else {
            event.type = {
                initiative: event.initiative,
                season: event.season
            }
        }

        event.creator = user.username;
        event.phoneNumber = user.phoneNumber
        event.date = new Date();
        event.date.setMonth(10); // TODO: fix

        if (event.latitude && event.longitude) {
            event.location = {
                latitude: event.latitude,
                longitude: event.longitude
            }
        }

        Event.create(event, callback);
    },
    active: function(page, pageSize, initiatives, seasons, callback) {
        page = page || 1;
        pageSize = pageSize || 10;

        if (page == 1 && cache.expires && cache.expires < new Date()) {
            callback(null, cache.data);
            return;
        }

        Event
            .find({
                $and: [
                    { 'type.initiative': { $in: initiatives } },
                    { 'type.season': { $in: seasons } }
                ]
            })
            .sort({
                date: 'desc'
            })
            .limit(pageSize)
            .skip((page - 1) * pageSize)
            .exec(function(err, foundEvents) {
                if (err) {
                    callback(err);
                    return;
                }

                Event.count().exec(function(err, numberOfEvents) {
                    var data = {
                        events: foundEvents,
                        currentPage: page,
                        pageSize: pageSize,
                        total: numberOfEvents
                    };

                    callback(err, data);

                    cache.data = data;
                    cache.expires = new Date() + 10;
                });
            })
    }
};