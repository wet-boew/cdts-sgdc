//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
//NOTE: For full example, refer to refTop.js
module.exports = function() {

    return {
        //NOTE: The serverBottom.js file will generate "serevrBottom.html" from serverBottom function, this file will generate "serverBottom-en.html" and "serverBottom-fr.html" from footer function
        fileBaseName: 'serverBottom',
        multiLanguageEnabled: true,
        builderFunctionName: 'footer',
        builderFunctionParam: {'cdnEnv': 'prod', showFooter: true, showFeatures: false},
    };
};