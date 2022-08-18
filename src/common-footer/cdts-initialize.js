/* eslint no-undef: off */

(function __cdtsInitialize() {
    if (typeof document === 'undefined') return;
    const scriptElem = document.querySelector('script[data-cdts-setup]');

    if (scriptElem && scriptElem.dataset.cdtsSetup) {
        wet.builder.setup(JSON.parse(scriptElem.dataset.cdtsSetup));
    }
}());
