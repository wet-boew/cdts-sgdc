const fs = require('fs');
const assert = require('assert');
const {writeFilesSRIHashes} = require('../../SRIUtilities.js');

describe('SRI Test', () => {
    const projectTempDir = './tmp';
    const contentFile = `${projectTempDir}/TestSRIContentFile.js`;
    const inputFile = `${projectTempDir}/TestSRIInputFile.json`;
    const outputFile = `${projectTempDir}/TestSRIOutputFile.json`;

    //Creating a test file containing "Hello World" and a test input file that will contain the path to the forementioned test file
    fs.writeFileSync(contentFile, "//Hello World!", {encoding: 'utf8'});
    fs.writeFileSync(inputFile, `["${contentFile}"]`, {encoding: 'utf8'});

    it('Validate the hash generated for the created file is accurate', async () => {
        await testSRIUtilities(inputFile, outputFile);
    });
});

async function testSRIUtilities(inputFile, outputFile){
    writeFilesSRIHashes(inputFile, outputFile);
    const content = fs.readFileSync(outputFile, 'utf8');
    assert.equal(content, `{"${projectTempDir}/TestSRIContentFile.js":"sha512-c76BKMCm2avOvjuwytACeDP2Z6UM5fnDO00luBeRp2XWSfp4RBXRez/P56vaef2LGGkfb6T9te7Wqg1E2crtgA=="}`);
}