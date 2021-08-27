/// Accessibility Testing
///
/// Uses Axe library
/// References:
///    https://github.com/dequelabs/axe-core/blob/develop/doc/API.md
///    https://dequeuniversity.com/rules/axe/4.2

const axeSource = require('axe-core').source;

/// (Must be executed in webdriver.io context - browser object must exist in global scope.)
/// Performs accessibility testing on the specified URL.  If url is undefined/null, will run tests on currently opened page.
module.exports = async function runAccessibilityTest(url) {
    if (url) {
        await browser.url(url);
    }

    //console.log(`Running accessibility tests for url [${await browser.getUrl()}]...`);

    //---[ Inject the AXE script
    await browser.execute(axeSource);
    
    //(If we have sporadic "axe is not defined errors" when doing the run below... we could try waiting until it's available...)
    /*await browser.waitUntil(async () => {
        return await browser.execute(() => {
            return (typeof(axe) !== 'undefined');
        }) === true;
    }, {
        timeout: 5000, 
        timeoutMsg: 'Timeout (5s) reached waiting for axe to be installed on current browser web page'
    });*/

    let axeOptions = {runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] }};

    //---[ Run axe in browser and get results/error
    let results = await browser.executeAsync((options, done) => {
        axe.run(options, (err, results) => {
            if (err) throw err; //done(err);
            done(results);
        });
    }, axeOptions);

    //---[ Fail test if violations were detected
    if (results.violations && results.violations.length > 0) {
        console.error(`ACCESSIBILITY TEST for [${results.url}]: ${results.violations.length} rule violations detected (${results.passes.length} passes OK; ${results.inapplicable.length} innaplicable)`);
        for (let i=0; i<results.violations.length; i++) {
            console.error('> ', results.violations[i]);//, 'nodes:', results.violations[i].nodes);
        }
        throw new Error('Accessibility test failed.');
    }
}
