path = require("path")
fs = require("fs")

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
		"build"
		"Run full build."
		[
			"clean"
			"soycompile"
			"concat"
			"copy-dist"
			"clean:tmp"
		]
	)

	@registerTask(
		"copy-dist"
		"Produces the production files"
		[
			"copy:assets"
			"copy:deploy"
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
		"minify"
		"Minify built files."
		[
			"uglify"
			"cssmin"
		]
	)

	@registerTask(
		"deploy"
		"Build and deploy artifacts to cdts-sgdc-dist"
		->
			if process.env.TRAVIS_PULL_REQUEST is "false" and process.env.DIST_REPO isnt `undefined` and ( process.env.TRAVIS_TAG isnt "" or process.env.TRAVIS_BRANCH is "master" )
				pkgOriginal = grunt.file.readJSON("package.json");
				addToRepo = "cdts-sgdc-cdn";
				writeTo = "dist/cdts-sgdc/package.json";
				pkg = {
					name: "cdts-sgdc",
					version: pkgOriginal.version,
					description: pkgOriginal.name.toLowerCase() + " theme"
					repository: {
						type: "git",
						url: "git+https://github.com/wet-boew/" + addToRepo + ".git"
					},
					author: "wet-boew-bot",
					license: "MIT",
					bugs: {
						url: "https://github.com/wet-boew/" + pkgOriginal.name.toLowerCase() + "/issues"
					},
					homepage: "https://github.com/wet-boew/" + addToRepo + "#readme"
				};
				grunt.file.write(writeTo, JSON.stringify(pkg, null, 2));
				grunt.task.run [
					"copy:deploy"
					"copy:release"
					"gh-pages:travis"
					"gh-pages:travis_cdn"
					"gh-pages:release"
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

	@util.linefeed = "\n"
	# Project configuration.
	@initConfig

		# Metadata.
		pkg: @file.readJSON "package.json"
		coreDist: "dist"
		# Temporary folder for compiled soy files
		coreTmp: "tmp"
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

		# Clean
		clean:
			dist: ["dist"]
			tmp: ["tmp"]

		# Compile Soy
		soycompile:

			gcwebEn:
				expand: true,
				src: [
					"./etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-en.soy"
					"./etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-appPage-en.soy"
					]
				dest: "<%= coreTmp %>"
				options:
					jarPath: "etc/designs/canada/cdts/gcweb/release/jar"

			gcwebFr:
				expand: true,
				src: [
					"./etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-fr.soy"
					"./etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-appPage-fr.soy"
					]
				dest: "<%= coreTmp %>"
				options:
					jarPath: "etc/designs/canada/cdts/gcweb/release/jar"

			gcwebBi:
				expand: true,
				src: [
					"./etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-serverPage.soy"
					]
				dest: "<%= coreTmp %>"
				options:
					jarPath: "etc/designs/canada/cdts/gcweb/release/jar"

			gcintranetEn:
				expand: true,
				src: [
					"./etc/designs/canada/cdts/gcintranet/release/cdts/uncompiled/gcintranet-en.soy"
					]
				dest: "<%= coreTmp %>"
				options:
					jarPath: "etc/designs/canada/cdts/gcweb/release/jar"

			gcintranetFr:
				expand: true,
				src: [
					"./etc/designs/canada/cdts/gcintranet/release/cdts/uncompiled/gcintranet-fr.soy"
					]
				dest: "<%= coreTmp %>"
				options:
					jarPath: "etc/designs/canada/cdts/gcweb/release/jar"

			gcintranetBi:
				expand: true,
				src: [
					"./etc/designs/canada/cdts/gcintranet/release/cdts/uncompiled/gcintranet-serverPage.soy"
					]
				dest: "<%= coreTmp %>"
				options:
					jarPath: "etc/designs/canada/cdts/gcweb/release/jar"

		concat:
			options:
				banner: "<%= banner %>"

			gcwebEn:
				options:
					stripBanners: false
				src: [
					"<%= coreTmp %>/etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-en.js"
					"<%= coreTmp %>/etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-appPage-en.js"
					"<%= coreTmp %>/etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-serverPage.js"
				]
				dest: "<%= coreDist %>/gcweb-en.js"

			gcwebFr:
				options:
					stripBanners: false
				src: [
					"<%= coreTmp %>/etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-fr.js"
					"<%= coreTmp %>/etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-appPage-fr.js"
					"<%= coreTmp %>/etc/designs/canada/cdts/gcweb/release/cdts/uncompiled/gcweb-serverPage.js"
				]
				dest: "<%= coreDist %>/gcweb-fr.js"

			gcintranetEn:
				options:
					stripBanners: false
				src: [
					"<%= coreTmp %>/etc/designs/canada/cdts/gcintranet/release/cdts/uncompiled/gcintranet-en.js"
					"<%= coreTmp %>/etc/designs/canada/cdts/gcintranet/release/cdts/uncompiled/gcintranet-serverPage.js"
				]
				dest: "<%= coreDist %>/gcintranet-en.js"

			gcintranetFr:
				options:
					stripBanners: false
				src: [
					"<%= coreTmp %>/etc/designs/canada/cdts/gcintranet/release/cdts/uncompiled/gcintranet-fr.js"
					"<%= coreTmp %>/etc/designs/canada/cdts/gcintranet/release/cdts/uncompiled/gcintranet-serverPage.js"
				]
				dest: "<%= coreDist %>/gcintranet-fr.js"

		# Minify
		uglify:
			options:
				preserveComments: (uglify,comment) ->
					return comment.value.match /^!/i

			core:
				options:
					# beautify:
					# 	quote_keys: true
					sourceMap: true
				cwd: "<%= coreDist %>"
				src: [
					"./*.js"
					"./js/*.js"
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
					sourceMap: true
				expand: true
				src: [
					"<%= coreDist %>/cdts/css/*.css"
					"!**/*.min.css"
				]
				ext: ".min.css"

		copy:
			assets:
				files: [
					cwd: "etc/designs/canada/cdts/gcweb/release"
					src: [
						"ajax/**/*.*"
						"css/**/*.*"
						"js/**/*.*"
						"html/**/*.*"
						"!html/index*.html"
						"!js/soyutils.js"
					]
					dest: "<%= coreDist %>/cdts/"
					expand: true
				,
					cwd: "etc/designs/canada/cdts/gcweb/release/js"
					src: [
						"soyutils.js"
					]
					dest: "<%= coreDist %>"
					expand: true
				,
					cwd: "etc/designs/canada/cdts/gcweb/release/html"
					src: [
						"index*.html"
					]
					dest: "<%= coreDist %>"
					expand: true
				,
					cwd: "node_modules"
					src: [
						"wet-boew/**/*.*"
						"gcweb/**/*.*"
					]
					dest: "<%= coreDist %>/"
					expand: true
				,
					cwd: "<%= coreDist %>"
					src: [
						"gcweb-en.js"
						"gcweb-fr.js"
					]
					dest: "etc/designs/canada/cdts/gcweb/release/cdts/compiled"
					expand: true
				,
					cwd: "etc/designs/canada/cdts/gcweb/release/js"
					src: [
						"soyutils.js"
					]
					dest: "etc/designs/canada/cdts/gcweb/release/cdts/compiled"
					expand: true
				,
					cwd: "etc/designs/canada/cdts/gcweb/release/js"
					src: [
						"soyutils.js"
					]
					dest: "etc/designs/canada/cdts/gcintranet/release/cdts/compiled"
					expand: true
				,
					cwd: "<%= coreDist %>"
					src: [
						"gcintranet-en.js"
						"gcintranet-fr.js"
					]
					dest: "etc/designs/canada/cdts/gcintranet/release/cdts/compiled"
					expand: true					
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
				]

			release:
				files: [
					# If there's a release tag, create release folder, if not deploy into latest folder
					{
						cwd: "<%= coreDist %>"
						src: [
							"**/*.*"
						]
						dest: "releases/" + (( if process.env.TRAVIS_TAG then process.env.TRAVIS_TAG else "latest" ))
						expand: true
					}

					# If there's a release tag, deploy to the run folder, if not deploy into latest folder
					{
						cwd: "<%= coreDist %>"
						src: [
							"**/*.*"
						]
						dest: "releases/" + (( if process.env.TRAVIS_TAG then "run" else "latest" ))
						expand: true
					}
					{
						src: [
							"README.md"
						]
						dest: "releases"
						expand: true
					}
				]

		"gh-pages":
			options:
				clone: "cdts-sgdc-dist"
				base: "<%= coreDist %>"

			travis:
				options:
					repo: process.env.DIST_REPO
					branch: "<%= pkg.version %>"
					message: "<%= distDeployMessage %>"
					tag: ((
						if process.env.TRAVIS_TAG then process.env.TRAVIS_TAG else false
					))
				src: [
					"**/*.*"
					"!package.json"
				]

			release:
				options:
					repo: "https://github.com/wet-boew/cdts-sgdc-releases.git"
					branch: "master"
					base: "releases"
					clone: "cdts-sgdc-releases"
					add: true
					message: "<%= distDeployMessage %>"
				src: [
					"**/*.*"
				]

			travis_cdn:
				options:
					repo: process.env.CDN_REPO
					branch: "<%= pkg.version %>"
					clone: "cdts-sgdc-cdn"
					base: "<%= coreDist %>"
					message: "<%= cdnDeployMessage %>"
					tag: ((
						if process.env.TRAVIS_TAG then process.env.TRAVIS_TAG else false
					))
				src: [
					"**/*.*"
					"!package.json"
				]

	require( "load-grunt-tasks" )( grunt, requireResolution: true )

	require( "time-grunt" )( grunt )
	@