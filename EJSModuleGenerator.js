/**
  This module contains functions to process a group of "ejs" template files into a single js file that can be used in the browser.
  (bascially creating an output similar to what the old SOY closure compiler used to produce).

  Each ejs file will be processed twice by EJS. Each pass will be configured to recognize different delimiters.
      - The first pass will take the input file and use EJS to apply localization, resulting in a language-specific EJS template
        - Delimiter: <^ ^>
      - The second pass will take this language-specific template and use EJS to compile into a function usable at runtime in the browser.
        - Delimiter: <% %>   (The EJS default)

  In other words:   <input file>+<language file>  =>  EJS compile & render  =>  <localized templates>  =>  EJS compile  =>  <output file>

  Also in this modules are the functions to extract localization messages and merge message files (see Gruntfile.js#i18n-ejs and README-localization for details)

  Refs:
    - https://ejs.co/
    - https://github.com/mde/ejs
    - https://github.com/mde/ejs/blob/main/lib/ejs.js
    - https://github.com/RyanZim/EJS-Lint
*/

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ejs = require('ejs'); //https://github.com/mde/ejs
const ejsLint = require('ejs-lint'); //https://github.com/RyanZim/EJS-Lint

function getSourceMessageLocaleKey(sourceMessage) {
    //console.log(`[${sourceMessage}] -> [${crypto.createHash('sha1').update(sourceMessage).digest('hex')}]`);
    return crypto.createHash('sha1').update(sourceMessage).digest('hex');
}

/**
    Runs the EJS translation phase on the specified input text.

    @param srcDirPath           Source base directory containing the language files (e.g. './src/gcweb')
    @param inputTemplateText    Input EJS template (localization delimiters <^ ... ^>)
    @param locale               Locale (e.g. 'en')
    @param ejsFilePath          EJS source file path (used in error messages)
    @return The localized template text.
*/
function localizeEJSModule(srcDirPath, inputTemplateText, locale, ejsFilePath) {

    //---[ Lint EJS input
    const lintingResult = ejsLint(inputTemplateText, { delimiter: '^' });
    if (lintingResult) {
        console.error(`EJSModuleGenerator.localizeEJSModule: Linting error found in [${ejsFilePath}]:`);
        console.error(lintingResult);
        throw lintingResult;
    }

    //---[ Load locale/message file
    const localeFilePath = `${srcDirPath}/wet-messages.${locale}.json`;
    let localeData;
    if (fs.existsSync(localeFilePath)) {
        localeData = JSON.parse(fs.readFileSync(localeFilePath, 'utf8'));
    }
    else {
        console.warn(`WARNING: Locale file [${localeFilePath}] not found, proceeding with default messages...`);
        localeData = {};
    }

    //---[ Compile EJS template (for localization) of the actual EJS template text
    const ejsFunction = ejs.compile(inputTemplateText, {
        compileDebug: true,
        debug: false,
        'async': false,
        'strict': false,
        client: false,
        cache: false,
        openDelimiter: '<',
        closeDelimiter: '>',
        delimiter: '^',
    });

    //---[ Render our localized EJS template
    function msg(key) {
        const keyHash = getSourceMessageLocaleKey(key);
        const msgData = localeData[keyHash] || {};

        return msgData.target || key;
    }
    const localizedOutput = ejsFunction({ msg, templateLocale: locale });

    return localizedOutput;
}

