const { HtmlValidate, formatterFactory } = require('html-validate'); //(https://html-validate.org/dev/using-api.html)

const scriptRegex = /<script.*?<\/script>/sg;

function defaultContentFilter(grunt, content, definition, language, targetFileName) {
    //---[ Strip any <script> elements from file content
    const matches = content.match(scriptRegex);

    if (matches && matches.length > 0) {
        grunt.log.writeln(`${targetFileName}: Removing ${matches.length} '<script>' element(s)...`);
    }
    return content.replace(scriptRegex, '');
}

function createStaticFallbackFile(grunt, definition, language) {
    const fs = require('fs');

    //---[ Some calculated values...
    const distCompiledDirName = `${grunt.config('project.target')}/${definition.themeName}/${definition.themeVersion}/cdts/compiled`;
    const distStaticTargetDirName = `${grunt.config('project.target')}/${definition.themeName}/${definition.themeVersion}/cdts/static`;
    const wetFileName = `wet-${language || 'en'}.js`;
    const languageSuffix = language? `-${language}`: '';
    const targetFileName = `${distStaticTargetDirName}/${definition.fileBaseName}${languageSuffix}.html`;

    //---[ Get builder parameters
    const builderParam = {...definition.builderFunctionParam};
    if (builderParam && builderParam.cdnEnv && definition.cdnEnvOverride) { //override cdnEnv if specified and we have an override
        builderParam.cdnEnv = definition.cdnEnvOverride;
    }

    //---[ Mock global variable available in browsers and needed by wet-[en|fr].js
    const navigator = {language: 'en-CA',}; //eslint-disable-line

    //---[ Load wet functions
    //NOTE: Using eval on arbritrary files is a huge NO-NO, but we just generated these files and trust them
    //      (not to mention that they are not modules so require/import does not work with them)
    eval(fs.readFileSync(`${distCompiledDirName}/${wetFileName}`, 'utf8')); //eslint-disable-line

    //---[ Get CDTS "pure" output
    let output = wet.builder[definition.builderFunctionName](builderParam).toString(); //eslint-disable-line

    //---[ Process output through content filter(s)
    output = defaultContentFilter(grunt, output, definition, language, targetFileName);
    if (definition.filterContent) output = definition.filterContent(grunt, output, definition, language, targetFileName);

    //---[ Validate HTML before we save
    const htmlValidate = new HtmlValidate(require('./htmlvalidator.conf.js'));
    const htmlValidateFormatReport = formatterFactory('stylish'); //possible formatters: checkstyle, codeframe, json, stylish, text
    const report = htmlValidate.validateString(output);
    if ((!report.valid) || (report.warningCount > 0)) {
        grunt.log.error(`${targetFileName}: ${report.errorCount} error(s), ${report.warningCount} warning(s) reported:`);
        grunt.log.error(htmlValidateFormatReport(report.results));
        if (report.errorCount > 0) throw new Error('HTML validator error reported, aborting.');
    }

    //---[ Output to file
    if (!fs.existsSync(distStaticTargetDirName)) fs.mkdirSync(distStaticTargetDirName); //create target directory if it doesn't exist
    fs.writeFileSync(targetFileName, output, {encoding: 'utf8'});
}

module.exports = function generateStaticFile(grunt, themeName, definitionFileBasename, getStaticFileDefinition) {
    //---[ Establish file defitinion/parameters
    const definition = getStaticFileDefinition(grunt);

    //(override values for theme)
    if (definition[themeName]) Object.assign(definition, definition[themeName]);

    //(apply defaults)
    if (!definition.fileBaseName) definition.fileBaseName = definitionFileBasename;
    if (!definition.builderFunctionName) definition.builderFunctionName = definition.fileBaseName;
    if (typeof definition.multiLanguageEnabled === 'undefined') definition.multiLanguageEnabled = true;

    //(add to definition)
    definition.themeName = themeName;
    definition.themeVersion = grunt.config('project.versionName');
    definition.cdnEnvOverride = grunt.option('cdts_samples_cdnenv') || null;

    //---[ If not enabled, don't do anything and return
    if (definition.enabled === false) return;

    //---[ Create one or more files depending on multiLanguageEnabled
    if (definition.multiLanguageEnabled) {
        ['en', 'fr'].forEach((language) => createStaticFallbackFile(grunt, definition, language));
    }
    else {
        //single/no language
        createStaticFallbackFile(grunt, definition);
    }
};
