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

/** Loads a HTML fragment into a specified target element.
    If the fragment contains "script" elements, they will be load synchronously.
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

    this.onScriptLoaded = function onScriptLoaded(ev) {
        console.log('SCRIPT LOADED!', ev.target.src, this.cursorIndex);
        this.run(); //resume processing
    };

    this.run = function run() {
        while (this.cursorIndex < this.fragmentNodes.length) {
            if (this.fragmentNodes[this.cursorIndex].tagName != null && this.fragmentNodes[this.cursorIndex].tagName.toUpperCase() === 'SCRIPT') {
                //node is a SCRIPT, special treatment (document.importNode(nodes[i], true) does NOT work for scripts)
                const tmpScript = this.nodeScriptClone(this.fragmentNodes[this.cursorIndex]);
                const hasSrc = tmpScript.hasAttribute('src');
                if (hasSrc) tmpScript.onload = this.onScriptLoaded.bind(this); //if there is no src, there'll be no load event
                this.targetElem.appendChild(tmpScript);
                this.cursorIndex++;
                if (hasSrc) return; //GET OUT HERE, event handler will call us again to resume
                //(if there is no event handler, consider the script loaded and just keep going)
            }
            else {
                //node is "normal", just inject
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
    if (!enabled) {
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
 *     splash: { //(optional)
 *        ... //wet.builder.splash parameters
 *         elementId: 'some-div-id', //(optional) id of the element to replace, defaults to 'cdts-splash-content'
 *     },
 * //TODO: Complete
 * }
 *
*/
wet.builder.setup = function cdtsSetup(config) {

    function onRefFooterCompleted() {
        console.log('INIT COMPLETED!!! (refFooter completed)');
    }

    function onBodyReady() {
        console.log('onBodyReady!');
        //page and its "divs" now exist: apply rest of CDTS!
        wet.utilities.applyTop();
        wet.utilities.applyPreFooter();
        wet.utilities.applyFooter();
        wet.utilities.applySecmenu();

        wet.utilities.applyRefFooter(onRefFooterCompleted);
    }

    //---[ Initialize CDTS on page...
    wet.localConfig = config || {};
    if (!wet.localConfig.cdnEnv) {
        console.warn('CDTS environment "cdnEnv" property not found in config, default will be used');
        wet.localConfig.cdnEnv = '';
    }

    wet.utilities.installBodyReady(onBodyReady);
    wet.utilities.applyRefTop();
};

/** Initialize CDTS on page for Application template (see wet.builder.top for details) */
wet.builder.appSetup = function cdtsAppSetup(config) {

    function onRefFooterCompleted() {
        console.log('APP INIT COMPLETED!!! (refFooter completed)');
    }

    function onBodyReady() {
        console.log('APP onBodyReady!');
        //page and its "divs" now exist: apply rest of CDTS!
        wet.utilities.applyAppTop();
        wet.utilities.applyPreFooter();
        wet.utilities.applyAppFooter();
        wet.utilities.applySecmenu();

        wet.utilities.applyRefFooter(onRefFooterCompleted);
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

    function onRefFooterCompleted() {
        console.log('SERVER INIT COMPLETED!!! (refFooter completed)');
    }

    function onBodyReady() {
        console.log('SERVER onBodyReady!');
        //page and its "divs" now exist: apply rest of CDTS!
        wet.utilities.applyServerTop();
        wet.utilities.applyServerBottom();

        wet.utilities.applyRefFooter(onRefFooterCompleted);
    }

    //---[ Initialize CDTS on page...
    wet.localConfig = config || {};
    if (!wet.localConfig.cdnEnv) {
        console.warn('CDTS environment "cdnEnv" property not found in config, default will be used');
        wet.localConfig.cdnEnv = '';
    }
    //---[ Set "isApplication = true" in base config (for refTop and refFooter)
    if (!wet.localConfig.base) wet.localConfig.base = {};

    wet.utilities.installBodyReady(onBodyReady);
    wet.utilities.applyServerRefTop();
};

/** Initialize CDTS on page for Splash template (see wet.builder.top for details) */
wet.builder.splashSetup = function cdtsSplashSetup(config) {

    function onBodyReady() {
        console.log('SPLASH onBodyReady!');
        //page and its "divs" now exist: apply rest of CDTS!
        wet.utilities.applySplash();
    }

    //---[ Initialize CDTS on page...
    wet.localConfig = config || {};
    if (!wet.localConfig.cdnEnv) {
        console.warn('CDTS environment "cdnEnv" property not found in config, default will be used');
        wet.localConfig.cdnEnv = '';
    }
    //---[ Set "isApplication = true" in base config (for refTop and refFooter)
    if (!wet.localConfig.base) wet.localConfig.base = {};

    wet.utilities.installBodyReady(onBodyReady);
    wet.utilities.applySplashRefTop();
};
