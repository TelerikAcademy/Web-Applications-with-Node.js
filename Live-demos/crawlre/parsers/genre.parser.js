const { Genre } = require('../models/genre.model');

const parseGenre = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Invalid url');
            }

            return response.text();
        })
        .then((html) => {
            const genre = Genre.fromHtml(html);
            return genre;
        });
};

module.exports = { parseGenre };
