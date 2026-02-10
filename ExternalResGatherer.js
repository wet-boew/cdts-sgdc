/* eslint-disable no-await-in-loop */
/*
  External Resource Gatherer

  Functions of this module are reponsible for grabbing the various external files needed by CDTS.
  (mostly HTML snippets from esdc.prv for the GCintranet template)
*/

const fs = require('fs');
//const path = require('path');
const axios = require('axios');

const { exceptionCDTSHTTPLinks } = require('./TestLinks');


const defaultResourceList = [
    { targetFilePath: ['./public/global/esdcmenu-eng.html', './public/global/esdcmenu1-eng.html'], url: 'https://intranet.esdc-edsc.canada.ca/_conf/assets/en/mega_menu/esdcmenu-eng.html', sourcePageUrl: ['https://intranet.esdc-edsc.canada.ca/js/template-front-end/chunks/chunk-esdc-prv.config.js', 'https://intranet.esdc-edsc.canada.ca/js/template.js', 'https://intranet.esdc-edsc.canada.ca/en/index.shtml'] },
    { targetFilePath: ['./public/global/esdcmenu-fra.html', './public/global/esdcmenu1-fra.html'], url: 'https://intranet.esdc-edsc.canada.ca/_conf/assets/fr/mega_menu/esdcmenu-fra.html', sourcePageUrl: ['https://intranet.esdc-edsc.canada.ca/js/template-front-end/chunks/chunk-esdc-prv.config.js', 'https://intranet.esdc-edsc.canada.ca/js/template.js', 'https://intranet.esdc-edsc.canada.ca/fr/index.shtml'] },
    { targetFilePath: './public/global/esdcfooter-eng.html', url: 'https://intranet.esdc-edsc.canada.ca/_conf/assets/en/footer/esdcfooter-eng.html', sourcePageUrl: ['https://intranet.esdc-edsc.canada.ca/js/template-front-end/chunks/chunk-esdc-prv.config.js', 'https://intranet.esdc-edsc.canada.ca/js/template.js', 'https://intranet.esdc-edsc.canada.ca/en/index.shtml'] },
    { targetFilePath: './public/global/esdcfooter-fra.html', url: 'https://intranet.esdc-edsc.canada.ca/_conf/assets/fr/footer/esdcfooter-fra.html', sourcePageUrl: ['https://intranet.esdc-edsc.canada.ca/js/template-front-end/chunks/chunk-esdc-prv.config.js', 'https://intranet.esdc-edsc.canada.ca/js/template.js', 'https://intranet.esdc-edsc.canada.ca/fr/index.shtml'] },
    { targetFilePath: './public/gcintranet/ajax/sitemenu-eng.html', url: 'https://intranet.canada.ca/wet/sitemenu-eng.html', sourcePageUrl: 'https://intranet.canada.ca/index-eng.asp' },
    { targetFilePath: './public/gcintranet/ajax/sitemenu-fra.html', url: 'https://intranet.canada.ca/wet/sitemenu-fra.html', sourcePageUrl: 'https://intranet.canada.ca/index-fra.asp' },
];


/**
 * Verifies that the resource's parent page still contains a reference to the resource.
 * (Just a sanity check in case source web site changes things without letting CDTS know)
 *
 * Throws an error if resource url cannot be found in sourcePageUrl.
 *
 * If sourcePageUrl is an array, will be validated as a chain
 * (ie it will validate that resource.url is found in resource.sourcePageUrl[0], which is found on resource.sourcePageUrl[1], etc)
 */
async function validateSourceProvenance(resource) {
    if (!resource.sourcePageUrl) return;

    if (Array.isArray(resource.sourcePageUrl)) {
        //If sourcePageUrl is an array, validate the whole chain of ownership

        let resourceUrl = resource.url;
        let sourceUrls = resource.sourcePageUrl;
        while (sourceUrls.length > 0) {
            validateSourceProvenance({ url: resourceUrl, sourcePageUrl: sourceUrls[0] });
            resourceUrl = sourceUrls[0];
            sourceUrls = sourceUrls.splice(1);
        }

        return;
    }

    const response = await axios.get(resource.sourcePageUrl);
    if (response.status !== 200) throw new Error(`Invalid HTTP status received from [${resource.sourcePageUrl}]: ${response.status}`);

    //---[ Try to find the url in source page
    if (!response.data.includes(resource.url)) {
        //---[ OK, URL not found, try again without the host in case a relative URL is used
        const tmpURL = new URL(resource.url);
        console.log(`Trying to see if [${tmpURL.pathname}] is in [${resource.sourcePageUrl}]`);
        if (!response.data.includes(tmpURL.pathname)) {
            //---[ Hum, root-relative is not found, try AGAIN with relative to where the parent is

            const tmpSourceURL = new URL(resource.sourcePageUrl); // e.g. "/js/template.js"
            const index = tmpSourceURL.pathname.lastIndexOf('/');
            const tmpSourceDirectory = index >= 0? tmpSourceURL.pathname.substring(0, index + 1): '/'; // e.g. "/js/"

            //(now that we have the source file's parent "directory", we can remove this value from the tmpURL to make it relative
            let tmpURLPath = tmpURL.pathname; // e.g. "/js/template-front-end/chunks/chunk-esdc-prv.config.js"
            if (tmpURLPath.startsWith(tmpSourceDirectory)) tmpURLPath = tmpURLPath.replace(tmpSourceDirectory, ''); // e.g. "/template-front-end/chunks/chunk-esdc-prv.config.js"

            console.log(`Trying to see if [${tmpURLPath}] is in [${resource.sourcePageUrl}]`);
            if (!response.data.includes(tmpURLPath)) {
                throw new Error(`Reference source page [${resource.sourcePageUrl}] no longer seem to contain a reference to resource URL [${resource.url}]. Is that file still usable?`);
            }
        }
    }
}

