'use strict';

module.exports = data => {
    const { pastes } = data;

    return {
        all(req, res) {
            console.log(req.query);
            const page = +req.query.page || 0,
                pageSize = +req.query.pageSize || 5;

            pastes.paged(page, pageSize)
                  .then(pagedPastes => res.status(200).json(pagedPastes))
                  .catch(error => res.json(500).json(error));
        },
        create(req, res) {
            const paste = req.body.paste;

            pastes.create(paste)
                  .then(result => res.status(201).json(result))
                  .catch(err => res.status(500).json(err));
        },
        update(req, res) {
            const options = req.body;

            options._id = req.params.id;

            pastes.update(options)
                  .then(success => res.status(200).json(success))
                  .catch(err => res.status(500).json(err));
        },
        delete(req, res) {
            pastes.delete(req.params.id)
                  .then(success => res.status(200).json(success))
                  .catch(err => res.status(500).json(err));
        },
        createComment(req, res) {
            pastes.createComment(req.params.id, req.body.comment)
                    .then(success => res.status(200).json(success))
                        .catch(err => res.status(500).json(err));
        }
    }
}