
/**
 * @title GCDS loader
 * @overview Script to load GCDS which was tested for co-existance in GCWeb
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( wnd, doc, escape ) {
"use strict";


//
// Configuration updated during the build process with info in package.json
//
const gcdsVersion = "0.36.0", // pkg.peerDependencies[ "@cdssnc/gcds-components" ]
	gcdsSriJs = "sha384-dyE8IpLmFMtdU/ftC4nFeuLMvr2vMI8s1UY2OXl9pbzizebJeCfWp9iLhiVXdXtA", // pkg[ "io.github.wet-boew" ].gcdsSriJs
	gcdsSriCss = "sha384-0CRuUE9X0B5RfCdDx1BDT6Ru1MajB7Ngy0CmoORlBF+ey/W8T75AKwLehkl+QaGR"; // pkg[ "io.github.wet-boew" ].gcdsSriCss


//
// General configuration used to detect and load GCSD
//
const gcdsBasePath = "https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@",
	gcdsSuffixJs = "/dist/gcds/gcds.esm.js",
	gcdsSuffixCss = "/dist/gcds/gcds.css",
	txtScript = "script",
	txtLink = "link",
	blockingState = "render";


//
// Check if GCDS lib are already defined in the header
//
let traceFound = doc.querySelector( txtLink + "[href$=" + escape( gcdsSuffixCss ) + "]," + txtScript + "[src$=" + escape( gcdsSuffixJs ) + "]" );


//
// Import the GCDS libs
//
if ( !traceFound && gcdsSriJs && gcdsSriCss ) {
	let scrGcds = doc.createElement( txtScript );
	scrGcds.blocking = blockingState;
	scrGcds.type = "module";
	scrGcds.integrity = gcdsSriJs;
	scrGcds.src = gcdsBasePath + gcdsVersion + gcdsSuffixJs;
	doc.head.appendChild( scrGcds );

	let lnkGcds = doc.createElement( txtLink );
	lnkGcds.blocking = blockingState;
	lnkGcds.rel = "stylesheet";
	lnkGcds.crossOrigin = "anonymous";
	lnkGcds.integrity = gcdsSriCss;
	lnkGcds.href = gcdsBasePath + gcdsVersion + gcdsSuffixCss;
	doc.head.appendChild( lnkGcds );


	//
	// Set GCDS version globally once loaded
	//
	wnd.addEventListener( "appload", ( event ) => {
		if ( event.detail.namespace === "gcds" ) {
			wnd.wbgcds = gcdsVersion;
		}
	} );
}

} )( window, document, CSS.escape );
