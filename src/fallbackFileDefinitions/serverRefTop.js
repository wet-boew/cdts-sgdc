//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
//NOTE: For full example, refer to refTop.js
module.exports = function() {

    return {
        multiLanguageEnabled: false,
        builderFunctionParam: {'cdnEnv': 'prod'},
        
        gcweb: {
            filterContent: (grunt, content, definition, language, targetFileName) => { //optional
                const APPENDED_VALUE = `\n<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}/css/noscript.min.css">`;

                return content.concat(APPENDED_VALUE);
            },
        },
        gcintranet: {
            filterContent: (grunt, content, definition, language, targetFileName) => { //optional
                const APPENDED_VALUE = `\n<link rel="stylesheet" href="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/${definition.themeVersion}/css/noscript.min.css">`;

                return content.concat(APPENDED_VALUE);
            },
        },
    };
};