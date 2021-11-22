const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AppFooterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get footer() { return $('nav.wb-navcurr'); }
    get footerLink() { return $('#wb-info nav.wb-navcurr li:nth-child(1) a'); }
    get contactLink() { return $('#wb-info nav.ftr-urlt-lnk li:nth-child(1) a'); }
    get termsLink() { return $('#wb-info nav.ftr-urlt-lnk li:nth-child(2) a'); }
    get privacyLink() { return $('#wb-info nav.ftr-urlt-lnk li:nth-child(3) a'); }
    get footerLinkNewWin() { return $('//footer[@id="wb-info"]/div/nav/ul/li[3]/a'); }
    get footerLinkNewWinIntranet() { return $('//footer[@id="wb-info"]/nav/div/section/ul/li[3]/a'); }
    get footerLinkNewWinSpan() { return $('//footer[@id="wb-info"]/div/nav/ul/li[3]/a/span'); }
    get footerLinkNewWinSpanIntranet() { return $('//footer[@id="wb-info"]/nav/div/section/ul/li[3]/a'); }
    get footerSectionName() { return $('//section[@class="col-md-3 col-sm-6 col-lg-3"]/h3'); }
    get customFooterLinkClass() { return $('//section[@class="col-md-3 col-sm-6 col-lg-3"]'); }
    get customFooterLinkText() { return $('//footer[@id="wb-info"]/nav/h2/following-sibling::div/section/h3'); }
    get customFooterLink() { return $('//footer[@id="wb-info"]/nav/h2/following-sibling::div/section/h3/following-sibling::ul/li/a'); }
    get customFooterLinkTextSubTheme() { return $('//footer[@id="wb-info"]/nav/h2/following-sibling::div/section[4]/h3'); }
    get cssScriptESDC() { return $('//head/link[contains(@href, "/cdts/esdc.css")]'); }
    get cssScriptECCC() { return $('//head/link[contains(@href, "/cdts/eccc.css")]'); }
    
    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang language of the sub page (e.g. en, fr)
    */
 
    //Return the various test pages
    open(theme, lang, classifier = '') {
        return super.open(theme, `${theme}-appFooter${classifier ? '-' : ''}${classifier}-${lang}.html`);
    }
 }
 
 module.exports = new AppFooterPage();