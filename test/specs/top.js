const topPage = require('../pageobjects/top.page');
const basicPage = require('../pageobjects/basic.page');
const sectionMenuPage = require('../pageobjects/sectionMenu.page');
const generateTestFile = require('../../TestFileGenerator.js');
const runAccessbilityTest = require('../../TestA11y.js');
require('../setup/basic.js');

describe('Top section tests for GCWeb', () => {
    const theme = 'gcweb';
    
    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-top-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "search": false, "lngLinks": [{"lang": "fr", "href": "gcweb-top-fr.html", "text": "Français"}], "breadcrumbs": [{"title": "CDTS", "acronym": "Centrally Deployed Templates Solution"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-top-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "search": false, "lngLinks": [{"lang": "en", "href": "gcweb-top-en.html", "text": "English"}], "breadcrumbs": [{"title": "CDTS", "acronym": "Centrally Deployed Templates Solution"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-top-siteMenuTrue-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": true, "customSearch": [{ "action" : "https://www.canada.ca/en/sr.html", "id": "custom-search", "name": "customName", "hiddenInput" : [{"name" : "cdn", "value" : "canada"}], "placeholder" : "Canada.ca", "method" : "get"}], "lngLinks": [{"lang": "fr", "href": "gcweb-top-fr.html", "text": "Français"}], "breadcrumbs": [{"title": "Canada.ca", "acronym": "Canada.ca", "href": "testing"}, {"title": "CDTS", "acronym": "Centrally Deployed Templates Solution"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-top-siteMenuTrue-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": true, "customSearch": [{ "action" : "https://www.canada.ca/en/sr.html", "id": "custom-search", "name": "customName", "hiddenInput" : [{"name" : "cdn", "value" : "canada"}], "placeholder" : "Canada.ca", "method" : "get"}], "lngLinks": [{"lang": "en", "href": "gcweb-top-en.html", "text": "English"}], "breadcrumbs": [{"title": "Canada.ca", "acronym": "Canada.ca", "href": "testing"}, {"title": "SGDC", "acronym": "Centrally Deployed Templates Solution"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-top-transactional-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "topSecMenu": false, "siteMenu": false, "lngLinks": [{"lang": "fr", "href": "gcweb-top-fr.html", "text": "Français"}], "breadcrumbs": [{"title": "Canada.ca", "acronym": "Canada.ca", "href": "http://www.canada.ca/en.html"}, {"title": "CDTS", "acronym": "Centrally Deployed Templates Solution"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-top-transactional-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "topSecMenu": false, "siteMenu": false, "lngLinks": [{"lang": "en", "href": "gcweb-top-en.html", "text": "English"}], "breadcrumbs": [{"title": "Canada.ca", "acronym": "Canada.ca", "href": "http://www.canada.ca/fr.html"}, {"title": "SGDC", "acronym": "Centrally Deployed Templates Solution"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-top-customSearchDefault-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": true, "customSearch": [{ "action" : "https://www.canada.ca/en/sr.html", "method" : "get"}], "lngLinks": [{"lang": "fr", "href": "gcweb-top-fr.html", "text": "Français"}], "breadcrumbs": [{"title": "Testing Canada.ca", "acronym": "Test Canada.ca", "href": "http://www.canada.ca"}, {"title": "CDTS", "acronym": "Centrally Deployed Templates Solution"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-top-customSearchDefault-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": true, "customSearch": [{ "action" : "https://www.canada.ca/en/sr.html", "method" : "get"}], "lngLinks": [{"lang": "en", "href": "gcweb-top-en.html", "text": "English"}], "breadcrumbs": [{"title": "Testing Canada.ca", "acronym": "Test Canada.ca", "href": "http://www.canada.ca"}, {"title": "SGDC", "acronym": "Centrally Deployed Templates Solution"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    it('Should contain breadcrumbs and test href when title is Canada.ca (but href is something else)', async () => {
        await breadcrumbsExist(theme);
        await breadcrumbsExist_FR(theme);
    });

    it('Should not contain breadcrumbs (except for the default that is added) and test href when breadcrumb not explicitly provided', async () => {
        await breadcrumbsDoNotExist(theme, 'en');
        await breadcrumbsDoNotExist(theme, 'fr');
    });

    it('Href is defaulted when href is a variant of canada.ca and title will be pulled from acronym', async () => {
        await breadcrumbHref(theme, 'en');
        await breadcrumbHref(theme, 'fr');
    });

    it('Default Canada.ca Breadcrumb added', async () => {
        await defaultBreadcrumb(theme, 'en');
        await defaultBreadcrumb(theme, 'fr');
    });

    it('Check if lang link exists', async () => {
        await langLinksExist(theme);
        await langLinksExist_FR(theme);
    });

    it('Check lang link does not exist', async () => {
        await langLinksDoNotExist(theme, 'en');
        await langLinksDoNotExist(theme, 'fr');
    });

    it('Check Skip to section menu link does not exist (default value)', async () => {
        await skipSecLinkDoesNotExist(theme, 'en');
        await skipSecLinkDoesNotExist(theme, 'en', 'transactional');
        await skipSecLinkDoesNotExist(theme, 'fr');
        await skipSecLinkDoesNotExist(theme, 'fr', 'transactional');
    });

    it('Check Canada.ca link exists (default value)', async () => {
        await govCanImgLinkExists(theme, 'en');
        await govCanImgLinkExists(theme, 'en', 'siteMenuTrue');
        await govCanImgLinkExists(theme, 'fr');
        await govCanImgLinkExists(theme, 'fr', 'siteMenuTrue');
    });

    it('Check Canada.ca link does not exist', async () => {
        await govCanImgLinkDoesNotExist(theme, 'en', 'transactional');
        await govCanImgLinkDoesNotExist(theme, 'fr', 'transactional');
    });

    it('Check menu exists (default value)', async () => {
        await menuExists(theme, 'en');
        await menuExists(theme, 'en', 'siteMenuTrue');
        await menuExists(theme, 'fr');
        await menuExists(theme, 'fr', 'siteMenuTrue');
    });

    it('Check menu does not exist (siteMenu set to false)', async () => {
        await menuDoesNotExist(theme, 'en', 'transactional');
        await menuDoesNotExist(theme, 'fr', 'transactional');
    });

    it('Search bar should exist', async () => {
        await searchExists(theme, 'en');
        await searchExists(theme, 'fr');
    });

    it('Search bar should NOT exist', async () => {
        await searchDoesNotExist(theme, 'en');
        await searchDoesNotExist(theme, 'fr');
    });

    it('Custom search shoud exist', async () => {
        await customSearchExists(theme, 'en');
        //await customSearchExists(theme, 'fr');
    });

    it('Test custom search - default values', async () => {
        await customSearchDefaultValues(theme, 'en');
        //await customSearchDefaultValues(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

describe('Top section tests for GCIntranet', () => {
    const theme = 'gcintranet';
    
    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-top-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv" : "localhost", "menuPath": "menu-esdc.html", "lngLinks": [{"lang": "fr", "href": "gcintranet-top-fr.html", "text": "Français" }], "breadcrumbs": [{ "title": "Home", "acronym": "Canada.ca", "href": "https://www.canada.ca/en.html"},{ "title": "CDTS","acronym": "Centrally Deployed Templates Solution", "href": "https://www.canada.ca/en/index.html"}], "intranetTitle": [{"href": "http://esdc.prv/en/index.shtml","text": "CustomTitle", 	"boldText" : "Bold", 	"acronym": "Employment and Social Development Canada / Service Canada" }], "GCToolsModal": true, "search": false, "subTheme": "esdc"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-top-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "menuPath": "menu-esdc.html", "lngLinks": [{"lang": "en", "href": "gcintranet-top-en.html", "text": "English"}], "breadcrumbs": [{"title": "Canada.ca", "acronym": "Canada.ca", "href": "https://www.canada.ca/fr.html"}, {"title": "SGDC", "acronym": "Centrally Deployed Templates Solution", "href": "https://www.canada.ca/en/index.html"}], "intranetTitle": [{"href": "http://esdc.prv/en/index.shtml","text": "CustomTitle", 	"boldText" : "Bold", 	"acronym": "Employment and Social Development Canada / Service Canada" }], "GCToolsModal": true, "search": false, "subTheme": "esdc"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-top-nomenu-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv" : "localhost", "topSecMenu": false, "siteMenu": false, "lngLinks": [{"lang": "fr", "href": "gcintranet-top-fr.html", "text": "Français" }], "GCToolsModal": true, "customSearch": [{ "action" : "https://www.canada.ca/en/sr.html", "id": "custom-search", "name": "customName", "hiddenInput" : [{"name" : "cdn", "value" : "canada"}], "placeholder" : "Search Canada.ca", "method" : "get"}], "subTheme": "esdc"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-top-nomenu-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "topSecMenu": false, "siteMenu": false, "lngLinks": [{"lang": "en", "href": "gcintranet-top-en.html", "text": "English"}], "GCToolsModal": true, "customSearch": [{ "action" : "https://www.canada.ca/en/sr.html", "id": "custom-search", "name": "customName", "hiddenInput" : [{"name" : "cdn", "value" : "canada"}], "placeholder" : "Search Canada.ca", "method" : "get"}], "subTheme": "esdc"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-top-wblng-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv" : "localhost", "menuPath": "menu-esdc.html", "lngLinks": [{"lang": "fr", "href": "gcintranet-top-fr.html", "text": "Français" }], "breadcrumbs": [{ "title": "Home", "href": "https://www.canada.ca/en/index.html"},{ "title": "CDTS","acronym": "Centrally Deployed Templates Solution", "href": "https://www.canada.ca/en/index.html"}], "intranetTitle": [{"href": "http://esdc.prv/en/index.shtml","text": "CustomTitle", 	"boldText" : "Bold", 	"acronym": "Employment and Social Development Canada / Service Canada" }], "GCToolsModal": false, "search": false, "subTheme": "esdc"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-top-wblng-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "menuPath": "menu-esdc.html", "lngLinks": [{"lang": "en", "href": "gcintranet-top-en.html", "text": "English"}], "breadcrumbs": [{"title": "Canada.ca", "acronym": "Canada.ca", "href": "http://www.canada.ca/fr.html"}, {"title": "SGDC", "acronym": "Centrally Deployed Templates Solution", "href": "https://www.canada.ca/en/index.html"}], "intranetTitle": [{"href": "http://esdc.prv/en/index.shtml","text": "CustomTitle", 	"boldText" : "Bold", 	"acronym": "Employment and Social Development Canada / Service Canada" }], "GCToolsModal": false, "search": false, "subTheme": "esdc"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-top-customSearchDefault-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv" : "localhost", "topSecMenu": false, "siteMenu": false, "lngLinks": [{"lang": "fr", "href": "gcintranet-top-fr.html", "text": "Français" }], "GCToolsModal": true, "customSearch": [{ "action" : "https://www.canada.ca/en/sr.html", "method" : "get"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-top-customSearchDefault-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "topSecMenu": false, "siteMenu": false, "lngLinks": [{"lang": "en", "href": "gcintranet-top-en.html", "text": "English"}], "GCToolsModal": true, "customSearch": [{ "action" : "https://www.canada.ca/en/sr.html", "method" : "get"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});
    
    it('Should contain breadcrumbs and test href when title is Canada.ca', async () => {
        await breadcrumbsExist(theme);
        await breadcrumbsExist_FR(theme);
    });

    it('Should contain the default breadcrumb', async () => {
        await defaultBreadcrumbIntranet(theme, 'en');
        await defaultBreadcrumbIntranet(theme, 'en');
    });

    it('Should contain lang link', async () => {
        await langLinksExist(theme);
        await langLinksExist_FR(theme);
    });

    it('Check lang link does not exist', async () => {
        await langLinksDoNotExist(theme, 'en');
        await langLinksDoNotExist(theme, 'fr');
    });

    it('Test if title has been customized', async () => {
        await titleCustomized(theme, 'en');
        await titleCustomized(theme, 'fr');
    });

    it('GC Tools links in the header should now be a modal dialogue box', async () => {
        await gcToolsLinks(theme);
        await gcToolsLinks_FR(theme);
    });

    it('Search bar should NOT appear', async () => {
        await searchDoesNotExist(theme, 'en');
        await searchDoesNotExist(theme, 'fr');
    });

    it('Subtheme should be esdc', async () => {
        await subThemeESDCMenu(theme, 'en');
        await subThemeESDCMenu(theme, 'fr');
    });

    it('Test title not customized', async () => {
        await titleNotCustomized(theme, 'en');
        await titleNotCustomized(theme, 'fr');
    });

    it('GC Tools links in the header should not be a modal dialogue box', async () => {
        await gcToolsLinksStandard(theme, 'en');
        await gcToolsLinksStandard(theme, 'fr');
    });

    it('Search bar should appear', async () => {
        await searchExists(theme, 'en');
        await searchExists(theme, 'fr');
    });

    it('Subtheme should be esdc', async () => {
        await subThemeStandard(theme, 'en');
        await subThemeStandard(theme, 'fr');
    });

    it('No menu present when turned off', async () => {
        await noMenuWhenTurnedOff(theme, 'nomenu-en');
        await noMenuWhenTurnedOff(theme, 'nomenu-fr');
    });

    it('Check Skip to section menu link does not exist (default value)', async () => {
        await skipSecLinkDoesNotExist(theme, 'en');
        await skipSecLinkDoesNotExist(theme, 'en', 'nomenu');
        await skipSecLinkDoesNotExist(theme, 'fr');
        await skipSecLinkDoesNotExist(theme, 'fr', 'nomenu');
    });

    it('Check class when both subtheme or intranet title are null', async () => {
        await sectionClass(theme, 'en');
        await sectionClass(theme, 'fr');
    });

    it('Check class when one of either subtheme or intranet title is null', async () => {
        await sectionClassNoTitle(theme, 'en');
        await sectionClassNoTitle(theme, 'fr');
    });

    it('Check class GCToolsModal is true, title is default, search is true', async () => {
        await gcToolsSectionClass(theme, 'en');
        await gcToolsSectionClass(theme, 'fr');
    });

    it('wb-gctools should exist when gctoolsmodal is false and title is null', async () => {
        await wbGCTools(theme, 'en');
        await wbGCTools(theme, 'fr');
    });

    it('Check class when language link and search exists', async () => {
        await langSearchClass(theme, 'en');
        await langSearchClass(theme, 'fr');
    });

    it('Custom search shoud exist', async () => {
        await customSearchExists(theme, 'en');
        //await customSearchExists(theme, 'fr');
    });

    it('Test custom search - default values', async () => {
        await customSearchDefaultValues(theme, 'en');
        //await customSearchDefaultValues(theme, 'fr');
    });

    it('Search bar should exist - GCIntranet', async () => {
        await searchExistsIntranet(theme, 'en');
        await searchExistsIntranet(theme, 'fr');
    });

    it('User selected menu is displayed', async () => {
        await menuPath(theme, 'en');
        await menuPath(theme, 'fr');
    });

    it('Default menu is displayed', async () => {
        await menuPathDefault(theme, 'en');
        await menuPathDefault(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'nomenu-en');
        await accessibility(theme, 'nomenu-fr');
    });
});

async function breadcrumbsExist(theme){
    await topPage.open(theme, 'en');
    if (theme == 'gcweb') await expect(topPage.cdtsBreadCrumb).toHaveTextContaining('CDTS');
    await expect(topPage.cdtsBreadCrumb).toHaveAttributeContaining('title', 'Centrally Deployed Templates Solution');
    await expect(topPage.canBreadCrumb).toHaveHref('https://www.canada.ca/en.html');    
}

async function breadcrumbsExist_FR(theme){
    await topPage.open(theme, 'fr');
    if (theme == 'gcweb') await expect(topPage.cdtsBreadCrumb).toHaveTextContaining('CDTS');    
    await expect(topPage.cdtsBreadCrumb).toHaveAttributeContaining('title', 'Centrally Deployed Templates Solution');
    await expect(topPage.canBreadCrumb).toHaveHref('https://www.canada.ca/fr.html');
}

async function breadcrumbsDoNotExist(theme, lang){
    await basicPage.open(theme, lang);
    await expect(basicPage.cdtsBreadCrumb).toHaveChildren(1);
    if (lang == 'en') { 
        await expect(basicPage.canBreadCrumb).toHaveHref('https://www.canada.ca/en.html') 
    }
    else { 
        await expect(basicPage.canBreadCrumb).toHaveHref('https://www.canada.ca/fr.html') 
    } 
}

async function breadcrumbHref(theme, lang){
    await topPage.open(theme, lang, 'customSearchDefault');
    await expect(topPage.canBreadCrumbAbbr).toHaveAttributeContaining('title', 'Test Canada.ca');
    if (lang == 'en') { await expect(basicPage.canBreadCrumb).toHaveHref('http://www.canada.ca') }
    else { await expect(basicPage.canBreadCrumb).toHaveHref('http://www.canada.ca') } 
}

async function defaultBreadcrumb(theme, lang){
    await topPage.open(theme, lang);
    if (lang == 'en') { await expect(topPage.canBreadCrumb).toHaveHref('https://www.canada.ca/en.html'); }
    else { await expect(topPage.canBreadCrumb).toHaveHref('https://www.canada.ca/fr.html'); } 
    await expect(topPage.cdtsBreadCrumb).toHaveTextContaining('CDTS');
}

async function defaultBreadcrumbIntranet(theme, lang){
    await basicPage.open(theme, lang);
    if (lang == 'en') { 
        await expect(topPage.canBreadCrumb).toHaveHref('https://intranet.canada.ca/index-eng.asp');
        await expect(topPage.canBreadCrumb).toHaveTextContaining('Home'); 
    }
    else { 
        await expect(topPage.canBreadCrumb).toHaveHref('https://intranet.canada.ca/index-fra.asp');
        await expect(topPage.canBreadCrumb).toHaveTextContaining('Accueil'); 
    } 
}

async function langLinksExist(theme){
    await topPage.open(theme, 'en');
    if (theme === "gcweb") {
        await expect(topPage.langLinkText).toHaveTextContaining('Français');
        const langLink = await topPage.langLink;
        await langLink.click();
    }
    else {
        await expect(topPage.langLinkTextIntranet).toHaveTextContaining('Français');
        await expect(topPage.wbLang).toHaveElementClassContaining('lang-no-search')
        const langLink = await topPage.langLinkIntranet;
        await langLink.click();
    }    
    await expect(browser).toHaveUrlContaining('-fr');
}

async function langLinksExist_FR(theme){
    await topPage.open(theme, 'fr');
    if (theme === "gcweb") {
        expect(topPage.langLinkText).toHaveTextContaining('English');
        const langLink = await topPage.langLink;
        await langLink.click();
    }
    else {
        await expect(topPage.langLinkTextIntranet).toHaveTextContaining('English');
        await expect(topPage.wbLang).toHaveElementClassContaining('lang-no-search')
        const langLink = await topPage.langLinkIntranet;
        await langLink.click();
    }
    await expect(browser).toHaveUrlContaining('-en');
}

async function langLinksDoNotExist(theme, lang){
    await basicPage.open(theme, lang);
    await expect(basicPage.langLink).not.toExist();
}

async function titleCustomized(theme, lang){
    await topPage.open(theme, lang);
    await expect(topPage.intranetText).toHaveTextContaining('Bold');
    await expect(topPage.intranetTitle).toHaveTextContaining('CustomTitle');
    await expect(topPage.intranetTitleAbbr).toHaveAttributeContaining('title', 'Employment and Social Development Canada')
}

async function gcToolsLinks(theme){
    await topPage.open(theme, 'en');

    const gcToolsLink = await topPage.gcToolsLink;
    await gcToolsLink.click();
    await (await topPage.gcToolsModalTitle).waitForExist({timeout: 3000})
    await expect(topPage.gcToolsModalTitle).toHaveTextContaining('GCTools');
    await expect(topPage.gcToolsModalLink1).toHaveTextContaining('connex');
    await expect(topPage.gcToolsModalLink2).toHaveTextContaining('pedia');
    await expect(topPage.gcToolsModalLink3).toHaveTextContaining('directory');
    await expect(topPage.gcToolsModalLink4).toHaveTextContaining('collab');
    await expect(topPage.gcToolsModalLink5).toHaveTextContaining('intranet');
    await expect(topPage.gcToolsSection).toHaveElementClassContaining('col-lg-2 col-md-offset-3 col-md-1 hidden-sm hidden-xs text-right');
}

async function gcToolsLinks_FR(theme){
    await topPage.open(theme, 'fr');

    const gcToolsLink = await topPage.gcToolsLink;
    await gcToolsLink.click();
    await (await topPage.gcToolsModalTitle).waitForExist({timeout: 3000})
    await expect(topPage.gcToolsModalTitle).toHaveTextContaining('OutilsGC');
    await expect(topPage.gcToolsModalLink1).toHaveTextContaining('connex');
    await expect(topPage.gcToolsModalLink2).toHaveTextContaining('pédia');
    await expect(topPage.gcToolsModalLink3).toHaveTextContaining('annuaire');
    await expect(topPage.gcToolsModalLink4).toHaveTextContaining('collab');
    await expect(topPage.gcToolsModalLink5).toHaveTextContaining('intranet');
    await expect(topPage.gcToolsSection).toHaveElementClassContaining('col-lg-2 col-md-offset-3 col-md-1 hidden-sm hidden-xs text-right');
}

async function searchDoesNotExist(theme, lang){
    await topPage.open(theme, lang);
    await expect(topPage.search).not.toExist();
}

async function subThemeESDCMenu(theme, lang){
    await topPage.open(theme, lang);
    await expect(topPage.intranetMenu).toHaveChildren(7);
    await expect(topPage.intranetMenu).toHaveTextContaining('This is a test menu!');
}

async function titleNotCustomized(theme, lang){
    await basicPage.open(theme, lang);
    await expect(basicPage.intranetText).toHaveTextContaining('GC');
    await expect(basicPage.intranetTitle).toHaveTextContaining('GC intranet');
    await expect(basicPage.intranetTitle).toHaveHrefContaining('https://intranet.canada.ca/index');
    await expect(topPage.intranetTitleAbbr).not.toExist();
}

async function gcToolsLinksStandard(theme, lang){
    await basicPage.open(theme, lang);

    await expect(basicPage.gcToolsModalLinks).toExist();
    await expect(basicPage.gcToolsModalLinks).toHaveChildren(4);
}

async function searchExists(theme, lang){
    await basicPage.open(theme, lang);
    await expect(basicPage.search).toExist();
}

async function subThemeStandard(theme, lang){
    await basicPage.open(theme, lang);
    await expect(basicPage.intranetMenu).toHaveChildren(5);
}

async function noMenuWhenTurnedOff(theme, lang){
    await topPage.open(theme, lang);
    await expect(topPage.intranetMenu).not.toExist();
}

async function skipSecLinkDoesNotExist(theme, lang, page = ''){
    await topPage.open(theme, lang, page);
    await expect(sectionMenuPage.skipSecLink).not.toExist();
}

async function govCanImgLinkDoesNotExist(theme, lang, page = ''){
    await topPage.open(theme, lang, page);
    await expect(topPage.govCanImgLink).not.toExist();
}

async function govCanImgLinkExists(theme, lang, page = ''){
    await topPage.open(theme, lang, page);
    if (lang == 'en') { await expect(topPage.govCanImgLink).toExist();}
    else {await expect(topPage.govCanImgLinkFR).toExist();}
}

async function menuExists(theme, lang, page = ''){
    await topPage.open(theme, lang, page);
    await expect(topPage.menuBtn).toExist();
    await expect(topPage.transactBar).not.toExist();
}

async function menuDoesNotExist(theme, lang, page = ''){
    await topPage.open(theme, lang, page);
    await expect(topPage.menuBtn).not.toExist();
    await expect(topPage.transactBar).toExist();
}

async function customSearchExists(theme, lang){
    if (theme == 'gcweb') { 
        await topPage.open(theme, lang, 'siteMenuTrue'); 
        await expect(topPage.customSearchPlaceholder).toHaveTextContaining('Search Canada.ca');
    }
    else { 
        await topPage.open(theme, lang, 'nomenu'); 
        await expect(topPage.customSearchPlaceholder).toHaveTextContaining('Search');
    }
    await expect(topPage.customSearch).toExist();
    await expect(topPage.customSearchLabel).toHaveTextContaining('Search Canada.ca');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('name', 'customName');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('placeholder', 'Search Canada.ca');
    await expect(topPage.customSearchHiddenInput).toHaveAttributeContaining('name', 'cdn');
    await expect(topPage.customSearchHiddenInput).toHaveAttributeContaining('value', 'canada');
    await expect(topPage.customSearchBtn).toExist();
}

async function customSearchDefaultValues(theme, lang){
    await topPage.open(theme, lang, 'customSearchDefault');
    await expect(topPage.customSearchPlaceholder).toHaveTextContaining('Search');
    await expect(topPage.customSearchLabel).toHaveTextContaining('Search');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('name', 'q');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('placeholder', 'Search');
    if (theme == 'gcweb') { await expect(topPage.customSearchHiddenInput).not.toExist(); }
    else {
        await expect(topPage.customSearchHiddenInput).toHaveAttributeContaining('name', 'a');
        await expect(topPage.customSearchHiddenInput).toHaveAttributeContaining('value', 's');
     }
}

async function sectionClass(theme, lang) {
    await topPage.open(theme, lang, 'customSearchDefault');
    await expect(topPage.sectionClass).toHaveElementClassContaining('col-lg-2 col-md-3 col-sm-9 col-xs-8')
}

async function sectionClassNoTitle(theme, lang) {
    await topPage.open(theme, lang, 'nomenu');
    await expect(topPage.sectionClass).toHaveElementClassContaining('col-lg-6 col-md-6 col-sm-9 col-xs-8')
}

async function gcToolsSectionClass(theme, lang) {
    await topPage.open(theme, lang, 'nomenu');
    await expect(topPage.gcToolsSection).toHaveElementClassContaining('col-lg-6 col-md-1 hidden-sm hidden-xs text-right')
}

async function wbGCTools(theme, lang) {
    await basicPage.open(theme, lang);
    await expect(topPage.wbGCTools).toExist();
}

async function langSearchClass(theme, lang) {
    await topPage.open(theme, lang, 'nomenu');
    await expect(topPage.wbLang).toHaveElementClassContaining('lang-with-search');
    await expect(topPage.wbLang).not.toHaveElementClassContaining('mrgn-bttm-md');
}

async function langSearchClass(theme, lang) {
    await topPage.open(theme, lang, 'wblng');
    await expect(topPage.wbLang).toHaveElementClassContaining('mrgn-bttm-md col-md-offset-1 col-lg-offset-2 col-md-1 hidden-sm hidden-xs text-right');
}

async function searchExistsIntranet(theme, lang){
    await basicPage.open(theme, lang);
    if (lang == 'en') { await expect(topPage.searchAction).toHaveAttributeContaining('action', 'https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx'); }
    else { await expect(topPage.searchAction).toHaveAttributeContaining('action', 'https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx'); }
}

async function menuPath(theme, lang){
    await topPage.open(theme, lang);
    
}

async function menuPathDefault(theme, lang){
    await basicPage.open(theme, lang);
    
}

async function accessibility(theme, lang) {
    await topPage.open(theme, lang);
    await runAccessbilityTest();
}
