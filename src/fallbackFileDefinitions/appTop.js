//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
//NOTE: For full example, refer to refTop.js
module.exports = () => ({
    builderFunctionParam: {
        'cdnEnv': 'prod',
        appName: [{text: 'Name of Web application', href: '#[YourApplicationName]'}],
        search: false,
        showPreContent: false,
        topSecMenu: false
    },
});
