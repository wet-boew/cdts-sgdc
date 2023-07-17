const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ExitScriptPage extends Page {

    //ExitScript page
    get pageTitle() { return $('main.container h2'); }
    get modalText() { return $('#wb-exitscript-modal div.modal-body p'); }
    get modalYesBtn() { return $('a.btn-default'); }
    get modalCancelBtn() { return $('button.btn-primary'); }
    get yesBtn() { return $('a.btn.btn-default.pull-right'); }
    get extLink() { return $('ul.lst-spcd li:nth-child(1) a'); }
    get extLinkNewWin() { return $('ul.lst-spcd li:nth-child(2) a'); }
    get extLinkSameDomain() { return $('ul.lst-spcd li:nth-child(3) a'); }
    get extLinkExemptDomain() { return $('ul.lst-spcd li:nth-child(4) a'); }
    get extLinkExemptAttribute() { return $('ul.lst-spcd li:nth-child(5) a'); }
    get menuBtn() { return $('button span.glyphicon-chevron-down'); }
    get menuBtnGCIntranet() { return $('ul.menu li:nth-child(1) a'); }
    get menuTrainingLink() { return $('#gc-mnu-jobs li:nth-child(4) a'); }
    get menuNewsLink() { return $('div.nvbar ul#mnuNews li:nth-child(1) a'); }
    get menuNewsLinkFR() { return $('div.nvbar ul#mnuNouvelles li:nth-child(1) a'); }
    get exitScriptModal() { return $('#wb-exitscript-modal'); }

    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang theme of the sub page (e.g. gcweb, gcintranet)
    */

    //Return the various test pages
    open(theme, lang, classifier = '') {
        return super.open(theme, `${theme}-exitscript${classifier ? '-' : ''}${classifier}-${lang}.html`);
    }
}

module.exports = new ExitScriptPage();
