const refTopPage = require('../pageobjects/refTop.page');
const basicPage = require('../pageobjects/basic.page');
const generateTestFile = require('../../TestFileGenerator.js');
const runAccessbilityTest = require('../../TestA11y.js');
require('../setup/basic.js');

const fs = require('fs');
const assert = require('assert');

function getSoyUtilsModuleFilename(theme) {
    return `./dist/app/cls/WET/${theme}/${process.env.CDTS_TEST_VERSION_NAME || 'v4_0_40'}/cdts/compiled/soyutils.js`;
}

function getWetModuleFilename(theme, language) {
    return `./dist/app/cls/WET/${theme}/${process.env.CDTS_TEST_VERSION_NAME || 'v4_0_40'}/cdts/compiled/wet-${language}.js`;
}

describe('refTop section tests for GCWeb - English', () => {
    //---[ Load wet-en.js file (to be able to call wet.builder.* functions manually)
    eval(fs.readFileSync(getSoyUtilsModuleFilename('gcweb'), 'utf8'));
    eval(fs.readFileSync(getWetModuleFilename('gcweb', 'en'), 'utf8'));

    performTests(wet);
});

describe('refTop section tests for GCWeb - French', () => {
    //---[ Load wet-en.js file (to be able to call wet.builder.* functions manually)
    eval(fs.readFileSync(getSoyUtilsModuleFilename('gcweb'), 'utf8'));
    eval(fs.readFileSync(getWetModuleFilename('gcweb', 'fr'), 'utf8'));

    performTests(wet);
});

describe('refTop section tests for GCIntranet - English', () => {
    //---[ Load wet-en.js file (to be able to call wet.builder.* functions manually)
    eval(fs.readFileSync(getSoyUtilsModuleFilename('gcintranet'), 'utf8'));
    eval(fs.readFileSync(getWetModuleFilename('gcintranet', 'en'), 'utf8'));

    performTests(wet, 'gcintranet');
});

describe('refTop section tests for GCIntranet - French', () => {
    //---[ Load wet-en.js file (to be able to call wet.builder.* functions manually)
    eval(fs.readFileSync(getSoyUtilsModuleFilename('gcintranet'), 'utf8'));
    eval(fs.readFileSync(getWetModuleFilename('gcintranet', 'fr'), 'utf8'));

    performTests(wet, 'gcintranet');
});

describe('refTop section tests for GCWeb', () => {
    const theme = 'gcweb';

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-refTop-staging', {
        refTop: '{"cdnEnv": "localhost", "webAnalytics" : [{"environment" : "staging", "version" : 1}]}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-refTop-prod', {
        refTop: '{"cdnEnv": "localhost", "webAnalytics" : [{"environment" : "production", "version" : 2}]}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-refTop-custom', {
        refTop: '{"cdnEnv": "localhost", "webAnalytics" : [{"custom" : "launch-EN11c0261481f74c56b7656937bbd995e9-staging.min.js"}]}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    it('Test if analytics has been loaded', async () => {
        await analyticsStaging();
        await analyticsProd();
        await analyticsCustom();
    });
});

describe('refTop section tests for GCIntranet', () => {
    const theme = 'gcintranet';

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-refTop-staging', {
        refTop: '{"cdnEnv": "localhost", "webAnalytics" : [{"environment" : "staging", "version" : 1}]}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-refTop-prod', {
        refTop: '{"cdnEnv": "localhost", "webAnalytics" : [{"environment" : "production", "version" : 2}]}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-refTop-custom', {
        refTop: '{"cdnEnv": "localhost", "webAnalytics" : [{"custom" : "launch-EN11c0261481f74c56b7656937bbd995e9-staging.min.js"}]}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    it('Test if analytics has been loaded', async () => {
        await analyticsStaging();
        await analyticsProd();
        await analyticsCustom();
    });
});

async function analyticsStaging(){
    await refTopPage.open('staging');
    await expect(refTopPage.analyticsScript).toHaveAttributeContaining('src', 'caacec67651710193d2331efef325107c23a0145/satelliteLib-92fcbbc24eeebb654a3dfbe688ed2dfe10a53e24-staging');
}

async function analyticsProd(){
    await refTopPage.open('prod');
    await expect(refTopPage.analyticsScript).toHaveAttributeContaining('src', 'caacec67651710193d2331efef325107c23a0145/satelliteLib-c2082deaf69c358c641c5eb20f94b615dd606662');
}

async function analyticsCustom(){
    await refTopPage.open('custom');
    await expect(refTopPage.analyticsScript).toHaveAttributeContaining('src', 'launch-EN11c0261481f74c56b7656937bbd995e9');
}

function performTests(wet, theme = '') {
    it('Should not render analytics by default', async () => {
        const result = wet.builder.refTop({cdnEnv: 'localhost'});
        assert(!result.includes('cdts_AnalyticsId'), 'Found analytics script when expecting none.');
    });

    it('Should render analytics custom as pecified', async () => {
        const result = wet.builder.refTop({cdnEnv: 'localhost', webAnalytics: [{custom: 'ABCDEFG'}]});
        assert(result.includes('src="//assets.adobedtm.com/ABCDEFG">'), `Did not find expected Web Analytics script URL in [${result}]`);
    });

    it('Should render analytics version 1 as pecified', async () => {
        const result = wet.builder.refTop({cdnEnv: 'localhost', webAnalytics: [{version: 1}]});
        assert(result.includes('src="//assets.adobedtm.com/caacec67651710193d2331efef325107c23a0145/satelliteLib-92fcbbc24eeebb654a3dfbe688ed2dfe10a53e24.js">'), `Did not find expected Web Analytics script URL in [${result}]`);
    });

    it('Should render analytics version 2 as pecified', async () => {
        const result = wet.builder.refTop({cdnEnv: 'localhost', webAnalytics: [{version: 2}]});
        assert(result.includes('src="//assets.adobedtm.com/caacec67651710193d2331efef325107c23a0145/satelliteLib-c2082deaf69c358c641c5eb20f94b615dd606662.js">'), `Did not find expected Web Analytics script URL in [${result}]`);
    });

    it('Should render analytics version 2 staging as pecified', async () => {
        const result = wet.builder.refTop({cdnEnv: 'localhost', webAnalytics: [{version: 2, environment: 'staging'}]});
        assert(result.includes('src="//assets.adobedtm.com/caacec67651710193d2331efef325107c23a0145/satelliteLib-c2082deaf69c358c641c5eb20f94b615dd606662-staging.js">'), `Did not find expected Web Analytics script URL in [${result}]`);
    });

    if (theme != 'gcintranet') {
        it('Should not render for application by default', async () => {
            const result = wet.builder.refTop({cdnEnv: 'localhost'});
            assert(!result.includes('cdts/cdtsapps.css'), 'Found app css script when expecting none.');
        });

        it('Should render for application when enabled', async () => {
            const result = wet.builder.refTop({cdnEnv: 'localhost', isApplication: true});
            assert(result.includes('cdts/cdtsapps.css'), 'Did not find expected app css script.');
        });
    }
}

