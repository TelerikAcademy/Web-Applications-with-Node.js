/* eslint-disable no-console */

const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');


gulp.task('server:start', () => {
    return require('./server');
});

gulp.task('pre-test', () => {
    return gulp.src([
        './data/**/*.js',
        './app/**/*.js',
        './config/**/*.js',
        './db/**/*.js',
        './models/**/*.js',
        './server.js',
    ])
        .pipe(istanbul({
            includeUntested: true,
        }))
        .pipe(istanbul.hookRequire());
});

gulp.task('tests:unit', ['pre-test'], () => {
    return gulp.src([
        './test/unit/**/*.js',
        './test/integration/**/*.js',
    ])
        .pipe(mocha({
            reporter: 'nyan',
        }))
        .pipe(istanbul.writeReports());
});

const config = {
    connectionString: 'mongodb://localhost/items-db-test',
    port: 3002,
};

gulp.task('test-server:start', () => {
    return Promise.resolve()
        .then(() => require('./db').init(config.connectionString))
        .then((db) => require('./data').init(db))
        .then((data) => require('./app').init(data))
        .then((app) => {
            app.listen(
                config.port,
                () => console.log(`Magic happends at :${config.port}`));
        });
});

const { MongoClient } = require('mongodb');

gulp.task('test-server:stop', () => {
    return MongoClient.connect(config.connectionString)
        .then((db) => {
            return db.dropDatabase();
        });
});

gulp.task('tests:browser', ['test-server:start'], () => {
    return gulp.src('./test/browser/items/create-item.js')
        .pipe(mocha({
            reporter: 'nyan',
            timeout: 10000,
        }))
        .once('end', () => {
            gulp.start('test-server:stop');
        });
});
