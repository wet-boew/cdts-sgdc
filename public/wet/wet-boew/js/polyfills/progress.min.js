/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.44.5 - 2021-11-18
 *
 */
!function(d,a){"use strict";var p="wb-progress",t="progress",e=a.doc,i=function(e){var r,a,t=d(e),i=t.children(".progress, .undef"),s=t.children(".wb-inv"),n=1;if(null!==e.getAttribute("value")){0===i.length&&(i=d("<div class='progress'><div class='progress-bar' role='progressbar'></div></div>"),t.append(i));try{n=parseFloat(e.getAttribute("max"))}catch(e){}n<(r=e.getAttribute("value"))&&(r=n),(a=i.children(".progress-bar")).css("width",r/n*100+"%").attr({"aria-valuemin":0,"aria-valuemax":n,"aria-valuenow":r}),s.detach(),s.appendTo(a)}else 0===i.length&&t.append("<div class='undef'></div>");t.trigger("wb-updated."+p)};e.on("timerpoke.wb wb-init.wb-progress wb-update.wb-progress",t,function(e){var r=e.target;"wb-update"===e.type?e.namespace===p&&e.currentTarget===r&&i(r):function(e){e=a.init(e,p,t);e&&(i(e),a.ready(d(e),p))}(e)}),a.add(t)}(jQuery,(window,wb));
//# sourceMappingURL=progress.min.js.map