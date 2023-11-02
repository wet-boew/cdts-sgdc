const fs = require('fs');
const axios = require('axios');
//const ProxyAgent = require('https-proxy-agent'); //"require" no longer supported for https-proxy-agent v6.1+, switching to using "dynamic import" below
const { performance } = require('perf_hooks');
const { isBinaryFileSync } = require('isbinaryfile');

module.exports.testCDTSFileLinks = async function testCDTSFileLinks() {

    //Exception list (complete skip of validation)
    //Includes links found on legacy templates, links that require credentials and partial URLs
    const exceptionCDTSSyntaxLinks = ["https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}",
        "https://recherche-search.gc.ca/", //skipping this link because it forbibs GET/HEAD
        "https://cdts.service.canada.ca/app/cls/WET",
        "https://cdts.service.canada.ca/rn/cls/WET",
        "https://ajax.googleapis.com/ajax/libs/",
        "https://s2tst-cdn-canada.sade-edap.prv",
        "https://cdn-canada.services.gc.qat/",
        "https://www.canada.ca/etc/designs/canada/cdts",
        "https://dialogue/",
        "http://dialogue/",
        "https://mapayegc-mygcpay.tpsgc-pwgsc.gc.ca",
        "https://intranet.ec.gc.ca",
        "https://orl.prv",
        "https://canada.pch.gc.ca/",
        "http://forms-formulaires.prv",
        "https://impact.prv/",
        "http://hrsc-csrh.prv",
        "http://offices-bureaux.prv",
        "http://crt-orc.prv/",
        "https://www.forces.gc.ca",
        "https://www.google.ca/</a>",
        "https://www.w3schools.com</a>",
        "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG</a>",
        "https://templates.service.gc.ca/rn/cls/WET/gcweb/cdts/",
        "https://templates.service.gc.ca/rn/cls/WET/gcintranet/cdts/",
        "https://templates.service.gc.ca/app/",
        "https://intranet.canada.ca/images/GC",
        "https://intranet.canada.ca/images/Instagram.png"]

    const exceptionCDTSHTTPLinks = ["http://www.gcpedia.gc.ca/",
        "http://gcdirectory-gcannuaire.gc.ca/",
        "http://dialogue",
        "http://agora.on.prv/",
        "http://labour.prv/",
        "http://service-wiki.prv/",
        "http://sgpe-pmps.prv/",
        "http://crt-orc.prv/",
        "http://ort.prv/",
        "http://offices-bureaux.prv/",
        "http://forms-formulaires.prv/",
        "http://hrsc-csrh.prv/",
        "http://travail.prv/",
        "http://sgr-rms.prv/sgr-rms/",
        "http://service-wiki.prv/",
        "http://gcintranet.tpsgc-pwgsc.gc.ca/",
        "http://blogs-blogues.prv/"]

    const exceptionCDTSIntranetLinks = ["https://intranet.canada.ca",
        "https://gcconnex.gc.ca",
        "https://www.gcpedia.gc.ca",
        "https://gcdirectory",
        "https://templates.service",
        "https://gcannuaire-gcdirectory.gc.ca",
        "https://kmt-ogc.service.gc.ca",
        "http://agora.on",
        "https://gcintranet.tpsgc-pwgsc.gc.ca",
        "https://portal-portail.tbs-sct.gc.ca",
        "https://nscc-cnas.pwgsc-tpsgc.gc.ca"]

    const cdtsDirectories = ["./src/", "./public/common/", "./public/gcintranet/", "./public/gcweb/", "./public/global/"];

    await module.exports.testFileLinks(cdtsDirectories, exceptionCDTSSyntaxLinks, exceptionCDTSHTTPLinks, exceptionCDTSIntranetLinks);
}

