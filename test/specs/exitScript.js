const exitScriptPage = require('../pageobjects/exitScript.page');
const generateTestFile = require('../../TestFileGenerator.js');
const runAccessbilityTest = require('../../TestA11y.js');
require('../setup/basic.js');

describe('ExitScript Tests - GCWeb', () => {
    const theme = 'gcweb';

    generateTestFile('./test/html/gcweb/template-exitscript-en.html', 'gcweb', 'gcweb-exitscript-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-fr.html', 'gcweb', 'gcweb-exitscript-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-en.html', 'gcweb', 'gcweb-exitscript-noCustomMsg-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-en.html", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-fr.html', 'gcweb', 'gcweb-exitscript-noCustomMsg-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-fr.html", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-en.html', 'gcweb', 'gcweb-exitscript-noDisplay-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": false, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-fr.html', 'gcweb', 'gcweb-exitscript-noDisplay-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": false, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-en.html', 'gcweb', 'gcweb-exitscript-noDisplayNewWindow-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "displayModalForNewWindow": false, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-fr.html', 'gcweb', 'gcweb-exitscript-noDisplayNewWindow-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "displayModalForNewWindow": false, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-en.html', 'gcweb', 'gcweb-exitscript-disabled-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": false, "displayModal": true, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-fr.html', 'gcweb', 'gcweb-exitscript-disabled-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": false, "displayModal": true, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-en.html', 'gcweb', 'gcweb-exitscript-noExitUrl-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-fr.html', 'gcweb', 'gcweb-exitscript-noExitUrl-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-en.html', 'gcweb', 'gcweb-exitscript-parameters-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitScript": true, "displayModal": true, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca", "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcweb/template-exitscript-fr.html', 'gcweb', 'gcweb-exitscript-parameters-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitScript": true, "displayModal": true, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca", "cdnEnv": "localhost"}'
    });

    //TODO: Test failing in pipeline
    /*it('Straight forward path of exit script', async () => {
        await straightPath(theme);
        await straightPath_FR(theme);
    });*/

    it('Test default message and button labels', async () => {
        await testDefaultLabels(theme);
    });

    it('Test default message and button labels - FR', async () => {
        await testDefaultLabels_FR(theme);
    });

    it('Launch the modal, test custom message/button labels but click cancel', async () => {
        await testCustomLabels(theme);
        await testCustomLabels_FR(theme);
    });

    //TODO: This test keeps failing in the pipeline
    //This test should be modified
    it.skip('Test link that will open in new window', async () => {
        await testTargetMsg(theme);
        await testTargetMsg_FR(theme);
    });

    it('Test link within same domain', async () => {
        await sameDomainLink(theme);
        await sameDomainLink_FR(theme);
    });

    it('Test link with exempt domain', async () => {
        await exemptDomainLink(theme);
        await exemptDomainLink_FR(theme);
    });

    it('Test display turned off', async () => {
        await displayOff(theme);
        await displayOff_FR(theme);
    });

    //To test if display is off for a link that opens in new window, uncomment below and run it manually
    /*it('Test display turned off for new window', async () => {
        await displayOffForNewWindow(theme);
        await displayOffForNewWindow_FR(theme);
    });*/

    it('Test exitscript turned off', async () => {
        await exitScriptNotEnabled(theme);
        await exitScriptNotEnabled_FR(theme);
    });

    it('Test no exit url', async () => {
        await noExitUrl(theme);
        await noExitUrl_FR(theme);
    });

    it('Test ExitScript pop up for menu links', async () => {
        await testExitScriptForMenuLinks(theme, 'en');
        await testExitScriptForMenuLinks(theme, 'fr');
    });

    it('Test backwards compatibility', async () => {
        await exitScriptBackwardsCompatible(theme, 'en');
        await exitScriptBackwardsCompatible(theme, 'fr');
    });

    it('Test link with exempt attribute', async () => {
        await exemptAttributeLink(theme, 'en');
        await exemptAttributeLink(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

describe('ExitScript Tests - GCIntranet', () => {
    const theme = 'gcintranet';

    generateTestFile('./test/html/gcintranet/template-exitscript-en.html', 'gcintranet', 'gcintranet-exitscript-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-fr.html', 'gcintranet', 'gcintranet-exitscript-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-en.html', 'gcintranet', 'gcintranet-exitscript-nomenu-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": false}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-fr.html', 'gcintranet', 'gcintranet-exitscript-nomenu-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": false}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-en.html', 'gcintranet', 'gcintranet-exitscript-noCustomMsg-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-en.html", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-fr.html', 'gcintranet', 'gcintranet-exitscript-noCustomMsg-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitURL": "exiturl-fr.html", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-en.html', 'gcintranet', 'gcintranet-exitscript-noDisplay-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": false, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-fr.html', 'gcintranet', 'gcintranet-exitscript-noDisplay-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": false, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-en.html', 'gcintranet', 'gcintranet-exitscript-noDisplayNewWindow-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "displayModalForNewWindow": false, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-fr.html', 'gcintranet', 'gcintranet-exitscript-noDisplayNewWindow-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "displayModalForNewWindow": false, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-en.html', 'gcintranet', 'gcintranet-exitscript-disabled-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": false, "displayModal": true, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-fr.html', 'gcintranet', 'gcintranet-exitscript-disabled-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": false, "displayModal": true, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-en.html', 'gcintranet', 'gcintranet-exitscript-noExitUrl-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-fr.html', 'gcintranet', 'gcintranet-exitscript-noExitUrl-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitSecureSite" : {"exitScript": true, "displayModal": true, "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca"}, "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-en.html', 'gcintranet', 'gcintranet-exitscript-parameters-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitScript": true, "displayModal": true, "exitURL": "exiturl-en.html", "exitMsg": "This is a custom message. You are about to leave a secure site, do you wish to continue?", "cancelMsg": "Nope", "yesMsg" : "Sure", "targetWarning": "Warning: This will open in another window!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca", "cdnEnv": "localhost"}'
    });

    generateTestFile('./test/html/gcintranet/template-exitscript-fr.html', 'gcintranet', 'gcintranet-exitscript-parameters-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"exitScript": true, "displayModal": true, "exitURL": "exiturl-fr.html", "exitMsg": "Ceci est un message personnalisé. Vous êtes sur le point de quitter un site sécurisé, désirez-vous continuer?", "cancelMsg": "Arrêter", "yesMsg" : "Continuer", "targetWarning": "Attention: cela va s\'ouvrir dans une autre fenêtre!", "exitDomains" : "google.com, www.esdc.gc.ca, www.jobbank.gc.ca", "cdnEnv": "localhost"}'
    });

    it('Straight forward path of exit script', async () => {
        await straightPath(theme);
        await straightPath_FR(theme);
    });

    it('Test default message and button labels', async () => {
        await testDefaultLabels(theme);
    });

    it('Test default message and button labels - FR', async () => {
        await testDefaultLabels_FR(theme);
    });

    it('Launch the modal, test custom message/button labels but click cancel', async () => {
        await testCustomLabels(theme);
        await testCustomLabels_FR(theme);
    });

    it('Test link that will open in new window', async () => {
        await testTargetMsg(theme);
        await testTargetMsg_FR(theme);
    });

    it('Test link within same domain', async () => {
        await sameDomainLink(theme);
        await sameDomainLink_FR(theme);
    });

    it('Test link with exempt domain', async () => {
        await exemptDomainLink(theme);
        await exemptDomainLink_FR(theme);
    });

    it('Test display turned off', async () => {
        await displayOff(theme);
        await displayOff_FR(theme);;
    });

    //To test if display is off for a link that opens in new window, uncomment below and run it manually
    /*it('Test display turned off for new window', async () => {
        await displayOffForNewWindow(theme);
        await displayOffForNewWindow_FR(theme);
    });*/

    it('Test exitscript turned off', async () => {
        await exitScriptNotEnabled(theme);
        await exitScriptNotEnabled_FR(theme);
    });

    it('Test no exit url', async () => {
        await noExitUrl(theme);
        await noExitUrl_FR(theme);
    });

    it('Test ExitScript pop up for menu links', async () => {
        await testExitScriptForMenuLinksGCIntranet(theme, 'en');
        await testExitScriptForMenuLinksGCIntranet(theme, 'fr');
    });

    it('Test backwards compatibility', async () => {
        await exitScriptBackwardsCompatible(theme, 'en');
        await exitScriptBackwardsCompatible(theme, 'fr');
    });

    it('Test link with exempt attribute', async () => {
        await exemptAttributeLink(theme, 'en');
        await exemptAttributeLink(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en', 'nomenu');
        await accessibility(theme, 'fr', 'nomenu');
    });
});

async function straightPath(theme){
    await exitScriptPage.open(theme, 'en');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass?.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    const yesBtn = await exitScriptPage.yesBtn;
    await yesBtn.waitForExist({timeout: 3000})
    await yesBtn.click();
    await expect(browser).toHaveUrl(expect.stringContaining('google.com'));
}
async function testCustomLabels(theme){
    await exitScriptPage.open(theme, 'en');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    await (await exitScriptPage.modalText).waitForExist({timeout: 3000})
    await expect(exitScriptPage.modalText).toHaveText(expect.stringContaining('This is a custom message'));
    await expect(exitScriptPage.modalYesBtn).toHaveText(expect.stringContaining('Sure'));
    await expect(exitScriptPage.modalCancelBtn).toHaveText(expect.stringContaining('Nope'));

    const cancelBtn = await exitScriptPage.modalCancelBtn;
    await cancelBtn.click();
    await (await exitScriptPage.pageTitle).waitForExist({timeout: 3000})
    await expect(exitScriptPage.pageTitle).toHaveText(expect.stringContaining('Leaving a secure site'));
}
async function testTargetMsg(theme){
    await exitScriptPage.open(theme, 'en');
    const extLink = await exitScriptPage.extLinkNewWin;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    await (await exitScriptPage.modalText).waitForExist({timeout: 3000})
    await expect(exitScriptPage.modalText).toHaveText(expect.stringContaining('Warning: This will open in another window!'));
}
async function sameDomainLink(theme){
    await exitScriptPage.open(theme, 'en');
    const extLink = await exitScriptPage.extLinkSameDomain;
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('breadcrumbs-en'));
}
async function exemptDomainLink(theme){
    await exitScriptPage.open(theme, 'en');
    const extLink = await exitScriptPage.extLinkExemptDomain;
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('google'));
}
async function displayOff(theme){
    await exitScriptPage.open(theme, 'en', 'noDisplay');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkHref = await extLink.getAttribute('href');
        return extLinkHref.includes('exiturl-en.html?exturl=') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected href to be modified after 5s'
    });
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('exiturl-en'));
}
async function displayOffForNewWindow(theme){
    await exitScriptPage.open(theme, 'en', 'noDisplayNewWindow');
    const extLink = await exitScriptPage.extLinkNewWin;
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('noDisplayNewWindow'));
}
async function exitScriptNotEnabled(theme){
    await exitScriptPage.open(theme, 'en', 'disabled');
    const extLink = await exitScriptPage.extLink;
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('google'));
}
async function testDefaultLabels(theme){
    await exitScriptPage.open(theme, 'en', 'noCustomMsg');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    await (await exitScriptPage.modalText).waitForExist({timeout: 3000})
    await expect(exitScriptPage.modalText).toHaveText(expect.stringContaining('You are about to leave a secure site'));
    await expect(exitScriptPage.modalYesBtn).toHaveText(expect.stringContaining('Yes'));
    await expect(exitScriptPage.modalCancelBtn).toHaveText(expect.stringContaining('Cancel'));

    const btnPrimary = await exitScriptPage.modalCancelBtn;
    await btnPrimary.click()
}
async function noExitUrl(theme){
    await exitScriptPage.open(theme, 'en', 'noExitUrl');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    const yesBtn = await exitScriptPage.yesBtn;
    await yesBtn.waitForExist({timeout: 3000})
    await yesBtn.click();
    await expect(browser).toHaveUrl(expect.stringContaining('google'));
}