/**
    Creates a file containing all precompilation of the EJS templates found in a given directory.

    @param srcDirPath   Source base directory containing the EJS files (e.g. './src/gcweb')
    @param trgFilePath  Target javascript file path (e.g. './tmp/cgweb/wet-en.js')
    @param locale       Locale (e.g. 'en')
    @param compileDebug (boolean) Whether or not to enable debug information in generated javascript.
*/
module.exports.compileEJSModule = function compileEJSModule(srcDirPath, trgFilePath, locale = 'en', compileDebug = false) {
    console.log(`--- Processing [${locale}] EJS templates in ${srcDirPath} ...`);

    //---[ List ".ejs" files (no files = no output)
    const files = fs.readdirSync(srcDirPath).filter((f) => path.extname(f) === '.ejs');
    if (files.length === 0) return;

    let output = '';

    //---[ Get header if file exists
    const headerFilename = `${srcDirPath}/wet-header.js`;
    if (fs.existsSync(headerFilename)) {
        output += fs.readFileSync(headerFilename, 'utf8');
    }

    //---[ Compile/add each ejs file found
    files.forEach((ejsFile) => {
        const ejsFilePath = `${srcDirPath}/${ejsFile}`;
        const wetFunctionName = path.basename(ejsFile, path.extname(ejsFile));

        console.log(`---    Compiling ${ejsFilePath}`);
        const localizedTemplate = localizeEJSModule(srcDirPath, fs.readFileSync(ejsFilePath, 'utf8'), locale, ejsFilePath);

        //---[ HTML escape function to be used in templates
        //(The default function generated by EJS escapes `&` to `&amp;` which causes problem for clients using HTML entities in their arguments.
        // This function is the EJS generated source code minus the handling of `&` characters.)
        /*eslint-disable*/
        function cdtsEscapeFn(markup) {
            var _ENCODE_HTML_RULES = {
                "<": "&lt;"
                , ">": "&gt;"
                , '"': "&#34;"
                , "'": "&#39;"
            }
                , _MATCH_HTML = /[<>'"]/g;
            function encode_char(c) {
                return _ENCODE_HTML_RULES[c] || c;
            };
            return markup == undefined
                ? ''
                : String(markup)
                    .replace(_MATCH_HTML, encode_char);
        };
        /*eslint-enable*/

        //---[ Lint EJS input
        const lintingResult = ejsLint(localizedTemplate, { delimiter: '%' });
        if (lintingResult) {
            console.error(`EJSModuleGenerator.compileEJSModule: Linting error found in [${ejsFilePath}]:`);
            console.error(lintingResult);
            throw lintingResult;
        }

        const ejsFunction = ejs.compile(localizedTemplate, {
            compileDebug,
            debug: false,
            'async': false,
            'strict': false,
            client: true,
            cache: false,
            _with: false,
            localsName: 'pr',
            escape: cdtsEscapeFn,
            rmWhitespace: true, //NOTE: We could specify a custom escape function, maybe that would avoid EJS generating the same function in every template (see documentation)
        });
        output += `wet.builder.${wetFunctionName} = `; //create function based on file name
        output += ejsFunction.toString(); //get function's source
        output += '\n';
    });

    //---[ Write results to target file
    const distStaticTargetDirName = path.dirname(trgFilePath);
    if (!fs.existsSync(distStaticTargetDirName)) fs.mkdirSync(distStaticTargetDirName, { recursive: true }); //create target directory if it doesn't exist
    fs.writeFileSync(trgFilePath, output, { encoding: 'utf8' });
}

/**
  Processes all EJS template found in specified directory and creates/updates a base language file.

  @param baseDirPath  Base directory containing the EJS and language files (e.g. './src/gcweb')
  @param locale       Locale (e.g. 'en')
*/
module.exports.extractEJSModuleMessages = function extractEJSModuleMessages(baseDirPath, locale) {
    const localeFilePath = `${baseDirPath}/wet-messages.${locale}.json`;

    //---[ List ".ejs" files (no files = no output)
    const files = fs.readdirSync(baseDirPath).filter((f) => path.extname(f) === '.ejs');
    if (files.length === 0) return;

    console.log(`--- Extracting [${locale}] messages from ${baseDirPath} to ${localeFilePath}...`);

    //---[ Load locale/message file
    let oldLocaleData;
    if (fs.existsSync(localeFilePath)) {
        oldLocaleData = JSON.parse(fs.readFileSync(localeFilePath, 'utf8'));
    }
    else {
        console.warn(`WARNING: Locale file [${localeFilePath}] not found, creating new...`);
        oldLocaleData = {};
    }

    //---[ Create new locale data
    const localeData = {
        sourceLanguage: locale,
        targetLanguage: locale,
    };

    //---[ Compile/Render (1st phase) of each EJS file found, usign the process to gather the localization messages
    files.forEach((ejsFile) => {
        const ejsFilePath = `${baseDirPath}/${ejsFile}`;

        //---[ Load/lint EJS file content
        const ejsContent = fs.readFileSync(ejsFilePath, 'utf8');
        const lintingResult = ejsLint(ejsContent, { delimiter: '^' });
        if (lintingResult) {
            console.error(`EJSModuleGenerator.extractEJSModuleMessages: Linting error found in [${ejsFilePath}]:`);
            console.error(lintingResult);
            throw lintingResult;
        }

        const ejsFunction = ejs.compile(ejsContent, {
            compileDebug: true,
            debug: false,
            'async': false,
            'strict': false,
            client: true,
            cache: false,
            openDelimiter: '<',
            closeDelimiter: '>',
            delimiter: '^',
        });

        function msg(key) {
            const keyHash = getSourceMessageLocaleKey(key);

            localeData[keyHash] = {
                source: key,
                target: (oldLocaleData[keyHash] || {}).target || null,
            };

            return localeData[keyHash].target || key;
        }
        ejsFunction({ msg }); //(we don't care about the rendered template here, we just wanted to capture the message/keys)
    });

    //---[ Write results to file
    fs.writeFileSync(localeFilePath, JSON.stringify(localeData, null, 4), { encoding: 'utf8' });
}

/**
  Processes all EJS template found in specified directory and creates/updates a base language file.

  @param baseDirPath                 Base directory containing the language files (e.g. './src/gcweb')
  @param sourceLocale                The base/source locale (e.g. 'en')
  @param targetLocales               (array) List of target locale files (e.g. ['fr'])
  @param removeObsoleteMessages      (boolean) Whether to remove message in target locales that are no longer found in source locale.
  @param throwOnUntranslatedMessagew (boolean) Whether to throw an error if untranslated messages were inserted/detected in target languages.
*/
module.exports.mergeLanguageFiles = function mergeLanguageFiles(baseDirPath, sourceLocale, targetLocales, removeObsoleteMessages, throwOnUntranslatedMessages) {
    const sourceLocaleFilePath = `${baseDirPath}/wet-messages.${sourceLocale}.json`;

    //---[ Load source locale/message file (must exist)
    const sourceLocaleData = JSON.parse(fs.readFileSync(sourceLocaleFilePath, 'utf8'));

    //---[ For each locales...
    targetLocales.forEach((targetLocale) => {
        const targetLocaleFilePath = `${baseDirPath}/wet-messages.${targetLocale}.json`;
        console.log(`--- Merging [${sourceLocaleFilePath}] messages to [${targetLocaleFilePath}]...`);

        //---[ Load target locale/message file
        let targetLocaleData;
        if (fs.existsSync(targetLocaleFilePath)) {
            targetLocaleData = JSON.parse(fs.readFileSync(targetLocaleFilePath, 'utf8'));
        }
        else {
            console.warn(`WARNING: Locale file [${targetLocaleFilePath}] not found, creating new...`);
            targetLocaleData = {
                sourceLanguage: sourceLocale,
                targetLanguage: targetLocale,
            };
        }

        //---[ Check for keys that are no longer used...
        const keysToRemove = [];
        for (const keyHash in targetLocaleData) {
            if (!(keyHash in sourceLocaleData)) {
                if (removeObsoleteMessages) {
                    keysToRemove.push(keyHash);
                }
                else {
                    console.warn(`WARNING: Found an entry in [${targetLocale}] that is no longer found in [${sourceLocale}], it should be removed. Key=[${keyHash}]`);
                }
            }
        }
        for (let i = 0; i < keysToRemove.length; i++) delete targetLocaleData[keysToRemove[i]]; //remove obsolete keys if any were found

        //---[ Add new keys...
        const untranslatedKeys = [];
        for (const keyHash in sourceLocaleData) {
            if (!(keyHash in targetLocaleData)) {
                targetLocaleData[keyHash] = {
                    source: sourceLocaleData[keyHash].source,
                    target: null,
                };
            }

            //if key doesn't have translation yet, keep track
            if (!(keyHash === 'sourceLanguage' || keyHash === 'targetLanguage' || targetLocaleData[keyHash].target)) {
                untranslatedKeys.push(keyHash);
            }
        }

        //---[ Write (back) to file
        fs.writeFileSync(targetLocaleFilePath, JSON.stringify(targetLocaleData, null, 4), { encoding: 'utf8' });

        //---[ If untranslated keys were found, we can now react
        if (untranslatedKeys.length > 0) {
            console.error(`ERROR: Found ${untranslatedKeys.length} untranslated message(s) in [${targetLocale}], id(s): ${untranslatedKeys.join(', ')}`);
            if (throwOnUntranslatedMessages) throw new Error(`Found ${untranslatedKeys.length} untranslated message(s) in [${targetLocale}]`);
        }
    });
}

/**
   Converts XLIFF (1.2) translation file to our JSON format.
   (This function is not meant to be used long-term, it's mostly a one-off in our conversion from Google closure SOY templates.)

   NOTE: This function requires the "xmldom" and "xpath" npm packages to be installed.
*/
module.exports.convertXliffToJSON = function convertXliffToJSON(sourceFilePath, targetFilePath) {
    const domParser = require('xmldom').DOMParser;
    const xpath = require('xpath');

    const xpathSelect = xpath.useNamespaces({ "def": "urn:oasis:names:tc:xliff:document:1.2" });
    const parser = new domParser();

    console.log(`--- Converting XLIFF file ${sourceFilePath} to JSON file ${targetFilePath}...`);

    const sourceXmlDoc = parser.parseFromString(fs.readFileSync(sourceFilePath, 'utf8'));
    const targetData = {};

    const fileNode = xpathSelect('//def:file', sourceXmlDoc)[0];
    targetData.sourceLanguage = fileNode.getAttribute('source-language');
    targetData.targetLanguage = fileNode.getAttribute('target-language');

    const entries = xpathSelect('//def:trans-unit', sourceXmlDoc);
    for (let i = 0; i < entries.length; i++) {
        const sourceNode = entries[i].getElementsByTagName('source')[0];
        const targetText = entries[i].getElementsByTagName('target')[0].textContent;

        targetData[getSourceMessageLocaleKey(sourceNode.textContent)] = {
            source: sourceNode.textContent,
            target: targetText.length > 0 ? targetText : null,
        }
        if (sourceNode.childNodes.length > 1) console.warn(`WARNING: Message [xliffId=${sourceNode.parentNode.getAttribute('id')}; jsonId=${getSourceMessageLocaleKey(sourceNode.textContent)}] contains sub-elements, it will have to be corrected manually.`);
    }

    fs.writeFileSync(targetFilePath, JSON.stringify(targetData, null, 4), { encoding: 'utf8' });
}
