/* globals require console */

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

let Superhero = require("./models/superhero-model");

mongoose.connect("mongodb://localhost/superheroes");

let app = express();

app.use(morgan("combined"));

app.use("/static", express.static("public"));

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.render("index");
});

let superheroesRouter = new express.Router();

superheroesRouter.get("/", function(req, res) {
        Superhero.find((err, superheroes) => {
            res.render("superheroes-list", {
                result: superheroes
            });
        });
    })
    .get("/create", function(req, res) {
        res.render("superhero-create");
    })
    .get("/:id", function(req, res) {
        Superhero.findOne({
                _id: req.params.id
            },
            (err, superhero) => {
                res.render("superhero-details", {
                    result: superhero
                });
            });
    })
    .post("/", function(req, res) {
        let superhero = new Superhero(req.body);
        superhero.save((err) => {
            res.redirect("superheroes");
        });
    });


app.use("/superheroes", superheroesRouter);

const port = 3001;

app.listen(port, () => {
    console.log(`App running at :${port}`);
});