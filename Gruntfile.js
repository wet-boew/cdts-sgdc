const generateStaticFile = require('./StaticFileCreator.js');
const {compileEJSModule, extractEJSModuleMessages, mergeLanguageFiles} = require('./EJSModuleGenerator.js');
const testFileLinks = require('./TestLinks.js');

/// ************************************************************
/// Optional command line options:
///    --cdts_version=<version>                     (e.g. --cdts_version=v4_0_40)
///    --cdts_samples_cdnenv=<environment name>     (e.g. --cdts_samples_cdnenv=esdcprod)
///
/// ************************************************************
module.exports = function run(grunt) {

    //---[ Content replacing function (in copy and concat tasks)
    //(replaces CDTS version mentions in URLs and optionally environment in sample pages.)
    function cdtsContentReplace(content, srcpath) {
        const newVersionName = grunt.config('project.versionName');
        const newEnvironment = grunt.option('cdts_samples_cdnenv') || null;

        //Replace version...
        let vtr = content.replace(/\/v[0-9]+_[0-9]+_[0-9]+\//g, `/${newVersionName}/`); //replaces '/vX_X_X/' where X can be any number

        //Replace environment in sample pages...
        if (newEnvironment && (srcpath.includes('/samples/') || srcpath.includes('/appTop/'))) {
            vtr = vtr.replace(/"cdnEnv": "esdcprod"/g, `"cdnEnv": "${newEnvironment}"`);
            vtr = vtr.replace(/"cdnEnv": "prod"/g, `"cdnEnv": "${newEnvironment}"`);
        }

        return vtr;
    }

    //---[ Grunt Modules
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin'); //could consider minifying cdts/*.css
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-webdriver');

    //---[ Task Definitions
    grunt.registerTask('default', 'Default task (performs a dev build)', ['build']);
    grunt.registerTask('build', 'Run non-minified build', ['clean', 'copy-public', 'build-ejs', 'genstatic']);
    grunt.registerTask('copy-public', 'Copy all public files', ['copy:wet', 'copy:gcweb-public', 'copy:gcintranet-public', 'copy:global-public']);
    grunt.registerTask('copy-test', 'Copy all test files', ['copy:gcweb-test', 'copy:gcintranet-test']);
    grunt.registerTask('build-ejs', 'Produce Javascript from EJS templates', ['eslint', 'i18n-ejs', 'compile-ejs', 'concat']);
    grunt.registerTask('build-prod', 'Run production build', ['build', 'minify']);
    grunt.registerTask('build-nowet', 'Run build without clean:target, copy-wet and genstatic (for convenience because of McAfee performance)', ['nowet-warning', 'clean:temp', 'copy:gcweb-public', 'copy:gcintranet-public', 'copy:global-public', 'build-ejs']);
    grunt.registerTask('minify', 'Minify target files', ['uglify']);

    grunt.registerTask('serve', 'Start development web server', ['build', 'copy-test', 'connect', 'watch']);
    grunt.registerTask('serve-nobuild', 'Start development web server on current build (USE WITH CAUTION, only use with known state of directories dist and tmp)', ['nobuild-warning', 'connect', 'watch']);
    grunt.registerTask('test', 'Start dev web server and run tests', ['setenv', 'test-links', 'build-prod', 'copy-test', 'connect', 'webdriver:maintests']);

    grunt.registerTask('nobuild-warning', 'Issue a warning on screen about using serve-nobuild', () => {
        grunt.log.writeln('***** WARNING ***** When using "serve-nobuild", you have to be sure that the directories "dist" and "tmp" are in a known good state (as they would be after a build)');
        grunt.log.writeln('                If ./dist and ./tmp are not consistent with a proper build, you may experience unexpected runtime errors.');
    });
    grunt.registerTask('nowet-warning', 'Issue a warning on screen about using build-nowet', () => {
        grunt.log.writeln('***** WARNING ***** When using "build-nowet", the "dist" directory is not cleaned, the WET files are not copied to "dist" and the static files are not re-generated (as they would be with a build).');
        grunt.log.writeln('                "build-nowet" IS FOR CONVENIENCE/TROUBLESHOOTING ONLY AND MUST NOT BE USED IN THE CONTEXT OF A CI/CD PIPELINE.');
    });

    grunt.registerTask('setenv', 'Set environment variable from grunt configuration', function(target) { //eslint-disable-line
        if (!target || target === 'test') {
            process.env.CDTS_TEST_VERSION_NAME = grunt.config('project.versionName');
        }
    });

    //---[ Can get called with 'compile-ejs', 'compile-ejs:gcweb' or 'compile-ejs:gcintranet'
    grunt.registerTask('compile-ejs', 'Compile EJS templates', function(target) { //eslint-disable-line
        const projectTempDir = grunt.config('project.temp');

        ['gcweb', 'gcintranet'].forEach((themeName) => {
            //(if target specified, only run for that one)
            if ((!target) || (themeName === target)) {
                compileEJSModule(`./src/${themeName}`, `${projectTempDir}/${themeName}/wet-en.js`, 'en', false);
                compileEJSModule(`./src/${themeName}`, `${projectTempDir}/${themeName}/wet-fr.js`, 'fr', false);

                //NOTE: Following is from the conversion from SOY to EJS, kept as comment for posterity
                //      (requires the "xmldom" and "xpath" npm packages to be installed.)
                //const {convertXliffToJSON} = require('./EJSModuleGenerator.js');
                //convertXliffToJSON(`./src/${themeName}/wet-messages.en.xlf`, `./src/${themeName}/wet-messages-conv.en.json`);
                //convertXliffToJSON(`./src/${themeName}/wet-messages.fr.xlf`, `./src/${themeName}/wet-messages-conv.fr.json`);
            }
        });

        return true;
    });

    //---[ Can get called with 'i18n-ejs', 'i18n-ejs:gcweb' or 'i18n-ejs:gcintranet'
    grunt.registerTask('i18n-ejs', 'Internationalize EJS templates', function(target) { //eslint-disable-line
        ['gcweb', 'gcintranet'].forEach((themeName) => {
            //(if target specified, only run for that one)
            if ((!target) || (themeName === target)) {
                extractEJSModuleMessages(`./src/${themeName}`, 'en');
                mergeLanguageFiles(`./src/${themeName}`, 'en', ['fr'], false, true);
            }
        });

        return true;
    });

    grunt.registerTask('test-links', 'Test all links in files in the src and public (minus the WET folder) directories', function(target) { //eslint-disable-line
        if (!target || target === 'test') {
            const done = this.async();
            testFileLinks().then(done).catch(() => done(false));
        }
    });

    //---[ Can get called with 'genstatic', 'genstatic:gcweb' or 'genstatic:gcintranet'
    grunt.registerTask('genstatic', 'Generate static fallback files.', function(target) { //eslint-disable-line
        const fs = require('fs');
        const path = require('path');
        const definitionPath = './src/fallbackFileDefinitions';

        grunt.log.writeln('--- Generating static fallback files...', target || '<all>');

        ['gcweb', 'gcintranet'].forEach((themeName) => {
            //(if target specified, only run for that one)
            if ((!target) || (themeName === target)) {
                const files = fs.readdirSync(definitionPath);

                grunt.log.writeln(`---   ${themeName}: Processing ${files.length} definition file(s)...`);

                files.forEach((fallbackFile) => {
                    const fallbackFileDefPath = `${definitionPath}/${fallbackFile}`;

                    const getStaticFileDefinition = require(fallbackFileDefPath);

                    generateStaticFile(grunt, themeName, path.basename(fallbackFile, path.extname(fallbackFile)), getStaticFileDefinition);
                });
            }
        });
    });

    //---[ Configuration
    grunt.util.linefeed = '\n';
    grunt.initConfig({
        //---[ Global Configuration Properties
        project: {
            pkg: grunt.file.readJSON('package.json'),
            versionName: grunt.option('cdts_version') || 'v<%= project.pkg.version.replace(/\\./g, "_")%>',
            target: './dist/app/cls/WET',
            temp: './tmp',
            banner: '/*!\n * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)\n' +
                        ' * Version <%= project.pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n *\n */',
        },

        clean: {
            target: '<%= project.target %>',
            temp: '<%= project.temp %>',
        },

        copy: {
            wet: {
                files: [
                    {cwd: 'public/wet', src: ['**'], dest: '<%= project.target %>/gcweb/<%= project.versionName %>', expand: true},
                    {cwd: 'public/wet', src: ['**'], dest: '<%= project.target %>/gcintranet/<%= project.versionName %>', expand: true},
                ],
            },
            'gcweb-public': {
                files: [
                    {cwd: 'public/gcweb', src: ['**'], dest: '<%= project.target %>/gcweb/<%= project.versionName %>/cdts', expand: true},
                    {cwd: 'public/common', src: ['**'], dest: '<%= project.target %>/gcweb/<%= project.versionName %>', expand: true},
                ],
                options: {
                    process: cdtsContentReplace,
                },
            },
            'gcintranet-public': {
                files: [
                    {cwd: 'public/gcintranet', src: ['**'], dest: '<%= project.target %>/gcintranet/<%= project.versionName %>/cdts', expand: true},
                    {cwd: 'public/common', src: ['**'], dest: '<%= project.target %>/gcintranet/<%= project.versionName %>', expand: true},
                ],
                options: {
                    process: cdtsContentReplace,
                },
            },
            'global-public': {
                files: [
                    {cwd: 'public/global', src: ['**'], dest: '<%= project.target %>/global', expand: true}
                ]
            },
            'gcweb-test': {
                files: [
                    {cwd: 'test/html/gcweb', src: ['**'], dest: '<%= project.target %>/gcweb/<%= project.versionName %>/cdts/test', expand: true}
                ],
                options: {
                    process: cdtsContentReplace,
                },
            },
            'gcintranet-test': {
                files: [
                    {cwd: 'test/html/gcintranet', src: ['**'], dest: '<%= project.target %>/gcintranet/<%= project.versionName %>/cdts/test', expand: true}
                ],
                options: {
                    process: cdtsContentReplace,
                },
            },
        },

        eslint: {
            target: ['*.js', 'src', 'public'],
            options: {
                extensions: ['.js'],
                overrideConfig: {
                    ignorePatterns: ['public/wet'],
                },
            },
        },

        concat: {
            options: {
                banner: '<%= project.banner %>',
                stripBanners: false,
                process: cdtsContentReplace,
            },
            'gcweb-en': {
                src: ['<%= project.temp %>/gcweb/wet-en.js', './src/common/*.js'],
                dest: '<%= project.target %>/gcweb/<%= project.versionName %>/cdts/compiled/wet-en.js',
            },
            'gcweb-fr': {
                src: ['<%= project.temp %>/gcweb/wet-fr.js', './src/common/*.js'],
                dest: '<%= project.target %>/gcweb/<%= project.versionName %>/cdts/compiled/wet-fr.js',
            },
            'gcintranet-en': {
                src: ['<%= project.temp %>/gcintranet/wet-en.js', './src/common/*.js'],
                dest: '<%= project.target %>/gcintranet/<%= project.versionName %>/cdts/compiled/wet-en.js',
            },
            'gcintranet-fr': {
                src: ['<%= project.temp %>/gcintranet/wet-fr.js', './src/common/*.js'],
                dest: '<%= project.target %>/gcintranet/<%= project.versionName %>/cdts/compiled/wet-fr.js',
            },
        },

        uglify: {
            options: {
                sourceMap: true,
                output: {comments: false},
                banner: '<%= project.banner %>'
            },
            gcweb: {
                cwd: '<%= project.target %>/gcweb/<%= project.versionName %>/cdts/compiled',
                src: ['wet-en.js', 'wet-fr.js'],
                dest: '<%= project.target %>/gcweb/<%= project.versionName %>/cdts/compiled',
                ext: '.js',
                expand: true,
            },
            gcintranet: {
                cwd: '<%= project.target %>/gcintranet/<%= project.versionName %>/cdts/compiled',
                src: ['wet-en.js', 'wet-fr.js'],
                dest: '<%= project.target %>/gcintranet/<%= project.versionName %>/cdts/compiled',
                ext: '.js',
                expand: true,
            },
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './dist',
                },
            },
        },

        watch: {
            options: {
                spawn: true,
                interrupt: false,
            },
            'gcweb-public': {
                files: ['./public/gcweb/**', './public/common/**'],
                tasks: ['copy:gcweb-public'],
            },
            'gcintranet-public': {
                files: ['./public/gcintranet/**', './public/common/**'],
                tasks: ['copy:gcintranet-public'],
            },
            'global-public': {
                files: ['./public/global/**'],
                tasks: ['copy:global-public'],
            },
            'gcweb-test': {
                files: ['./test/html/gcweb/**'],
                tasks: ['copy:gcweb-test'],
            },
            'gcintranet-test': {
                files: ['./test/html/gcintranet/**'],
                tasks: ['copy:gcintranet-test'],
            },
            'gcweb-ejs': {
                files: ['./src/gcweb/*.ejs', './src/common/*.js'],
                tasks: ['i18n-ejs:gcweb', 'compile-ejs:gcweb', 'concat:gcweb-en', 'concat:gcweb-fr', 'genstatic:gcweb'],
            },
            'gcweb-fr-xlf': {
                files: ['./src/gcweb/wet-messages.fr.json'],
                tasks: ['compile-ejs:gcweb', 'concat:gcweb-fr', 'genstatic:gcweb'],
            },
            'gcintranet-ejs': {
                files: ['./src/gcintranet/*.ejs', './src/common/*.js'],
                tasks: ['i18n-ejs:gcintranet', 'compile-ejs:gcintranet', 'concat:gcintranet-en', 'concat:gcintranet-fr', 'genstatic:gcintranet'],
            },
            'gcintranet-fr-xlf': {
                files: ['./src/gcintranet/wet-messages.fr.json'],
                tasks: ['compile-ejs:gcintranet', 'concat:gcintranet-fr', 'genstatic:gcintranet'],
            },
        },

        webdriver: {
            maintests: {
                configFile: './wdio.conf.js',
            },
        },
    });
};
