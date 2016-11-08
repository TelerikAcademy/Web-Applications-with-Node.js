var mongoose = require('mongoose');
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

mongoose.model('User', userSchema);