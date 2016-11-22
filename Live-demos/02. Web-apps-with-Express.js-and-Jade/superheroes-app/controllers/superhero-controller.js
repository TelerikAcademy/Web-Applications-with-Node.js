module.exports = function(data) {
    return {
        getAll(req, res) {
            data.getAllSuperheroes()
                .then(superheroes => {
                    res.render("superheroes-list", {
                        result: superheroes
                    });
                });
        },
        getById(req, res) {
            data.getSuperheroById(req.params.id)
                .then(superhero => {
                    if (superhero === null) {
                        return res.status(404)
                            .redirect("/error");
                    }

                    return res.render("superheroes-details", {
                        result: superhero
                    });
                });
        },
        create(req, res) {
            let body = req.body;
            data.createSuperhero(body.name, body.powers, body.fractions)
                .then(() => {
                    res.redirect("/superheroes");
                });
        }
    };
};