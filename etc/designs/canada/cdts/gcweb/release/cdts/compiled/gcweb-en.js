/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * github.com/wet-boew/cdts-sgdc/blob/master/LICENSE
 * v1.0.0-development - 2020-10-16
 *
 */// This file was automatically generated from gcweb-en.soy.
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


wet.builder.appTop = function(opt_data, opt_ignored) {
  return applicationPage.appTop(opt_data);
};


wet.builder.appFooter = function(opt_data, opt_ignored) {
  return applicationPage.appFooter(opt_data);
};


wet.builder.environment = function(opt_data, opt_ignored) {
  return (opt_data.cdnEnv == 'esdcqat' || opt_data.cdnEnv == 'esdcprod' || opt_data.cdnEnv == 'esdcnonprod') ? '/cdts/' : (opt_data.cdnPath != null) ? soy.$$escapeHtml(opt_data.cdnPath) : '/etc/designs/canada/cdts/';
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<script>dataLayer = [];<\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-5DBPCQJ\');<\/script><!-- End Google Tag Manager -->';
  if (opt_data.webAnalytics != null) {
    output += '<!-- Adobe Analytics --><script src="//assets.adobedtm.com/';
    var aaList27 = opt_data.webAnalytics;
    var aaListLen27 = aaList27.length;
    for (var aaIndex27 = 0; aaIndex27 < aaListLen27; aaIndex27++) {
      var aaData27 = aaList27[aaIndex27];
      if (aaData27.custom != null) {
        output += soy.$$escapeHtml(aaData27.custom);
      } else if (aaData27.version == 1 || aaData27.version == 2) {
        output += 'caacec67651710193d2331efef325107c23a0145/satelliteLib-';
        switch (aaData27.version) {
          case 1:
            output += '92fcbbc24eeebb654a3dfbe688ed2dfe10a53e24';
            break;
          case 2:
            output += 'c2082deaf69c358c641c5eb20f94b615dd606662';
            break;
          default:
        }
        output += ((aaData27.environment == 'staging') ? '-staging' : '') + '.js';
      }
    }
    output += '"><\/script>';
  }
  output += '<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/theme.min.css\'><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/cdts/cdtsfixes.css\'>' + ((opt_data.isApplication == true) ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/cdts/cdtsapps.css\'>' : '') + '<!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]-->';
  return output;
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DBPCQJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) --><nav><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About government"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul></nav><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">';
    var linkList73 = opt_data.lngLinks;
    var linkListLen73 = linkList73.length;
    for (var linkIndex73 = 0; linkIndex73 < linkListLen73; linkIndex73++) {
      var linkData73 = linkList73[linkIndex73];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData73.lang) + '" lang="' + soy.$$escapeHtml(linkData73.lang) + '" href="' + soy.$$escapeHtml(linkData73.href) + '">' + soy.$$escapeHtml(linkData73.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization">' + ((opt_data.siteMenu != false) ? '<a href="https://www.canada.ca/en.html" property="url">' : '') + '<img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/sig-blk-en.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span>' + ((opt_data.siteMenu != false) ? '</a>' : '') + '<meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-blk.svg\' /></div>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-lg-8 text-right"><h2>Search</h2><form action="https://www.canada.ca/en/sr.html" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search Canada.ca</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="en" type="hidden"><input name="st1rt" value="1" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca"><input type="hidden" name="_charset_" value="UTF-8"><datalist id="wb-srch-q-ac"></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav class="gcweb-menu" typeof="SiteNavigationElement"><div class="container"><h2 class="wb-inv">Menu</h2><button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button><ul role="menu" aria-orientation="vertical" data-ajax-replace="//www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html"><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and citizenship</a></li><li role="presentation"><a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/business.html">Business and industry</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/health.html">Health</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/environment.html">Environment and natural resources</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/defence.html">National security and defence</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/policing.html">Policing, justice and emergencies</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/transport.html">Transport and infrastructure</a></li><li role="presentation"><a role="menuitem" href="http://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li></ul></div></nav>' : '<div class="transactBar"></div>');
  if (opt_data.breadcrumbs != false) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><ol class="breadcrumb"><li><a href="https://www.canada.ca/en.html">Canada.ca</a></li>';
    if (opt_data.breadcrumbs != null) {
      var itemList112 = opt_data.breadcrumbs;
      var itemListLen112 = itemList112.length;
      for (var itemIndex112 = 0; itemIndex112 < itemListLen112; itemIndex112++) {
        var itemData112 = itemList112[itemIndex112];
        output += '<li>' + ((itemData112.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData112.acronym) + '">' : '') + ((itemData112.href != null) ? '<a href="' + soy.$$escapeHtml(itemData112.href) + '">' : '') + soy.$$escapeHtml(itemData112.title) + ((itemData112.href != null) ? '</a>' : '') + ((itemData112.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    }
    output += '</ol></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.preFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t' + ((opt_data.showPostContent != false) ? '' : '');
  if (opt_data.pagedetails != false) {
    output += '<div class="pagedetails' + ((opt_data.isContainer != null) ? ' container' : '') + '">';
    if (opt_data.showFeedback != false || opt_data.showShare != false) {
      output += '<div class="row">' + ((opt_data.showFeedback != false) ? (opt_data.showFeedback != null && opt_data.showFeedback != true) ? '<div class="col-sm-6 col-md-5 col-lg-4"><a href="' + soy.$$escapeHtml(opt_data.showFeedback) + '" class="btn btn-default btn-center">Report a problem on this page</a></div>' : '<div class="col-sm-6 col-md-5 col-lg-4"><a href="https://www.canada.ca/en/report-problem.html" class="btn btn-default btn-center">Report a problem on this page</a></div>' : '');
      if (opt_data.showShare != false) {
        if (opt_data.showShare != null) {
          output += '<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + ((opt_data.showFeedback != false) ? '2' : '8') + ' col-md-offset-' + ((opt_data.showFeedback != false) ? '4' : '9') + ((opt_data.showFeedback != false) ? ' col-lg-offset-5' : '') + '" data-wb-share=\'{"filter": [';
          var itemList180 = opt_data.showShare;
          var itemListLen180 = itemList180.length;
          for (var itemIndex180 = 0; itemIndex180 < itemListLen180; itemIndex180++) {
            var itemData180 = itemList180[itemIndex180];
            output += '"' + soy.$$escapeHtml(itemData180) + '"' + ((! (itemIndex180 == itemListLen180 - 1)) ? ', ' : '');
          }
          output += '], "lnkClass": "btn btn-default btn-block"}\'></div>';
        } else {
          output += '<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + ((opt_data.showFeedback != false) ? '2' : '8') + ' col-md-offset-' + ((opt_data.showFeedback != false) ? '4' : '9') + ((opt_data.showFeedback != false) ? ' col-lg-offset-5' : '') + '" data-wb-share=\'{"lnkClass": "btn btn-default btn-block"}\'></div>';
        }
      }
      output += '</div>';
    }
    output += '<dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Screen Identifier:&#32;</dt><dd property="identifier">' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date modified:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version:&#32;</dt><dd property="version">' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div>';
  }
  return output;
};


wet.builder.secmenu = function(opt_data, opt_ignored) {
  var output = '\t\t\t<h2 id="wb-sec-h" class="wb-inv">Section menu</h2>';
  var sectionList226 = opt_data.sections;
  var sectionListLen226 = sectionList226.length;
  for (var sectionIndex226 = 0; sectionIndex226 < sectionListLen226; sectionIndex226++) {
    var sectionData226 = sectionList226[sectionIndex226];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData226.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData226.sectionLink) + '"' + ((sectionData226.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData226.sectionName) + ((sectionData226.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + ((sectionData226.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList245 = sectionData226.menuLinks;
    var linkListLen245 = linkList245.length;
    for (var linkIndex245 = 0; linkIndex245 < linkListLen245; linkIndex245++) {
      var linkData245 = linkList245[linkIndex245];
      if (linkData245.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData245.href) + '" class="list-group-item"' + ((linkData245.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData245.text) + ((linkData245.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList260 = linkData245.subLinks;
        var sublinkListLen260 = sublinkList260.length;
        for (var sublinkIndex260 = 0; sublinkIndex260 < sublinkListLen260; sublinkIndex260++) {
          var sublinkData260 = sublinkList260[sublinkIndex260];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData260.subhref) + '" class="list-group-item"' + ((sublinkData260.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData260.subtext) + ((sublinkData260.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData245.href) + '" class="list-group-item"' + ((linkData245.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData245.text) + ((linkData245.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
      }
    }
    output += '</ul></section>';
  }
  return output;
};


wet.builder.footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<footer id="wb-info">';
  if (opt_data.showFooter != false) {
    output += '<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">About government</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
    if (opt_data.contactLinks != null) {
      var linkList298 = opt_data.contactLinks;
      var linkListLen298 = linkList298.length;
      for (var linkIndex298 = 0; linkIndex298 < linkListLen298; linkIndex298++) {
        var linkData298 = linkList298[linkIndex298];
        output += (linkIndex298 == 0) ? '<li><a href="' + soy.$$escapeHtml(linkData298.href) + '">Contact us</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/contact.html">Contact us</a></li>';
    }
    output += '<li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a></li><li><a href="https://www.canada.ca/en/government/publicservice.html">Public service and military</a></li><li><a href="https://www.canada.ca/en/news.html">News</a></li><li><a href="https://www.canada.ca/en/government/system/laws.html">Treaties, laws and regulations</a></li><li><a href="https://www.canada.ca/en/transparency/reporting.html">Government-wide reporting</a></li><li><a href="http://pm.gc.ca/eng">Prime Minister</a></li><li><a href="https://www.canada.ca/en/government/system.html">How government works</a></li><li><a href="http://open.canada.ca/en/">Open government</a></li></ul></nav></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul><li><a href="https://www.canada.ca/en/social.html">Social media</a></li><li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li><li><a href="https://www.canada.ca/en/newsite.html">About Canada.ca</a></li><li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li><li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li></ul></nav>';
  } else {
    output += '<div id="transactFooter" class="landscape"></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul>';
    if (opt_data.contactLinks != null) {
      var linkList312 = opt_data.contactLinks;
      var linkListLen312 = linkList312.length;
      for (var linkIndex312 = 0; linkIndex312 < linkListLen312; linkIndex312++) {
        var linkData312 = linkList312[linkIndex312];
        output += (linkIndex312 == 0) ? '<li><a ' + ((linkData312.href) ? ' href="' + soy.$$escapeHtml(linkData312.href) + '"' : ' href="https://www.canada.ca/en/contact.html"') + ((linkData312.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Contact information' + ((linkData312.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';
    }
    if (opt_data.termsLink != null) {
      var linkList336 = opt_data.termsLink;
      var linkListLen336 = linkList336.length;
      for (var linkIndex336 = 0; linkIndex336 < linkListLen336; linkIndex336++) {
        var linkData336 = linkList336[linkIndex336];
        output += (linkIndex336 == 0) ? '<li><a ' + ((linkData336.href) ? ' href="' + soy.$$escapeHtml(linkData336.href) + '"' : ' href="https://www.canada.ca/en/transparency/terms.html"') + ((linkData336.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Terms and conditions' + ((linkData336.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
    }
    if (opt_data.privacyLink != null) {
      var linkList360 = opt_data.privacyLink;
      var linkListLen360 = linkList360.length;
      for (var linkIndex360 = 0; linkIndex360 < linkListLen360; linkIndex360++) {
        var linkData360 = linkList360[linkIndex360];
        output += (linkIndex360 == 0) ? '<li><a ' + ((linkData360.href) ? ' href="' + soy.$$escapeHtml(linkData360.href) + '"' : ' href="https://www.canada.ca/en/transparency/privacy.html"') + ((linkData360.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Privacy' + ((linkData360.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';
    }
    output += '</ul></nav>';
  }
  output += '<div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-2 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : wet.builder.environment(opt_data) + 'gcweb/release/js/') + 'jquery/2.2.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/theme.min.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/exitScript.js\'><\/script><script>' + soy.$$escapeHtml(opt_data.displayModal) + '<\/script><script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="false">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Secure exit notice</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Warning</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'You are about to leave a secure site, do you wish to continue?') + '</p><ul class="list-inline text-center"><li><button class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Cancel') + '</button></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Yes') + '</a></li></ul></div></section>' : '') + ((opt_data.isApplication == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/cdtscustom.js\'><\/script>' : '') + ((opt_data.webAnalytics != null) ? '<script>_satellite.pageBottom();<\/script>' : '');
};


wet.builder.splashTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/theme.min.css\'><!--<![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + '/release/css/messages.min.css\'><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/messages-ie.min.css\' /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]-->';
};


wet.builder.splash = function(opt_data, opt_ignored) {
  var output = '\t\t<div id="bg"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/img/splash/sp-bg-2.jpg\' alt=""></div><main><div class="sp-hb"><div class="sp-bx col-xs-12"><h1 property="name" class="wb-inv">Canada.ca</h1><div class="row"><div class="col-xs-11 col-md-8"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/sig-spl.svg\' alt="Government of Canada / Gouvernement du Canada" /></div></div><div class="row cdts-splash"><section class="col-xs-6 text-right" lang="en">' + ((opt_data.nameEng != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameEng) + '</h2>' : '<h2 class="wb-inv">Government of Canada</h2>') + '</section><section class="col-xs-6" lang="fr">' + ((opt_data.nameFra != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameFra) + '</h2>' : '<h2 class="wb-inv">Gouvernement du Canada</h2>') + '</section></div><row class="text-center">';
  var lang__soy476 = navigator.language;
  output += '<ul class="list-inline lst-spcd"><li>' + ((lang__soy476 == 'en-CA') ? '<a href="' + soy.$$escapeHtml(opt_data.indexEng) + '" class="btn btn-primary" lang="en">English</a>' : '<a href="' + soy.$$escapeHtml(opt_data.indexEng) + '" class="btn btn-default" lang="en">English</a>') + '</li><li>' + ((lang__soy476 == 'fr-CA') ? '<a href="' + soy.$$escapeHtml(opt_data.indexFra) + '" class="btn btn-primary" lang="fr">Français</a>' : '<a href="' + soy.$$escapeHtml(opt_data.indexFra) + '" class="btn btn-default" lang="fr">Français</a>') + '</li></ul></row></div><div class="sp-bx-bt col-xs-12"><div class="row"><div class="col-xs-7 col-md-8"><a href="' + soy.$$escapeHtml(opt_data.termsEng) + '" class="sp-lk">Terms & conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="' + soy.$$escapeHtml(opt_data.termsFra) + '" class="sp-lk" lang="fr">Avis</a></div><div class="col-xs-5 col-md-4 text-right mrgn-bttm-md"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-spl.svg\' width="127" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></main><!--[if gte IE 9 | !IE ]><!--><script src="' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs' : wet.builder.environment(opt_data) + 'gcweb/release/js/') + 'jquery/2.2.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/release/js/theme.min.js\'><\/script>' + ((opt_data.webAnalytics != null) ? '<script>_satellite.pageBottom();<\/script>' : '') + '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/cdts/cdtsfixes.css\'>';
  return output;
};

// This file was automatically generated from gcweb-appPage-en.soy.
// Please don't edit this file by hand.

if (typeof applicationPage == 'undefined') { var applicationPage = {}; }


applicationPage.appTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<script>dataLayer = [];<\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-5DBPCQJ\');<\/script><!-- End Google Tag Manager --><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "' + ((opt_data.topCusMenu == true) ? 'Related links' : 'About this Web application') + '"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">';
    var linkList17 = opt_data.lngLinks;
    var linkListLen17 = linkList17.length;
    for (var linkIndex17 = 0; linkIndex17 < linkListLen17; linkIndex17++) {
      var linkData17 = linkList17[linkIndex17];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData17.lang) + '" href="' + soy.$$escapeHtml(linkData17.href) + '">' + soy.$$escapeHtml(linkData17.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/sig-blk-en.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span><meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-blk.svg\' /></div>';
  if (opt_data.customSearch != null) {
    var itemList34 = opt_data.customSearch;
    var itemListLen34 = itemList34.length;
    for (var itemIndex34 = 0; itemIndex34 < itemListLen34; itemIndex34++) {
      var itemData34 = itemList34[itemIndex34];
      if (itemIndex34 == 0) {
        output += '<section id="wb-srch" class="col-lg-8 text-right visible-md visible-lg"><h2>Search' + ((itemData34.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData34.placeholder) : '') + '</h2><form action="' + soy.$$escapeHtml(itemData34.action) + '" method="' + soy.$$escapeHtml(itemData34.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData34.id != null) ? soy.$$escapeHtml(itemData34.id) : 'wb-srch-q') + '" class="wb-inv">Search' + ((itemData34.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData34.placeholder) : '') + '</label><input id="' + ((itemData34.id != null) ? soy.$$escapeHtml(itemData34.id) : 'wb-srch-q') + '" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search' + ((itemData34.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData34.placeholder) : '') + '">';
        if (itemData34.hiddenInput != null) {
          var inputList71 = itemData34.hiddenInput;
          var inputListLen71 = inputList71.length;
          for (var inputIndex71 = 0; inputIndex71 < inputListLen71; inputIndex71++) {
            var inputData71 = inputList71[inputIndex71];
            output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData71.name) + '" value="' + soy.$$escapeHtml(inputData71.value) + '" />';
          }
        }
        output += '</div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + ((itemData34.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData34.placeholder) : '') + '</span></button></div></form></section>';
      }
    }
  }
  output += '</div></div><div class="app-bar"><div class="container"><div class="row">' + ((opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) ? '<section class="col-xs-12 col-sm-7">' : '<section class="col-xs-12">');
  var itemList91 = opt_data.appName;
  var itemListLen91 = itemList91.length;
  for (var itemIndex91 = 0; itemIndex91 < itemListLen91; itemIndex91++) {
    var itemData91 = itemList91[itemIndex91];
    output += (itemIndex91 == 0) ? '<h2 class="wb-inv">Name of Web application</h2><a class="app-name" href="' + soy.$$escapeHtml(itemData91.href) + '">' + soy.$$escapeHtml(itemData91.text) + '</a>' : '';
  }
  output += '</section>';
  if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
    if (opt_data.appSettings != null) {
      var itemList106 = opt_data.appSettings;
      var itemListLen106 = itemList106.length;
      for (var itemIndex106 = 0; itemIndex106 < itemListLen106; itemIndex106++) {
        var itemData106 = itemList106[itemIndex106];
        output += (itemIndex106 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData106.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : '';
      }
    }
    if (opt_data.signOut != null) {
      var itemList115 = opt_data.signOut;
      var itemListLen115 = itemList115.length;
      for (var itemIndex115 = 0; itemIndex115 < itemListLen115; itemIndex115++) {
        var itemData115 = itemList115[itemIndex115];
        output += (itemIndex115 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData115.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' : '';
      }
    } else if (opt_data.signIn != null) {
      var itemList123 = opt_data.signIn;
      var itemListLen123 = itemList123.length;
      for (var itemIndex123 = 0; itemIndex123 < itemListLen123; itemIndex123++) {
        var itemData123 = itemList123[itemIndex123];
        output += (itemIndex123 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData123.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : '';
      }
    }
    output += '</ul></nav>';
  }
  output += '</div></div></div>';
  if (opt_data.customSearch != null || opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<div class="app-bar-mb container visible-xs-block hidden-print">';
    if (opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.customSearch != null) {
      output += '<nav><h2 class="wb-inv">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? 'Menu' + ((opt_data.customSearch != null) ? ' and search' : '') : 'Search') + '</h2><ul class="app-list-main list-unstyled">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? '<li class="wb-mb-links" id="wb-glb-mn"><a href="#mb-pnl" aria-controls="mb-pnl" class="btn overlay-lnk" role="button">Menu</a><h2>Menu</h2></li>' : '') + ((opt_data.customSearch != null) ? '<li><a href="#app-srch-mb" title="Search" aria-controls="app-srch-mb" class="btn overlay-lnk" role="button"><span class="glyphicon-search glyphicon" aria-hidden="true"></span><span class="wb-inv">Search</span></a></li>' : '') + '</ul><div id="mb-pnl"></div>';
      if (opt_data.customSearch != null) {
        var itemList156 = opt_data.customSearch;
        var itemListLen156 = itemList156.length;
        for (var itemIndex156 = 0; itemIndex156 < itemListLen156; itemIndex156++) {
          var itemData156 = itemList156[itemIndex156];
          if (itemIndex156 == 0) {
            output += '<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t"><div class="modal-header"><h3 class="modal-title">Search' + ((itemData156.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData156.placeholder) : '') + '</h3></div><div class="modal-body"><form action="' + soy.$$escapeHtml(itemData156.action) + '" method="' + soy.$$escapeHtml(itemData156.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="' + ((itemData156.id != null) ? 'app-' + soy.$$escapeHtml(itemData156.id) : 'app-srch-q-mb') + '" class="wb-inv">Search' + ((itemData156.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData156.placeholder) : '') + '</label><input placeholder="Search' + ((itemData156.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData156.placeholder) : '') + '" id="' + ((itemData156.id != null) ? 'app-' + soy.$$escapeHtml(itemData156.id) : 'app-srch-q-mb') + '" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">';
            if (itemData156.hiddenInput != null) {
              var inputList195 = itemData156.hiddenInput;
              var inputListLen195 = inputList195.length;
              for (var inputIndex195 = 0; inputIndex195 < inputListLen195; inputIndex195++) {
                var inputData195 = inputList195[inputIndex195];
                output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData195.name) + '" value="' + soy.$$escapeHtml(inputData195.value) + '" />';
              }
            }
            output += '<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + ((itemData156.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData156.placeholder) : '') + '</span></button></span></div></form></div></section>';
          }
        }
      }
      output += '</nav>';
    }
    if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
      output += '<nav><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
      if (opt_data.appSettings != null) {
        var itemList215 = opt_data.appSettings;
        var itemListLen215 = itemList215.length;
        for (var itemIndex215 = 0; itemIndex215 < itemListLen215; itemIndex215++) {
          var itemData215 = itemList215[itemIndex215];
          output += (itemIndex215 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData215.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : '';
        }
      }
      if (opt_data.signOut != null) {
        var itemList224 = opt_data.signOut;
        var itemListLen224 = itemList224.length;
        for (var itemIndex224 = 0; itemIndex224 < itemListLen224; itemIndex224++) {
          var itemData224 = itemList224[itemIndex224];
          output += (itemIndex224 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData224.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' : '';
        }
      } else if (opt_data.signIn != null) {
        var itemList232 = opt_data.signIn;
        var itemListLen232 = itemList232.length;
        for (var itemIndex232 = 0; itemIndex232 < itemListLen232; itemIndex232++) {
          var itemData232 = itemList232[itemIndex232];
          output += (itemIndex232 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData232.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : '';
        }
      }
      output += '</ul></nav>';
    }
    output += '</div>';
    if (opt_data.menuLinks != null) {
      output += '<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Main navigation menu</h2><div class="row"><ul class="list-inline menu" role="menubar">';
      var linkList244 = opt_data.menuLinks;
      var linkListLen244 = linkList244.length;
      for (var linkIndex244 = 0; linkIndex244 < linkListLen244; linkIndex244++) {
        var linkData244 = linkList244[linkIndex244];
        if (linkData244.subLinks != null) {
          output += '<li><a href="#' + soy.$$escapeHtml(linkData244.id) + '" class="item"' + ((linkData244.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData244.text) + ((linkData244.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData244.id) + '" role="menu">';
          var sublinkList261 = linkData244.subLinks;
          var sublinkListLen261 = sublinkList261.length;
          for (var sublinkIndex261 = 0; sublinkIndex261 < sublinkListLen261; sublinkIndex261++) {
            var sublinkData261 = sublinkList261[sublinkIndex261];
            output += (sublinkIndex261 == sublinkListLen261 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData261.subhref) + '"' + ((sublinkData261.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData261.subtext) + ((sublinkData261.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData261.subhref) + '"' + ((sublinkData261.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData261.subtext) + ((sublinkData261.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
          }
          output += '</ul></li>';
        } else {
          output += '<li><a href="' + soy.$$escapeHtml(linkData244.href) + '" class="item"' + ((linkData244.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData244.text) + ((linkData244.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
      }
      output += '</ul></div></div></nav>';
    } else if (opt_data.menuPath != null) {
      output += '<nav id="wb-sm" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
    }
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList313 = opt_data.breadcrumbs;
    var itemListLen313 = itemList313.length;
    for (var itemIndex313 = 0; itemIndex313 < itemListLen313; itemIndex313++) {
      var itemData313 = itemList313[itemIndex313];
      output += '<li>' + ((itemData313.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData313.acronym) + '">' : '') + ((itemData313.href != null) ? '<a href="' + soy.$$escapeHtml(itemData313.href) + '">' : '') + ((itemIndex313 == 0) ? (itemData313.href == 'http://www.canada.ca' || itemData313.href == 'http://www.canada.ca/' || itemData313.href == 'http://www.canada.ca/en.html' || itemData313.href == 'https://www.canada.ca' || itemData313.href == 'https://www.canada.ca/' || itemData313.href == 'https://www.canada.ca/en.html') ? 'Canada.ca' : ' ' + soy.$$escapeHtml(itemData313.title) : ' ' + soy.$$escapeHtml(itemData313.title)) + ((itemData313.href != null) ? '</a>' : '') + ((itemData313.acronym != null) ? '</abbr>' : '') + '</li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


applicationPage.appFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<footer id="wb-info">';
  if (opt_data.footerSections != null) {
    output += '<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
    var linkList353 = opt_data.footerSections;
    var linkListLen353 = linkList353.length;
    for (var linkIndex353 = 0; linkIndex353 < linkListLen353; linkIndex353++) {
      var linkData353 = linkList353[linkIndex353];
      output += '<li><a href="' + soy.$$escapeHtml(linkData353.href) + '"' + ((linkData353.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData353.text) + ((linkData353.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
    }
    output += '</ul></nav></div>';
  }
  output += '<div class="brand"><div class="container"><div class="row"><nav class="col-md-10 ftr-urlt-lnk"><h2 class="wb-inv">About this Web application</h2><ul>';
  if (opt_data.contactLink != null) {
    var linkList371 = opt_data.contactLink;
    var linkListLen371 = linkList371.length;
    for (var linkIndex371 = 0; linkIndex371 < linkListLen371; linkIndex371++) {
      var linkData371 = linkList371[linkIndex371];
      output += (linkIndex371 == 0) ? '<li><a ' + ((linkData371.href) ? ' href="' + soy.$$escapeHtml(linkData371.href) + '"' : ' href="https://www.canada.ca/en/contact.html"') + ((linkData371.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Contact information' + ((linkData371.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';
  }
  if (opt_data.termsLink != null) {
    var linkList395 = opt_data.termsLink;
    var linkListLen395 = linkList395.length;
    for (var linkIndex395 = 0; linkIndex395 < linkListLen395; linkIndex395++) {
      var linkData395 = linkList395[linkIndex395];
      output += (linkIndex395 == 0) ? '<li><a ' + ((linkData395.href) ? ' href="' + soy.$$escapeHtml(linkData395.href) + '"' : ' href="https://www.canada.ca/en/transparency/terms.html"') + ((linkData395.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Terms and conditions' + ((linkData395.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
  }
  if (opt_data.privacyLink != null) {
    var linkList419 = opt_data.privacyLink;
    var linkListLen419 = linkList419.length;
    for (var linkIndex419 = 0; linkIndex419 < linkListLen419; linkIndex419++) {
      var linkData419 = linkList419[linkIndex419];
      output += (linkIndex419 == 0) ? '<li><a ' + ((linkData419.href) ? ' href="' + soy.$$escapeHtml(linkData419.href) + '"' : ' href="https://www.canada.ca/en/transparency/privacy.html"') + ((linkData419.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Privacy' + ((linkData419.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';
  }
  output += '</ul></nav><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-3 col-lg-2 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>';
  return output;
};

// This file was automatically generated from gcweb-serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/theme.min.css\'><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/cdts/cdtsfixes.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb/release/css/ie8-theme-srv.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb/release/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
};
