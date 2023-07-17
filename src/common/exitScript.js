/* eslint no-use-before-define: "off", block-scoped-var: "off", no-undef: "off", eqeqeq: "off", vars-on-top: "off", no-var: "off", prefer-arrow-callback: "off", object-shorthand: "off", no-eq-null: "off", func-names: "off", no-param-reassign: "off" */
if (typeof wet == 'undefined') { var wet = {}; } //eslint-disable-line
if (typeof wet.utilities == 'undefined') { wet.utilities = {}; } //eslint-disable-line

wet.utilities.wetExitScriptScanLinks = function(displayModal, exitUrl, excludedDomains, exitMsg, yesMsg, cancelMsg, msgBoxHeader, targetWarning, displayModalForNewWindow) {
    var links = document.getElementsByTagName('a');
    wet.utilities.wetExitScript(displayModal, exitUrl, excludedDomains, exitMsg, yesMsg, cancelMsg, msgBoxHeader, targetWarning, displayModalForNewWindow, links);
}

wet.utilities.wetExitScript = function (displayModal, exitUrl, excludedDomains, exitMsg, yesMsg, cancelMsg, msgBoxHeader, targetWarning, displayModalForNewWindow, links) {
    excludedDomains = excludedDomains.toLowerCase().split(",").map(function trimDomain(elem) {
        return elem.trim();
    });

    //WET adds a default message if targetWarning is the string 'undefined'. Overriding to set an empty string.
    if (targetWarning === "undefined") targetWarning = " ";

    var linkObj = { "exitMsg": exitMsg, "cancelBtn": cancelMsg, "yesBtn": yesMsg, "msgboxHeader": msgBoxHeader, "targetWarning": targetWarning };

    //TODO: This should be updated to have the soy files return if the value is the string 'undefined'
    //rather than finding and replacing the "undefined" in quotes
    //var myJSON = JSON.stringify(linkObj, replacer);
    var myJSON = JSON.stringify(linkObj, function replacer(key, value) {
        if (value === "undefined") {
            return undefined; //eslint-disable-line
        }
        return value;
    });

    if (links != null) {
        for (var i = 0; i < links.length; i++) {
            if (links[i].hasAttribute('href') && links[i].host !== window.location.host && excludedDomains.indexOf(links[i].host.toLowerCase().trim()) < 0 && !links[i].hasAttribute('cdts-exitscript-disabled')) {
                if (exitUrl !== "undefined") {
                    links[i].href = encodeURI(exitUrl + (exitUrl.indexOf('?') < 0 ? "?" : "&") + "targetUrl=") + encodeURIComponent(links[i].href);
                }
                if (displayModal.toLowerCase() === "true") {
                    if (!(links[i].target === "_blank" && displayModalForNewWindow.toLowerCase() === "false")) {
                        links[i].classList.add('wb-exitscript');
                        //Empty object string will just have twe characters (opening and closing curly brackets)
                        //TODO: Needs to be updated!
                        if (myJSON.length > 2) {
                            links[i].setAttribute("data-wb-exitscript", '{"i18n": ' + myJSON + '}');
                        }
                    }
                }
            }
        }
    }
};

wet.utilities.cdtsApplyExitScriptToLinks = function (displayModal, exitUrl, excludedDomains, exitMsg, yesMsg, cancelMsg, msgBoxHeader, targetWarning, displayModalForNewWindow) {
    $(document).on("wb-ready.wb", function (event) { //eslint-disable-line
        wet.utilities.wetExitScriptScanLinks(displayModal, exitUrl, excludedDomains, exitMsg, yesMsg, cancelMsg, msgBoxHeader, targetWarning, displayModalForNewWindow);
        var placeholderLink = document.getElementById("cdts-exitscript-placeholder-link");
        if (placeholderLink) placeholderLink.parentElement.removeChild(placeholderLink);
    });
};
