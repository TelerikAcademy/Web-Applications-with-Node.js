var Db = require('mongodb').Db,
	MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server;

var mongoClient = new MongoClient(new Server('localhost', 27017));

function readFrom(db, collectionName, callback) {
	var collection = db.collection(collectionName);
	collection.find().toArray(function (err, data) {
		if (err) throw err;
		console.dir(data);
		if (callback) {
			callback(data);
		}
	});
}

function insertInto(db, collectionName, object, callback) {
	var collection = db.collection(collectionName);
	console.log('Inserting ' + object + ' into collection ' + collectionName);
	collection.insert(object, function (err, data) {
		console.log(object + ' inserted into collection ' + collectionName);
		if (callback) {
			callback(data);
		}
	});
}

mongoClient.open(function (err, mongoclient) {
	var db = mongoclient.db('TestingSystem');

	var question = {
		text: 'What is MongoDB?',
		answers: [{
			text: 'NoSQL database',
			correct: true
		}, {
			text: 'Document-based database',
			correct: true
		}, {
			text: 'Relational datatase',
			correct: false
		}, {
			text: 'File system',
			correct: false
		}, {
			text: 'Node.js plugin for using Web resources',
			correct: false
		}]
	};

	readFrom(db, 'Questions');
	insertInto(db, 'Questions', question, function () {
		readFrom(db, 'Questions');
	});
});