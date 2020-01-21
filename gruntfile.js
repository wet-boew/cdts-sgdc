//The "wrapper" function
module.exports = function(grunt) {  
	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			my_target:{
				files: {
					'dist/cdts/js/cdtscustom.min.js' : ['_src/js/cdtscustom.js'],
					'dist/cdts/js/exitScript.min.js' : ['_src/js/exitScript.js']
				}
			}
		},
		run: {
		  npm_travis_script: {
			exec: 'npm run travis_script --silent'
		  }
		}
	});
	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-run');
	//Custom tasks
	grunt.registerTask('default', ['run:npm_travis_script', 'uglify']);
};
