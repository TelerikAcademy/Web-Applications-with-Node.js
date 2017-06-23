require('./polyfills');

const urlBuilder = {
    buildGenreUrl(genre, page) {
        const url = `http://www.imdb.com/search/title` +
            `?genres=${genre}&view=advanced&page=${page}`;
        return url;
    },
};

const genres = ['animation', 'action',
    'fantasy', 'comedy', 'romance', 'drama',
    'horror', 'adventure'];

require('./models/extentions');
const printer = require('./utils/printer');
const { getQueue } = require('./queue');

const { parseGenre } = require('./parsers/genre.parser');
const { parseMovie } = require('./parsers/movie.parser');

const movies = [];

const loadMovie = (q) => {
    printer.print('.');
    if (q.isEmpty()) {
        return Promise.resolve();
    }

    const id = q.pop();
    const url = 'http://www.imdb.com/title/' + id;
    return parseMovie(url)
        .then((movie) => {
            movies.push(movie);
            return loadMovie(q);
        });
};

const loadMovies = (q) => {
    const PARALEL_LOADS = 1024;

    return Promise.all(
        Array.from({ length: PARALEL_LOADS })
            .map((_) => loadMovie(q)));
};


const loadAll = () => {
    const pagesCount = 15;
    const queue = getQueue();
    return Promise.all(
        genres.map((genre) => {
            return Promise.all(
                Array.from({ length: pagesCount })
                    .map((_, index) => index + 1)
                    .map((page) => {
                        printer.printLine(`Loading ${genre} on page ${page}`);
                        const url = urlBuilder.buildGenreUrl(genre, page);
                        return Promise.resolve()
                            .then(() => parseGenre(url))
                            .then((g) => {
                                queue.push(...g.moviesIds);
                                // return loadMovies(queue);
                            });
                    })
            );
        }))
        .then(() => {
            return loadMovies(queue);
        });
};

const start = new Date();
loadAll()
    .then(() => {
        const end = new Date();
        console.log(end - start);
        console.log(movies.length);
    });
