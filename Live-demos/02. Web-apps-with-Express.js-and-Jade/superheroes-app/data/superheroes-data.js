/* globals module Promise */

module.exports = function(models) {
    let Superhero = models.Superhero;

    return {
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
        getSuperheroById(id) {
            return new Promise((resolve, reject) => {
                Superhero.findOne({ _id: id }, (err, superhero) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(superhero);
                });
            });
        },
        createSuperhero(name, powers, fractions) {
            let superhero = new Superhero({
                name,
                powers,
                fractions
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
    };
};