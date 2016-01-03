var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BattleGame');

var Schema = mongoose.Schema;
var unitSchema = new Schema({
	type: String,
	attack: Number,
	armor: Number,
	range: Number,
	speed: Number,
	life: Number,
	position: {
		x: Number,
		y: Number
	}
});

var gameSchema = new Schema({
	title: String,
	state: String
});

gameSchema.virtual('escapedTitle').get(function () {
	return String(this.title).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
});

var Unit = mongoose.model('Unit', unitSchema);

Unit.find({
	type: 'ranger'
})
	.exec(function (err, units) {
		if (err) throw err;
		var firstRanger = units[0];
		console.log(firstRanger);

		//valid move
		firstRanger.move({
			x: firstRanger.position.x + 1,
			y: firstRanger.position.y
		}, function (err) {
			if (err) throw err;
			console.log('Unit updated!');
		});

		// // invalid move
		// firstRanger.move({
		// 	x: firstRanger.position.x + 123,
		// 	y: firstRanger.position.y
		// }, function (err) {
		// 	if (err) throw err;
		// 	console.log('Unit updated!');
		// });
	});