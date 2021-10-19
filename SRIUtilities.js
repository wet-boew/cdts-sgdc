const fs = require('fs');
const crypto = require('crypto');

//Write the output file with the file names and their hashes
module.exports.writeFilesSRIHashes = function writeFilesSRIHashes(inputJSONFileName, outputJSONFileName) {
    const sriFileList = fs.readFileSync(inputJSONFileName);
    const files = JSON.parse(sriFileList);
    const hashes = module.exports.getSRIHashes(files);

    fs.writeFileSync(outputJSONFileName, JSON.stringify(hashes), {encoding: 'utf8'});
}

//Read the JSON file containing list of files that require a hash
module.exports.getSRIHashes = function getSRIHashes(files) {
    const hashObj = {};
    files.forEach((f) => {
        const fileContent = fs.readFileSync(f, 'utf8');
        hashObj[f] = module.exports.generateSRIHash(fileContent);
    });
    return hashObj;
}

//Return hash when given file contents
module.exports.generateSRIHash = function generateSRIHash(fileContent) {
    return `sha512-${crypto.createHash('sha512').update(fileContent).digest('base64')}`;
}