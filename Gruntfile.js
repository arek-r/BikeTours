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
		}
	});
	//Load the plugins task
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-imagemin");

	//Default task(s)
	grunt.registerTask("default", ["sass", "imagemin"]);
};