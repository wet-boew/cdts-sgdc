if (typeof wet == 'undefined') { var wet = {}; }
if (typeof wet.builder == 'undefined') { wet.builder = {}; }

/**
 * @param cdnEnv Used to switch URL host name depending on cdnEnv value.
 */
wet.builder.environmentHost = function(cdnEnv) {
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
    else if (cdnEnv != null && cdnEnv.startsWith('http')) {
        return cdnEnv; //if starts with https: return as-is
    }
    else {
        return 'https://ssl-templates.services.gc.ca/';
    }
}

/**
 * @param cdnEnv Used to switch between esdc envrionments and Akamai implementations.
 */
wet.builder.environment = function(cdnEnv) {
    return wet.builder.environmentHost(cdnEnv) + ((cdnEnv != null && cdnEnv.startsWith('http'))? '': 'app/cls/WET/gcintranet/v4_0_44/');
}

