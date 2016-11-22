/* globals require */

const pug = require("pug");
const fs = require("fs");

class Superhero {
    constructor(name, ...powers) {
        this.name = name;
        this.powers = powers;
    }
}

let model = {
    title: "Superheroes List",
    superheroes: [
        new Superhero("Dr. Strange", "Magic", "Martial arts"),
        new Superhero("Wonderwoman", "Strong", "Flying"),
        new Superhero("Ironfist", "Martial arts"),
        new Superhero("Powerless")
    ]
};

let html = pug.renderFile("./views/about.pug", model);

fs.writeFileSync("about.html", html, "utf8");