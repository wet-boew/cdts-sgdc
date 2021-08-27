const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FooterPage extends Page {
    /**
     * define selectors using getter methods
     */

    get footer() { return $('#transactFooter'); }
    get footerContactLink() { return $('#wb-info nav.wb-navcurr li:nth-child(1) a'); }
    get contactLink() { return $('#wb-info nav.ftr-urlt-lnk li:nth-child(1) a'); }
    get termsLink() { return $('#wb-info nav.ftr-urlt-lnk li:nth-child(2) a'); }
    get privacyLink() { return $('#wb-info nav.ftr-urlt-lnk li:nth-child(3) a'); }
    get footerLink2() { return $('(//footer[@id="wb-info"]/div/nav/ul/li/a)[2]'); }
    get footerLink3() { return $('(//footer[@id="wb-info"]/div/nav/ul/li/a)[3]'); }
    get footerLink4() { return $('(//footer[@id="wb-info"]/div/nav/ul/li/a)[4]'); }
    get footerLink5() { return $('(//footer[@id="wb-info"]/div/nav/ul/li/a)[5]'); }
    get footerLink6() { return $('(//footer[@id="wb-info"]/div/nav/ul/li/a)[6]'); }
    get footerLink7() { return $('(//footer[@id="wb-info"]/div/nav/ul/li/a)[7]'); }
    get footerLink8() { return $('(//footer[@id="wb-info"]/div/nav/ul/li/a)[8]'); }
    get footerLink9() { return $('(//footer[@id="wb-info"]/div/nav/ul/li/a)[9]'); }
    get footerBrandLink1() { return $('(//h2[@id="aboutSite"]/following-sibling::ul/li/a)[1]'); }
    get footerBrandLink2() { return $('(//h2[@id="aboutSite"]/following-sibling::ul/li/a)[2]'); }
    get footerBrandLink3() { return $('(//h2[@id="aboutSite"]/following-sibling::ul/li/a)[3]'); }
    get footerBrandLink4() { return $('(//h2[@id="aboutSite"]/following-sibling::ul/li/a)[4]'); }
    get footerBrandLink5() { return $('(//h2[@id="aboutSite"]/following-sibling::ul/li/a)[5]'); }
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
