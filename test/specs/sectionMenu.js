const sectionMenuPage = require('../pageobjects/sectionMenu.page');
const runAccessbilityTest = require('../../TestA11y.js');

describe('Section menu tests for GCWeb', () => {
    const theme = 'gcweb';

    it('Validate that the section menu exists', async () => {
        await sectionMenuExists(theme, 'en');
        await sectionMenuExists(theme, 'fr');
    });

    it('Validate menu Link', async () => {
        await menuLinks(theme, 'en');
        await menuLinks(theme, 'fr');
    });

    it('Validate sublinks', async () => {
        await subLinks(theme, 'en');
        await subLinks(theme, 'fr');
    });

    it('Validate link will open in a new window', async () => {
        await linkOpensInNewWindow(theme, 'en');
        await linkOpensInNewWindow(theme, 'fr');
    });

    it('Validate second/third sections', async () => {
        await validateSections(theme, 'en');
        await validateSections(theme, 'fr');
    });

    it('Validate Skip to section menu link exists', async () => {
        await skipLinkExists(theme, 'en');
        await skipLinkExists(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

describe('Section menu tests for GCIntranet', () => {
    const theme = 'gcintranet';

    it('Validate that the section menu exists', async () => {
        await sectionMenuExists(theme, 'en');
        await sectionMenuExists(theme, 'fr');
    }); 

    it('Validate menu Link', async () => {
        await menuLinks(theme, 'en');
        await menuLinks(theme, 'fr');
    });

    it('Validate sublinks', async () => {
        await subLinks(theme, 'en');
        await subLinks(theme, 'fr');
    });

    it('Validate link will open in a new window', async () => {
        await linkOpensInNewWindow(theme, 'en');
        await linkOpensInNewWindow(theme, 'fr');
    });

    it('Validate second/third sections', async () => {
        await validateSections(theme, 'en');
        await validateSections(theme, 'fr');
    });

    it('Validate Skip to section menu link exists', async () => {
        await skipLinkExists(theme, 'en');
        await skipLinkExists(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

async function sectionMenuExists(theme, lang){
    await sectionMenuPage.open(theme, lang);
    await expect(sectionMenuPage.sectionMenu).toExist();
}

async function menuLinks(theme, lang){
    await sectionMenuPage.open(theme, lang);
    await expect(sectionMenuPage.menuLink).toHaveText(expect.stringContaining('Link 1'));
    await expect(sectionMenuPage.menuLinkNewWindow).toHaveAttribute('target', '_blank')
}

async function subLinks(theme, lang){
    await sectionMenuPage.open(theme, lang);
    await expect(sectionMenuPage.subLink).toHaveText(expect.stringContaining('Link 1.1 a)'));
}

async function linkOpensInNewWindow(theme, lang){
    await sectionMenuPage.open(theme, lang);
    await expect(sectionMenuPage.subLinkNewWindow).toHaveAttribute('target', '_blank')
}

async function validateSections(theme, lang){
    await sectionMenuPage.open(theme, lang);
    await expect(sectionMenuPage.secondSectionLink).toHaveText(expect.stringContaining('Opens in a new window'));
    await expect(sectionMenuPage.secondSectionLinkNewWin).toHaveAttribute('target', expect.stringContaining('_blank'));
    await expect(sectionMenuPage.thirdSectionText).toHaveText(expect.stringContaining('Section name 3'));
}

async function skipLinkExists(theme, lang){
    await sectionMenuPage.open(theme, lang);
    await expect(sectionMenuPage.skipSecLink).toExist();
}

async function accessibility(theme, lang) {
    await sectionMenuPage.open(theme, lang);
    await runAccessbilityTest();
}
