/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Italian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "it",
	"lang-native": "Italiano",
	add: "Aggiungere",
	all: "Tutti",
	tphp: "Inizio pagina",
	load: "caricamento...",
	process: "elaborazione ...",
	srch: "Cerca",
	"no-match": "Nessuna corrispondenza trovata",
	matches: {
		mixin: "[MIXIN] corrispondenza/e trovata/e"
	},
	current: "(attuale)",
	hide: "Nascondere",
	err: "Errore",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Inizio",
	stop: "Stop",
	back: "Indietro",
	cancel: "Annullare",
	"min-ago": "un minuto fa",
	"coup-mins": "un paio di minuti fa",
	"mins-ago": {
		mixin: "[MIXIN] Minuti fa"
	},
	"hour-ago": "un'ora fa",
	"hours-ago": {
		mixin: "[MIXIN] ore fa"
	},
	"days-ago": {
		mixin: "[MIXIN] giorni fa"
	},
	yesterday: "ieri",

	nxt: "Prossimo",
	"nxt-r": "Prossimo (tasto freccia destra)",
	prv: "Precedente",
	"prv-l": "Precedente (tasto freccia sinistra)",
	first: "Primo",
	last: "Ultimo",
	page: "Jump to: Page",
	"srch-menus": "Ricerca e menu",
	email: "E-mail",
	"menu-close": "Chiudere il menu",
	"overlay-close": "Chiudere la sovrapposizione",
	"esc-key": "(tasto ESC)",
	show: "Mostra",

	/* Tabbed interface */
	"tab-rot": {
		off: "Arresto rotazione scheda",
		on: "Inizio rotazione scheda"
	},
	"tab-list": "Elenco schede",
	"tab-pnl-end1": "Fine di questo pannello a schede.",
	"tab-pnl-end2": "Ritorna alla lista schede",
	"tab-pnl-end3": "o continuare con il resto della pagina.",
	"tab-play": "Play",

	/* Multimedia player */
	"mmp-play": "Play",
	pause: "Pausa",
	open: "Aprire",
	close: "Chiudere",
	volume: "Volume",
	mute: {
		on: "Muto",
		off: "Riattivare audio"
	},
	cc: {
		off: "Nascondi i sottotitoli",
		on: "Mostra i sottotitoli"
	},
	"cc-err": "Errore caricamento sottotitoli",
	fs: "Enter full screen",
	adesc: {
		on: "Attiva descrizione audio",
		off: "Disattiva descrizione audio"
	},
	pos: "Posizione attuale:",
	dur: "Tempo totale:",
	msgYoutubeNotLoad: "Video encountered loading issues",
	msgYoutubeVdLoad: "Loading Youtube video",

	/* Share widget */
	"shr-txt": "Condividi",
	"shr-pg": " questa pagina",
	"shr-vid": " questo video",
	"shr-aud": " questo file audio",
	"shr-hnt": " con {s} ",
	"shr-disc": "Nessuna approvazione di prodotti o servizi è espressa o implicita",

	/* Form validation */
	"frm-nosubmit": "Non è stato possibile inviare il modulo in quanto ",
	"errs-fnd": " errori sono stati trovati.",
	"err-fnd": " errore è stato trovato.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Nascondi calendario",
	"date-show": "Scegli una data da un calendario per il campo:",
	"date-sel": "Selezionato",

	/* Calendar */
	days: [
		"Domenica",
		"Lunedi",
		"Martedì",
		"Mercoledì",
		"Giovedi",
		"Venerdì",
		"Sabato"
	],
	mnths: [
		"Gennaio",
		"Febbraio",
		"Marzo",
		"Aprile",
		"Maggio",
		"Giugno",
		"Luglio",
		"Agosto",
		"Settembre",
		"Ottobre",
		"Novembre",
		"Dicembre"
	],
	cal: "Calendario",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Giorno attuale)",
	"cal-goToLnk": "Vai ad un<span class=\"wb-inv\"> mese dell'anno</span>",
	"cal-goToTtl": "Vai al mese dell'anno",
	"cal-goToMnth": "Mese:",
	"cal-goToYr": "Anno:",
	"cal-goToBtn": "Andare",
	prvMnth: "Mese Precedente: ",
	nxtMnth: "Prossimo Mese: ",

	/* Lightbox */
	"lb-curr": "Articolo %curr% di %total%",
	"lb-xhr-err": "Questo contenuto non è stato caricato.",
	"lb-img-err": "Questa immagine non è stata caricata.",

	/* Charts widget */
	"tbl-txt": "Tabella",
	"tbl-dtls": "Grafico. Dettagli nella tabella riportata di seguito.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "La sessione scadrà automaticamente in #min# min #sec# sec .",
	"st-to-msg-end": "Seleziona \"Continua sessione\" per estendere la tua sessione.",
	"st-msgbx-ttl": "Avviso scadenza sessione",
	"st-alrdy-to-msg": "Spiacenti la sessione è già scaduta. Effettua il login di nuovo.",
	"st-btn-cont": "Continuare sessione",
	"st-btn-end": "Termina sessione ora",

	/* Toggle details */
	"td-toggle": "Alterna tutto",
	"td-open": "Espandi tutto",
	"td-close": "Riduci tutto",
	"td-ttl-open": "Espandi tutte le sezioni di contenuto",
	"td-ttl-close": "Riduci tutte le sezioni di contenuto",

	/* Table enhancement */
	sortAsc: ": organizza in ordine crescente",
	sortDesc: ": organizza in ordine decrescente",
	emptyTbl: "Non sono disponibili dati in tabella",
	infoEntr: "Mostra _START_ a _END_ di _TOTAL_ voci",
	infoEmpty: "Mostra 0 a 0 di 0 voci",
	infoFilt: "(filtrato da _MAX_ voci totali)",
	info1000: "&#160;",
	lenMenu: "Mostra _MENU_ voci",
	filter: "Filtra gli articoli",
	tbFilterInst: "This table provides a sorting feature via the buttons across the column header row with only one instance visible at a time.",

	/* Twitter embedded timeline */
	"twitter-start-notice": "Start of @%username%’s X timeline",
	"twitter-end-notice": "End of @%username%’s X timeline",
	"twitter-skip-end": "Skip to end of @%username%’s X timeline",
	"twitter-skip-start": "Skip to start of @%username%’s X timeline",
	"twitter-timeline-title": "X timeline",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Zoom avanti",
	"geo-zmout": "Zoom indietro",
	"geo-zmwrld": "Zoom sull'estensione della mappa",
	"geo-zmfeat": "Zoom sull'elemento",
	"geo-sclln": "scala mappa",
	"geo-msepos": "Latitudine e longitudine del cursore del mouse",
	"geo-ariamap": "Oggetto della mappa. Le descrizioni delle caratteristiche della mappa sono nella tabella qui sotto.",
	"geo-ally": "<strong>Gli utenti della tastiera:</strong> Quando la mappa è a fuoco, utilizzare i tasti freccia per scorrere la mappa e i tasti più e meno per lo zoom. I tasti freccia non scorreranno la mappa quando lo zoom è sull'intera estensione della mappa.",
	"geo-allyttl": "Istruzioni: come navigare sulla mappa",
	"geo-tgllyr": "Alternare la visualizzazione del livello",
	"geo-hdnlyr": "Questo livello è attualmente nascosto.",
	"geo-bmap-url": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/WMTS/",
	"geo-bmap-matrix-set": "default028mm",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Canada mappa di base (inglese o francese)",
	"geo-sel": "Selezionare",
	"geo-lblsel": "Controllare per selezionare l'elemento sulla mappa",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Indicare il nome della località&#44; CAP&#44; indirizzo (postale)&#44; il numero di NTS ...",
	"geo-loc-label": "Posizione",
	"geo-aoi-north": "Nord",
	"geo-aoi-east": "Oriente",
	"geo-aoi-south": "Sud",
	"geo-aoi-west": "Occidente",
	"geo-aoi-instructions": "Delineare un'area sulla mappa o inserire i dati qui sotto e fare clic sul pulsante \"Disegnare\".",
	"geo-aoi-title": "Draw box on map or enter coordinates",
	"geo-aoi-btndraw": "Disegnare",
	"geo-aoi-btnclear": "Rimuovere",
	"geo-geoloc-btn": "Zoom alla posizione corrente",
	"geo-geoloc-fail": "Posizione non riuscita. Assicurarsi che i servizi di localizzazione sono abilitati.",
	"geo-geoloc-uncapable": "La localizzazione non è supportato dal browser.",
	"geo-lgnd-grphc": "Legenda grafica per layer.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",
	"skip-prefix": "Skip to:",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Accedi",

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
 * Locale: IT (Italian; Italiano)
 */
