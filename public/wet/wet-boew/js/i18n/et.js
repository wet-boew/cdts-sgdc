/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Estonian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "et",
	"lang-native": "Eesti keel",
	add: "Lisama",
	all: "Kõik",
	tphp: "Lehekülje algusesse",
	load: "laadimine....",
	process: "töötlemine ...",
	srch: "Otsi",
	"no-match": "Vastet ei leitud",
	matches: {
		mixin: "Leitud [MIXIN] vaste(t)"
	},
	current: "(praegune)",
	hide: "Peida",
	err: "Viga",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ",",
	space: "&#32;",
	start: "Alusta",
	stop: "Lõpeta",
	back: "Tagasi",
	cancel: "Loobu",
	"min-ago": "minut tagasi",
	"coup-mins": "mõni minut tagasi",
	"mins-ago": {
		mixin: "[MIXIN] minutit tagasi"
	},
	"hour-ago": "tund aega tagasi",
	"hours-ago": {
		mixin: "[MIXIN] tundi tagasi"
	},
	"days-ago": {
		mixin: "[MIXIN] päeva tagasi"
	},
	yesterday: "eile",

	nxt: "Järgmine",
	"nxt-r": "Järgmine (paremat nooleklahvi)",
	prv: "Eelmine",
	"prv-l": "Eelmine (vasakut nooleklahvi)",
	first: "Esimene",
	last: "Viimane",
	page: "Jump to: Page",
	"srch-menus": "Otsi ja menüüd",
	email: "E-post",
	"menu-close": "Sulge menüü",
	"overlay-close": "Sulge pop-up",
	"esc-key": "(klahviga Escape)",
	show: "Näita",

	/* Tabbed interface */
	"tab-rot": {
		off: "Seiska sakkide rotatsioon",
		on: "Alusta sakkide rotatsiooni"
	},
	"tab-list": "Sakkide nimekiri",
	"tab-pnl-end1": "Selle sakkide paneeli lõpp",
	"tab-pnl-end2": "Tagasi sakkide nimekirja",
	"tab-pnl-end3": "või edasi ülejäänud lehele",
	"tab-play": "Mängi",

	/* Multimedia player */
	"mmp-play": "Mängi",
	pause: "Paus",
	open: "Ava",
	close: "Sulge",
	volume: "Helitugevus",
	mute: {
		on: "Vaigista",
		off: "Heli tagasi"
	},
	cc: {
		off: "Peida subtiitrid",
		on: "Näita subtiitreid"
	},
	"cc-err": "Viga subtiitrite avamisel",
	fs: "Enter full screen",
	adesc: {
		on: "Luba audio kirjeldus",
		off: "Sulge audio kirjeldus"
	},
	pos: "Praegune asukoht",
	dur: "Kogu kestvus:",
	msgYoutubeNotLoad: "Video encountered loading issues",
	msgYoutubeVdLoad: "Loading Youtube video",

	/* Share widget */
	"shr-txt": "Jaga seda lehekülge",
	"shr-pg": " seda lehekülge",
	"shr-vid": " seda videot",
	"shr-aud": " see helifail",
	"shr-hnt": "koos {s}",
	"shr-disc": "Mistahes tootele või teenusele pole otseselt ega kaudselt toetust avaldatud.",

	/* Form validation */
	"frm-nosubmit": "Ankeeti ei saa esitada, kuna",
	"errs-fnd": "on leitud vigu.",
	"err-fnd": "on leitud viga.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Peida kalender",
	"date-show": "Vali kalendrist kuupäev:",
	"date-sel": "Valitud",

	/* Calendar */
	days: [
		"Pühapäev",
		"Esmaspäev",
		"Teisipäev",
		"Kolmapäev",
		"Neljapäev",
		"Reede",
		"Laupäev"
	],
	mnths: [
		"Jaanuar",
		"Veebruar",
		"Märts",
		"Aprill",
		"Mai",
		"Juuni",
		"Juuli",
		"August",
		"September",
		"Oktoober",
		"November",
		"Detsember"
	],
	cal: "Kalender",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Tänane päev)",
	"cal-goToLnk": "Mine aastas</span>  kuule <span class=\"wb-inv\"> ",
	"cal-goToTtl": "Mine sellele kuule aastas",
	"cal-goToMnth": "Kuu",
	"cal-goToYr": "Aasta",
	"cal-goToBtn": "Mine",
	prvMnth: "Eelmine kuu: ",
	nxtMnth: "Järgmine kuu: ",

	/* Lightbox */
	"lb-curr": "Kirje %curr% koguhulgast %total%",
	"lb-xhr-err": "Sisu laadimine ebaõnnestus",
	"lb-img-err": "Pildi laadimine ebaõnnestus",

	/* Charts widget */
	"tbl-txt": "Tabel",
	"tbl-dtls": "Graafik. Täpsemad andmed järgnevas tabelis.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Teie sessioon aegub automaatselt #min# min #sec# sec.",
	"st-to-msg-end": "Valige \"Jätka sessioon\" laiendada oma istungil.",
	"st-msgbx-ttl": "Hoiatus - sessiooni lõpp",
	"st-alrdy-to-msg": "Kahjuks on su sessioon aegunud. Palun logi uuesti sisse.",
	"st-btn-cont": "Jätka istung",
	"st-btn-end": "Lõpetage seanss nüüd",

	/* Toggle details */
	"td-toggle": "Lülita kõik",
	"td-open": "Laienda kõiki",
	"td-close": "Sulge kõik",
	"td-ttl-open": "Laienda kõiki sisu osasid",
	"td-ttl-close": "Sulge kõik sisu osad",

	/* Table enhancement */
	sortAsc: ": aktiveeri kasvavaks järjestuseks",
	sortDesc: ": aktiveeri kahanevaks järjestuseks",
	emptyTbl: "Tabelist puuduvad andmed",
	infoEntr: "Näitan _START_-_END_  _TOTAL_ kirjest",
	infoEmpty: "Näitan kirjeid 0-0 koguhulgast 0",
	infoFilt: "(filtreeritud _MAX_ sissekannete koguhulgast)",
	info1000: "&#160;",
	lenMenu: "Näita _MENU_ kandeid",
	filter: "Filtreeri",
	tbFilterInst: "This table provides a sorting feature via the buttons across the column header row with only one instance visible at a time.",

	/* Twitter embedded timeline */
	"twitter-start-notice": "Start of @%username%’s X timeline",
	"twitter-end-notice": "End of @%username%’s X timeline",
	"twitter-skip-end": "Skip to end of @%username%’s X timeline",
	"twitter-skip-start": "Skip to start of @%username%’s X timeline",
	"twitter-timeline-title": "X timeline",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Suumi",
	"geo-zmout": "Vähenda",
	"geo-zmwrld": "Suumi kaardi ulatuses",
	"geo-zmfeat": "Suumi elemente",
	"geo-sclln": "mõõtkava",
	"geo-msepos": "Laius-ja pikkuskraad hiirekursori",
	"geo-ariamap": "Kaardi objekt. Võimaluste kirjeldused leiad alltoodud tabelist.",
	"geo-ally": "<strong>Klaviatuuri kasutajatele:</strong> Kui kaart on fookuses, kasutage nooleklahve kaardi panoraamimiseks ja pluss- ja miinusklahve suumimiseks. Nooleklahvidega ei saa panoraamida, kui kaart on suumitud kogu ulatuses.",
	"geo-allyttl": "Juhised: Kaardil navigeerimine",
	"geo-tgllyr": "Kihtide vaate lülitamine",
	"geo-hdnlyr": "See kiht on praegu peidetud.",
	"geo-bmap-url": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/WMTS/",
	"geo-bmap-matrix-set": "default028mm",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada põhikaart (inglise või prantsuse keeles)",
	"geo-sel": "Vali",
	"geo-lblsel": "Märkige kaardil elemendi valimiseks",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Märkida nimi asukohta&#44; postiindeks&#44; aadress (postiaadress)&#44; kui palju on NTS ...",
	"geo-loc-label": "Asukoht",
	"geo-aoi-north": "Põhja",
	"geo-aoi-east": "Ida",
	"geo-aoi-south": "lõuna",
	"geo-aoi-west": "Lääs",
	"geo-aoi-instructions": "Joonista kasti kaardil või sisesta koordinaadid ja klikkige \"Lisa\" nuppu.",
	"geo-aoi-title": "Draw box on map or enter coordinates",
	"geo-aoi-btndraw": "Joonistama",
	"geo-aoi-btnclear": "Eemaldama",
	"geo-geoloc-btn": "Suumi elemente",
	"geo-geoloc-fail": "Asukoht ei ole. Palun veenduge, et asukoha määramise teenuste on lubatud.",
	"geo-geoloc-uncapable": "Lokaliseerimine ei toeta teie brauser.",
	"geo-lgnd-grphc": "Legend graafika kaardi kiht.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",
	"skip-prefix": "Skip to:",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Logi sisse",

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

