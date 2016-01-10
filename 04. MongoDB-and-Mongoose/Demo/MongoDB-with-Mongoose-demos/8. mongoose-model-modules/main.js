var mongoose = require('mongoose'),
	fs = require('fs');
mongoose.connect('mongodb://localhost/BattleGame');

var modelsPath = __dirname + '/models';
fs.readdirSync(modelsPath).forEach(function (file) {
	if (file.indexOf('.js') >= 0) {
		require(modelsPath + '/' + file);
	}
});

var Game = mongoose.model('Game'),
	User = mongoose.model('User');


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