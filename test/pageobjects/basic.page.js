const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasicPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cdtsBreadCrumb() { return $('ol.breadcrumb'); }
    get canBreadCrumb() { return $('ol.breadcrumb li:nth-child(1) a'); }
    get banner() { return $('header div.row'); }
    get langLink() { return $('#wb-lng'); }
    get intranetText() { return $('div.app-name span.bold-gc'); }
    get intranetTitle() { return $('div.app-name a'); }
    get gcToolsModalLinks() { return $('#wb-gctools'); }
    get gcToolsModalLinks1() { return $('//section[@id="wb-gctools"]/div[1]/a'); }
    get gcToolsModalLinks2() { return $('//section[@id="wb-gctools"]/div[2]/a'); }
    get gcToolsModalLinks3() { return $('//section[@id="wb-gctools"]/div[3]/a'); }
    get gcToolsModalLinks4() { return $('//section[@id="wb-gctools"]/div[4]/a'); }
    get intranetMenu() { return $('ul.menu'); }
    get search() {return $('#wb-srch'); }
    get defaultMenu() {return $('#wb-sm'); }

    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang language of the sub page (e.g. en, fr)
    */

    //Return the various test pages
    open(theme, lang, classifier = '') {
        return super.open(theme, `${theme}${classifier ? '-' : ''}${classifier}-basic-${lang}.html`);
    }
}

module.exports = new BasicPage();
