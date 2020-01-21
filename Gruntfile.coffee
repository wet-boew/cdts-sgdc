path = require("path")
fs = require("fs")
soycompile = require("grunt-soy-compile")

module.exports = (grunt) ->

	# External tasks
	@registerTask(
		"default"
		"Default task that runs the core unminified build"
		[
			"build"
		]
	)

	@registerTask(
		"dist"
		"Produces the production files"
		[
			"build"
			"minify"
		]
	)

	@registerTask(
		"soycompile"
		"Compiles the soy to JS"
		[
			"soycompile:gcwebEn"
		]
	)

	@registerTask(
		"build"
		"Run full build."
		[
			"clean:dist"
            "soycompile"
			"assets"
			"css"
			"js"
		]
	)

	@registerTask(
		"minify"
		"Minify built files."
		[
			"js-min"
			"css-min"
		]
	)

	@registerTask(
		"server"
		"Run the Connect web server for local repo"
		[
			"connect:server"
			"watch"
		]
	)

	#Internal task groups
	@registerTask(
		"js"
		"INTERNAL: Copies all third party JS to the dist folder"
		[
			"copy:js"
			"concat:core"
		]
	)

	@registerTask(
		"js-min"
		"INTERNAL: Minify the built Javascript files"
		[
			"uglify:core"
		]
	)

	@registerTask(
		"css"
		"INTERNAL: Compiles Sass and copies third party CSS to the dist folder"
		[
			"sass"
			"postcss"
			"csslint:unmin"
			"usebanner:css"
		]
	)

	@registerTask(
		"css-min"
		"INTERNAL: Minify the CSS files"
		[
			"cssmin:dist"
		]
	)

	@registerTask(
		"assets-min"
		"INTERNAL: Process non-CSS/JS assets to dist"
		[
			"copy:assets_min"
		]
	)

	@registerTask(
		"assets"
		"INTERNAL: Process non-CSS/JS assets to dist"
		[
			"copy:themeAssets"
			"copy:bootstrap"
		]
	)

	@util.linefeed = "\n"
	# Project configuration.
	@initConfig

		# Metadata.
		pkg: @file.readJSON "package.json"
		coreDist: "dist/cdts-sgdc"
		banner: "/*!\n * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)\n * github.com/wet-boew/cdts-sgdc/blob/master/LICENSE\n" +
				" * v<%= pkg.version %> - " + "<%= grunt.template.today('yyyy-mm-dd') %>\n *\n */"

		# Commit Messages
		commitMessage: " Commit wet-boew/cdts-sgdc#" + process.env.TRAVIS_COMMIT
		travisBuildMessage: "Travis build " + process.env.TRAVIS_BUILD_NUMBER
		distDeployMessage: ((
			if process.env.TRAVIS_TAG
				"Production files for the " + process.env.TRAVIS_TAG + " release."
			else
				"<%= travisBuildMessage %>"
		)) + "<%= commitMessage %>"
		cdnDeployMessage: ((
			if process.env.TRAVIS_TAG
				"CDN files for the " + process.env.TRAVIS_TAG + " release."
			else
				"<%= travisBuildMessage %>"
		)) + "<%= commitMessage %>"

		deployBranch: "v1.0.0-dist"

        # Compile Soy
        soycompile:
			gcwebEn:
				expand: true,
				src: [
                    "./_src/soy/gcweb/en/gcweb-en.soy"
                    "./_src/soy/gcweb/en/gcweb-appPage-en.soy"
                    ]
				dest: "./dist/test"
                options:
                    jarPath: "_src/jar"

        # Clean
		clean:
			dist: ["dist"]

		concat:
			options:
				banner: "<%= banner %>"

            gcwebEn:
                options:
                    stripBanners: false
                src: [
                    "tmp/_src/soy/en/gcweb-en.js"
                    "tmp/_src/soy/en/gcweb-appPage-en.js"
                    "tmp/_src/soy/bilingual/gcweb-serverPage.js"
                ]
                dest: "<%= coreDist %>/js/gcweb-en.js"

            gcwebFr:
                options:
                    stripBanners: false
                src: [
                    "tmp/_src/soy/fr/gcweb-fr.js"
                    "tmp/_src/soy/fr/gcweb-appPage-fr.js"
                    "tmp/_src/soy/bilingual/gcweb-serverPage.js"
                ]
                dest: "<%= coreDist %>/js/gcweb-fr.js"

            gcintranetEn:
                options:
                    stripBanners: false
                src: [
                    "tmp/_src/soy/en/gcintranet-en.js"
                    "tmp/_src/soy/en/gcintranet-appPage-en.js"
                    "tmp/_src/soy/bilingual/gcintranet-serverPage.js"
                ]
                dest: "<%= coreDist %>/js/gcintranet-en.js"

            gcintranetFr:
                options:
                    stripBanners: false
                src: [
                    "tmp/_src/soy/fr/gcintranet-fr.js"
                    "tmp/_src/soy/fr/gcintranet-appPage-fr.js"
                    "tmp/_src/soy/bilingual/gcintranet-serverPage.js"
                ]
                dest: "<%= coreDist %>/js/gcintranet-fr.js"

		# Minify
		uglify:
			options:
				preserveComments: (uglify,comment) ->
					return comment.value.match /^!/i

			core:
				options:
					beautify:
						quote_keys: true
					sourceMap: true
				cwd: "<%= coreDist %>"
				src: [
					"./*.js"
					"!*.min.js"
				]
				dest: "<%= coreDist %>"
				ext: ".min.js"
				expand: true

		cssmin:
			options:
				banner: ""
			dist:
				options:
					banner: ""
				expand: true
				src: [
					"<%= coreDist %>/**/*.css"
					"<%= themeDist %>/**/*.css"
					"!**/ie8*.css"
					"!**/*.min.css"
				]
				ext: ".min.css"

		copy:
			bootstrap:
				cwd: "node_modules/bootstrap-sass/assets/fonts/bootstrap"
				src: "*.*"
				dest: "<%= coreDist %>/fonts"
				expand: true
				flatten: true

			js:
				files: [
					cwd: "src/polyfills"
					src: "**/*.js"
					dest: "<%= coreDist %>/js/polyfills"
					expand: true
					flatten: true
				,
					cwd: "node_modules"
					src: [
						"code-prettify/src/*.js"
						"datatables/media/js/jquery.dataTables.js"
						"jquery-validation/dist/jquery.validate.js"
						"jquery-validation/dist/additional-methods.js"
						"magnific-popup/dist/jquery.magnific-popup.js"
						"proj4/dist/proj4.js"
						"unorm/lib/unorm.js"
					]
					dest: "<%= coreDist %>/js/deps"
					rename: (dest, src) ->
						return dest + "/" + src.replace ".debug", ""
					expand: true
					flatten: true
				]

			deploy:
				files: [
					{
						src: [
							"*.txt"
							"*.html"
							"README.md"
						]
						dest: "dist"
						expand: true
					}

					{
						src: "*.txt"
						dest: "<%= coreDist %>"
						expand: true
					}

					{
						src: "*.txt"
						dest: "<%= themeDist %>"
						expand: true
					}

					#Backwards compatibility.
					#TODO: Remove in v4.1
					{
						cwd: "<%= coreDist %>"
						src: [
							"**/*.*"
						]
						dest: "dist"
						expand: true
					}

					{
						cwd: "<%= themeDist %>"
						src: [
							"**/*.*"
						]
						dest: "dist"

						expand: true
					}
				]

				#Backwards compatibility.
				#TODO: Remove in v4.1
				options:
					noProcess: [
						'**/*.{png,gif,jpg,ico,ttf,eot,otf,woff,svg,swf}'
					]
					process: (content, filepath) ->
						if filepath.match /\.css/
							return content.replace /\.\.\/\.\.\/wet-boew\/(assets|fonts)/g, '../$1'
						content

		"gh-pages":
			options:
				clone: "wet-boew-dist"
				base: "dist"

			travis:
				options:
					repo: process.env.DIST_REPO
					branch: "<%= deployBranch %>"
					message: "<%= distDeployMessage %>"
					tag: ((
						if process.env.TRAVIS_TAG then process.env.TRAVIS_TAG else false
					))
				src: [
					"**/*.*"
				]

			travis_cdn:
				options:
					repo: process.env.CDN_REPO
					branch: "<%= deployBranch %>"
					clone: "wet-boew-cdn"
					base: "<%= coreDist %>"
					message: "<%= cdnDeployMessage %>"
					tag: ((
						if process.env.TRAVIS_TAG then process.env.TRAVIS_TAG else false
					))
				src: [
					"**/*.*"
				]

	require( "load-grunt-tasks" )( grunt, requireResolution: true )

	require( "time-grunt" )( grunt )
	@












