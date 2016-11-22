/* globals require module */

const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    powers: [{}],
    fractions: [{}]
});
mongoose.model("Superhero", schema);

module.exports = mongoose.model("Superhero");