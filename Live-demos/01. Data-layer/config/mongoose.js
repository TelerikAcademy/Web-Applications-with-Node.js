/* globals module global */
module.exports = function(mongoose) {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/superheroes");
};