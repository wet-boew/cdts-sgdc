/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Arabic dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "ar",
	"lang-native": "العربية",
	add: "إضافة",
	all: "جميع",
	tphp: "أعلى الصفحة",
	load: "   تحميل ...",
	process: "تجهيز ...",
	srch: "البحث",
	"no-match": "لا نتائج تذكر لل",
	matches: {
		mixin: "العثور على [MIXIN] مباريات"
	},
	current: "(الحالي)",
	hide: "إخفاء",
	err: "خطأ",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": "، ",
	space: "&#32;",
	start: "بداية",
	stop: "توقف",
	back: "ظهر",
	cancel: "إلغاء",
	"min-ago": "منذ دقيقة واحدة",
	"coup-mins": "بضع دقائق قبل",
	"mins-ago": {
		mixin: "منذ [MIXIN] دقيقة"
	},
	"hour-ago": "قبل ساعة",
	"hours-ago": {
		mixin: "منذ [MIXIN] ساعات"
	},
	"days-ago": {
		mixin: "منذ [MIXIN] أيام"
	},
	yesterday: "أمس",

	nxt: "التالي",
	"nxt-r": "مفتاح السهم الأيمن - التالي",
	prv: "سابق",
	"prv-l": "مفتاح السهم الأيسر - سابق",
	first: "الأول",
	last: "آخر",
	page: "Jump to: Page",
	"srch-menus": "البحث والقوائم",
	email: "البريد الإلكتروني",
	"menu-close": "إغلاق القائمة",
	"overlay-close": "إغلاق تراكب",
	"esc-key": "مفتاح الهروب",
	show: "عرض",

	/* Tabbed interface */
	"tab-rot": {
		off: "ايقاف الدوران علامة التبويب",
		on: "بدء دوران التبويب"
	},
	"tab-list": "علامة التبويب قائمة",
	"tab-pnl-end1": "نهاية هذا الفريق التبويب.",
	"tab-pnl-end2": "العودة إلى قائمة التبويب",
	"tab-pnl-end3": "أو الاستمرار في بقية الصفحة.",
	"tab-play": "لعب",

	/* Multimedia player */
	"mmp-play": "لعب",
	pause: "وقفة",
	open: "فتح",
	close: "أغلق",
	volume: "جهارة الصوت",
	mute: {
		on: "كتم",
		off: "إلغاء كتمه"
	},
	cc: {
		off: "أغلقت إخفاء السفلية",
		on: "أغلقت تظهر السفلية"
	},
	"cc-err": "خطأ في تحميل تعليق مغلق",
	fs: "Enter full screen",
	adesc: {
		on: "تمكين الوصف السمعي",
		off: "تعطيل الوصف السمعي"
	},
	pos: "الوظيفة الحالية:",
	dur: "إجمالي الوقت:",
	msgYoutubeNotLoad: "Video encountered loading issues",
	msgYoutubeVdLoad: "Loading Youtube video",

	/* Share widget */
	"shr-txt": "مشاركة",
	"shr-pg": " هذه الصفحة",
	"shr-vid": " هذا الفيديو",
	"shr-aud": " هذا الملف الصوتي",
	"shr-hnt": " مع {s} ",
	"shr-disc": "وأعرب عن تأييد أي أي منتجات أو خدمات أو ضمنية.",

	/* Form validation */
	"frm-nosubmit": "لا يمكن أن تقدم على شكل ل ",
	"errs-fnd": " تم العثور على أخطاء.",
	"err-fnd": " تم العثور على خطأ.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "إخفاء التقويم",
	"date-show": "اختيار تاريخ من التقويم لحقل:",
	"date-sel": "مختار",

	/* Calendar */
	days: [
		"الأحد",
		"يوم الاثنين",
		"الثلاثاء",
		"الأربعاء",
		"الخميس",
		"الجمعة",
		"السبت"
	],
	mnths: [
		"يناير",
		"فبراير",
		"مسيرة",
		"أبريل",
		"قد",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	cal: "تقويم",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(اليوم الحالي)",
	"cal-goToLnk": "<span class=\"wb-inv\">انتقل إلى الشهر </span>من العام",
	"cal-goToTtl": "انتقل إلى الشهر من العام",
	"cal-goToMnth": "الشهر:",
	"cal-goToYr": "العام:",
	"cal-goToBtn": "تذهب",
	prvMnth: "الشهر الماضي: ",
	nxtMnth: "الشهر المقبل: ",

	/* Lightbox */
	"lb-curr": "البند %curr% من %total%",
	"lb-xhr-err": "فشل هذا المحتوى ليتم تحميلها.",
	"lb-img-err": "فشلت هذه الصورة ليتم تحميلها.",

	/* Charts widget */
	"tbl-txt": "جدول",
	"tbl-dtls": "الرسم البياني. التفاصيل في الجدول التالي.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "سوف تنتهي جلسة العمل الخاصة بك تلقائيا في على  #min# دقيقة #sec# ثانية.",
	"st-to-msg-end": "اختر \"متابعة الجلسة\" لتمديد جلسة العمل الخاصة بك.",
	"st-msgbx-ttl": "الدورة مهلة الإنذار",
	"st-alrdy-to-msg": "عذرا انتهت صلاحية جلسة العمل الخاصة بك بالفعل. يرجى تسجيل الدخول مرة أخرى.",
	"st-btn-cont": "تستمر الدورة",
	"st-btn-end": "إنهاء جلسة الآن",

	/* Toggle details */
	"td-toggle": "تبديل جميع",
	"td-open": "توسيع الكل",
	"td-close": "طي الكل",
	"td-ttl-open": "توسيع كافة أقسام محتوى",
	"td-ttl-close": "انهيار جميع قطاعات المحتوى",

	/* Table enhancement */
	sortAsc: ": تفعيل لنوع تصاعدي",
	sortDesc: ": تفعيل لفرز تنازلي",
	emptyTbl: "لا تتوفر بيانات في الجدول",
	infoEntr: "عرض _START_ إلى _END_ من _TOTAL_ مقالات",
	infoEmpty: "عرض 0 إلى 0 من 0 مقالات",
	infoFilt: "(تمت تصفيتها في الفترة من _MAX_ مجموع المقالات)",
	info1000: ",",
	lenMenu: "عرض _MENU_ مقالات",
	filter: "تصفية العناصر",
	tbFilterInst: "This table provides a sorting feature via the buttons across the column header row with only one instance visible at a time.",

	/* Twitter embedded timeline */
	"twitter-start-notice": "Start of @%username%’s X timeline",
	"twitter-end-notice": "End of @%username%’s X timeline",
	"twitter-skip-end": "Skip to end of @%username%’s X timeline",
	"twitter-skip-start": "Skip to start of @%username%’s X timeline",
	"twitter-timeline-title": "X timeline",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "تكبير",
	"geo-zmout": "تصغير",
	"geo-zmwrld": "التكبير لتعيين حد",
	"geo-zmfeat": "تكبير إلى العنصر",
	"geo-sclln": "خريطة نطاق",
	"geo-msepos": "خطوط الطول والعرض من مؤشر الماوس",
	"geo-ariamap": "خريطة الكائن. أوصاف الميزات الخريطة هي في الجدول أدناه.",
	"geo-ally": "<strong>مستخدمي لوحة المفاتيح:</strong> عندما الخريطة هي في التركيز، استخدم مفاتيح الأسهم لتحريك الخريطة ومفاتيح زائد وناقص لتكبير. فإن مفاتيح الأسهم لا تحريك الخريطة عند التكبير إلى حد الخريطة.",
	"geo-allyttl": "تعليمات: خريطة الملاحة",
	"geo-tgllyr": "تبديل عرض طبقة",
	"geo-hdnlyr": "حاليا يتم إخفاء هذه الطبقة.",
	"geo-bmap-url": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/WMTS/",
	"geo-bmap-matrix-set": "default028mm",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - كندا قاعدة الخريطة (الإنجليزية أو الفرنسية فقط)",
	"geo-sel": "حدد",
	"geo-lblsel": "تحقق لتحديد عنصر على الخريطة",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "تشير إلى اسم الموقع، والرمز البريدي والعنوان (البريدي)، وعدد من NTS ...",
	"geo-loc-label": "موقع",
	"geo-aoi-north": "شمال",
	"geo-aoi-east": "شرق",
	"geo-aoi-south": "جنوب",
	"geo-aoi-west": "غرب",
	"geo-aoi-instructions": "مربع رسم على الخريطة أو أدخل إحداثيات أدناه وانقر على زر \"إضافة\".",
	"geo-aoi-title": "Draw box on map or enter coordinates",
	"geo-aoi-btndraw": "رسم",
	"geo-aoi-btnclear": "نزع",
	"geo-geoloc-btn": "التكبير لموقعك الحالي",
	"geo-geoloc-fail": "فشل الموقع. يرجى التأكد من أن يتم تمكين خدمات الموقع.",
	"geo-geoloc-uncapable": "غير معتمد التعريب بواسطة المتصفح الخاص بك.",
	"geo-lgnd-grphc": "رسم خريطة لأسطورة طبقة.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",
	"skip-prefix": "Skip to:",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "تسجيل الدخول",

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
 * Locale: AR (Arabic; العربية)
 */
$.extend( $.validator.messages, {
	required: "هذا الحقل إلزامي",
	remote: "يرجى تصحيح هذا الحقل للمتابعة",
	email: "رجاء إدخال عنوان بريد إلكتروني صحيح",
	url: "رجاء إدخال عنوان موقع إلكتروني صحيح",
	date: "رجاء إدخال تاريخ صحيح",
	dateISO: "رجاء إدخال تاريخ صحيح (ISO)",
	number: "رجاء إدخال عدد بطريقة صحيحة",
	digits: "رجاء إدخال أرقام فقط",
	creditcard: "رجاء إدخال رقم بطاقة ائتمان صحيح",
	equalTo: "رجاء إدخال نفس القيمة",
	extension: "رجاء إدخال ملف بامتداد موافق عليه",
	maxlength: $.validator.format( "الحد الأقصى لعدد الحروف هو {0}" ),
	minlength: $.validator.format( "الحد الأدنى لعدد الحروف هو {0}" ),
	rangelength: $.validator.format( "عدد الحروف يجب أن يكون بين {0} و {1}" ),
	range: $.validator.format( "رجاء إدخال عدد قيمته بين {0} و {1}" ),
	max: $.validator.format( "رجاء إدخال عدد أقل من أو يساوي {0}" ),
	min: $.validator.format( "رجاء إدخال عدد أكبر من أو يساوي {0}" ),
	step: $.validator.format( "يرجى تقديم قيمة من مضاعفات {0}" ),
	maxWords: $.validator.format( "يرجى تقديم ما لا يزيد عن {0} كلمات" ),
	minWords: $.validator.format( "يرجى تقديم {0} كلمات على الأقل" ),
	rangeWords: $.validator.format( "يرجى تقديم ما بين {0} و{1} كلمة" ),
	letterswithbasicpunc: "يرجى تقديم الحروف وعلامات الترقيم فقط",
	alphanumeric: "يرجى تقديم الحروف والأرقام والمسافات والتسطير فقط",
	lettersonly: "يرجى تقديم الحروف فقط",
	nowhitespace: "من فضلك لا تدخل المساحات البيضاء",
	ziprange: "يرجى تقديم الرمز البريدي بين 902xx-xxxx و905-xx-xxxx",
	integer: "يرجى تقديم رقم غير عشري موجب أو سالب",
	vinUS: "يرجى تقديم رقم تعريف المركبة (VIN)",
	dateITA: "يرجى تقديم تاريخ صالح",
	time: "يرجى تقديم وقت صالح بين 00:00 و23:59",
	phoneUS: "الرجاء تقديم رقم هاتف صالح",
	phoneUK: "الرجاء تقديم رقم هاتف صالح",
	mobileUK: "يرجى تقديم رقم هاتف محمول صالح",
	strippedminlength: $.validator.format( "يرجى تقديم {0} حرفًا على الأقل" ),
	email2: "يرجى تقديم عنوان بريد إلكتروني صالح",
	url2: "يرجى إدخال عنوان بريد إلكتروني صحيح",
	creditcardtypes: "يرجى تقديم رقم بطاقة ائتمان صالح",
	currency: "يرجى تقديم عملة صالحة",
	ipv4: "يرجى تقديم عنوان IP v4 صالح",
	ipv6: "يرجى تقديم عنوان IP v6 صالح",
	require_from_group: $.validator.format( "يرجى تقديم ما لا يقل عن {0} من هذه الحقول" ),
	nifES: "يرجى تقديم رقم TIN صالح",
	nieES: "يرجى تقديم رقم NIE صالح",
	cifES: "يرجى تقديم رقم CIF صالح",
	postalCodeCA: "يرجى تقديم رمز بريدي صالح",
	pattern: "التنسيق غير صالح"
} );
return $;
}));

});