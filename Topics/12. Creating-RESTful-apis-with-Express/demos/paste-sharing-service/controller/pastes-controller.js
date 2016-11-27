'use strict';

module.exports = function (data) {
    return {
        getPastes(req, res) {
            // use query parameters for paging
            // it's a good idea to provide default parameters in case of invalid input
            const pageNumber = +req.query.pageNumber || 0,
                pageSize = +req.query.pageSize || 5;
            
            // negative page numbers don't make sense
            if(pageNumber < 0) {
                pageNumber = 0;
            }

            // don't allow negative pages
            if(pageSize < 0) {
                pageSize = 5;
            }

            // it's good practice to have an upped bound on page size, otherwise your endpoint might be exploited
            if(pageSize > 50) {
                pageSize = 50;
            }

            data.getPagedPastes(pageNumber, pageSize, {
                withDeleted: false,
                withDetails: req.isAuthenticated()
            })
                .then(pastes => res.status(200).json(pastes))
                .catch(error => {
                    console.log(error);
                    res.status(500).json(error);
                });
        },
        createPaste(req, res) {
            const author = req.user,
                lang = req.body.lang,
                content = req.body.content;
            
            // if invalid data, respond with meaningful status code and message
            if (!content) {
                res.status(400).json({
                    success: false,
                    message: 'Paste must have content!'
                });

                return;
            }

            data.createPaste({ content, lang }, author)
                .then(dbPaste => res.status(201).json(dbPaste))
                .catch(error => {
                    console.log(error);
                    res.status(500).json(error);
                });
        },
        pasteById(req, res) {
            // code with middleware
            res.status(200).json(req.data.paste);

            // code without middleware
            // const id = req.params.pasteId;

            // data.pasteById(id)
            //     .then(paste => res.status(200).json(paste))
            //     .catch(error => {
            //         console.log(error);
            //         res.status(500).json(error);
            //     });
        },
        updatePaste(req, res) {
            const id = req.params.pasteId,
                newContent = req.body.content,
                newLang = req.body.lang;

            data.updatePasteById(id, {
                content: newContent,
                lang: newLang
            })
                .then(dbPaste => res.status(200).json(dbPaste))
                .catch(error => {
                    console.log(error);
                    res.status(500).json(error);
                });
        },
        removePaste(req, res) {
            const id = req.params.pasteId;

            data.removePasteById(id)
                .then(removedPaste => res.status(200).json(removedPaste))
                .catch(error => {
                    console.log(error);
                    res.status(500).json(error);
                });
        },
        createComment(req, res) {
            const pasteId = req.params.pasteId,
                content = req.body.content,
                author = req.user;

            data.createCommentForPaste(pasteId, { content }, author)
                .then(comment => res.status(201).json(comment))
                .catch(error => {
                    console.log(error);
                    res.status(500).json(error);
                });
        },
        getCommentsForPaste(req, res) {
            // capitalizing on middleware
            res.status(200).json(req.data.paste.comments);
        }
    }
}