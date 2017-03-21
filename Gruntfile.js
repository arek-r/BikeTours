module.exports = function(grunt) {
	//Project configuration
	grunt.initConfig({

		clean: {
			contents:["build/*", "build/css/*"]
		},

		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					"css/style.css" : "sass/style.sass"
				}
			}
		},

		cssmin: {
			target: {
				files: [{
					src: "css/style.css",
					dest: "build/css/style.min.css"
				}]
			}
		},

		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			dist: {
				files: [{
					src: "index.html",
					dest: "build/index.html"
				}]
			}	
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: "images/",
					src: ["**/*.{png,jpg,gif}"],
					dest: "images/build/"
				}]
			}
		},

		watch: {
			scripts: {
				files: ["sass/*.sass"],
				tasks: ["sass"],
				options: {
					spawn: false,
				}
			}
		},

		browserSync: {
			bsFiles: {
				src: ["**/*.{css,html}"],
			},
			options: {
				watchTask: true,
				server: "./",
			}
		}
	});

	//Load the plugins task
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");

	//Default task(s)
	grunt.registerTask("dev", ["sass", "browserSync", "watch"]);
	grunt.registerTask("build", ["clean", "cssmin", "htmlmin", "imagemin"]);
};