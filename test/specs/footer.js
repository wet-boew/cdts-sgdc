const footerPage = require('../pageobjects/footer.page');
const basicPage = require('../pageobjects/basic.page');
const generateTestFile = require('../../TestFileGenerator.js');
const runAccessbilityTest = require('../../TestA11y.js');
require('../setup/basic.js');

describe('Footer section tests for GCWeb', () => {
    const theme = 'gcweb';

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-footer-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"showFooter": false, "contactLinks": [{"href": "contactLinksTest"}], "termsLink": [{"href": "termsLinkTest"}], "privacyLink": [{"href": "privacyLinkTest"}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-footer-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"showFooter": false, "contactLinks": [{"href": "contactLinksTest"}], "termsLink": [{"href": "termsLinkTest"}], "privacyLink": [{"href": "privacyLinkTest"}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-footer-customizedContact-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"contactLinks": [{"href": "contactLinksTest"}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-footer-customizedContact-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"contactLinks": [{"href": "contactLinksTest"}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    it('Validate that the footer does not show', async () => {
        await showFooterFalse(theme, 'en');
        await showFooterFalse(theme, 'fr');
    });

    it('Validate the customized links when footer is not shown', async () => {
        await footerBrandLinks(theme, 'en');
        await footerBrandLinks(theme, 'fr');
    });

    it('Validate the customized contact link when footer is shown', async () => {
        await footerCustomizedContactLink(theme, 'en');
        await footerCustomizedContactLink(theme, 'fr');
    });

    it('Validate the contact link when footer is shown', async () => {
        await footerContactLink(theme, 'en');
        await footerContactLink(theme, 'fr');
    });

    it('Validate the default footer links when footer is shown', async () => {
        await defaultFooterLinks(theme, 'en');
        //await defaultFooterLinks(theme, 'fr');
    });

    it('Validate the default footer brand links when footer is shown', async () => {
        await defaultFooterBrandLinks(theme, 'en');
        //await defaultFooterBrandLinks(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

describe('Footer section tests for GCIntranet', () => {
    const theme = 'gcintranet';

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-footer-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": false}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"contactLinks": [{"href": "contactLinksTest", "text": "Customized Contact"}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-footer-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": false}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"contactLinks": [{"href": "contactLinksTest", "text": "Customized Contact"}], "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-footer-showFeatures-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": false}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"showFeatures": true, "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-footer-showFeatures-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": false}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"showFeatures": true, "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    it('Validate the contact link when footer is shown', async () => {
        await footerContactLink(theme, 'en');
        await footerContactLink(theme, 'fr');
    });

    it('Validate the customized contact link when footer is shown', async () => {
        await footerCustomizedContactLinkGC(theme, 'en');
        await footerCustomizedContactLinkGC(theme, 'fr');
    });

    it('Validate that the activities and initiatives section is shown', async () => {
        await footerShowFeatures(theme, 'en');
        await footerShowFeatures(theme, 'fr');
    });

    it('Validate the default footer links', async () => {
        await defaultFooterLinksIntranet(theme, 'en');
        await defaultFooterLinksIntranet(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

async function showFooterFalse(theme, lang){
    await footerPage.open(theme, lang);
    await expect(footerPage.footer).toExist();
}

async function footerBrandLinks(theme, lang){
    await footerPage.open(theme, lang);
    await expect(footerPage.contactLink).toHaveHrefContaining('contactLinksTest');
    await expect(footerPage.termsLink).toHaveHrefContaining('termsLinkTest');
    await expect(footerPage.privacyLink).toHaveHrefContaining('privacyLinkTest');
}

async function footerContactLink(theme, lang){
    await basicPage.open(theme, lang);
    if (theme === 'gcweb'){
        await expect(footerPage.footerContactLink).toHaveHrefContaining('contact.html');
    }
    else{
        if (lang ==='en') { 
            await expect(footerPage.footerContactLink).toHaveHrefContaining('contact-eng');
            await expect(footerPage.footerContactLink).toHaveTextContaining('Contact us'); 
        } else {
            await expect(footerPage.footerContactLink).toHaveHrefContaining('contact-fra'); 
            await expect(footerPage.footerContactLink).toHaveTextContaining('Communiquez avec nous'); 
        }
    }
}

async function footerCustomizedContactLink(theme, lang){
    await footerPage.open(theme, lang, 'customizedContact');
    await expect(footerPage.footerContactLink).toHaveHrefContaining('contactLinksTest');
}

async function footerCustomizedContactLinkGC(theme, lang){
    await footerPage.open(theme, lang);
    await expect(footerPage.footerContactLink).toHaveHrefContaining('contactLinksTest');
    await expect(footerPage.footerContactLink).toHaveTextContaining('Customized Contact');
}

async function defaultFooterLinks(theme, lang){
    await footerPage.open(theme, lang, 'customizedContact');
    await expect(footerPage.footerLink2).toHaveHrefContaining('dept.html');
    await expect(footerPage.footerLink3).toHaveHrefContaining('publicservice.html');
    await expect(footerPage.footerLink4).toHaveHrefContaining('news.html');
    await expect(footerPage.footerLink5).toHaveHrefContaining('laws.html');
    await expect(footerPage.footerLink6).toHaveHrefContaining('reporting.html');
    await expect(footerPage.footerLink7).toHaveHrefContaining('pm.gc.ca');
    await expect(footerPage.footerLink8).toHaveHrefContaining('system.html');
    await expect(footerPage.footerLink9).toHaveHrefContaining('open.canada.ca');
}

async function defaultFooterBrandLinks(theme, lang){
    await footerPage.open(theme, lang, 'customizedContact');
    await expect(footerPage.footerBrandLink1).toHaveHrefContaining('social.html');
    await expect(footerPage.footerBrandLink2).toHaveHrefContaining('mobile.html');
    await expect(footerPage.footerBrandLink3).toHaveHrefContaining('about.html');
    await expect(footerPage.footerBrandLink4).toHaveHrefContaining('terms.html');
    await expect(footerPage.footerBrandLink5).toHaveHrefContaining('privacy.html');
}

async function footerShowFeatures(theme, lang){
    await footerPage.open(theme, lang, 'showFeatures');
    if (lang =='en') { await expect(footerPage.footerFeatures).toHaveTextContaining('Activities and initiatives'); }
    else { await expect(footerPage.footerFeatures).toHaveTextContaining('Activités et initiatives'); }
}

async function defaultFooterLinksIntranet(theme, lang){
    await footerPage.open(theme, lang);
    if (lang =='en') {
        await expect(footerPage.footerLinkIntranet2).toHaveHrefContaining('https://intranet.canada.ca/ict-oci/index-eng.asp');
        await expect(footerPage.footerLinkIntranet3).toHaveHrefContaining('https://www.canada.ca/en.html');
        await expect(footerPage.footerLinkIntranet4).toHaveHrefContaining('https://intranet.canada.ca/terms-avis-eng.asp');
    }
    else {
        await expect(footerPage.footerLinkIntranet2).toHaveHrefContaining('https://intranet.canada.ca/ict-oci/index-fra.asp');
        await expect(footerPage.footerLinkIntranet3).toHaveHrefContaining('https://www.canada.ca/fr.html');
        await expect(footerPage.footerLinkIntranet4).toHaveHrefContaining('https://intranet.canada.ca/terms-avis-fra.asp');
    }
}

async function accessibility(theme, lang) {
    await footerPage.open(theme, lang);
    await runAccessbilityTest();
}
