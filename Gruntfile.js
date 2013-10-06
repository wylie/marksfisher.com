module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			compile: {
				src: "dev/less/basic-starter.less",
				dest: "rel/css/basic-starter.css"
			}
		},

		watch: {
			files: ['dev/less/*'],
			tasks: ['less']
		},

		express: {
			dev: {
				options: {
					port: 3000,
					bases: "dev/html/"
				}
			},
			rel: {
				options: {
					port: 4000,
					bases: "dev/html/"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask("compile", [
		"less"
	]);

	grunt.registerTask("server", [
		"express:dev",
		"watch",
		"express-keepalive"
	]);

	grunt.registerTask("release", [
		"express:rel",
		"watch",
		"express-keepalive"
	]);
	
};