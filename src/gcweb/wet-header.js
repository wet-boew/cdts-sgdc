if (typeof wet == 'undefined') { var wet = {}; }
if (typeof wet.builder == 'undefined') { wet.builder = {}; }

/**
 * @param cdnEnv Used to switch between esdc envrionments and Akamai implementations.
 */
wet.builder.environment = function(cdnEnv) {
    var baseUrl;
    if (cdnEnv === 'esdcqat') {
        baseUrl = 'https://cdn-canada.services.gc.qat/app/cls/WET';
    }
    else if (cdnEnv === 'esdcnonprod') {
        baseUrl = 'https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET';
    }
    else if (cdnEnv === 'esdcprod') {
        baseUrl = 'https://ssl-templates.services.gc.ca/app/cls/WET';
    }
    else if (cdnEnv === 'localhost') {
        baseUrl = '../../../..';
    }
    else if (cdnEnv != null && cdnEnv.startsWith('http')) {
        return cdnEnv; //if starts with http: return as-is
    }
    else {
        baseUrl = 'https://www.canada.ca/etc/designs/canada/cdts';
    }
    return baseUrl + '/gcweb/v4_0_44/';
}
