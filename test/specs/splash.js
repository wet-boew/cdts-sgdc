const splashPage = require('../pageobjects/splash.page');
const generateTestFile = require('../../TestFileGenerator.js');
const runAccessbilityTest = require('../../TestA11y.js');

describe('Splash page tests for GCWeb', () => {
    const theme = 'gcweb';
    
    generateTestFile('./test/html/gcweb/template-splash.html', 'gcweb', 'gcweb-splash', {
        splashTop: '{"cdnEnv": "localhost"}',
        splash: '{"cdnEnv": "localhost", "indexEng": "http://www.canada.ca/en/index.html", "indexFra": "http://www.canada.ca/fr/index.html", "termsEng": "http://www.canada.ca/en/transparency/terms.html", "termsFra": "http://www.canada.ca/fr/transparence/avis.html", "nameEng": "Shrink your window to see if all the words are displayed correctly", "nameFra": "Rapetisser votre fenêtre pour voir si tous les mots s\'affichent correctement"}'
	});

    generateTestFile('./test/html/gcweb/template-splash.html', 'gcweb', 'gcweb-splash-noText', {
        splashTop: '{"cdnEnv": "localhost"}',
        splash: '{"cdnEnv": "localhost", "indexEng": "http://www.canada.ca/en/index.html", "indexFra": "http://www.canada.ca/fr/index.html", "termsEng": "http://www.canada.ca/en/transparency/terms.html", "termsFra": "http://www.canada.ca/fr/transparence/avis.html"}'
	});

    generateTestFile('./test/html/gcweb/template-splash.html', 'gcweb', 'gcweb-splash-frenchFirst', {
        splashTop: '{"cdnEnv": "localhost"}',
        splash: '{"cdnEnv": "localhost", "languagePrecedence":"French", "indexEng": "http://www.canada.ca/en/index.html", "indexFra": "http://www.canada.ca/fr/index.html", "termsEng": "http://www.canada.ca/en/transparency/terms.html", "termsFra": "http://www.canada.ca/fr/transparence/avis.html", "nameEng": "Shrink your window to see if all the words are displayed correctly", "nameFra": "Rapetisser votre fenêtre pour voir si tous les mots s\'affichent correctement"}'
	});

    it('Validate button links', async () => {
        await btnLinks(theme);
    });

    it('Validate term links', async () => {
        await termLinks(theme);
    });

    it('Validate the content', async () => {
        await bodyContent(theme);
    });

    it('Validate there is no visible text', async () => {
        await noContent(theme);
    });

    it('Validate French First', async () => {
        await splashFrenchFirst(theme);
    });

    it('Accessibility', async () => {
        await accessibility(theme);
    });
});

describe('Splash page tests for GCIntranet', () => {
    const theme = 'gcintranet';
    
    generateTestFile('./test/html/gcintranet/template-splash.html', 'gcintranet', 'gcintranet-splash', {
        splashTop: '{"cdnEnv": "localhost"}',
        splash: '{"cdnEnv": "localhost", "indexEng": "http://www.canada.ca/en/index.html", "indexFra": "http://www.canada.ca/fr/index.html", "termsEng": "http://www.canada.ca/en/transparency/terms.html", "termsFra": "http://www.canada.ca/fr/transparence/avis.html", "nameEng": "Shrink your window to see if all the words are displayed correctly", "nameFra": "Rapetisser votre fenêtre pour voir si tous les mots s\'affichent correctement"}'
	});
    
    generateTestFile('./test/html/gcintranet/template-splash.html', 'gcintranet', 'gcintranet-splash-noText', {
        splashTop: '{"cdnEnv": "localhost"}',
        splash: '{"cdnEnv": "localhost", "indexEng": "http://www.canada.ca/en/index.html", "indexFra": "http://www.canada.ca/fr/index.html", "termsEng": "http://www.canada.ca/en/transparency/terms.html", "termsFra": "http://www.canada.ca/fr/transparence/avis.html"}'
	});

    generateTestFile('./test/html/gcintranet/template-splash.html', 'gcintranet', 'gcintranet-splash-frenchFirst', {
        splashTop: '{"cdnEnv": "localhost"}',
        splash: '{"cdnEnv": "localhost", "languagePrecedence":"French", "indexEng": "http://www.canada.ca/en/index.html", "indexFra": "http://www.canada.ca/fr/index.html", "termsEng": "http://www.canada.ca/en/transparency/terms.html", "termsFra": "http://www.canada.ca/fr/transparence/avis.html", "nameEng": "Shrink your window to see if all the words are displayed correctly", "nameFra": "Rapetisser votre fenêtre pour voir si tous les mots s\'affichent correctement"}'
	});

    it('Validate button links', async () => {
        await btnLinks(theme);
    });

    it('Validate term links', async () => {
        await termLinks(theme);
    });

    it('Validate the content', async () => {
        await bodyContent(theme);
    });

    it('Validate there is no visible text', async () => {
        await noContent(theme);
    });

    it('Validate French First', async () => {
        await splashFrenchFirst(theme);
    });

    it('Accessibility', async () => {
        await accessibility(theme);
    });
});

async function btnLinks(theme){
    await splashPage.open(theme);
    await expect(splashPage.primaryBtnLink).toHaveHref(expect.stringContaining('canada.ca/en'));
    await expect(splashPage.defaultBtnLink).toHaveHref(expect.stringContaining('canada.ca/fr'));
}

async function termLinks(theme){
    await splashPage.open(theme);
    await expect(splashPage.primaryTermLink).toHaveHref(expect.stringContaining('terms.html'));
    await expect(splashPage.defaultTermLink).toHaveHref(expect.stringContaining('avis.html'));
}

async function bodyContent(theme){
    await splashPage.open(theme);
    await expect(splashPage.primaryContent).toHaveText(expect.stringContaining('Shrink your window'));
    await expect(splashPage.defaultContent).toHaveText(expect.stringContaining('Rapetisser votre'));
}

async function noContent(theme){
    await splashPage.open(theme, 'noText');
    await expect(splashPage.primaryContent).toHaveAttribute('class', expect.stringContaining('wb-inv'));
    await expect(splashPage.primaryContent).toHaveText(expect.stringContaining('Government of Canada'));
    await expect(splashPage.defaultContent).toHaveAttribute('class', expect.stringContaining('wb-inv'));
    await expect(splashPage.defaultContent).toHaveText(expect.stringContaining('Gouvernement du Canada'));
}

async function splashFrenchFirst(theme){
    await splashPage.open(theme, 'frenchFirst');
    await expect(splashPage.primaryBtnLink).toHaveHref(expect.stringContaining('canada.ca/fr'));
    await expect(splashPage.defaultBtnLink).toHaveHref(expect.stringContaining('canada.ca/en'));
    await expect(splashPage.primaryTermLink).toHaveHref(expect.stringContaining('avis.html'));
    await expect(splashPage.defaultTermLink).toHaveHref(expect.stringContaining('terms.html'));
    await expect(splashPage.primaryContent).toHaveText(expect.stringContaining('Rapetisser votre'));
    await expect(splashPage.defaultContent).toHaveText(expect.stringContaining('Shrink your window'));
}

async function accessibility(theme) {
    await splashPage.open(theme);
    await runAccessbilityTest();
}
