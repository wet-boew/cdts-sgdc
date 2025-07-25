/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- German dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "de",
	"lang-native": "Deutsch",
	add: "Hinzufügen",
	all: "Alle",
	tphp: "Zum Seitenanfang",
	load: "Be ...",
	process: "Verarbeitung ...",
	srch: "Suchen",
	"no-match": "Keine Übereinstimmung gefunden",
	matches: {
		mixin: "[MIXIN] Ergebnisse gefunden"
	},
	current: "(Aktuell)",
	hide: "Verbergen",
	err: "Fehler",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Starten",
	stop: "Stoppen",
	back: "Zurück",
	cancel: "Kündigen",
	"min-ago": "Vor einer Minute",
	"coup-mins": "paar Minuten",
	"mins-ago": {
		mixin: "Vor [MIXIN] Minuten"
	},
	"hour-ago": "Vor einer Stunde",
	"hours-ago": {
		mixin: "Vor [MIXIN] Stunden"
	},
	"days-ago": {
		mixin: "Vor [MIXIN] Tagen"
	},
	yesterday: "gestern",

	nxt: "Nächste",
	"nxt-r": "Nächste (rechte Pfeiltaste)",
	prv: "Früher",
	"prv-l": "Früher (linke Pfeiltaste)",
	first: "Erste",
	last: "Letzte",
	page: "Jump to: Page",
	"srch-menus": "Suche und Menüs",
	email: "E-Mail",
	"menu-close": "Schließen Sie das Menü",
	"overlay-close": "Schließen Sie das Pop-up",
	"esc-key": "(Escape-Taste)",
	show: "Zeigen",

	/* Tabbed interface */
	"tab-rot": {
		off: "Stoppen Registerkarte Drehung",
		on: "Starten Registerkarte Drehung"
	},
	"tab-list": "Registerkarte-Liste",
	"tab-pnl-end1": "Ende dieser Registerkarte angezeigt.",
	"tab-pnl-end2": "Zurück zur Liste der Registerkarte",
	"tab-pnl-end3": "oder der Rest der Seite fortzusetzen.",
	"tab-play": "Spielen",

	/* Multimedia player */
	"mmp-play": "Spielen",
	pause: "Pausieren",
	open: "Öffnen",
	close: "Schließen",
	volume: "Lautstärke",
	mute: {
		on: "Stumm",
		off: "Stummschaltung"
	},
	cc: {
		off: "Ausblenden Untertitelung",
		on: "Zeige Untertitelung"
	},
	"cc-err": "Fehler beim Laden Untertiteln",
	fs: "Enter full screen",
	adesc: {
		on: "Aktivieren Sie Audio-Beschreibung",
		off: "Deaktivieren Sie Audio-Beschreibung"
	},
	pos: "Aktuelle Position:",
	dur: "Insgesamt benötigte Zeit",
	msgYoutubeNotLoad: "Video encountered loading issues",
	msgYoutubeVdLoad: "Loading Youtube video",

	/* Share widget */
	"shr-txt": "Teilen",
	"shr-pg": " Sie diese Seite",
	"shr-vid": " Sie diese Video",
	"shr-aud": " diese Audiodatei",
	"shr-hnt": " mit {s} ",
	"shr-disc": "Keine Unterstützung von Produkten oder Dienstleistungen ausdrücklich oder stillschweigend.",

	/* Form validation */
	"frm-nosubmit": "Das Formular konnte nicht vorgelegt werden, da ",
	"errs-fnd": " Fehler gefunden wurden.",
	"err-fnd": " Fehler festgestellt wurde.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Ausblenden Kalender",
	"date-show": "Wählen Sie ein Datum aus einem Kalender für das Feld:",
	"date-sel": "Ausgewählt",

	/* Calendar */
	days: [
		"Sonntag",
		"Montag",
		"Dienstag",
		"Mittwoch",
		"Donnerstag",
		"Freitag",
		"Samstag"
	],
	mnths: [
		"Januar",
		"Februar",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Dezember"
	],
	cal: "Kalender",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Aktueller Tag)",
	"cal-goToLnk": "Gehe zu<span class=\"wb-inv\"> Monat des Jahres</span>",
	"cal-goToTtl": "Gehe zu Monat des Jahres",
	"cal-goToMnth": "Monat",
	"cal-goToYr": "Jahr",
	"cal-goToBtn": "Gehen",
	prvMnth: "Vorheriger Monat: ",
	nxtMnth: "Nächster Monat: ",

	/* Lightbox */
	"lb-curr": "Artikel %curr% von %total%",
	"lb-xhr-err": "Dieser Inhalt wurde nicht geladen.",
	"lb-img-err": "Dieses Bild konnte nicht geladen werden.",

	/* Charts widget */
	"tbl-txt": "Tabelle",
	"tbl-dtls": "Grafik. Angaben in der folgenden Tabelle.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Ihre Sitzung endet automatisch in #min# min #sec# sec.",
	"st-to-msg-end": "Wählen Sie \"Weiter Sitzung\", um die Sitzung zu verlängern.",
	"st-msgbx-ttl": "Session Zeitablaufwarnung",
	"st-alrdy-to-msg": "Leider Ihre Sitzung ist bereits abgelaufen. Bitte loggen Sie sich erneut.",
	"st-btn-cont": "Weiter Sitzung",
	"st-btn-end": "Sitzung beenden jetzt",

	/* Toggle details */
	"td-toggle": "Wechseln alle",
	"td-open": "Erweitern",
	"td-close": "Alle ausblenden",
	"td-ttl-open": "Erweitern Sie alle Teile der Inhalte",
	"td-ttl-close": "Alles Teile der Inhalte",

	/* Table enhancement */
	sortAsc: ": Aktivieren für aufsteigend sortieren",
	sortDesc: ": Aktivieren für absteigend sortieren",
	emptyTbl: "Keine Daten in der Tabelle verfügbaren",
	infoEntr: "Zeige _START_ bis _END_ von _TOTAL_ Einträge",
	infoEmpty: "Zeige 0 bis 0 von 0 Einträge",
	infoFilt: "(gefiltert aus insgesamt _MAX_ Einträge)",
	info1000: "&#160;",
	lenMenu: "Zeige _MENU_ Einträge",
	filter: "Filter Artikel",
	tbFilterInst: "This table provides a sorting feature via the buttons across the column header row with only one instance visible at a time.",

	/* Twitter embedded timeline */
	"twitter-start-notice": "Start of @%username%’s X timeline",
	"twitter-end-notice": "End of @%username%’s X timeline",
	"twitter-skip-end": "Skip to end of @%username%’s X timeline",
	"twitter-skip-start": "Skip to start of @%username%’s X timeline",
	"twitter-timeline-title": "X timeline",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Vergrößern",
	"geo-zmout": "Verkleinern",
	"geo-zmwrld": "Zoom auf weit Karte",
	"geo-zmfeat": "Zoom auf das Element",
	"geo-sclln": "Karte Maßstab",
	"geo-msepos": "Breitengrad und Längengrad des Mauszeigers",
	"geo-ariamap": "Kartenobjekt. Die Beschreibungen der Karte Funktionen sind in der Tabelle unten.",
	"geo-ally": "<strong>Keyboard-Benutzer:</strong> Wenn die Karte im Fokus ist, verwenden Sie die Pfeiltasten, um die Karte und die Plus-und Minus-Tasten zu vergrößern schwenken. Die Pfeiltasten werden nicht schwenken die Karte, wenn die Karte soweit gezoomt.",
	"geo-allyttl": "Anleitung: Kartennavigation",
	"geo-tgllyr": "Umschalten der Anzeige der Schicht",
	"geo-hdnlyr": "Diese Schicht ist im Moment versteckt.",
	"geo-bmap-url": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/WMTS/",
	"geo-bmap-matrix-set": "default028mm",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada Basiskarte (Englisch oder Französisch)",
	"geo-sel": "Wählen",
	"geo-lblsel": "Überprüfen Sie das Element auf der Karte auswählen",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Geben Sie den Namen des Ortes&#44; Postleitzahl&#44; Adresse (Post)&#44; die Anzahl der NTS ...",
	"geo-loc-label": "Position",
	"geo-aoi-north": "Norden",
	"geo-aoi-east": "Osten",
	"geo-aoi-south": "Süden",
	"geo-aoi-west": "Westen",
	"geo-aoi-instructions": "Zeichnen Feld auf der Karte oder geben Sie die Koordinaten ein und klicken Sie auf \"Hinzufügen\".",
	"geo-aoi-title": "Draw box on map or enter coordinates",
	"geo-aoi-btndraw": "Ziehen",
	"geo-aoi-btnclear": "Entfernen",
	"geo-geoloc-btn": "Zoom auf die aktuelle Lage",
	"geo-geoloc-fail": "Lage fehlgeschlagen. Bitte stellen Sie sicher, dass die Ortungsdienste aktiviert sind.",
	"geo-geoloc-uncapable": "Der Ort ist nicht von Ihrem Browser unterstützt.",
	"geo-lgnd-grphc": "Legende Grafik für Karten-Layer.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",
	"skip-prefix": "Skip to:",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Login",

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
 * Locale: DE (German, Deutsch)
 */
