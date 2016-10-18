module.exports = function(grunt)
{
	grunt.initConfig({
		// Reads data from package.json

		pkg: grunt.file.readJSON('package.json'),
		
		cssmin: {
			combine:{
				src: ['public/semantic/css/semantic.min.css', 'public/css/style.css'],
				dest: 'public/cssp/main.css'
			}
		},
		concat : {
			options: {
				separator: "\n\n"
			},
			dist: {
							//Source Folders : Destination*/
				src:['public/js/jquery/dist/jquery.js','public/semantic/js/semantic.js','public/js/angular/angular.js', 'public/js/angular-route/angular-route.js', 'public/js/angular-animate/angular-animate.js'],
				dest: 'public/jsp/main.js'
			 },
			 main: {
							//Source Folders : Destination*/
				src:['public/js/app.js', 'public/js/config.js','public/js/directives.js','public/js/controllers.js'],
				dest: 'public/jsp/appdefault.js'
			 }
			
			
		}

	});
	 
		grunt.loadNpmTasks('grunt-contrib-cssmin');
	    grunt.loadNpmTasks('grunt-contrib-concat');


        grunt.registerTask('default', ['cssmin', 'concat']);
}

	