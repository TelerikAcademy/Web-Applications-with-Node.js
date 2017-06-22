const { Genre } = require('../genre.model');
const initParser = require('../../dom-parser');

const { DETAILS } = require('../../selectors');

// static
Genre.fromHtml = (html) => {
    return initParser(html)
        .then(($) => {
            const name = $('#header h1').html();
            const ids = [];
            $('table.results tbody td.image a')
                .each((_, el) => {
                    '/title/tt3606752/';
                    const href = $(el).attr('href');
                    const id = href.substr('/title/'.length);
                    ids.push(id);
            });
            return new Genre(name, ids);
        });
};
