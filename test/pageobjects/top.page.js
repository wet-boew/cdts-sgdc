const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TopPage extends Page {
    /**
     * define selectors using getter methods
     */
    get canBreadCrumb() { return $('ol.breadcrumb li:nth-child(1) a'); }
    get canBreadCrumbAbbr() { return $('ol.breadcrumb li:nth-child(1) abbr'); }
    get cdtsBreadCrumb() { return $('ol.breadcrumb li:nth-child(2) abbr'); }
    get langLink() { return $('ul.list-inline li:nth-child(1) a'); }
    get langLinkText() { return $('ul.list-inline li:nth-child(1) span'); }
    get langLinkTextIntranet() { return $('section.lang-no-search a'); }
    get langLinkIntranet() { return $('section.lang-no-search a'); }
    get intranetText() { return $('div.app-name span.bold-gc'); }
    get intranetTitle() { return $('div.app-name a'); }
    get intranetTitleAbbr() { return $('div.app-name a span abbr'); }
    get gcToolsLink() { return $('a.wb-lbx'); }
    get gcToolsModalTitle() { return $('#lbx-title'); }
    get gcToolsModalLinks() { return $('div.modal-body ul.lst-spcd'); }
    get gcToolsModalLink1() { return $('section.modal-dialog li:nth-child(1) a'); }
    get gcToolsModalLink2() { return $('section.modal-dialog li:nth-child(2) a'); }
    get gcToolsModalLink3() { return $('section.modal-dialog li:nth-child(3) a'); }
    get gcToolsModalLink4() { return $('section.modal-dialog li:nth-child(4) a'); }
    get gcToolsModalLink5() { return $('section.modal-dialog li:nth-child(5) a'); }
    get intranetMenu() { return $('ul.menu'); }
    get search() {return $('#wb-srch'); }
    get transactBar() {return $('div.transactBar');}
    get menuBtnTitle() {return $('#gcwebMenu');}
    get menuBtn() {return $('//h2[@id="gcwebMenu"]/following-sibling::button');}
    get govCanImgLink() {return $('//div[@typeof="GovernmentOrganization"]/a[@href="https://www.canada.ca/en.html"]');}
    get govCanImgLinkFR() {return $('//div[@typeof="GovernmentOrganization"]/a[@href="https://www.canada.ca/fr.html"]');}
    get customSearch() {return $('#custom-search');}
    get customSearchPlaceholder() { return $('//section[@id="wb-srch"]/h2'); }
    get customSearchLabel() { return $('//section[@id="wb-srch"]/h2/following-sibling::form/div/label'); }
    get customSearchInput() { return $('//section[@id="wb-srch"]/h2/following-sibling::form/div/label/following-sibling::input'); }
    get customSearchHiddenInput() { return $('//section[@id="wb-srch"]/h2/following-sibling::form/div/label/following-sibling::input/following-sibling::input'); }
    get customSearchBtn() { return $('#wb-srch-sub'); }
    get sectionClass() { return $('//div[@id="app-brand"]/div/div/section[1]'); }
    get gcToolsSection() { return $('#gctoolsSection'); }
    get wbGCTools() { return $('#wb-gctools'); }
    get wbLang() { return $('#wb-lng'); }
    get searchAction() { return $('//section[@id="wb-srch"]/h2/following-sibling::form'); }
    get toolsSM() { return $('#tools-sm'); }
    get placeholderMenu() { return $('//nav[@id="wb-sm"]/div/div/ul'); }

    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang language of the sub page (e.g. en, fr)
    */

    //Return the various test pages
    open(theme, lang, classifier = '') {
        return super.open(theme, `${theme}-top${classifier ? '-' : ''}${classifier}-${lang}.html`);
    }
}

module.exports = new TopPage();
