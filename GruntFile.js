module.exports = function(grunt)
{
	grunt.initConfig({
		// Reads data from package.json

		pkg: grunt.file.readJSON('package.json'),
		
		cssmin: {
			combine:{
				src: ['public/semantic/css/semantic.min.css', 'public/css/style.css'],
				dest: 'public/css/main.css'
			}
		},
		concat : {
			options: {
				separator: "\n\n"
			},
			dist: {

				//Source Folders : Destination*/
				src:['public/js/angular/angular.js', 'public/js/angular-route/angular-route.js', 'public/js/angular-animate/angular-animate.js',
				    'public/js/app.js', 'public/js/config.js', 'public/js/controller.js'],
				dest: 'public/js/main.js'
			}
			
		}

	});
		grunt.loadNpmTasks('grunt-contrib-cssmin');
	    grunt.loadNpmTasks('grunt-contrib-concat');


        grunt.registerTask('default', ['cssmin', 'concat']);
}

	