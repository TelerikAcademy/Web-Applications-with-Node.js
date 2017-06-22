const { Movie } = require('../movie.model');
const initParser = require('../../dom-parser');

const { DETAILS } = require('../../selectors');


// instance
Movie.prototype.instanceMethod = () => {

};

// static
Movie.fromHtml = (html) => {
    return initParser(html)
        .then(($) => {
            let title = $(DETAILS.TITLE_SELECTOR).html();
            title = title.substring(0, title.indexOf('&nbsp;<span '));
            const posterUrl = $(DETAILS.POSTER_IMG_URL).attr('src');
            return new Movie(title, posterUrl);
        });
};
