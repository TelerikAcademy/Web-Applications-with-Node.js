var mongoose = require('mongoose');
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

var maxX = 8,
	maxY = 8;

unitSchema.virtual('maxX').get(function () {
	return maxX;
});

unitSchema.virtual('maxX').set(function (value) {
	maxX = value;
});

unitSchema.virtual('maxY').get(function () {
	return maxY;
});

unitSchema.virtual('maxY').set(function (value) {
	maxY = value;
});

unitSchema.path('position.x').validate(function (value) {
	return 0 <= value && value < this.maxX;
});

unitSchema.path('position.y').validate(function (value) {
	return 0 <= value && value < this.maxY;
});

var Unit = mongoose.model('Unit', unitSchema);
module.exports = Unit;