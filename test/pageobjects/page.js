/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    get wetInitializedMarker() {return $('#wetInitializedMarker'); }
    
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    * @param theme theme of the sub page (e.g. gcweb, gcintranet)
    */
    open(theme, path) {
        const pageUrl = `http://localhost:8080/app/cls/WET/${theme}/${process.env.CDTS_TEST_VERSION_NAME || 'v4_0_40'}/cdts/test/${path}`;

        //---[ No longer simply returning browser.url's Promise.
        //---[ We'll wait for WET to be fully initialized before resolving our Promise        
        return new Promise( (resolve, reject) => {
            browser.url(pageUrl).then(
                async (value) => {
                    try {
                        await (await this.wetInitializedMarker).waitForExist({timeout: 3000});
                    }
                    catch (e) {
                        //If we fail, just issue a warning and proceed
                        console.warn(`WARNING!!!!! : Did not find the marker indicating that WET has finished initialzing, test could fail. (${e})`);
                        //fs.writeFileSync(`./wetwarn-${theme}-${path}`, await (await $('//html')).getHTML());
                        //browser.saveScreenshot(`./wetwarn-${theme}-${path}.png`);
                    }
                    
                    resolve(value);
                },
                (error) => reject(error)
            );
        });
    }
}
