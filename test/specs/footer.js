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
        footer: '{"showFooter": false, "contactLinks": [{"href": "contactLinksTest"}], "termsLink": {"href": "termsLinkTest"}, "privacyLink": {"href": "privacyLinkTest"}, "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-footer-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"showFooter": false, "contactLinks": [{"href": "contactLinksTest"}], "termsLink": {"href": "termsLinkTest"}, "privacyLink": {"href": "privacyLinkTest"}, "cdnEnv": "localhost"}',
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

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-footer-contextualFooter-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost", "contextualFooter":{ "title": "this title", "links": [{ "text": "text1", "href":"link1"}, {"text": "text2", "href":"link2"}, {"text": "text3", "href":"link3"}, {"text": "text4", "href":"link4"}]}, "hideFooterMain": true, "hideFooterCorporate": true, "termsLink": { "href": "customTermsLink" }, "privacyLink": { "href": "customPrivacyLink" }}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-footer-contextualFooter-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost", "contextualFooter":{ "title": "this title", "links": [{ "text": "text1", "href":"link1"}, {"text": "text2", "href":"link2"}, {"text": "text3", "href":"link3"}, {"text": "text4", "href":"link4"}]}, "hideFooterMain": true, "hideFooterCorporate": true, "termsLink": { "href": "customTermsLink" }, "privacyLink": { "href": "customPrivacyLink" }}',
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

    it('Validate the contextual footer is visible, and has 3 links', async () => {
        await contextualFooter(theme, 'en');
        await contextualFooter(theme, 'en');
    });

    it('Validate the main and corportate footer are not displayed', async () => {
        await mainCorporateFooter(theme, 'en');
        await mainCorporateFooter(theme, 'en');
    });

    it('Validate the Terms and Privacy links can be overwritten', async () => {
        await termsPrivacyLink(theme, 'en');
        await termsPrivacyLink(theme, 'en');
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
        footer: '{"showFeatures": true, "footerPath": "/app/cls/WET/global/esdcfooter-eng.html", "cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-footer-showFeatures-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": false}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"showFeatures": true, "footerPath": "/app/cls/WET/global/esdcfooter-fra.html", "cdnEnv": "localhost"}',
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

    it('Validate custom footer', async () => {
        await footerPath(theme, 'en');
        await footerPath(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

async function showFooterFalse(theme, lang){
    await footerPage.open(theme, lang);
    await expect(footerPage.footer).not.toExist();
}

async function footerBrandLinks(theme, lang){
    await footerPage.open(theme, lang);
    await expect(footerPage.termsLink).toHaveHref(expect.stringContaining('termsLinkTest'));
    await expect(footerPage.privacyLink).toHaveHref(expect.stringContaining('privacyLinkTest'));
}

async function footerContactLink(theme, lang){
    await basicPage.open(theme, lang);
    if (theme === 'gcweb'){
        await expect(footerPage.footerContactLink).toHaveHref(expect.stringContaining('contact.html'));
    }
    else{
        if (lang ==='en') {
            await expect(footerPage.footerContactLink).toHaveHref(expect.stringContaining('contact-eng'));
            await expect(footerPage.footerContactLink).toHaveText(expect.stringContaining('Contact us'));
        } else {
            await expect(footerPage.footerContactLink).toHaveHref(expect.stringContaining('contact-fra'));
            await expect(footerPage.footerContactLink).toHaveText(expect.stringContaining('Communiquez avec nous'));
        }
    }
}

async function footerCustomizedContactLink(theme, lang){
    await footerPage.open(theme, lang, 'customizedContact');
    await expect(footerPage.footerContactLink).toHaveHref(expect.stringContaining('contactLinksTest'));
}

async function footerCustomizedContactLinkGC(theme, lang){
    await footerPage.open(theme, lang);
    await expect(footerPage.footerContactLink).toHaveHref(expect.stringContaining('contactLinksTest'));
    await expect(footerPage.footerContactLink).toHaveText(expect.stringContaining('Customized Contact'));
}

async function defaultFooterLinks(theme, lang){
    await footerPage.open(theme, lang, 'customizedContact');
    await expect(footerPage.footerLink2).toHaveHref(expect.stringContaining('dept.html'));
    await expect(footerPage.footerLink3).toHaveHref(expect.stringContaining('system.html'));
    await expect(footerPage.footerLink4).toHaveHref(expect.stringContaining('jobs.html'));
    await expect(footerPage.footerLink5).toHaveHref(expect.stringContaining('immigration'));
    await expect(footerPage.footerLink6).toHaveHref(expect.stringContaining('travel.gc.ca'));
    await expect(footerPage.footerLink7).toHaveHref(expect.stringContaining('business.html'));
    await expect(footerPage.footerLink8).toHaveHref(expect.stringContaining('benefits.html'));
    await expect(footerPage.footerLink9).toHaveHref(expect.stringContaining('health.html'));
    await expect(footerPage.footerLink10).toHaveHref(expect.stringContaining('taxes.html'));
    await expect(footerPage.footerLink11).toHaveHref(expect.stringContaining('environment.html'));
    await expect(footerPage.footerLink12).toHaveHref(expect.stringContaining('defence.html'));
    await expect(footerPage.footerLink13).toHaveHref(expect.stringContaining('culture.html'));
    await expect(footerPage.footerLink14).toHaveHref(expect.stringContaining('policing.html'));
    await expect(footerPage.footerLink15).toHaveHref(expect.stringContaining('transport.html'));
    await expect(footerPage.footerLink16).toHaveHref(expect.stringContaining('international.gc.ca'));
    await expect(footerPage.footerLink17).toHaveHref(expect.stringContaining('finance.html'));
    await expect(footerPage.footerLink18).toHaveHref(expect.stringContaining('science.html'));
    await expect(footerPage.footerLink19).toHaveHref(expect.stringContaining('indigenous-peoples.html'));
    await expect(footerPage.footerLink20).toHaveHref(expect.stringContaining('veterans-military.html'));
    await expect(footerPage.footerLink21).toHaveHref(expect.stringContaining('youth.html'));
}

async function defaultFooterBrandLinks(theme, lang){
    await footerPage.open(theme, lang, 'customizedContact');
    await expect(footerPage.footerBrandLink1).toHaveHref(expect.stringContaining('social.html'));
    await expect(footerPage.footerBrandLink2).toHaveHref(expect.stringContaining('mobile.html'));
    await expect(footerPage.footerBrandLink3).toHaveHref(expect.stringContaining('about.html'));
    await expect(footerPage.footerBrandLink4).toHaveHref(expect.stringContaining('terms.html'));
    await expect(footerPage.footerBrandLink5).toHaveHref(expect.stringContaining('privacy.html'));
}

async function footerShowFeatures(theme, lang){
    await footerPage.open(theme, lang, 'showFeatures');
    if (lang =='en') { await expect(footerPage.footerFeatures).toHaveText(expect.stringContaining('Activities and initiatives')); }
    else { await expect(footerPage.footerFeatures).toHaveText(expect.stringContaining('Activités et initiatives')); }
}

async function defaultFooterLinksIntranet(theme, lang){
    await footerPage.open(theme, lang);
    if (lang =='en') {
        await expect(footerPage.footerLinkIntranet2).toHaveHref(expect.stringContaining('https://intranet.canada.ca/ict-oci/index-eng.asp'));
        await expect(footerPage.footerLinkIntranet3).toHaveHref(expect.stringContaining('https://www.canada.ca/en.html'));
        await expect(footerPage.footerLinkIntranet4).toHaveHref(expect.stringContaining('https://intranet.canada.ca/terms-avis-eng.asp'));
    }
    else {
        await expect(footerPage.footerLinkIntranet2).toHaveHref(expect.stringContaining('https://intranet.canada.ca/ict-oci/index-fra.asp'));
        await expect(footerPage.footerLinkIntranet3).toHaveHref(expect.stringContaining('https://www.canada.ca/fr.html'));
        await expect(footerPage.footerLinkIntranet4).toHaveHref(expect.stringContaining('https://intranet.canada.ca/terms-avis-fra.asp'));
    }
}

async function contextualFooter(theme, lang){
    await footerPage.open(theme, lang, 'contextualFooter');
    await expect(footerPage.contextualFooter).toExist();
    await expect(footerPage.contextualFooterLinks).toHaveChildren(3);
}

async function mainCorporateFooter(theme, lang){
    await footerPage.open(theme, lang, 'contextualFooter');
    await expect(footerPage.footer).not.toExist();
    await expect(footerPage.footerCorporateLinks).toHaveChildren(2);
}

async function termsPrivacyLink(theme, lang){
    await footerPage.open(theme, lang, 'contextualFooter');
    await expect(footerPage.footerBrandLink1).toHaveHref(expect.stringContaining('customTermsLink'));
    await expect(footerPage.footerBrandLink2).toHaveHref(expect.stringContaining('customPrivacyLink'));
}

async function footerPath(theme, lang){
    await footerPage.open(theme, lang, 'showFeatures');
    await expect(footerPage.customFooter).toHaveAttribute('data-wb-ajax', expect.stringContaining('esdcfooter'));
}

async function accessibility(theme, lang) {
    await footerPage.open(theme, lang);
    await runAccessbilityTest();
}
