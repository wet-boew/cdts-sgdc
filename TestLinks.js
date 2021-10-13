const fs = require('fs');
const axios = require('axios');
const ProxyAgent = require('https-proxy-agent');
const { performance } = require('perf_hooks');

module.exports = async function testFileLinks() {
    //Exception list (complete skip of validation)
    //Includes links found on legacy templates, links that require credentials and partial URLs
    const exceptionSyntaxLinks = ["https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}",
        "https://ssl-templates.services.gc.ca/app/cls/WET",
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
        "https://www.forces.gc.ca"]

    const exceptionHTTPLinks = ["http://www.gcpedia.gc.ca/",
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

    const exceptionIntranetLinks = ["https://intranet.canada.ca",
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

    const regex = /http[s]?:\/\/.*?(?="|')/g;
    const agent = ProxyAgent('http://proxy.prv:80');
    const directories = ["./src/", "./public/common/", "./public/gcintranet/", "./public/gcweb/", "./public/global/"];
    const config = (process.env.DISABLE_PROXY) ? null : {httpsAgent: agent, proxy: false};

    let matches = [];
    let errorCount = 0;
    let skippedSyntaxUrls = 0;
    let skippedIntranetUrls = 0;
    let successResponseUrls = 0;

    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //eslint-disable-line

    //Get all files from a directory
    function getFiles (dir, inFiles) {
        const myFiles = inFiles || [];
        const files = fs.readdirSync(dir);
        for (const i in files) {
            const name = dir + '/' + files[i];
            if (fs.statSync(name).isDirectory()) {
                getFiles(name, myFiles);
            }
            else {
                myFiles.push(name);
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
            successResponseUrls++;
        }
    }

    async function validateLinks(urls) {
        for (let i =0; i<urls.length; i++) {
            //Check if URL is in the exception list of syntax check and validation
            if (exceptionSyntaxLinks.some((l) => urls[i].startsWith(l))) {
                skippedSyntaxUrls++;
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
                        skippedIntranetUrls++;
                        continue;
                    }

                    try {
                        const res = await axios.head(validURL.href, config); //eslint-disable-line no-await-in-loop
                        checkAxiosResponse(res, validURL);
                    }
                    catch (headErr) {
                        console.warn("Warning: " + validURL.href + " failed with a HEAD request. Retrying with a GET request. The error was: " + headErr);
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
                    console.error("Error: An error occured with URL: " + urls[i] + " " + err);
                    errorCount++;
                }
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

    console.log("***** Validating links");
    const totalErrorCount = await validateLinks(urls);
    const endTime = performance.now();
    console.log(`Done, validating all the links took ${endTime - startTime} milliseconds.`);
    console.log(urls.length + " unique URLs were found.");
    console.log(successResponseUrls + " URLs had a successful response.");
    console.log(skippedSyntaxUrls + " URLs were skipped because of their syntax.");
    console.log(skippedIntranetUrls + " URLs were skipped because they are intranet links.");

    if (totalErrorCount !== 0) {
        console.error("Error: " + totalErrorCount + " error(s) were found when validating " + urls.length + " URLs.");
        throw new Error("Error: " + totalErrorCount + " error(s) were found when validating" + urls.length + " URLs.");
    }
}
