const { getSRIHashes } = require('../../SRIUtilities.js');

//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
module.exports = () => ({ //can take grunt object as parameter
    //---[ Defining properties common to all themes
    enabled: true, //optional (default: true)  Whether or not to produce this static file (mostly meant to be overriden by theme)

    fileBaseName: 'refTop', //optional (default: source file's name will be used)

    multiLanguageEnabled: false, //optional (default: true)

    builderFunctionName: 'refTop', //optional (default: fileBaseName will be used)
    builderFunctionParam: { 'cdnEnv': 'prod', 'sriEnabled': true },

    //---[ Overriding/defining properties for a specific theme
    gcweb: {
        filterContent: (grunt, content, definition, language, targetFileName) => { //optional
            const sriHashes = getSRIHashes([
                'public/wet/wet-boew/css/noscript.min.css',
                'public/gcweb/cdtsnoscript.css',
                'public/gcweb/cdtsapps.css'
            ]);

            const APPENDED_VALUE = `\n<!-- Are you using the application templates? If so add the following CSS file -->
<!-- <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}/cdts/cdtsapps.css" integrity="${sriHashes['public/gcweb/cdtsapps.css']}" crossorigin="anonymous">-->
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}/wet-boew/css/noscript.min.css" integrity="${sriHashes['public/wet/wet-boew/css/noscript.min.css']}" crossorigin="anonymous">
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}/cdts/cdtsnoscript.css" integrity="${sriHashes['public/gcweb/cdtsnoscript.css']}" crossorigin="anonymous">`;

            return content.concat(APPENDED_VALUE);
        },
    },
    gcintranet: {
        filterContent: (grunt, content, definition, language, targetFileName) => { //optional
            const sriHashes = getSRIHashes(['public/wet/wet-boew/css/noscript.min.css']);
            const APPENDED_VALUE = `\n<link rel="stylesheet" href="https://cdts.service.canada.ca/app/cls/WET/gcintranet/${definition.themeVersion}/wet-boew/css/noscript.min.css" integrity="${sriHashes['public/wet/wet-boew/css/noscript.min.css']}" crossorigin="anonymous">`;

            return content.concat(APPENDED_VALUE);
        },
    },
});
