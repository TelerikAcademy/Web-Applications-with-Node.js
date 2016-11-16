module.exports = function (grunt) {

	grunt.initConfig({
		project: {
			app: 'app'
		},
		watch: {
			js: {
				files: ['<%= project.app %>/scripts/**/*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			styles: {
				files: ['<%= project.app %>/styles/**/*.styl'],
				tasks: ['stylus'],
				options: {
					livereload: true
				}
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= project.app %>/**/*.html',
					'<%= project.app %>/**/*.css',
					'<%= project.app %>/**/*.styl'
				]
			}
		},
		connect: {
			options: {
				port: 9001,
				livereload: 35729,
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'<%= project.app %>'
					]
				}
			}
		},
		jshint: {
			all: [
				'Gruntfile.js',
				'<%= project.app %>/scripts/**/*.js'
			]
		},
		stylus: {
			compile: {
				files: {
					'<%= project.app %>/styles/main.css': '<%= project.app %>/styles/main.styl'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('serve', ['jshint', 'stylus', 'connect', 'watch']);
};