# //The "wrapper" function
# module.exports = function(grunt) {  
# 	//Project and task configuration
# 	grunt.initConfig({
# 		pkg: grunt.file.readJSON('package.json'),
# 		soycompile: {
# 			GcwebEn: {
# 				expand: true,
# 				src: ["./_src/soy/gcweb/en/gcweb-en.soy", "./_src/soy/gcweb/en/gcweb-appPage-en.soy"],
# 				dest: "./dist/test",
# 				options: {
# 					jarPath: "_src/jar"
# 				}
# 			},
# 			GcwebFr: {
# 				expand: true,
# 				src: ["./_src/soy/gcweb/fr/*.soy"],
# 				dest: "./dist/test",
# 				options: {
# 					jarPath: "_src/jar"
# 				}
# 			},
# 			GcwebBi: {
# 				expand: true,
# 				src: ["./_src/soy/gcweb/bilingual/*.soy"],
# 				dest: "./dist/test",
# 				options: {
# 					jarPath: "_src/jar"
# 				}
# 			},
# 			GcintranetEn: {
# 				expand: true,
# 				src: ["./_src/soy/gcintranet/en/*.soy"],
# 				dest: "./dist/test",
# 				options: {
# 					jarPath: "_src/jar"
# 				}
# 			},
# 			GcintranetFr: {
# 				expand: true,
# 				src: ["./_src/soy/gcintranet/fr/*.soy"],
# 				dest: "./dist/test",
# 				options: {
# 					jarPath: "_src/jar"
# 				}
# 			},
# 			GcintranetBi: {
# 				expand: true,
# 				src: ["./_src/soy/gcintranet/bilingual/*.soy"],
# 				dest: "./dist/test",
# 				options: {
# 					jarPath: "_src/jar"
# 				}
# 			}
# 		},
# 		uglify: {
# 			my_target:{
# 				files: {
# 					'dist/cdts/js/cdtscustom.min.js' : ['_src/js/cdtscustom.js'],
# 					'dist/cdts/js/exitScript.min.js' : ['_src/js/exitScript.js']
# 				}
# 			}
# 		}

# 	});
# 	//Loading Grunt plugins and tasks
# 	require('load-grunt-tasks')(grunt);
# 	//Custom tasks
# 	grunt.registerTask('default', ["uglify", "soycompile"]);
# };

