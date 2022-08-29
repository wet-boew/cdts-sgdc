//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
//NOTE: For full example, refer to refTop.js
module.exports = () => ({
    multiLanguageEnabled: false,
    builderFunctionParam: {'cdnEnv': 'prod'},

    gcweb: {
        filterContent: (grunt, content, definition, language, targetFileName) => { //optional
            const APPENDED_VALUE = `\n<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}/wet-boew/css/noscript.min.css">`;

            return content.concat(APPENDED_VALUE);
        },
    },
    gcintranet: {
        filterContent: (grunt, content, definition, language, targetFileName) => { //optional
            const APPENDED_VALUE = `\n<link rel="stylesheet" href="https://cdts.service.canada.ca/app/cls/WET/gcintranet/${definition.themeVersion}/wet-boew/css/noscript.min.css">`;

            return content.concat(APPENDED_VALUE);
        },
    },
});
