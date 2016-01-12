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

unitSchema.methods.move = function (to, callback) {
	var dx = Math.abs(this.position.x - to.x),
		dy = Math.abs(this.position.y - to.y);
	if ((dx === 0 && dy === 0) || dx > this.speed || dy > this.speed) {
		throw {
			message: 'Invalid move position',
			errCode: 'INV_MOVE_POS',
			toString: function () {
				return this.message;
			}
		};
	}
	this.position.x = to.x;
	this.position.y = to.y;
	this.update({
		position: {
			x: to.x,
			y: to.y
		}
	}, callback);
};

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