/**
 * Transform the specified resource content to add a comment and optionally fix some issues.
 * (Some resource we get are not directly usable, containing for example relative links
 *  or `http` links for reources accessible with `https`)
 *
 * NOTE: This implementation is a bit simplistic/naive but will do for our purposes.
 *
 */
function transformResouceContent(resource, content) {
    let result = content;

    //Add a comment to indicate this file's origin
    if (resource.url.toLowerCase().endsWith('.html') && resource.skipComment !== false) {
        const htmlRegex = /<html.*?>/;
        const commentLine = `<!-- The contents of this file were retrieved from ${resource.url} -->\n`;
        if (result.match(htmlRegex)) {
            result = result.replace(htmlRegex, `$&\n${commentLine}`);
        }
        else {
            result = commentLine + result;
        }
    }

    //Make relative links absolute
    if (resource.enforceAbsoluteLinks !== false) {
        const url = new URL(resource.url);

        result = result.replaceAll('href="/', `href="${url.origin}/`);
        result = result.replaceAll("href='/", `href='${url.origin}/`);
    }

    //Make http links https
    if (resource.enforceHttps !== false) {
        // There are two main ways to use the http exception list from TestLinks...
        // The efficient way would be to match on all links and rebuild content as we go through them
        // The other way is simpler but involves a lot of search&replace... let's go simple
        for (const httpException of exceptionCDTSHTTPLinks) {
            // Replace any acceptable http link with a temporary placeholder
            result = result.replaceAll(httpException, `&*&*&${httpException}`);
        }

        //Replace (remaining) http links with https
        result = result.replaceAll('href="http://', 'href="https://');
        result = result.replaceAll("href='http://", "href='https://");

        //Put back the http links
        result = result.replaceAll('href="&*&*&http://', 'href="http://');
        result = result.replaceAll("href='&*&*&http://", "href='http://");
    }

    //Convert line endings to Unix
    if (resource.enforceLineEndings !== false) {
        result = result.replaceAll('\r\n', '\n');
    }

    return result;
}

/**
 * Saves specified content to specified file path.
 *
 * @returns {boolean} Whether or not the resource was changed.
 */
async function saveFileContent(filePath, content) {
    let contentChanged; //= false;

    //---[ Check if file exists/changed
    if (await fs.promises.stat(filePath).then(() => true, () => false)) { //check if file exists
        const originalContent = await fs.promises.readFile(filePath, { encoding: 'utf8' });
        contentChanged = originalContent !== content;
        if (contentChanged) console.log(`  ***** FILE [${filePath}] WAS MODIFIED!`);
    }
    else {
        //file did not exist: content is new!
        contentChanged = true;
        console.log(`  ***** FILE [${filePath}] IS NEW!`);
    }

    //---[ (Over)write to file
    if (contentChanged) {
        await fs.promises.writeFile(filePath, content, { encoding: 'utf8' });
    }

    return contentChanged;
}

/**
 * Downloads the specified resource to local project.
 *
 * @returns {boolean} Whether or not the resource was changed.
 */
async function downloadExternalResource(resource) {
    if (!resource.url || !resource.targetFilePath) return false;

    //---[ Get external file
    const response = await axios.get(resource.url);
    if (response.status !== 200) throw new Error(`Invalid HTTP status received from [${resource.url}]: ${response.status}`);

    //---[ Apply any transformation
    const content = transformResouceContent(resource, response.data);

    //---[ Save to local repo
    let contentChanged = false;
    if (Array.isArray(resource.targetFilePath)) {
        for (const filePath of resource.targetFilePath) {
            const fileChanged = await saveFileContent(filePath, content);
            contentChanged ||= fileChanged; //must be done separately from function call otherwise Javascript can shortcut the call out
        }
    }
    else {
        contentChanged = await saveFileContent(resource.targetFilePath, content);
    }

    return contentChanged;
}

/**
 * Downloads the specified external resources, saving them at their prescribed destination.
 * (Only update files, does NOT do any commit or push)
 *
 * @param resourceList Array of resource objects ({url, targetFilePath, sourcePageUrl}) to be processed.
 */
module.exports.downloadExternalResources = async function downloadExternalResources(resourceList = defaultResourceList) {

    console.log('Gathering External Resources...');
    console.log();

    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //eslint-disable-line

    try {
        let contentChanged = false;

        for (const resource of resourceList) {
            if (!resource.url || !resource.targetFilePath) continue;
            console.log(`Processing [${resource.targetFilePath}]...`);

            await validateSourceProvenance(resource);
            const resourceChanged = await downloadExternalResource(resource);
            contentChanged ||= resourceChanged; //must be done separately from function call otherwise Javascript can shortcut the call out
        }

        console.log();
        console.log('SUCCESS! All external files were re-downloaded.');
        if (contentChanged) {
            console.log('***** *** ONE OR MORE FILES WERE MODIFIED! ***');
            console.log('***** *** All links should now be re-tested (ie `npm run test-links`) ***');
            console.log('***** *** Changes can then be committed/pushed. ***');
        }
        else {
            console.log('No changes detected.');
        }
    }
    catch (err) {
        console.error(`ERROR: An error occured processing one of the resource files.`);
        console.error(`ERROR: ${err}`);
        console.error(`       MAKE SURE TO FIX ALL ERRORS BEFORE PROCEEDING WITH COMMIT/PUSH.`);
    }
}

//module.exports.downloadExternalResources();
