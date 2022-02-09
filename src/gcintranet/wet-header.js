/* eslint no-use-before-define: "off", block-scoped-var: "off", no-undef: "off", eqeqeq: "off", vars-on-top: "off", no-var: "off", prefer-arrow-callback: "off", object-shorthand: "off", no-eq-null: "off", func-name-matching: "off" */
if (typeof wet == 'undefined') { var wet = {}; } //eslint-disable-line
if (typeof wet.builder == 'undefined') { wet.builder = {}; } //eslint-disable-line

/**
 * @param cdnEnv Used to switch URL host name depending on cdnEnv value.
 */
wet.builder.environmentHost = function cdtsWetBuilderEnvironmentHost(cdnEnv) {
    if (cdnEnv === 'qat') {
        return 'https://cdn-canada.services.gc.qat/';
    }
    else if (cdnEnv === 'nonprod') {
        return 'https://s2tst-cdn-canada.sade-edap.prv/';
    }
    else if (cdnEnv === 'esdcprod') {
        return 'https://templates.service.gc.ca/';
    }
    else if (cdnEnv === 'localhost') {
        return '/';
    }
    else if (cdnEnv != null && (cdnEnv.substr(0, 4) === 'http')) {
        return cdnEnv; //if starts with http: return as-is
    }
    //else
    return 'https://ssl-templates.services.gc.ca/';
}

/**
 * @param cdnEnv Used to switch between esdc envrionments and Akamai implementations.
 */
wet.builder.environment = function cdtsWetBuilderEnvironment(cdnEnv) {
    return wet.builder.environmentHost(cdnEnv) + ((cdnEnv != null && (cdnEnv.substr(0, 4) === 'http')) ? '' : 'app/cls/WET/gcintranet/v4_0_44/');
}

