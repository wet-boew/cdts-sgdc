/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * github.com/wet-boew/cdts-sgdc/blob/master/LICENSE
 * v1.0.0-development - 2020-11-18
 *
 */// This file was automatically generated from gcintranet-fr.soy.
// Please don't edit this file by hand.

if (typeof wet == 'undefined') { var wet = {}; }
if (typeof wet.builder == 'undefined') { wet.builder = {}; }


wet.builder.serverRefTop = function(opt_data, opt_ignored) {
  return serverPage.serverRefTop(opt_data);
};


wet.builder.serverTop = function(opt_data, opt_ignored) {
  return serverPage.serverTop(opt_data);
};


wet.builder.serverRefBottom = function(opt_data, opt_ignored) {
  return serverPage.serverRefBottom(opt_data);
};


wet.builder.serverBottom = function(opt_data, opt_ignored) {
  return serverPage.serverBottom(opt_data);
};


wet.builder.environment = function(opt_data, opt_ignored) {
  return (opt_data.cdnEnv == 'qat' || opt_data.cdnEnv == 'nonprod' || opt_data.cdnEnv == 'esdcprod') ? '/cdn/' : (opt_data.cdnPath != null) ? soy.$$escapeHtml(opt_data.cdnPath) : '/etc/designs/canada/cdts/';
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/css/theme.min.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/css/gctheme.css\'>' + ((opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/css/esdc.css\'>' : (opt_data.subTheme == 'eccc') ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/css/eccc.css\'>' : '') + '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/css/intranet.css\'>';
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;À propos de ce site&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' + ((opt_data.intranetTitle != null || opt_data.subTheme != null) ? 'col-lg-6 col-md-6' : 'col-lg-2 col-md-3') + ' col-sm-9 col-xs-8"><div class="app-name' + ((opt_data.intranetTitle != null) ? ' app-name-lg' : '') + '">';
  if (opt_data.intranetTitle != null) {
    var itemList62 = opt_data.intranetTitle;
    var itemListLen62 = itemList62.length;
    for (var itemIndex62 = 0; itemIndex62 < itemListLen62; itemIndex62++) {
      var itemData62 = itemList62[itemIndex62];
      output += (itemIndex62 == 0) ? '<a href="' + ((itemData62.href != null) ? soy.$$escapeHtml(itemData62.href) : 'http://intranet.ec.gc.ca/default.asp?lang=Fr') + '">' + ((itemData62.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData62.acronym) + '">' : '') + '<span><span class="bold-gc">' + ((itemData62.boldText != null) ? soy.$$escapeHtml(itemData62.boldText) : 'GC') + '</span>' + ((itemData62.acronym != null) ? '</abbr>' : '') + ((itemData62.text != null) ? soy.$$escapeHtml(itemData62.text) : 'intranet') + '</span></a>' : '';
    }
  } else {
    output += '<a href="https://intranet.canada.ca/index-fra.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
  }
  output += '</div></section>' + ((opt_data.GCToolsModal == true) ? '<section id="gctoolsSection" class="' + ((opt_data.intranetTitle != null) ? 'col-lg-2 col-md-1' : 'col-lg-6 col-md-1') + ((opt_data.search == false) ? ' col-md-offset-3' : '') + ' hidden-sm hidden-xs text-right"><h2 class="wb-inv">Liens OutilsGC</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools">Outils<span class="bold-gc">GC</span></a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def" tabindex="-1"><header class="modal-header"><h2 class="modal-title">Outils<span class="bold-gc">GC</span></h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCD/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-fra.asp" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' : (opt_data.intranetTitle != null) ? '' : '<section id="wb-gctools" class="col-lg-6 visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section>');
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'mrgn-bttm-md col-md-offset-1 col-lg-offset-2 ' : '') + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Sélection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
    var linkList119 = opt_data.lngLinks;
    var linkListLen119 = linkList119.length;
    for (var linkIndex119 = 0; linkIndex119 < linkListLen119; linkIndex119++) {
      var linkData119 = linkList119[linkIndex119];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData119.lang) + '" lang="' + soy.$$escapeHtml(linkData119.lang) + '" href="' + soy.$$escapeHtml(linkData119.href) + '">' + soy.$$escapeHtml(linkData119.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  if (opt_data.search != false) {
    output += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Recherche</h2>';
    if (opt_data.customSearch != null) {
      var itemList136 = opt_data.customSearch;
      var itemListLen136 = itemList136.length;
      for (var itemIndex136 = 0; itemIndex136 < itemListLen136; itemIndex136++) {
        var itemData136 = itemList136[itemIndex136];
        if (itemIndex136 == 0) {
          output += '<form action="' + ((itemData136.action != null) ? soy.$$escapeHtml(itemData136.action) : 'https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx') + '" method="' + ((itemData136.method != null) ? soy.$$escapeHtml(itemData136.method) : 'get') + '" name="' + ((itemData136.name != null) ? soy.$$escapeHtml(itemData136.name) : 'cse-search-box') + '" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData136.id != null) ? soy.$$escapeHtml(itemData136.id) : 'wb-srch-q') + '" class="wb-inv">' + ((itemData136.placeholder != null) ? soy.$$escapeHtml(itemData136.placeholder) : 'Rechercher GCintranet') + '</label><input class="wb-srch-q form-control pull-right" id="' + ((itemData136.id != null) ? soy.$$escapeHtml(itemData136.id) : 'wb-srch-q') + '" name="' + ((itemData136.name != null) ? soy.$$escapeHtml(itemData136.name) : 'q') + '"  value="" size="21" maxlength="150" placeholder="' + ((itemData136.placeholder != null) ? soy.$$escapeHtml(itemData136.placeholder) : 'Rechercher GCintranet') + '">';
          if (itemData136.hiddenInput != null) {
            var inputList190 = itemData136.hiddenInput;
            var inputListLen190 = inputList190.length;
            for (var inputIndex190 = 0; inputIndex190 < inputListLen190; inputIndex190++) {
              var inputData190 = inputList190[inputIndex190];
              output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData190.name) + '" value="' + soy.$$escapeHtml(inputData190.value) + '" />';
            }
          } else {
            output += '<input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" />';
          }
          output += '</div>';
        }
      }
    } else {
      output += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Rechercher GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Rechercher GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
    }
    output += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>';
  }
  output += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + ((opt_data.search != false) ? '<span class="glyphicon glyphicon-search">' : '') + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</span>' + ((opt_data.search == false) ? '</span>' : '') + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + ((opt_data.GCToolsModal != true) ? '<div id="tools-sm" class="row' + ((opt_data.intranetTitle != null) ? '' : ' visible-md') + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section></div>' : '') + '</div></div></div>' + ((opt_data.siteMenu != false) ? (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + ((opt_data.menuPath != null) ? soy.$$escapeHtml(opt_data.menuPath) : 'http://esdc.prv/includes/edsc-esdc_prv/wet4/fr/mega_menu/esdcmenu-fra.html') + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href="http://rhdcc.prv/fra/ministere/index.page?">Notre ministère</a></li><li><a href="http://rhdcc.prv/fra/directions_generales/index.page?">Directions générales et régions</a></li><li><a href="http://iservice.prv/fra/">iService</a></li><li><a href="http://rhdcc.prv/fra/outils_travail/index.page?">Outils de travail</a></li><li><a href="http://rhdcc.prv/fra/liens_rapides/index.page?">Liens rapides</a></li></ul></div></div></nav>' : (opt_data.subTheme == 'eccc') ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + ((opt_data.menuPath != null) ? soy.$$escapeHtml(opt_data.menuPath) : './cdts/ajax/sitemenu-fra.html') + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="#">About ECCC</a></li><li><a href="#">Branches</a></li><li><a href="#">Services</a></li><li><a href="#">Tools and References</a></li><li><a href="#">Resources</a></li><li><a href="#">Forms</a></li><li><a href="#">DMs\' Corner</a></li></ul></div></div></nav>' : '<nav role="navigation" id="wb-sm" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/sitemenu-fra.html" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href="https://intranet.canada.ca/psc-fsc/index-fra.asp">Nouvelles</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-fra.asp">Ressources humaines</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-fra.asp">Développement de carrière et apprentissage</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-fra.asp">Services et outils</a></li></ul></div></div></nav>' : '');
  if (opt_data.breadcrumbs != false) {
    output += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList284 = opt_data.breadcrumbs;
      var itemListLen284 = itemList284.length;
      for (var itemIndex284 = 0; itemIndex284 < itemListLen284; itemIndex284++) {
        var itemData284 = itemList284[itemIndex284];
        output += '<li>' + ((itemData284.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData284.acronym) + '">' : '') + ((itemData284.href != null) ? '<a href="' + soy.$$escapeHtml(itemData284.href) + '">' : '') + soy.$$escapeHtml(itemData284.title) + ((itemData284.href != null) ? '</a>' : '') + ((itemData284.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
      output += '<li><a href="https://intranet.canada.ca/index-fra.asp">Accueil</a></li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.appTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;À propos de ce site&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' + ((opt_data.intranetTitle != null || opt_data.subTheme != null) ? 'col-lg-6 col-md-6' : 'col-lg-2 col-md-3') + ' col-sm-9 col-xs-8"><div class="app-name' + ((opt_data.intranetTitle != null) ? ' app-name-lg' : '') + '">';
  if (opt_data.intranetTitle != null) {
    var itemList329 = opt_data.intranetTitle;
    var itemListLen329 = itemList329.length;
    for (var itemIndex329 = 0; itemIndex329 < itemListLen329; itemIndex329++) {
      var itemData329 = itemList329[itemIndex329];
      output += (itemIndex329 == 0) ? '<a href="' + ((itemData329.href != null) ? soy.$$escapeHtml(itemData329.href) : 'http://intranet.ec.gc.ca/default.asp?lang=Fr') + '">' + ((itemData329.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData329.acronym) + '">' : '') + '<span><span class="bold-gc">' + ((itemData329.boldText != null) ? soy.$$escapeHtml(itemData329.boldText) : 'GC') + '</span>' + ((itemData329.acronym != null) ? '</abbr>' : '') + ((itemData329.text != null) ? soy.$$escapeHtml(itemData329.text) : 'intranet') + '</span></a>' : '';
    }
  } else {
    output += '<a href="https://intranet.canada.ca/index-fra.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
  }
  output += '</div></section>' + ((opt_data.GCToolsModal == true) ? '<section id="gctoolsSection" class="' + ((opt_data.intranetTitle != null) ? 'col-lg-2' : 'col-lg-6') + ((opt_data.search == false) ? ' col-md-offset-3' : '') + ' col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Liens OutilsGC</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools">Outils<span class="bold-gc">GC</span></a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Outils<span class="bold-gc">GC</span></h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCD/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-fra.asp" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' : '<section id="wb-gctools" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'pull-right col-md-4' : 'col-lg-6') + ' visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section>');
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'mrgn-bttm-md col-md-offset-1 col-lg-offset-2 ' : '') + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Sélection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
    var linkList391 = opt_data.lngLinks;
    var linkListLen391 = linkList391.length;
    for (var linkIndex391 = 0; linkIndex391 < linkListLen391; linkIndex391++) {
      var linkData391 = linkList391[linkIndex391];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData391.lang) + '" href="' + soy.$$escapeHtml(linkData391.href) + '">' + soy.$$escapeHtml(linkData391.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  if (opt_data.search != false) {
    output += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Recherche</h2>';
    if (opt_data.customSearch != null) {
      var itemList406 = opt_data.customSearch;
      var itemListLen406 = itemList406.length;
      for (var itemIndex406 = 0; itemIndex406 < itemListLen406; itemIndex406++) {
        var itemData406 = itemList406[itemIndex406];
        if (itemIndex406 == 0) {
          output += '<form action="' + ((itemData406.action != null) ? soy.$$escapeHtml(itemData406.action) : 'https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx') + '" method="' + ((itemData406.method != null) ? soy.$$escapeHtml(itemData406.method) : 'get') + '" name="' + ((itemData406.name != null) ? soy.$$escapeHtml(itemData406.name) : 'cse-search-box') + '" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData406.id != null) ? soy.$$escapeHtml(itemData406.id) : 'wb-srch-q') + '" class="wb-inv">' + ((itemData406.placeholder != null) ? soy.$$escapeHtml(itemData406.placeholder) : 'Rechercher GCintranet') + '</label><input class="wb-srch-q form-control pull-right" id="' + ((itemData406.id != null) ? soy.$$escapeHtml(itemData406.id) : 'wb-srch-q') + '" name="' + ((itemData406.name != null) ? soy.$$escapeHtml(itemData406.name) : 'q') + '"  value="' + ((itemData406.value != null) ? soy.$$escapeHtml(itemData406.value) : '') + '" size="21" maxlength="150" placeholder="' + ((itemData406.placeholder != null) ? soy.$$escapeHtml(itemData406.placeholder) : 'Rechercher GCintranet') + '">';
          if (itemData406.hiddenInput != null) {
            var inputList465 = itemData406.hiddenInput;
            var inputListLen465 = inputList465.length;
            for (var inputIndex465 = 0; inputIndex465 < inputListLen465; inputIndex465++) {
              var inputData465 = inputList465[inputIndex465];
              output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData465.name) + '" value="' + soy.$$escapeHtml(inputData465.value) + '" />';
            }
          }
          output += '</div>';
        }
      }
    } else {
      output += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Rechercher GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Rechercher GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
    }
    output += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>';
  }
  output += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + ((opt_data.search != false) ? '<span class="glyphicon glyphicon-search">' : '') + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</span>' + ((opt_data.search == false) ? '</span>' : '') + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + ((opt_data.GCToolsModal != true) ? '<div id="tools-sm" class="row' + ((opt_data.intranetTitle != null) ? '' : ' visible-md') + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>pédia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section></div>' : '') + '</div></div></div><div id="gcappbanner"><div class="container"><div class="row gc-' + ((opt_data.subTheme) ? 'app' : 'intra') + '-br">';
  var itemList537 = opt_data.appName;
  var itemListLen537 = itemList537.length;
  for (var itemIndex537 = 0; itemIndex537 < itemListLen537; itemIndex537++) {
    var itemData537 = itemList537[itemIndex537];
    output += '<div id="wb-sttl" class="col-md-1' + ((opt_data.signOut || opt_data.signIn) ? '0' : '2') + '">' + ((itemData537.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData537.acronym) + '">' : '') + ((itemData537.href) ? '<a href="' + soy.$$escapeHtml(itemData537.href) + '">' : '') + '<span>' + ((opt_data.secure == true) ? '<i class="glyphicon glyphicon-lock mrgn-rght-md"></i>' : '') + soy.$$escapeHtml(itemData537.text) + '</span>' + ((itemData537.href) ? '</a>' : '') + ((itemData537.acronym != null) ? '</abbr>' : '') + '</div>';
  }
  if (opt_data.signOut != null) {
    output += '<div class="text-right col-md-2"><div class="row">';
    var buttonList572 = opt_data.signOut;
    var buttonListLen572 = buttonList572.length;
    for (var buttonIndex572 = 0; buttonIndex572 < buttonListLen572; buttonIndex572++) {
      var buttonData572 = buttonList572[buttonIndex572];
      output += (buttonIndex572 == 0) ? '<p><a href="' + soy.$$escapeHtml(buttonData572.href) + '" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>Déconnexion</a></p>' : '';
    }
    output += '</div></div>';
  } else if (opt_data.signIn != null) {
    output += '<div class="text-right col-md-2"><div class="row">';
    var buttonList582 = opt_data.signIn;
    var buttonListLen582 = buttonList582.length;
    for (var buttonIndex582 = 0; buttonIndex582 < buttonListLen582; buttonIndex582++) {
      var buttonData582 = buttonList582[buttonIndex582];
      output += (buttonIndex582 == 0) ? '<p><a href="' + soy.$$escapeHtml(buttonData582.href) + '" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>Connexion</a></p>' : '';
    }
    output += '</div></div>';
  } else {
  }
  output += '</div></div></div>';
  if (opt_data.menuLinks != null) {
    output += '<nav role="navigation" id="wb-smapp" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Menu de navigation principal</h2><div class="row"><ul class="list-inline menu" role="menubar">';
    var linkList595 = opt_data.menuLinks;
    var linkListLen595 = linkList595.length;
    for (var linkIndex595 = 0; linkIndex595 < linkListLen595; linkIndex595++) {
      var linkData595 = linkList595[linkIndex595];
      if (linkData595.subLinks != null) {
        output += '<li><a href="#' + soy.$$escapeHtml(linkData595.id) + '" class="item"' + ((linkData595.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData595.text) + ((linkData595.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData595.id) + '" role="menu">';
        var sublinkList612 = linkData595.subLinks;
        var sublinkListLen612 = sublinkList612.length;
        for (var sublinkIndex612 = 0; sublinkIndex612 < sublinkListLen612; sublinkIndex612++) {
          var sublinkData612 = sublinkList612[sublinkIndex612];
          output += (sublinkIndex612 == sublinkListLen612 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData612.subhref) + '"' + ((sublinkData612.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData612.subtext) + ((sublinkData612.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData612.subhref) + '"' + ((sublinkData612.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData612.subtext) + ((sublinkData612.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData595.href) + '" class="item"' + ((linkData595.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData595.text) + ((linkData595.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
      }
    }
    output += '<li class="hidden-md hidden-lg"><a href="#mnuTools" class="item">OutilsGC</a><ul class="sm list-unstyled" id="mnuTools" role="menu"><li><a href="https://gcconnex.gc.ca"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr"><span class="bold-gc">GC</span>pédia</a></li><li><a href="http://gcannuaire-gcdirectory.gc.ca/fr/GCA/?pgid=002"><span class="bold-gc">GC</span>annuaire</a></li><li><a href="https://gccollab.ca/splash/"><span class="bold-gc">GC</span>collab</a></li></ul></li></ul></div></div></nav>';
  } else if (opt_data.menuPath != null) {
    output += '<nav role="navigation" id="wb-smapp" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
  } else {
    output += '<div id="wb-sm" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/appmenu-fra.html" data-trgt="mb-pnl" class="wb-menu hidden-sm hidden-xs"></div>';
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList666 = opt_data.breadcrumbs;
    var itemListLen666 = itemList666.length;
    for (var itemIndex666 = 0; itemIndex666 < itemListLen666; itemIndex666++) {
      var itemData666 = itemList666[itemIndex666];
      output += '<li>' + ((itemData666.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData666.acronym) + '">' : '') + ((itemData666.href != null) ? '<a href="' + soy.$$escapeHtml(itemData666.href) + '">' : '') + soy.$$escapeHtml(itemData666.title) + ((itemData666.href != null) ? '</a>' : '') + ((itemData666.acronym != null) ? '</abbr>' : '') + '</li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.preFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t' + ((opt_data.showPostContent != false) ? '' : '') + ((opt_data.pagedetails != false) ? '<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Identificateur d\'écran&#160;:&#32;</dt><dd>' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version&#160;:&#32;</dt><dd>' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div></div>' : '');
};


wet.builder.secmenu = function(opt_data, opt_ignored) {
  var output = '<h2 id="wb-sec-h" class="wb-inv">Menu de la section</h2>';
  var sectionList716 = opt_data.sections;
  var sectionListLen716 = sectionList716.length;
  for (var sectionIndex716 = 0; sectionIndex716 < sectionListLen716; sectionIndex716++) {
    var sectionData716 = sectionList716[sectionIndex716];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData716.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData716.sectionLink) + '"' + ((sectionData716.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData716.sectionName) + ((sectionData716.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + ((sectionData716.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList735 = sectionData716.menuLinks;
    var linkListLen735 = linkList735.length;
    for (var linkIndex735 = 0; linkIndex735 < linkListLen735; linkIndex735++) {
      var linkData735 = linkList735[linkIndex735];
      if (linkData735.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData735.href) + '" class="list-group-item"' + ((linkData735.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData735.text) + ((linkData735.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList750 = linkData735.subLinks;
        var sublinkListLen750 = sublinkList750.length;
        for (var sublinkIndex750 = 0; sublinkIndex750 < sublinkListLen750; sublinkIndex750++) {
          var sublinkData750 = sublinkList750[sublinkIndex750];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData750.subhref) + '" class="list-group-item"' + ((sublinkData750.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData750.subtext) + ((sublinkData750.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData735.href) + '" class="list-group-item"' + ((linkData735.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData735.text) + ((linkData735.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
      }
    }
    output += '</ul></section>';
  }
  return output;
};


wet.builder.footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t' + ((opt_data.showFeatures == true) ? '<section class="ajaxed-in" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/activities-footer-fra.html"></section>' : '') + '<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Au sujet du gouvernement</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4">';
  if (opt_data.contactLinks != null) {
    var linkList789 = opt_data.contactLinks;
    var linkListLen789 = linkList789.length;
    for (var linkIndex789 = 0; linkIndex789 < linkListLen789; linkIndex789++) {
      var linkData789 = linkList789[linkIndex789];
      output += '<li><a href="' + soy.$$escapeHtml(linkData789.href) + '">' + soy.$$escapeHtml(linkData789.text) + '</a></li>';
    }
  } else {
    output += '<li><a href="https://intranet.canada.ca/contact/contactgc-fra.aspx">Communiquez avec nous</a></li>';
  }
  output += '<li><a href="https://intranet.canada.ca/ict-oci/index-fra.asp">À propos des OutilsGC</a></li><li><a href="https://www.canada.ca/fr.html">Canada.ca</a></li><li><a href="https://intranet.canada.ca/terms-avis-fra.asp">Avis</a></li></ul></nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/fr.html"><img src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/assets/sig-blk-fr.svg\' alt="" /><span class="wb-inv">Gouvernement du Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/assets/wmms-blk.svg\' alt="Symbole du Gouvernement du Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.appFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t' + ((opt_data.showFeatures == true) ? '<section class="ajaxed-in" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/activities-footer-fra.html"></section>' : '') + '<footer role="contentinfo" id="wb-info">';
  if (opt_data.footerSections != null) {
    if (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><div class="row">';
      var footerSectionList814 = opt_data.footerSections;
      var footerSectionListLen814 = footerSectionList814.length;
      for (var footerSectionIndex814 = 0; footerSectionIndex814 < footerSectionListLen814; footerSectionIndex814++) {
        var footerSectionData814 = footerSectionList814[footerSectionIndex814];
        if (footerSectionData814.customFooterLinks != null) {
          if (footerSectionIndex814 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData814.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData814.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList826 = footerSectionData814.customFooterLinks;
            var linkListLen826 = linkList826.length;
            for (var linkIndex826 = 0; linkIndex826 < linkListLen826; linkIndex826++) {
              var linkData826 = linkList826[linkIndex826];
              output += '<li><a href="' + soy.$$escapeHtml(linkData826.href) + '"' + ((linkData826.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData826.text) + ((linkData826.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex814 == 0) {
          output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData814.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData814.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
          var linkList849 = opt_data.footerSections;
          var linkListLen849 = linkList849.length;
          for (var linkIndex849 = 0; linkIndex849 < linkListLen849; linkIndex849++) {
            var linkData849 = linkList849[linkIndex849];
            output += '<li><a href="' + soy.$$escapeHtml(linkData849.href) + '"' + ((linkData849.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData849.text) + ((linkData849.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '<section class="col-md-3 col-sm-6 col-lg-3"><h3>Ministère</h3><ul class="list-unstyled"><li><a href="http://esdc.prv/fr/directions_regions/index.shtml">EDSC/SC IntraWeb</a></li><li><a href="http://edsc.prv/fr/nouvelles/index.shtml">Nouvelles</a></li><li><a href="http://edsc.prv/fr/coordonnees/index.shtml">Coordonnées et rétroaction</a></li><li><a href="http://edsc.prv/fr/restez_branche/index.shtml">Restez branchés</a></li><li><a href="http://edsc.prv/fr/aide.shtml">Aide et avis importants</a></li></ul></section></div></nav>';
    } else if (opt_data.subTheme == 'eccc') {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><div class="row">';
      var footerSectionList868 = opt_data.footerSections;
      var footerSectionListLen868 = footerSectionList868.length;
      for (var footerSectionIndex868 = 0; footerSectionIndex868 < footerSectionListLen868; footerSectionIndex868++) {
        var footerSectionData868 = footerSectionList868[footerSectionIndex868];
        if (footerSectionData868.customFooterLinks != null) {
          if (footerSectionIndex868 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData868.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData868.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList880 = footerSectionData868.customFooterLinks;
            var linkListLen880 = linkList880.length;
            for (var linkIndex880 = 0; linkIndex880 < linkListLen880; linkIndex880++) {
              var linkData880 = linkList880[linkIndex880];
              output += '<li><a href="' + soy.$$escapeHtml(linkData880.href) + '"' + ((linkData880.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData880.text) + ((linkData880.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex868 == 0) {
          output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData868.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData868.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
          var linkList903 = opt_data.footerSections;
          var linkListLen903 = linkList903.length;
          for (var linkIndex903 = 0; linkIndex903 < linkListLen903; linkIndex903++) {
            var linkData903 = linkList903[linkIndex903];
            output += '<li><a href="' + soy.$$escapeHtml(linkData903.href) + '"' + ((linkData903.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData903.text) + ((linkData903.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '<section class="col-md-3 col-sm-6 col-lg-3"><h3>Contact Us</h3><ul class="list-unstyled"><li><a href="#">EnviroTel (Fr)</a></li><li><a href="#">GEDS (Fr)</a></li><li><a href="#">Organizational Chart (Fr)</a></li><li><a href="#">Service Desk (Fr)</a></li><li><a href="#">Feedback (Fr)</a></li><li><a href="#">Services Catalogue (Fr)</a></li></ul></section></div></nav>';
    } else {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><div class="row">';
      var footerSectionList922 = opt_data.footerSections;
      var footerSectionListLen922 = footerSectionList922.length;
      for (var footerSectionIndex922 = 0; footerSectionIndex922 < footerSectionListLen922; footerSectionIndex922++) {
        var footerSectionData922 = footerSectionList922[footerSectionIndex922];
        if (footerSectionData922.customFooterLinks != null) {
          if (footerSectionIndex922 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData922.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData922.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList934 = footerSectionData922.customFooterLinks;
            var linkListLen934 = linkList934.length;
            for (var linkIndex934 = 0; linkIndex934 < linkListLen934; linkIndex934++) {
              var linkData934 = linkList934[linkIndex934];
              output += '<li><a href="' + soy.$$escapeHtml(linkData934.href) + '"' + ((linkData934.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData934.text) + ((linkData934.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex922 == 0) {
          output += '<section class="container-fluid">' + ((footerSectionData922.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData922.sectionName) + '</h3>' : '') + '<ul class="list-unstyled colcount-sm-2 colcount-md-4">';
          var linkList957 = opt_data.footerSections;
          var linkListLen957 = linkList957.length;
          for (var linkIndex957 = 0; linkIndex957 < linkListLen957; linkIndex957++) {
            var linkData957 = linkList957[linkIndex957];
            output += '<li><a href="' + soy.$$escapeHtml(linkData957.href) + '"' + ((linkData957.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData957.text) + ((linkData957.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '</div></nav>';
    }
  } else if (opt_data.globalNav == true) {
    output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Au sujet du gouvernement</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4 container-fluid" ><li><a href="https://intranet.canada.ca/psc-fsc/index-fra.asp">Nouvelles</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-fra.asp">Ressources humaines</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-fra.asp">Développement de carrière et apprentissage</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-fra.asp">Services et outils</a></li></ul></nav>';
  } else if (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') {
    output += '<nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr" data-wb-ajax=\'{"url": "./cdts/ajax/esdcfooter-fra.html", "type": "replace", "nocache": true }\'></nav>';
  } else {
  }
  output += '<div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/fr.html"><img src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/assets/sig-blk-fr.svg\' alt="" /><span class="wb-inv">Gouvernement du Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/assets/wmms-blk.svg\' alt="Symbole du Gouvernement du Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : wet.builder.environment(opt_data) + 'gcintranet/release/js/') + 'jquery/2.2.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/js/theme.min.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/js/exitScript.js\'><\/script><script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Avis de sortie sécurisée</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Avertissement</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'Vous êtes sur le point de quitter un site sécurisé. Voulez-vous continuer?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Annuler') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Oui') + '</a></li></ul></div></section>' : '');
};

// This file was automatically generated from gcintranet-serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/css/theme.min.css\'><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/cdts/cdtsfixes.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'wet-boew/css/ie8-theme-srv.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header role="banner"><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer role="contentinfo" id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcintranet/release/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
};
