//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
//NOTE: For full example, refer to refTop.js
module.exports = function() {

    return {
        multiLanguageEnabled: false,
        
        gcweb: {
            builderFunctionParam: {
                'cdnEnv': 'prod',
                'indexEng': 'https://www.canada.ca/en.html',
                'indexFra': 'https://www.canada.ca/fr.html',
                'termsEng': 'https://www.canada.ca/en/transparency/terms.html',
                'termsFra': 'https://www.canada.ca/fr/transparence/avis.html',
            },
        },
        gcintranet: {
            builderFunctionParam: {
                'cdnEnv': 'prod',
                'indexEng': 'http://intranet.canada.ca/index-eng.asp',
                'indexFra': 'http://intranet.canada.ca/index-fra.asp',
                'termsEng': 'http://intranet.canada.ca/terms-avis-eng.asp',
                'termsFra': 'http://intranet.canada.ca/terms-avis-fra.asp',
            },
        },
    };
};