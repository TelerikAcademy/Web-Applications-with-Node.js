var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BattleGame');

var userSchema = new mongoose.Schema({
	username: String,
	password: String
});

userSchema.statics.uniqueUsername = function (username, callback) {
	User.find()
		.where('username').equals(username)
		.exec(function (err, users) {
			if (err) throw err;
			if (users.length !== 0) {
				throw {
					message: 'Username already exists'
				};
			}
			callback();
		});
};

var gameSchema = new mongoose.Schema({
	title: String,
	state: String,
	red: mongoose.Schema.Types.ObjectId,
	blue: mongoose.Schema.Types.ObjectId
});

var User = mongoose.model('User', userSchema);
var Game = mongoose.model('Game', gameSchema);

var username = 'DonchoMinkov';

User.findOne()
	.where('username').equals(username)
	.exec(function (err, user) {
		if (err) throw err;
		Game.find()
			.or([{
				blue: user.id
			}, {
				red: user.id
			}])
			.where('state').equals('open')
			.sort('title')
			.select('title')
			.exec(function (err, gameTitles) {
				if (err) throw err;
				console.log(gameTitles);
			});
	});

// User.findOne().where('username').equals(username)
// 	.exec(function (err, user) {
// 		var games = [new Game({
// 				title: 'Running as Red',
// 				state: 'running',
// 				red: user.id
// 			}),
// 			new Game({
// 				title: 'Running as Blue',
// 				state: 'running',
// 				blue: user.id
// 			}),
// 			new Game({
// 				title: 'Open as Red',
// 				state: 'open',
// 				red: user.id
// 			}),
// 			new Game({
// 				title: 'Open as Blue',
// 				state: 'open',
// 				blue: user.id
// 			})
// 		];
// 		Game.create(games, function (err) {
// 			if (err) throw err;
// 			Game.find().exec(function (err, games) {
// 				console.log(games);
// 			});
// 		});
// 	});