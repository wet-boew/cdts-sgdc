module.exports = function testFileLinks(done)
{
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

    const fs = require('fs');
    const regex = /http[s]?:\/\/.*?(?="|')/g;
    const axios = require('axios');
    const ProxyAgent = require('https-proxy-agent');
    const agent = ProxyAgent('http://proxy.prv:80');

    let validURL;	
    let directories = ["./src/", "./public/common/", "./public/gcintranet/", "./public/gcweb/", "./public/global/"];
    let matches = [];
    let config = (process.env.DISABLE_PROXY) ? null : {httpsAgent: agent, proxy: false};

    //Exception list (complete skip of validation)
    //Includes links found on legacy templates, links that require credentials and partial URLs
    let exceptionSyntaxList = ["https://www.canada.ca/etc/designs/canada/cdts/gcweb/${definition.themeVersion}",
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
                            "http://crt-orc.prv/"] 
                            
    let exceptionHTTPList = ["http://www.gcpedia.gc.ca/", 
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

    //Get all files from a directory
    function getFiles (dir, myFiles){
        myFiles = myFiles || [];
        let files = fs.readdirSync(dir);
        for (let i in files){
            let name = dir + '/' + files[i];
            if (fs.statSync(name).isDirectory()){
                getFiles(name, myFiles);
            } else {
                myFiles.push(name);
            }
        }
        return myFiles;
    }

    async function validateLinks(){
        let errorCount = 0;
        for (let i =0; i<url.length; i++){
            //Check if URL is in the exception list of syntax check and validation
            if (!exceptionSyntaxList.some(exceptionSyntaxList => url[i].startsWith(exceptionSyntaxList))){	
                //Issue error message if URL starts with HTTP unless it is part of the HTTP exception list
                if (url[i].startsWith("http:/") && !exceptionHTTPList.some(exceptionHTTPList => url[i].startsWith(exceptionHTTPList))){
                    console.error("HTTP URL Found: " + url[i]);
                    errorCount++;
                }
                else {
                    try{
                        validURL = new URL(url[i]);
                        //We can choose to skip testing for intranet links
                        if (!(process.env.DISABLE_PROXY && (validURL.host).split(".")[1] == "prv")){
                            try {
                                const res = await axios.get(validURL.href, config);
                                if (/4\d[^\D1]/.test(res.status) === true) console.log(validURL.href + "does not have a valid response. Status: " + res.status);
                            } catch(err) { 
                                console.error(validURL.href + " encountered the following error: " + err.message);
                                errorCount++;
                            }
                        }
                    } catch (err) {
                        console.error(err);
                        errorCount++;
                    }				
                }		
            }
        }
        return errorCount;
    }

    console.log("***** Scanning directories: " + directories);
    let files = [];
    directories.forEach( directory => {
        files = files.concat(getFiles(directory));
    });

    console.log("***** Reading files and scanning for links");
    for (let i = 0; i < files.length; i++) {
        let fileMatch = fs.readFileSync(files[i], 'utf8').match(regex);
        if (fileMatch != null) matches = matches.concat(fileMatch);
    }

    let url = [...new Set(matches)];

    console.log("***** Validating links");
    validateLinks().then((errorCount) => {if (errorCount !=0){ 
		throw new Error(errorCount + " error(s) were found when validating URLs.");
		done(false);
	} else {
		done();
	}});
}