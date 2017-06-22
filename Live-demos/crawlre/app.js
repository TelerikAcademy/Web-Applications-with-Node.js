require('./polyfills');

const genresUrlBase = 'http://www.imdb.com/genre/';
const genres = ['animation', 'action',
    'fantasy', 'comedy', 'romance', 'drama',
    'horror', 'adventure'];

require('./models/extentions');

const { parseGenre } = require('./parsers/genre.parser');
const { parseMovie } = require('./parsers/movie.parser');

const movies = [];

const loadMovie = (queue) => {
    console.log('.');
    if (queue.isEmpty()) {
        return Promise.resolve();
    }

    const id = queue.pop();
    const url = 'http://www.imdb.com/title/' + id;
    return parseMovie(url)
        .then((movie) => {
            movies.push(movie);
            return loadMovie(queue);
        });
};

const loadMovies = (queue) => {
    const PARALEL_LOADS = 64;

    return Promise.all(
        Array.from({ length: PARALEL_LOADS })
            .map((_) => loadMovie(queue)))
        .then(() => {
            console.log(movies);
        });
};

const queue = require('./queue').getQueue();
const loadAll = () => {
    return Promise.all(
        genres.map((genre) => {
            const url = genresUrlBase + genre;
            return parseGenre(url)
                .then((g) => {
                    queue.pushMany(...g.moviesIds);
                });
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
    });

// Promise.all([
//     getMovieData('http://www.imdb.com/title/tt0114709'),
//     getMovieData('http://www.imdb.com/title/tt2250912'),
// ]).then(([m1, m2]) => {
//     console.log(m1);
//     console.log(m2);
// });
