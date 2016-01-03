module.exports = function (grunt) {
	grunt.initConfig({
		project: {
			app: 'app',
			build: 'build'
		},
		jshint: {
			app: ['Gruntfile.js', '<%= project.app %>/scripts/**/*.js']
		},
		stylus: {
			app: {
				files: {
					'<%= project.app %>/styles/main.css': '<%= project.app %>/styles/main.styl',
					'<%= project.app %>/styles/logger.css': '<%= project.app %>/styles/logger.styl'
				}
			}
		},
		csslint: {
			app: ['<%= project.app %>/styles/*.css']
		},
		concat: {
			js: {
				files: {
					'.tmp/concat/scripts/build.js': ['<%= project.app %>/scripts/**/*.js']
				}
			},
			css: {
				files: {
					'.tmp/concat/styles/build.css': ['<%= project.app %>/styles/**/*.css']
				}
			}
		},
		uglify: {
			js: {
				files: {
					'.tmp/min/scripts/build.min.js': '.tmp/concat/scripts/build.js'
				}
			}
		},
		cssmin: {
			css: {
				files: {
					'.tmp/min/styles/build.min.css': '.tmp/concat/styles/build.css'
				}
			}
		},
		copy: {
			js: {
				files: {
					'<%= project.build %>/scripts/build.min.js': '.tmp/min/scripts/build.min.js'
				}
			},
			css: {
				files: {
					'<%= project.build %>/styles/build.min.css': '.tmp/min/styles/build.min.css'
				}
			}
		},
		processhtml: {
			build: {
				files: {
					'<%= project.build %>/index.html': ['<%= project.app %>/index.html']
				}
			}
		},
		clean: {
			build: {
				src: ['.tmp', '<%= project.build %>']
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
		watch: {
			js: {
				files: ['Gruntfile.js', '<%= project.app %>/scripts/**/*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['<%= project.app %>/styles/**/*.styl'],
				tasks: ['stylus', 'csslint'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['<%= project.app %>/index.html'],
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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['jshint', 'stylus', 'csslint', 'clean', 'concat', 'uglify', 'cssmin', 'copy', 'processhtml']);
	grunt.registerTask('serve', ['jshint', 'stylus', 'csslint', 'connect', 'watch']);

};