const appTopPage = require('../pageobjects/appTop.page');
const topPage = require('../pageobjects/top.page');
const basicPage = require('../pageobjects/basic.page');
const generateTestFile = require('../../TestFileGenerator.js');
const runAccessbilityTest = require('../../TestA11y.js');
require('../setup/basic.js');

describe('AppTop section tests for GCWeb', () => {
    const theme = 'gcweb';

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-appTop-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "topSecMenu": true, "appName": [{"text": "Application name", "href": "#"}], "appSettings": [{"href": "#"}], "signIn": [{"href": "#"}], "lngLinks": [{"lang": "fr", "href": "gcweb-appTop-fr.html", "text": "Français" }], "menuLinks":[{"href": "#", "text":"Menu Option 1", "subLinks": [{ "subhref": "#", "subtext": "Link 1a", "newWindow": true }] }, { "href": "#", "text":"Menu Option 2", "newWindow": true }, {"href": "#", "text":"Menu Option 3", "acronym": "Test acronym", "subLinks": [{ "subhref": "#", "subtext": "Link 3a", "acronym": "Test acronym" }] }], "breadcrumbs": [{"title": "Home", "href": "https://www.canada.ca/en/index.html"},{"title": "CDTS", "acronym": "Centrally Deployed Templates Solution", "href": "https://www.canada.ca/en/index.html"}], "customSearch": [{ "action" : "https://www.canada.ca/en/sr/srb.html", "id": "custom-search", "name": "customName", "hiddenInput" : [{"name" : "cdn", "value" : "canada"}], "placeholder" : "Canada.ca", "method" : "get"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-appTop-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "topSecMenu": true, "appName": [{"text": "Application name", "href": "#"}], "appSettings": [{"href": "#"}], "signIn": [{"href": "#"}], "lngLinks": [{"lang": "en", "href": "gcweb-appTop-en.html", "text": "English" }], "menuLinks":[{"href": "#", "text":"Menu Option 1", "subLinks": [{ "subhref": "#", "subtext": "Link 1a", "newWindow": true }] }, { "href": "#", "text":"Menu Option 2", "newWindow": true  }, {"href": "#", "text":"Menu Option 3", "acronym": "Test acronym", "subLinks": [{ "subhref": "#", "subtext": "Link 3a", "acronym": "Test acronym" }] }], "breadcrumbs": [{"title": "Home", "href": "https://www.canada.ca/en/index.html"},{"title": "SGDC", "acronym": "Centrally Deployed Templates Solution", "href": "https://www.canada.ca/en/index.html"}], "customSearch": [{ "action" : "https://www.canada.ca/fr/sr/srb.html", "id": "custom-search", "name": "customName", "hiddenInput" : [{"name" : "cdn", "value" : "canada"}], "placeholder" : "Canada.ca", "method" : "get"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-appTop-externalLinkMenu-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "topSecMenu": false, "appName": [{"text": "Application name", "href": "#"}], "menuPath": "../ajax/appmenu-en.html", "customSearch": [{ "action" : "https://www.canada.ca/en/sr/srb.html", "method" : "get"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-appTop-externalLinkMenu-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "topSecMenu": false, "appName": [{"text": "Application name", "href": "#"}], "menuPath": "../ajax/appmenu-en.html", "customSearch": [{ "action" : "https://www.canada.ca/en/sr/srb.html", "method" : "get"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-appTop-signOut-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}], "signOut": [{"href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-appTop-signOut-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}], "signOut": [{"href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-appTop-bannerTrue-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}], "infoBanner": [{ "showBanner": true}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-appTop-bannerTrue-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}], "infoBanner": [{ "showBanner": true}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-appTop-bannerFalse-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}], "infoBanner": [{ "showBanner": false}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-appTop-bannerFalse-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}], "infoBanner": [{ "showBanner": false}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-en.html', 'gcweb', 'gcweb-appTop-banner-en', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}], "infoBanner": [{ "showBanner": true, "boldText": "Beta version: ", "mainText": "We\'ve made some changes to improve your experience with My Service Canada Account.", "link": [{"text": "Learn more about the beta version", "href": "#"}], "button": [{ "text": "Try beta version", "href": "#"}]}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    generateTestFile('./test/html/gcweb/template-gcwebapp-fr.html', 'gcweb', 'gcweb-appTop-banner-fr', {
        refTop: '{"cdnEnv": "localhost", "isApplication": true}',
        appTop: '{"cdnEnv": "localhost", "appName": [{"text": "Application name", "href": "#"}], "infoBanner": [{ "showBanner": true, "boldText": "Beta version: ", "mainText": "We\'ve made some changes to improve your experience with My Service Canada Account.", "link": [{"text": "Learn more about the beta version", "href": "#"}], "button": [{ "text": "Try beta version", "href": "#"}]}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost", "isApplication": true}'
    });

    it('Account settings button exists', async () => {
        await settingsBtnExists(theme, 'en');
        await settingsBtnExists(theme, 'fr');
    });

    it('Account settings button does not exist', async () => {
        await settingsBtnDoesNotExist(theme, 'en');
        await settingsBtnDoesNotExist(theme, 'fr');
    });

    it('Sign in button exists', async () => {
        await signinBtnExists('en');
        await signinBtnExists('fr');
    });

    it('Sign out button exists', async () => {
        await signOutBtnExists('en');
        await signOutBtnExists('fr');
    });

    it('Sign in button does not exist', async () => {
        await signinBtnDoesNotExist(theme, 'en');
        await signinBtnDoesNotExist(theme, 'fr');
    });

    it('Menu links exist', async () => {
        await menuExists(theme, 'en');
        await menuExists(theme, 'fr');
    });

    it('Menu links exist when using Menu Path', async () => {
        await menuExistsUsingPath(theme, 'en');
        await menuExistsUsingPath(theme, 'fr');
    });

    it('Menu links do not exist', async () => {
        await menuDoesNotExist(theme, 'en');
        await menuDoesNotExist(theme, 'fr');
    });

    it('Should contain breadcrumbs', async () => {
        await breadcrumbsExist(theme);
        await breadcrumbsExist_FR(theme);
    });

    it('Should not contain breadcrumbs', async () => {
        await breadcrumbsDoNotExist(theme, 'en');
        await breadcrumbsDoNotExist(theme, 'fr');
    });

    it('Should contain lang link', async () => {
        await langLinksExist(theme);
        await langLinksExist_FR(theme);
    });

    it('Check lang link does not exist', async () => {
        await langLinksDoNotExist(theme, 'en');
        await langLinksDoNotExist(theme, 'fr');
    });

    it('Search bar should appear', async () => {
        await searchExists(theme, 'en');
        await searchExists(theme, 'fr');
    });

    it('Search bar should NOT appear', async () => {
        await searchDoesNotExist(theme, 'en');
        await searchDoesNotExist(theme, 'fr');
    });

    it('Validate Skip to section menu link exists', async () => {
        await skipLinkExists(theme, 'en');
        await skipLinkExists(theme, 'fr');
    });

    it('Check Skip to section menu link does not exist (default value)', async () => {
        await skipSecLinkDoesNotExist(theme, 'en', 'signOut');
        await skipSecLinkDoesNotExist(theme, 'en', 'externalLinkMenu');
        await skipSecLinkDoesNotExist(theme, 'fr', 'signOut');
        await skipSecLinkDoesNotExist(theme, 'fr', 'externalLinkMenu');
    });

    it('Validate section class when a button exists', async () => {
        await validSectionClass(theme, 'en');
        await validSectionClass(theme, 'fr');
    });

    it('Validate section class when a button does not exist', async () => {
        await validSectionClassBtnDoesNotExist(theme, 'en');
        await validSectionClassBtnDoesNotExist(theme, 'fr');
    });

    it('Test appName', async () => {
        await testAppName(theme, 'en');
        await testAppName(theme, 'fr');
    });

    it('Test custom search', async () => {
        await customSearchExists(theme, 'en');
        await customSearchExists_FR(theme, 'fr');
    });

    it('Test custom search - default values', async () => {
        await customSearchDefaultValues(theme, 'en');
        await customSearchDefaultValues_FR(theme, 'fr');
    });

    it('Test the banner is visible without the text, link and button', async () => {
        await bannerTrue(theme, 'en');
        await bannerTrue(theme, 'fr');
    });

    it('Test the banner doesn\'t show when set to false', async () => {
        await bannerFalse(theme, 'en');
        await bannerFalse(theme, 'fr');
    });

    it('Test the banner shows the text, link and button', async () => {
        await bannerAllConfigurations(theme, 'en');
        await bannerAllConfigurations(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
        await accessibility(theme, 'en', 'externalLinkMenu');
        await accessibility(theme, 'fr', 'externalLinkMenu');
    });
});

describe('AppTop section tests for GCIntranet', () => {
    const theme = 'gcintranet';

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appTop-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "topSecMenu": true, "appName": [{"text": "Application Name"}], "lngLinks": [{"lang": "fr", "href": "gcintranet-appTop-fr.html", "text": "Français"}], "secure": true, "signIn": [{ "href": "#" }], "search": false, "menuLinks": [{"href": "#", "text": "Link 1", "subLinks": [{"subhref": "#", "subtext": "SubLink 1", "newWindow": true}, {"subhref": "#", "subtext": "SubLink 2", "newWindow": true}]}, {"href": "#", "text": "Link 2", "newWindow": true }, {"href": "#", "text": "Link 3", "acronym": "Test acronym", "subLinks": [{"subhref": "#", "subtext": "SubLink 3a", "acronym": "Test acronym"}]}], "breadcrumbs": [{ "title": "Home", "href": "https://www.canada.ca/en/index.html" },{"title": "CDTS", "acronym": "Centrally Deployed Templates Solution", "href": "https://www.canada.ca/en/index.html"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appTop-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "topSecMenu": true, "appName": [{"text": "Application Name"}], "lngLinks": [{"lang": "en", "href": "gcintranet-appTop-en.html", "text": "English"}], "secure": true, "signIn": [{ "href": "#" }], "search": false, "menuLinks": [{"href": "#", "text": "Link 1", "subLinks": [{"subhref": "#", "subtext": "SubLink 1", "newWindow": true}, {"subhref": "#", "subtext": "SubLink 2", "newWindow": true}]}, {"href": "#", "text": "Link 2", "newWindow": true }, {"href": "#", "text": "Link 3", "acronym": "Test acronym", "subLinks": [{"subhref": "#", "subtext": "SubLink 3a", "acronym": "Test acronym"}]}], "breadcrumbs": [{ "title": "Home", "href": "https://www.canada.ca/en/index.html" },{"title": "SGDC", "acronym": "Centrally Deployed Templates Solution", "href": "https://www.canada.ca/en/index.html"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appTop-externalLinkMenu-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "GCToolsModal": true, "appName": [{"text": "Application name", "href": "#", "acronym": "Acronym"}], "lngLinks": [{"lang": "fr", "href": "gcintranet-appTop-fr.html", text: "Français"}], "menuPath": "../ajax/custommenu-eng.html"}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appTop-externalLinkMenu-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "GCToolsModal": true, "appName": [{"text": "Application name", "href": "#", "acronym": "Acronym"}], "lngLinks": [{"lang": "en", "href": "gcintranet-appTop-en.html", text: "English"}], "menuPath": "../ajax/custommenu-fra.html"}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appTop-signOut-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost","appName": [{"text": "Application name", "href": "#"}], "lngLinks": [{"lang": "fr",	"href": "gcweb-appTop-fr.html",	"text": "Français"	}], "customSearch": [{ "action" : "https://www.canada.ca/en/sr/srb.html", "id": "custom-search", "name": "customName", "hiddenInput" : [{"name" : "cdn", "value" : "canada"}], "placeholder" : "Search Canada.ca", "method" : "get"}], "appName": [{"text": "Application name", "href": "#"}], "intranetTitle": [{"href": "http://esdc.prv/en/index.shtml","text": "CustomTitle", "boldText" : "Bold", "acronym": "Acronym" }], "signOut": [{"href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appTop-signOut-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost","appName": [{"text": "Application name", "href": "#"}], "lngLinks": [{"lang": "fr",	"href": "gcweb-appTop-fr.html",	"text": "Français"	}], "customSearch": [{ "action" : "https://www.canada.ca/en/sr/srb.html", "id": "custom-search", "name": "customName", "hiddenInput" : [{"name" : "cdn", "value" : "canada"}], "placeholder" : "Recherche Canada.ca", "method" : "get"}], "appName": [{"text": "Application name", "href": "#"}], "intranetTitle": [{"href": "http://esdc.prv/en/index.shtml","text": "CustomTitle", "boldText" : "Bold", "acronym": "Acronym" }], "signOut": [{"href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appTop-customizedTitle-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "GCToolsModal": true, "search": false, "appName": [{"text": "Application name", "href": "#"}], "intranetTitle": [{"href": "http://esdc.prv/en/index.shtml","text": "CustomTitle", "boldText" : "Bold", "acronym": "Acronym" }]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appTop-customizedTitle-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "GCToolsModal": true, "search": false, "appName": [{"text": "Application name", "href": "#"}], "intranetTitle": [{"href": "http://esdc.prv/en/index.shtml","text": "CustomTitle", "boldText" : "Bold", "acronym": "Acronym" }]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appTop-customSearchDefault-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost","appName": [{"text": "Application name", "href": "#"}], "customSearch": [{ "action" : "https://www.canada.ca/en/sr/srb.html", "method" : "get"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appTop-customSearchDefault-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost","appName": [{"text": "Application name", "href": "#"}], "customSearch": [{ "action" : "https://www.canada.ca/en/sr/srb.html", "method" : "get"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appTop-esdcPreConfigured-en', {
        refTop: '{"cdnEnv": "localhost", "subTheme": "esdc"}',
        appTop: '{"cdnEnv" : "localhost", "appName": [{"text": "Application name", "href": "#"}], "lngLinks": [{"lang": "fr", "href": "gcintranet-top-esdcPreConfigured-fr.html", "text": "Fran&#231;ais" }], "subTheme": "esdc", "signOut": [{"href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appTop-esdcPreConfigured-fr', {
        refTop: '{"cdnEnv": "localhost", "subTheme": "esdc"}',
        appTop: '{"cdnEnv" : "localhost", "appName": [{"text": "Application name", "href": "#"}], "lngLinks": [{"lang": "fr", "href": "gcintranet-top-esdcPreConfigured-en.html", "text": "English" }], "subTheme": "esdc", "signOut": [{"href": "#"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appTop-ecccPreConfigured-en', {
        refTop: '{"cdnEnv": "localhost", "subTheme": "eccc"}',
        appTop: '{"cdnEnv" : "localhost", "appName": [{"text": "Application name", "href": "#"}], "lngLinks": [{"lang": "fr", "href": "gcintranet-top-ecccPreConfigured-fr.html", "text": "Fran&#231;ais" }], "subTheme": "eccc"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appTop-ecccPreConfigured-fr', {
        refTop: '{"cdnEnv": "localhost", "subTheme": "eccc"}',
        appTop: '{"cdnEnv" : "localhost", "appName": [{"text": "Application name", "href": "#"}], "lngLinks": [{"lang": "fr", "href": "gcintranet-top-ecccPreConfigured-en.html", "text": "English" }], "subTheme": "eccc"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appTop-labourPreConfigured-en', {
        refTop: '{"cdnEnv": "localhost", "subTheme": "eccc"}',
        appTop: '{"cdnEnv" : "localhost", "appName": [{"text": "Application name", "href": "#"}], "lngLinks": [{"lang": "fr", "href": "gcintranet-top-labourPreConfigured-fr.html", "text": "Fran&#231;ais" }], "subTheme": "labour"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appTop-labourPreConfigured-fr', {
        refTop: '{"cdnEnv": "localhost", "subTheme": "eccc"}',
        appTop: '{"cdnEnv" : "localhost", "appName": [{"text": "Application name", "href": "#"}], "lngLinks": [{"lang": "fr", "href": "gcintranet-top-labourPreConfigured-en.html", "text": "English" }], "subTheme": "labour"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-en.html', 'gcintranet', 'gcintranet-appTop-langWithSearch-en', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "GCToolsModal": false, "appName": [{"text": "Application name", "href": "#", "acronym": "Acronym"}], "lngLinks": [{"lang": "fr", "href": "gcintranet-appTop-fr.html", text: "Français"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-gcintranetapp-fr.html', 'gcintranet', 'gcintranet-appTop-langWithSearch-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        appTop: '{"cdnEnv": "localhost", "GCToolsModal": false, "appName": [{"text": "Application name", "href": "#", "acronym": "Acronym"}], "lngLinks": [{"lang": "en", "href": "gcintranet-appTop-en.html", text: "English"}]}',
        preFooter: '{"cdnEnv": "localhost"}',
        appFooter: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
    });

    it('Sign in button exists', async () => {
        await signinBtnExistsIntranet('en');
        await signinBtnExistsIntranet('fr');
    });

    it('Sign out button exists', async () => {
        await signOutBtnExistsIntranet('en');
        await signOutBtnExistsIntranet('fr');
    });

    it('Sign in button does not exists', async () => {
        await signinBtnDoesNotExist(theme, 'en');
        await signinBtnDoesNotExist(theme, 'fr');
    });

    it('Menu links exist', async () => {
        await menuExists(theme, 'en');
        await menuExists(theme, 'fr');
    });

    it('Menu links exist when using Menu Path', async () => {
        await menuExistsUsingPath(theme, 'en');
        await menuExistsUsingPath(theme, 'fr');
    });

    it('Menu links do not exist', async () => {
        await menuDoesNotExist(theme, 'en');
        await menuDoesNotExist(theme, 'fr');
    });

    it('Should contain breadcrumbs', async () => {
        await breadcrumbsExist(theme);
        await breadcrumbsExist_FR(theme);
    });

    it('Should not contain breadcrumbs', async () => {
        await breadcrumbsDoNotExist(theme, 'en');
        await breadcrumbsDoNotExist(theme, 'fr');
    });

    it('Should contain lang link', async () => {
        await langLinksExist(theme);
        await langLinksExist_FR(theme);
    });

    it('Check lang link does not exist', async () => {
        await langLinksDoNotExist(theme, 'en');
        await langLinksDoNotExist(theme, 'fr');
    });

    it('Search bar should appear', async () => {
        await searchExists(theme, 'en');
        await searchExists(theme, 'fr');
    });

    it('Search bar should NOT appear', async () => {
        await searchDoesNotExist(theme, 'en');
        await searchDoesNotExist(theme, 'fr');
    });

    it('Secure Icon should appear', async () => {
        await secureIconExists(theme, 'en');
        await secureIconExists(theme, 'fr');
    });

    it('Secure Icon should NOT appear', async () => {
        await secureIconDoesNotExist(theme, 'en');
        await secureIconDoesNotExist(theme, 'fr');
    });

    it('Test if title has been customized', async () => {
        await titleCustomized(theme, 'en');
        await titleCustomized(theme, 'fr');
    });

    it('Test title not customized', async () => {
        await titleNotCustomized(theme, 'en');
        await titleNotCustomized(theme, 'fr');
    });

    it('Validate Skip to section menu link exists', async () => {
        await skipLinkExists(theme, 'en');
        await skipLinkExists(theme, 'fr');
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

    it('Check class GCToolsModal is true, title is customized, search is false', async () => {
        await gcToolsSectionClassSearchFalse(theme, 'en'); //maybe add gctoolslinks test? similar to top
        await gcToolsSectionClassSearchFalse(theme, 'fr');
    });

    it('wb-gctools should exist when gctoolsmodal is false and title is null', async () => {
        await wbGCTools(theme, 'en');
        await wbGCTools(theme, 'fr');
    });

    it('Check class when language link and search exists', async () => {
        await langWithSearchClass(theme, 'en');
        await langWithSearchClass(theme, 'fr');
    });

    it('Check class when language link and search does not exist', async () => {
        await langSearchClass(theme, 'en');
        await langSearchClass(theme, 'fr');
    });

    it('Check class when language link and search exist, with customized title', async () => {
        await langSearchTitleClass(theme, 'en');
        await langSearchTitleClass(theme, 'fr');
    });

    it('Test custom search', async () => {
        await customSearchExists(theme, 'en');
        await customSearchExists_FR(theme, 'fr');
    });

    it('Test custom search - default values', async () => {
        await customSearchDefaultValues(theme, 'en');
        await customSearchDefaultValues_FR(theme, 'fr');
    });

    it('Test gcAppBanner class', async () => {
        await gcAppBannerClass(theme, 'en');
        await gcAppBannerClass(theme, 'fr');
    });

    it('Test gcAppBanner class when there is a subtheme', async () => {
        await gcAppBannerSubthemeClass(theme, 'en');
        await gcAppBannerSubthemeClass(theme, 'fr');
    });

    it('Test gcAppBanner class when there is appName', async () => {
        await gcAppBannerSTTLClass(theme, 'en');
        await gcAppBannerSTTLClass(theme, 'fr');
    });

    it('Test appName', async () => {
        await testAppNameIntranet(theme, 'en');
        await testAppNameIntranet(theme, 'fr');
    });

    it('Test appName abbr', async () => {
        await testAppNameAbbrIntranet(theme, 'en');
        await testAppNameAbbrIntranet(theme, 'fr');
    });

    it('Test the GCTools links taht appear on top', async () => {
        await gcToolsLinksStandard(theme, 'en');
        await gcToolsLinksStandard(theme, 'fr');
    });

    it('Test the default menu', async () => {
        await defaultMenu(theme, 'en');
        await defaultMenu(theme, 'fr');
    });

    it('Test the pre-configured ESDC subtheme', async () => {
        await subThemeESDCPreConfigured(theme, 'en');
        await subThemeESDCPreConfigured(theme, 'fr');
    });

    it('Test the pre-configured ECCC subtheme', async () => {
        await subThemeECCCPreConfigured(theme, 'en');
        await subThemeECCCPreConfigured(theme, 'fr');
    });

    it('Test the pre-configured Labour subtheme', async () => {
        await subThemeLabourPreConfigured(theme, 'en');
        await subThemeLabourPreConfigured(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
        await accessibility(theme, 'en', 'externalLinkMenu');
        await accessibility(theme, 'fr', 'externalLinkMenu');
    });
});

async function settingsBtnExists(theme, lang){
    await appTopPage.open(theme, lang);
    if (lang === 'en') { await expect(appTopPage.settingsBtn).toHaveTextContaining('Account settings'); }
    else { await expect(appTopPage.settingsBtn).toHaveTextContaining('Paramètres du compte'); }
}

async function settingsBtnDoesNotExist(theme, lang){
    await basicPage.open(theme, lang, 'app');
    await expect(appTopPage.settingsBtn).not.toExist();
}

async function signinBtnExists(lang){
    await appTopPage.open('gcweb', lang);
    if (lang === 'en') { await expect(appTopPage.signinBtn).toHaveTextContaining('Sign in'); }
    else { await expect(appTopPage.signinBtn).toHaveTextContaining('Ouvrir une session'); }
}

async function signOutBtnExists(lang){
    await appTopPage.open('gcweb', lang, 'signOut');
    if (lang === 'en') { await expect(appTopPage.signOutBtn).toHaveTextContaining('Sign out'); }
    else { await expect(appTopPage.signOutBtn).toHaveTextContaining('Fermer la session'); }
}

async function signinBtnExistsIntranet(lang){
    await appTopPage.open('gcintranet', lang);
    if (lang === 'en') { await expect(appTopPage.signOffBtnIntranet).toHaveTextContaining('Sign in'); }
    else { await expect(appTopPage.signOffBtnIntranet).toHaveTextContaining('Connexion'); }
}

async function signOutBtnExistsIntranet(lang){
    await appTopPage.open('gcintranet', lang, 'signOut');
    if (lang === 'en') { await expect(appTopPage.signOffBtnIntranet).toHaveTextContaining('Sign out'); }
    else { await expect(appTopPage.signOffBtnIntranet).toHaveTextContaining('Déconnexion'); }
}

async function signinBtnDoesNotExist(theme, lang){
    await basicPage.open(theme, lang, 'app');
    if (theme === 'gcweb') { await expect(appTopPage.signinBtn).not.toExist(); }
    else { await expect(appTopPage.signOffBtnIntranet).not.toExist(); }
}

async function menuExists(theme, lang){
    await appTopPage.open(theme, lang);
    await expect(appTopPage.menuLinks).toExist();
    await expect(appTopPage.menuLink1).toExist();
    await expect(appTopPage.menuLink2).toExist();
    await expect(appTopPage.menuLink2).toHaveAttributeContaining('target', '_blank');
    await expect(appTopPage.menuLink2Abbr).not.toExist();
    await expect(appTopPage.menuSubLink).toExist();
    await expect(appTopPage.menuSubLink).toHaveAttributeContaining('target', '_blank');
    await expect(appTopPage.menuSubLinkAbbr).not.toExist();
    await expect(appTopPage.menuSubLink2).toHaveAttributeContaining('title', 'Test acronym');
    await expect(appTopPage.menuLink3).toHaveAttributeContaining('title', 'Test acronym');
}

async function menuExistsUsingPath(theme, lang){
    await appTopPage.open(theme, lang, 'externalLinkMenu');
    await expect(appTopPage.menuLinks).toExist();
    await expect(appTopPage.menuLink1).toExist();
    await expect(appTopPage.menuLink2).toExist();
    await expect(appTopPage.menuPathSubLink).toExist();
}

async function menuDoesNotExist(theme, lang){
    await basicPage.open(theme, lang, 'app');
    await expect(appTopPage.menuLinks1).not.toExist();
}

async function breadcrumbsExist(theme){
    await appTopPage.open(theme, 'en');
    await expect(appTopPage.cdtsBreadCrumb).toHaveTextContaining('CDTS');
}

async function breadcrumbsExist_FR(theme){
    await appTopPage.open(theme, 'fr');
    await expect(appTopPage.cdtsBreadCrumb).toHaveTextContaining('SGDC');
}

async function breadcrumbsDoNotExist(theme, lang){
    await basicPage.open(theme, lang, 'app');
    await expect(basicPage.cdtsBreadCrumb).not.toExist();
}

async function langLinksExist(theme){
    await appTopPage.open(theme, 'en');
    if (theme === 'gcweb') {
        await expect(appTopPage.langLinkText).toHaveTextContaining('Français');
        const langLink = await appTopPage.langLink;
        await langLink.click();
    }
    else {
        await expect(appTopPage.langLinkTextIntranet).toHaveTextContaining('Français');
        await expect(topPage.wbLang).toHaveElementClassContaining('lang-no-search')
        const langLink = await appTopPage.langLinkTextIntranet;
        await langLink.click();
    }
    await expect(browser).toHaveUrlContaining('-fr');
}

async function langLinksExist_FR(theme){
    await appTopPage.open(theme, 'fr');
    if (theme === 'gcweb') {
        expect(appTopPage.langLinkText).toHaveTextContaining('English');
        const langLink = await appTopPage.langLink;
        await langLink.click();
    }
    else {
        await expect(appTopPage.langLinkTextIntranet).toHaveTextContaining('English');
        const langLink = await appTopPage.langLinkTextIntranet;
        await langLink.click();
    }
    await expect(browser).toHaveUrlContaining('-en');
}

async function searchExists(theme, lang){
    if (theme === 'gcweb') { await appTopPage.open(theme, lang, 'externalLinkMenu'); }
    else { await basicPage.open(theme, lang, 'app'); }
    await expect(appTopPage.search).toExist();
}

async function searchDoesNotExist(theme, lang){
    if (theme === 'gcweb') { await basicPage.open(theme, lang, 'app'); }
    else { await appTopPage.open(theme, lang); }
    await expect(appTopPage.search).not.toExist();
}

async function langLinksDoNotExist(theme, lang){
    await basicPage.open(theme, lang, 'app');
    await expect(basicPage.langLink).not.toExist();
}

async function secureIconExists(theme, lang){
    await appTopPage.open(theme, lang);
    await expect(appTopPage.secureIcon).toExist();
}

async function secureIconDoesNotExist(theme, lang){
    await basicPage.open(theme, lang, 'app');
    await expect(appTopPage.secureIcon).not.toExist();
}

async function titleCustomized(theme, lang){
    await appTopPage.open(theme, lang, 'customizedTitle');
    await expect(appTopPage.intranetText).toHaveTextContaining('Bold');
    await expect(appTopPage.intranetTitle).toHaveTextContaining('CustomTitle');
    await expect(topPage.intranetTitleAbbr).toHaveAttributeContaining('title', 'Acronym')
}

async function skipLinkExists(theme, lang){
    await appTopPage.open(theme, lang);
    await expect(appTopPage.skipSecLink).toExist();
}

async function skipSecLinkDoesNotExist(theme, lang, page){
    await appTopPage.open(theme, lang, page);
    await expect(appTopPage.skipSecLink).not.toExist();
}

async function validSectionClass(theme, lang){
    await appTopPage.open(theme, lang);
    await expect(appTopPage.sectionClass).toHaveElementClassContaining('col-sm-7');
}

async function validSectionClassBtnDoesNotExist(theme, lang){
    await appTopPage.open(theme, lang, 'externalLinkMenu');
    await expect(appTopPage.sectionClass).not.toHaveElementClassContaining('col-sm-7');
}

async function testAppName(theme, lang){
    await appTopPage.open(theme, lang);
    if (lang == 'en'){ await expect(appTopPage.appNameH2).toHaveTextContaining('Name of Web application'); }
    else { await expect(appTopPage.appNameH2).toHaveTextContaining('Nom de l\'application Web'); }
    await expect(appTopPage.appNameAnchor).toHaveTextContaining('Application name');
}

async function customSearchExists(theme, lang){
    if (theme == 'gcweb') {
        await appTopPage.open(theme, lang);
        await expect(topPage.customSearchPlaceholder).toHaveTextContaining('Search Canada.ca');
    }
    else {
        await appTopPage.open(theme, lang, 'signOut');
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

async function customSearchExists_FR(theme, lang){
    if (theme == 'gcweb') {
        await appTopPage.open(theme, lang);
        await expect(topPage.customSearchPlaceholder).toHaveTextContaining('Recherche Canada.ca');
    }
    else {
        await appTopPage.open(theme, lang, 'signOut');
        await expect(topPage.customSearchPlaceholder).toHaveTextContaining('Recherche');
    }
    await expect(topPage.customSearch).toExist();
    await expect(topPage.customSearchLabel).toHaveTextContaining('Recherche Canada.ca');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('name', 'customName');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('placeholder', 'Recherche Canada.ca');
    await expect(topPage.customSearchHiddenInput).toHaveAttributeContaining('name', 'cdn');
    await expect(topPage.customSearchHiddenInput).toHaveAttributeContaining('value', 'canada');
    await expect(topPage.customSearchBtn).toExist();
}

async function customSearchDefaultValues(theme, lang){
    if (theme == 'gcweb') { await appTopPage.open(theme, lang, 'externalLinkMenu'); }
    else { await appTopPage.open(theme, lang, 'customSearchDefault'); }
    await expect(topPage.customSearchPlaceholder).toHaveTextContaining('Search');
    await expect(topPage.customSearchLabel).toHaveTextContaining('Search');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('name', 'q');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('placeholder', 'Search');
    if (theme != 'gcweb') {
        await expect(topPage.customSearchHiddenInput).toExist(); //default hidden inputs should be generated
    }
}

async function customSearchDefaultValues_FR(theme, lang){
    if (theme == 'gcweb') {
        await appTopPage.open(theme, lang, 'externalLinkMenu');
    }
    else {
        await appTopPage.open(theme, lang, 'customSearchDefault');
    }
    await expect(topPage.customSearchPlaceholder).toHaveTextContaining('Recherche');
    await expect(topPage.customSearchLabel).toHaveTextContaining('Recherche');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('name', 'q');
    await expect(topPage.customSearchInput).toHaveAttributeContaining('placeholder', 'Recherche');
    if (theme != 'gcweb') {
        await expect(topPage.customSearchHiddenInput).toExist(); //default hidden inputs should be generated
    }
}

async function sectionClass(theme, lang) {
    await appTopPage.open(theme, lang);
    await expect(topPage.sectionClass).toHaveElementClassContaining('col-lg-2 col-md-3 col-sm-9 col-xs-8')
}

async function sectionClassNoTitle(theme, lang) {
    await appTopPage.open(theme, lang, 'customizedTitle');
    await expect(topPage.sectionClass).toHaveElementClassContaining('col-lg-6 col-md-6 col-sm-9 col-xs-8')
}

async function titleNotCustomized(theme, lang){
    await basicPage.open(theme, lang);
    await expect(basicPage.intranetText).toHaveTextContaining('GC');
    await expect(basicPage.intranetTitle).toHaveTextContaining('GC intranet');
    await expect(basicPage.intranetTitle).toHaveHrefContaining('https://intranet.canada.ca/index');
    await expect(appTopPage.intranetTitleAbbr).not.toExist();
}

async function gcToolsSectionClass(theme, lang) {
    await appTopPage.open(theme, lang, 'externalLinkMenu');
    await expect(topPage.gcToolsSection).toHaveElementClassContaining('col-lg-6 col-md-1 hidden-sm hidden-xs text-right')
}

async function gcToolsSectionClassSearchFalse(theme, lang) {
    await appTopPage.open(theme, lang, 'customizedTitle');
    await expect(topPage.gcToolsSection).toHaveElementClassContaining('col-lg-2 col-md-offset-3 col-md-1 hidden-sm hidden-xs text-right')
}

async function wbGCTools(theme, lang) {
    await basicPage.open(theme, lang);
    await expect(topPage.wbGCTools).toExist();
}

async function langWithSearchClass(theme, lang) {
    await appTopPage.open(theme, lang, 'langWithSearch');
    await expect(topPage.wbLang).toHaveElementClassContaining('lang-with-search');
}

async function langSearchClass(theme, lang) {
    await appTopPage.open(theme, lang, 'externalLinkMenu');
    await expect(topPage.wbLang).not.toHaveElementClassContaining('lang-with-search');
    await expect(topPage.wbLang).not.toHaveElementClassContaining('mrgn-bttm-md');
}

async function langSearchTitleClass(theme, lang) {
    await appTopPage.open(theme, lang, 'signOut');
    await expect(topPage.wbLang).toHaveElementClassContaining('mrgn-bttm-md col-md-offset-1 col-lg-offset-2 col-md-1 hidden-sm hidden-xs text-right');
}

async function gcAppBannerClass(theme, lang) {
    await appTopPage.open(theme, lang);
    await expect(appTopPage.gcAppBannerClass).toHaveElementClassContaining('gc-intra-br');
}

async function gcAppBannerSubthemeClass(theme, lang) {
    await appTopPage.open(theme, lang, 'esdcPreConfigured');
    await expect(appTopPage.gcAppBannerClass).toHaveElementClassContaining('gc-app-br');
    await expect(appTopPage.gcAppBannerSTTL).toHaveElementClassContaining('col-md-10');
}

async function gcAppBannerSTTLClass(theme, lang) {
    await basicPage.open(theme, lang, 'app');
    await expect(appTopPage.gcAppBannerSTTL).toHaveElementClassContaining('col-md-12');
}

async function testAppNameIntranet(theme, lang){
    await appTopPage.open(theme, lang);
    await expect(appTopPage.appNameIntranet).toHaveTextContaining('Application Name');
}

async function testAppNameAbbrIntranet(theme, lang){
    await appTopPage.open(theme, lang, 'externalLinkMenu');
    await expect(appTopPage.appNameAbbrIntranet).toHaveAttributeContaining('title', 'Acronym')
}

async function gcToolsLinksStandard(theme, lang){
    await basicPage.open(theme, lang, 'app');
    await expect(basicPage.gcToolsModalLinks1).toHaveHrefContaining('gcconnex');
    await expect(basicPage.gcToolsModalLinks2).toHaveHrefContaining('gcpedia');
    await expect(basicPage.gcToolsModalLinks3).toHaveHrefContaining('gcdirectory');
    await expect(basicPage.gcToolsModalLinks4).toHaveHrefContaining('gccollab');
}

async function defaultMenu(theme, lang){
    await basicPage.open(theme, lang, 'app');
    await expect(basicPage.defaultMenu).toExist();
}

async function subThemeESDCPreConfigured(theme, lang) {
    await appTopPage.open(theme, lang, 'esdcPreConfigured');
    await expect(topPage.intranetTitle).toHaveTextContaining('Intranet');
    await expect(topPage.searchAction).toHaveAttributeContaining('action', 'https://esdc.prv/cgi-bin/rhdcc-hrsdc/recherche-search.aspx');
    await expect(topPage.gcToolsLink).toExist();
    if (lang == 'en') {
        await expect(topPage.intranetText).toHaveTextContaining('ESDC/SC');
        await expect(topPage.intranetTitleAbbr).toHaveAttributeContaining('title', 'Employment and Social Development Canada');
    } else {
        await expect(topPage.intranetText).toHaveTextContaining('EDSC/SC');
        await expect(topPage.intranetTitleAbbr).toHaveAttributeContaining('title', 'Emploi et Développement social Canada');
    }
}

async function subThemeECCCPreConfigured(theme, lang) {
    await appTopPage.open(theme, lang, 'ecccPreConfigured');
    await expect(topPage.intranetText).toHaveTextContaining('ECCC');
    await expect(topPage.intranetTitle).toHaveTextContaining('Intranet');
    await expect(topPage.searchAction).toHaveAttributeContaining('action', 'https://intranet.ec.gc.ca/default.asp');
    await expect(topPage.gcToolsLink).toExist();
}

async function subThemeLabourPreConfigured(theme, lang) {
    await appTopPage.open(theme, lang, 'labourPreConfigured');
    await expect(topPage.intranetTitle).toHaveTextContaining('Intranet');
    await expect(topPage.searchAction).toHaveAttributeContaining('action', 'https://esdc.prv/cgi-bin/rhdcc-hrsdc/recherche-search.aspx');
    await expect(topPage.gcToolsLink).toExist();
    if (lang == 'en') {
        await expect(topPage.intranetText).toHaveTextContaining('Labour Program');
        await expect(topPage.intranetTitleAbbr).toHaveAttributeContaining('title', 'Employment and Social Development Canada');
    } else {
        await expect(topPage.intranetText).toHaveTextContaining('Programme du travail');
        await expect(topPage.intranetTitleAbbr).toHaveAttributeContaining('title', 'Emploi et Développement social Canada');
    }
}

async function bannerTrue(theme, lang) {
    await appTopPage.open(theme, lang, 'bannerTrue');
    await expect(appTopPage.banner).toExist();
    await expect(appTopPage.bannerText).toHaveTextContaining('');
    await expect(appTopPage.bannerLink).not.toExist();
    await expect(appTopPage.bannerExternalIcon).not.toExist();
    await expect(appTopPage.bannerButton).not.toExist();
}

async function bannerFalse(theme, lang) {
    await appTopPage.open(theme, lang, 'bannerFalse');
    await expect(appTopPage.banner).not.toExist();
}

async function bannerAllConfigurations(theme, lang) {
    await appTopPage.open(theme, lang, 'banner');
    await expect(appTopPage.banner).toExist();
    await expect(appTopPage.bannerExternalIcon).toExist();
    await expect(appTopPage.bannerText).toHaveTextContaining('We\'ve made some changes to improve your experience with My Service Canada Account');
    await expect(appTopPage.bannerLink).toHaveTextContaining('Learn more about the beta version');
    await expect(appTopPage.bannerButton).toHaveTextContaining('Try beta version');
}

async function accessibility(theme, lang , classifier = '') {
    await appTopPage.open(theme, lang, classifier);
    await runAccessbilityTest();
}
