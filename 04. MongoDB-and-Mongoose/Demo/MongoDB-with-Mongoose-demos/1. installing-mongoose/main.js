var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BattleGame');

var Unit = mongoose.model('Unit', {
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

var unit = new Unit({
	type: 'ranger',
	attack: 7,
	armor: 2,
	range: 3,
	speed: 1,
	life: 10,
	position: {
		x: 8,
		y: 7
	}
});

unit.save(function (err) {
	if (err) throw err;
	Unit.find({
		type: 'ranger'
	})
		.exec(function (err, units) {
			if (err) throw err;
			for (var i = 0; i < units.length; i++) {
				console.log(units[i]);
			}
		});
});