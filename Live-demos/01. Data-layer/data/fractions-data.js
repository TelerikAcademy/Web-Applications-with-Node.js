/* globals module Promise */

function getSuperheroesByNames(Superhero, ...names) {
    return new Promise((resolve, reject) => {
        Superhero.find({
            name: { $in: names }
        }, (err, superheroes) => {
            if (err) {
                return reject(err);
            }

            return resolve(superheroes);
        });
    });
}

function saveFraction(Fraction, name, ...superheroesFull) {
    let superheroes = superheroesFull.map(superhero => {
        return {
            _id: superhero._id,
            name: superhero.name
        };
    });

    let fraction = new Fraction({ name, superheroes });

    return new Promise((resolve, reject) => {
        fraction.save(err => {
            if (err) {
                return reject(err);
            }

            return resolve(fraction);
        });
    });
}

function addFractionToSuperhero(Superhero, superhero, fraction) {
    superhero.fractions.push({
        _id: fraction._id,
        name: fraction.name
    });

    return new Promise((resolve, reject) => {
        superhero.save(err => {
            if (err) {
                return reject(err);
            }

            return resolve(superhero);
        });
    });
}

module.exports = function(models) {
    let { Fraction, Superhero } = models;

    return {
        createFraction(name, ...superheroNames) {
            if (Array.isArray(superheroNames[0])) {
                superheroNames = superheroNames[0];
            }

            let superheroes;
            let fraction;

            return getSuperheroesByNames(Superhero, ...superheroNames)
                .then(dbSuperheroes => {
                    superheroes = dbSuperheroes;
                    return saveFraction(Fraction, name, ...superheroes);
                })
                .then(dbFraction => {
                    fraction = dbFraction;
                    let superheroesUpdatedPromises = superheroes
                        .map(superhero => addFractionToSuperhero(Superhero, superhero, fraction));

                    return Promise.all(superheroesUpdatedPromises);
                })
                .then(() => {
                    return fraction;
                });
        }
    };
};