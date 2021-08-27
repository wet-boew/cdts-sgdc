const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SplashPage extends Page {
    /**
     * define selectors using getter methods
     */
    get enBtnLink() { return $('a.btn-primary'); }
    get frBtnLink() { return $('a.btn-default'); }
    get enTermLink() { return $('div.col-xs-7 a:nth-of-type(1)'); }
    get frTermLink() { return $('div.col-xs-7 a:nth-of-type(2)'); }
    get enContent() { return $('div.cdts-splash section:first-child h2'); }
    get frContent() { return $('div.cdts-splash section:last-child h2'); }
    
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
