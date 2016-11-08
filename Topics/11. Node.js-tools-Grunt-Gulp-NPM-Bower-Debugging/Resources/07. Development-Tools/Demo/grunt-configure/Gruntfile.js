module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			app: ['Gruntfile.js', 'app/scripts/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
};