var mongoose = require('mongoose');

var requiredMessage = '{PATH} is required';

module.exports.init = function() {
    var eventSchema = mongoose.Schema({
        title: { type: String, required: requiredMessage },
        description: { type: String, required: requiredMessage },
        category: { type: String, required: requiredMessage },
        type: {
            initiative: { type: String, required: requiredMessage },
            season: { type: String, required: requiredMessage },
        },
        location: {
            longitude: Number,
            latitude: Number
        },
        date: { type: Date, required: requiredMessage },
        creator: { type: String, required: requiredMessage },
        phoneNumber: { type: String, required: requiredMessage },
        comments: [{
            username: String,
            content: String
        }]
    });

    var Event = mongoose.model('Event', eventSchema);
};



