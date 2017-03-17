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
		}
	});
	//Load the plugins task
	grunt.loadNpmTasks("grunt-sass");

	//Default task(s)
	grunt.registerTask("default", ["sass"]);
};