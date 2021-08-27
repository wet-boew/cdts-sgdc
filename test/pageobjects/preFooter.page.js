const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PreFooterPage extends Page {
    /**
     * define selectors using getter methods
     */

    get feedbackBtn() { return $('div.pagedetails a.btn-center'); }
    get shareBtn() { return $('div.pagedetails a.shr-opn'); }
    get shareModal() { return $('#shr-pg0'); }
    get screenID() { return $('#wb-dtmd dt:first-child'); }
    get screenIDText() { return $('#wb-dtmd dd:first-of-type'); }
    get dateModified() { return $('#wb-dtmd dd:first-of-type+dt'); }
    get dateModifiedText() { return $('time[property="dateModified"]'); }
    get version() { return $('#wb-dtmd dt:last-of-type'); }
    get versionText() { return $('#wb-dtmd dd:last-child'); }
    get emailBtn() { return $('ul.colcount-xs-2 a.email'); }
    get facebookBtn() { return $('ul.colcount-xs-2 a.facebook'); }
    get linkedinBtn() { return $('ul.colcount-xs-2 a.linkedin'); }
    get twitterBtn() { return $('ul.colcount-xs-2 a.twitter'); }
    get pageDetails() { return $('div.pagedetails'); }
    get shareDiv() { return $('div.wb-share'); }

    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang language of the sub page (e.g. en, fr)
    */

    //Return the various test pages
    open(theme, lang, classifier = '') {
        return super.open(theme, `${theme}-preFooter${classifier ? '-' : ''}${classifier}-${lang}.html`);
    }
}

module.exports = new PreFooterPage();
