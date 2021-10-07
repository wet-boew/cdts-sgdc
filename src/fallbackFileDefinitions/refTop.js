//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
module.exports = () => ({ //can take grunt object as parameter
    //---[ Defining properties common to all themes
    enabled: true, //optional (default: true)  Whether or not to produce this static file (mostly meant to be overriden by theme)

    fileBaseName: 'refTop', //optional (default: source file's name will be used)

    multiLanguageEnabled: false, //optional (default: true)

    builderFunctionName: 'refTop', //optional (default: fileBaseName will be used)
    builderFunctionParam: {'cdnEnv': 'prod'},

    //---[ Overriding/defining properties for a specific theme
    gcweb: {
        filterContent: (grunt, content, definition, language, targetFileName) => { //optional
            const APPENDED_VALUE = `\n<!-- Are you using the application templates? If so add the following CSS file -->
<!-- <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}/cdts/cdtsapps.css">-->
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}/css/noscript.min.css">
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}/cdts/cdtsnoscript.css">`;

            return content.concat(APPENDED_VALUE);
        },
    },
    gcintranet: {
        filterContent: (grunt, content, definition, language, targetFileName) => { //optional
            const APPENDED_VALUE = `\n<link rel="stylesheet" href="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/${definition.themeVersion}/css/noscript.min.css">`;

            return content.concat(APPENDED_VALUE);
        },
    },
});
