/* eslint no-use-before-define: "off", block-scoped-var: "off", no-undef: "off", eqeqeq: "off", vars-on-top: "off", no-var: "off", prefer-arrow-callback: "off", object-shorthand: "off", no-eq-null: "off", func-names: "off", no-param-reassign: "off", func-name-matching: "off" */
if (typeof wet == 'undefined') { var wet = {}; } //eslint-disable-line
if (typeof wet.utilities == 'undefined') { wet.utilities = {}; } //eslint-disable-line
if (typeof wet.builder == 'undefined') { wet.builder = {}; } //eslint-disable-line

wet.utilities.installBodyReady = function installBodyReady(fn) {
    // (can't use jQuery/WET for this...)
    // check if already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(fn, 1); //trigger call on next cycle
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

/** (Class) Loads a list of HTML nodes into a specified target element.
    If the HTML fragment nodes contains "script" elements, they will be load synchronously.
    This is to allow subsequent "script" to run properly if they depend on previously injected "script" elements.
*/
wet.utilities.FragmentLoader = function FragmentLoader(targetElem, fragmentNodes, doneFunc) {
    this.targetElem = targetElem;
    this.fragmentNodes = fragmentNodes;
    this.doneFunc = doneFunc;
    this.cursorIndex = 0;

    this.nodeScriptClone = function nodeScriptClone(node) {
        const script = document.createElement("script");
        script.text = node.innerHTML;

        let i = -1;
        const attrs = node.attributes
        let attr;
        while (++i < attrs.length) script.setAttribute((attr = attrs[i]).name, attr.value);

        return script;
    };

    this.onScriptLoaded = function onScriptLoaded(/*ev*/) {
        this.run(); //resume processing
    };

    this.run = function run() {
        //---[ While we still have nodes to load...
        while (this.cursorIndex < this.fragmentNodes.length) {
            if (this.fragmentNodes[this.cursorIndex].tagName != null && this.fragmentNodes[this.cursorIndex].tagName.toUpperCase() === 'SCRIPT') {
                //---[ node is a SCRIPT, special treatment (document.importNode(nodes[i], true) does NOT work for scripts)
                const tmpScript = this.nodeScriptClone(this.fragmentNodes[this.cursorIndex]);
                const hasSrc = tmpScript.hasAttribute('src');
                if (hasSrc) tmpScript.onload = this.onScriptLoaded.bind(this); //(else, if there is no src, there'll be no load event so don't attach the handler)
                this.targetElem.appendChild(tmpScript);
                this.cursorIndex++;
                if (hasSrc) return; //GET OUT OF HERE, event handler will call us again to resume when script is finished loading
                //(if there is no event handler, consider the script loaded and just keep going)
            }
            else {
                //---[ node is "normal", just inject
                this.targetElem.appendChild(document.importNode(this.fragmentNodes[this.cursorIndex], true));
                this.cursorIndex++;
            }
        } //of while

        //(if we get here, we're done)
        if (this.doneFunc) this.doneFunc(this);
    }
}

wet.utilities.applyRefTop = function applyRefTop(onCompletedFunc) {
    if (!wet.localConfig.base) wet.localConfig.base = {};
    wet.localConfig.base.cdnEnv = wet.localConfig.cdnEnv;
    wet.localConfig.base.cdtsSetupExcludeCSS = true;
    if (typeof wet.localConfig.base.sriEnabled === 'undefined') wet.localConfig.base.sriEnabled = true;

    const parser = new DOMParser();

    //---[ Insert refTop at the end of HEAD
    const tmpDoc = parser.parseFromString('<html><head>' + wet.builder.refTop(wet.localConfig.base) + '</head></html>', 'text/html');
    const nodes = tmpDoc.head.childNodes; //NOTE: Must use `childNodes` and not `children` for comments to be inserted
    const loader = new wet.utilities.FragmentLoader(document.head, nodes, onCompletedFunc);
    loader.run();
}

wet.utilities.applyRefFooter = function applyRefFooter(onCompletedFunc) {
    if (!wet.localConfig.base) wet.localConfig.base = {};
    wet.localConfig.base.cdnEnv = wet.localConfig.cdnEnv;
    wet.localConfig.base.cdtsSetupExcludeCSS = true;
    if (typeof wet.localConfig.base.sriEnabled === 'undefined') wet.localConfig.base.sriEnabled = true;

    const parser = new DOMParser();

    //---[ Insert refFooter at the end of BODY
    const tmpDoc = parser.parseFromString('<html><body>' + wet.builder.refFooter(wet.localConfig.base) + '</body></html>', 'text/html');
    const nodes = tmpDoc.body.childNodes; //NOTE: Must use `childNodes` and not `children` for comments to be inserted
    const loader = new wet.utilities.FragmentLoader(document.body, nodes, onCompletedFunc);
    loader.run();
}

wet.utilities.applyServerRefTop = function applyServerRefTop(onCompletedFunc) {
    if (!wet.localConfig.base) wet.localConfig.base = {};
    wet.localConfig.base.cdnEnv = wet.localConfig.cdnEnv;
    wet.localConfig.base.cdtsSetupExcludeCSS = true;
    if (typeof wet.localConfig.base.sriEnabled === 'undefined') wet.localConfig.base.sriEnabled = true;

    const parser = new DOMParser();

    //---[ Insert refTop at the end of HEAD
    const tmpDoc = parser.parseFromString('<html><head>' + wet.builder.serverRefTop(wet.localConfig.base) + '</head></html>', 'text/html');
    const nodes = tmpDoc.head.childNodes; //NOTE: Must use `childNodes` and not `children` for comments to be inserted
    const loader = new wet.utilities.FragmentLoader(document.head, nodes, onCompletedFunc);
    loader.run();
}

wet.utilities.applySplashRefTop = function applySplashRefTop(onCompletedFunc) {
    if (!wet.localConfig.base) wet.localConfig.base = {};
    wet.localConfig.base.cdnEnv = wet.localConfig.cdnEnv;
    wet.localConfig.base.cdtsSetupExcludeCSS = true;
    if (typeof wet.localConfig.base.sriEnabled === 'undefined') wet.localConfig.base.sriEnabled = true;

    const parser = new DOMParser();

    //---[ Insert refTop at the end of HEAD
    const tmpDoc = parser.parseFromString('<html><head>' + wet.builder.splashTop(wet.localConfig.base) + '</head></html>', 'text/html');
    const nodes = tmpDoc.head.childNodes; //NOTE: Must use `childNodes` and not `children` for comments to be inserted
    const loader = new wet.utilities.FragmentLoader(document.head, nodes, onCompletedFunc);
    loader.run();
}

wet.utilities.applyTop = function applyTop() {
    if (!wet.localConfig.top) wet.localConfig.top = {};

    const defTop = document.getElementById(wet.localConfig.top.elementId || "cdts-def-top");

    if (defTop) {
        wet.localConfig.top.cdnEnv = wet.localConfig.cdnEnv;
        defTop.outerHTML = wet.builder.top(wet.localConfig.top);
    }
}

wet.utilities.applyAppTop = function applyAppTop() {
    if (!wet.localConfig.top) wet.localConfig.top = {};

    const defTop = document.getElementById(wet.localConfig.top.elementId || "cdts-def-top");

    if (defTop) {
        wet.localConfig.top.cdnEnv = wet.localConfig.cdnEnv;
        defTop.outerHTML = wet.builder.appTop(wet.localConfig.top);
    }
}

wet.utilities.applyServerTop = function applyServerTop() {
    if (!wet.localConfig.top) wet.localConfig.top = {};

    const defTop = document.getElementById(wet.localConfig.top.elementId || "cdts-def-top");

    if (defTop) {
        wet.localConfig.top.cdnEnv = wet.localConfig.cdnEnv;
        defTop.outerHTML = wet.builder.serverTop(wet.localConfig.top);
    }
}

wet.utilities.applyPreFooter = function applyPreFooter() {
    if (!wet.localConfig.preFooter) wet.localConfig.preFooter = {};

    const defPreFooter = document.getElementById(wet.localConfig.preFooter.elementId || "cdts-def-preFooter");

    if (defPreFooter) {
        wet.localConfig.preFooter.cdnEnv = wet.localConfig.cdnEnv;
        defPreFooter.outerHTML = wet.builder.preFooter(wet.localConfig.preFooter);
    }
}

wet.utilities.applyFooter = function applyFooter() {
    if (!wet.localConfig.footer) wet.localConfig.footer = {};

    const defFooter = document.getElementById(wet.localConfig.footer.elementId || "cdts-def-footer");

    if (defFooter) {
        wet.localConfig.footer.cdnEnv = wet.localConfig.cdnEnv;
        defFooter.outerHTML = wet.builder.footer(wet.localConfig.footer);
    }
}

wet.utilities.applyAppFooter = function applyAppFooter() {
    if (!wet.localConfig.footer) wet.localConfig.footer = {};

    const defFooter = document.getElementById(wet.localConfig.footer.elementId || "cdts-def-footer");

    if (defFooter) {
        wet.localConfig.footer.cdnEnv = wet.localConfig.cdnEnv;
        defFooter.outerHTML = wet.builder.appFooter(wet.localConfig.footer);
    }
}

wet.utilities.applyServerBottom = function applyServerBottom() {
    if (!wet.localConfig.footer) wet.localConfig.footer = {};

    const defFooter = document.getElementById(wet.localConfig.footer.elementId || "cdts-def-footer");

    if (defFooter) {
        wet.localConfig.footer.cdnEnv = wet.localConfig.cdnEnv;
        defFooter.outerHTML = wet.builder.serverBottom(wet.localConfig.footer);
    }
}

wet.utilities.applySecmenu = function applySecmenu() {
    if (!wet.localConfig.secmenu) wet.localConfig.secmenu = {};

    //(because the element id is not configurable, adding an "enabled" property to allow client web page to turn this function off)
    const enabled = wet.localConfig.secmenu.enabled || true;
    if ((!enabled) || (!wet.localConfig.secmenu.sections)) {
        return;
    }

    const defSecmenu = document.getElementById("wb-sec"); //WET (and our own css) requires id to be "wb-sec"

    if (defSecmenu) {
        wet.localConfig.secmenu.cdnEnv = wet.localConfig.cdnEnv;
        defSecmenu.innerHTML = wet.builder.secmenu(wet.localConfig.secmenu); //NOTE: unlike with the others, we're setting innerHTML!
    }
}

wet.utilities.applySplash = function applySplash() {
    if (!wet.localConfig.splash) wet.localConfig.splash = {};

    const defContent = document.getElementById(wet.localConfig.splash.elementId || "cdts-splash-content");

    if (defContent) {
        wet.localConfig.splash.cdnEnv = wet.localConfig.cdnEnv;
        defContent.outerHTML = wet.builder.splash(wet.localConfig.splash);
    }
}

wet.utilities.onRefFooterCompleted = function onRefFooterCompleted() {
    if (wet.localConfig.cdtsCompletionListeners) {
        for (let i = 0; i < wet.localConfig.cdtsCompletionListeners.length; i++) {
            wet.localConfig.cdtsCompletionListeners[i]();
        }
    }

    if (typeof wet.localConfig.onCDTSPageFinalized === 'function') {
        wet.localConfig.onCDTSPageFinalized();
    }
    else if (Array.isArray(wet.localConfig.onCDTSPageFinalized)) {
        wet.builder.appendExtraHTML(wet.localConfig.onCDTSPageFinalized);
    }
}

wet.utilities.isCDTSSetupMode = function isCDTSSetupMode() {
    return (typeof wet.localConfig !== 'undefined');
}

wet.utilities.addSetupCompletitionListener = function addSetupCompletitionListener(f) {
    if (wet.localConfig) {
        if (!wet.localConfig.cdtsCompletionListeners) wet.localConfig.cdtsCompletionListeners = [];
        wet.localConfig.cdtsCompletionListeners.push(f);
    }
}

/**
 * Parses the specified HTML and appends it at the end of the page.
 *
 * Because this function does NOT use document.write to insert the HTML, the
 * <script> elements receive special treatment to ensure they are loaded in order.
 *
 * @param html (string, array of string) HTML text to be appended.
 * @param onCompletedFunc (optional, function) Function to call upon completition.
*/
wet.builder.appendExtraHTML = function appendExtraHTML(html, onCompletedFunc) {

    let content = html;
    if (Array.isArray(html)) {
        content = html.join(' ');
    }

    const parser = new DOMParser();

    //---[ Insert at the end of BODY
    const tmpDoc = parser.parseFromString('<html><body>' + content + '</body></html>', 'text/html');
    const nodes = tmpDoc.body.childNodes; //NOTE: Must use `childNodes` and not `children` for comments to be inserted
    const loader = new wet.utilities.FragmentLoader(document.body, nodes, onCompletedFunc);
    loader.run();
}


/** Initialize CDTS on page.
 *
 * ## Descrption
 *
 * This function should be called from the <head> section of an HTML page.
 * This function will invoke `wet.builder.refTop` and `wet.builder.refFooter` at appropriate times
 * to inject needed HTML fragments. It will then check
 * the page for <div>s with specific id to inject CDTS sections (e.g. top, refFooter, footer).
 *
 * @param config          The CDTS configuration object. See below for details
 *
 * ## CDTS Configuration Object
 *
 * The config parameter should be an object with at least the properties `cdnEnv`.
 * The presence of additional properties will dictate which CDTS sections should be automatically
 * injected based on the presence of a specific <div> element. Example/format:
 * {
 *     cdnEnv: 'esdcprod',  //(mandatory) CDTS environment, see wet-header.js for possible values
 *     mode: 'common', //(optional) Template mode, one of 'common', 'app', 'server' or 'splash' (alternatively can call appSetup, serverSetup or splashSetup directly)
 *     base: { //(optional)
 *        ... //combined wet.builder.refTop and wet.builder.refFooter parameters
 *     },
 *     top: { //(optional)
 *        ... //wet.builder.[top|appTop|serverTop] parameters
 *         elementId: 'some-div-id', //(optional) id of the element to replace, defaults to 'cdts-def-top'
 *     },
 *     preFooter: { //(optional)
 *        ... //wet.builder.preFooter parameters
 *         elementId: 'some-div-id', //(optional) id of the element to replace, defaults to 'cdts-def-preFooter'
 *     },
 *     footer: { //(optional)
 *        ... //wet.builder.[footer|appFooter|serverBottom] parameters
 *         elementId: 'some-div-id', //(optional) id of the element to replace, defaults to 'cdts-def-footer'
 *     },
 *     secmenu: { //(optional) (unlike others, the elementId for secmenu is not configurable and must be "wb-sec")
 *        ... //wet.builder.secmenu parameters
 *     },
 *     splash: { //(optional, splashSetup function only)
 *        ... //wet.builder.splash parameters
 *         elementId: 'some-div-id', //(optional) id of the element to replace, defaults to 'cdts-splash-content'
 *     },
 * }
 *
*/
wet.builder.setup = function cdtsSetup(config) {

    function onBodyReady() {
        //page and its "divs" now exist: apply rest of CDTS!
        wet.utilities.applyTop();
        wet.utilities.applyPreFooter();
        wet.utilities.applyFooter();
        wet.utilities.applySecmenu();

        wet.utilities.applyRefFooter(wet.utilities.onRefFooterCompleted);
    }

    //---[ Initialize CDTS on page...
    wet.localConfig = config || {};
    if (!wet.localConfig.cdnEnv) {
        console.warn('CDTS environment "cdnEnv" property not found in config, default will be used');
        wet.localConfig.cdnEnv = '';
    }
    if (wet.localConfig.mode) {
        /*eslint-disable indent */
        switch (wet.localConfig.mode) {
            case 'app':
                wet.builder.appSetup(wet.localConfig);
                return;
            case 'server':
                wet.builder.serverSetup(wet.localConfig);
                return;
            case 'splash':
                wet.builder.splashSetup(wet.localConfig);
                return;
            default:
                //(else continue with "common" setup)
                break;
        }
        /*eslint-enable indent */
    }

    wet.utilities.installBodyReady(onBodyReady);
    wet.utilities.applyRefTop();
};

/** Initialize CDTS on page for Application template (see wet.builder.top for details) */
wet.builder.appSetup = function cdtsAppSetup(config) {

    function onBodyReady() {
        //page and its "divs" now exist: apply rest of CDTS!
        wet.utilities.applyAppTop();
        wet.utilities.applyPreFooter();
        wet.utilities.applyAppFooter();
        wet.utilities.applySecmenu();

        wet.utilities.applyRefFooter(wet.utilities.onRefFooterCompleted);
    }

    //---[ Initialize CDTS on page...
    wet.localConfig = config || {};
    if (!wet.localConfig.cdnEnv) {
        console.warn('CDTS environment "cdnEnv" property not found in config, default will be used');
        wet.localConfig.cdnEnv = '';
    }
    //---[ Set "isApplication = true" in base config (for refTop and refFooter)
    if (!wet.localConfig.base) wet.localConfig.base = {};
    wet.localConfig.base.isApplication = true;

    wet.utilities.installBodyReady(onBodyReady);
    wet.utilities.applyRefTop();
};

/** Initialize CDTS on page for "server" template (see wet.builder.top for details) */
wet.builder.serverSetup = function cdtsServerSetup(config) {

    function onBodyReady() {
        //page and its "divs" now exist: apply rest of CDTS!
        wet.utilities.applyServerTop();
        wet.utilities.applyServerBottom();

        wet.utilities.applyRefFooter(wet.utilities.onRefFooterCompleted);
    }

    //---[ Initialize CDTS on page...
    wet.localConfig = config || {};
    if (!wet.localConfig.cdnEnv) {
        console.warn('CDTS environment "cdnEnv" property not found in config, default will be used');
        wet.localConfig.cdnEnv = '';
    }

    wet.utilities.installBodyReady(onBodyReady);
    wet.utilities.applyServerRefTop();
};

/** Initialize CDTS on page for Splash template (see wet.builder.top for details) */
wet.builder.splashSetup = function cdtsSplashSetup(config) {

    function onBodyReady() {
        //page and its "divs" now exist: apply rest of CDTS!
        wet.utilities.applySplash();

        wet.utilities.onRefFooterCompleted();
    }

    //---[ Initialize CDTS on page...
    wet.localConfig = config || {};
    if (!wet.localConfig.cdnEnv) {
        console.warn('CDTS environment "cdnEnv" property not found in config, default will be used');
        wet.localConfig.cdnEnv = '';
    }

    wet.utilities.installBodyReady(onBodyReady);
    wet.utilities.applySplashRefTop();
};
