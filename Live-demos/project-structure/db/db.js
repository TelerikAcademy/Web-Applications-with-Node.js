const { MongoClient } = require('mongodb');

const init = (connectionString) => {
    return MongoClient.connect(connectionString);
};

module.exports = { init };
