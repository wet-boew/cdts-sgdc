/*!
 * @title Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v13.7.2 - 2023-08-29
 *
 */( function( $, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the polyfill - meaning that they will be initialized once per page.
 * This polyfill is mostly used to support <template> element in IE11
 */
var componentName = "wb-template",
	selector = "template",
	initEvent = "wb-init." + componentName,
	$document = wb.doc,

	/**
	 * @method polyfill
	 * @param {DOM element} element that we need to apply the polyfill
	 */
	polyfill = function( elm ) {

		if ( elm.content ) {
			return;
		}
		var elPlate = elm,
			qContent,
			docContent;

		qContent = elPlate.childNodes;
		docContent = document.createDocumentFragment();

		while ( qContent[ 0 ] ) {
			docContent.appendChild( qContent[ 0 ] );
		}

		elPlate.content = docContent;

	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector );

		if ( elm ) {

			polyfill( elm );

			// Identify that initialization has completed
			wb.ready( $( elm ), componentName );
		}
	};

// Make it available of when template element is needed on the fly, like subtemplate support in IE11
wb.tmplPolyfill = polyfill;

// Bind the events of the polyfill
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the polyfill
wb.add( selector );

} )( jQuery, document, wb );

( function( $, window, wb ) {
"use strict";

var $document = wb.doc,
	componentName = "gc-featured-link",
	selector = ".provisional." + componentName,
	initEvent = "wb-init " + selector,
	white = "#FFFFFF",
	black = "#000000",
	darkgrey = "#333333",
	luminance1, luminance2,
	contrastRatio,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {
			var bgColor = elm.dataset.bgColor,
				textColor;

			$elm = $( elm );

			if ( bgColor ) {
				if ( getContrastRatio( white, bgColor ) >= 4.5 ) {
					textColor = white;
				} else if ( getContrastRatio( darkgrey, bgColor ) >= 4.5 ) {
					textColor = darkgrey;
				} else {
					textColor = black;
				}

				elm.style.backgroundColor = bgColor;
				elm.style.color = textColor;
				elm.querySelectorAll( "p, a" ).forEach( e => {
					e.style.color = textColor;
				} );
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	},

	getContrastRatio = function( color1, color2 ) {
		function getLuminance( color ) {
			var rgb = [ color.substr( 1, 2 ), color.substr( 3, 2 ), color.substr( 5, 2 ) ].map( hex => parseInt( hex, 16 ) / 255 );

			for ( let i = 0; i < rgb.length; i++ ) {
				if ( rgb[ i ] <= 0.03928 ) {
					rgb[ i ] = rgb[ i ] / 12.92;
				} else {
					rgb[ i ] = Math.pow( ( rgb[ i ] + 0.055 ) / 1.055, 2.4 );
				}
			}

			return 0.2126 * rgb[ 0 ] + 0.7152 * rgb[ 1 ] + 0.0722 * rgb[ 2 ];
		}

		luminance1 = getLuminance( color1 );
		luminance2 = getLuminance( color2 );

		contrastRatio = ( Math.max( luminance1, luminance2 ) + 0.05 ) / ( Math.min( luminance1, luminance2 ) + 0.05 );

		return contrastRatio.toFixed( 2 );
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

( function( $, window, wb ) {
"use strict";

var $document = wb.doc,
	componentName = "gc-subway",
	selector = ".provisional." + componentName,
	initEvent = "wb-init " + selector,
	mainClass = componentName + "-section",
	indexClass = componentName + "-index",
	supportClass = componentName + "-support",
	wrapperClass = componentName + "-wrapper",
	sectionsTitle,
	$navH1, $pageH1,
	$support,
	$subwayLinks,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm && event.currentTarget === event.target ) {
			$elm = $( elm );

			sectionsTitle = elm.hasAttribute( "data-sections-title" ) ? elm.getAttribute( "data-sections-title" ) : "Sections";

			// If it's the index, add "gc-subway-index" class
			if ( !elm.querySelector( "h1" ) ) {
				if ( !elm.classList.contains( indexClass ) ) {
					elm.classList.add( indexClass );
				}
			} else {
				$navH1 = $( "h1", $elm );

				// Add skip link to sections list
				if ( $navH1 ) {
					$navH1.id = $navH1.id || wb.getId(); // Ensure the element has an ID
					wb.addSkipLink( wb.i18n( "skip-prefix" ) + " " + $navH1.text(), { href: "#" + $navH1.id } );
				}

				// Wrap all content until it hits either: ".pagedetails", or "".gc-subway-support"
				$elm.nextUntil( ".pagedetails, .gc-subway-support" ).wrapAll( "<section class='" + mainClass + "'>" );

				$elm.wrap( "<div class='" + wrapperClass + "'></div>" );

				$pageH1 = $( "." + mainClass + " h1" );

				$pageH1.wrap( "<hgroup></hgroup>" );
				$navH1.wrap( "<hgroup></hgroup>" );

				$( "<p>" + $navH1.text() + "</p>" ).insertBefore( $pageH1 );
				$( "<p class='h3 hidden-xs visible-md visible-lg mrgn-tp-0'>" + sectionsTitle + "</p>" ).insertAfter( $navH1 );

				$elm.find( "a.active" ).attr( { tabindex: "0", "aria-current": "page" } );

				//$subwayLinks = $( selector + " a, ." + mainClass + " .gc-subway-pagination a" ); Put back once correctly implemented
				$subwayLinks = $( selector + " a, ." + mainClass + " .gc-subway-pagination a, main .pager a" );// Remove once correctly implemented

				// Cloning .gc-subway-support
				$support = $( "." + supportClass );
				if ( $support ) {
					$support.clone().addClass( "hidden-xs hidden-sm" ).insertAfter( "." + componentName );
					$support.addClass( "hidden-md hidden-lg" );
				}

				// Duplicating GC-Subway links for single-page application feel on mobile
				$subwayLinks.each( function( i, el ) {
					let $el = $( el ),
						elHref = $el.attr( "href" ),

						//cloneHref = elHref.includes( "#" ) ? elHref : elHref += "#wb-cont"; Put back once correctly implemented
						cloneHref;

					// Remove once correctly implemented
					if ( elHref ) {
						cloneHref = elHref.includes( "#" ) ? elHref : elHref += "#wb-cont";
					}

					$el.clone()
						.addClass( "hidden-md hidden-lg" )
						.attr( "href", cloneHref )
						.insertAfter( el );

					$el.addClass( "hidden-xs hidden-sm" );
				} );

				// Prevent on-load blinking on desktop
				elm.classList.add( "no-blink" );
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

( function( $, wb, document ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var $document = wb.doc,
	componentName = "wb-actionmng",
	selector = "." + componentName,
	selectorPreset = "[data-" + componentName + "]",
	runCssFlag = componentName + "Rn",
	initEvent = "wb-init." + componentName,
	actionEvent = componentName + selector,
	postponePreActions = { },
	postponeActions = { },
	groupPostAction = { },
	actionMngEvent = [
		"mapfilter",
		"tocsv",
		"loadJSON",
		"patch",
		"ajax",
		"addClass",
		"removeClass",
		"tblfilter",
		"withInput",
		"run"
	].join( "." + actionEvent + " " ) + "." + actionEvent,

	patchDefault = {
		op: "move",
		path: "{base}",
		from: "{base}/{qval}"
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm,
			actions, i, i_len, i_cache, i_trggrp;

		if ( elm ) {
			$elm = $( elm );

			actions = wb.getData( $elm, componentName );

			if ( actions ) {
				if ( !$.isArray( actions ) ) {
					actions = [ actions ];
				}
				i_len = actions.length;
				for ( i = 0; i !== i_len; i += 1 ) {
					i_cache = actions[ i ];
					i_trggrp = i_cache.trggroup;
					if ( i_trggrp && i_cache.action ) {
						addDelayedAction( i_trggrp, groupPostAction, i_cache );
					}
				}
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	},
	addDelayedAction = function( k, a, o ) {
		if ( !a[ k ] ) {
			a[ k ] = [ ];
		}
		a[ k ].push( o );
	},
	executePostAction = function( $elm, k, a ) {
		var actions, i_cache, i_action;

		actions = a[ k ];
		while ( ( i_cache = actions.shift() ) ) {
			i_action = i_cache.action;
			if ( !i_action ) {
				continue;
			}
			$elm.trigger( i_action + "." + actionEvent, i_cache );
			delete i_cache.action;
		}
	},
	patchAct = function( event, data ) {

		// Prepare patches operation for execution by the json-manager
		var source = data.source,
			ops = data.patches,
			isCumulative = !!data.cumulative;

		if ( !ops ) {
			return;
		}

		if ( !$.isArray( ops ) ) {
			ops = [ ops ];
		}

		$( source ).trigger( {
			type: "patches.wb-jsonmanager",
			patches: ops,
			fpath: data.fpath,
			filter: data.filter || [],
			filternot: data.filternot || [],
			cumulative: isCumulative // Ensure the patches would remain as any other future update.
		} );

	},
	ajaxAct = function( event, data ) {
		var $container, containerID, ajxType;

		if ( !data.container ) {
			containerID = wb.getId();
			$container = $( "<div id='" + containerID + "'></div>" );
			$( event.target ).after( $container );
		} else {
			$container = $( data.container );
		}

		if ( data.trigger ) {
			$container.attr( "data-trigger-wet", "true" );
		}

		ajxType = data.type ? data.type : "replace";
		$container.attr( "data-ajax-" + ajxType, data.url );

		$container.one( "wb-contentupdated", function( event, data ) {
			var updtElm = event.currentTarget,
				trigger = updtElm.getAttribute( "data-trigger-wet" );

			updtElm.removeAttribute( "data-ajax-" + data[ "ajax-type" ] );
			if ( trigger ) {
				$( updtElm )
					.find( wb.allSelectors )
					.addClass( "wb-init" )
					.filter( ":not(#" + updtElm.id + " .wb-init .wb-init)" )
					.trigger( "timerpoke.wb" );
				updtElm.removeAttribute( "data-trigger-wet" );
			}
		} );
		$container.trigger( "wb-update.wb-data-ajax" );
	},
	addClassAct = function( event, data ) {
		var $elm = $( data.source || event.target );
		if ( !data.class ) {
			return;
		}
		$elm.addClass( data.class );
	},
	remClassAct = function( event, data ) {
		var $elm = $( data.source || event.target );
		if ( !data.class ) {
			return;
		}
		$elm.removeClass( data.class );
	},
	tblflrAct = function( event, data ) {
		var elm = event.target,
			$source = $( data.source || elm ),
			$datatable,
			column = data.column,
			colInt = parseInt( column, 10 ),
			regex = !!data.regex,
			smart = ( !data.smart ) ? true : !!data.smart,
			caseinsen = ( !data.caseinsen ) ? true : !!data.caseinsen;

		if ( $source.get( 0 ).nodeName !== "TABLE" ) {
			throw "Table filtering can only applied on table";
		}

		$datatable = $source.dataTable( { "retrieve": true } ).api();

		if ( column ) {
			column = ( colInt === true ) ? colInt : column;
			$datatable.column( column ).search( data.value, regex, smart, caseinsen ).draw();
		} else {
			$datatable.search( data.value, regex, smart, caseinsen ).draw();
		}
	},
	geomapAOIAct = function( event, data ) {
		var $source = $( data.source || event.target ),
			map = $source.get( 0 ).geomap,
			tpFilter = data.filter,
			value = data.value;

		// if aoi => There will be 4 coordinate space separated (Sequence: N E S W)
		if ( tpFilter === "aoi" ) {
			map.zoomAOI( value );
		}

		// if layer => The layer name
		if ( tpFilter === "layer" ) {
			map.showLayer( value, true );
		}
	},

	// @source => jQuery selector to an HTML table
	// @fname => Filename to save the csv
	tblToCSV = function( source, fname ) {

		var $table = $( source ),
			table = $table.get( 0 ),
			isDataTable = table.classList.contains( "wb-tables" ),
			csvText = "",
			fileName = fname || ( table.caption || "table" ) + ".csv",
			rows = table.rows,
			i, rows_len = rows.length,
			j, columns_len = rows[ 0 ].cells.length,
			$datatable;

		// Is a table enhanced with the datatable plugin?
		if ( isDataTable ) {
			$datatable = $table.dataTable( { "retrieve": true } ).api();
			rows_len = $datatable.rows()[ 0 ].length;

			// Need to add the first row, because the header are not included in the list of rows returned by the datatable plugin.
			for ( j = 0; j < columns_len; j = j + 1 ) {
				cellCSVText = rows[ 0 ].cells[ j ].textContent;
				cellCSVText = cellCSVText.replace( /"/g, "\"\"" );
				if ( j ) {
					csvText = csvText + ",\"" + cellCSVText + "\"";
				} else {
					csvText = csvText + "\"" + cellCSVText + "\"";
				}
			}
			csvText = csvText + "\n";
		}

		for ( i = 0; i < rows_len; i = i + 1 ) {

			for ( j = 0; j < columns_len; j = j + 1 ) {
				var cellCSVText;
				if ( isDataTable ) {

					// I would like to use ".node()" instead of ".data()" but it is not possible to get the referencied
					// node because it don't exist if the table have multiple pages.
					cellCSVText = $datatable.cell( i, j, { "page": "all" } ).data();

					// If the content of the cell is HTML, the content will be parsed through a document fragment to extract
					// it's textContent equivalent value
					if ( cellCSVText.indexOf( "<" ) !== -1 ) {
						var div = document.createElement( "div" );
						div.innerHTML = cellCSVText;
						cellCSVText = div.textContent;
					}
				} else {
					cellCSVText = rows[ i ].cells[ j ].textContent;
				}
				cellCSVText = cellCSVText.replace( /"/g, "\"\"" );
				cellCSVText = cellCSVText + "\"";
				if ( j ) {
					csvText = csvText + ",\"" + cellCSVText;
				} else {
					csvText = csvText + "\"" + cellCSVText;
				}
			}

			csvText = csvText + "\n";
		}

		wb.download( new Blob( [ "\ufeff" + csvText ], { type: "text/plain;charset=utf-8" } ), fileName );

	},

	loadJSON = function( data ) {

		// All the options need to be documented
		// * url -> URL of the JSON file to load
		// * nocache -> related to JSON-fetch, see similar
		// * nocachekey -> related to JSON-fetch, see similar
		// * source -> JQuery selector of with has a JSON-MANAGER


		var source = data.source,
			fileUrl = data.url;

		// Add a flag to the JSON-Manager to put in a reload mode to avoid conflict with patches
		$( source ).attr( "data-wb-jsonmanager-reload", "" );

		// Trigger a JSON load on the source
		$( source ).trigger( {
			type: "json-fetch.wb",
			fetch: {
				url: fileUrl,
				nocache: data.nocache,
				nocachekey: data.nocachekey,
				data: data.data,
				contentType: data.contenttype,
				method: data.method
			}
		} );

	},

	// From a user input or a predefined input, apply some tranformation to the command prior to execute it
	// This functionality was already in the URL mapping and was moved here to be reused by any user input
	withInput = function( event, data ) {

		// * data.srcInput; // ex. jQuery Selector pointing to an input
		// If cValue is specified (like from the URL mapping), the second parameter is ignored
		var cValue = data.cValue || $( data.srcInput ).val() || "",
			settingQuery = data,
			dontTriggerWET = data.dntwb, // do not trigger WET
			elm = event.target;

		// Test is actions is an array, in false this action must be rejected. The docs should contains that info too.

		executePreRenderAction( elm.id, cValue, settingQuery.actions, dontTriggerWET );


	},

	executePreRenderAction = function( elmID, cValue, actions, dontTriggerWET ) {

		var i, i_len, i_cache, cache_action,
			regMatchValue,
			pattern, cValueParsed,
			defaultValue;


		if ( !$.isArray( actions ) ) {
			actions = [ actions ];
		} else {
			actions = $.extend( [], actions );
		}

		// Fix any action that was defined as query dependent
		i_len = actions.length;
		for ( i = 0; i !== i_len; i += 1 ) {
			i_cache = actions[ i ];

			cache_action = i_cache.action;
			if ( !cache_action ) {
				continue;
			}

			regMatchValue = i_cache.match;
			defaultValue = i_cache.default;
			cValueParsed = false;

			// Abort if we try to match and there is no default set
			if ( regMatchValue && !defaultValue ) {
				throw "'match' and 'default' property need to be set";
			}

			// Validate the value if it match the regular expression / string pattern.
			if ( !!defaultValue && cValue.length && typeof regMatchValue === "string" ) {
				try {
					pattern = new RegExp( regMatchValue );
					cValueParsed = pattern.exec( cValue );

					// Fall back on default if no match found
					cValueParsed = cValueParsed ? cValueParsed : defaultValue;
				} catch ( e ) {

					// continue regardless of error
				}
			} else if ( !cValueParsed && !!defaultValue && !cValue ) {
				cValueParsed = defaultValue;
			}

			if ( !i_cache.qval && cValueParsed ) {
				i_cache.qval = cValueParsed;
			}


			switch ( cache_action ) {

			case "patch":
				var ops = i_cache.patches,
					basePntr = i_cache.base || "/";
				if ( !ops ) {
					ops = [ patchDefault ];
					i_cache.cumulative = true;
				}
				if ( !$.isArray( ops ) ) {
					ops = [ ops ];
				}
				ops = patchFixArray( ops, i_cache.qval, basePntr );
				i_cache.patches = ops;
				break;
			case "ajax":
				if ( i_cache.trigger && dontTriggerWET ) {
					i_cache.trigger = false;
				}
				i_cache.url = replaceMappingKeys( i_cache.url, i_cache.qval );
				break;
			case "tblfilter":
				i_cache.value = replaceMappingKeys( i_cache.value, i_cache.qval );
				break;
			default:

				// Just do the action as defined.
				break;

			}

			// Postpone the action to be executed after the "withInput" action
			addDelayedAction( elmID, postponeActions, i_cache );
		}

	},
	patchFixArray = function( patchArray, val, basePointer ) {

		var i, i_len = patchArray.length, i_cache,
			patchesFixed = [], patch_cache;

		if ( !basePointer ) {
			basePointer = "/";
		}

		for ( i = 0; i !== i_len; i += 1 ) {
			i_cache = patchArray[ i ];
			patch_cache = $.extend( { }, i_cache );
			if ( i_cache.path ) {
				patch_cache.path = replaceMappingKeys( i_cache.path, val, basePointer );
			}
			if ( i_cache.from ) {
				patch_cache.from = replaceMappingKeys( i_cache.from, val, basePointer );
			}
			if ( i_cache.value ) {
				patch_cache.value = replaceMappingKeys( i_cache.value, val, basePointer );
			}
			patchesFixed.push( patch_cache );
		}
		return patchesFixed;
	},
	replaceMappingKeys = function( search, val, basePointer ) {
		if ( !val ) {
			return search;
		}
		if ( !basePointer ) {
			return search.replace( /\{qval\}/, val );
		} else {
			return search.replace( /\{qval\}/, val ).replace( /\{base\}/, basePointer );
		}
	},

	runAct = function( event, data ) {

		var elm = event.target,
			$elm = $( elm ),
			grpAction = groupPostAction[ data.trggroup ],
			i, i_len, i_cache, i_action;

		if ( grpAction && !$elm.hasClass( runCssFlag ) ) {
			$elm.addClass( runCssFlag );

			i_len = grpAction.length;
			for ( i = 0; i !== i_len; i += 1 ) {
				i_cache = grpAction[ i ];

				i_action = i_cache.action;
				if ( !i_action ) {
					continue;
				}
				$elm.trigger( i_action + "." + actionEvent, i_cache );
			}
			$elm.removeClass( runCssFlag );
		}
	};

// Main entry to submit wet-boew plugin actions
// It will be only executed once per event chain
$document.on( "do." + actionEvent, function( event ) {
	var elm =  event.element || event.target,
		$elm, elmID = elm.id,
		actions = event.actions || [ ],
		i, i_len, i_cache,
		i_action, i_target, i_trggrp;

	// Filter out any events triggered by descendants
	if ( ( elm === event.target || event.currentTarget === event.target ) && elm.className.indexOf( componentName ) === -1 ) {

		if ( !$.isArray( actions ) ) {
			actions = [ actions ];
		}

		i_len = actions.length;

		// Add a CSS selector to trigger action Events
		if ( i_len ) {
			$elm = $( elm );
			$elm.addClass( componentName );
		}

		// For this elements, check if we do not have some postponed pre action to execute.
		if ( elmID && postponePreActions[ elmID ] ) {
			executePostAction( $elm, elmID, postponePreActions );
		}

		for ( i = 0; i !== i_len; i += 1 ) {
			i_cache = actions[ i ];

			i_action = i_cache.action;
			if ( !i_action ) {
				continue;
			}

			i_target = i_cache.target;
			if ( i_target ) {

				if ( !i_cache.trgbefore ) {
					addDelayedAction( i_target, postponeActions, i_cache );
				} else {
					addDelayedAction( i_target, postponePreActions, i_cache );
				}

				// If the target are in a group
				i_trggrp = i_cache.trggroup;
				if ( i_trggrp ) {
					addDelayedAction( i_trggrp, groupPostAction, i_cache );
				}
			} else {
				$elm.trigger( i_action + "." + actionEvent, i_cache );
			}
		}

		// For this elements, check if we do not have some postponed action to execute.
		if ( elmID && postponeActions[ elmID ] ) {
			executePostAction( $elm, elmID, postponeActions );
		}

		$( event.target ).removeClass( componentName );
	}
} );

//Remove any action for grouped postponed action
$document.on( "clean." + actionEvent, function( event ) {
	var elm =  event.element || event.target,
		targetGroup = event.trggroup,
		actionsGrp, i_cache;

	// Filter out any events triggered by descendants
	if ( elm === event.target || event.currentTarget === event.target ) {
		if ( targetGroup && groupPostAction[ targetGroup ] ) {
			actionsGrp = groupPostAction[ targetGroup ];
			while ( ( i_cache = actionsGrp.shift() ) ) {
				delete i_cache.action;
			}
		}
	}
} );

$document.on( actionMngEvent, selector, function( event, data ) {

	var eventType = event.type;

	if ( actionEvent === event.namespace ) {
		switch ( eventType ) {
		case "run":
			runAct( event, data );
			break;
		case "tblfilter":
			tblflrAct( event, data );
			break;
		case "addClass":
			addClassAct( event, data );
			break;
		case "removeClass":
			remClassAct( event, data );
			break;
		case "ajax":
			ajaxAct( event, data );
			break;
		case "patch":
			patchAct( event, data );
			break;
		case "mapfilter":
			geomapAOIAct( event, data );
			break;
		case "tocsv":
			tblToCSV( data.source, data.filename );
			break;
		case "loadJSON":
			loadJSON( data );
			break;
		case "withInput":
			withInput( event, data );
			break;
		}
	}
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selectorPreset, init );

// Add the timer poke to initialize the plugin
wb.add( selectorPreset );

} )( jQuery, wb, document );

( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-chtwzrd",
	selector = "." + componentName,
	replacement = componentName + "-replace",
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	datainput = {},
	timeValues = {},
	waitingForAnswer,
	formType,
	isInline,
	isNotif,
	redirurl,
	first,
	intro,
	current,
	waitTimeout,
	inputsTimeout,
	sendButton,
	i18nDict = {
		en: {
			"chtwzrd-send": "Send<span class='wb-inv'> reply and continue</span>",
			"chtwzrd-reset": "Restart from the beginning",
			"chtwzrd-toggle": "Switch to wizard",
			"chtwzrd-notification": "Close chat notification",
			"chtwzrd-open": "Open chat wizard",
			"chtwzrd-minimize": "Minimize chat wizard",
			"chtwzrd-history": "Conversation history",
			"chtwzrd-reply": "Reply",
			"chtwzrd-controls": "Controls",
			"chtwzrd-toggle-basic": "Switch to basic form",
			"chtwzrd-waiting": "Waiting for message",
			"chtwzrd-answer": "You have answered:"
		},
		fr: {
			"chtwzrd-send": "Envoyer<span class='wb-inv'> la réponse et continuer</span>",
			"chtwzrd-reset": "Recommencer depuis le début",
			"chtwzrd-toggle": "Basculer vers l&apos;assistant",
			"chtwzrd-notification": "Fermer la notification de discussion",
			"chtwzrd-open": "Ouvrir l&apos;assistant de discussion",
			"chtwzrd-minimize": "Réduire l&apos;assistant de discussion",
			"chtwzrd-history": "Historique de discussion",
			"chtwzrd-reply": "Répondre",
			"chtwzrd-controls": "Contrôles",
			"chtwzrd-toggle-basic": "Basculer vers le formulaire",
			"chtwzrd-waiting": "En attente d&apos;un message",
			"chtwzrd-answer": "Vous avez répondu&nbsp;:"
		}
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;
		if ( elm ) {
			$elm = $( elm );

			fireChtwzrd( $elm );

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	},

	/**
	 * Prepare initiation depending on the input type, wether it's JSON or a form
	 * @method fireChtwzrd
	 * @param {jQuery DOM element} $selector Element to which the wizard will be appended
	 */
	fireChtwzrd = function( $selector ) {

		// Grab JSON File, parse and create
		if ( $selector.data( componentName + "-src" ) ) {
			var data = $selector.data( componentName + "-src" );
			$.getJSON( data, function( json ) {
				datainput = json;
				buildBasicForm( $selector, datainput );
				initiateChtwzrd( $selector );
			} );

		// Start from a form on the page
		} else {
			datainput = convertToObject( $selector );
			initiateChtwzrd( $selector );
		}
	},

	/**
	 * Initiate chat wizard experience
	 * @method initiateChtwzrd
	 * @param {jQuery DOM element} $selector Element to which the wizard will be appended
	 */
	initiateChtwzrd = function( $selector ) {

		// Check for local storage if we need to show notification
		isNotif = localStorage.getItem( "wb-chtwzrd-notif" );

		// Prevent on load flick and identify basic form
		$selector.removeClass( "hidden wb-inv" ).addClass( componentName + "-basic" );

		// Initiate default values
		timeValues = {
			shortDelay: 500,
			mediumDelay: 750,
			longDelay: 1250,
			xLongDelay: 2000,
			xxLongDelay: 2500
		};
		waitingForAnswer = false;
		first = datainput.header.first;
		intro = ( datainput.header.instructions ? datainput.header.instructions : "" );
		redirurl = datainput.header.defaultDestination;
		current = datainput.questions[ first ];
		formType = datainput.header.formType ? datainput.header.formType : "dynamic";
		isInline = datainput.header.inline ? true : false;

		// Initiate dictionary
		i18nDict = i18nDict[ $( "html" ).attr( "lang" ) || "en" ];
		i18nDict = {
			send: i18nDict[ "chtwzrd-send" ],
			reset: i18nDict[ "chtwzrd-reset" ],
			toggle: i18nDict[ "chtwzrd-toggle" ],
			notification: i18nDict[ "chtwzrd-notification" ],
			trigger: i18nDict[ "chtwzrd-open" ],
			minimize: i18nDict[ "chtwzrd-minimize" ],
			conversation: i18nDict[ "chtwzrd-history" ],
			reply: i18nDict[ "chtwzrd-reply" ],
			controls: i18nDict[ "chtwzrd-controls" ],
			toggleBasic: i18nDict[ "chtwzrd-toggle-basic" ],
			waiting: i18nDict[ "chtwzrd-waiting" ],
			answer: i18nDict[ "chtwzrd-answer" ]
		};

		// Build chat wizard
		buildChtwzrd( $selector, datainput.header.title );

		// All the commonly used elements
		var $basic = $( selector + "-basic" ),
			$bubble = $( selector + "-bubble-wrap" ),
			$externalBtn = $( selector + "-btn" ),
			$container = $( selector + "-container" ),
			$form = $( ".body", $container ),
			$conversation = $( ".history", $container ),
			$minimize = $( ".minimize", $container ),
			$reset = $( ".reset", $container ),
			$basiclink = $( ".basic-link", $container ),
			$focusedBeforechtwzrd,
			$firstTabStop = $reset,
			$lastTabStop = $basiclink;

		// Initiate basic form
		initiateBasicForm( $basic );

		// Initiate chat wizard bubble
		initiateBubble( $bubble );

		// Initiate chat wizard external btn
		initiateExternalButton( $externalBtn );

		// Show basic form and hide chat wizard
		$basiclink.on( "click", function( event ) {
			event.preventDefault();

			var $legendFocus = $( "legend:first", $basic );
			$legendFocus.attr( "tabindex", "0" );

			$conversation.attr( "aria-live", "" );
			toggleExperience( $basic, "form" );

			$container.stop().hide();
			$basic.stop().show( function() {
				$legendFocus.focus();
				$legendFocus.removeAttr( "tabindex" );
			} );

			$( "body" ).removeClass( componentName + "-noscroll" );
		} );

		// Show chat wizard and hide basic form
		$( selector + "-link" ).on( "click", function( event ) {
			event.preventDefault();

			$basic.stop().hide();
			$focusedBeforechtwzrd = $( ":focus" );

			if ( !$( this ).hasClass( componentName + "-bubble" ) ) {
				toggleExperience( $container, "wizard" );
			}
			$( ".bubble", $bubble ).removeClass( "trans-pulse" );
			$( "p", $bubble ).hide().removeClass( "trans-left" );

			$container.stop().show();
			$bubble.stop().hide();

			$externalBtn.prop( "disabled", true );

			if ( !isInline ) {
				$( "body" ).addClass( componentName + "-noscroll" );
			}
			if ( $conversation.length ) {
				$( ".conversation", $container ).scrollTop( $conversation[ 0 ].scrollHeight );
			}
			if ( !waitingForAnswer ) {
				appendInteraction( $form );
			}

			// Do not show notification on next load
			localStorage.setItem( "wb-chtwzrd-notif", 1 );
		} );

		// External btn event handler
		$( selector + "-btn" ).on( "click", function( event ) {
			event.preventDefault();

			$externalBtn.prop( "disabled", true );

			$basic.stop().hide();
			$focusedBeforechtwzrd = $( ":focus" );

			toggleExperience( $container, "wizard" );

			$container.stop().show();
			$bubble.stop().hide();
			$container.find( ":focusable" ).first().focus();

			if ( !isInline ) {
				$( "body" ).addClass( componentName + "-noscroll" );
			}
			if ( $conversation.length ) {
				$( ".conversation", $container ).scrollTop( $conversation[ 0 ].scrollHeight );
			}
			if ( !waitingForAnswer ) {
				appendInteraction( $form );
			}
		} );

		// If inline, do not trap user with keyboard
		if ( isInline ) {
			$( selector + "-link" ).click();
		} else {

			// Listen for and trap the keyboard
			$container.on( "keydown", function( event ) {

				// Check for TAB key press, cycle through
				if ( event.keyCode === 9 ) {
					if ( event.shiftKey ) {
						if ( $firstTabStop.is( ":focus" ) ) {
							event.preventDefault();
							$lastTabStop.focus();
						}
					} else {
						if ( $lastTabStop.is( ":focus" ) ) {
							event.preventDefault();
							$firstTabStop.focus();
						}
					}
				}

				// ESCAPE, close
				if ( event.keyCode === 27 ) {
					$minimize.click();
				}
			} );
		}

		// On chat button pressed: append answer, and on submit: redirect
		$document.on( "click", selector + "-container .btn-send", function( event ) {

			if ( $( this ).attr( "type" ) !== "submit" ) {
				event.preventDefault();
				var $choiceselected = $( "input:checked", $form );
				if ( !$choiceselected.length ) {
					$choiceselected = $( "input:first", $form );
					$choiceselected.attr( "checked", true );
				}
				appendReply( $form, cookAnswerObj( $choiceselected ), false );
			}
		} );

		// On chat reset button pressed: toggle experience to wizard
		$reset.on( "click", function( event ) {
			event.preventDefault();
			toggleExperience( $( selector + "-container" ), "wizard" );
		} );

		// Minimize chat wizard
		$minimize.on( "click", function( event ) {
			event.preventDefault();
			$container.stop().hide();

			$externalBtn.prop( "disabled", false );
			$bubble.stop().show();

			$( "body" ).removeClass( componentName + "-noscroll" );

			// Set focus back to element that had it before the modal was opened
			$focusedBeforechtwzrd.focus();
		} );
	},

	/**
	 * Initiate basic form
	 * @method initiateBasicForm
	 * @param {jQuery DOM element} $selector Element to which the basic form will be appended
	 */
	initiateBasicForm = function( $selector ) {
		var $basicForm = $( "form", $selector ),
			$allQuestions = $( "fieldset", $selector ),
			$firstQuestion = $allQuestions.first();

		if ( formType === "dynamic" ) {
			$firstQuestion.addClass( componentName + "-first-q" );
			$allQuestions.not( selector + "-first-q" ).hide();
		}

		// Hide and restart fresh on reload
		$selector.hide();
		$( "input", $basicForm ).prop( "checked", false );

		// Add link to chat from the basic form
		$basicForm.append( "<button class='btn btn-sm btn-link " + componentName + "-link mrgn-rght-sm'>" + i18nDict.toggle + "</button>" );

		// On input change in the basic form
		$( "input", $basicForm ).on( "change", function() {
			var answerData = cookAnswerObj( $( this ) ),
				$qNext = $( "#" + answerData.qNext, $basicForm );

			// Dynamically append next question on checked
			if ( formType === "dynamic" ) {
				var $fieldset = $( this ).closest( "fieldset" );
				if ( $qNext.is( ":hidden" ) || $fieldset.next().attr( "id" ) !== $qNext.attr( "id" ) || answerData.qNext === "none" ) {
					$fieldset.nextAll( "fieldset" ).hide().find( "input" ).prop( "checked", false );
				}
				if ( answerData.qNext !== "none" ) {
					$( "#" + answerData.qNext ).show();
				}
				if ( answerData.url !== "" ) {
					$basicForm.attr( "action", answerData.url );
				}
			}
		} );
	},

	/**
	 * Initiate chat wizard bubble
	 * @method initiateBubble
	 * @param {jQuery DOM element} $selector Element which is the actual bubble
	 */
	initiateBubble = function( $selector ) {
		var $footer = $( "#wb-info" ),
			$link = $( selector + "-link", $selector );

		// Change to custom avatar if provided
		if ( datainput.header.avatar ) {
			$link.css( "background-image", "url(" + datainput.header.avatar + ")" );
		}

		// Hide basic form on load, show chat bubble instead
		$selector.fadeIn( "slow" );

		// Add some white space over the footer for the bubble to sit
		$footer.addClass( componentName + "-mrgn" );

		// Ensure that the bubble does not go passed the footer
		if ( $footer.length ) {

			// Keep the bubble sticky while scrolling Y until user reaches the footer
			var stickyUntilFooter = function( $element ) {

				// Equals to bubble default bottom value in CSS
				var bottomY = 30;

				if ( $( window ).scrollTop() >= $( document ).outerHeight() - $( window ).outerHeight() - $footer.outerHeight() ) {
					$element.css( {
						bottom: ( $footer.outerHeight() - ( $( document ).outerHeight() - $( window ).outerHeight() - $( window ).scrollTop() ) + bottomY )
					} );
				} else {
					$element.css( {
						bottom: bottomY
					} );
				}
			};

			// Correct bubble positionning on load, on resize an on Y scroll if necessary
			stickyUntilFooter( $selector );

			$( window ).on( "resize scroll", function() {
				stickyUntilFooter( $selector );
			} );
		}

		// Open Chat from the notification message
		$( ".notif", $selector ).on( "click", function() {
			$link.click();
		} );

		// Close notification aside bubble
		$( ".notif-close", $selector ).on( "click", function( event ) {
			event.preventDefault();
			$( this ).parent().hide();
			$selector.focus();

			// Do not show notification on next load
			localStorage.setItem( "wb-chtwzrd-notif", 1 );
		} );
	},

	/**
	 * Initiate chat wizard external button
	 * @method initiateExternalButton
	 * @param {jQuery DOM element} $selector Element which is the actual external button
	 */
	initiateExternalButton = function( $selector ) {
		$selector.attr( "aria-controls", componentName + "-container" );
	},

	/**
	 * Convert Data attributes from the form and return a Javascript Object
	 * @method convertToObject
	 * @param {jQuery DOM element} $selector Basic from which the wizard will be created
	 * @returns {Object} Data used by the wizard for the experience
	 */
	convertToObject = function( $selector ) {
		var $form = $( "form", $selector ),
			$title = $( "h2", $selector ).first(),
			$intro = $( "p:not(" + selector + "-greetings):not(" + selector + "-farewell)", $form ).first(),
			btnClassName = "btn-former-send",
			header = {},
			questions = {},
			$questions = $( "fieldset", $selector );

		header = ( typeof $selector.data( componentName ) !== undefined && $selector.data( componentName ) ? $selector.data( componentName ) : {} );

		header.inline = $selector.hasClass( "wb-chtwzrd-inline" );
		header.avatar = $selector.data( componentName + "-avatar" );

		header.defaultDestination = $form.attr( "action" );
		header.name = $form.attr( "name" );
		header.method = $form.attr( "method" );

		header.form = {};

		header.form.title = $title.html();
		header.title = replaceForWizard( $title, header.form.title );

		header.greetings = $( "p" + selector + "-greetings", $form ).html();
		header.farewell = $( "p" + selector + "-farewell", $form ).html();

		header.form.sendButton = ( $( "input[type=submit]", $form ).length ? $( "input[type=submit]", $form ).addClass( btnClassName ).val() : $( "button[type=submit]", $form ).addClass( btnClassName ).html() );
		header.sendButton = replaceForWizard( $( "." + btnClassName, $form ), header.form.sendButton );

		if ( $intro.length ) {
			header.form.instructions = $intro.html();
			header.instructions = replaceForWizard( $intro, header.form.instructions );
		}


		header.first = header.first || $questions.first().attr( "id" );

		$questions.each( function() {
			var $this = $( this ),
				$label = $( "legend", $this ),
				$choices = $( "label", $this ),
				questionID = this.id,
				qInput = ( $( "input[type=radio]", $this ).length ? "radio" : "checkbox" ),
				choices = [],
				qName = "",
				theQuestion = {};

			$choices.each( function( index ) {
				var $choice = $( "input", $( this ) ),
					choice = {},
					name = $choice.attr( "name" ),
					action = $choice.data( componentName + "-url" ),
					textval = $choice.siblings( "span:not(.no-" + componentName + ")" ).html();

				if ( !index ) {
					qName = name;
				}
				choice.content = textval;
				choice.value = $choice.val();
				choice.next = $choice.data( componentName + "-next" );
				if ( typeof action !== undefined && action ) {
					choice.url = action;
				}
				choices.push( choice );
			} );

			theQuestion.name = qName;
			theQuestion.input = qInput;
			theQuestion.formLabel = $label.html();
			theQuestion.label = replaceForWizard( $label, theQuestion.formLabel );
			theQuestion.choices = choices;

			questions[ questionID ] = theQuestion;

		} );
		return {
			header: header,
			questions: questions
		};
	},

	/**
	 * Build the chat wizard skeleton
	 * @method buildChtwzrd
	 * @param {jQuery DOM element} $selector Element to which the wizard will be appended
	 * @param {String} title The title of the wizard window, as well as the notification
	 */
	buildChtwzrd = function( $selector, title ) {
		$selector.after( "<div class='" + componentName + "-bubble-wrap'><a href='#" + componentName + "-container' aria-controls='" + componentName + "-container' class='" + componentName + "-link bubble trans-pulse' role='button'>" + i18nDict.trigger + "</a>" +
		( !isNotif ? "<p class='trans-left'><span class='notif'>" + title + "</span> <a href='#' class='notif-close' title='" + i18nDict.notification + "' aria-label='" + i18nDict.notification + "' role='button'>&times;</a></p>" : "" ) +
		"</div>" );
		$selector.next( selector + "-bubble-wrap" ).after( "<aside id='" + componentName + "-container' class='modal-content overlay-def " + componentName + "-container " + ( isInline ? " wb-chtwzrd-contained" : "" ) + "'></aside>" );

		var $container = $( selector + "-container" );
		$container.append(
			"<header class='modal-header header'><h2 class='modal-title title'>" +
			title + "</h2><button type='button' class='reset' title='" +
			i18nDict.reset +
			"'> <span class='glyphicon glyphicon-refresh'></span><span class='wb-inv'>" +
			i18nDict.reset +
			"</span></button>" +
			"<button type='button' class='minimize' title='" +
			i18nDict.minimize +
			"'><span class='glyphicon glyphicon-chevron-down'></span><span class='wb-inv'>" +
			i18nDict.minimize +
			"</span></button></header>" );
		$container.append( "<form class='modal-body body' method='GET'></form>" );

		var $form = $( ".body", $container );
		$form.append( "<div class='conversation'><section class='history' aria-live='assertive'><h3 class='wb-inv'>" + i18nDict.conversation + "</h3></section><section class='reply'><h3 class='wb-inv'>" + i18nDict.reply + "</h3><div class='inputs-zone'></div></section><div class='form-params'></div></div>" );
		$form.append(
			"<section class='controls'><h3 class='wb-inv'>" +
			i18nDict.controls + "</h3><div class='row'><div class='col-xs-12'><button class='btn btn-primary btn-block btn-send' type='button'>" +
			i18nDict.send + "</button></div></div><div class='row'><div class='col-xs-12 text-center mrgn-tp-sm'><a href='#" +
			componentName + "-basic' class='btn btn-sm btn-link basic-link' role='button'>" +
			i18nDict.toggleBasic + "</a></div></div></section>" );

		$form.attr( "name", datainput.header.name + "-chat" );
		$form.attr( "method", datainput.header.method );
		sendButton = $( ".btn-send ", $form ).html();
	},

	/**
	 * Build Basic Form from JSON
	 * @method buildBasicForm
	 * @param {jQuery DOM element} $selector Element to which the form will be appended
	 * @param {Object} data Data used by the form to build itself
	 */
	buildBasicForm = function( $selector, data ) {
		$selector.html( "" );

		var h2 = "<h2>" + data.header.title + "</h2>",
			intro = "<p>" + data.header.instructions + "</p>",
			btn = ">" + data.header.sendButton + "</button>";

		if ( typeof data.header.form.title !== undefined ) {
			h2 = "<h2 data-" + replacement + "='" + data.header.title + "'>" + data.header.form.title + "</h2>";
		}
		$selector.append( h2 + "<form class='mrgn-bttm-xl' action='" + data.header.defaultDestination + "' name='" + data.header.name + "' method='" + ( data.header.method ? data.header.method : "GET" ) + "'></form>" );

		var $basicForm = $( "form", $selector );

		if ( typeof data.header.form.instructions !== undefined ) {
			intro = "<p data-" + replacement + "='" + data.header.instructions + "'>" + data.header.form.instructions + "</p>";
		}
		$basicForm.append( "<p class='wb-chtwzrd-greetings wb-inv'>" + data.header.greetings + "</p>" + intro );

		$.each( data.questions, function( key, value ) {
			var randID = wb.getId(),
				legend = "<legend>" + value.label + "</legend>";

			if ( typeof value.formLabel !== undefined && value.formLabel ) {
				legend = "<legend data-" + replacement + "='" + value.label + "'>" + value.formLabel + "</legend>";
			}

			$basicForm.append( "<fieldset id='" + key + "' class='" + randID + "'>" + legend + "<ul class='list-unstyled mrgn-tp-md'></ul></fieldset>" );

			var $thisQ = $( "." + randID, $basicForm );

			$.each( value.choices, function( index, ivalue ) {
				randID = wb.getId();
				$( "ul", $thisQ ).append( "<li><label><input type='" + value.input + "' value='" + ivalue.value + "' id ='" + randID + "' name='" + value.name + "' data-value='" + ivalue.content + "' /> <span>" + ivalue.content + "</span>" );
				$( "#" + randID, $thisQ ).attr( "data-" + componentName + "-next", ivalue.next );
				if ( typeof ivalue.url !== undefined && ivalue.url ) {
					$( "#" + randID, $thisQ ).attr( "data-" + componentName + "-url", ivalue.url );
				}
			} );
		} );

		if ( typeof data.header.form.sendButton !== undefined ) {
			btn = " data-" + replacement + "='" + data.header.sendButton + "'>" + data.header.form.sendButton + "</button>";
		}
		$basicForm.append( "<p class='wb-chtwzrd-farewell wb-inv'>" + data.header.farewell + "</p><br/><button type='submit' class='btn btn-sm btn-primary'" + btn );

		if ( typeof datainput.header.first === "undefined" || !datainput.header.first ) {
			datainput.header.first = $( "fieldset", $basicForm ).first().attr( "id" );
		}
	},

	/**
	 * Toggle between form and wizard
	 * @method toggleExperience
	 * @param {jQuery DOM element} $selector Element to which the experience will be active
	 * @param {String} toggle Give context to the toggle, wether it is form or wizard
	 */
	toggleExperience = function( $selector, toggle ) {

		// Redraw chat wizard and start over
		if ( toggle === "wizard" ) {
			var $conversation = $( ".conversation", $selector );

			// Clear time outs in case they're still active
			window.clearTimeout( waitTimeout );
			window.clearTimeout( inputsTimeout );

			// Reset to default values
			waitingForAnswer = false;
			redirurl = datainput.header.defaultDestination;
			first = datainput.header.first;
			intro = ( datainput.header.instructions ? datainput.header.instructions : "" );
			current = datainput.questions[ first ];

			$( ".history, .form-params", $conversation ).html( "" );
			$( ".btn-send", $selector ).attr( "type", "button" ).html( sendButton );
			$( ".history", $conversation ).attr( "aria-live", "assertive" );

			appendInteraction( $( ".body", $selector ) );
		} else {

			// Redraw form if it's set to dynamic
			var $allQuestions = $( "fieldset", $selector );
			if ( formType === "dynamic" ) {
				$allQuestions.not( ":first" ).hide();
				$( "input", $allQuestions ).prop( "checked", false );
			}
		}
	},

	/**
	 * Add new question from bot and add inputs accordingly
	 * @method appendInteraction
	 * @param {jQuery DOM element} $selector Element to which the question and choices will be appended
	 */
	appendInteraction = function( $selector ) {
		var $dropSpot = $( ".history", $selector ),
			$inputsSpot = $( ".inputs-zone", $selector ),
			$chtwzrdConvo = $( ".conversation", $selector ),
			$btnnext = $( ".btn-send", $selector ),
			markup = ( first !== "" || intro !== "" || current === "last" ? "p" : "h4" );

		waitingForAnswer = true;
		$btnnext.prop( "disabled", true );

		$inputsSpot.html( "" );
		$dropSpot.append( "<div class='row mrgn-bttm-md'><div class='col-xs-9'><" + markup + " class='mrgn-tp-0 mrgn-bttm-0'><span class='avatar'></span><span class='question'></span></" + markup + "></div></div>" );

		var $lastQuestion = $( ".question:last", $dropSpot );

		// Faking delay and type time
		waitingBot( $lastQuestion );

		// Determine waiting time length
		var waitDelay = timeValues.longDelay;

		if ( isInline && first !== "" ) {
			waitDelay = timeValues.xLongDelay;
		} else if ( first === "" && intro !== "" ) {
			waitDelay = timeValues.xxLongDelay;
		}

		waitTimeout = setTimeout( function() {

			if ( first !== "" ) {

				// Show greetings on first occurence
				$lastQuestion.html( datainput.header.greetings );
				first = "";
				appendInteraction( $selector );
			} else if ( intro !== "" ) {

				// If intro is provided, show it before the first question
				$lastQuestion.html( intro );
				intro = "";
				appendInteraction( $selector );
			} else if ( current === "last" ) {

				// If it is the last question, then change the button to submit the form
				$lastQuestion.html( datainput.header.farewell );
				$btnnext.attr( "type", "submit" ).prop( "disabled", false ).html( datainput.header.sendButton + "&nbsp;<span class='glyphicon glyphicon-chevron-right small'></span>" );
				$selector.attr( "action", redirurl );
			} else {

				// On every other occurences, append the question and its possible answers
				$lastQuestion.html( current.label );
				current.input = "radio";
				inputsTimeout = setTimeout( function() {
					$inputsSpot.append( "<fieldset><legend class='wb-inv'>" + current.label + "</legend><div class='row'><div class='col-xs-12'><ul class='list-unstyled mrgn-tp-sm choices'></ul></div></div></fieldset>" );
					for ( var i = 0; i < current.choices.length; i++ ) {
						var iQuestion = current.choices[ i ];
						$( ".choices", $inputsSpot ).append( "<li><label><input type='" + current.input + "' value='" + iQuestion.value + "' name='" + current.name + "' data-" + componentName + "-next='" + iQuestion.next + "'" + ( typeof iQuestion.url === "undefined" ? "" : " data-" + componentName + "-url='" + iQuestion.url + "'" ) + ( !i ? "checked " : "" ) + "/> <span>" + iQuestion.content + "</span></label></li>" );
					}
					$btnnext.prop( "disabled", false );

					// Reposition viewport to where the action is
					var tresholdHeight = $chtwzrdConvo[ 0 ].scrollHeight,
						$reply = $( ".reply", $selector );

					if ( $reply.length && ( $reply.outerHeight() + $lastQuestion.outerHeight() > $chtwzrdConvo.innerHeight() ) ) {
						tresholdHeight = $dropSpot[ 0 ].scrollHeight - $lastQuestion.outerHeight() - 42;
					}
					$chtwzrdConvo.scrollTop( tresholdHeight );
				}, timeValues.mediumDelay );
			}
			$chtwzrdConvo.scrollTop( $chtwzrdConvo[ 0 ].scrollHeight );
		}, waitDelay );
	},

	/**
	 * Add reply from human and calls next question
	 * @method appendReply
	 * @param {jQuery DOM element} $selector Element to which the answer will be appended
	 * @param {Object} answerObj The answer selected and cooked
	 */
	appendReply = function( $selector, answerObj ) {
		var randID = wb.getId(),
			$dropSpot = $( ".history", $selector );

		$dropSpot.append( "<div class='row mrgn-bttm-md'><div class='col-xs-9 col-xs-offset-3'><div class='message text-right pull-right' id='" + randID + "'><p class='mrgn-bttm-0'><span class='wb-inv'>" + i18nDict.answer + " </span>" + answerObj.value + "</p></div></div></div>" );

		// Append hidden input for information to carry over on submit
		$( ".form-params", $selector ).append( "<input type='hidden' name='" + answerObj.name + "' value='" + answerObj.val + "' data-value='" + answerObj.value + "' />" );

		waitingForAnswer = false;
		if ( answerObj.url !== "" ) {
			redirurl = answerObj.url;
		}

		// Find next question
		var next = answerObj.qNext,
			$reply = $( "#" + randID, $dropSpot );

		if ( next === "none" ) {
			current = "last";
		} else {
			current = datainput.questions[ next ];
		}
		$( ".btn-send", $selector ).prop( "disabled", true );
		$reply.attr( "tabindex", "0" );

		// Clear the inputs zone after an intuitive delay
		waitTimeout = setTimeout( function() {
			$( ".inputs-zone", $selector ).remove( "fieldset" );
			$reply.focus();
			$reply.removeAttr( "tabindex" );
			appendInteraction( $selector );
		}, timeValues.shortDelay );
	},

	/**
	 * Waiting for the bot to type animation
	 * @method waitingBot
	 * @param {jQuery DOM element} $selector Element to which the typing loader will be appended
	 */
	waitingBot = function( $selector ) {
		$selector.html( "<span class='loader-typing' aria-label='" + i18nDict.waiting + "'><span class='loader-dot dot1'></span><span class='loader-dot dot2'></span><span class='loader-dot dot3'></span></span>" );
	},

	/**
	 * Take the replacement as value if provided
	 * @method replaceForWizard
	 * @param {jQuery DOM element} $selector Element would potentially be replaced
	 * @param {String} formerValue Original value to replace
	 * @returns {String} Value that will be used, either replaced or not
	 */
	replaceForWizard = function( $selector, formerValue ) {

		// Data attribute for value replacement
		var r = $selector.data( replacement );

		return ( typeof r !== undefined && r ? r : formerValue );
	},

	/**
	 * Cooks an answer object that is suitable for all parties
	 * @method cookAnswerObj
	 * @param {jQuery DOM element} $selector Element to which the typing loader will be appended
	 * @returns {Object} A cooked answer
	 */
	cookAnswerObj = function( $selector ) {
		var next = $selector.data( componentName + "-next" );
		var url = $selector.data( componentName + "-url" );
		return {
			qNext: next,
			name: $selector.attr( "name" ),
			val: $selector.val(),
			url: ( typeof url !== undefined && url ? url : "" ),
			value: $selector.next().html()
		};
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector + ".provisional", init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-doaction",
	selector = "a[data-" + componentName + "],button[data-" + componentName + "]",
	runActions = "do.wb-actionmng",
	$document = wb.doc;

$document.on( "click", selector, function( event ) {

	var elm = event.target,
		$elm = $( elm );

	// Get the selector when click on a child of it, like click on a figure wrapped in a anchor with doaction.
	if ( event.currentTarget !== event.target ) {
		$elm = $elm.parentsUntil( "main", selector );
		elm = $elm[ 0 ];
	}

	// Ensure that we only execute for anchor and button
	if ( elm.nodeName === "BUTTON" || elm.nodeName === "A" ) {

		if ( !elm.id ) {
			elm.id = wb.getId();
		}

		if ( wb.isReady ) {

			// Execute actions if any.
			$elm.trigger( {
				type: runActions,
				actions: wb.getData( $elm, componentName )
			} );
		} else {

			// Execution of the action after WET will be ready
			$document.one( "wb-ready.wb", function( ) {
				$elm.trigger( {
					type: runActions,
					actions: wb.getData( $elm, componentName )
				} );
			} );
		}
		return false;
	}
} );


} )( jQuery, window, wb );

( function( $, document, wb ) {
"use strict";

var componentName = "wb-fieldflow",
	selector = "." + componentName,
	formComponent = componentName + "-form",
	subComponentName = componentName + "-sub",
	crtlSelectClass = componentName + "-init",
	crtlSelectSelector = "." + crtlSelectClass,
	basenameInput = componentName + wb.getId(),
	basenameInputSelector = "[name^=" + basenameInput + "]",
	labelClass = componentName + "-label",
	headerClass = componentName + "-header",
	selectorForm = "." + formComponent,
	initEvent = "wb-init" + selector,
	drawEvent = "draw" + selector,
	actionEvent = "action" + selector,
	submitEvent = "submit" + selector,
	submitedEvent = "submited" + selector,
	readyEvent = "ready" + selector,
	cleanEvent = "clean" + selector,
	resetActionEvent = "reset" + selector,
	createCtrlEvent = "createctrl" + selector,
	registerJQData = componentName + "-register", // Data that contain all the component registered (to the form element and component), used for executing action upon submit
	registerHdnFld = componentName + "-hdnfld",
	configData = componentName + "-config",
	pushJQData =  componentName + "-push",
	submitJQData =  componentName + "-submit", // List of action to perform upon form submission
	actionData =  componentName + "-action", // temp for code transition
	originData =  componentName + "-origin", // To carry the plugin origin ID, any implementation of "createCtrlEvent" must set that option.
	sourceDataAttr =  "data-" + componentName + "-source",
	flagOptValueData =  componentName + "-flagoptvalue",
	$document = wb.doc,
	defaults = {
		toggle: {
			stateOn: "visible", // For toggle plugin
			stateOff: "hidden"  // For toggle plugin
		},
		i18n:
		{
			"en": {
				btn: "Continue", // Action button
				defaultsel: "Make your selection...", // text use for the first empty select
				required: "required"// text for the required label
			},
			"fr": {
				btn: "Allez",
				defaultsel: "Sélectionnez dans la liste...", // text use for the first empty select
				required: "obligatoire" // text for the required label
			}
		},
		action: "ajax",
		prop: "url"
	},
	fieldflowActionsEvents = [
		[
			"redir",
			"query",
			"ajax",
			"addClass",
			"removeClass",
			"removeClass",
			"append",
			"tblfilter",
			"toggle"
		].join( "." + actionEvent + " " ) + "." + actionEvent,
		[
			"ajax",
			"toggle",
			"redir",
			"addClass",
			"removeClass"
		].join( "." + submitEvent + " " ) + "." + submitEvent,
		[
			"tblfilter",
			componentName
		].join( "." + drawEvent + " " ) + "." + drawEvent,
		[
			"select",
			"checkbox",
			"radio"
		].join( "." + createCtrlEvent + " " ) + "." + createCtrlEvent
	].join( " " ),

	/**
	* @method init
	* @param {jQuery Event} event Event that triggered the function call
	*/
	init = function( event ) {
		var elm = wb.init( event, componentName, selector ),
			$elm, elmId,
			wbDataElm,
			config,
			i18n;

		if ( elm ) {
			$elm = $( elm );
			elmId = elm.id;

			// Set default i18n information
			if ( defaults.i18n[ wb.lang ] ) {
				defaults.i18n = defaults.i18n[ wb.lang ];
			}

			// Extend this data with the contextual default
			wbDataElm = wb.getData( $elm, componentName );
			if ( wbDataElm && wbDataElm.i18n ) {
				wbDataElm.i18n = $.extend( {}, defaults.i18n, wbDataElm.i18n );
			}
			config = $.extend( {}, defaults, wbDataElm );

			if ( config.defaultIfNone && !$.isArray( config.defaultIfNone ) ) {
				config.defaultIfNone = [ config.defaultIfNone ];
			}

			// Set the data to the component, if other event need to have access to it.
			$elm.data( configData, config );
			i18n = config.i18n;

			// Add startWith function (ref: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/startsWith)
			if ( !String.prototype.startsWith ) {
				String.prototype.startsWith = function( searchString, position ) {
					position = position || 0;
					return this.substr( position, searchString.length ) === searchString;
				};
			}

			// Transform the list into a select, use the first paragrap content for the label, and extract for i18n the name of the button action.
			var bodyID = wb.getId(),
				stdOut,
				formElm,
				$form,
				btnStyle = config.btnStyle && [ "default", "primary", "success", "info", "warning", "danger", "link" ].indexOf( config.btnStyle ) >= 0 ? config.btnStyle : "default",
				showLabel = !!config.showLabel;

			if ( config.noForm ) {
				stdOut = "<div class='mrgn-tp-md'><div id='" + bodyID + "'></div></div>";

				// Need to add the class="formComponent" to the div that wrap the form element.
				formElm = elm.parentElement;
				while ( formElm.nodeName !== "FORM" ) {
					formElm = formElm.parentElement;
				}
				$( formElm.parentElement ).addClass( formComponent );
			} else if ( config.inline && !config.renderas ) {
				stdOut = "<div class='wb-frmvld mrgn-bttm-md " + formComponent + "'><form><div class='input-group'><div id='" + bodyID + "'>";
				stdOut = stdOut + "</div><span class='input-group-btn" + ( showLabel ? " align-bottom" : "" ) + "'><input type=\"submit\" value=\"" + wb.escapeAttribute( i18n.btn ) + "\" class=\"btn btn-" + btnStyle + "\" /></span></div> </form></div>";
			} else {
				stdOut = "<div class='wb-frmvld " + formComponent + "'><form><div id='" + bodyID + "'>";
				stdOut = stdOut + "</div><input type=\"submit\" value=\"" + wb.escapeAttribute( i18n.btn ) + "\" class=\"btn btn-primary mrgn-bttm-md\" /> </form></div>";
			}
			$elm.addClass( "hidden" );
			stdOut = $( stdOut );
			$elm.after( stdOut );

			if ( !config.noForm ) {
				formElm = stdOut.find( "form" );
				stdOut.trigger( "wb-init.wb-frmvld" );
			}

			$form = $( formElm );

			// Register this plugin within the form, this is to manage form submission
			pushData( $form, registerJQData, elmId );

			if ( !config.outputctnrid ) { // Output container ID
				config.outputctnrid = bodyID;
			}

			if ( !config.source ) {
				config.source = elm; // We assume th container have the source
			}

			if ( !config.srctype ) {
				config.srctype = componentName;
			}

			config.inline = !!config.inline;
			config.gcChckbxrdio = !!config.gcChckbxrdio;

			// Trigger the drop down loading
			$elm.trigger( config.srctype + "." + drawEvent, config );

			// Do requested DOM manipulation
			if ( config.unhideelm ) {
				$( config.unhideelm ).removeClass( "hidden" );
			}
			if ( config.hideelm ) {
				$( config.hideelm ).addClass( "hidden" );
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );

			if ( config.ext ) {
				config.form = $form.get( 0 );
				$elm.trigger( config.ext + "." + readyEvent, config );
			}
		}
	},
	pushData = function( $elm, prop, data, reset ) {
		var dtCache = $elm.data( prop );
		if ( !dtCache || reset ) {
			dtCache = [];
		}
		dtCache.push( data );
		return $elm.data( prop, dtCache );
	},
	subRedir = function( event, data ) {

		var form = data.form,
			url = data.url;

		if ( url ) {
			form.setAttribute( "action", url );
		}
	},
	actQuery = function( event, data ) {
		var $selectElm = data.$selElm,
			fieldName = data.name,
			fieldValue = data.value;

		if ( fieldName ) {
			data.provEvt.setAttribute( "name", fieldName );
		}
		if ( typeof fieldValue === "string" ) {
			$selectElm.val( fieldValue );
		}

		// Add a flag to know the option value was inserted
		$selectElm.attr( "data-" + flagOptValueData, flagOptValueData );
	},
	actAjax = function( event, data ) {
		var provEvt = data.provEvt,
			$container;

		if ( !data.live ) {
			data.preventSubmit = true;
			pushData( $( provEvt ), submitJQData, data );
		} else {
			if ( !data.container ) {

				// Create the container next to component
				$container = $( "<div></div>" );
				$( provEvt.parentNode ).append( $container );
				data.container = $container.get( 0 );
			}
			$( event.target ).trigger( "ajax." + submitEvent, data );
		}
	},
	subAjax = function( event, data ) {
		var $container, containerID, ajxType,
			cleanSelector = data.clean;

		if ( !data.container ) {
			containerID = wb.getId();
			$container = $( "<div id='" + containerID + "'></div>" );
			$( data.form ).append( $container );
			cleanSelector = "#" + containerID;
		} else {
			$container = $( data.container );
		}

		if ( cleanSelector ) {
			$( data.origin ).one( cleanEvent, function( ) {
				$( cleanSelector ).empty();
			} );
		}

		if ( data.trigger ) {
			$container.attr( "data-trigger-wet", "true" );
		}

		ajxType = data.type ? data.type : "replace";
		$container.attr( "data-ajax-" + ajxType, data.url );

		$container.one( "wb-contentupdated", function( event, data ) {
			var updtElm = event.currentTarget,
				trigger = updtElm.getAttribute( "data-trigger-wet" );

			updtElm.removeAttribute( "data-ajax-" + data[ "ajax-type" ] );
			if ( trigger ) {
				$( updtElm )
					.find( wb.allSelectors )
					.addClass( "wb-init" )
					.filter( ":not(#" + updtElm.id + " .wb-init .wb-init)" )
					.trigger( "timerpoke.wb" );
				updtElm.removeAttribute( "data-trigger-wet" );
			}
		} );
		$container.trigger( "wb-update.wb-data-ajax" );
	},
	subToggle = function( event, data ) {
		var $origin = $( data.origin ),
			config = $( event.target ).data( configData ),
			toggleOpts = data.toggle;


		// For simple toggle call syntax
		if ( toggleOpts && typeof toggleOpts === "string" ) {
			toggleOpts = { selector: toggleOpts };
		}
		toggleOpts = $.extend( {}, toggleOpts, config.toggle );

		// Doing an add and remove "wb-toggle" class in order to avoid the click event added by toggle plugin
		$origin.addClass( "wb-toggle" );
		$origin.trigger( "toggle.wb-toggle", toggleOpts );

		// Set the cleaning task
		toggleOpts.type = "off";
		$origin.one( cleanEvent, function( ) {
			$origin.addClass( "wb-toggle" );
			$origin.trigger( "toggle.wb-toggle", toggleOpts );
			$origin.removeClass( "wb-toggle" );
		} );
	},
	actAppend = function( event, data ) {
		if ( event.namespace === actionEvent ) {
			var srctype = data.srctype ? data.srctype : componentName;
			data.container = data.provEvt.parentNode.id;
			if ( !data.source ) {
				throw "A source is required to append a field flow control.";
			}
			$( event.currentTarget ).trigger( srctype + "." + drawEvent, data );
		}
	},
	actTblFilter = function( event, data ) {
		if ( event.namespace === actionEvent ) {
			var sourceSelector = data.source,
				$datatable = $( sourceSelector ).dataTable( { "retrieve": true } ).api(),
				$dtSelectedColumn,
				column = data.column,
				colInt = parseInt( column, 10 ),
				regex = !!data.regex,
				smart = ( !data.smart ) ? true : !!data.smart,
				caseinsen = ( !data.caseinsen ) ? true : !!data.caseinsen;

			column = ( colInt === true ) ? colInt : column;

			$dtSelectedColumn = $datatable.column( column );

			$dtSelectedColumn.search( data.value, regex, smart, caseinsen ).draw();

			// Add a clean up task
			$( data.provEvt ).one( cleanEvent, function( ) {
				$dtSelectedColumn.search( "" ).draw();
			} );

		}
	},
	drwTblFilter = function( event, data ) {
		if ( event.namespace === drawEvent ) {
			var selColumn = data.column, // (integer/datatable column selector)
				csvExtract = data.csvextract, // (true|false) assume items are in CSV format instead of being inside "li" elements
				$column,
				sourceSelector = data.source,
				$source = $( sourceSelector ),
				$datatable,
				arrData, $listItem,
				i, i_len,
				j, j_len,
				items = [ ],
				cur_itm,
				prefLabel = data.label,
				defaultSelectedLabel = data.defaultselectedlabel,
				lblselector = data.lblselector,
				filterSequence = data.fltrseq ? data.fltrseq : [ ],
				limit = data.limit ? data.limit : 10,
				firstFilterSeq,
				actionItm, filterItm,
				renderas;

			// Check if the datatable has been loaded, if not we will wait until it is.
			if ( !$source.hasClass( "wb-tables-inited" ) ) {
				$source.one( "wb-ready.wb-tables", function() {
					$( event.target ).trigger( "tblfilter." + drawEvent, data );
				} );
				return false;
			}
			$datatable = $source.dataTable( { "retrieve": true } ).api();

			if ( $datatable.rows( { "search": "applied" } ).data().length <= limit  ) {
				return true;
			}

			renderas = data.renderas ? data.renderas : "select"; // Default it will render as select

			if ( !selColumn && filterSequence.length ) {
				cur_itm = filterSequence.shift();
				if ( !cur_itm.column ) {
					throw "Column is undefined in the filter sequence";
				}
				selColumn = cur_itm.column;
				csvExtract = cur_itm.csvextract;
				defaultSelectedLabel = cur_itm.defaultselectedlabel;
				prefLabel = cur_itm.label;
				lblselector = cur_itm.lblselector;
			}

			$column = $datatable.column( selColumn, { "search": "applied" } );

			// Get the items
			if ( csvExtract ) {
				arrData = $column.data();
				for ( i = 0, i_len = arrData.length; i !== i_len; i += 1 ) {
					items = items.concat( arrData[ i ].split( "," ) );
				}
			} else {
				arrData = $column.nodes();
				for ( i = 0, i_len = arrData.length; i !== i_len; i += 1 ) {
					$listItem = $( arrData[ i ] ).find( "li" );
					for ( j = 0, j_len = $listItem.length; j !== j_len; j += 1 ) {
						items.push( $( $listItem[ j ] ).text() );
					}
				}
			}

			items = items.sort().filter( function( item, pos, ary ) {
				return !pos || item !== ary[ pos - 1 ];
			} );

			var elm = event.target,
				$elm = $( elm ),
				itemsToCreate = [ ],
				pushAction = data.actions ? data.actions : [ ];

			if ( filterSequence.length ) {
				firstFilterSeq = filterSequence[ 0 ];
				filterItm = {
					action: "append",
					srctype: "tblfilter",
					source: sourceSelector,
					renderas: firstFilterSeq.renderas ? firstFilterSeq.renderas : renderas,
					fltrseq: filterSequence,
					limit: limit
				};
			}
			for ( i = 0, i_len = items.length; i !== i_len; i += 1 ) {
				cur_itm = items[ i ];
				actionItm = {
					label: cur_itm,
					actions: [
						{ // Set an action upon item selection
							action: "tblfilter",
							source: sourceSelector,
							column: selColumn,
							value: cur_itm
						}
					]
				};
				if ( filterItm ) {
					actionItm.actions.push( filterItm );
				}
				itemsToCreate.push( actionItm );
			}

			if ( !prefLabel ) {
				prefLabel = $column.header().textContent;
			}

			if ( !data.outputctnrid ) {
				data.outputctnrid = data.provEvt.parentElement.id;
			}

			$elm.trigger( renderas + "." + createCtrlEvent, {
				actions: pushAction,
				source: $source.get( 0 ),
				outputctnrid: data.outputctnrid,
				label: prefLabel,
				defaultselectedlabel: defaultSelectedLabel,
				lblselector: lblselector,
				items: itemsToCreate,
				inline: data.inline,
				gcChckbxrdio: data.gcChckbxrdio
			} );

		}
	},
	drwFieldflow = function( event, data ) {
		if ( event.namespace === drawEvent ) {
			var elm = event.target,
				$elm = $( elm ),
				wbDataElm,
				$source = $( data.source ),
				source = $source.get( 0 ),
				$labelExplicit, $firstChild,
				labelSelector = data.lblselector || "." + labelClass,
				labelTxt,
				itmSelector = data.itmselector || "ul:first() > li", $items,
				actions,
				renderas;

			// Extend if it is a sub-component
			if ( $source.hasClass( subComponentName ) ) {
				wbDataElm = wb.getData( $source, componentName );
				$source.data( configData, wbDataElm );
				data = $.extend( {}, data, wbDataElm );
			}

			actions = data.actions || [ ];
			renderas = data.renderas ? data.renderas : "select"; // Default it will render as select

			// Check if the first node is a div and contain the label.
			if ( !source.id ) {
				source.id = wb.getId();
			}
			$firstChild = $source.children().first();

			if ( !$firstChild.hasClass( headerClass ) ) {

				// Only use what defined as the label, nothing else
				$labelExplicit = $firstChild.find( labelSelector );
				if ( $labelExplicit.length ) {
					labelTxt = $labelExplicit.html();
				} else {
					labelTxt = $source.find( "> p" ).html();
				}
				labelSelector = null; // unset the label selector because it not needed for the control creation
			} else {
				labelTxt = $firstChild.html();
				itmSelector = "." + headerClass + " + " + itmSelector;
			}

			$items = getItemsData( $source.find( itmSelector ) );

			if ( !data.outputctnrid ) {
				data.outputctnrid = data.provEvt.parentElement.id;
			}

			$elm.trigger( renderas + "." + createCtrlEvent, {
				actions: actions,
				source: source,
				attributes: data.attributes,
				outputctnrid: data.outputctnrid,
				label: labelTxt,
				lblselector: labelSelector,
				defaultselectedlabel: data.defaultselectedlabel,
				required: !data.isoptional,
				noreqlabel: data.noreqlabel,
				items: $items,
				inline: data.inline,
				gcChckbxrdio: data.gcChckbxrdio,
				showLabel: data.showLabel
			} );
		}
	},
	ctrlSelect = function( event, data ) {
		var bodyId = data.outputctnrid,
			$body = $( "#" + bodyId ),
			actions = data.actions,
			lblselector = data.lblselector,
			isReq = !!data.required,
			useReqLabel = !data.noreqlabel,
			items = data.items,
			elm = event.target,
			$elm = $( elm ),
			source = data.source,
			attributes = data.attributes,
			i18n = $elm.data( configData ).i18n,
			autoID = wb.getId(),
			labelPrefix = "<label for='" + autoID + "'",
			labelInvisible = ( data.inline && !data.showLabel ) ? " wb-inv" : "",
			labelSuffix = "</span>",
			$out, $tmpLabel,
			selectOut, $selectOut,
			defaultSelectedLabel = ( data.defaultselectedlabel || ( data.defaultselectedlabel === false && !data.live ) ) ? data.defaultselectedlabel : i18n.defaultsel,
			i, i_len, j, j_len, cur_itm;

		// Create the label
		if ( isReq && useReqLabel ) {
			labelPrefix += " class='required" + labelInvisible + "'";
			labelSuffix += " <strong class='required'>(" + i18n.required + ")</strong>";
		}
		labelPrefix += "><span class='field-name'>";
		labelSuffix += "</label>";

		if ( !lblselector ) {
			$out = $( labelPrefix + data.label + labelSuffix );
		} else {
			$out = $( "<div>" + data.label + "</div>" );
			$tmpLabel = $out.find( lblselector );
			$tmpLabel.html( labelPrefix + $tmpLabel.html() + labelSuffix );
		}

		// Create the select
		selectOut = "<select id='" + autoID + "' name='" + basenameInput + autoID + "' class='full-width form-control mrgn-bttm-md " + crtlSelectClass + "' data-" + originData + "='" + elm.id + "' " + sourceDataAttr + "='" + source.id + "'";
		if ( isReq ) {
			selectOut += " required";
		}
		if ( attributes && typeof attributes === "object" ) {
			for ( i in attributes ) {
				if ( Object.prototype.hasOwnProperty.call( attributes, i ) ) {
					selectOut += " " + i + "='" + attributes[ i ] + "'";
				}
			}
		}
		selectOut += ">";

		// Add a empty default if not false.
		if ( defaultSelectedLabel ) {
			selectOut += "<option value=''>" + defaultSelectedLabel + "</option>";
		}
		for ( i = 0, i_len = items.length; i !== i_len; i += 1 ) {
			cur_itm = items[ i ];

			// Make the first item selected, if no default label
			if ( !( i || defaultSelectedLabel ) ) {
				cur_itm.isSelected = true;
			}

			if ( !cur_itm.group ) {
				selectOut += buildSelectOption( cur_itm );
			} else {

				// We have a group of sub-items, the cur_itm are a group
				selectOut += "<optgroup label='" + cur_itm.label + "'>";
				j_len = cur_itm.group.length;
				for ( j = 0; j !== j_len; j += 1 ) {
					selectOut += buildSelectOption( cur_itm.group[ j ] );
				}
				selectOut += "</optgroup>";
			}
		}
		selectOut += "</select>";
		$selectOut = $( selectOut );

		$body.append( $out ).append( $selectOut );

		// Set post action if any
		if ( actions && actions.length > 0 ) {
			$selectOut.data( pushJQData, actions );
		}

		// Register this control
		pushData( $elm, registerJQData, autoID );

		// If selected default, run a change events
		if ( !defaultSelectedLabel ) {
			$selectOut.trigger( "change" );
		}
	},
	ctrlChkbxRad = function( event, data ) {
		var bodyId = data.outputctnrid,
			actions = data.actions,
			lblselector = data.lblselector,
			isReq = !!data.required,
			useReqLabel = !data.noreqlabel,
			items = data.items,
			elm = event.target,
			$elm = $( elm ),
			source = data.source,
			i18n = $elm.data( configData ).i18n,
			attributes = data.attributes,
			ctrlID = wb.getId(),
			fieldsetPrefix = "<legend",
			fieldsetSuffix = "</span>",
			fieldsetHTML = "<fieldset id='" + ctrlID + "' data-" + originData + "='" + elm.id + "' " + sourceDataAttr + "='" + source.id + "' class='" + crtlSelectClass + " chkbxrdio-grp mrgn-bttm-md'",
			$out,
			$tmpLabel, $cloneLbl, $prevContent,
			radCheckOut = "",
			typeRadCheck = data.typeRadCheck,
			isInline = data.inline,
			isGcChckbxrdio = data.gcChckbxrdio,
			fieldName = basenameInput + ctrlID,
			i, i_len, j, j_len, cur_itm, in_ul;

		if ( attributes && typeof attributes === "object" ) {
			for ( i in attributes ) {
				if ( Object.prototype.hasOwnProperty.call( attributes, i ) ) {
					fieldsetHTML += " " + i + "='" + attributes[ i ] + "'";
				}
			}
		}
		$out = $( fieldsetHTML + "></fieldset>" );

		if ( isInline ) {
			$out.addClass( "form-inline" );
		}

		// Apply GC Checkbox radio pattern if gcChckbxrdio is provided
		if ( isGcChckbxrdio ) {
			$out.addClass( "gc-chckbxrdio" );
		}

		// Create the legend
		if ( isReq && useReqLabel ) {
			fieldsetPrefix += " class='required'";
			fieldsetSuffix += " <strong class='required'>(" + i18n.required + ")</strong>";
		}
		fieldsetPrefix += ">";
		fieldsetSuffix += "</legend>";
		if ( !lblselector ) {
			$out.append( $( fieldsetPrefix + data.label + fieldsetSuffix ) );
		} else {
			$cloneLbl = $( "<div>" + data.label + "</div>" );
			$tmpLabel = $cloneLbl.find( lblselector );
			$out.append( ( fieldsetPrefix + $tmpLabel.html() + fieldsetSuffix ) )
				.append( $tmpLabel.nextAll() );
			$prevContent = $tmpLabel.prevAll();
		}

		// Put checkboxes in a list if not inline
		if ( isGcChckbxrdio && !isInline ) {
			in_ul = "closed";
		}

		// Create radio
		for ( i = 0, i_len = items.length; i !== i_len; i += 1 ) {
			cur_itm = items[ i ];

			if ( !cur_itm.group ) {

				if ( i === 0 && in_ul === "closed" ) {
					radCheckOut += "<ul class='list-unstyled lst-spcd-2'>";
					in_ul = "open";
				}
				radCheckOut += buildCheckboxRadio( cur_itm, fieldName, typeRadCheck, isInline, isGcChckbxrdio, isReq );
			} else {

				// We have a group of sub-items, the cur_itm are a group
				if ( in_ul === "open" ) {
					radCheckOut += "</ul>";
					in_ul = "closed";
				}
				radCheckOut += "<p>" + cur_itm.label + "</p>";
				if ( in_ul === "closed" ) {
					radCheckOut += "<ul class='list-unstyled lst-spcd-2'>";
					in_ul = "open";
				}
				j_len = cur_itm.group.length;
				for ( j = 0; j !== j_len; j += 1 ) {
					radCheckOut += buildCheckboxRadio( cur_itm.group[ j ], fieldName, typeRadCheck, isInline, isGcChckbxrdio, isReq );
				}
			}
		}

		if ( in_ul === "open" ) {
			radCheckOut += "</ul>";
		}

		$out.append( radCheckOut );
		$( "#" + bodyId ).append( $out );
		if ( $prevContent ) {
			$out.before( $prevContent );
		}

		// Set post action if any
		if ( actions && actions.length > 0 ) {
			$out.data( pushJQData, actions );
		}

		// Register this control
		pushData( $elm, registerJQData, ctrlID );
	},
	getItemsData = function( $items, preventRecusive ) {
		var arrItems = $items.get(),
			i, i_len = arrItems.length, itmCached,
			itmLabel, itmValue, grpItem,
			j, j_len, childNodes, firstNode, childNode, $childNode, childNodeID,
			parsedItms = [],
			actions;

		for ( i = 0; i !== i_len; i += 1 ) {
			itmCached = arrItems[ i ];

			itmValue = "";
			grpItem = null;
			itmLabel = "";

			firstNode = itmCached.firstChild;
			childNodes = itmCached.childNodes;
			j_len = childNodes.length;

			if ( !firstNode ) {
				throw "You have a markup error, There may be an empyt <li> elements in your list.";
			}

			actions = [];

			// Is firstNode an anchor?
			if ( firstNode.nodeName === "A" ) {
				itmValue = firstNode.getAttribute( "href" );
				itmLabel = $( firstNode ).html();
				j_len = 1; // Force following elements to be ignored

				actions.push( {
					action: "redir",
					url: itmValue
				} );
			}

			// Iterate until we have found the labelClass or <ul> or element with subSelector or end of the array
			for ( j = 1; j !== j_len; j += 1 ) {
				childNode = childNodes[ j ];
				$childNode = $( childNode );

				// Sub plugin
				if ( $childNode.hasClass( subComponentName ) ) {
					childNodeID = childNode.id || wb.getId();
					childNode.id = childNodeID;
					itmValue = componentName + "-" + childNodeID;

					actions.push( {
						action: "append",
						srctype: componentName,
						source: "#" + childNodeID
					} );
					break;
				}

				// Grouping
				if ( childNode.nodeName === "UL" ) {
					if ( preventRecusive ) {
						throw "Recursive error, please check your code";
					}
					grpItem = getItemsData( $childNode.children(), true );
				}

				// Explicit label to use
				if ( $childNode.hasClass( labelClass ) ) {
					itmLabel = $childNode.html();
				}
			}

			if ( !itmLabel ) {
				itmLabel = firstNode.nodeValue;
			}

			// Set an id on the element
			if ( !itmCached.id ) {
				itmCached.id = wb.getId();
			}

			// Return the item parsed
			parsedItms.push( {
				"bind": itmCached.id,
				"label": itmLabel,
				"actions": actions,
				"group": grpItem
			} );
		}
		return parsedItms;
	},
	buildSelectOption = function( data ) {
		var label = data.label,
			out = "<option value='" + wb.escapeAttribute( label ) + "'";

		out += buildDataAttribute( data );

		if ( data.isSelected ) {
			out += " selected=selected";
		}

		out += ">" + label + "</option>";

		return out;
	},
	buildDataAttribute = function( data ) {
		var out = "",
			dataFieldflow = {};

		dataFieldflow.bind = data.bind || "";
		dataFieldflow.actions = data.actions || [ ];

		out += " data-" + componentName + "='" + JSON.stringify( dataFieldflow ) + "'";

		return out;
	},
	buildCheckboxRadio = function( data, fieldName, inputType, isInline, isGcChckbxrdio, isReq ) {
		var fieldID = wb.getId(),
			labelTxt = data.label,
			label = "<label for='" + fieldID + "'>",
			input = "<input id='" + fieldID + "' type='" + inputType + "' name='" + fieldName + "' value='" + wb.escapeAttribute( labelTxt ) + "'" + buildDataAttribute( data ),
			tag = !isInline && isGcChckbxrdio ? "li" : "div",
			out = "<" + tag + " class='" + inputType;

		if ( isReq ) {
			input += " required='required'";
		}
		input += " />";

		if ( isInline ) {
			out += " label-inline";
		}
		out += "'>";

		// Implicit pattern only if not inline and not using GC Chckbxrdio
		if ( !isInline && !isGcChckbxrdio ) {
			out += label + input + " " + labelTxt;
		} else {
			out += input + label + labelTxt;
		}

		out += "</label>" + "</" + tag + ">";

		return out;
	};

$document.on( resetActionEvent, selector + ", ." + subComponentName, function( event ) {
	var elm = event.target,
		$elm,
		settings,
		settingsReset,
		resetAction = [],
		i, i_len, i_cache, action, isLive;

	if ( elm === event.currentTarget ) {
		$elm = $( elm );
		settings = $elm.data( configData );

		if ( settings && settings.reset ) {
			settingsReset = settings.reset;

			if ( $.isArray( settingsReset ) ) {
				resetAction = settingsReset;
			} else {
				resetAction.push( settingsReset );
			}

			i_len = resetAction.length;
			for ( i = 0; i !== i_len; i += 1 ) {
				i_cache = resetAction[ i ];
				action = i_cache.action;
				if ( action ) {
					isLive = i_cache.live;
					if ( isLive !== false ) {
						i_cache.live = true;
					}
					$elm.trigger( action + "." + actionEvent, i_cache );
				}
			}
		}
	}
} );

// Load content after the user have choosen an option
$document.on( "change", selectorForm + " " + crtlSelectSelector, function( event ) {

	var elm = event.currentTarget,
		$elm = $( elm ),
		selCurrentElm, cacheAction,
		i, i_len, dtCached, dtCachedTarget,
		itmToClean = $elm.nextAll(), itm, idxItem,
		$orgin = $( "#" + elm.getAttribute( "data-" + originData ) ),
		$source = $( "#" + elm.getAttribute( sourceDataAttr ) ),
		lstIdRegistered = $orgin.data( registerJQData ),
		$optSel = $elm.find( ":checked", $elm ),
		form = $elm.get( 0 ).form;

	//
	// 1. Cleaning
	//
	i_len = itmToClean.length;
	if ( i_len ) {
		for ( i = i_len; i !== 0; i -= 1 ) {
			itm = itmToClean[ i ];
			if ( itm ) {
				idxItem = lstIdRegistered.indexOf( itm.id );
				if ( idxItem > -1 ) {
					lstIdRegistered.splice( idxItem, 1 );
				}
				$( "#" + itm.getAttribute( sourceDataAttr ) ).trigger( resetActionEvent ).trigger( cleanEvent );
				$( itm ).trigger( cleanEvent );
			}
		}
		$orgin.data( registerJQData, lstIdRegistered );
		itmToClean.remove();
	}
	$source.trigger( resetActionEvent ).trigger( cleanEvent );
	$elm.trigger( cleanEvent );

	// Remove any action that is pending for form submission
	$elm.data( submitJQData, [] );

	//
	// 2. Get defined actions
	//

	var actions = [],
		settings, settingsSrc, selFieldFlowData,
		actionAttr,
		defaultAction,
		defaultProp,
		baseAction,
		nowActions = [],
		postActions = [], postAction_len,
		bindTo,
		bindToElm;

	// From the component, default action
	settings = $orgin.data( configData );
	settingsSrc = $source.data( configData );
	if ( settingsSrc && settings ) {
		settings = $.extend( {}, settings, settingsSrc );
	}
	if ( $optSel.length && $optSel.val() && settings && settings.default ) {
		cacheAction = settings.default;
		if ( $.isArray( cacheAction ) ) {
			actions = cacheAction;
		} else {
			actions.push( cacheAction );
		}
	}

	defaultAction = settings.action;
	defaultProp = settings.prop;
	actionData = settings.actionData || {};

	// From the component, action pushed for later
	cacheAction = $elm.data( pushJQData );
	if ( cacheAction ) {
		actions = actions.concat( cacheAction );
	}

	// For each the binded elements that are selected
	for ( i = 0, i_len = $optSel.length; i !== i_len; i += 1 ) {
		selCurrentElm = $optSel.get( i );
		selFieldFlowData = wb.getData( selCurrentElm, componentName );
		if ( selFieldFlowData ) {
			bindTo = selFieldFlowData.bind;
			actions = actions.concat( selFieldFlowData.actions );

			if ( bindTo ) {

				// Retreive action set on the binded element
				bindToElm = document.getElementById( bindTo );
				actionAttr = bindToElm.getAttribute( "data-" + componentName );
				if ( typeof actionAttr === "string" ) {
					if ( actionAttr.startsWith( "{" ) || actionAttr.startsWith( "[" ) ) {
						try {
							cacheAction = JSON.parse( actionAttr );
						} catch ( error ) {
							$.error( "Bad JSON object " + actionAttr );
						}
						if ( !$.isArray( cacheAction ) ) {
							cacheAction = [ cacheAction ];
						}
					} else {
						cacheAction = {};
						cacheAction.action = defaultAction;
						cacheAction[ defaultProp ] = actionAttr;
						cacheAction = $.extend( true, {}, actionData, cacheAction );
						cacheAction = [ cacheAction ];
					}
					actions = actions.concat( cacheAction );
				}
			}
		}
	}

	// If there is no action, do nothing
	if ( !actions.length ) {
		return true;
	}

	//
	// 3. Sort action
	// 			array1 = Action to be executed now
	//			array2 = Action to be postponed for later use
	for ( i = 0, i_len = actions.length; i !== i_len; i += 1 ) {
		dtCached = actions[ i ];
		dtCachedTarget = dtCached.target;
		if ( !dtCachedTarget || dtCachedTarget === bindTo ) {
			nowActions.push( dtCached );
		} else {
			postActions.push( dtCached );
		}
	}

	//
	// 4. Execute action for the current item
	//
	baseAction = settings.base || {};
	postAction_len = postActions.length;
	for ( i = 0, i_len = nowActions.length; i !== i_len; i += 1 ) {
		dtCached = $.extend( {}, baseAction, nowActions[ i ] );
		dtCached.origin = $source.get( 0 );
		dtCached.provEvt = elm;
		dtCached.$selElm = $optSel;
		dtCached.form = form;
		if ( postAction_len ) {
			dtCached.actions = postActions;
		}
		$orgin.trigger( dtCached.action + "." + actionEvent, dtCached );
	}
	return true;
} );


// Load content after the user have choosen an option
$document.on( "submit", selectorForm + " form", function( event ) {

	var elm = event.currentTarget,
		$elm = $( elm ),
		wbFieldFlowRegistered = $elm.data( registerJQData ),
		wbRegisteredHidden = $elm.data( registerHdnFld ) || [],
		$hdnField,
		i, i_len = wbFieldFlowRegistered ? wbFieldFlowRegistered.length : 0,
		$wbFieldFlow, fieldOrigin,
		lstFieldFlowPostEvent = [],
		componentRegistered, $componentRegistered, $origin, lstOrigin = [],
		settings,
		j, j_len,
		m, m_len, m_cache,
		actions,
		preventSubmit = false, lastProvEvt;

	// Run the cleaning on the current items
	if ( i_len ) {
		$wbFieldFlow = $( "#" + wbFieldFlowRegistered[ i_len - 1 ] );
		fieldOrigin = $wbFieldFlow.data( registerJQData );
		$( "#" + fieldOrigin[ fieldOrigin.length - 1 ] ).trigger( cleanEvent );
		$wbFieldFlow.trigger( cleanEvent );
	}

	// For each wb-fieldflow component, execute submiting task.
	for ( i = 0; i !== i_len; i += 1 ) {
		$wbFieldFlow = $( "#" + wbFieldFlowRegistered[ i ] );
		componentRegistered = $wbFieldFlow.data( registerJQData );
		j_len = componentRegistered.length;
		for ( j = 0; j !== j_len; j += 1 ) {
			$componentRegistered = $( "#" + componentRegistered[ j ] );
			$origin = $( "#" + $componentRegistered.data( originData ) );
			lstOrigin.push( $origin );
			settings = $origin.data( configData );
			actions = $componentRegistered.data( submitJQData );

			// If there is If None setting
			if ( !actions && settings.defaultIfNone ) {
				actions = settings.defaultIfNone;
				for ( m = 0, m_len = actions.length; m !== m_len; m += 1 ) {
					m_cache = actions[ m ];
					m_cache.origin = $origin.get( 0 );
					m_cache.$selElm = $origin.prev().find( "input, select" ).eq( 0 );
					m_cache.provEvt = m_cache.$selElm.get( 0 );
					m_cache.form = elm;
					$origin.trigger( m_cache.action + "." + actionEvent, m_cache );
				}
				actions = $componentRegistered.data( submitJQData );
			}
			if ( actions ) {
				for ( m = 0, m_len = actions.length; m !== m_len; m += 1 ) {
					m_cache = actions[ m ];
					m_cache.form = elm;
					$wbFieldFlow.trigger( m_cache.action + "." + submitEvent, m_cache );
					lstFieldFlowPostEvent.push( {
						$elm: $wbFieldFlow,
						data: m_cache
					} );
					preventSubmit = preventSubmit || m_cache.preventSubmit;
					lastProvEvt = m_cache.provEvt;
				}
			}
		}
	}

	// Before to submit, remove jj-down accessesory control
	if ( !preventSubmit ) {
		$elm.find( basenameInputSelector ).removeAttr( "name" );

		// Fix an issue when clicking back with the mouse
		i_len = wbRegisteredHidden.length;
		for ( i = 0; i !== i_len; i += 1 ) {
			$( wbRegisteredHidden[ i ] ).remove();
		}
		wbRegisteredHidden = [];

		// Check the form action, if there is query string, do split it and create hidden field for submission
		// The following is may be simply caused by a cross-server security issue generated by the browser itself
		var frmAction, idxQueryDelimiter,
			queryString, cacheParam, cacheName,
			items, params;

		frmAction = $elm.attr( "action" );
		if ( frmAction ) {
			idxQueryDelimiter = frmAction.indexOf( "?" );
			if ( idxQueryDelimiter > 0 ) {

				// Split the query string and create hidden input.
				queryString = frmAction.substring( idxQueryDelimiter + 1 );
				params = queryString.split( "&" );

				i_len = params.length;
				for ( i = 0; i !== i_len; i += 1 ) {
					cacheParam = params[ i ];
					cacheName = cacheParam;
					if ( cacheParam.indexOf( "=" ) > 0 ) {
						items = cacheParam.split( "=", 2 );
						cacheName = items[ 0 ];
						cacheParam = items[ 1 ];
					}
					$hdnField = $( "<input type='hidden' name='" + cacheName + "' value='" + wb.escapeAttribute( cacheParam ) + "' />" );
					$elm.append( $hdnField );
					wbRegisteredHidden.push( $hdnField.get( 0 ) );
				}
				$elm.data( registerHdnFld, wbRegisteredHidden );
			}
		}
	}

	// Add global action
	i_len = lstOrigin.length;
	for ( i = 0; i !== i_len; i += 1 ) {
		$origin = lstOrigin[ i ];
		settings = $origin.data( configData );
		if ( settings.action ) {
			lstFieldFlowPostEvent.push( {
				$elm: $origin,
				data: settings
			} );
		}
	}

	i_len = lstFieldFlowPostEvent.length;
	for ( i = 0; i !== i_len; i += 1 ) {
		m_cache = lstFieldFlowPostEvent[ i ];
		m_cache.data.lastProvEvt = lastProvEvt;
		m_cache.$elm.trigger( m_cache.data.action + "." + submitedEvent, m_cache.data );
	}
	if ( preventSubmit ) {
		event.preventDefault();
		if ( event.stopPropagation ) {
			event.stopImmediatePropagation();
		} else {
			event.cancelBubble = true;
		}
		return false;
	}
} );

$document.on( "keyup", selectorForm + " select", function( Ev ) {

	// Add the fix for the on change event - https://bugzilla.mozilla.org/show_bug.cgi?id=126379
	if ( navigator.userAgent.indexOf( "Gecko" ) !== -1 ) {

		// prevent tab, alt, ctrl keys from fireing the event
		if ( Ev.keyCode && ( Ev.keyCode === 1 || Ev.keyCode === 9 || Ev.keyCode === 16 || Ev.altKey || Ev.ctrlKey ) ) {
			return true;
		}
		$( Ev.target ).trigger( "change" );
		return true;
	}
} );

$document.on( fieldflowActionsEvents, selector, function( event, data ) {

	var eventType = event.type;

	switch ( event.namespace ) {
	case drawEvent:
		switch ( eventType ) {
		case componentName:
			drwFieldflow( event, data );
			break;
		case "tblfilter":
			drwTblFilter( event, data );
			break;
		}
		break;

	case createCtrlEvent:
		switch ( eventType ) {
		case "select":
			ctrlSelect( event, data );
			break;
		case "checkbox":
			data.typeRadCheck = "checkbox";
			ctrlChkbxRad( event, data );
			break;
		case "radio":
			data.typeRadCheck = "radio";
			ctrlChkbxRad( event, data );
			break;
		}
		break;

	case actionEvent:
		switch ( eventType ) {
		case "append":
			actAppend( event, data );
			break;
		case "redir":
			pushData( $( data.provEvt ), submitJQData, data, true );
			break;
		case "ajax":
			actAjax( event, data );
			break;
		case "tblfilter":
			actTblFilter( event, data );
			break;
		case "toggle":
			if ( data.live ) {
				subToggle( event, data );
			} else {
				data.preventSubmit = true;
				pushData( $( data.provEvt ), submitJQData, data );
			}
			break;
		case "addClass":
			if ( !data.source || !data.class ) {
				return;
			}
			if ( data.live ) {
				$( data.source ).addClass( data.class );
			} else {
				data.preventSubmit = true;
				pushData( $( data.provEvt ), submitJQData, data );
			}
			break;
		case "removeClass":
			if ( !data.source || !data.class ) {
				return;
			}
			if ( data.live ) {
				$( data.source ).removeClass( data.class );
			} else {
				data.preventSubmit = true;
				pushData( $( data.provEvt ), submitJQData, data );
			}
			break;
		case "query":
			actQuery( event, data );
			break;
		}
		break;

	case submitEvent:
		switch ( eventType ) {
		case "redir":
			subRedir( event, data );
			break;
		case "ajax":
			subAjax( event, data );
			break;
		case "toggle":
			subToggle( event, data );
			break;
		case "addClass":
			$( data.source ).addClass( data.class );
			break;
		case "removeClass":
			$( data.source ).removeClass( data.class );
			break;
		case "query":
			actQuery( event, data );
			break;
		}
		break;
	}
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, function( event ) {
	switch ( event.type ) {
	case "timerpoke":
	case "wb-init":
		init( event );
		break;
	}

	/*
	* Since we are working with events we want to ensure that we are being passive about our control,
	* so returning true allows for events to always continue
	*/
	return true;
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, document, wb );

( function( $, document, wb ) {
"use strict";

var $document = wb.doc,
	componentName = "wb-suggest",
	selector = "[data-" + componentName + "]",
	initEvent = "wb-init." + componentName,
	jsonFetched = "json-fetched.wb",
	wait,
	waitInterval = 250, // In-bettween typing delay before refreshing the suggested list.
	maxWaitLoading = 5, // Number of time of waitInterval the plugin are allow wait for getting JSON suggestions

	// Remove accent and normalize the string
	//
	// str: String to be normalized
	// return: A normalized string with no accent
	//
	unAccent = function( str ) {
		return str.normalize( "NFD" ).replace( /[\u0300-\u036f]/g, "" );
	},

	// Remove children of an element except template element
	//
	// this: element that need to emptied
	//
	emptyExceptTemplate = function() {
		var elm,
			children = this.children,
			i;

		for ( i = children.length - 1; i > 0; i = i - 1 ) {
			elm = children[ i ];
			if ( elm.nodeType === 1 && elm.nodeName !== "TEMPLATE" ) {
				this.removeChild( elm );
			}

		}
	},

	// Add suggested options to the datalist
	//
	// this: datalist instance
	// filter: filter items that match the suggestion
	// limti: (for overwride) limit number of result
	// attSuggestions: (for overwride) Array of string with suggestion
	//
	addDataListOptions = function( filter, limit, attrSuggestions ) {
		var suggestions = attrSuggestions || JSON.parse( this.dataset.wbSuggestions || [] ),
			filterType = this.dataset.wbFilterType || "any",
			filterRegExp,
			lenSuggestions = suggestions.length,
			idx, suggestion, suggestionNorm,
			clone, option,
			optionAddedUnAccent = [],
			currentOptions = this.childNodes,
			j, j_cache, j_len = currentOptions.length - 1,
			currentOptionValue,
			$input = $( "[list=" + this.id + "]" ),
			input = $input.get( 0 );

		if ( !suggestions.length && maxWaitLoading ) {
			maxWaitLoading = maxWaitLoading - 1;
			if ( wait ) {
				clearTimeout( wait );
			}
			wait = setTimeout( addDataListOptions( filter, limit, attrSuggestions ), waitInterval );
		}
		if ( !limit ) {
			limit = parseInt( this.dataset.wbLimit || lenSuggestions );
		}

		// Set the filter type
		if ( filter ) {

			switch ( filterType ) {
			case "startWith":
				filter = "^" + filter;
				break;
			case "word":
				filter = "^" + filter + "|\\s" + filter;
				break;
			case "any":
			default:

				// Keep the filter as is for the regular expression check
				break;
			}

			filterRegExp = new RegExp( filter, "i" );
		}

		if ( !filter || filter.length < 2 ) {
			emptyExceptTemplate.call( this );
			currentOptions = [];
		} else {

			// Remove existing option that don't match
			for ( j = j_len; j !== 0; j = j - 1 ) {

				j_cache = currentOptions[ j ];

				if ( j_cache.nodeType === 1 && j_cache.nodeName === "OPTION" ) {

					currentOptionValue = j_cache.getAttribute( "value" );

					if ( currentOptionValue && currentOptionValue.match( filterRegExp ) ) {
						optionAddedUnAccent.push( unAccent( currentOptionValue ) );
					} else {
						this.removeChild( j_cache );
					}
				}
			}
		}

		// Get the template
		var template = this.querySelector( "template" );

		// IE11 support
		// Polyfil the template, like if added after the polyfill or this a sub-template in a template container that wasn't polyfill
		// FYI - The polyfill is loaded from the data-json plugin
		if ( template && !template.content ) {
			wb.tmplPolyfill( template );
		}

		for ( idx = 0; idx < lenSuggestions && optionAddedUnAccent.length < limit; idx += 1 ) {
			suggestion = suggestions[ idx ];
			suggestionNorm = unAccent( suggestion ); // To ensure to don't have duplicate entry in the suggestion

			if ( optionAddedUnAccent.indexOf( suggestionNorm ) === -1 && ( !filter || suggestion.match( filterRegExp ) ) ) {

				optionAddedUnAccent.push( suggestionNorm );

				if ( template ) {
					clone = template.content.cloneNode( true );
					option = clone.querySelector( "option" );
				} else {
					clone = document.createDocumentFragment();
					option = document.createElement( "OPTION" );
					clone.appendChild( option );
				}

				option.setAttribute( "label", suggestion );
				option.setAttribute( "value", suggestion );

				this.appendChild( clone );
			}
		}

		// For the datalist polyfill like IE11
		$input.trigger( "wb-update.wb-datalist" );

		// To show suggestion on IE11, do not seem to conflict with other browser
		input.value = input.value; // eslint-disable-line
	},

	// Initiate suggestion from received JSON file
	//
	// suggestion: JSON string array that was fetched
	// this: the datalist reference
	initSuggestion = function( suggestions ) {

		// Attach the JSON list to the datalist element
		this.dataset.wbSuggestions = JSON.stringify( suggestions );

		// Remove the reference as it not needed anymore
		delete this.dataset.wbSuggest;

		// Add the suggested options
		addDataListOptions.call( this, document.querySelector( "[list=" + this.id + "]" ).value );
	},

	inputFocus = function( event ) {

		var target = event.target,
			datalist = document.getElementById( target.getAttribute( "list" ) );

		// IE11 add support for string normalization
		Modernizr.load( {
			test: Modernizr.stringnormalize,
			nope: [
				"site!deps/unorm" + wb.getMode() + ".js"
			]
		} );

		// Load the JSON file
		$( datalist ).trigger( {
			type: "json-fetch.wb",
			fetch: {
				url: datalist.dataset.wbSuggest
			}
		} );
	},

	inputChange = function( event ) {
		var target = event.target,
			datalistElm = document.getElementById( target.getAttribute( "list" ) ),
			query = event.target.value,
			which = event.which;

		if ( wait ) {
			clearTimeout( wait );
		}

		switch ( event.type ) {
		case "change":
			wait = setTimeout( addDataListOptions.bind( datalistElm, query ), waitInterval );
			break;
		case "keyup":
			if ( !( event.ctrlKey || event.altKey || event.metaKey ) ) {

				// Backspace, Spacebar, a - z keys, 0 - 9 keys punctuation, and symbols
				if ( which === 8 ||  which === 32 || ( which > 47 && which < 91 ) ||
					( which > 95 && which < 112 ) || ( which > 159 && which < 177 ) ||
					( which > 187 && which < 223 ) ) {

					wait = setTimeout( addDataListOptions.bind( datalistElm, query ), waitInterval );
				}
			}
		}
	},

	init = function( event ) {

		var elm = wb.init( event, componentName, selector ),
			inputSelector = "[list=" + event.target.id + "]";

		if ( elm ) {
			Modernizr.addTest( "stringnormalize", "normalize" in String );

			//
			// Add the trigger to load the JSON on when those input get focus.
			// This avoid to download the JSON when it is not needed by the input
			//
			$document.one( "focus", inputSelector, inputFocus );

			// Refresh the suggestion option based from user input if there is a limit set
			if ( elm.dataset.wbLimit || elm.dataset.wbFilterType ) {
				$document.on( "change keyup", inputSelector, inputChange );
			}

			// Initialization has completed
			wb.ready( $( elm ), componentName );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent + " " + jsonFetched, selector, function( event ) {

	var eventTarget = event.target;

	if ( event.currentTarget === eventTarget ) {

		switch ( event.type ) {
		case "timerpoke":
		case "wb-init":
			init( event );
			break;
		case "json-fetched":
			initSuggestion.call( eventTarget, event.fetch.response );
			break;
		}
	}
	return true;
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, document, wb );

( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-urlmapping",
	selector = "[data-" + componentName + "]",
	initEvent = "wb-init." + componentName,
	doMappingEvent = "domapping." + componentName,
	$document = wb.doc,
	authTrigger, // Flag to prevent instation of WET no more than twice by page load

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {
			$elm = $( elm );

			// Only allow the first wb-urlmapping instance to trigger WET
			if ( !authTrigger ) {
				authTrigger = elm;
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );

			if ( !wb.isReady ) {

				// Execution of any action after WET is ready
				$document.one( "wb-ready.wb", function( ) {
					$elm.trigger( doMappingEvent );
				} );
			} else {
				$elm.trigger( doMappingEvent );
			}
		}
	},
	getUrlParams = function() {

		// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript#answer-2880929
		var urlParams = {},
			pl = /\+/g, // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function( s ) {
				return decodeURIComponent( s.replace( pl, " " ) );
			},
			query = window.location.search.substring( 1 ),
			match = search.exec( query );

		while ( match ) {
			urlParams[ decode( match[ 1 ] ) ] = decode( match[ 2 ] );
			match = search.exec( query );
		}

		return urlParams;
	};

$document.on( doMappingEvent, selector, function( event ) {

	var $elm = $( event.target ),
		urlParams = getUrlParams(),
		cKey, cValue, settingQuery,
		settings = $.extend( {}, window[ componentName ] || { }, wb.getData( $elm, componentName ) );

	for ( cKey in urlParams ) {
		cValue = urlParams[ cKey ];
		settingQuery = settings[ cKey + "=" + cValue ] || settings[ cKey ];

		if ( typeof settingQuery === "object" ) {

			// Send it to the action manager to get proccessed with the action "withInput"
			$elm.trigger( {
				type: "do.wb-actionmng",
				actions: {
					action: "withInput",
					actions: settingQuery,
					cValue: cValue,
					dntwb: $elm[ 0 ] !== authTrigger
				}
			} );

			if ( !settings.multiplequery ) {
				break;
			}
		}
	}
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "adapter-wb5-click",
	selector = "[data-wb5-click][data-toggle]",
	initEvent = "wb-init." + componentName,
	wbPostbackClass = "wb-postback",
	$document = wb.doc,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {
			$elm = $( elm );

			// Extract info from "wb5-click" and "wb-toggle"
			var command = $elm.data( "wb5-click" ).split( "@" ),
				action = command[ 0 ],
				cmdSelector = command[ 1 ],
				$webForm = $( cmdSelector ),
				dtToggle = wb.getData( $elm, "toggle" );

			// Abort if not postback or Selector is not a form
			if ( action !== "postback" || $webForm[ 0 ].nodeName !== "FORM" || !dtToggle.selector ) {

				console.log( "Init failed for adapter wb5 click" );
				wb.ready( $elm, componentName );
				return;
			}

			// Implement the wb-postback into the form
			$webForm.addClass( wbPostbackClass );
			$webForm.attr( "data-" + wbPostbackClass,  JSON.stringify( { success: dtToggle.selector, failure: dtToggle.selector } ) );
			$webForm.parent().removeClass( "gc-rprt-prblm-tggl" ); // Workaround to make wb-postback work for the Report a problem use case.

			// Remove wb5-click and wb-toggle feature on the button
			$elm
				.removeAttr( "data-wb5-click" )
				.removeAttr( "toggle" )
				.removeAttr( "data-toggle" )
				.removeAttr( "aria-controls" )
				.removeClass( "wb-toggle" );


			// Initiate the wb-postback plugin
			$webForm.trigger( "wb-init." + wbPostbackClass );

			// Let report the adapter is now ready
			wb.ready( $elm, componentName );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

( function( $, wb ) {
"use strict";

var componentName = "gcweb-menu",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	selectorAjaxed =  selector + " [data-ajax-replace]," + selector + " [data-ajax-append]," + selector + " [data-ajax-prepend]," + selector + " [data-wb-ajax]",
	globalTimeoutOn,
	globalTimeoutOff,
	hoverDelay = 350,
	justOpened,
	isMobileMode, // Mobile vs Desktop
	isMediumView,
	preventFocusIn,
	i18nInstruction = {
		en: "Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it.",
		fr: "Appuyez sur la barre d'espacement pour ouvrir ou sur la touche d'échappement pour fermer le menu. Utilisez les flèches haut et bas pour choisir un élément de sous-menu. Appuyez sur la touche Entrée ou sur la flèche vers la droite pour le développer, ou sur la flèche vers la gauche ou la touche Échap pour le réduire. Utilisez les flèches haut et bas pour choisir un élément de ce niveau et la touche Entrée pour y accéder."
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			ajaxFetch;
		if ( elm ) {

			if ( i18nInstruction[ wb.lang ] ) {
				i18nInstruction = i18nInstruction[ wb.lang ];
			} else if ( i18nInstruction.en  ) {
				i18nInstruction = i18nInstruction.en;
			}

			// If the menu item are ajaxed in, initialize after the ajax is completed
			ajaxFetch = elm.querySelector( selectorAjaxed );

			if ( !ajaxFetch ) {
				onAjaxLoaded( elm.querySelector( "[role=menu]" ) );
			}


		}
	},
	onAjaxLoaded = function( subElm ) {
		var $elm = $( subElm ).parentsUntil( selector ).parents(),
			htmlClassName = document.querySelector( "html" ).className;
		isMobileMode = htmlClassName.indexOf( "smallview" ) !== -1;
		isMediumView = htmlClassName.indexOf( "mediumview" ) !== -1;

		if ( isMobileMode || isMediumView ) {
			setMnu3LevelOrientationExpandState( false, isMediumView );
		}

		// Add menu navigation instruction
		subElm.previousElementSibling.setAttribute( "aria-label", i18nInstruction );

		// Identify that initialization has completed
		wb.ready( $elm, componentName );
	};

function OpenMenu( elm ) {

	// If already open, do nothing
	if ( elm.getAttribute( "aria-expanded" ) === "true" ) {
		return;
	}

	// Close the one that is currently open for this level and deeper
	var parentMenu = elm.parentElement.parentElement;

	var menuOpen = parentMenu.querySelector( "[aria-haspopup][aria-expanded=true]:not([data-keep-expanded=md-min])" );

	// Only close other menu in tablet and desktop mode
	if ( menuOpen && !isMobileMode ) {
		CloseMenu( menuOpen, true );
	}

	// Open the menu
	elm.setAttribute( "aria-expanded", "true" );

	justOpened = elm;
	setTimeout( function() {
		justOpened = false;
	}, hoverDelay );

}
function CloseMenu( elm, force ) {

	//Ensure elm isn't null
	if ( !elm ) {
		return;
	}

	// Ensure elm is targeted on the haspopup element
	if ( !elm.hasAttribute( "aria-haspopup" ) ) {
		elm = elm.previousElementSibling;
	}

	if ( !force ) {

		// Can the menu be closed?
		// Get the menu item that has the focus.
		var currentFocusIsOn = elm.nextElementSibling.querySelector( "[role=menuitem]:focus" );
		var siblingHasFocus = elm.parentElement.parentElement.querySelector( "[role=menuitem]:focus" );

		// Check if we keep the menu opon
		if ( currentFocusIsOn || siblingHasFocus === elm ) {
			return;
		}
	}

	elm.setAttribute( "aria-expanded", "false" );

}

// On hover, wait for the delay before to open the menu
function OpenMenuWithDelay( elm ) {


	if ( elm.dataset.keepExpanded === "md-min" ) {
		return;
	}

	// Prevent any pending to be open to trigger
	clearTimeout( globalTimeoutOn );

	globalTimeoutOn = setTimeout( function() {
		OpenMenu( elm );
	}, hoverDelay );
}

// Open menu on mouse hovering
$document.on( "mouseenter", selector + " ul [aria-haspopup]", function( event ) {

	// There is no "mouseenter" in mobile
	if ( !isMobileMode ) {
		clearTimeout( globalTimeoutOff );
		OpenMenuWithDelay( event.currentTarget );
	}
} );


$document.on( "focusin", selector + " ul [aria-haspopup]", function( event ) {

	// Don't open the submenu
	if ( isMobileMode ) {
		preventFocusIn = false;
		return;
	}

	// Open the menu, no delay
	OpenMenu( event.currentTarget );

} );

// The user get inside the submenu, we should cancel the "close" with delay event
$document.on( "mouseenter focusin", selector + " [aria-haspopup] + [role=menu]", function( event ) {

	// Prevent the menu to collapse
	// Note: elm.id is already defined because of the mouseenter event of the parent menu element

	var elm = event.currentTarget.previousElementSibling;

	if ( elm.dataset.keepExpanded === "md-min" ) {
		return;
	}

	// There is no "mouseenter" in mobile and ensure it don't get trigger when activating the button menu
	if ( isMobileMode || justOpened === event.currentTarget ) {
		return;
	}

	clearTimeout( globalTimeoutOff );
} );

// Ensure the menu don't switch when the user do a quick mouse over on other menu item.
$document.on( "mouseleave", selector + " [aria-haspopup]", function( ) {
	clearTimeout( globalTimeoutOn );
} );

// Open right away the popup
$document.on( "click", selector + " [aria-haspopup]", function( event ) {

	var elm = event.currentTarget,
		elmToGiveFocus;


	// Don't open the submenu
	if ( preventFocusIn ) {
		preventFocusIn = false;
		return;
	}

	// Only for mobile view or the menu button
	if ( isMobileMode || elm.nodeName === "BUTTON" ) {

		// Toggle
		if ( elm.getAttribute( "aria-expanded" ) === "true" ) {
			if ( justOpened !== elm ) {
				CloseMenu( elm, true );
			}
		} else {
			OpenMenu( elm );

			// Focus on the first menu item
			elmToGiveFocus = elm.nextElementSibling.querySelector( "[role=menuitem]" );
			elmToGiveFocus.focus();
			elmToGiveFocus.setAttribute( "tabindex", "0" );

		}
	}

	// Stop default behaviour
	event.stopImmediatePropagation();
	event.preventDefault();
} );

// This is for the "most requested" menu item
function setMnu3LevelOrientationExpandState( isVertical, isExpanded ) {
	var mnu3Level = document.querySelectorAll( "[role=menu] [role=menu] [role=menuitem][aria-haspopup=true]" ),
		i, i_len = mnu3Level.length,
		expandState = ( isExpanded ? "true" : "false" ),
		orientation = ( isVertical ? "vertical" : "horizontal" ),
		expandStateItem = expandState;

	for ( i = 0; i < i_len; i++ ) {

		// Keep it expanded if focus are inside submenu
		expandStateItem = ( mnu3Level[ i ].nextElementSibling.querySelector( "[role=menuitem]:focus" ) ? "true" : expandState );

		mnu3Level[ i ].setAttribute( "aria-expanded", expandStateItem );
		mnu3Level[ i ].parentElement.previousElementSibling.setAttribute( "aria-orientation", orientation );
	}
}

// Change the main menu mode
$document.on( wb.resizeEvents, function( event ) {

	switch ( event.type ) {
	case "xxsmallview":
	case "xsmallview":
	case "smallview":
		isMobileMode = true;
		setMnu3LevelOrientationExpandState( false, false );
		break;
	case "mediumview":
		isMobileMode = false;
		setMnu3LevelOrientationExpandState( false, true );
		break;
	case "largeview":
	case "xlargeview":
	default:
		isMobileMode = false;
		setMnu3LevelOrientationExpandState( true, true );
	}
} );

/**
* keycode - determines what action to take when a key is pressed
* @private
* @param {object} event - the event that contains information about the key
* @param {string} orientation - whether the menu is horizontal or vertical (navigated with left/right or up/down)
* @returns name of action to take or false if invalid key
* @type string / bool
*/
function keycode( code ) {

	if ( code === 9 ) {
		return "tab";
	}

	if ( code === 13 || code === 32 ) {
		return "enter";
	}
	if ( code === 27 ) {
		return "esc";
	}
	if ( code === 39 ) { //right arrow
		return "right";
	}
	if ( code === 37 ) { //left arrow
		return "left";
	}
	if ( code === 40 ) { //down arrow
		return "down";
	}
	if ( code === 38 ) { //up arrow
		return "up";
	}

	return false;
}

// Global hook, close the menu on "ESC" when its state are open.
$document.on( "keydown", function( event ) {
	if ( event.keyCode === 27 ) {
		CloseMenu( document.querySelector( selector + " button" ) );
	}
} );

// Keyboard navigation for each menu item
$document.on( "keydown", selector + " button, " + selector + " [role=menuitem]", function( event ) {

	var elm = event.currentTarget,
		key = keycode( event.charCode || event.keyCode );


	// Get the menu item that has the focus.
	var currentFocusIsOn = document.querySelector( "[role=menuitem]:focus" ) || elm,
		parent = currentFocusIsOn.parentElement,
		grandParent = parent.parentElement,
		isCurrentButtonMenu = ( currentFocusIsOn.nodeName === "BUTTON" );

	// Close the menu
	if ( key === "tab" ) {
		CloseMenu( document.querySelector( selector + " button" ), true );
		return;
	}

	// Generate a click it Enter
	if ( isCurrentButtonMenu && key === "enter" && elm.getAttribute( "aria-expanded" ) === "true" ) {
		preventFocusIn = true;
		CloseMenu( elm, true );
		return;
	}

	// FIRST CHILD POPOP
	var firstChildPopup;
	if ( currentFocusIsOn.nextElementSibling ) {
		firstChildPopup = currentFocusIsOn.nextElementSibling.querySelector( "[role='menuitem']" );
	}

	// NEXT MENU ITEM
	var nextSiblingMenuItem;
	if ( parent.nextElementSibling ) {
		nextSiblingMenuItem = parent.nextElementSibling.querySelector( "[role=menuitem]" );

		// Check if we have hit a separator, go to the next one. The separator can't be the last item and are not followed by another separator.
		if ( !nextSiblingMenuItem ) {
			nextSiblingMenuItem = parent.nextElementSibling.nextElementSibling.querySelector( "[role=menuitem]" );
		}
	} else {

		// Get first item and take in consideration if the sub-menu is persistant open
		if ( !isMobileMode && currentFocusIsOn.dataset.keepExpanded && firstChildPopup ) {

			// The current focus is on a persistant open menu item, the next menu item is the first child
			nextSiblingMenuItem = firstChildPopup;
		} else if ( !isMobileMode && grandParent.previousElementSibling.dataset.keepExpanded ) {

			// The current focus is on the last item of the persistant menu
			// Should go the next item of the parent menu item (not supported),
			// but in our use case this is the first item of the parent men
			nextSiblingMenuItem = grandParent.parentElement.parentElement.querySelector( "[role=menuitem]" );
		} else {
			nextSiblingMenuItem = grandParent.querySelector( "[role=menuitem]" );
		}
	}

	// PARENT
	var parentPopupBtn = grandParent.previousElementSibling;

	// PREVIOUS MENU ITEM
	var previousSiblingMenuItem;
	if ( parent.previousElementSibling ) {
		previousSiblingMenuItem = parent.previousElementSibling.querySelector( "[role=menuitem]" );

		// Check if we have hit a separator. A separator is not the first items
		if ( !previousSiblingMenuItem ) {
			previousSiblingMenuItem = parent.previousElementSibling.previousElementSibling.querySelector( "[role=menuitem]" );
		}
	} else {

		// Get the last item, take in consideration one level of persistant open menu
		if ( !isMobileMode && grandParent.lastElementChild.querySelector( "[role=menuitem]" ).dataset.keepExpanded ) {

			// The last item is persistant open, get it's last children
			previousSiblingMenuItem = grandParent.lastElementChild.querySelector( "[role=menuitem]" ).nextElementSibling.lastElementChild.querySelector( "[role=menuitem]" );
		} else if ( !isMobileMode && grandParent.previousElementSibling.dataset.keepExpanded && parentPopupBtn ) {

			// Get the parent, this is the first items of a persistant open menu
			previousSiblingMenuItem = parentPopupBtn;
		} else if ( isCurrentButtonMenu ) {

			// Get the last menu item
			previousSiblingMenuItem = currentFocusIsOn.nextElementSibling.lastElementChild.querySelector( "[role=menuitem]" );
		} else {

			// Get the last item of the current menu
			previousSiblingMenuItem = grandParent.lastElementChild.querySelector( "[role=menuitem]" );
		}

	}

	// NEXT Menu item after the Separator
	// Next Separator Orientation
	var isNextSeparatorOrientationVertical,
		nextSeparatorMenuItem,
		iteratedItem = parent;
	while ( iteratedItem.nextElementSibling ) {
		iteratedItem = iteratedItem.nextElementSibling;
		if ( iteratedItem.getAttribute( "role" ) === "separator" ) {
			if ( iteratedItem.hasAttribute( "aria-orientation" ) && iteratedItem.getAttribute( "aria-orientation" ) === "vertical" ) {
				isNextSeparatorOrientationVertical = true;
			} else {
				isNextSeparatorOrientationVertical = false;
			}
			nextSeparatorMenuItem = iteratedItem.nextElementSibling.querySelector( "[role=menuitem]" );
			break;
		}
	}

	// Previous Menu item after the Separator
	// Previous Separator Orientation
	var isPreviousSeparatorOrientationVertical,
		previousSeparatorMenuItem;
	iteratedItem = parent;
	while ( iteratedItem.previousElementSibling ) {
		iteratedItem = iteratedItem.previousElementSibling;
		if ( iteratedItem.getAttribute( "role" ) === "separator" ) {
			if ( previousSeparatorMenuItem ) {
				break; // Run until we reach the first item or the next separator.
			}
			if ( iteratedItem.hasAttribute( "aria-orientation" ) && iteratedItem.getAttribute( "aria-orientation" ) === "vertical" ) {
				isPreviousSeparatorOrientationVertical = true;
			} else {
				isPreviousSeparatorOrientationVertical = false;
			}
			previousSeparatorMenuItem = iteratedItem.previousElementSibling;
		}
		if ( previousSeparatorMenuItem ) {
			previousSeparatorMenuItem = iteratedItem; // Run until we reach the first item or the next separator.
		}
	}

	// Ensure we are pointing to the first menu item
	if ( previousSeparatorMenuItem ) {
		previousSeparatorMenuItem = previousSeparatorMenuItem.querySelector( "[role=menuitem]" );
	}

	/*
	 * Developer note:

	For the "Most requested" menu.
	- Don't skip that navigation item when it receive the focus
	- when looking for the last, if that menuitem is expanded, then grab it's last items.
	*/

	if ( !isCurrentButtonMenu ) {
		currentFocusIsOn.setAttribute( "tabindex", "-1" );
	}

	var elmToGiveFocus;
	if ( key === "down" && nextSiblingMenuItem  ) {
		elmToGiveFocus = nextSiblingMenuItem;
	} else if ( key === "up" && previousSiblingMenuItem ) {
		elmToGiveFocus = previousSiblingMenuItem;
	} else if ( ( !isCurrentButtonMenu && key === "right" && firstChildPopup ) || key === "enter" && firstChildPopup ) {
		elmToGiveFocus = firstChildPopup;
	} else if ( isNextSeparatorOrientationVertical && key === "right" ) {
		elmToGiveFocus = nextSeparatorMenuItem;
	} else if ( isPreviousSeparatorOrientationVertical && key === "left" ) {
		elmToGiveFocus = previousSeparatorMenuItem;
	} else if ( ( !isCurrentButtonMenu && key === "left" ) || ( !isCurrentButtonMenu && key === "esc" ) ) {
		elmToGiveFocus = parentPopupBtn;
	} else if ( key  === "tab"  ) {
		return;
	}

	if ( key === "left" ||  key === "esc" ) {


		// Close the menu
		if ( !isCurrentButtonMenu && isMobileMode && elmToGiveFocus.getAttribute( "aria-expanded" ) === "true" ) {
			elmToGiveFocus.setAttribute( "aria-expanded", "false" );
		} else if ( isCurrentButtonMenu ) {
			elm.setAttribute( "aria-expanded", "false" );
		}
	}

	// Focus on the element
	if ( elmToGiveFocus ) {

		// Open the sub-menu automatically for mobile and menu button
		if ( isMobileMode || isCurrentButtonMenu ) {
			var popup = elmToGiveFocus.parentElement.parentElement.previousElementSibling;
			if ( popup.getAttribute( "aria-expanded" ) !== "true" ) {

				// Open the menu, no delay
				OpenMenu( popup );
			}
		}

		elmToGiveFocus.setAttribute( "tabindex", "0" );
		elmToGiveFocus.focus();

		// Stop default behaviour
		event.stopImmediatePropagation();
		event.preventDefault();
	}

} );

// When the menu item are ajaxed in
$document.on( "ajax-fetched.wb ajax-failed.wb", selectorAjaxed, function( event ) {

	var elm = event.target;

	// Filter out any events triggered by descendants
	if ( event.currentTarget === elm ) {
		onAjaxLoaded( elm );
	}
} );


// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, wb );
