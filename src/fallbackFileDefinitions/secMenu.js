//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
//NOTE: For full example, refer to refTop.js
module.exports = function() {

    return {
        builderFunctionName: 'secmenu',
        builderFunctionParam: {sections: []},
        
        filterContent: (grunt, content, definition, language, targetFileName) => {
            grunt.log.writeln(`${targetFileName}: Replacing entire content...`);
            return language === 'fr'? 
                        "<p>Le menu n'est pas disponible lorsque Javascript est désactivé.</p>":
                        "<p>The menu is not available when Javascript is disabled.</p>";
        },
    };
};