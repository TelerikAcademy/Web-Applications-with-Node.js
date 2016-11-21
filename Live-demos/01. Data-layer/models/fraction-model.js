/* globals require module String */
"use strict";

const mongoose = require("mongoose");

let fractionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    superheroes: {
        type: [{}],
        default: []
    }
});

mongoose.model("Fraction", fractionSchema);

let FractionModel = mongoose.model("Fraction");

module.exports = FractionModel;