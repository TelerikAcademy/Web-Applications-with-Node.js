'use strict';

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const protocol = 'mongodb:/';
const server = 'localhost:27017';
const databaseName = 'Students';

const connectionString = `${protocol}/${server}/${databaseName}`;
const connectionPromise = MongoClient.connect(connectionString);


connectionPromise.then((db) => {
    return db;
}).then((db) => {
    db.collection('Names')
        .find({})
        .toArray()
        .then((err, result) => {
            console.log(result);
        });
});

connectionPromise.then((db) => {
    console.log(db);
});

// MongoClient.connect(connectionString)
// .then((db) => {
//     db.collection()
//         .insert({
//             firstName: 'Ivan',
//             lastName: 'Kolev',
//             age: 22
//         })
//         .then((result) => {
//             console.log(result);
//         });
// })
// .catch((error) => {
//     console.log(error);
// })