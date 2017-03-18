module.exports = function(grunt) {
	//Project configuration
	grunt.initConfig({
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
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");

	//Default task(s)
	grunt.registerTask("default", ["sass", "imagemin", "browserSync", "watch"]);
};