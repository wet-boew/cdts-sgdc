const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FooterPage extends Page {
    /**
     * define selectors using getter methods
     */

    get footer() { return $('#transactFooter'); }
    get contextualFooter() { return $('div.gc-contextual'); }
    get contextualFooterLinks() { return $('div.gc-contextual ul'); }
    get footerContactLink() { return $('#wb-info nav li:nth-child(1) a'); }
    get termsLink() { return $('#wb-info nav li:nth-child(1) a'); }
    get privacyLink() { return $('#wb-info nav li:nth-child(2) a'); }
    get footerLink2() { return $('(//footer[@id="wb-info"]/div/div/nav/ul/li/a)[2]'); }
    get footerLink3() { return $('(//footer[@id="wb-info"]/div/div/nav/ul/li/a)[3]'); }
    get footerLink4() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[4]'); }
    get footerLink5() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[5]'); }
    get footerLink6() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[6]'); }
    get footerLink7() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[7]'); }
    get footerLink8() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[8]'); }
    get footerLink9() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[9]'); }
    get footerLink10() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[10]'); }
    get footerLink11() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[11]'); }
    get footerLink12() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[12]'); }
    get footerLink13() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[13]'); }
    get footerLink14() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[14]'); }
    get footerLink15() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[15]'); }
    get footerLink16() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[16]'); }
    get footerLink17() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[17]'); }
    get footerLink18() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[18]'); }
    get footerLink19() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[19]'); }
    get footerLink20() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[20]'); }
    get footerLink21() { return $('(//footer[@id="wb-info"]/div/div/nav/descendant::li/a)[21]'); }
    get footerBrandLink1() { return $('div.gc-sub-footer li:nth-child(1) a'); }
    get footerBrandLink2() { return $('div.gc-sub-footer li:nth-child(2) a'); }
    get footerBrandLink3() { return $('div.gc-sub-footer li:nth-child(3) a'); }
    get footerBrandLink4() { return $('div.gc-sub-footer li:nth-child(4) a'); }
    get footerBrandLink5() { return $('div.gc-sub-footer li:nth-child(5) a'); }
    get footerCorporateLinks() { return $('div.gc-sub-footer ul'); }
    get footerFeatures() { return $('aside.gc-nttvs h2'); }
    get footerLinkIntranet2() { return $('(//footer[@id="wb-info"]/nav/h2/following-sibling::ul/li/a)[2]'); }
    get footerLinkIntranet3() { return $('(//footer[@id="wb-info"]/nav/h2/following-sibling::ul/li/a)[3]'); }
    get footerLinkIntranet4() { return $('(//footer[@id="wb-info"]/nav/h2/following-sibling::ul/li/a)[4]'); }


    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang language of the sub page (e.g. en, fr)
    */

    //Return the various test pages
    open(theme, lang, classifier = '') {
        return super.open(theme, `${theme}-footer${classifier ? '-' : ''}${classifier}-${lang}.html`);
    }
}

module.exports = new FooterPage();
