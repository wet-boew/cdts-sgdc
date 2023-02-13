const appFooterPage = require('../pageobjects/appFooter.page');
const footerPage = require('../pageobjects/footer.page');
const basicPage = require('../pageobjects/basic.page');
const generateTestFile = require('../../TestFileGenerator.js');
const runAccessbilityTest = require('../../TestA11y.js');
require('../setup/basic.js');

describe('AppFooter section tests for GCWeb', () => {
    const theme = 'gcweb';

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-appFooter-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"footerSections": {"title":"Title", "links": [{"href": "#", "text": "Portal footer link 1"}, {"href": "#", "text": "Portal footer link 2"}, {"href": "#", "text": "Portal footer link 3", "newWindow": true}]}, "contactLink": [{"href": "contactLinksTest", "newWindow": true }], "termsLink": [{"href": "termsLinkTest", "newWindow": true}], "privacyLink": [{"href": "privacyLinkTest", "newWindow": true}], "showFeatures": true, "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
	});

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-appFooter-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"footerSections": {"title":"Title", "links": [{"href": "#", "text": "Portal footer link 1"}, {"href": "#", "text": "Portal footer link 2"}, {"href": "#", "text": "Portal footer link 3", "newWindow": true}]}, "contactLink": [{"href": "contactLinksTest", "newWindow": true }], "termsLink": [{"href": "termsLinkTest", "newWindow": true}], "privacyLink": [{"href": "privacyLinkTest", "newWindow": true}], "showFeatures": true, "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
	});

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-appFooter-newWinFalse-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"footerSections": {"title":"Title", "links": [{"href": "#", "text": "Portal footer link 1"}, {"href": "#", "text": "Portal footer link 2"}, {"href": "#", "text": "Portal footer link 3", "newWindow": false}]}, "contactLink": [{"href": "contactLinksTest", "newWindow": false }], "termsLink": [{"href": "termsLinkTest", "newWindow": false}], "privacyLink": [{"href": "privacyLinkTest", "newWindow": false}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
	});

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-appFooter-newWinFalse-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"footerSections": {"title":"Title", "links": [{"href": "#", "text": "Portal footer link 1"}, {"href": "#", "text": "Portal footer link 2"}, {"href": "#", "text": "Portal footer link 3", "newWindow": false}]}, "contactLink": [{"href": "contactLinksTest", "newWindow": false }], "termsLink": [{"href": "termsLinkTest", "newWindow": false}], "privacyLink": [{"href": "privacyLinkTest", "newWindow": false}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
	});

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-appFooter-newWinEmpty-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"footerSections": {"title":"Title", "links": [{"href": "#", "text": "Portal footer link 1"}, {"href": "#", "text": "Portal footer link 2"}, {"href": "#", "text": "Portal footer link 3"}]}, "contactLink": [{"href": "contactLinksTest"}], "termsLink": [{"href": "termsLinkTest"}], "privacyLink": [{"href": "privacyLinkTest"}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
	});

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-appFooter-newWinEmpty-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"footerSections": {"title":"Title", "links": [{"href": "#", "text": "Portal footer link 1"}, {"href": "#", "text": "Portal footer link 2"}, {"href": "#", "text": "Portal footer link 3"}]}, "contactLink": [{"href": "contactLinksTest"}], "termsLink": [{"href": "termsLinkTest"}], "privacyLink": [{"href": "privacyLinkTest"}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
	});

    it('Validate the footer links', async () => {
        await footerLinks(theme, 'en');
        await footerLinks(theme, 'fr');
    });

    it('Validate the customized links', async () => {
        await footerBrandLinks(theme, 'en');
        await footerBrandLinks(theme, 'fr');
    });

    it('Validate the footer links are not shown', async () => {
        await footerLinksNotExist(theme, 'en');
        await footerLinksNotExist(theme, 'fr');
    });

    it('Validate default links', async () => {
        await footerDefaultBrandLinks(theme, 'en');
        await footerDefaultBrandLinks(theme, 'fr');
    });

    if('Footer brand links should not open in new window', async () => {
        await footerBrandLinksDoNotOpenNewWin(theme, 'en', 'newWinFalse');
        await footerBrandLinksDoNotOpenNewWin(theme, 'fr', 'newWinFalse');
        await footerBrandLinksDoNotOpenNewWin(theme, 'en', 'newWinEmpty');
        await footerBrandLinksDoNotOpenNewWin(theme, 'fr', 'newWinEmpty');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

describe('AppFooter section tests for GCIntranet', () => {
    const theme = 'gcintranet';

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appFooter-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"showFeatures":true, "footerSections": [{"sectionName":"Section name", "href": "#", "text": "Portal footer link 1"}, {"href": "#", "text": "Portal footer link 2"}, {"href": "#", "text": "Portal footer link 3", "newWindow": true}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appFooter-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"showFeatures":true, "footerSections": [{"sectionName":"Section name", "href": "#", "text": "Portal footer link 1"}, {"href": "#", "text": "Portal footer link 2"}, {"href": "#", "text": "Portal footer link 3", "newWindow": true}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appFooter-global-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"globalNav": true, "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appFooter-global-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"globalNav": true, "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appFooter-subThemeESDC-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme": "esdc", "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appFooter-subThemeESDC-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme": "esdc", "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appFooter-subThemeLabour-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme": "labour", "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appFooter-subThemeLabour-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme": "labour", "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appFooter-customFooterLinks-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"footerSections":[{ "sectionName":"Custom Section 1", "customFooterLinks":[{ "href":"#", "text":"link1-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 2", "customFooterLinks":[{ "href":"#", "text":"link2-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 3", "customFooterLinks":[{ "href":"#", "text":"link3-1-new Window", "newWindow":true }] }], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appFooter-customFooterLinks-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"footerSections":[{ "sectionName":"Custom Section 1", "customFooterLinks":[{ "href":"#", "text":"link1-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 2", "customFooterLinks":[{ "href":"#", "text":"link2-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 3", "customFooterLinks":[{ "href":"#", "text":"link3-1-new Window", "newWindow":true }] }], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appFooter-esdcCustomFooterLinks-en', {
        refTop: '{"cdnEnv": "localhost", "subTheme": "esdc"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme":"esdc", "footerSections":[{ "sectionName":"Custom Section 1", "customFooterLinks":[{ "href":"#", "text":"link1-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 2", "customFooterLinks":[{ "href":"#", "text":"link2-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 3", "customFooterLinks":[{ "href":"#", "text":"link3-1-new Window", "newWindow":true }] }], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appFooter-esdcCustomFooterLinks-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme":"esdc", "footerSections":[{ "sectionName":"Custom Section 1", "customFooterLinks":[{ "href":"#", "text":"link1-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 2", "customFooterLinks":[{ "href":"#", "text":"link2-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 3", "customFooterLinks":[{ "href":"#", "text":"link3-1-new Window", "newWindow":true }] }], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appFooter-labourCustomFooterLinks-en', {
        refTop: '{"cdnEnv": "localhost", "subTheme": "labour"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme":"labour", "footerSections":[{ "sectionName":"Custom Section 1", "customFooterLinks":[{ "href":"#", "text":"link1-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 2", "customFooterLinks":[{ "href":"#", "text":"link2-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 3", "customFooterLinks":[{ "href":"#", "text":"link3-1-new Window", "newWindow":true }] }], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appFooter-labourCustomFooterLinks-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme":"labour", "footerSections":[{ "sectionName":"Custom Section 1", "customFooterLinks":[{ "href":"#", "text":"link1-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 2", "customFooterLinks":[{ "href":"#", "text":"link2-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 3", "customFooterLinks":[{ "href":"#", "text":"link3-1-new Window", "newWindow":true }] }], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appFooter-ecccCustomFooterLinks-en', {
        refTop: '{"cdnEnv": "localhost", "subTheme": "eccc"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme":"eccc", "footerSections":[{ "sectionName":"Custom Section 1", "customFooterLinks":[{ "href":"#", "text":"link1-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 2", "customFooterLinks":[{ "href":"#", "text":"link2-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 3", "customFooterLinks":[{ "href":"#", "text":"link3-1-new Window", "newWindow":true }] }], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appFooter-ecccCustomFooterLinks-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"subTheme":"eccc", "footerSections":[{ "sectionName":"Custom Section 1", "customFooterLinks":[{ "href":"#", "text":"link1-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 2", "customFooterLinks":[{ "href":"#", "text":"link2-1-new Window", "newWindow":true }] }, { "sectionName":"Custom Section 3", "customFooterLinks":[{ "href":"#", "text":"link3-1-new Window", "newWindow":true }] }], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    it('Validate the footer links', async () => {
        await footerLinksIntranet(theme, 'en');
        await footerLinksIntranet(theme, 'fr');
    });

    it('Validate the globalfooter links', async () => {
        await footerLinksGlobal(theme, 'en');
        await footerLinksGlobal(theme, 'fr');
    });

    it('Validate the footer links are not shown', async () => {
        await footerLinksNotExist(theme, 'en');
        await footerLinksNotExist(theme, 'fr');
    });

    it('Validate the footer when subtheme is esdc', async () => {
        await footerSubTheme(theme, 'en', 'subThemeESDC');
        await footerSubTheme(theme, 'fr', 'subThemeESDC');
        await footerSubTheme(theme, 'en', 'subThemeLabour');
        await footerSubTheme(theme, 'fr', 'subThemeLabour');
    });

    it('Validate that the activities and initiatives section is shown', async () => {
        await footerShowFeatures(theme, 'en');
        await footerShowFeatures(theme, 'fr');
    });

    it('Validate the custom footer links', async () => {
        await customFooterLinks(theme, 'en');
        await customFooterLinks(theme, 'fr');
    });

    it('Validate the custom footer links when subTheme is esdc and labour', async () => {
        await customFooterLinksSubTheme(theme, 'en', 'esdcCustomFooterLinks');
        await customFooterLinksSubTheme(theme, 'fr', 'esdcCustomFooterLinks');
        await customFooterLinksSubTheme(theme, 'en', 'labourCustomFooterLinks');
        await customFooterLinksSubTheme(theme, 'fr', 'labourCustomFooterLinks');
    });

    it('Validate the custom footer links when subTheme is eccc', async () => {
        await customFooterLinksECCC(theme, 'en');
        await customFooterLinksECCC(theme, 'fr');
    });

    it('Test if correct css file has been loaded', async () => {
        await cssScript(theme, 'en', 'esdcCustomFooterLinks');
        await cssScript(theme, 'en', 'labourCustomFooterLinks');
    });

    it('Test if correct css file has been loaded - ECCC', async () => {
        await cssScriptECCC(theme, 'en');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

async function footerLinks(theme, lang){
    await appFooterPage.open(theme, lang);
    await expect(appFooterPage.footerGCWeb).toExist();
    await expect(appFooterPage.footerLinkGCWeb).toHaveTextContaining('Portal footer link 1');
    await expect(appFooterPage.footerLinkGCWeb).not.toHaveAttributeContaining('target', '_blank'); //first link should not have attribute
    await expect(appFooterPage.footerLinkNewWin).toHaveAttributeContaining('target', '_blank'); //only third link should have the attribute
    if (lang == 'en') { await expect(appFooterPage.footerLinkNewWinSpan).toHaveTextContaining('This link will open in a new window'); }
    else { await expect(appFooterPage.footerLinkNewWinSpan).toHaveTextContaining('Ce lien ouvrira dans une nouvelle fenêtre'); }
    await expect(appFooterPage.footerTitle).toHaveTextContaining('Title');
}

async function footerLinksIntranet(theme, lang){
    await appFooterPage.open(theme, lang);
    await expect(appFooterPage.footer).toExist();
    await expect(appFooterPage.footerLink).toHaveTextContaining('Portal footer link 1');
    await expect(appFooterPage.footerLink).not.toHaveAttributeContaining('target', '_blank'); //first link should not have attribute
    await expect(appFooterPage.footerLinkNewWinIntranet).toHaveAttributeContaining('target', '_blank');
    await expect(appFooterPage.footerSectionName).toExist();
    if (lang == 'en') { await expect(appFooterPage.footerLinkNewWinSpanIntranet).toHaveTextContaining('This link will open in a new window'); }
    else { await expect(appFooterPage.footerLinkNewWinSpanIntranet).toHaveTextContaining('Ce lien ouvrira dans une nouvelle fenêtre'); }
}

async function footerLinksGlobal(theme, lang){
    await appFooterPage.open(theme, lang, 'global');
    await expect(appFooterPage.footer).toExist();
    if (lang === 'en') { await expect(appFooterPage.footerLink).toHaveTextContaining('News'); }
    else { await expect(appFooterPage.footerLink).toHaveTextContaining('Nouvelles'); }
}

async function footerBrandLinks(theme, lang){
    await appFooterPage.open(theme, lang);
    await expect(appFooterPage.contactLink).toHaveHrefContaining('contactLinksTest');
    await expect(appFooterPage.contactLink).toHaveAttributeContaining('target', '_blank');
    await expect(appFooterPage.termsLink).toHaveHrefContaining('termsLinkTest');
    await expect(appFooterPage.termsLink).toHaveAttributeContaining('target', '_blank');
    await expect(appFooterPage.privacyLink).toHaveHrefContaining('privacyLinkTest');
    await expect(appFooterPage.privacyLink).toHaveAttributeContaining('target', '_blank');
}

async function footerBrandLinksDoNotOpenNewWin(theme, lang, page){
    await appFooterPage.open(theme, lang, page);
    await expect(appFooterPage.contactLink).not.toHaveAttributeContaining('target', '_blank');
    await expect(appFooterPage.termsLink).not.toHaveAttributeContaining('target', '_blank');
    await expect(appFooterPage.privacyLink).not.toHaveAttributeContaining('target', '_blank');
    await expect(appFooterPage.footerLinkNewWin).not.toHaveAttributeContaining('target', '_blank');
}

async function footerLinksNotExist(theme, lang){
    await basicPage.open(theme, lang, 'app');
    await expect(appFooterPage.footer).not.toExist();
}

async function footerDefaultBrandLinks(theme, lang){
    await basicPage.open(theme, lang, 'app');
    await expect(appFooterPage.contactLink).not.toExist();
    if (lang === 'en'){
        await expect(appFooterPage.termsLink).toHaveHrefContaining('terms.html');
        await expect(appFooterPage.privacyLink).toHaveHrefContaining('privacy.html');
    } else{
        await expect(appFooterPage.termsLink).toHaveHrefContaining('avis.html');
        await expect(appFooterPage.privacyLink).toHaveHrefContaining('confidentialite.html');
    }
}

async function footerSubTheme(theme, lang, page){
    await appFooterPage.open(theme, lang, page);
    await expect(appFooterPage.footer).toHaveAttributeContaining('data-wb-ajax', 'global/esdcfooter')
}

async function footerShowFeatures(theme, lang){
    await appFooterPage.open(theme, lang);
    if (lang =='en') { await expect(footerPage.footerFeatures).toHaveTextContaining('Activities and initiatives'); }
    else { await expect(footerPage.footerFeatures).toHaveTextContaining('Activités et initiatives'); }
}

async function customFooterLinks(theme, lang){
    await appFooterPage.open(theme, lang, 'customFooterLinks');
    await expect(appFooterPage.customFooterLinkClass).toExist();
    await expect(appFooterPage.customFooterLinkText).toHaveTextContaining('Custom Section 1');
    await expect(appFooterPage.customFooterLink).toHaveAttributeContaining('target', '_blank');
}

async function customFooterLinksSubTheme(theme, lang, page){
    await appFooterPage.open(theme, lang, page);
    await expect(appFooterPage.customFooterLinkClass).toExist();
    await expect(appFooterPage.customFooterLinkText).toHaveTextContaining('Custom Section 1');
    await expect(appFooterPage.customFooterLink).toHaveAttributeContaining('target', '_blank');
    if (lang == 'en') { await expect(appFooterPage.customFooterLinkTextSubTheme).toHaveTextContaining('Corporate'); }
    else { await expect(appFooterPage.customFooterLinkTextSubTheme).toHaveTextContaining('Ministère'); }
}

async function customFooterLinksECCC(theme, lang){
    await appFooterPage.open(theme, lang, 'ecccCustomFooterLinks');
    await expect(appFooterPage.customFooterLinkClass).toExist();
    await expect(appFooterPage.customFooterLinkText).toHaveTextContaining('Custom Section 1');
    await expect(appFooterPage.customFooterLink).toHaveAttributeContaining('target', '_blank');
    if (lang == 'en') { await expect(appFooterPage.customFooterLinkTextSubTheme).toHaveTextContaining('Contact Us'); }
    else { await expect(appFooterPage.customFooterLinkTextSubTheme).toHaveTextContaining('Communiquez avec nous'); }
}

async function cssScript(theme, lang, page){
    await appFooterPage.open(theme, lang, page);
    await expect(appFooterPage.cssScriptESDC).toExist();
}

async function cssScriptECCC(theme, lang){
    await appFooterPage.open(theme, lang, 'ecccCustomFooterLinks');
    await expect(appFooterPage.cssScriptECCC).toExist();
}

async function accessibility(theme, lang) {
    await appFooterPage.open(theme, lang);
    await runAccessbilityTest();
}
