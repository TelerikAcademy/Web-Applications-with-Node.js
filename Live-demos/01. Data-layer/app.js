/* globals require */
"use strict";

const mongoose = require("mongoose");

require("./config/mongoose")(mongoose);


let Superhero = require("./models/superhero-model");
let Fraction = require("./models/fraction-model");

const data = require("./data")({ Superhero, Fraction });

data.createSuperhero("Batman", "Bruce Wayne", "Utility belt", "Intelligence", "Martial arts")
    .then(() => {
        return data.createSuperhero("Batgirl", "Barbara Gordon", "Utility belt", "Intelligence", "Martial arts");
    })
    .then(() => {
        return data.createSuperhero("Nightwing", "Richard (Dick) Grayson", "Utility belt", "Intelligence", "Martial arts");
    });

let fractionName = "The bat family";

data.createFraction(fractionName, "Batman", "Batgirl", "Nightwing")
    .then(fraction => {
        console.log(`Fraction ${fraction.name} created!`);
    });