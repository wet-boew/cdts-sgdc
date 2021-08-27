const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SectionMenuPage extends Page {
    /**
     * define selectors using getter methods
     */
    get sectionMenu() { return $('#wb-sec') }
    get menuLink() { return $('#wb-sec section:first-of-type ul li:nth-child(1) a') }
    get subLink() { return $('#wb-sec section:first-of-type ul li:nth-child(1) ul li:nth-child(1) a') }
    get subLinkNewWindow() { return $('#wb-sec section:first-of-type ul li:nth-child(1) ul li:nth-child(3) a') }
    get secondSectionLink() { return $('#wb-sec section:nth-of-type(2) h3') }
    get secondSectionLinkNewWin() { return $('#wb-sec section:nth-of-type(2) h3 a') }
    get thirdSectionText() { return $('#wb-sec section:nth-of-type(3) h3') }
    get skipSecLink() { return $('//li/a[@href="#wb-sec"]') }
    get menuLinkNewWindow() { return $('//nav[@id="wb-sec"]/h2/following-sibling::section/following-sibling::section/h3/a'); }

    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang language of the sub page (e.g. en, fr)
    */

    //Return the various test pages
    open(theme, lang) {
        return super.open(theme, `${theme}-sectionmenu-${lang}.html`);
    }
}

module.exports = new SectionMenuPage();