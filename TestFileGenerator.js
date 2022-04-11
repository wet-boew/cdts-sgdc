const fs = require('fs');

const { HtmlValidate, formatterFactory } = require('html-validate'); //(https://html-validate.org/dev/using-api.html)

const scriptRegex = /<script>([\s\S]*?)<\/script>/gmi;
const wetBuilderRegex = /wet\.builder\..*\({[\s\S]*}\)/gm; //NOTE: Relies on the fact that there are no spaces between '('+'{' and '}'+')', e.g. wet.builder.function({...})
const wetLanguageRegex = /\/wet-(.*)\.js/;

let warningIssued = false;

function searchFunctionCalls(content) {
    const scripts = [...content.matchAll(scriptRegex)];

    const functionCalls = [];

    scripts.forEach((script) => {
        functionCalls.push(...(script[1].trim().match(wetBuilderRegex) || []));
    });

    return functionCalls;
}

function validateBuilderFunctions(content, theme, version) {
    const htmlValidate = new HtmlValidate(require('./htmlvalidator.conf.js')); //config path relative
    const htmlValidateFormatReport = formatterFactory('stylish'); //possible formatters: checkstyle, codeframe, json, stylish, text

    function validateHTML(functionName, htmlContent) {
        const report = htmlValidate.validateString(htmlContent);
        if ((!report.valid) || (report.warningCount > 0)) {
            console.error(`${functionName}: ${report.errorCount} error(s), ${report.warningCount} warning(s) reported: `);
            console.error(htmlValidateFormatReport(report.results));
            if (report.errorCount > 0) {
                console.error(`${functionName} content: [${htmlContent}]`);
                throw new Error('HTML validator error reported, aborting.');
            }
        }
    }

    //---[ Extract language from the "wet-??.js" files found in data
    const language = (content.match(wetLanguageRegex) || [null, 'en'])[1] || 'en';

    const distCompiledDirName = `./dist/app/cls/WET/${theme}/${version}/cdts/compiled`;
    const wetFileName = `wet-${language}.js`;

    //---[ Extract all the "wet.builder" calls out of the page content
    const functionCalls = searchFunctionCalls(content);
    if (!functionCalls || functionCalls.length <= 0) return; //don't bother if the content does not include any wet.builder call

    //---[ Mock global variable available in browsers and needed by wet-[en|fr].js
    //NOTE: this is the navigator language, always setting to en-CA should be ok... right?
    const navigator = { language: 'en-CA', }; //eslint-disable-line
    //---[ Mock global variables needed by setup  (we validate what "setup" passes to these mock objects/functions)
    const document = { //eslint-disable-line
        readyState: 'loading', //can be anything as long as value is not 'complete' or 'interactive'
        addEventListener: function addEventListener(name, fn) {
            fn(); //just call event handler function right away
        },
        getElementById: function getElementById(id) {
            const vtr = {
                id,
                get innerHTML() {
                    return this.innerHTMLValue;
                },
                set innerHTML(htmlContent) {
                    this.innerHTMLValue = htmlContent;
                    console.log(`***** Function[setup#${id}]; length = ${htmlContent.length} `);
                    validateHTML(`setup#${id}`, htmlContent);
                },
                get outerHTML() {
                    return this.outerHTMLValue;
                },
                set outerHTML(htmlContent) {
                    this.outerHTMLValue = htmlContent;
                    console.log(`***** Function[setup#${id}]; length = ${htmlContent.length} `);
                    validateHTML(`setup#${id}`, htmlContent);
                },
            };
            return vtr;
        },
    };
    function DOMParser() { //eslint-disable-line
        this.parseFromString = function parseFromString(htmlContent) {
            const output = htmlContent.replace(/(<[/]?html>)|(<[/]?body>)|(<[/]?head>)/gm, '');
            console.log(`***** Function[setup#DOMParser]; length = ${output.length} `);
            validateHTML(`setup#DOMParser`, output);
            return ({
                body: {
                    childNodes: [],
                },
                head: {
                    childNodes: [],
                }
            });
        }
    }

    //---[ Load soy/wet functions
    //NOTE: Using eval on arbritrary files is a huge NO-NO, but we just generated these files and trust them
    //      (not to mention that they are not modules so require/import does not work with them)
    eval(fs.readFileSync(`${distCompiledDirName}/soyutils.js`, 'utf8')); //eslint-disable-line
    eval(fs.readFileSync(`${distCompiledDirName}/${wetFileName}`, 'utf8')); //eslint-disable-line

    //---[ For each call in content: validate the html it generates
    console.log(`***** Validating ${functionCalls.length} function(s) for ${wetFileName}...`);
    for (let i = 0; i < functionCalls.length; i++) {
        const functionName = functionCalls[i].match(/(wet\.builder\..*)\(/)[1];

        //---[ Call function, it returns our HTML content
        //console.log(`Evaluating [${functionCalls[i]}]`);
        const output = (eval(functionCalls[i]) || "").toString();  //eslint-disable-line
        if (output === "") {
            if (!functionName.toUpperCase().endsWith('SETUP')) {
                //not "setup": having no content is an error
                console.warn(`${functionName} returned no content, SKIPPING!`);
            }
            continue; //it was setup, skip output validation (it was done by mock functions above) and move on
        }

        //---[ Validate HTML
        console.log(`***** Function[${functionName}]; length = ${output.length} `);
        validateHTML(functionName, output);
    }
    console.log('***************');
}

module.exports = function generateTestFile(inputFilePath, theme, outputFileName, sections) {
    const version = process.env.CDTS_TEST_VERSION_NAME || 'v4_0_45';
    const filePath = `./dist/app/cls/WET/${theme}/${version}/cdts/test/${outputFileName}.html`;

    if (fs.existsSync(filePath)) {
        if (!warningIssued) {
            console.warn(`***** WARNING ***** Test file ${outputFileName}.html already exists. Skipping generation of this file and subsequent warnings will be suppressed.`);
            warningIssued = true;
        }
        return;
    }

    let data = fs.readFileSync(inputFilePath, 'utf8');

    if (data.match(/wet\.builder\.[\S]*[sS]etup\(/gm) !== null) {
        //---[ To support the wet.builder.setup function, we must make sure cdnEnv placeholder is defined
        //---[ also have to merge refFooter and refTop objects into a single "base" object
        //---[ also have to handle sub-theme if specified in refTop (for gcintranet/esdc|eccc)
        const tmpTopSection = sections.refTop || sections.serverRefTop || sections.splashTop || null;
        const tmpFooterSection = sections.refFooter || null;
        const tmpTopParsed = tmpTopSection ? JSON.parse(tmpTopSection) : {};
        const tmpFooterParsed = tmpFooterSection ? JSON.parse(tmpFooterSection) : {};

        //set cdnEnv
        if (!sections.cdnEnv) {
            if (tmpTopSection) {
                sections.cdnEnv = tmpTopParsed ? `"${tmpTopParsed.cdnEnv || 'localhost'}"` : '"localhost"';
            }
            else {
                sections.cdnEnv = '"localhost"';
            }
        }

        //merge refTop/refFooter
        //(instead of trying to figure out which was set, we'll reset them all to merged object)
        const tmpBase = JSON.stringify({ ...tmpTopParsed, ...tmpFooterParsed });
        sections.refTop = tmpBase;
        sections.serverRefTop = tmpBase;
        sections.splashTop = tmpBase;
        sections.refFooter = tmpBase;

        //subTheme vs css
        data = data.replace('~~subTheme~~', tmpTopParsed.subTheme ? `${tmpTopParsed.subTheme}-` : '');
    }

    for (let i = 0; i < Object.keys(sections).length; i++) {
        data = data.replace('"~' + Object.keys(sections)[i] + '~"', sections[Object.keys(sections)[i]]);
    }

    //---[ Before writing data to disk, validate the output of the various 'wet.builder.*' functions.
    validateBuilderFunctions(data, theme, version);

    fs.writeFileSync(filePath, data, 'utf8');
}
