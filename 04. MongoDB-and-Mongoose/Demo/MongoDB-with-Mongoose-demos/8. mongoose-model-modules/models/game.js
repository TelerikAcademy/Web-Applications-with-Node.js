var mongoose = require('mongoose');
var gameSchema = new mongoose.Schema({
	title: String,
	state: String,
	red: mongoose.Schema.Types.ObjectId,
	blue: mongoose.Schema.Types.ObjectId
});

mongoose.model('Game', gameSchema);