/* globals require module Promise*/
"use strict";

module.exports = function(models) {
    let { Superhero } = models;
    return {
        createSuperhero(name, secretIdentity, ...powers) {
            if (Array.isArray(powers[0])) {
                powers = powers[0];
            }

            var superhero = new Superhero({
                name,
                secretIdentity,
                powers
            });

            return new Promise((resolve, reject) => {
                superhero.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(superhero);
                });
            });
        },
        getAllSuperheroes() {
            return new Promise((resolve, reject) => {
                Superhero.find((err, superheroes) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(superheroes);
                });
            });
        },
        getSuperheroesWithPower(power) {
            return new Promise((resolve, reject) => {
                Superhero.find({
                    powers: {
                        $in: [power]
                    }
                }, (err, superheroes) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(superheroes);
                });
            });
        }
    };
};