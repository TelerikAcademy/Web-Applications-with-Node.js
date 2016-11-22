const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    powers: [{}]
});

mongoose.model("Superhero", schema);

module.exports = mongoose.model("Superhero");