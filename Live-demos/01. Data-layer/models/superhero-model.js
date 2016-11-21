/* globals require module String */
"use strict";

const mongoose = require("mongoose");

let superheroSchema = new mongoose.Schema({
    name: String,
    secretIdentity: String,
    //name
    powers: [{}],
    //name, _id
    fractions: [{}]
});

mongoose.model("Superhero", superheroSchema);

let SuperheroModel = mongoose.model("Superhero");

module.exports = SuperheroModel;