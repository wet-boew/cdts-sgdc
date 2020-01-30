var getUrlParts = function( url ) {
		var a = document.createElement( "a" );
		a.href = url;
		return {
			href: a.href,
			absolute: a.href,
			host: a.host,
			hostname: a.hostname,
			port: a.port,
			pathname: a.pathname.replace( /^([^\/])/, "/$1" ), // Prefix pathname with a slash in browsers that don't natively do it (i.e. all versions of IE and possibly early versions of Edge). See pull request #8110.
			protocol: a.protocol,
			hash: a.hash,
			search: a.search,

			// A collection of the parameters of the query string part of the URL.
			params: ( function() {
				var results = {},
					queryString = encodeURI( decodeURI( a.search.replace( /^\?/, "" ) ) ).replace( /'/g, "%27" ).split( "&" ),
					len = queryString.length,
					key, strings, i;

				for ( i = 0; i !== len; i += 1 ) {
					if ( ( key = queryString[ i ] ) !== null ) {
						strings = key.split( "=" );
						results[ strings[ 0 ] ] = strings[ 1 ];
					}
				}
				return results;
			}() )
        };
        


	/**
	 * @variable $src
	 * @return {jQuery Element} of wb script element
	 */
	$src = $( "script[src*='wet-boew.js'],script[src*='wet-boew.min.js'],script[data-wb-core]" )
		.last(),


        paths = ( function( ele ) {
            var paths = {};
    
            paths.home = ele.prop( "src" )
                    .split( "?" )[ 0 ].split( "/" )
                    .slice( 0, -1 )
                    .join( "/" );
            paths.asset = paths.home + "/../assets";
            paths.template = paths.home + "/assets/templates";
            paths.dep = paths.home + "/deps";
            paths.js = paths.home;
            paths.css = paths.home.substring( 0, paths.home.length - 2 ) + "css";
            paths.mode = ele.prop( "src" ).indexOf( ".min" ) < 0 ? "" : ".min";
    
            if ( ele[ 0 ].hasAttribute( "data-wb-core" ) ) {
                $.extend( paths, {
                    home: ele.attr( "data-home" ),
                    asset: ele.attr( "data-asset" ),
                    template: ele.attr( "data-template" ),
                    dep: ele.attr( "data-dep" ),
                    js: ele.attr( "data-js" ),
                    css: ele.attr( "data-css" ),
                    mode: ele.attr( "data-mode" )
                } );
            }
