//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
//NOTE: For full example, refer to refTop.js
module.exports = () => ({
    builderFunctionName: 'top',
    builderFunctionParam: {
        'cdnEnv': 'prod',
        search: false,
        showPreContent: true,
        siteMenu: false,
        GCToolsModal: false,
        topSecMenu: false,
    },

    gcintranet: {
        enabled: false,
    },
});
