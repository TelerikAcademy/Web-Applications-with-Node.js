/* globals require console module String */

const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    }
});