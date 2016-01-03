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

var Unit = mongoose.model('Unit', unitSchema);

Unit.find().exec(function (err, units) {
	console.log('Before remove the units are: %d', units.length);
	var unit = units[0];

	unit.remove(function (err) {
		if (err) throw err;
		Unit.find()
			.exec(function (err, units) {
				console.log('After remove the units are: %d', units.length);
			});
	});
});