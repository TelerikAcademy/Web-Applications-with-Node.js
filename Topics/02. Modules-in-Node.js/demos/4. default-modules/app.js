/* globals require console */

let modelsFactory = require("./models");
console.log(modelsFactory);

let batman = modelsFactory.getSuperhero("Batman", "Bruce Wayne", modelsFactory.getPower("utility belt"), modelsFactory.getPower("intelligence"));
console.log(batman);