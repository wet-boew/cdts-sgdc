const { getSRIHashes } = require('../../SRIUtilities.js');

//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
//NOTE: For full example, refer to refTop.js
module.exports = () => ({
    multiLanguageEnabled: false,
    builderFunctionParam: { 'cdnEnv': 'prod', 'sriEnabled': true },

    gcweb: {
        filterContent: (grunt, content, definition, language, targetFileName) => { //optional
            const sriHashes = getSRIHashes(['public/wet/wet-boew/css/noscript.min.css']);
            const APPENDED_VALUE = `\n<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}/wet-boew/css/noscript.min.css" integrity="${sriHashes['public/wet/wet-boew/css/noscript.min.css']}" crossorigin="anonymous">`;

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