//Checks the response of links found in the provided directories, using Axios
//A link can be exempt from testing if it is provided as part of an array in one of the three optional parameters. The three reasons a link can be exempt from testing are:
//  1. The syntax is invalid (ex. contains a parameter)
//  2. It is an HTTP link
//  3. It is an intranet link that may not give a successful response
//Once the check is complete, a summary is provided detailing how many tests were run, skipped and passed/failed.
module.exports.testFileLinks = async function testFileLinks(directories, exceptionSyntaxLinks = [], exceptionHTTPLinks = [], exceptionIntranetLinks = []) {
    const ProxyAgent = (await import('https-proxy-agent')).HttpsProxyAgent;

    const regex = /http[s]?:\/\/.*?(?="|'|\s|\)|]|<)/g;
    const agent = new ProxyAgent('http://proxy.prv:80');
    const config = (process.env.DISABLE_PROXY) ? {} : { httpsAgent: agent, proxy: false };

    let matches = [];
    let errorCount = 0;
    let processedCount = 0;
    const maxErrorCount = process.env.TESTLINKS_MAXERRORCOUNT || '20';
    let skippedSyntaxUrlCount = 0;
    let skippedIntranetUrlCount = 0;
    let successResponseUrlCount = 0;
    let skippedBinaryFileCount = 0;

    // It seems canada.ca started ignoring connections with user agents they deem unacceptable,
    // resulting in timeouts for all canada.ca links.  To work around this, we'll
    // pass ourselves off as Firefox and specify extra headers that are apparently now needed.
    config.headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
        //'Accept-Language': 'en-CA,en-US;q=0.7,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'cross-site',
        //'Sec-Fetch-User': '?1',
        timeout: 5000, //set timeout to 5s
    };

    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //eslint-disable-line

    //Get all files from a directory
    function getFiles(dir, inFiles) {
        const myFiles = inFiles || [];
        const files = fs.readdirSync(dir);

        for (const i in files) {
            const name = dir + '/' + files[i];

            if (fs.statSync(name).isDirectory()) {
                getFiles(name, myFiles);
            }
            else if (!isBinaryFileSync(name)) {
                myFiles.push(name);
            }
            else {
                skippedBinaryFileCount++;
                continue;
            }
        }
        return myFiles;
    }

    //Check response - regex determines if response starts with '2' or '3' followed by 2 digits, or is 401 (this will be considered valid)
    function checkAxiosResponse(res, validURL) {
        if ((/([23][\d]{2})|401/).test(res.status) === false) {
            console.error("Error: " + validURL.href + "does not have a valid response. Status: " + res.status);
            errorCount++;
        }
        else {
            successResponseUrlCount++;
        }
    }

    async function validateLinks(urls) {
        for (let i = 0; i < urls.length; i++) {
            processedCount++;

            //Check if URL is in the exception list of syntax check and validation
            if (exceptionSyntaxLinks.some((l) => urls[i].startsWith(l))) {
                skippedSyntaxUrlCount++;
                continue;
            }

            //Issue error message if URL starts with HTTP unless it is part of the HTTP exception list
            if (urls[i].startsWith("http:/") && !exceptionHTTPLinks.some((l) => urls[i].startsWith(l))) {
                console.error("Error: HTTP URL Found: " + urls[i]);
                errorCount++;
            }
            else {
                try {
                    const validURL = new URL(urls[i]);
                    //We can choose to skip testing for intranet links
                    if (process.env.DISABLE_PROXY && ((validURL.host).endsWith('.prv') || exceptionIntranetLinks.some((l) => validURL.href.startsWith(l)))) {
                        skippedIntranetUrlCount++;
                        continue;
                    }

                    let sendGET = false;
                    let sendHEAD = true;

                    //canada.ca now ignores HEAD requests, which results in a long timeout, this is a quick and dirty way to go straight to GET
                    if (validURL.host.endsWith('canada.ca') || validURL.host.endsWith('.gc.ca')) {
                        sendHEAD = false;
                        sendGET = true;
                    }

                    if (sendHEAD) {
                        try {
                            const res = await axios.head(validURL.href, config); //eslint-disable-line no-await-in-loop
                            checkAxiosResponse(res, validURL);
                        }
                        catch (headErr) {
                            console.warn("Warning: " + validURL.href + " failed with a HEAD request. Retrying with a GET request. The error was: " + headErr);
                            sendGET = true; //since HEAD didn't work, we'll try GET
                        }
                    }

                    if (sendGET) {
                        try {
                            const res = await axios.get(validURL.href, config); //eslint-disable-line no-await-in-loop
                            checkAxiosResponse(res, validURL);
                        }
                        catch (getErr) {
                            console.error("Error: " + validURL.href + " encountered the following error: " + getErr.message);
                            errorCount++;
                        }
                    }
                }
                catch (err) {
                    console.error("Error: An error occurred with URL: " + urls[i] + " " + err);
                    errorCount++;
                }
            }

            if (errorCount >= maxErrorCount) {
                console.error(`MAXIMUM NUMBER OF ERRORS REACHED (${errorCount}), ABORTING PROCESS.`);
                break;
            }
        }
        return errorCount;
    }

    if (process.env.DISABLE_TESTLINKS) return;

    const startTime = performance.now();
    console.log("***** Scanning directories: " + directories);
    let files = [];
    directories.forEach((directory) => {
        files = files.concat(getFiles(directory));
    });

    console.log("***** Reading files and scanning for links");
    for (let i = 0; i < files.length; i++) {
        const fileMatches = fs.readFileSync(files[i], 'utf8').match(regex);
        if (fileMatches !== null) matches = matches.concat(fileMatches);
    }

    const urls = [...new Set(matches)];

    console.log("***** Validating links:");
    const totalErrorCount = await validateLinks(urls);
    const endTime = performance.now();
    console.log(`Done, validating links took ${endTime - startTime} milliseconds.`);
    console.log(`${processedCount} URLs processed out of ${urls.length} unique URLs found.`);
    console.log(successResponseUrlCount + " URLs had a successful response.");
    console.log(skippedSyntaxUrlCount + " URLs were skipped because of their syntax.");
    console.log(skippedIntranetUrlCount + " URLs were skipped because they are intranet links.");
    console.log(skippedBinaryFileCount + " URLs were skipped because they are binary files.");

    if (totalErrorCount !== 0) {
        const errorMessage = `Error: ${totalErrorCount} error(s) were found when validating ${processedCount}/${urls.length} URLs.`;
        console.error(errorMessage);
        if (!process.env.DISABLE_TESTLINKS_THROWONFAIL) {
            throw new Error(errorMessage);
        }
    }
    else {
        console.log("TestLinks Completed Successfully.");
    }
}