$.extend( $.validator.messages, {
	required: "Dieses Feld ist ein Pflichtfeld.",
	maxlength: $.validator.format( "Geben Sie bitte maximal {0} Zeichen ein." ),
	minlength: $.validator.format( "Geben Sie bitte mindestens {0} Zeichen ein." ),
	rangelength: $.validator.format( "Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein." ),
	email: "Geben Sie bitte eine gültige E-Mail-Adresse ein.",
	url: "Geben Sie bitte eine gültige URL ein.",
	date: "Geben Sie bitte ein gültiges Datum ein.",
	number: "Geben Sie bitte eine Nummer ein.",
	digits: "Geben Sie bitte nur Ziffern ein.",
	equalTo: "Wiederholen Sie bitte denselben Wert.",
	range: $.validator.format( "Geben Sie bitte einen Wert zwischen {0} und {1} ein." ),
	max: $.validator.format( "Geben Sie bitte einen Wert kleiner oder gleich {0} ein." ),
	min: $.validator.format( "Geben Sie bitte einen Wert größer oder gleich {0} ein." ),
	creditcard: "Geben Sie bitte eine gültige Kreditkarten-Nummer ein.",
	remote: "Korrigieren Sie bitte dieses Feld.",
	dateISO: "Geben Sie bitte ein gültiges Datum ein (ISO-Format).",
	step: $.validator.format( "Geben Sie bitte ein Vielfaches von {0} ein." ),
	maxWords: $.validator.format( "Geben Sie bitte {0} Wörter oder weniger ein." ),
	minWords: $.validator.format( "Geben Sie bitte mindestens {0} Wörter ein." ),
	rangeWords: $.validator.format( "Geben Sie bitte zwischen {0} und {1} Wörtern ein." ),
	accept: "Geben Sie bitte einen Wert mit einem gültigen MIME-Typ ein.",
	alphanumeric: "Geben Sie bitte nur Buchstaben (keine Umlaute), Zahlen oder Unterstriche ein.",
	bankaccountNL: "Geben Sie bitte eine gültige Kontonummer ein.",
	bankorgiroaccountNL: "Geben Sie bitte eine gültige Bank- oder Girokontonummer ein.",
	bic: "Geben Sie bitte einen gültigen BIC-Code ein.",
	cifES: "Geben Sie bitte eine gültige CIF-Nummer ein.",
	cpfBR: "Geben Sie bitte eine gültige CPF-Nummer ein.",
	creditcardtypes: "Geben Sie bitte eine gültige Kreditkarten-Nummer ein.",
	currency: "Geben Sie bitte eine gültige Währung ein.",
	extension: "Geben Sie bitte einen Wert mit einer gültigen Erweiterung ein.",
	giroaccountNL: "Geben Sie bitte eine gültige Girokontonummer ein.",
	iban: "Geben Sie bitte eine gültige IBAN ein.",
	integer:  "Geben Sie bitte eine positive oder negative Nicht-Dezimalzahl ein.",
	ipv4: "Geben Sie bitte eine gültige IPv4-Adresse ein.",
	ipv6: "Geben Sie bitte eine gültige IPv6-Adresse ein.",
	lettersonly: "Geben Sie bitte nur Buchstaben ein.",
	letterswithbasicpunc: "Geben Sie bitte nur Buchstaben oder Interpunktion ein.",
	mobileNL: "Geben Sie bitte eine gültige Handynummer ein.",
	mobileUK: "Geben Sie bitte eine gültige Handynummer ein.",
	netmask:  "Geben Sie bitte eine gültige Netzmaske ein.",
	nieES: "Geben Sie bitte eine gültige NIE-Nummer ein.",
	nifES: "Geben Sie bitte eine gültige NIF-Nummer ein.",
	nipPL: "Geben Sie bitte eine gültige NIP-Nummer ein.",
	notEqualTo: "Geben Sie bitte einen anderen Wert ein. Die Werte dürfen nicht gleich sein.",
	nowhitespace: "Kein Leerzeichen bitte.",
	pattern: "Ungültiges Format.",
	phoneNL: "Geben Sie bitte eine gültige Telefonnummer ein.",
	phonesUK: "Geben Sie bitte eine gültige britische Telefonnummer ein.",
	phoneUK: "Geben Sie bitte eine gültige Telefonnummer ein.",
	phoneUS: "Geben Sie bitte eine gültige Telefonnummer ein.",
	postalcodeBR: "Geben Sie bitte eine gültige brasilianische Postleitzahl ein.",
	postalCodeCA: "Geben Sie bitte eine gültige kanadische Postleitzahl ein.",
	postalcodeIT: "Geben Sie bitte eine gültige italienische Postleitzahl ein.",
	postalcodeNL: "Geben Sie bitte eine gültige niederländische Postleitzahl ein.",
	postcodeUK: "Geben Sie bitte eine gültige britische Postleitzahl ein.",
	require_from_group: $.validator.format( "Füllen Sie bitte mindestens {0} dieser Felder aus." ),
	skip_or_fill_minimum: $.validator.format( "Überspringen Sie bitte diese Felder oder füllen Sie mindestens {0} von ihnen aus." ),
	stateUS: "Geben Sie bitte einen gültigen US-Bundesstaat ein.",
	strippedminlength: $.validator.format( "Geben Sie bitte mindestens {0} Zeichen ein." ),
	time: "Geben Sie bitte eine gültige Uhrzeit zwischen 00:00 und 23:59 ein.",
	time12h: "Geben Sie bitte eine gültige Uhrzeit im 12-Stunden-Format ein.",
	vinUS: "Die angegebene Fahrzeugidentifikationsnummer (VIN) ist ungültig.",
	zipcodeUS: "Die angegebene US-Postleitzahl ist ungültig.",
	ziprange: "Ihre Postleitzahl muss im Bereich 902xx-xxxx bis 905xx-xxxx liegen."
} );
return $;
}));
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
 * Localized default methods for the jQuery validation plugin.
 * Locale: DE
 */
$.extend( $.validator.methods, {
	date: function( value, element ) {
		return this.optional( element ) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test( value );
	},
	number: function( value, element ) {
		return this.optional( element ) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test( value );
	}
} );
return $;
}));
});