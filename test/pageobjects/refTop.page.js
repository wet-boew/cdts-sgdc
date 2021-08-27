const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class refTopPage extends Page {
    /**
     * define selectors using getter methods
     */

    get analyticsScript() { return $('//script[@id="cdts_AnalyticsId"]'); }

    /**
    * Opens a sub page of the page
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    * @param lang language of the sub page (e.g. en, fr)
    */

    //Return the various test pages
    open(page) {
        return super.open('gcweb', `gcweb-refTop-${page}.html`);
    }
}

module.exports = new refTopPage();