async function testExitScriptForMenuLinks(theme, lang){
    await exitScriptPage.open(theme, lang);
    const menuBtn = await exitScriptPage.menuBtn;
    const menuTrainingLink = await exitScriptPage.menuTrainingLink;
    await menuTrainingLink.waitUntil(async () => {
        const extLinkClass = await menuTrainingLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await menuBtn.click();
    await menuTrainingLink.click();
    await (await exitScriptPage.exitScriptModal).waitForExist({timeout: 3000})
    //await expect(exitScriptPage.exitScriptModal).toExist();
}

async function testExitScriptForMenuLinksGCIntranet(theme, lang){
    await exitScriptPage.open(theme, lang);
    const menuNewsLink = (lang === 'en') ? await exitScriptPage.menuNewsLink : await exitScriptPage.menuNewsLinkFR;
    const menuBtn = await exitScriptPage.menuBtnGCIntranet;
    await menuNewsLink.waitUntil(async () => {
        const extLinkClass = await menuNewsLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await menuBtn.click();
    await menuNewsLink.click();
    await (await exitScriptPage.exitScriptModal).waitForExist({timeout: 3000})
    //await expect(exitScriptPage.exitScriptModal).toExist();
}

async function exitScriptBackwardsCompatible(theme, lang){
    await exitScriptPage.open(theme, lang, 'parameters');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });
    await extLink.click();

    const yesBtn = await exitScriptPage.yesBtn;
    await yesBtn.waitForExist({timeout: 3000});

    if (lang === 'en') {
        await expect(exitScriptPage.modalText).toHaveText(expect.stringContaining('This is a custom message'));
        await expect(exitScriptPage.modalYesBtn).toHaveText(expect.stringContaining('Sure'));
        await expect(exitScriptPage.modalCancelBtn).toHaveText(expect.stringContaining('Nope'));
    } else {
        await expect(exitScriptPage.modalText).toHaveText(expect.stringContaining('Ceci est un message personnalisé'));
        await expect(exitScriptPage.modalYesBtn).toHaveText(expect.stringContaining('Continuer'));
        await expect(exitScriptPage.modalCancelBtn).toHaveText(expect.stringContaining('Arrêter'));
    }

    await yesBtn.click();
    await expect(browser).toHaveUrl(expect.stringContaining('google'));
}

//French
async function straightPath_FR(theme){
    await exitScriptPage.open(theme, 'fr');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    const yesBtn = await exitScriptPage.yesBtn;
    await yesBtn.waitForExist({timeout: 3000})
    await yesBtn.click();
    await expect(browser).toHaveUrl(expect.stringContaining('google'));
}
async function testCustomLabels_FR(theme){
    await exitScriptPage.open(theme, 'fr');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    await (await exitScriptPage.modalText).waitForExist({timeout: 3000})
    await expect(exitScriptPage.modalText).toHaveText(expect.stringContaining('Ceci est un message personnalisé'));
    await expect(exitScriptPage.modalYesBtn).toHaveText(expect.stringContaining('Continuer'));
    await expect(exitScriptPage.modalCancelBtn).toHaveText(expect.stringContaining('Arrêter'));

    const cancelBtn = await exitScriptPage.modalCancelBtn;
    await cancelBtn.waitForExist({timeout: 3000})
    await cancelBtn.click();
    await (await exitScriptPage.pageTitle).waitForExist({timeout: 3000})
    await expect(exitScriptPage.pageTitle).toHaveText(expect.stringContaining('Quitter un site sécurisé'));
}
async function testTargetMsg_FR(theme){
    await exitScriptPage.open(theme, 'fr');
    const extLink = await exitScriptPage.extLinkNewWin;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    await (await exitScriptPage.modalText).waitForExist({timeout: 3000})
    await expect(exitScriptPage.modalText).toHaveText(expect.stringContaining(`Attention: cela va s'ouvrir dans une autre fenêtre`));
}
async function sameDomainLink_FR(theme){
    await exitScriptPage.open(theme, 'fr');
    const extLink = await exitScriptPage.extLinkSameDomain;
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('breadcrumbs-fr'));
}
async function exemptDomainLink_FR(theme){
    await exitScriptPage.open(theme, 'fr');
    const extLink = await exitScriptPage.extLinkExemptDomain;
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('google'));
}
async function displayOff_FR(theme){
    await exitScriptPage.open(theme, 'fr', 'noDisplay');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkHref = await extLink.getAttribute('href');
        return extLinkHref.includes('exiturl-fr.html?exturl=') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected href to be modified after 5s'
    });

    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('exiturl-fr'));
}
async function displayOffForNewWindow_FR(theme){
    await exitScriptPage.open(theme, 'fr', 'noDisplayNewWindow');
    const extLink = await exitScriptPage.extLinkNewWin;
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('noDisplayNewWindow'));
}
async function exitScriptNotEnabled_FR(theme){
    await exitScriptPage.open(theme, 'fr', 'disabled');
    const extLink = await exitScriptPage.extLink;
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('google'));
}
async function testDefaultLabels_FR(theme){
    await exitScriptPage.open(theme, 'fr', 'noCustomMsg');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    await (await exitScriptPage.modalText).waitForExist({timeout: 3000})
    await expect(exitScriptPage.modalText).toHaveText(expect.stringContaining('Vous êtes sur le point de quitter un site sécurisé'));
    await expect(exitScriptPage.modalYesBtn).toHaveText(expect.stringContaining('Oui'));
    await expect(exitScriptPage.modalCancelBtn).toHaveText(expect.stringContaining('Annuler'));

    const cancelBtn = await exitScriptPage.modalCancelBtn;
    await cancelBtn.click();
}
async function noExitUrl_FR(theme){
    await exitScriptPage.open(theme, 'fr', 'noExitUrl');
    const extLink = await exitScriptPage.extLink;
    await extLink.waitUntil(async () => {
        const extLinkClass = await extLink.getAttribute('class');
        return extLinkClass.includes('wb-exitscript') || false;
    }, {
        timeout: 5000,
        timeoutMsg: 'Expected class to be wb-exitscript after 5s'
    });

    await extLink.click();
    const yesBtn = await exitScriptPage.yesBtn;
    await yesBtn.waitForExist({timeout: 3000})
    await yesBtn.click();
    await expect(browser).toHaveUrl(expect.stringContaining('google'));
}

async function exemptAttributeLink(theme, lang){
    await exitScriptPage.open(theme, lang);
    const extLink = await exitScriptPage.extLinkExemptAttribute;
    await extLink.click();
    await expect(browser).toHaveUrl(expect.stringContaining('canada'));
}

async function accessibility(theme, lang, variant) {
    await exitScriptPage.open(theme, lang, variant);
    await runAccessbilityTest();
}
