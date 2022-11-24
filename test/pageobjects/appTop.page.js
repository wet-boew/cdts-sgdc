const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AppTopPage extends Page {
    /**
     * define selectors using getter methods
     */
    get settingsBtn() { return $('ul.app-list-account li:nth-child(1) a') }
    get signinBtn() { return $('ul.app-list-account li:nth-child(2) a') }
    get signOutBtn() { return $('ul.app-list-account li:nth-child(1) a') }
    get signOffBtnIntranet() { return $('a.btn-signoff') }
    get cdtsBreadCrumb() { return $('ol.breadcrumb li:nth-child(2) abbr'); }
    get langLink() { return $('ul.list-inline li:nth-child(1) a'); }
    get langLinkText() { return $('ul.list-inline li:nth-child(1) span'); }
    get langLinkTextIntranet() { return $('section.lang-no-search ul.gcbarlng a'); }
    get langLinkIntranet() { return $('section.lang-no-search a'); }
    get search() {return $('#wb-srch-q'); }
    get menuLinks() {return $('div.nvbar'); }
    get menuLink1() {return $('div.nvbar ul li:nth-child(1) a'); }
    get menuLink2() {return $('div.nvbar ul li:nth-child(2) a'); }
    get menuLink2Abbr() {return $('div.nvbar ul li:nth-child(2) abbr'); }
    get menuLink3() {return $('div.nvbar ul li:nth-child(3) abbr'); }
    get menuSubLink1() {return $('div.nvbar ul li:nth-child(1) ul li:nth-child(1) a'); }
    get menuSubLink1Abbr() {return $('div.nvbar ul li:nth-child(1) ul li:nth-child(1) abbr'); }
    get menuSubLink2() {return $('div.nvbar ul li:nth-child(3) ul li:nth-child(1) abbr'); }
    get menuSubLink() {return $('div.nvbar ul li:nth-child(1) ul li.slflnk a'); }
    get menuPathSubLink() {return $('div.nvbar ul li:nth-child(3) ul li.slflnk a'); }
    get secureIcon() {return $('i.glyphicon-lock'); }
    get intranetText() { return $('div.app-name span.bold-gc'); }
    get intranetTitle() { return $('div.app-name a'); }
    get intranetTitleAbbr() { return $('div.app-name a span abbr'); }
    get skipSecLink() { return $('//li/a[@href="#wb-sec"]'); }
    get sectionClass() {return $('//div[@id="wb-bnr"]/following-sibling::div/div/div/section'); }
    get appNameH2() {return $('//div[@id="wb-bnr"]/following-sibling::div/div/div/section/h2'); }
    get appNameAnchor() {return $('//div[@id="wb-bnr"]/following-sibling::div/div/div/section/h2/following-sibling::a'); }
    get customSearch() { return $('#customSearch'); }
    get customSearchPlaceholder() { return $('//section[@id="wb-srch"]/h2'); }
    get customSearchLabel() { return $('//section[@id="wb-srch"]/h2/following-sibling::form/div/label'); }
    get customSearchInput() { return $('//section[@id="wb-srch"]/h2/following-sibling::form/div/label/following-sibling::input'); }
    get customSearchHiddenInput() { return $('//section[@id="wb-srch"]/h2/following-sibling::form/div/label/following-sibling::input/following-sibling::input'); }
    get customSearchBtn() { return $('#wb-srch-sub'); }
    get gcAppBannerClass() { return $('//div[@id="gcappbanner"]/div/div'); }
    get gcAppBannerSTTL() { return $('#wb-sttl'); }
    get appNameIntranet() { return $('//div[@id="wb-sttl"]/span'); }
    get appNameAbbrIntranet() { return $('//div[@id="wb-sttl"]/abbr'); }
    get banner() { return $('section.banner-color'); }
    get bannerText() { return $('section.banner-color p.banner-text'); }
    get bannerBoldText() { return $('section.banner-color p.banner-text b'); }
    get bannerLink() { return $('a.banner-link'); }
    get bannerButton() { return $('button.banner-button'); }
    get bannerExternalIcon() { return $('i.banner-external-icon'); }

    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang language of the sub page (e.g. en, fr)
    */

    //Return the various test pages
    open(theme, lang, classifier = '') {
        return super.open(theme, `${theme}-appTop${classifier ? '-' : ''}${classifier}-${lang}.html`);
    }
}

module.exports = new AppTopPage();
