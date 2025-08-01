/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Inuktitut dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "iu",
	"lang-native": "Inuktitut",
	add: "ᐃᓚᓕ",
	all: "ᑕᒪᐃᓐᓂ",
	tphp: "ᐱᒋᐊᕐᕕᐊᓄᑦ ᐅᑎᕐᓗᑎᑦ",
	load: "ᐴᖅᐸᓪᓕᐊᔪᖅ…",
	process: "ᐱᕙᓪᓕᐊᔪᖅ…",
	srch: "ᕿᓂᕈᑎ",
	"no-match": "ᐊᔾᔨᖃᙱᑦᑐᖅ",
	matches: {
		mixin: "[MIXIN] ᐊᔾᔨᖓ(ᖏᑦ) ᓇᓂᔭᖅ"
	},
	current: "(ᒫᓐᓇᐅᔪᖅ)",
	hide: "ᑕᕐᕆᓪᓕ",
	err: "ᑕᒻᒪᕐᓂᖅ",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "ᐱᒋᐊᕐᓕ",
	stop: "ᓄᖅᑲᕐᓕ",
	back: "ᐅᑎᕐᓕ",
	cancel: "ᖁᔭᓈᕐᓕ",
	"min-ago": "ᐊᑕᐅᓯᕐᒥᒃ ᒥᓇᑦᓯᒥᒃ ᐊᓂᒍᖅᑐᒥᒃ",
	"coup-mins": "ᒪᕐᕉᖕᓂᒃ ᒥᓂᑦᓰᖕᓂᒃ ᐊᓂᒍᖅᑑᖕᓂᒃ",
	"mins-ago": {
		mixin: "[MIXIN] ᒥᓂᑦᓯᓂ ᐊᓂᒍᖅᑐᓂ"
	},
	"hour-ago": "ᐃᑲᕐᕋᓕᒫᒥ ᐊᓂᒍᖅᑐᒥ",
	"hours-ago": {
		mixin: "[MIXIN] ᐃᑲᕐᕋᓂ ᐊᓂᒍᖅᑐᓂ"
	},
	"days-ago": {
		mixin: "[MIXIN] ᐅᓪᓗᓂ ᐊᓂᒍᖅᑐᓂ"
	},
	yesterday: "ᐃᑉᐸᒃᓴᖅ",

	nxt: "ᑭᖑᓪᓕᖅ",
	"nxt-r": "ᑭᖑᓪᓕᖅ (ᑕᓕᖅᐱᒃ ᖃᕐᔪᙳᐊᖅ)",
	prv: "ᑕᐃᒪᐅᕋᑖᖅᑐᒥ",
	"prv-l": "ᑕᐃᒪᐅᕋᑖᖅᑐᒥ (ᓴᐅᒥ ᖃᕐᔪᓐᓄᒐᖅ)",
	first: "ᓯᕗᓪᓕᖅ",
	last: "ᑭᖑᓪᓕᖅᐹᖅ",
	page: "ᒪᑉᐱᒐᖅ",
	"srch-menus": "ᕿᓂᕈᑎ ᐊᒻᒪ ᓱᔾᔪᑏᑦ",
	email: "ᐃᕐᖐᓐᓈᖅᑕᐅᑦ",
	"menu-close": "ᓱᔾᔪᑎᑦ ᒪᑐᓕ",
	"overlay-close": "ᖃᓕᕇᑦ ᒪᑐᓕ",
	"esc-key": "(Esc ᓇᕿᒐᖅ",
	show: "ᓴᖅᑭᓪᓕ",

	/* Tabbed interface */
	"tab-rot": {
		off: "ᓱᑯᑦᑎᐊᓅᖅᑕᐅᑦ ᑲᐃᕙᕐᓂᖓ ᓄᖅᑲᕐᓕ",
		on: "ᓱᑯᑦᑎᐊᓅᖅᑕᐅᑦ ᑲᐃᕙᕐᓂᖓ ᐱᒋᐊᕐᓕ"
	},
	"tab-list": "ᓱᑯᑦᑎᐊᓅᖅᑕᐅᑦ ᑎᑎᖅᐸᓪᓕᐊᒐᖅ",
	"tab-pnl-end1": "ᓱᑯᑦᑎᐊᓅᖅᑕᐅᑦ ᐃᓱᐊ.",
	"tab-pnl-end2": "ᓱᑯᑦᑎᐊᓅᖅᑕᐅᑦ ᑎᑎᖅᐸᓪᓕᐊᒐᖓᓄᑦ ᐅᑎᕐᓕ",
	"tab-pnl-end3": "ᐅᕝᕙᓘᓐᓃᑦ ᒪᑉᐱᒐᐅᑉ ᐃᓚᖓᓄᑦ ᑲᔪᓯᓕ.",
	"tab-play": "ᓂᓪᓕᐊᑎᓪᓕ",

	/* Multimedia player */
	"mmp-play": "ᓂᓪᓕᐊᑎᓪᓕ",
	pause: "ᓄᖅᑲᑲᐃᓐᓇᕐᓕ",
	open: "ᒪᑐᐃᕐᓕ",
	close: "ᒪᑐᓕ",
	volume: "ᓂᐱᖅᑯᖅᑐᓯᒋᐊᕈᑦ",
	mute: {
		on: "ᓂᐸᖏᓪᓕ",
		off: "ᓂᓪᓕᐊᓕ"
	},
	cc: {
		off: "ᐅᓂᒃᑳᑉ ᑕᐃᒎᓯᖏ ᓴᖅᑭᔮᕈᓐᓃᕐᓕ",
		on: "ᐅᓂᒃᑳᑉ ᑕᐃᒎᓯᖏ ᓴᖅᑭᔮᕐᓕ"
	},
	"cc-err": "ᑕᒻᒪᕐᓂᖅᑕᖃᖅᑐᖅ ᑕᐃᒎᓯᖏᓐᓂ ᓴᕿᔮᖅᑎᑦᓯᓂᕐᒥ",
	fs: "Enter full screen",
	adesc: {
		on: "ᑐᓴᖅᓴᐅᔾᔫᑉ ᐅᓂᒃᑳᕐᓂᖏᑦ ᐱᔪᓐᓇᖅᓯᑎᓪᓕ",
		off: "ᑐᓴᖅᓴᐅᔾᔫᑉ ᐅᓂᒃᑳᕐᓂᖏᑦ ᓄᖅᑲᑎᓪᓕ"
	},
	pos: "ᒫᓐᓇᐅᔪᖅ ᖃᓄᐃᓕᖓᓂᖓ:",
	dur: "ᑕᑭᓂᖓ ᑲᑎᓪᓗᒍ:",
	msgYoutubeNotLoad: "Video encountered loading issues",
	msgYoutubeVdLoad: "Loading Youtube video",

	/* Share widget */
	"shr-txt": "ᐊᓯᖕᓄᐊᕐᓗᒍ",
	"shr-pg": "ᑖᓐᓇ ᒪᑉᐱᒐᖅ",
	"shr-vid": "ᑖᓐᓇ ᑕᕐᕆᔮᖅ",
	"shr-aud": "ᑖᓐᓇ ᓂᐱᓕᐅᖅᓯᒪᔪᖅ",
	"shr-hnt": "ᑖᔅᓱᒧᖓ {s}",
	"shr-disc": "ᐊᑎᓕᐅᖅᓯᒪᔪᖃᙱᓚᖅ ᐱᖁᑎᓂᑦ ᐱᔨᑦᓯᕋᐅᑎᓂᓪᓘᓐᓃᑦ ᓴᖅᑭᔮᖅᑐᖃᙱᓚᖅ ᐊᑐᖅᑐᖃᒐᓂᓗ.",

	/* Form validation */
	"frm-nosubmit": "ᑖᓐᓇ ᑎᑎᖅᑲᖅ ᐅᑎᖅᑎᒐᒃᓴᐅᙱᑦᑐᖅ ᐅᓇ ᐱᔾᔪᑕᐅᓪᓗᓂ",
	"errs-fnd": "ᑕᒻᒪᖅᓯᒪᔪᓂᑦ ᖃᐅᔨᔪᖅ",
	"err-fnd": "ᑕᒻᒪᖅᓯᒪᔪᒥᑦ ᖃᐅᔨᔪᖅ",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "ᐅᓪᓗᖅᓯᐅᑎ ᓴᖅᑭᔮᕈᓐᓂᖅᑎᓪᓕ",
	"date-show": "ᐅᓪᓗᖅᓯᐅᑎᓂ ᐅᓪᓗᕐᒥ ᓂᕈᐊᕆᑦ ᐅᐅᒧᖓ:",
	"date-sel": "ᓇᓗᓇᐃᒪᔪᖅ",

	/* Calendar */
	days: [
		"ᓈᑦᑏᖑᔭᖅ",
		"ᓇᒡᒐᔾᔭᐅ",
		"ᐊᐃᑉᐱᖅ",
		"ᐱᖓᑦᓯᖅ",
		"ᕿᑎᖅᑰᑦ",
		"ᐅᓪᓗᑐᐃᓐᓇᖅ",
		"ᓯᕙᑖᕐᕕᒃ"
	],
	mnths: [
		"ᔮᓐᓄᐊᓕ",
		"ᕕᕝᕗᐊᓕ",
		"ᒫᔾᔨ",
		"ᐊᐃᕐᕆᓕ",
		"ᒪᐃ",
		"ᔫᓂ",
		"ᔪᓚᐃ",
		"ᐋᒡᒌᓯ",
		"ᓯᑎᐱᕆ",
		"ᐅᑐᐱᕆ",
		"ᓄᕕᐱᕆ",
		"ᑎᓯᐱᕆ"
	],
	cal: "ᐅᓪᓗᖅᓯᐅᑎ",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(ᒫᓐᓇᐅᔪᐊᖅ ᐅᓪᓗᖓ)",
	"cal-goToLnk": "ᐅᕗᙵᕐᓕ<span class=\"wb-inv\"> ᐊᕐᕌᒎᑉ ᐅᓪᓗᐊ</span>",
	"cal-goToTtl": "ᐊᕐᕌᒎᑉ ᑕᖅᑭᖓᓅᕐᓕ",
	"cal-goToMnth": "ᑕᖅᑭᖅ:",
	"cal-goToYr": "ᐊᕐᕌᒍ:",
	"cal-goToBtn": "ᐊᑏ",
	prvMnth: "ᑕᖅᑭᐅᓵᖅᑐᖅ:",
	nxtMnth: "ᑕᖅᑭᐅᓂᐊᖅᑐᖅ:",

	/* Lightbox */
	"lb-curr": "Item %curr% of %total%",
	"lb-xhr-err": "ᑎᑎᖅᑲᑦ ᓴᖅᑭᔪᓐᓇᙱᑦᑐᑦ",
	"lb-img-err": "ᐊᔾᔨᙳᐊᖅ ᓴᖅᑭᔪᓐᓇᙱᑦᑐᖅ",

	/* Charts widget */
	"tbl-txt": "ᑭᐳ",
	"tbl-dtls": "ᓴᓇᒐᖅ. ᑭᐳᒥ ᓇᓗᓇᐃᖅᑕᐅᓯᒪᔪᑦ.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "ᐱᓕᕆᐊᑦ ᐃᒻᒥᓂ ᓄᖅᖃᕐᓂᐊᖅᑐᖅ ᐃᒪᓐᓇᑎᒋ #ᒥᓂᑦᓯᓂ# ᒥᓂᑦᓯᓂ #ᑎᑦᑕᓂ# ᑎᑦᑕᓂ.",
	"st-to-msg-end": "ᓂᕈᐊᕐᓗᒍ \"ᐱᓕᕆᐊᖅ ᑲᔪᓯᓕ\" ᑕᑭᓂᖅᓴᐅᓂᐊᕐᒪᑦ ᐱᓕᕆᐊᕆᔭᑦ.",
	"st-msgbx-ttl": "ᐱᓕᕆᐊᑦ ᐃᓱᓕᓕᒑᓕᕐᓂᖓᓄᑦ ᓇᓗᓇᖅᓯᔪᖅ",
	"st-alrdy-to-msg": "ᒪᒥᐊᓇᖅ ᐱᓕᕆᐊᑦ ᐃᓱᓕᒻᒪᑦ. ᐊᑎᓕᐅᕆᑦ ᐃᓯᕈᑎᓐᓄᑦ.",
	"st-btn-cont": "ᐱᓕᕆᐊᖅ ᑲᔪᓯᓕ.",
	"st-btn-end": "ᐱᓕᕆᐊᖅ ᐃᓱᓕᓪᓕ.",

	/* Toggle details */
	"td-toggle": "ᑕᒪᐃᓐᓂ ᓇᓕᐊᓐᓄᕋᕐᓕ",
	"td-open": "ᐊᖏᓪᓕᒋᐊᖅᑐᐃᓐᓇᐅᓕ",
	"td-close": "ᒥᑭᒡᓕᒋᐊᖅᑐᐃᓐᓇᐅᓕ",
	"td-ttl-open": "ᐊᓂᓪᓕᒋᐊᖅᑐᐃᓐᓇᐅᓕ ᐃᓗᓕᓕᒫᖏᑦ",
	"td-ttl-close": "ᒥᑭᒡᓕᒋᐊᖅᑐᐃᓐᓇᐅᓕ ᐃᓗᓕᓕᒫᖏᑦ",

	/* Table enhancement */
	sortAsc: ": ᐱᒋᐊᖅᑎᓪᓕ ᐊᖏᒡᓕᒋᐊᕈᑎ",
	sortDesc: ": ᐱᒋᐊᖅᑎᓪᓕ ᒥᑭᒡᓕᒋᐊᕈᑎ",
	emptyTbl: "ᑭᐳᒥ ᑎᑎᖅᑲᖅᑕᖃᙱᓚ",
	infoEntr: "Showing _START_ to _END_ of _TOTAL_ entries",
	infoEmpty: "ᓴᖅᑭᔮᖅᑎᑦᓯᔪᖅ 0 ᓂᒃ 0 ᓄᑦ ᐃᓕᓂᑯᓐᓂ",
	infoFilt: "(ᐊᑕᖐᔾᔭᐃᒃᑯᖅᓯᒪᔪᖅ ᑕᕝᕙᙵᑦ _MAX_ ᑕᒻᒪᐃᓐᓂᒃ ᐃᓕᓂᑯᓐᓂᑦ)",
	info1000: ",",
	lenMenu: "ᓴᖅᑭᓪᓕᑦ _ᓱᔾᔪᑎᑦ_ ᐃᓕᓂᑯᑦ",
	filter: "ᐊᑕᖐᔾᔭᒃᑯᓯᖅᓯᒪᔪᑦ",
	tbFilterInst: "This table provides a sorting feature via the buttons across the column header row with only one instance visible at a time.",

	/* Twitter embedded timeline */
	"twitter-start-notice": "Start of @%username%’s X timeline",
	"twitter-end-notice": "End of @%username%’s X timeline",
	"twitter-skip-end": "Skip to end of @%username%’s X timeline",
	"twitter-skip-start": "Skip to start of @%username%’s X timeline",
	"twitter-timeline-title": "X timeline",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "ᐊᖏᓪᓕᒋᐊᕐᓕ",
	"geo-zmout": "ᒥᑭᓪᓕᒋᐊᕐᓕ",
	"geo-zmwrld": "ᐊᖏᓪᓕᒋᐊᖅᑎᑦᓯᓕ ᓄᓇᙳᐊᕐᒥ",
	"geo-zmfeat": "ᐊᖏᓪᓕᒋᐊᖅᑎᑦᓯᓕ ᓄᓇᙳᐊᕐᒥ ᐃᓚᖓᓂ",
	"geo-sclln": "ᓄᓇᙳᐊᑉ ᐊᖏᓂᖓ",
	"geo-msepos": "ᓴᓂᒨᖅᑐᕐᓗ ᑐᑭᒨᖅᑐᕐᓗ ᐊᕕᙵᙳᐊᑉ ᐱᒋᐊᕈᑎᖓᓂ",
	"geo-ariamap": "ᓄᓄᙳᐊᕐᒥ ᓇᓗᓇᐃᒃᑯᑕᖅ. ᓇᓗᓇᐃᔭᖅᓯᒪᔪᑦ ᓄᓇᙳᐊᖅ ᑭᓲᓂᖏᑦ ᐊᑖᓃᑦᑐᒥ ᑭᐳᒥ.",
	"geo-ally": "<strong>ᓇᕿᑦᑕᐅᒻᒥᑦ ᐊᑐᖅᑏᑦ:</strong> ᓄᓇᙳᐊᖅ ᓴᖅᑭᔮᓕᕈᓂ, ᖃᔾᔪᙳᐊᓖᑦ ᓇᕿᒐᑦ ᐊᑐᕐᓗᒋᑦ ᓄᓇᙳᐊᕐᒥ ᕿᒥᕐᕈᓂᕐᒧᑦ ᑖᒃᑯᐊᓗ ᐊᒻᒪ - ᓇᒋᖃᑦ ᐊᖏᓪᓕᒋᐊᖅᑎᑦᓯᓂᕐᒧᑦ. ᖃᔾᔪᙳᐊᓖᑦ ᐊᑐᕈᓐᓇᖏᑦᑐᑦ ᓄᓇᙳᐊᕐᒧᑦ ᐊᖏᓪᓕᒋᐊᖅᓯᒪᑎᓪᓗᒍ ᐃᓗᓕᖏᑦ.",
	"geo-allyttl": "ᑐᑭᓕᐊᕈᑎᑦ: ᓄᓇᙳᐊᓕᕆᓂᖅ",
	"geo-tgllyr": "ᓴᖅᑭᔮᕐᓂᖓ ᓇᓕᐊᓐᓅᕋᐅᑎᓗᒍ",
	"geo-hdnlyr": "ᑕᒪᓐᓇ ᒫᓐᓇᐅᔪᖅ ᐃᔨᖅᓯᒪᔪᖅ.",
	"geo-bmap-url": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/WMTS/",
	"geo-bmap-matrix-set": "default028mm",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis −ᑲᓇᑕᙳᐊᒥᓄᓇᙳᐊᖅ",
	"geo-sel": "ᓂᕈᓗᓪᓕ",
	"geo-lblsel": "ᓇᕿᓪᓗᒍᑕᑯᔪᒪᓗᒍᐃᓚᖓᓄᓇᙳᐊᕐᒦᑦᑐᖅ",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "ᓄᓇᓕᐅᑉᑕᐃᒎᓯᖓᑎᑎᕋᕐᓗᒍ&#44;ᑐᕌᕐᕕᖕᓄᑦᓇᓗᓇᐃᒃᑯᑕᖅ&#44;ᐊᑐᕆᐊᕐᒥᑐᕌᕈᑎᖓ&#44;ᑲᓇᑕᒥᓄᓇᙳᐊᖅᑎᒍᑦᓈᓴᐅᑎᖓ...",
	"geo-loc-label": "ᐃᓂᖓ",
	"geo-aoi-north": "ᐅᐊᓐᓇᖅ",
	"geo-aoi-east": "ᑲᓇᓐᓇᖅ",
	"geo-aoi-south": "ᓂᒋᖅ",
	"geo-aoi-west": "ᐱᖓᓐᓇᖅ",
	"geo-aoi-instructions": "ᐃᑦᑎᕐᕕᐅᔭᓕᕈᓄᓇᙳᐊᖅᓇᓗᓇᐃᒃᑯᑕᖏᓪᓘᓐᓃᑦᐃᓕᓗᒋᑦᑖᓐᓇᓗᓇᕿᓗᒍ\"ᐃᓚᓯᓂᖅ\"ᓇᕿᑦᑕᐅᑦ.",
	"geo-aoi-title": "Draw box on map or enter coordinates",
	"geo-aoi-btndraw": "ᑎᑎᖅᓯᓕ",
	"geo-aoi-btnclear": "ᐲᔭᕐᓕ",
	"geo-geoloc-btn": "ᐊᖏᓪᓕᒋᐊᖅᑎᑦᓯᓕ ᒫᓐᓇᐅᔪᖅ ᐃᓂᒋᔭᒥᓄᑦ",
	"geo-geoloc-fail": "ᐃᓂᖓᖃᐅᔨᔭᐅᙱᑦᑐᖅ.ᐃᓂᒥᖃᐅᔨᓴᕈᑎᐃᑭᓐᖔᕋᓗᐊᕐᒪᖔᑦᖃᐅᔨᒋᐊᕆᑦ.",
	"geo-geoloc-uncapable": "ᐃᓂᖓᓂᓇᓂᓯᔪᓐᓇᕐᓂᖅᐊᑐᒐᒃᓴᐅᙱᑦᑐᖅᐃᕝᕕᑦᓇᕈᔾᔪᖓᓄᑦ.",
	"geo-lgnd-grphc": "ᑭᓲᓂᖏᑦᓄᓇᙳᐊᑉᐃᓗᓕᖏᓐᓄᑦ.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",
	"skip-prefix": "Skip to:",

	/* Dismissable content */
	"dismiss": "ᖁᔭᓈᕐᓗᒍ",

	/* Template */
	"tmpl-signin": "ᐃᓯᕆᑦ",

	/* Filter */
	"fltr-lbl": "Filter<span class=\"wb-inv\"> content: results appear below as you type.</span>",
	"fltr-info": "Showing <span data-nbitem></span> filtered from <span data-total></span> total entries",

	/* Data scrub */
	"pii-header": "Remove Personal information",
	"pii-intro": "Some information in your form is identified as personal information and it will be replaced as follows:",
	"pii-view-more": "What is considered personal information?",
	"pii-view-more-info": "<p>The following types of information are considered personal information:</p><ul><li>email address</li><li>telephone number</li><li>postal code</li><li>passport number</li><li>business number</li><li>social insurance number (SIN)</li></ul>",
	"pii-yes-btn": "Remove personal information and submit",
	"pii-cancel-btn": "Go back and edit fields",
	"redacted": "redacted",

	/* Steps form */
	"rel-preposition": " of ",
	"progress-label": "Questionnaire progress:"
};

} )( wb );