$.extend( $.validator.messages, {
	required: "Campo obbligatorio.",
	remote: "Controlla questo campo.",
	email: "Inserisci un indirizzo email valido.",
	url: "Inserisci un indirizzo web valido.",
	date: "Inserisci una data valida.",
	dateISO: "Inserisci una data valida (ISO).",
	number: "Inserisci un numero valido.",
	digits: "Inserisci solo numeri.",
	creditcard: "Inserisci un numero di carta di credito valido.",
	equalTo: "Il valore non corrisponde.",
	extension: "Inserisci un valore con un&apos;estensione valida.",
	maxlength: $.validator.format( "Non inserire pi&ugrave; di {0} caratteri." ),
	minlength: $.validator.format( "Inserisci almeno {0} caratteri." ),
	rangelength: $.validator.format( "Inserisci un valore compreso tra {0} e {1} caratteri." ),
	range: $.validator.format( "Inserisci un valore compreso tra {0} e {1}." ),
	max: $.validator.format( "Inserisci un valore minore o uguale a {0}." ),
	min: $.validator.format( "Inserisci un valore maggiore o uguale a {0}." ),
	nifES: "Inserisci un NIF valido.",
	nieES: "Inserisci un NIE valido.",
	cifES: "Inserisci un CIF valido.",
	currency: "Inserisci una valuta valida."
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
 * Locale: IT
 */
$.extend( $.validator.methods, {
	date: function( value, element ) {
		return this.optional( element ) || /^\d\d?\-\d\d?\-\d\d\d?\d?$/.test( value );
	},
	number: function( value, element ) {
		return this.optional( element ) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test( value );
	}
} );
return $;
}));
});