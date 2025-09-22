const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SplashPage extends Page {
    /**
     * define selectors using getter methods
     */
    get primaryBtnLink() { return $('a.btn-primary'); }
    get defaultBtnLink() { return $('a.btn-default'); }
    get primaryTermLink() { return $('div.col-xs-7 a:nth-of-type(1)'); }
    get defaultTermLink() { return $('div.col-xs-7 a:nth-of-type(2)'); }
    get primaryContent() { return $('div.cdts-splash section:first-child h3'); }
    get defaultContent() { return $('div.cdts-splash section:last-child h3'); }
    get primaryGCIntranetContent() { return $('div.cdts-splash section:first-child h2'); }
    get defaultGCIntranetContent() { return $('div.cdts-splash section:last-child h2'); }
    get primaryInvContent() { return $('div.cdts-splash section:first-child h2'); }
    get defaultInvContent() { return $('div.cdts-splash section:last-child h2'); }
    
    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang language of the sub page (e.g. en, fr)
    */

    //Return the various test pages
    open(theme, classifier = '') {
        return super.open(theme, `${theme}-splash${classifier ? '-' : ''}${classifier}.html`);
    }
}

module.exports = new SplashPage();
