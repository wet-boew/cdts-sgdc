// This file was automatically generated from wet-en.soy.
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
  return ((opt_data.cdnEnv == 'esdcqat') ? 'https://cdn-canada.services.gc.qat/app/cls/WET' : (opt_data.cdnEnv == 'esdcnonprod') ? 'https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET' : (opt_data.cdnEnv == 'esdcprod') ? 'https://ssl-templates.services.gc.ca/app/cls/WET' : (opt_data.cdnEnv == 'localhost') ? '../../../..' : 'https://www.canada.ca/etc/designs/canada/cdts') + '/gcweb/v4_0_32/';
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<script>dataLayer = [];<\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-5DBPCQJ\');<\/script><!-- End Google Tag Manager -->';
  if (opt_data.webAnalytics != null) {
    output += '<!-- Adobe Analytics --><script src="//assets.adobedtm.com/';
    var aaList32 = opt_data.webAnalytics;
    var aaListLen32 = aaList32.length;
    for (var aaIndex32 = 0; aaIndex32 < aaListLen32; aaIndex32++) {
      var aaData32 = aaList32[aaIndex32];
      output += 'caacec67651710193d2331efef325107c23a0145/satelliteLib-' + ((aaData32.version == 1) ? '92fcbbc24eeebb654a3dfbe688ed2dfe10a53e24' : (aaData32.version == 2) ? 'c2082deaf69c358c641c5eb20f94b615dd606662' : '') + ((aaData32.environment == 'staging') ? '-staging' : '');
    }
    output += '.js"><\/script>';
  }
  output += '<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/theme.min.css\'><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/cdtsfixes.css\'>' + ((opt_data.isApplication == true) ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/cdtsapps.css\'>' : '') + '<!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]-->';
  return output;
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DBPCQJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) --><nav><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About government"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul></nav><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">';
    var linkList72 = opt_data.lngLinks;
    var linkListLen72 = linkList72.length;
    for (var linkIndex72 = 0; linkIndex72 < linkListLen72; linkIndex72++) {
      var linkData72 = linkList72[linkIndex72];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData72.lang) + '" lang="' + soy.$$escapeHtml(linkData72.lang) + '" href="' + soy.$$escapeHtml(linkData72.href) + '">' + soy.$$escapeHtml(linkData72.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization">' + ((opt_data.siteMenu != false) ? '<a href="https://www.canada.ca/en.html" property="url">' : '') + '<img src=\'' + wet.builder.environment(opt_data) + 'assets/sig-blk-en.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span>' + ((opt_data.siteMenu != false) ? '</a>' : '') + '<meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(opt_data) + 'assets/wmms-blk.svg\' /></div>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-lg-8 text-right"><h2>Search</h2><form action="https://www.canada.ca/en/sr.html" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search Canada.ca</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="en" type="hidden"><input name="st1rt" value="1" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca"><input type="hidden" name="_charset_" value="UTF-8"><datalist id="wb-srch-q-ac"></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav class="gcweb-menu" typeof="SiteNavigationElement"><div class="container"><h2 class="wb-inv">Menu</h2><button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button><ul role="menu" aria-orientation="vertical" data-ajax-replace="//www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html"><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and citizenship</a></li><li role="presentation"><a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/business.html">Business and industry</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/health.html">Health</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/environment.html">Environment and natural resources</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/defence.html">National security and defence</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/policing.html">Policing, justice and emergencies</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/transport.html">Transport and infrastructure</a></li><li role="presentation"><a role="menuitem" href="http://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li></ul></div></nav>' : '<div class="transactBar"></div>');
  if (opt_data.breadcrumbs != false) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList111 = opt_data.breadcrumbs;
      var itemListLen111 = itemList111.length;
      for (var itemIndex111 = 0; itemIndex111 < itemListLen111; itemIndex111++) {
        var itemData111 = itemList111[itemIndex111];
        output += '<li>' + ((itemData111.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData111.acronym) + '">' : '') + ((itemData111.href != null) ? '<a href="' + soy.$$escapeHtml(itemData111.href) + '">' : '') + soy.$$escapeHtml(itemData111.title) + ((itemData111.href != null) ? '</a>' : '') + ((itemData111.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en.html">Home</a></li>';
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
          var itemList181 = opt_data.showShare;
          var itemListLen181 = itemList181.length;
          for (var itemIndex181 = 0; itemIndex181 < itemListLen181; itemIndex181++) {
            var itemData181 = itemList181[itemIndex181];
            output += '"' + soy.$$escapeHtml(itemData181) + '"' + ((! (itemIndex181 == itemListLen181 - 1)) ? ', ' : '');
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
  var sectionList227 = opt_data.sections;
  var sectionListLen227 = sectionList227.length;
  for (var sectionIndex227 = 0; sectionIndex227 < sectionListLen227; sectionIndex227++) {
    var sectionData227 = sectionList227[sectionIndex227];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData227.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData227.sectionLink) + '"' + ((sectionData227.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData227.sectionName) + ((sectionData227.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + ((sectionData227.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList246 = sectionData227.menuLinks;
    var linkListLen246 = linkList246.length;
    for (var linkIndex246 = 0; linkIndex246 < linkListLen246; linkIndex246++) {
      var linkData246 = linkList246[linkIndex246];
      if (linkData246.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData246.href) + '" class="list-group-item"' + ((linkData246.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData246.text) + ((linkData246.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList261 = linkData246.subLinks;
        var sublinkListLen261 = sublinkList261.length;
        for (var sublinkIndex261 = 0; sublinkIndex261 < sublinkListLen261; sublinkIndex261++) {
          var sublinkData261 = sublinkList261[sublinkIndex261];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData261.subhref) + '" class="list-group-item"' + ((sublinkData261.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData261.subtext) + ((sublinkData261.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData246.href) + '" class="list-group-item"' + ((linkData246.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData246.text) + ((linkData246.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
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
      var linkList299 = opt_data.contactLinks;
      var linkListLen299 = linkList299.length;
      for (var linkIndex299 = 0; linkIndex299 < linkListLen299; linkIndex299++) {
        var linkData299 = linkList299[linkIndex299];
        output += (linkIndex299 == 0) ? '<li><a href="' + soy.$$escapeHtml(linkData299.href) + '">Contact us</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/contact.html">Contact us</a></li>';
    }
    output += '<li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a></li><li><a href="https://www.canada.ca/en/government/publicservice.html">Public service and military</a></li><li><a href="https://www.canada.ca/en/news.html">News</a></li><li><a href="https://www.canada.ca/en/government/system/laws.html">Treaties, laws and regulations</a></li><li><a href="https://www.canada.ca/en/transparency/reporting.html">Government-wide reporting</a></li><li><a href="http://pm.gc.ca/eng">Prime Minister</a></li><li><a href="https://www.canada.ca/en/government/system.html">How government works</a></li><li><a href="http://open.canada.ca/en/">Open government</a></li></ul></nav></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul><li><a href="https://www.canada.ca/en/social.html">Social media</a></li><li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li><li><a href="https://www1.canada.ca/en/newsite.html">About Canada.ca</a></li><li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li><li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li></ul></nav>';
  } else {
    output += '<div id="transactFooter" class="landscape"></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul>';
    if (opt_data.contactLinks != null) {
      var linkList313 = opt_data.contactLinks;
      var linkListLen313 = linkList313.length;
      for (var linkIndex313 = 0; linkIndex313 < linkListLen313; linkIndex313++) {
        var linkData313 = linkList313[linkIndex313];
        output += (linkIndex313 == 0) ? '<li><a ' + ((linkData313.href) ? ' href="' + soy.$$escapeHtml(linkData313.href) + '"' : ' href="https://www.canada.ca/en/contact.html"') + ((linkData313.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Contact information' + ((linkData313.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';
    }
    if (opt_data.termsLink != null) {
      var linkList337 = opt_data.termsLink;
      var linkListLen337 = linkList337.length;
      for (var linkIndex337 = 0; linkIndex337 < linkListLen337; linkIndex337++) {
        var linkData337 = linkList337[linkIndex337];
        output += (linkIndex337 == 0) ? '<li><a ' + ((linkData337.href) ? ' href="' + soy.$$escapeHtml(linkData337.href) + '"' : ' href="https://www.canada.ca/en/transparency/terms.html"') + ((linkData337.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Terms and conditions' + ((linkData337.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
    }
    if (opt_data.privacyLink != null) {
      var linkList361 = opt_data.privacyLink;
      var linkListLen361 = linkList361.length;
      for (var linkIndex361 = 0; linkIndex361 < linkListLen361; linkIndex361++) {
        var linkData361 = linkList361[linkIndex361];
        output += (linkIndex361 == 0) ? '<li><a ' + ((linkData361.href) ? ' href="' + soy.$$escapeHtml(linkData361.href) + '"' : ' href="https://www.canada.ca/en/transparency/privacy.html"') + ((linkData361.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Privacy' + ((linkData361.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';
    }
    output += '</ul></nav>';
  }
  output += '<div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-2 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : wet.builder.environment(opt_data) + 'js/') + 'jquery/2.2.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'js/theme.min.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Secure exit notice</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Warning</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'You are about to leave a secure site, do you wish to continue?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Cancel') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Yes') + '</a></li></ul></div></section>' : '') + ((opt_data.isApplication == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/cdtscustom.js\'><\/script>' : '') + ((opt_data.webAnalytics != null) ? '<script>_satellite.pageBottom();<\/script>' : '');
};


wet.builder.splashTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/theme.min.css\'><!--<![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/messages.min.css\'><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/messages-ie.min.css\' /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]-->';
};


wet.builder.splash = function(opt_data, opt_ignored) {
  var output = '\t\t<div id="bg"><img src=\'' + wet.builder.environment(opt_data) + 'img/splash/sp-bg-2.jpg\' alt=""></div><main><div class="sp-hb"><div class="sp-bx col-xs-12"><h1 property="name" class="wb-inv">Canada.ca</h1><div class="row"><div class="col-xs-11 col-md-8"><img src=\'' + wet.builder.environment(opt_data) + 'assets/sig-spl.svg\' alt="Government of Canada / Gouvernement du Canada" /></div></div><div class="row cdts-splash"><section class="col-xs-6 text-right" lang="en">' + ((opt_data.nameEng != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameEng) + '</h2>' : '<h2 class="wb-inv">Government of Canada</h2>') + '</section><section class="col-xs-6" lang="fr">' + ((opt_data.nameFra != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameFra) + '</h2>' : '<h2 class="wb-inv">Gouvernement du Canada</h2>') + '</section></div><row class="text-center">';
  var lang__soy475 = navigator.language;
  output += '<ul class="list-inline lst-spcd"><li>' + ((lang__soy475 == 'en-CA') ? '<a href="' + soy.$$escapeHtml(opt_data.indexEng) + '" class="btn btn-primary" lang="en">English</a>' : '<a href="' + soy.$$escapeHtml(opt_data.indexEng) + '" class="btn btn-default" lang="en">English</a>') + '</li><li>' + ((lang__soy475 == 'fr-CA') ? '<a href="' + soy.$$escapeHtml(opt_data.indexFra) + '" class="btn btn-primary" lang="fr">Français</a>' : '<a href="' + soy.$$escapeHtml(opt_data.indexFra) + '" class="btn btn-default" lang="fr">Français</a>') + '</li></ul></row></div><div class="sp-bx-bt col-xs-12"><div class="row"><div class="col-xs-7 col-md-8"><a href="' + soy.$$escapeHtml(opt_data.termsEng) + '" class="sp-lk">Terms & conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="' + soy.$$escapeHtml(opt_data.termsFra) + '" class="sp-lk" lang="fr">Avis</a></div><div class="col-xs-5 col-md-4 text-right mrgn-bttm-md"><img src=\'' + wet.builder.environment(opt_data) + 'assets/wmms-spl.svg\' width="127" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></main><!--[if gte IE 9 | !IE ]><!--><script src="' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs' : wet.builder.environment(opt_data) + 'js/') + 'jquery/2.2.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'js/theme.min.js\'><\/script>' + ((opt_data.webAnalytics != null) ? '<script>_satellite.pageBottom();<\/script>' : '') + '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/cdtsfixes.css\'>';
  return output;
};

;
// This file was automatically generated from serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/theme.min.css\'><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/cdtsfixes.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'css/ie8-theme-srv.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\'' + wet.builder.environment(opt_data) + 'assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>';
};

;
// This file was automatically generated from appPage-en.soy.
// Please don't edit this file by hand.

if (typeof applicationPage == 'undefined') { var applicationPage = {}; }


applicationPage.appTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<script>dataLayer = [];<\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-5DBPCQJ\');<\/script><!-- End Google Tag Manager --><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "' + ((opt_data.topCusMenu == true) ? 'Related links' : 'About this Web application') + '"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">';
    var linkList561 = opt_data.lngLinks;
    var linkListLen561 = linkList561.length;
    for (var linkIndex561 = 0; linkIndex561 < linkListLen561; linkIndex561++) {
      var linkData561 = linkList561[linkIndex561];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData561.lang) + '" href="' + soy.$$escapeHtml(linkData561.href) + '">' + soy.$$escapeHtml(linkData561.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization"><img src=\'' + wet.builder.environment(opt_data) + 'assets/sig-blk-en.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span><meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(opt_data) + 'assets/wmms-blk.svg\' /></div>';
  if (opt_data.customSearch != null) {
    var itemList578 = opt_data.customSearch;
    var itemListLen578 = itemList578.length;
    for (var itemIndex578 = 0; itemIndex578 < itemListLen578; itemIndex578++) {
      var itemData578 = itemList578[itemIndex578];
      if (itemIndex578 == 0) {
        output += '<section id="wb-srch" class="col-lg-8 text-right visible-md visible-lg"><h2>Search' + ((itemData578.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData578.placeholder) : '') + '</h2><form action="' + soy.$$escapeHtml(itemData578.action) + '" method="' + soy.$$escapeHtml(itemData578.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData578.id != null) ? soy.$$escapeHtml(itemData578.id) : 'wb-srch-q') + '" class="wb-inv">Search' + ((itemData578.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData578.placeholder) : '') + '</label><input id="' + ((itemData578.id != null) ? soy.$$escapeHtml(itemData578.id) : 'wb-srch-q') + '" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search' + ((itemData578.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData578.placeholder) : '') + '">';
        if (itemData578.hiddenInput != null) {
          var inputList615 = itemData578.hiddenInput;
          var inputListLen615 = inputList615.length;
          for (var inputIndex615 = 0; inputIndex615 < inputListLen615; inputIndex615++) {
            var inputData615 = inputList615[inputIndex615];
            output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData615.name) + '" value="' + soy.$$escapeHtml(inputData615.value) + '" />';
          }
        }
        output += '</div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + ((itemData578.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData578.placeholder) : '') + '</span></button></div></form></section>';
      }
    }
  }
  output += '</div></div><div class="app-bar"><div class="container"><div class="row">' + ((opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) ? '<section class="col-xs-12 col-sm-7">' : '<section class="col-xs-12">');
  var itemList635 = opt_data.appName;
  var itemListLen635 = itemList635.length;
  for (var itemIndex635 = 0; itemIndex635 < itemListLen635; itemIndex635++) {
    var itemData635 = itemList635[itemIndex635];
    output += (itemIndex635 == 0) ? '<h2 class="wb-inv">Name of Web application</h2><a class="app-name" href="' + soy.$$escapeHtml(itemData635.href) + '">' + soy.$$escapeHtml(itemData635.text) + '</a>' : '';
  }
  output += '</section>';
  if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
    if (opt_data.appSettings != null) {
      var itemList650 = opt_data.appSettings;
      var itemListLen650 = itemList650.length;
      for (var itemIndex650 = 0; itemIndex650 < itemListLen650; itemIndex650++) {
        var itemData650 = itemList650[itemIndex650];
        output += (itemIndex650 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData650.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : '';
      }
    }
    if (opt_data.signOut != null) {
      var itemList659 = opt_data.signOut;
      var itemListLen659 = itemList659.length;
      for (var itemIndex659 = 0; itemIndex659 < itemListLen659; itemIndex659++) {
        var itemData659 = itemList659[itemIndex659];
        output += (itemIndex659 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData659.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' : '';
      }
    } else if (opt_data.signIn != null) {
      var itemList667 = opt_data.signIn;
      var itemListLen667 = itemList667.length;
      for (var itemIndex667 = 0; itemIndex667 < itemListLen667; itemIndex667++) {
        var itemData667 = itemList667[itemIndex667];
        output += (itemIndex667 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData667.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : '';
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
        var itemList700 = opt_data.customSearch;
        var itemListLen700 = itemList700.length;
        for (var itemIndex700 = 0; itemIndex700 < itemListLen700; itemIndex700++) {
          var itemData700 = itemList700[itemIndex700];
          if (itemIndex700 == 0) {
            output += '<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t"><div class="modal-header"><h3 class="modal-title">Search' + ((itemData700.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData700.placeholder) : '') + '</h3></div><div class="modal-body"><form action="' + soy.$$escapeHtml(itemData700.action) + '" method="' + soy.$$escapeHtml(itemData700.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="' + ((itemData700.id != null) ? 'app-' + soy.$$escapeHtml(itemData700.id) : 'app-srch-q-mb') + '" class="wb-inv">Search' + ((itemData700.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData700.placeholder) : '') + '</label><input placeholder="Search' + ((itemData700.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData700.placeholder) : '') + '" id="' + ((itemData700.id != null) ? 'app-' + soy.$$escapeHtml(itemData700.id) : 'app-srch-q-mb') + '" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">';
            if (itemData700.hiddenInput != null) {
              var inputList739 = itemData700.hiddenInput;
              var inputListLen739 = inputList739.length;
              for (var inputIndex739 = 0; inputIndex739 < inputListLen739; inputIndex739++) {
                var inputData739 = inputList739[inputIndex739];
                output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData739.name) + '" value="' + soy.$$escapeHtml(inputData739.value) + '" />';
              }
            }
            output += '<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + ((itemData700.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData700.placeholder) : '') + '</span></button></span></div></form></div></section>';
          }
        }
      }
      output += '</nav>';
    }
    if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
      output += '<nav><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
      if (opt_data.appSettings != null) {
        var itemList759 = opt_data.appSettings;
        var itemListLen759 = itemList759.length;
        for (var itemIndex759 = 0; itemIndex759 < itemListLen759; itemIndex759++) {
          var itemData759 = itemList759[itemIndex759];
          output += (itemIndex759 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData759.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : '';
        }
      }
      if (opt_data.signOut != null) {
        var itemList768 = opt_data.signOut;
        var itemListLen768 = itemList768.length;
        for (var itemIndex768 = 0; itemIndex768 < itemListLen768; itemIndex768++) {
          var itemData768 = itemList768[itemIndex768];
          output += (itemIndex768 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData768.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' : '';
        }
      } else if (opt_data.signIn != null) {
        var itemList776 = opt_data.signIn;
        var itemListLen776 = itemList776.length;
        for (var itemIndex776 = 0; itemIndex776 < itemListLen776; itemIndex776++) {
          var itemData776 = itemList776[itemIndex776];
          output += (itemIndex776 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData776.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : '';
        }
      }
      output += '</ul></nav>';
    }
    output += '</div>';
    if (opt_data.menuLinks != null) {
      output += '<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Main navigation menu</h2><div class="row"><ul class="list-inline menu" role="menubar">';
      var linkList788 = opt_data.menuLinks;
      var linkListLen788 = linkList788.length;
      for (var linkIndex788 = 0; linkIndex788 < linkListLen788; linkIndex788++) {
        var linkData788 = linkList788[linkIndex788];
        if (linkData788.subLinks != null) {
          output += '<li><a href="#' + soy.$$escapeHtml(linkData788.id) + '" class="item"' + ((linkData788.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData788.text) + ((linkData788.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData788.id) + '" role="menu">';
          var sublinkList805 = linkData788.subLinks;
          var sublinkListLen805 = sublinkList805.length;
          for (var sublinkIndex805 = 0; sublinkIndex805 < sublinkListLen805; sublinkIndex805++) {
            var sublinkData805 = sublinkList805[sublinkIndex805];
            output += (sublinkIndex805 == sublinkListLen805 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData805.subhref) + '"' + ((sublinkData805.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData805.subtext) + ((sublinkData805.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData805.subhref) + '"' + ((sublinkData805.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData805.subtext) + ((sublinkData805.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
          }
          output += '</ul></li>';
        } else {
          output += '<li><a href="' + soy.$$escapeHtml(linkData788.href) + '" class="item"' + ((linkData788.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData788.text) + ((linkData788.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
      }
      output += '</ul></div></div></nav>';
    } else if (opt_data.menuPath != null) {
      output += '<nav id="wb-sm" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
    }
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList857 = opt_data.breadcrumbs;
    var itemListLen857 = itemList857.length;
    for (var itemIndex857 = 0; itemIndex857 < itemListLen857; itemIndex857++) {
      var itemData857 = itemList857[itemIndex857];
      output += '<li>' + ((itemData857.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData857.acronym) + '">' : '') + ((itemData857.href != null) ? '<a href="' + soy.$$escapeHtml(itemData857.href) + '">' : '') + soy.$$escapeHtml(itemData857.title) + ((itemData857.href != null) ? '</a>' : '') + ((itemData857.acronym != null) ? '</abbr>' : '') + '</li>';
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
    var linkList887 = opt_data.footerSections;
    var linkListLen887 = linkList887.length;
    for (var linkIndex887 = 0; linkIndex887 < linkListLen887; linkIndex887++) {
      var linkData887 = linkList887[linkIndex887];
      output += '<li><a href="' + soy.$$escapeHtml(linkData887.href) + '"' + ((linkData887.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData887.text) + ((linkData887.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
    }
    output += '</ul></nav></div>';
  }
  output += '<div class="brand"><div class="container"><div class="row"><nav class="col-md-10 ftr-urlt-lnk"><h2 class="wb-inv">About this Web application</h2><ul>';
  if (opt_data.contactLink != null) {
    var linkList905 = opt_data.contactLink;
    var linkListLen905 = linkList905.length;
    for (var linkIndex905 = 0; linkIndex905 < linkListLen905; linkIndex905++) {
      var linkData905 = linkList905[linkIndex905];
      output += (linkIndex905 == 0) ? '<li><a ' + ((linkData905.href) ? ' href="' + soy.$$escapeHtml(linkData905.href) + '"' : ' href="https://www.canada.ca/en/contact.html"') + ((linkData905.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Contact information' + ((linkData905.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';
  }
  if (opt_data.termsLink != null) {
    var linkList929 = opt_data.termsLink;
    var linkListLen929 = linkList929.length;
    for (var linkIndex929 = 0; linkIndex929 < linkListLen929; linkIndex929++) {
      var linkData929 = linkList929[linkIndex929];
      output += (linkIndex929 == 0) ? '<li><a ' + ((linkData929.href) ? ' href="' + soy.$$escapeHtml(linkData929.href) + '"' : ' href="https://www.canada.ca/en/transparency/terms.html"') + ((linkData929.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Terms and conditions' + ((linkData929.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
  }
  if (opt_data.privacyLink != null) {
    var linkList953 = opt_data.privacyLink;
    var linkListLen953 = linkList953.length;
    for (var linkIndex953 = 0; linkIndex953 < linkListLen953; linkIndex953++) {
      var linkData953 = linkList953[linkIndex953];
      output += (linkIndex953 == 0) ? '<li><a ' + ((linkData953.href) ? ' href="' + soy.$$escapeHtml(linkData953.href) + '"' : ' href="https://www.canada.ca/en/transparency/privacy.html"') + ((linkData953.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Privacy' + ((linkData953.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';
  }
  output += '</ul></nav><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-3 col-lg-2 text-right"><img src=\'' + wet.builder.environment(opt_data) + 'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>';
  return output;
};