wb.doc.one( "formLanguages.wb", function() {
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ET (Estonian; eesti, eesti keel)
 */
$.extend( $.validator.messages, {
	required: "See väli peab olema täidetud.",
	maxlength: $.validator.format( "Palun sisestage vähem kui {0} tähemärki." ),
	minlength: $.validator.format( "Palun sisestage vähemalt {0} tähemärki." ),
	rangelength: $.validator.format( "Palun sisestage väärtus vahemikus {0} kuni {1} tähemärki." ),
	email: "Palun sisestage korrektne e-maili aadress.",
	url: "Palun sisestage korrektne URL.",
	date: "Palun sisestage korrektne kuupäev.",
	dateISO: "Palun sisestage korrektne kuupäev (YYYY-MM-DD).",
	number: "Palun sisestage korrektne number.",
	digits: "Palun sisestage ainult numbreid.",
	equalTo: "Palun sisestage sama väärtus uuesti.",
	range: $.validator.format( "Palun sisestage väärtus vahemikus {0} kuni {1}." ),
	max: $.validator.format( "Palun sisestage väärtus, mis on väiksem või võrdne arvuga {0}." ),
	min: $.validator.format( "Palun sisestage väärtus, mis on suurem või võrdne arvuga {0}." ),
	creditcard: "Palun sisestage korrektne krediitkaardi number."
} );
return $;
}));

});