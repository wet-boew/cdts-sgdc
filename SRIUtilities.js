const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

//Write the output file with the file names and their hashes
module.exports.writeFilesSRIHashes = function writeFilesSRIHashes(inputJSONFileName, outputJSONFileName) {
    const sriFileList = fs.readFileSync(inputJSONFileName);
    const files = JSON.parse(sriFileList);
    const hashes = module.exports.getSRIHashes(files);

    //create target directory if it doesn't exist
    const distStaticTargetDirName = path.dirname(outputJSONFileName);
    if (!fs.existsSync(distStaticTargetDirName)) fs.mkdirSync(distStaticTargetDirName, { recursive: true });

    //write output to file
    console.log(`Writing SRI hash map to: ${outputJSONFileName}`);
    fs.writeFileSync(outputJSONFileName, JSON.stringify(hashes), { encoding: 'utf8' });
}

//Read the JSON file containing list of files that require a hash
module.exports.getSRIHashes = function getSRIHashes(files) {
    const hashObj = {};
    files.forEach((f) => {
        if (fs.existsSync(f)) {
            const fileContent = fs.readFileSync(f, 'utf8');
            hashObj[f] = module.exports.generateSRIHash(fileContent);
        }
    });
    return hashObj;
}

//Return hash when given file contents
module.exports.generateSRIHash = function generateSRIHash(fileContent) {
    return `sha512-${crypto.createHash('sha512').update(fileContent).digest('base64')}`;
}
