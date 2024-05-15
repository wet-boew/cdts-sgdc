/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.79 - 2024-05-01
 *
 *//*! Modernizr (Custom Build) | MIT & BSD */
/*! @license DOMPurify 2.4.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.4/LICENSE */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DOMPurify = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;

    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;

    while (l--) {
      var element = array[l];

      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);

        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    var newObject = create(null);
    var property;

    for (property in object) {
      if (apply(hasOwnProperty, object, [property]) === true) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }
  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);

      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);

  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */


  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.


    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';

    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */


    DOMPurify.version = '2.4.4';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }

    var originalDocument = window.document;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        HTMLFormElement = window.HTMLFormElement,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');

      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment,
        getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};

    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
        ERB_EXPR$1 = ERB_EXPR,
        TMPLIT_EXPR$1 = TMPLIT_EXPR,
        DATA_ATTR$1 = DATA_ATTR,
        ARIA_ATTR$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    /* Allowed attribute names */

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    var FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    var FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    var ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    var ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    var ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */

    var ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    var SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    var WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    var SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    var FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    var RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    var RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    var RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

    var SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */

    var KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    var IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    var USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */

    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    /* Parsing of strict XHTML documents */

    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    var CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    var formElement = document.createElement('form');

    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity


    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */


      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */


      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */


      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];

        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */


      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }

      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }

        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */


      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.


      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.


        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.


        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points


        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.


        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace


        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // For XHTML and XML documents that support custom namespaces


      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.


      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */


    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });

      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */


    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */


    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */


      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);

        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */


      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }

      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */


    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */


    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */


    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */


    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */


    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */


      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Check if tagname contains Unicode */


      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Now let's check the element's type and name */


      var tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */


      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Mitigate a problem with templates inside select */


      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Remove element if anything forbids its presence */


      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */


        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);

        return true;
      }
      /* Check whether element has a valid namespace */


      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }

      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Sanitize element content to be template-safe */


      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
        content = stringReplace(content, ERB_EXPR$1, ' ');
        content = stringReplace(content, TMPLIT_EXPR$1, ' ');

        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity


    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */


      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */

      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */


    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */


    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */


        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */


        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */


        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);

          continue;
        }
        /* Sanitize attribute content to be template-safe */


        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
          value = stringReplace(value, ERB_EXPR$1, ' ');
          value = stringReplace(value, TMPLIT_EXPR$1, ' ');
        }
        /* Is `value` valid for this attribute? */


        var lcTag = transformCaseFunc(currentNode.nodeName);

        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */


        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value


          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Handle attributes that require Trusted Types */


        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                value = trustedTypesPolicy.createHTML(value);
                break;

              case 'TrustedScriptURL':
                value = trustedTypesPolicy.createScriptURL(value);
                break;
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */


        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */


    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;

      var shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */


      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */


        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */


        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity


    DOMPurify.sanitize = function (dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;

      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */


      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();

          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }
      /* Check we can run. Otherwise fall back or ignore */


      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }
      /* Assign config vars */


      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */


      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);

          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);

        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */


        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */


      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */


      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */


      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        /* Sanitize tags and elements */


        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */


        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;
      /* If we sanitized `dirty` in-place, return it. */

      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */


      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */


      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */


    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);

      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */


    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */


    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */


    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */


    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */


    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */


    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map

/**
 * jQuery fixes
 *
 * Note: The following analysis and/or changes was required also to be applied in our code base:
 *	- Ensure there is no JSONP ajax call
 *	- Ensure to not use self closing tag when a closing tag is usally needed.
 *		ex: `<div />` need to change for `<div></div>`
 *		This is applicable to all tags except the one in this list: area|br|col|embed|hr|img|input|link|meta|param
 *	- Review how `<tr>`, `<td>`, `<script>` and `<link>` are inserted with `$()`.
 *		Their insersion need to be completed differently like the by using the javascript DOM interface.
 *	- All content that related to jQuery DOM manipulation are sanitized with DOMPurify
 *	- You can't use jQuery for parsing XML document, you can use DOMParser() as an alternative
 *	- Ensure AJAX and fetch are sanitized before they response are used
 */
/*

// Test case for the jQuery fixes bellow

Test: jQuery()

	- Run in your browser console
	> $( "<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>" ).appendTo( "#wb-cont" );
	result: No iframe inserted around the heading level 1

Test:
jQuery.html()
jQuery.append()
jQuery.prepend()
jQuery.before()
jQuery.after()

	- Use the data-ajax demo page: /demos/data-ajax/data-ajax-en.html
	- Insert the following in the ajaxed in file: <p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>
	- Check if the dirty HTML are cleaned for the example: "append", "prepend", "before", "after"
	- The data-ajax-replace will also test the jQuery.html() function.

Test: jQuery.replaceWith()

	- Run in your browser console
	> $("#wb-cont").replaceWith( "<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>" );
	result: No iframe inserted around the heading level 1

Test: jQuery.parseHTML()

	- Run in your browser console, pass unsafe HTML and it should return sanitized HTML
	> jQuery.parseHTML( "<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>" );
	result: return an array with 1 element, [ p ]

Test: jQuery.htmlPrefilter()

	- Run in your browser console
	> jQuery.htmlPrefilter( "<tr/>" );
	result: return <tr/>

Test: jQuery.extend

	- Run in your browser console
	> var dataFromAPI = JSON.parse( '{ "new": "property", "__proto__": { "polluted": "true" } }' );
	> var myObject = jQuery.extend( '{ "new": "property" }', dataFromAPI );
	> console.log( myObject.polluted );
	result: > undefined

*/

( function( jQuery, DOMPurify, window ) {
"use strict";

/**
 * Copied from: https://git.drupalcode.org/project/drupal/-/commit/d2f26902ef5d6de58caaf2a7c766eb2115b1c17e
 *
 * This is almost verbatim copied from jQuery 3.4.0.
 *
 * Only two minor changes have been made:
 * - The call to isFunction() is changed to jQuery.isFunction().
 * - The two calls to Array.isArray() is changed to jQuery.isArray().
 *
 * The above two changes ensure compatibility with all older jQuery versions
 * (1.4.4 - 3.3.1) and older browser versions (e.g., IE8).
 */
jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		options = arguments[ i ];
		if ( options !== undefined || options !== null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !jQuery.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

/**
 * Security advisories: https://github.com/jquery/jquery/security/advisories/GHSA-gxr4-xjj5-5px2
 */
jQuery.htmlPrefilter = function( html ) {
	return html;
};

/**
 * Security advisories: https://github.com/jquery/jquery/security/advisories/GHSA-jpcq-cgw6-v4j6
 *
 * This implementation leverage DOMPurify for filtering every string prior DOM manipulation by jQuery
 *
 */
var localParseHTML = jQuery.parseHTML,
	append = jQuery.fn.append,
	prepend = jQuery.fn.prepend,
	before = jQuery.fn.before,
	after = jQuery.fn.after,
	replaceWith = jQuery.fn.replaceWith,
	jqInit = jQuery.fn.init,
	dataTableAllowedTag = [
		"<tbody/>",
		"<tr/>",
		"<td />",
		"<td/>"
	],
	sanitize = function( html ) {

		// Add an exception for DataTable plugin
		if ( window.DataTable && dataTableAllowedTag.indexOf( html ) !== -1 ) {
			return html;
		}

		return DOMPurify.sanitize( html );
	};

jQuery.parseHTML = function( data, context, keepScripts ) {
	return localParseHTML( sanitize( data ), context, keepScripts );
};

jQuery.domManip = null;

jQuery.append = jQuery.fn.append = function() {
	var args = arguments,
		value = args[ 0 ];
	if ( typeof value === "string" ) {
		value = sanitize( value );
		args[ 0 ] = value;
	}
	return append.apply( this, args );
};

jQuery.prepend = jQuery.fn.prepend = function() {
	var args = arguments,
		value = args[ 0 ];
	if ( typeof value === "string" ) {
		value = sanitize( value );
		args[ 0 ] = value;
	}
	return prepend.apply( this, args );
};

jQuery.before = jQuery.fn.before = function() {
	var args = arguments,
		value = args[ 0 ];
	if ( typeof value === "string" ) {
		value = sanitize( value );
		args[ 0 ] = value;
	}
	return before.apply( this, args );
};

jQuery.after = jQuery.fn.after = function() {
	var args = arguments,
		value = args[ 0 ];
	if ( typeof value === "string" ) {
		value = sanitize( value );
		args[ 0 ] = value;
	}
	return after.apply( this, args );
};

jQuery.replaceWith = jQuery.fn.replaceWith = function() {
	var args = arguments,
		value = args[ 0 ];
	if ( typeof value === "string" ) {
		value = sanitize( value );
		args[ 0 ] = value;
	}
	return replaceWith.apply( this, args );
};

jQuery.fn.init = function( selector, context, root ) {
	if ( typeof selector === "string" ) {
		selector = sanitize( selector );
	}
	return new jqInit( selector, context, root );
};

jQuery.html = function( value ) {
	return jQuery.html( sanitize( value ) );
};

} )( jQuery, DOMPurify, window );

/* Modernizr (Custom Build) | MIT & BSD
 * Build: https://modernizr.com/download/#-elem_details-elem_progress_meter-mathml-cors-load-mq-css3-input-inputtypes-svg-cssclasses-csstransitions-fontface-backgroundsize-borderimage-teststyles-testprops-testallprops-hasevents-prefixes-domprefixes
 */
;window.Modernizr=function(e,t,n){function L(e){f.cssText=e}function A(e,t){return L(p.join(e+";")+(t||""))}function O(e,t){return typeof e===t}function M(e,t){return!!~(""+e).indexOf(t)}function _(e,t){for(var r in e){var i=e[r];if(!M(i,"-")&&f[i]!==n)return t=="pfx"?i:!0}return!1}function D(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:O(s,"function")?s.bind(r||t):s}return!1}function P(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+v.join(r+" ")+r).split(" ");return O(t,"string")||O(t,"undefined")?_(i,t):(i=(e+" "+m.join(r+" ")+r).split(" "),D(i,t,n))}function H(){i.input=function(n){for(var r=0,i=n.length;r<i;r++)w[n[r]]=n[r]in l;return w.list&&(w.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),w}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),i.inputtypes=function(e){for(var r=0,i,s,u,a=e.length;r<a;r++)l.setAttribute("type",s=e[r]),i=l.type!=="text",i&&(l.value=c,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&l.style.WebkitAppearance!==n?(o.appendChild(l),u=t.defaultView,i=u.getComputedStyle&&u.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,o.removeChild(l)):/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?i=l.checkValidity&&l.checkValidity()===!1:i=l.value!=c)),b[e[r]]=!!i;return b}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var r="2.8.3",i={},s=!0,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l=t.createElement("input"),c=":)",h={}.toString,p=" -webkit- -moz- -o- -ms- ".split(" "),d="Webkit Moz O ms",v=d.split(" "),m=d.toLowerCase().split(" "),g={svg:"http://www.w3.org/2000/svg"},y={},b={},w={},E=[],S=E.slice,x,T=function(e,n,r,i){var s,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--)f=t.createElement("div"),f.id=i?i[r]:u+(r+1),c.appendChild(f);return s=["&#173;",'<style id="s',u,'">',e,"</style>"].join(""),c.id=u,(h?c:p).innerHTML+=s,p.appendChild(c),h||(p.style.background="",p.style.overflow="hidden",l=o.style.overflow,o.style.overflow="hidden",o.appendChild(p)),a=n(c,e),h?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),o.style.overflow=l),!!a},N=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return T("@media "+t+" { #"+u+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"}),r},C={}.hasOwnProperty,k;!O(C,"undefined")&&!O(C.call,"undefined")?k=function(e,t){return C.call(e,t)}:k=function(e,t){return t in e&&O(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=S.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(S.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(S.call(arguments)))};return i}),y.backgroundsize=function(){return P("backgroundSize")},y.borderimage=function(){return P("borderImage")},y.csstransitions=function(){return P("transition")},y.fontface=function(){var e;return T('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(o)&&o.indexOf(r.split(" ")[0])===0}),e},y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect};for(var B in y)k(y,B)&&(x=B.toLowerCase(),i[x]=y[B](),E.push((i[x]?"":"no-")+x));return i.input||H(),i.addTest=function(e,t){if(typeof e=="object")for(var r in e)k(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t,typeof s!="undefined"&&s&&(o.className+=" "+(t?"":"no-")+e),i[e]=t}return i},L(""),a=l=null,i._version=r,i._prefixes=p,i._domPrefixes=m,i._cssomPrefixes=v,i.mq=N,i.testProp=function(e){return _([e])},i.testAllProps=P,i.testStyles=T,o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+E.join(" "):""),i}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("details",function(){var e=document,t=e.createElement("details"),n,r,i;return"open"in t?(r=e.body||function(){var t=e.documentElement;return n=!0,t.insertBefore(e.createElement("body"),t.firstElementChild||t.firstChild)}(),t.innerHTML="<summary>a</summary>b",t.style.display="block",r.appendChild(t),i=t.offsetHeight,t.open=!0,i=i!=t.offsetHeight,r.removeChild(t),n&&r.parentNode.removeChild(r),i):!1}),Modernizr.addTest("progressbar",function(){return document.createElement("progress").max!==undefined}),Modernizr.addTest("meter",function(){return document.createElement("meter").max!==undefined}),Modernizr.addTest("mathml",function(){var e=!1;if(document.createElementNS){var t="http://www.w3.org/1998/Math/MathML",n=document.createElement("div");n.style.position="absolute";var r=n.appendChild(document.createElementNS(t,"math")).appendChild(document.createElementNS(t,"mfrac"));r.appendChild(document.createElementNS(t,"mi")).appendChild(document.createTextNode("xx")),r.appendChild(document.createElementNS(t,"mi")).appendChild(document.createTextNode("yy")),document.body.appendChild(n),e=n.offsetHeight>n.offsetWidth}return e}),Modernizr.addTest("cors",!!(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest));

/**
 * String.prototype.includes() polyfill
 * @author Ricokola
 * @license MIT
 */
if ( !String.prototype.includes ) {
	String.prototype.includes = function( string ) {

		return this.indexOf( string ) !== -1;

	};
}

/**
 * String.prototype.replaceAll() polyfill
 * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
 * @author Chris Ferdinandi
 * @license MIT
 */
if ( !String.prototype.replaceAll ) {
	String.prototype.replaceAll = function( str, newStr ) {

		// If a regex pattern
		if ( Object.prototype.toString.call( str ).toLowerCase() === "[object regexp]" ) {
			return this.replace( str, newStr );
		}

		// If a string
		return this.replace( new RegExp( str, "g" ), newStr );

	};
}

/**
 * @title WET-BOEW Vapour loader
 * @overview Helper methods for WET
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET Community
 */
/*
 * Vapour Object that will store tombstone data for plugins to leverage
 */
( function( $, window, document, undef ) {
"use strict";

/**
 * @method getUrlParts
 * @param {String} url of URL to examine
 * @return {Object} of the parts of passed URL
 */
var getUrlParts = function( url ) {
		var a = document.createElement( "a" );
		a.href = url;
		return {
			href: a.href,
			absolute: a.href,
			host: a.host,
			hostname: a.hostname,
			port: a.port,
			pathname: a.pathname.replace( /^([^/])/, "/$1" ), // Prefix pathname with a slash in browsers that don't natively do it (i.e. all versions of IE and possibly early versions of Edge). See pull request #8110.
			protocol: a.protocol,
			hash: a.hash,
			search: a.search,

			// A collection of the parameters of the query string part of the URL.
			params: ( function() {
				var queryString = a.search.replace( /(^\?)/, "" );
				if ( !queryString ) {
					return {};
				}
				return queryString.split( "&" ).map( function( n ) {
					return ( n = n.split( "=" ), this[ n[ 0 ] ] = decodeURIComponent( n[ 1 ] ), this );
				}.bind( {} ) )[ 0 ];
			}() )
		};
	},

	/**
	 * @variable seed
	 * @return a unique number for auto-generating ids
	 */
	seed = 0,

	/**
	 * @variable $src
	 * @return {jQuery Element} of wb script element
	 */
	$src = $( "script[src*='wet-boew.js'],script[src*='wet-boew.min.js'],script[data-wb-core]" )
		.last(),

	/**
	 * @variable i18n
	 * @return {string} of WET document language
	 */
	lang = ( function( ele ) {
		let lang = document.documentElement.lang;
		const shortLangLength = 2;

		// Perform extra checks if the page uses a long language code
		if ( lang.length > shortLangLength ) {
			let longLangs = [ "pt-BR", "zh-Hans" ]; // Built-in long language codes

			// Check if any custom long language codes have been specified
			// Specify by adding data-wb-core and data-lang-long="en-CA en-US etc" attributes to WET's script element (e.g. wet-boew.js or wet-boew.min.js)
			if ( ele[ 0 ].hasAttribute( "data-wb-core" ) &&  ele[ 0 ].hasAttribute( "data-lang-long" ) ) {
				const longLangsCustom = ele.attr( "data-lang-long" ).split( " " );

				// Add extra language codes to the beginning of the longLangs array to match them more quickly
				longLangs = longLangsCustom.concat( longLangs );
			}

			// Shorten the language code if it doesn't exist in the longLangs array
			if ( longLangs.indexOf( lang ) === -1 ) {
				lang = lang.substring( 0, shortLangLength );
			}
		}

		return lang;
	}( $src ) ),

	paths = ( function( ele ) {
		var paths = {};

		paths.home = ele.prop( "src" )
			.split( "?" )[ 0 ].split( "/" )
			.slice( 0, -1 )
			.join( "/" );
		paths.asset = paths.home + "/../assets";
		paths.template = paths.home + "/assets/templates";
		paths.dep = paths.home + "/deps";
		paths.js = paths.home;
		paths.css = paths.home.substring( 0, paths.home.length - 2 ) + "css";
		paths.mode = ele.prop( "src" ).indexOf( ".min" ) < 0 ? "" : ".min";

		if ( ele[ 0 ].hasAttribute( "data-wb-core" ) ) {
			$.extend( paths, {
				home: ele.attr( "data-home" ),
				asset: ele.attr( "data-asset" ),
				template: ele.attr( "data-template" ),
				dep: ele.attr( "data-dep" ),
				js: ele.attr( "data-js" ),
				css: ele.attr( "data-css" ),
				mode: ele.attr( "data-mode" )
			} );
		}

		return paths;
	}( $src ) ),

	/**
	 * @variable oldie
	 * @return {integer} of IE version
	 */
	oldie = ( function() {
		var undef,
			v = 3,
			div = document.createElement( "div" ),
			all = div.getElementsByTagName( "i" );

		while ( (
			div.innerHTML = "<!--[if gt IE " + ( v += 1 ) + "]><i></i><![endif]-->",
			all[ 0 ]
		) ) { /* empty */ }

		return v > 4 ? v : undef;
	}() ),

	/**
	 * @variable currentpage
	 * @return {Object} of parts of the current page URL
	 */
	currentpage = getUrlParts( window.location.href ),

	/**
	 * @variable disabled
	 * @return {boolean} of state of disabled flag
	 */
	disabled = ( function() {
		var disabledSaved = "false",
			disabled;

		try {
			disabledSaved = localStorage.getItem( "wbdisable" ) || disabledSaved;
		} catch ( e ) {

			/* swallow error */
		}

		disabled = currentpage.params.wbdisable || disabledSaved;
		return ( typeof disabled === "string" ) ? ( disabled.toLowerCase() === "true" ) : Boolean( disabled );
	}() ),

	/*-----------------------------
	 * Core Library Object
	 *-----------------------------
	 */
	wb = {
		"/": paths.home,
		"/assets": paths.asset,
		"/templates": paths.template,
		"/deps": paths.dep,
		lang: lang,
		mode: paths.mode,
		doc: $( document ),
		win: $( window ),
		html: $( "html" ),
		pageUrlParts: currentpage,
		getUrlParts: getUrlParts,
		isDisabled: disabled,
		isStarted: false,
		isReady: false,
		ignoreHashChange: false,
		initQueue: 0,

		getPath: function( property ) {
			return Object.prototype.hasOwnProperty.call( this, property ) ? this[ property ] : undef;
		},

		getMode: function() {
			return this.mode;
		},

		getId: function() {
			return "wb-auto-" + ( seed += 1 );
		},

		init: function( event, componentName, selector, noAutoId ) {
			var	eventTarget = event.target,
				isEvent = !!eventTarget,
				node = isEvent ? eventTarget : event,
				initedClass = componentName + "-inited",
				isDocumentNode = node === document;

			// Filter out any events triggered by descendants and only initializes
			// the element once (if is an event and document node is not the target)
			if ( !isEvent || isDocumentNode || ( event.currentTarget === node &&
				node.className.indexOf( initedClass ) === -1 ) ) {

				this.initQueue += 1;
				this.remove( selector );
				if ( !isDocumentNode ) {
					node.className += " " + initedClass;

					if ( !noAutoId && !node.id ) {
						node.id = wb.getId();
					}
				}

				return node;
			}

			return undef;
		},

		ready: function( $elm, componentName, context ) {
			if ( $elm ) {

				// Trigger any nested elements (excluding nested within nested)
				$elm
					.find( wb.allSelectors )
					.addClass( "wb-init" )
					.filter( ":not(#" + $elm.attr( "id" ) + " .wb-init .wb-init)" )
					.trigger( "timerpoke.wb" );

				// Identify that the component is ready
				$elm.trigger( "wb-ready." + componentName, context );
				this.initQueue -= 1;
			} else {
				this.doc.trigger( "wb-ready." + componentName, context );
			}

			// Identify that global initialization is complete
			if ( !this.isReady && this.isStarted && this.initQueue < 1 ) {
				this.isReady = true;
				this.doc.trigger( "wb-ready.wb" );
			}
		},

		// Lets load some variables into wb for IE detection
		other: !oldie,
		desktop: ( window.orientation === undefined ),
		ie: !!oldie,
		ie6: ( oldie === 6 ),
		ie7: ( oldie === 7 ),
		ie8: ( oldie === 8 ),
		ie9: ( oldie === 9 ),
		ielt7: ( oldie < 7 ),
		ielt8: ( oldie < 8 ),
		ielt9: ( oldie < 9 ),
		ielt10: ( oldie < 10 ),
		ie11: ( navigator.userAgent.includes( "Trident/7." ) ),

		selectors: [],

		resizeEvents: "xxsmallview.wb xsmallview.wb smallview.wb mediumview.wb largeview.wb xlargeview.wb",

		// For Charts and Geomap
		drawColours: [
			"#8d201c",
			"#EE8310",
			"#2a7da6",
			"#5a306b",
			"#285228",
			"#154055",
			"#555555",
			"#f6d200",
			"#d73d38",
			"#418541",
			"#87aec9",
			"#23447e",
			"#999999"
		],

		// Get and generate a unique session id
		sessionGUID: function() {
			var sessionId = sessionStorage.getItem( "wb-session-GUID" );
			if ( !sessionId ) {
				sessionId = wb.guid();
				sessionStorage.setItem( "wb-session-GUID", sessionId );
			}
			return sessionId;
		},

		// Add a selector to be targeted by timerpoke
		add: function( selector ) {
			var exists = false,
				len = wb.selectors.length,
				i;

			// Lets ensure we are not running if things are disabled
			if ( wb.isDisabled && selector !== "#wb-tphp" ) {
				return 0;
			}

			// Check to see if the selector is already targeted
			for ( i = 0; i !== len; i += 1 ) {
				if ( wb.selectors[ i ] === selector ) {
					exists = true;
					break;
				}
			}

			// Add the selector if it isn't already targeted
			if ( !exists ) {
				wb.selectors.push( selector );
			}
		},

		// Remove a selector targeted by timerpoke
		remove: function( selector ) {
			var len = this.selectors.length,
				i;

			for ( i = 0; i !== len; i += 1 ) {
				if ( this.selectors[ i ] === selector ) {
					this.selectors.splice( i, 1 );
					break;
				}
			}
		},

		// Handles triggering of timerpoke events
		timerpoke: function( initial ) {
			var selectorsLocal = wb.selectors.slice( 0 ),
				len = selectorsLocal.length,
				selector, $elms, $foundElms, i;

			if ( initial ) {
				$foundElms = $();
				for ( i = 0; i !== len; i += 1 ) {
					selector = selectorsLocal[ i ];
					$elms = $( selector );
					if ( $elms.length !== 0 ) {
						$foundElms = $foundElms.add( $elms );

					// If the selector returns no elements, remove the selector
					} else {
						wb.remove( selector );
					}
				}

				// Keep only the non-nested plugin/polyfill elements
				$elms = $foundElms.filter( ":not(.wb-init .wb-init)" ).addClass( "wb-init" );
			} else {
				$elms = $( selectorsLocal.join( ", " ) );
			}
			$elms.trigger( "timerpoke.wb" );
		},

		start: function() {

			// Save a copy of all the possible selectors
			wb.allSelectors = wb.selectors.join( ", " );

			// Initiate timerpoke events right way
			wb.timerpoke( true );
			this.isStarted = true;
			this.ready();

			// Initiate timerpoke events again every half second
			setInterval( wb.timerpoke, 500 );
		},

		i18nDict: {},
		i18n: function( key, state, mixin ) {
			var dictionary = wb.i18nDict,

				// eg. 000 or 001 ie. 0 or 1
				truthiness = ( typeof key === "string" && key !== "" ) |

					// eg. 000 or 010 ie. 0 or 2
					( typeof state === "string" && state !== "" ) << 1 |

					// eg. 000 or 100 ie. 0 or 4
					( typeof mixin === "string" && mixin !== "" ) << 2;

			switch ( truthiness ) {
			case 1:

				// only key was provided
				return dictionary[ key ];

			case 3:

				// key and state were provided
				return dictionary[ key ][ state ];

			case 7:

				// key, state, and mixin were provided
				return dictionary[ key ][ state ].replace( "[MIXIN]", mixin );
			default:
				return "";
			}
		},

		hashString: function( str ) {

			// Sources:
			//	https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
			//	https://jsperf.com/hashing-strings
			var hash = 0,
				chr, i;

			if ( str.length === 0 ) {
				return hash;
			}

			for ( i = 0; i < str.length; i++ ) {
				chr = str.charCodeAt( i );
				hash = ( ( hash << 5 ) - hash ) + chr;

				// Convert to 32bit integer
				hash = hash & hash;
			}

			return hash;
		},

		stripWhitespace: function( str ) {
			return str.replace( /\s+/g, "" );
		},

		// Core function to deal with the dependency racing issue
		whenLibReady: function( testCallback, readyCallback ) {
			if ( testCallback() ) {
				readyCallback();
			} else {
				setTimeout( function() {
					wb.whenLibReady( testCallback, readyCallback );
				}, 50 );
			}

		}
	};

window.wb = wb;

/*-----------------------------
 * Yepnope Prefixes
 *-----------------------------*/
/*
 * Establish the base path to be more flexible in terms of WCMS where JS can
 * reside in theme folders and not in the root of sites
 * @TODO: For modularity the prefixes where written independently as we are
 * flushing out some use cases on better grouping and optimization of polyfills.
 * Once this more hashed out, we could optimize the prefixes down to one or two
 * prefixes "site" and "disabled" to thin out the codeblock a bit more
 * increase performance due to redundant chaining of the prefixes.
 */

/**
 * @prefix: site! - adds the root js directory of yepnope resources
 */
yepnope.addPrefix( "site", function( resourceObj ) {
	resourceObj.url = paths.js + "/" + resourceObj.url;
	return resourceObj;
} );

/**
 * @prefix: plyfll! - builds the path for the polyfill resource
 */
yepnope.addPrefix( "plyfll", function( resourceObj ) {
	var path,
		url = resourceObj.url;

	if ( disabled && url.indexOf( "svg" ) === -1 ) {
		resourceObj.bypass = true;
	} else if ( !paths.mode ) {
		url = url.replace( ".min", "" );
	}

	if ( url.indexOf( ".css" ) !== -1 ) {
		resourceObj.forceCSS = true;
		path = paths.css;
	} else {
		path = paths.js;
	}
	resourceObj.url = path + "/polyfills/" + url;

	return resourceObj;
} );

/**
 * @prefix: i18n! - adds the correct document language for our i18n library
 */
yepnope.addPrefix( "i18n", function( resourceObj ) {
	resourceObj.url = paths.js + "/" + resourceObj.url + lang + paths.mode + ".js";
	return resourceObj;
} );

/**
 * @prefix: mthjx! - adds the root directory of MathJax resources
 */
yepnope.addPrefix( "mthjx", function( resourceObj ) {
	resourceObj.url = paths.js + "/MathJax/" + resourceObj.url;
	return resourceObj;
} );

/*-----------------------------
 * Deps loading, call "complete" callback when the deps is ready if a testReady is defined
 *-----------------------------*/
wb.modernizrLoad = Modernizr.load;
Modernizr.load = function( options ) {
	var i, i_len, i_cache,
		testReady, complete;
	if ( !$.isArray( options ) ) {
		options = [ options ];
	}
	i_len = options.length;
	for ( i = 0; i !== i_len; i += 1 ) {
		i_cache = options[ i ];
		testReady = i_cache.testReady;
		complete = i_cache.complete;
		if ( testReady && complete ) {
			i_cache.complete = wb.whenLibReady( testReady, complete );
		}
	}
	wb.modernizrLoad( options );
};

/*-----------------------------
 * Modernizr Polyfill Loading
 *-----------------------------*/
Modernizr.load( [
	{
		test: Modernizr.details,
		nope: [
			"plyfll!details.min.js",
			"plyfll!details.min.css"
		]
	}, {
		test: Modernizr.input.list,
		nope: [
			"plyfll!datalist.min.js",
			"plyfll!datalist.min.css"
		]
	}, {
		test: Modernizr.inputtypes.date,
		nope: [
			"plyfll!datepicker.min.js",
			"plyfll!datepicker.min.css"
		]
	}, {
		test: Modernizr.inputtypes.range,
		nope: [
			"plyfll!slider.min.js",
			"plyfll!slider_wrapper.min.js",
			"plyfll!slider.min.css"
		],
		callback: function( url ) {
			if ( url === "slider.min.js" ) {
				window.fdSlider.onDomReady();
			}
		}
	}, {
		test: Modernizr.progressbar,
		nope: [
			"plyfll!progress.min.js",
			"plyfll!progress.min.css"
		]
	}, {
		test: Modernizr.mathml,

		// Cleanup Modernizr test and add selector to global timer
		complete: function() {
			var	componentName = "wb-math",
				selector = "math",
				math = document.getElementsByTagName( selector ),
				$document = wb.doc;

			// Cleanup elements that Modernizr.mathml test leaves behind.
			if ( math.length ) {
				document.body.removeChild( math[ math.length - 1 ].parentNode );
			}

			// Defer loading the polyfill till an element is detected due to the size
			if ( !Modernizr.mathml ) {
				let isTrident = new Boolean( window.navigator.msSaveOrOpenBlob );

				// Bind the init event of the plugin
				$document.one( "timerpoke.wb wb-init." + componentName, selector, function() {

					// Start initialization
					wb.init( document, componentName, selector );

					// Disable MathJax's context menu to more closely mimic native MathML implementations
					window.MathJax = {
						options: {
							enableMenu: false
						}
					};

					// Extra tasks for IE11
					if ( isTrident ) {

						// Load an ES6 polyfill
						Modernizr.load( "timeout=500!https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=es6" );

						// Specify the CDN's font URL
						// Note: IE11 is unable to resolve this on its own
						window.MathJax.chtml = {
							fontURL: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2"
						};
					}

					// Load the MathML dependency. Since the polyfill is only loaded
					// when !Modernizr.mathml, we can skip the test here.
					Modernizr.load( [ {

						// Load latest version of MathJax 3 from a CDN
						// Also load a CSS workaround for a MathJax 3.2.0 bug (refer to CSS file for details)
						load: [
							"timeout=500!https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js",
							"plyfll!mathml.min.css"
						],
						complete: function() {

							// Wait a moment to reduce the risk of a race condition
							setTimeout( function() {

								// Specify a font URL for a local copy of MathJax 3 for IE11
								// Note: Useful if IE11 has internet access but fails to reach the CDN
								if ( isTrident && !window.MathJax.startup ) {
									window.MathJax.chtml.fontURL = paths.js + "/MathJax/output/chtml/fonts/woff-v2";
								}

								// Fall back on a local copy of MathJax 3 if the CDN is unreachable
								// Note: Won't work with IE11 in isolated networks (ES6 polyfill has no local fallback)
								Modernizr.load( [ {
									test: window.MathJax.startup,
									nope: "mthjx!mml-chtml.js",
									complete: function() {

										// Try loading a local copy of MathJax 2 as a last dith effort
										Modernizr.load( [ {
											test: window.MathJax.startup,
											nope: "mthjx!MathJax.js?config=Accessible",
											complete: function() {

												// Identify that initialization has completed
												wb.ready( $document, componentName );
											}
										} ] );
									}
								} ] );
							}, 100 );
						}
					} ] );
				} );

				wb.add( selector );
			}
		}
	}, {
		test: Modernizr.meter,
		nope: [
			"plyfll!meter.min.js",
			"plyfll!meter.min.css"
		]
	}, {
		test: Modernizr.touch,
		yep: "plyfll!mobile.min.js"
	}, {
		test: Modernizr.svg,
		nope: "plyfll!svg.min.js"
	}, {
		load: "i18n!i18n/",
		testReady: function() {
			return wb.i18nDict.tphp;
		},
		complete: function() {
			wb.start();
		}
	}
] );

} )( jQuery, window, document );

/**
 * @title WET-BOEW JQuery Helper Methods
 * @overview Helper methods for WET
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET Community
 * Credits: https://web.archive.org/web/20130826230640/http://kaibun.net/blog/2013/04/19/a-fully-fledged-coffeescript-boilerplate-for-jquery-plugins/
 */
( function( $, wb ) {

wb.getData = function( element, dataName ) {
	var elm = !element.jquery ? element : element[ 0 ],
		dataAttr = elm.getAttribute( "data-" + dataName ),
		dataObj;

	if ( dataAttr ) {
		try {
			dataObj = JSON.parse( dataAttr );
			$.data( elm, dataName, dataObj );
		} catch ( error ) {
			console.info( elm );
			$.error( "Bad JSON array in data-" + dataName + " attribute" );
		}
	}

	return dataObj;
};

/*
 * Initiate an in-browser download from a blob
 * @param blob: a reference to a blob object
 * @param filename: a suggested file name to save as under
 * @param title: (Optional) a title added to the link. Its use case is for web analytics tracking.
*/
wb.download = function( blob, filename, title ) {

	var objectURL = URL.createObjectURL( blob ),
		anchor = document.createElement( "a" );

	filename = filename || "unnamed"; // Ensure a filename is defined

	anchor.textContent = title || "";
	anchor.download = filename;

	anchor.hidden = true;
	document.body.appendChild( anchor ); // Added to the body for the web analytic tracking use case.

	if ( window.navigator.msSaveOrOpenBlob ) {

		// This is for IE11 support
		anchor.addEventListener( "click", function( ) {
			window.navigator.msSaveOrOpenBlob( blob, filename );
		} );
		anchor.setAttribute( "target", "_blank" );
	} else {
		anchor.href = objectURL;
	}

	anchor.click();

	// Clean the DOM, remove the accessory anchor at the next tick
	setTimeout( function() {
		document.body.removeChild( anchor );
	}, 1 );

	// Revoke the ojbect, A setTimeout is used because Blob API don't have a download complete event.
	setTimeout( function() {
		if ( typeof objectURL === "string" ) {
			URL.revokeObjectURL( objectURL );
		} else {
			objectURL.remove();
		}
	}, 40000 ); // The revoking time is arbitrary

};

/* ---------------------------------
@extension: shuffleDOM
@returns: [list] shuffles a list of items randomly
-------------------------------- */
wb.shuffleDOM = function( $elm ) {
	var allElems = $elm.get(),
		shuffled = $.map( allElems, function() {
			var random = Math.floor( Math.random() * allElems.length ),
				randEl = $( allElems[ random ] ).clone( true )[ 0 ];
			allElems.splice( random, 1 );
			return randEl;
		} ),
		elm_len = $elm.length,
		i;

	for ( i = 0; i < elm_len; i++ ) {
		$( $elm[ i ] ).replaceWith( $( shuffled[ i ] ) );
	}

	return $( shuffled );
};

/* ---------------------------------
@extension: pickElements
@returns: [collection] of randoms elements
-------------------------------- */
wb.pickElements = function( $elm, numOfElm ) {
	var nbElm = $elm.size(),
		elmCopies,
		i, swap;

	numOfElm = numOfElm || 1;

	// Special cases
	if ( numOfElm > nbElm ) {
		return $elm.pushStack( $elm );
	} else if ( numOfElm === 1 ) {
		return $elm.filter( ":eq(" + Math.floor( Math.random() * nbElm ) + ")" );
	}

	// Create a randomized copy of the set of elements,
	// using Fisher-Yates sorting
	elmCopies = $elm.get();

	for ( i = 0; i < nbElm - 1; i++ ) {
		swap = Math.floor( Math.random() * ( nbElm - i ) ) + i;
		elmCopies[ swap ] = elmCopies.splice( i, 1, elmCopies[ swap ] )[ 0 ];
	}
	elmCopies = elmCopies.slice( 0, numOfElm );

	// Finally, filter jQuery stack
	return $elm.filter( function( idx ) {
		return $.inArray( $elm.get( idx ), elmCopies ) > -1;
	} );
};

/* ---------------------------------
Adds a link to the Skip links navigation
@param text: Text to display in the anchor or button
@param attr: JSO with { attribute: value, ... } to add attributes to the anchor or button. Minimum is { href: "#your-anchor" } for the anchor tag
@param isBtn: (Optional) Bool if true element is a button, otherwise it is an anchor by default
@param isLast: (Optional) Bool if true element will be inserted last in the list
-------------------------------- */
wb.addSkipLink = function( text, attr, isBtn, isLast ) {
	var list = document.getElementById( "wb-tphp" ),
		li = document.createElement( "li" ),
		elm = document.createElement( ( isBtn ? "button" : "a" ) ),
		key;

	// Add skip link's proprietary classes to new element
	li.className = "wb-slc";
	elm.className = "wb-sl";

	// Add given attributes to element
	for ( key in attr ) {
		elm.setAttribute( key, attr[ key ] );
	}

	// Append text and new element to the skip link list (after main content)
	elm.appendChild( document.createTextNode( text ) );
	li.appendChild( elm );

	if ( isLast ) {
		list.appendChild( li );
	} else {
		list.insertBefore( li, list.childNodes[ 2 ] );
	}

	return true;
};

} )( jQuery, wb );

( function( wb, window ) {

"use strict";

// Escapes the characters in a string for use in a jQuery selector
// Based on https://totaldev.com/content/escaping-characters-get-valid-jquery-id
wb.jqEscape = function( selector ) {
	// eslint-disable-next-line no-useless-escape
	return selector.replace( /([;&,\.\+\*\~':"\\\!\^\/#$%@\[\]\(\)=>\|])/g, "\\$1" );
};

// RegEx used by formattedNumCompare
wb.formattedNumCompareRegEx = /(<[^>]*>|[^\d.])/g;

// Compares two formatted numbers (e.g., 1.2.12 or 1,000,345)
wb.formattedNumCompare = function( a, b ) {
	var regEx = wb.formattedNumCompareRegEx,
		aMultiple = a.indexOf( "-" ) === -1 ? 1 : -1,
		aNumbers = ( ( a === "-" || a === "" ) ? "0" : a.replace( regEx, "" ) ).split( "." ),
		bMultiple = b.indexOf( "-" ) === -1 ? 1 : -1,
		bNumbers = ( ( b === "-" || b === "" ) ? "0" : b.replace( regEx, "" ) ).split( "." ),
		len = aNumbers.length,
		i, result;

	for ( i = 0; i !== len; i += 1 ) {
		result = parseInt( aNumbers[ i ], 10 ) * aMultiple - parseInt( bNumbers[ i ], 10 ) * bMultiple;
		if ( result !== 0 ) {
			break;
		}
	}
	return result;
};

// Compare two strings with special characters (e.g., Cyrillic or Chinese characters)
wb.i18nTextCompare = function( a, b ) {
	return wb.normalizeDiacritics( a ).localeCompare( wb.normalizeDiacritics( b ) );
};

// Based upon https://gist.github.com/instanceofme/1731620
// Licensed under WTFPL v2 http://sam.zoy.org/wtfpl/COPYING
wb.normalizeDiacritics = function( str ) {
	var diacritics = {
			"\u24B6": "A",
			"\uFF21": "A",
			"\u00C0": "A",
			"\u00C1": "A",
			"\u00C2": "A",
			"\u1EA6": "A",
			"\u1EA4": "A",
			"\u1EAA": "A",
			"\u1EA8": "A",
			"\u00C3": "A",
			"\u0100": "A",
			"\u0102": "A",
			"\u1EB0": "A",
			"\u1EAE": "A",
			"\u1EB4": "A",
			"\u1EB2": "A",
			"\u0226": "A",
			"\u01E0": "A",
			"\u00C4": "A",
			"\u01DE": "A",
			"\u1EA2": "A",
			"\u00C5": "A",
			"\u01FA": "A",
			"\u01CD": "A",
			"\u0200": "A",
			"\u0202": "A",
			"\u1EA0": "A",
			"\u1EAC": "A",
			"\u1EB6": "A",
			"\u1E00": "A",
			"\u0104": "A",
			"\u023A": "A",
			"\u2C6F": "A",
			"\uA732": "AA",
			"\u00C6": "AE",
			"\u01FC": "AE",
			"\u01E2": "AE",
			"\uA734": "AO",
			"\uA736": "AU",
			"\uA738": "AV",
			"\uA73A": "AV",
			"\uA73C": "AY",
			"\u24B7": "B",
			"\uFF22": "B",
			"\u1E02": "B",
			"\u1E04": "B",
			"\u1E06": "B",
			"\u0243": "B",
			"\u0182": "B",
			"\u0181": "B",
			"\u24B8": "C",
			"\uFF23": "C",
			"\u0106": "C",
			"\u0108": "C",
			"\u010A": "C",
			"\u010C": "C",
			"\u00C7": "C",
			"\u1E08": "C",
			"\u0187": "C",
			"\u023B": "C",
			"\uA73E": "C",
			"\u24B9": "D",
			"\uFF24": "D",
			"\u1E0A": "D",
			"\u010E": "D",
			"\u1E0C": "D",
			"\u1E10": "D",
			"\u1E12": "D",
			"\u1E0E": "D",
			"\u0110": "D",
			"\u018B": "D",
			"\u018A": "D",
			"\u0189": "D",
			"\uA779": "D",
			"\u01F1": "DZ",
			"\u01C4": "DZ",
			"\u01F2": "Dz",
			"\u01C5": "Dz",
			"\u24BA": "E",
			"\uFF25": "E",
			"\u00C8": "E",
			"\u00C9": "E",
			"\u00CA": "E",
			"\u1EC0": "E",
			"\u1EBE": "E",
			"\u1EC4": "E",
			"\u1EC2": "E",
			"\u1EBC": "E",
			"\u0112": "E",
			"\u1E14": "E",
			"\u1E16": "E",
			"\u0114": "E",
			"\u0116": "E",
			"\u00CB": "E",
			"\u1EBA": "E",
			"\u011A": "E",
			"\u0204": "E",
			"\u0206": "E",
			"\u1EB8": "E",
			"\u1EC6": "E",
			"\u0228": "E",
			"\u1E1C": "E",
			"\u0118": "E",
			"\u1E18": "E",
			"\u1E1A": "E",
			"\u0190": "E",
			"\u018E": "E",
			"\u24BB": "F",
			"\uFF26": "F",
			"\u1E1E": "F",
			"\u0191": "F",
			"\uA77B": "F",
			"\u24BC": "G",
			"\uFF27": "G",
			"\u01F4": "G",
			"\u011C": "G",
			"\u1E20": "G",
			"\u011E": "G",
			"\u0120": "G",
			"\u01E6": "G",
			"\u0122": "G",
			"\u01E4": "G",
			"\u0193": "G",
			"\uA7A0": "G",
			"\uA77D": "G",
			"\uA77E": "G",
			"\u24BD": "H",
			"\uFF28": "H",
			"\u0124": "H",
			"\u1E22": "H",
			"\u1E26": "H",
			"\u021E": "H",
			"\u1E24": "H",
			"\u1E28": "H",
			"\u1E2A": "H",
			"\u0126": "H",
			"\u2C67": "H",
			"\u2C75": "H",
			"\uA78D": "H",
			"\u24BE": "I",
			"\uFF29": "I",
			"\u00CC": "I",
			"\u00CD": "I",
			"\u00CE": "I",
			"\u0128": "I",
			"\u012A": "I",
			"\u012C": "I",
			"\u0130": "I",
			"\u00CF": "I",
			"\u1E2E": "I",
			"\u1EC8": "I",
			"\u01CF": "I",
			"\u0208": "I",
			"\u020A": "I",
			"\u1ECA": "I",
			"\u012E": "I",
			"\u1E2C": "I",
			"\u0197": "I",
			"\u24BF": "J",
			"\uFF2A": "J",
			"\u0134": "J",
			"\u0248": "J",
			"\u24C0": "K",
			"\uFF2B": "K",
			"\u1E30": "K",
			"\u01E8": "K",
			"\u1E32": "K",
			"\u0136": "K",
			"\u1E34": "K",
			"\u0198": "K",
			"\u2C69": "K",
			"\uA740": "K",
			"\uA742": "K",
			"\uA744": "K",
			"\uA7A2": "K",
			"\u24C1": "L",
			"\uFF2C": "L",
			"\u013F": "L",
			"\u0139": "L",
			"\u013D": "L",
			"\u1E36": "L",
			"\u1E38": "L",
			"\u013B": "L",
			"\u1E3C": "L",
			"\u1E3A": "L",
			"\u0141": "L",
			"\u023D": "L",
			"\u2C62": "L",
			"\u2C60": "L",
			"\uA748": "L",
			"\uA746": "L",
			"\uA780": "L",
			"\u01C7": "LJ",
			"\u01C8": "Lj",
			"\u24C2": "M",
			"\uFF2D": "M",
			"\u1E3E": "M",
			"\u1E40": "M",
			"\u1E42": "M",
			"\u2C6E": "M",
			"\u019C": "M",
			"\u24C3": "N",
			"\uFF2E": "N",
			"\u01F8": "N",
			"\u0143": "N",
			"\u00D1": "N",
			"\u1E44": "N",
			"\u0147": "N",
			"\u1E46": "N",
			"\u0145": "N",
			"\u1E4A": "N",
			"\u1E48": "N",
			"\u0220": "N",
			"\u019D": "N",
			"\uA790": "N",
			"\uA7A4": "N",
			"\u01CA": "NJ",
			"\u01CB": "Nj",
			"\u24C4": "O",
			"\uFF2F": "O",
			"\u00D2": "O",
			"\u00D3": "O",
			"\u00D4": "O",
			"\u1ED2": "O",
			"\u1ED0": "O",
			"\u1ED6": "O",
			"\u1ED4": "O",
			"\u00D5": "O",
			"\u1E4C": "O",
			"\u022C": "O",
			"\u1E4E": "O",
			"\u014C": "O",
			"\u1E50": "O",
			"\u1E52": "O",
			"\u014E": "O",
			"\u022E": "O",
			"\u0230": "O",
			"\u00D6": "O",
			"\u022A": "O",
			"\u1ECE": "O",
			"\u0150": "O",
			"\u01D1": "O",
			"\u020C": "O",
			"\u020E": "O",
			"\u01A0": "O",
			"\u1EDC": "O",
			"\u1EDA": "O",
			"\u1EE0": "O",
			"\u1EDE": "O",
			"\u1EE2": "O",
			"\u1ECC": "O",
			"\u1ED8": "O",
			"\u01EA": "O",
			"\u01EC": "O",
			"\u00D8": "O",
			"\u01FE": "O",
			"\u0186": "O",
			"\u019F": "O",
			"\uA74A": "O",
			"\uA74C": "O",
			"\u0152": "OE",
			"\u01A2": "OI",
			"\uA74E": "OO",
			"\u0222": "OU",
			"\u24C5": "P",
			"\uFF30": "P",
			"\u1E54": "P",
			"\u1E56": "P",
			"\u01A4": "P",
			"\u2C63": "P",
			"\uA750": "P",
			"\uA752": "P",
			"\uA754": "P",
			"\u24C6": "Q",
			"\uFF31": "Q",
			"\uA756": "Q",
			"\uA758": "Q",
			"\u024A": "Q",
			"\u24C7": "R",
			"\uFF32": "R",
			"\u0154": "R",
			"\u1E58": "R",
			"\u0158": "R",
			"\u0210": "R",
			"\u0212": "R",
			"\u1E5A": "R",
			"\u1E5C": "R",
			"\u0156": "R",
			"\u1E5E": "R",
			"\u024C": "R",
			"\u2C64": "R",
			"\uA75A": "R",
			"\uA7A6": "R",
			"\uA782": "R",
			"\u24C8": "S",
			"\uFF33": "S",
			"\u015A": "S",
			"\u1E64": "S",
			"\u015C": "S",
			"\u1E60": "S",
			"\u0160": "S",
			"\u1E66": "S",
			"\u1E62": "S",
			"\u1E68": "S",
			"\u0218": "S",
			"\u015E": "S",
			"\u2C7E": "S",
			"\uA7A8": "S",
			"\uA784": "S",
			"\u1E9E": "SS",
			"\u24C9": "T",
			"\uFF34": "T",
			"\u1E6A": "T",
			"\u0164": "T",
			"\u1E6C": "T",
			"\u021A": "T",
			"\u0162": "T",
			"\u1E70": "T",
			"\u1E6E": "T",
			"\u0166": "T",
			"\u01AC": "T",
			"\u01AE": "T",
			"\u023E": "T",
			"\uA786": "T",
			"\uA728": "TZ",
			"\u24CA": "U",
			"\uFF35": "U",
			"\u00D9": "U",
			"\u00DA": "U",
			"\u00DB": "U",
			"\u0168": "U",
			"\u1E78": "U",
			"\u016A": "U",
			"\u1E7A": "U",
			"\u016C": "U",
			"\u00DC": "U",
			"\u01DB": "U",
			"\u01D7": "U",
			"\u01D5": "U",
			"\u01D9": "U",
			"\u1EE6": "U",
			"\u016E": "U",
			"\u0170": "U",
			"\u01D3": "U",
			"\u0214": "U",
			"\u0216": "U",
			"\u01AF": "U",
			"\u1EEA": "U",
			"\u1EE8": "U",
			"\u1EEE": "U",
			"\u1EEC": "U",
			"\u1EF0": "U",
			"\u1EE4": "U",
			"\u1E72": "U",
			"\u0172": "U",
			"\u1E76": "U",
			"\u1E74": "U",
			"\u0244": "U",
			"\u24CB": "V",
			"\uFF36": "V",
			"\u1E7C": "V",
			"\u1E7E": "V",
			"\u01B2": "V",
			"\uA75E": "V",
			"\u0245": "V",
			"\uA760": "VY",
			"\u24CC": "W",
			"\uFF37": "W",
			"\u1E80": "W",
			"\u1E82": "W",
			"\u0174": "W",
			"\u1E86": "W",
			"\u1E84": "W",
			"\u1E88": "W",
			"\u2C72": "W",
			"\u24CD": "X",
			"\uFF38": "X",
			"\u1E8A": "X",
			"\u1E8C": "X",
			"\u24CE": "Y",
			"\uFF39": "Y",
			"\u1EF2": "Y",
			"\u00DD": "Y",
			"\u0176": "Y",
			"\u1EF8": "Y",
			"\u0232": "Y",
			"\u1E8E": "Y",
			"\u0178": "Y",
			"\u1EF6": "Y",
			"\u1EF4": "Y",
			"\u01B3": "Y",
			"\u024E": "Y",
			"\u1EFE": "Y",
			"\u24CF": "Z",
			"\uFF3A": "Z",
			"\u0179": "Z",
			"\u1E90": "Z",
			"\u017B": "Z",
			"\u017D": "Z",
			"\u1E92": "Z",
			"\u1E94": "Z",
			"\u01B5": "Z",
			"\u0224": "Z",
			"\u2C7F": "Z",
			"\u2C6B": "Z",
			"\uA762": "Z",
			"\u24D0": "a",
			"\uFF41": "a",
			"\u1E9A": "a",
			"\u00E0": "a",
			"\u00E1": "a",
			"\u00E2": "a",
			"\u1EA7": "a",
			"\u1EA5": "a",
			"\u1EAB": "a",
			"\u1EA9": "a",
			"\u00E3": "a",
			"\u0101": "a",
			"\u0103": "a",
			"\u1EB1": "a",
			"\u1EAF": "a",
			"\u1EB5": "a",
			"\u1EB3": "a",
			"\u0227": "a",
			"\u01E1": "a",
			"\u00E4": "a",
			"\u01DF": "a",
			"\u1EA3": "a",
			"\u00E5": "a",
			"\u01FB": "a",
			"\u01CE": "a",
			"\u0201": "a",
			"\u0203": "a",
			"\u1EA1": "a",
			"\u1EAD": "a",
			"\u1EB7": "a",
			"\u1E01": "a",
			"\u0105": "a",
			"\u2C65": "a",
			"\u0250": "a",
			"\uA733": "aa",
			"\u00E6": "ae",
			"\u01FD": "ae",
			"\u01E3": "ae",
			"\uA735": "ao",
			"\uA737": "au",
			"\uA739": "av",
			"\uA73B": "av",
			"\uA73D": "ay",
			"\u24D1": "b",
			"\uFF42": "b",
			"\u1E03": "b",
			"\u1E05": "b",
			"\u1E07": "b",
			"\u0180": "b",
			"\u0183": "b",
			"\u0253": "b",
			"\u24D2": "c",
			"\uFF43": "c",
			"\u0107": "c",
			"\u0109": "c",
			"\u010B": "c",
			"\u010D": "c",
			"\u00E7": "c",
			"\u1E09": "c",
			"\u0188": "c",
			"\u023C": "c",
			"\uA73F": "c",
			"\u2184": "c",
			"\u24D3": "d",
			"\uFF44": "d",
			"\u1E0B": "d",
			"\u010F": "d",
			"\u1E0D": "d",
			"\u1E11": "d",
			"\u1E13": "d",
			"\u1E0F": "d",
			"\u0111": "d",
			"\u018C": "d",
			"\u0256": "d",
			"\u0257": "d",
			"\uA77A": "d",
			"\u01F3": "dz",
			"\u01C6": "dz",
			"\u24D4": "e",
			"\uFF45": "e",
			"\u00E8": "e",
			"\u00E9": "e",
			"\u00EA": "e",
			"\u1EC1": "e",
			"\u1EBF": "e",
			"\u1EC5": "e",
			"\u1EC3": "e",
			"\u1EBD": "e",
			"\u0113": "e",
			"\u1E15": "e",
			"\u1E17": "e",
			"\u0115": "e",
			"\u0117": "e",
			"\u00EB": "e",
			"\u1EBB": "e",
			"\u011B": "e",
			"\u0205": "e",
			"\u0207": "e",
			"\u1EB9": "e",
			"\u1EC7": "e",
			"\u0229": "e",
			"\u1E1D": "e",
			"\u0119": "e",
			"\u1E19": "e",
			"\u1E1B": "e",
			"\u0247": "e",
			"\u025B": "e",
			"\u01DD": "e",
			"\u24D5": "f",
			"\uFF46": "f",
			"\u1E1F": "f",
			"\u0192": "f",
			"\uA77C": "f",
			"\u24D6": "g",
			"\uFF47": "g",
			"\u01F5": "g",
			"\u011D": "g",
			"\u1E21": "g",
			"\u011F": "g",
			"\u0121": "g",
			"\u01E7": "g",
			"\u0123": "g",
			"\u01E5": "g",
			"\u0260": "g",
			"\uA7A1": "g",
			"\u1D79": "g",
			"\uA77F": "g",
			"\u24D7": "h",
			"\uFF48": "h",
			"\u0125": "h",
			"\u1E23": "h",
			"\u1E27": "h",
			"\u021F": "h",
			"\u1E25": "h",
			"\u1E29": "h",
			"\u1E2B": "h",
			"\u1E96": "h",
			"\u0127": "h",
			"\u2C68": "h",
			"\u2C76": "h",
			"\u0265": "h",
			"\u0195": "hv",
			"\u24D8": "i",
			"\uFF49": "i",
			"\u00EC": "i",
			"\u00ED": "i",
			"\u00EE": "i",
			"\u0129": "i",
			"\u012B": "i",
			"\u012D": "i",
			"\u00EF": "i",
			"\u1E2F": "i",
			"\u1EC9": "i",
			"\u01D0": "i",
			"\u0209": "i",
			"\u020B": "i",
			"\u1ECB": "i",
			"\u012F": "i",
			"\u1E2D": "i",
			"\u0268": "i",
			"\u0131": "i",
			"\u24D9": "j",
			"\uFF4A": "j",
			"\u0135": "j",
			"\u01F0": "j",
			"\u0249": "j",
			"\u24DA": "k",
			"\uFF4B": "k",
			"\u1E31": "k",
			"\u01E9": "k",
			"\u1E33": "k",
			"\u0137": "k",
			"\u1E35": "k",
			"\u0199": "k",
			"\u2C6A": "k",
			"\uA741": "k",
			"\uA743": "k",
			"\uA745": "k",
			"\uA7A3": "k",
			"\u24DB": "l",
			"\uFF4C": "l",
			"\u0140": "l",
			"\u013A": "l",
			"\u013E": "l",
			"\u1E37": "l",
			"\u1E39": "l",
			"\u013C": "l",
			"\u1E3D": "l",
			"\u1E3B": "l",
			"\u0142": "l",
			"\u019A": "l",
			"\u026B": "l",
			"\u2C61": "l",
			"\uA749": "l",
			"\uA781": "l",
			"\uA747": "l",
			"\u01C9": "lj",
			"\u24DC": "m",
			"\uFF4D": "m",
			"\u1E3F": "m",
			"\u1E41": "m",
			"\u1E43": "m",
			"\u0271": "m",
			"\u026F": "m",
			"\u24DD": "n",
			"\uFF4E": "n",
			"\u01F9": "n",
			"\u0144": "n",
			"\u00F1": "n",
			"\u1E45": "n",
			"\u0148": "n",
			"\u1E47": "n",
			"\u0146": "n",
			"\u1E4B": "n",
			"\u1E49": "n",
			"\u019E": "n",
			"\u0272": "n",
			"\u0149": "n",
			"\uA791": "n",
			"\uA7A5": "n",
			"\u01CC": "nj",
			"\u24DE": "o",
			"\uFF4F": "o",
			"\u00F2": "o",
			"\u00F3": "o",
			"\u00F4": "o",
			"\u1ED3": "o",
			"\u1ED1": "o",
			"\u1ED7": "o",
			"\u1ED5": "o",
			"\u00F5": "o",
			"\u1E4D": "o",
			"\u022D": "o",
			"\u1E4F": "o",
			"\u014D": "o",
			"\u1E51": "o",
			"\u1E53": "o",
			"\u014F": "o",
			"\u022F": "o",
			"\u0231": "o",
			"\u00F6": "o",
			"\u022B": "o",
			"\u1ECF": "o",
			"\u0151": "o",
			"\u01D2": "o",
			"\u020D": "o",
			"\u020F": "o",
			"\u01A1": "o",
			"\u1EDD": "o",
			"\u1EDB": "o",
			"\u1EE1": "o",
			"\u1EDF": "o",
			"\u1EE3": "o",
			"\u1ECD": "o",
			"\u1ED9": "o",
			"\u01EB": "o",
			"\u01ED": "o",
			"\u00F8": "o",
			"\u01FF": "o",
			"\u0254": "o",
			"\uA74B": "o",
			"\uA74D": "o",
			"\u0275": "o",
			"\u0153": "oe",
			"\u0276": "oe",
			"\u01A3": "oi",
			"\u0223": "ou",
			"\uA74F": "oo",
			"\u24DF": "p",
			"\uFF50": "p",
			"\u1E55": "p",
			"\u1E57": "p",
			"\u01A5": "p",
			"\u1D7D": "p",
			"\uA751": "p",
			"\uA753": "p",
			"\uA755": "p",
			"\u24E0": "q",
			"\uFF51": "q",
			"\u024B": "q",
			"\uA757": "q",
			"\uA759": "q",
			"\u24E1": "r",
			"\uFF52": "r",
			"\u0155": "r",
			"\u1E59": "r",
			"\u0159": "r",
			"\u0211": "r",
			"\u0213": "r",
			"\u1E5B": "r",
			"\u1E5D": "r",
			"\u0157": "r",
			"\u1E5F": "r",
			"\u024D": "r",
			"\u027D": "r",
			"\uA75B": "r",
			"\uA7A7": "r",
			"\uA783": "r",
			"\u24E2": "s",
			"\uFF53": "s",
			"\u015B": "s",
			"\u1E65": "s",
			"\u015D": "s",
			"\u1E61": "s",
			"\u0161": "s",
			"\u1E67": "s",
			"\u1E63": "s",
			"\u1E69": "s",
			"\u0219": "s",
			"\u015F": "s",
			"\u023F": "s",
			"\uA7A9": "s",
			"\uA785": "s",
			"\u017F": "s",
			"\u1E9B": "s",
			"\u00DF": "ss",
			"\u24E3": "t",
			"\uFF54": "t",
			"\u1E6B": "t",
			"\u1E97": "t",
			"\u0165": "t",
			"\u1E6D": "t",
			"\u021B": "t",
			"\u0163": "t",
			"\u1E71": "t",
			"\u1E6F": "t",
			"\u0167": "t",
			"\u01AD": "t",
			"\u0288": "t",
			"\u2C66": "t",
			"\uA787": "t",
			"\uA729": "tz",
			"\u24E4": "u",
			"\uFF55": "u",
			"\u00F9": "u",
			"\u00FA": "u",
			"\u00FB": "u",
			"\u0169": "u",
			"\u1E79": "u",
			"\u016B": "u",
			"\u1E7B": "u",
			"\u016D": "u",
			"\u00FC": "u",
			"\u01DC": "u",
			"\u01D8": "u",
			"\u01D6": "u",
			"\u01DA": "u",
			"\u1EE7": "u",
			"\u016F": "u",
			"\u0171": "u",
			"\u01D4": "u",
			"\u0215": "u",
			"\u0217": "u",
			"\u01B0": "u",
			"\u1EEB": "u",
			"\u1EE9": "u",
			"\u1EEF": "u",
			"\u1EED": "u",
			"\u1EF1": "u",
			"\u1EE5": "u",
			"\u1E73": "u",
			"\u0173": "u",
			"\u1E77": "u",
			"\u1E75": "u",
			"\u0289": "u",
			"\u24E5": "v",
			"\uFF56": "v",
			"\u1E7D": "v",
			"\u1E7F": "v",
			"\u028B": "v",
			"\uA75F": "v",
			"\u028C": "v",
			"\uA761": "vy",
			"\u24E6": "w",
			"\uFF57": "w",
			"\u1E81": "w",
			"\u1E83": "w",
			"\u0175": "w",
			"\u1E87": "w",
			"\u1E85": "w",
			"\u1E98": "w",
			"\u1E89": "w",
			"\u2C73": "w",
			"\u24E7": "x",
			"\uFF58": "x",
			"\u1E8B": "x",
			"\u1E8D": "x",
			"\u24E8": "y",
			"\uFF59": "y",
			"\u1EF3": "y",
			"\u00FD": "y",
			"\u0177": "y",
			"\u1EF9": "y",
			"\u0233": "y",
			"\u1E8F": "y",
			"\u00FF": "y",
			"\u1EF7": "y",
			"\u1E99": "y",
			"\u1EF5": "y",
			"\u01B4": "y",
			"\u024F": "y",
			"\u1EFF": "y",
			"\u24E9": "z",
			"\uFF5A": "z",
			"\u017A": "z",
			"\u1E91": "z",
			"\u017C": "z",
			"\u017E": "z",
			"\u1E93": "z",
			"\u1E95": "z",
			"\u01B6": "z",
			"\u0225": "z",
			"\u0240": "z",
			"\u2C6C": "z",
			"\uA763": "z",
			"\uFF10": "0",
			"\u2080": "0",
			"\u24EA": "0",
			"\u2070": "0",
			"\u00B9": "1",
			"\u2474": "1",
			"\u2081": "1",
			"\u2776": "1",
			"\u24F5": "1",
			"\u2488": "1",
			"\u2460": "1",
			"\uFF11": "1",
			"\u00B2": "2",
			"\u2777": "2",
			"\u2475": "2",
			"\uFF12": "2",
			"\u2082": "2",
			"\u24F6": "2",
			"\u2461": "2",
			"\u2489": "2",
			"\u00B3": "3",
			"\uFF13": "3",
			"\u248A": "3",
			"\u2476": "3",
			"\u2083": "3",
			"\u2778": "3",
			"\u24F7": "3",
			"\u2462": "3",
			"\u24F8": "4",
			"\u2463": "4",
			"\u248B": "4",
			"\uFF14": "4",
			"\u2074": "4",
			"\u2084": "4",
			"\u2779": "4",
			"\u2477": "4",
			"\u248C": "5",
			"\u2085": "5",
			"\u24F9": "5",
			"\u2478": "5",
			"\u277A": "5",
			"\u2464": "5",
			"\uFF15": "5",
			"\u2075": "5",
			"\u2479": "6",
			"\u2076": "6",
			"\uFF16": "6",
			"\u277B": "6",
			"\u2086": "6",
			"\u2465": "6",
			"\u24FA": "6",
			"\u248D": "6",
			"\uFF17": "7",
			"\u2077": "7",
			"\u277C": "7",
			"\u24FB": "7",
			"\u248E": "7",
			"\u2087": "7",
			"\u247A": "7",
			"\u2466": "7",
			"\u2467": "8",
			"\u248F": "8",
			"\u24FC": "8",
			"\u247B": "8",
			"\u2078": "8",
			"\uFF18": "8",
			"\u277D": "8",
			"\u2088": "8",
			"\u24FD": "9",
			"\uFF19": "9",
			"\u2490": "9",
			"\u277E": "9",
			"\u247C": "9",
			"\u2089": "9",
			"\u2468": "9",
			"\u2079": "9"
		},
		chars = str.split( "" ),
		len = chars.length,
		normalized = false,
		i, character;
	for ( i = 0; i !== len; i += 1 ) {
		character = chars[ i ];
		if ( Object.prototype.hasOwnProperty.call( diacritics, character ) ) {
			chars[ i ] = diacritics[ character ];
			normalized = true;
		}
	}
	return ( normalized ? chars.join( "" ) : str );
};

/**
 * @namespace wb.string
 */
wb.string = {

	/*
	 * Left-pads a number with zeros.
	 * @memberof wb.string
	 * @param {number} number The original number to pad.
	 * @param {number} length The width of the resulting padded number, not the number of zeros to add to the front of the string.
	 * @return {string} The padded string
	 */
	pad: function( number, length ) {
		var str = number + "",
			diff = length - str.length,
			i;
		for ( i = 0; i !== diff; i += 1 ) {
			str = "0" + str;
		}
		return str;
	},

	/*
	 * Convert a base64 string into an ArrayBuffer (Note: this function are not fully UTF-8 supported and may create interoperability issue)
	 * ref. https://www.isummation.com/blog/convert-arraybuffer-to-base64-string-and-vice-versa/
	 * @memberof wb.string
	 * @param {string} Base64 browser encoded
	 * @return {ArrayBuffer} string converted into ArrayBuffer
	 */
	base64ToArrayBuffer: function( base64 ) {
		var binary_string = window.atob( base64 ),
			len = binary_string.length,
			bytes = new Uint8Array( len ),
			i;
		for ( i = 0; i < len; i++ ) {
			bytes[ i ] = binary_string.charCodeAt( i );
		}
		return bytes.buffer;
	},

	/*
	 * Convert an ArrayBuffer into base64 string (Note: this function are not fully UTF-8 supported and may create interoperability issue)
	 * ref. https://www.isummation.com/blog/convert-arraybuffer-to-base64-string-and-vice-versa/
	 * @memberof wb.string
	 * @param {ArrayBuffer}
	 * @return {string} ArrayBuffer converted into base64 string
	 */
	arrayBufferToBase64: function( buffer ) {
		var binary = "",
			bytes = new Uint8Array( buffer ),
			len = bytes.byteLength,
			i;
		for ( i = 0; i < len; i++ ) {
			binary += String.fromCharCode( bytes[ i ] );
		}
		return window.btoa( binary );
	},

	/*
	 * Convert an hexadecimal string into an ArrayBuffer
	 * ref. https://stackoverflow.com/questions/38987784/how-to-convert-a-hexadecimal-string-to-uint8array-and-back-in-javascript/50868276#50868276
	 * @memberof wb.string
	 * @param {string} Encoded string in hexadecimal
	 * @return {Uint8Array} Binary array buffer
	 */
	fromHexString: function( hexString ) {
		return hexString === null ? null : Uint8Array.from( hexString.match( /.{1,2}/g ).map( function( byte ) {
			return parseInt( byte, 16 );
		} ) );
	},

	/*
	 * Convert an ArrayBuffer into an hexadecimal string
	 * ref. https://stackoverflow.com/questions/38987784/how-to-convert-a-hexadecimal-string-to-uint8array-and-back-in-javascript/50868276#50868276
	 * @memberof wb.string
	 * @param {Uint8Array} Binary array buffer
	 * @return {string} Encoded string in hexadecimal
	 */
	toHexString: function( bytes ) {
		return bytes.reduce( function( str, byte ) {
			return str + byte.toString( 16 ).padStart( 2, "0" );
		}, "" );
	}

};

/*
 * A suite of date related functions for easier parsing of dates
 * @namespace wb.date
 */
wb.date = {

	/*
	 * Converts the date to a date-object. The input can be:
	 * <ul>
	 * <li>a Date object: returned without modification.</li>
	 * <li>an array: Interpreted as [year,month,day]. NOTE: month is 0-11.</li>
	 * <li>a number: Interpreted as number of milliseconds since 1 Jan 1970 (a timestamp).</li>
	 * <li>a string: Any format supported by the javascript engine, like 'YYYY/MM/DD', 'MM/DD/YYYY', 'Jan 31 2009' etc.</li>
	 * <li>an object: Interpreted as an object with year, month and date attributes. **NOTE** month is 0-11.</li>
	 * </ul>
	 * @memberof wb.date
	 * @param {Date | number[] | number | string | object} dateValue
	 * @return {Date | NaN}
	 */
	convert: function( dateValue ) {
		var dateConstructor = dateValue.constructor;

		switch ( dateConstructor ) {
		case Date:
			return dateConstructor;
		case Array:
			return new Date( dateValue[ 0 ], dateValue[ 1 ], dateValue[ 2 ] );
		case Number:
		case String:
			return new Date( dateValue );
		default:
			return typeof dateValue === "object" ? new Date( dateValue.year, dateValue.month, dateValue.date ) : NaN;
		}
	},

	/*
	 * Compares two dates (input can be any type supported by the convert function).
	 * @memberof wb.date
	 * @param {Date | number[] | number | string | object} dateValue1
	 * @param {Date | number[] | number | string | object} dateValue2
	 * @return {number | NaN}
	 * @example returns
	 * -1 if dateValue1 < dateValue2
	 * 0 if dateValue1 = dateValue2
	 * 1 if dateValue1 > dateValue2
	 * NaN if dateValue1 or dateValue2 is an illegal date
	 */
	compare: function( dateValue1, dateValue2 ) {
		var convert = wb.date.convert;

		if ( isFinite( dateValue1 = convert( dateValue1 ).valueOf() ) && isFinite( dateValue2 = convert( dateValue2 ).valueOf() ) ) {
			return ( dateValue1 > dateValue2 ) - ( dateValue1 < dateValue2 );
		}
		return NaN;
	},

	/*
	 * Cross-browser safe way of translating a date to ISO format
	 * @memberof wb.date
	 * @param {Date | number[] | number | string | object} dateValue
	 * @param {boolean} withTime Optional. Whether to include the time in the result, or just the date. False if blank.
	 * @return {string}
	 * @example
	 * toDateISO( new Date() )
	 * returns "2012-04-27"
	 * toDateISO( new Date(), true )
	 * returns "2012-04-27 13:46"
	 */
	toDateISO: function( dateValue, withTime ) {
		var date = wb.date.convert( dateValue ),
			pad = wb.string.pad;

		return date.getFullYear() + "-" + pad( date.getMonth() + 1, 2, "0" ) + "-" + pad( date.getDate(), 2, "0" ) +
			( withTime ? " " + pad( date.getHours(), 2, "0" ) + ":" + pad( date.getMinutes(), 2, "0" ) : "" );
	},

	/*
	 * Cross-browser safe way of creating a date object from a date string in ISO format
	 * @memberof wb.date
	 * @param {string} dateISO Date string in ISO format
	 * @return {Date}
	 */
	fromDateISO: function( dateISO ) {
		var date = null;

		if ( dateISO && /\d{4}-\d{2}-\d{2}/.test( dateISO ) ) {
			date = new Date( dateISO.substr( 0, 4 ), dateISO.substr( 5, 2 ) - 1, dateISO.substr( 8, 2 ), 0, 0, 0, 0 );
		}
		return date;
	}
};

/*
 * Returns a RFC4122 compliant Global Unique ID (GUID).
 * Originally from https://stackoverflow.com/a/2117523/455535
 */
wb.guid = function() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace( /[xy]/g, function( replacementChar ) {
		var rand = Math.random() * 16 | 0,
			newChar = replacementChar === "x" ? rand : ( rand & 0x3 | 0x8 );
		return newChar.toString( 16 );
	} );
};

wb.escapeAttribute = function( str ) {
	return str.replace( /'/g, "&#39;" ).replace( /"/g, "&#34;" );
};

/*
 * Returns an escaped HTML string
 */
wb.escapeHTML = function( str ) {
	return wb.escapeAttribute( str
		.replace( /&/g, "&#38;" )
		.replace( /</g, "&#60;" )
		.replace( />/g, "&#62;" ) );
};

/*
 * Returns a UTF-8 output from Base64
 * Reference: https://developer.mozilla.org/fr/docs/Glossary/Base64 (To be reviewed later because escape function is deprecated)
 */
wb.decodeUTF8Base64 = function( str ) {
	return decodeURIComponent( escape( atob( str ) ) );
};

/*
* Find most common Personal Identifiable Information (PII) in a string and return either the cleaned string either true/false
* @param {string} str (required) - the content that needs to be verified
*
* @param {boolean} scope - if true will scrub the content
* @param {object} (optional) the 2nd param (scope) can also be an object having the following properties (optional):
* 	{string} any key name of the default patterns e.g. email, digits, etc. with the value 1. The function will only scrub the content that match the regex of the default patterns passed in this object
* 	{regex} customCase - this param is a regex. It will search and replace the values corresponding that pattern
*
* @param {object} opts (optional) - the 3rd param of the function that can contain the following properties (optional):
* 	{boolean} isCustomExclusive - if true, it will scrubb only the custom regex if the regex is the only property of the "scope" object
* 	{bolean} useFullBlock - if true, it will replace the scrubbed characters with the "█" symbol;
* 	{string} replaceWith - this string will replace the scrubbed content
*

* @return {string | true | false}
* @example
* wb.findPotentialPII( "email:test@test.com, phone:123 123 1234", true )
* returns "email:, phone:",
*
* wb.findPotentialPII( "email:test@test.com, phone:123 123 1234", false )
* returns true
*
* wb.findPotentialPII( "email:test@test.com, phone:123 123 1234", { email:1 }{ replaceWith: [REDACTED/CAVIARDÉ] } )
* returns "email:[REDACTED/CAVIARDÉ], phone:123 123 1234"
*
* wb.findPotentialPII( "email:test@test.com, phone:123 123 1234, numéro de cas 12345678", { "customCase":/\b(?:case[\s-]?number[\s\-\\.]?(?:\d{5,10}))|(?:numéro[\s-]?de[\s-]?cas[\s\-\\.]?(?:\d{5,10}))/ig }, { useFullBlock:1})
* returns "phone:████████████, email:█████████████, postalCode:██████, ██████████████████████"
*/
wb.findPotentialPII = function( str, scope, opts ) {
	if ( str && typeof str  !== "string" ) {
		return false;
	}
	var oRegEx = {
			digits: /\d(?:[\s\-\\.\\/]?\d){8,}(?!\d)/ig, //9digits or more pattern
			passport: /\b[A-Za-z]{2}[\s\\.-]*?\d{6}\b/ig, //canadian nr passport pattern
			email: /\b(?:[a-zA-Z0-9_\-\\.]+)(?:@|%40|%2540)(?:[a-zA-Z0-9_\-\\.]+)\.(?:[a-zA-Z]{2,5})\b/ig, //email pattern
			postalCode: /\b[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d\b/ig, //postal code pattern
			username: /(?:(username|user)[%20]?([:=]|(%EF%BC%9A))[^\s&]*)/ig,
			password: /(?:(password|pass)[%20]?([:=]|(%EF%BC%9A))[^\s&]*)/ig
		},
		isFound = false,
		txtMarker = opts && opts.replaceWith ? opts.replaceWith : "",
		toClean = typeof scope === "object" ? true : scope,
		arMatchedStr,
		settings = opts || {},
		defaultSettings = {
			isCustomExclusive: false,
			useFullBlock: false,
			replaceWith: ""
		},
		isFullBlock = settings.useFullBlock || false,
		validatedScope = typeof scope === "object" ? {} : oRegEx;
	settings = $.extend( {}, defaultSettings, settings );

	if ( Object.keys( validatedScope ).length === 0 ) {
		if ( settings.isCustomExclusive ) {
			for ( var key in scope ) {
				if ( scope[ key ] instanceof RegExp ) {
					validatedScope[ key ] = scope[ key ];
				}
			}
		} else {
			if ( Object.keys( scope ).length === 1 && Object.values( scope )[ 0 ] instanceof RegExp ) {
				validatedScope = oRegEx;
				validatedScope[ Object.keys( scope )[ 0 ] ] = Object.values( scope )[ 0 ];
			} else {
				for ( var keyScope in scope ) {
					if ( Object.prototype.hasOwnProperty.call( oRegEx, keyScope ) ) {
						validatedScope [ keyScope ] = oRegEx [ keyScope ];
					} else {
						if ( scope[ keyScope ]  instanceof RegExp ) {
							validatedScope [ keyScope ] = scope [ keyScope ];
						}
					}
				}
			}
		}
	}

	for ( var valKey in validatedScope ) {
		arMatchedStr = str.match( validatedScope[ valKey ] );
		if ( arMatchedStr ) {
			isFound = true;
			if ( toClean ) {
				txtMarker = isFullBlock ? "█".repeat( arMatchedStr[ 0 ].length ) : txtMarker;
				str = str.replaceAll( validatedScope[ valKey ], txtMarker );
			}
		}
	}

	return toClean && isFound ? str : isFound;
};

} )( wb, window );

( function( $, undef ) {
"use strict";

var methods,
	settings = {
		"default": "wet-boew"
	};

methods = {

	init: function( options ) {
		return $.extend( settings, options || {} );
	},

	show: function( onlyAria ) {
		$( this ).each( function() {
			var $elm = $( this );
			$elm.attr( "aria-hidden", "false" );
			if ( onlyAria === undef ) {
				$elm.removeClass( "wb-inv" );
			}
		} );
	},

	hide: function( onlyAria ) {
		$( this )
			.each( function() {
				var $elm = $( this );
				$elm.attr( "aria-hidden", "true" );
				if ( onlyAria === undef ) {
					return $elm.addClass( "wb-inv" );
				}
			} );
	},

	toggle: function( to, from ) {
		$( this )
			.addClass( to )
			.removeClass( from );
	}
};

$.fn.wb = function( method ) {

	if ( methods[ method ] ) {
		methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
	} else if ( typeof method === "object" || !method ) {
		methods.init.apply( this, arguments );
	} else {
		$.error( "Method " + method + " does not exist on jquery.wb" );
	}
};

} )( jQuery );

/*
:focusable and :tabable jQuery helper expressions - https://github.com/jquery/jquery-ui/blob/24756a978a977d7abbef5e5bce403837a01d964f/ui/jquery.ui.core.js
*/
( function( $ ) {

"use strict";

function focusable( element, isTabIndexNotNaN, visibility ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase( );
	if ( nodeName === "area" ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase( ) !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[ 0 ];
		return !!img && visible( img );
	}
	if ( visibility ) {
		return ( /input|select|textarea|button|object/.test( nodeName ) ? !element.disabled :
			nodeName === "a" ?
				element.href || isTabIndexNotNaN :
				isTabIndexNotNaN ) &&
		visible( element ); /* the element and all of its ancestors must be visible */
	} else {
		return ( /input|select|textarea|button|object/.test( nodeName ) ? !element.disabled :
			nodeName === "a" ?
				element.href || isTabIndexNotNaN :
				isTabIndexNotNaN );
	}
}

function visible( element ) {
	return $.expr.filters.visible( element ) && !$( element )
		.parents( )
		.addBack( )
		.filter( function() {
			return $.css( this, "visibility" ) === "hidden";
		} )
		.length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ? $.expr.createPseudo( function( dataName ) {
		return function( elem ) {
			return !!$.data( elem, dataName );
		};
	} ) :

	// support: jQuery <1.8

		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},
	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ), true );
	},
	discoverable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},
	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
} );

} )( jQuery );

/**
 * @title WET-BOEW Add to calendar
 * @overview Create an add to calendar button for an event
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @ricokola
 */
( function( $, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-addcal",
	selector = ".provisional." + componentName,
	initEvent = "wb-init." + componentName,
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
			$elm = $( elm );

		if ( elm ) {

			wb.ready( $( elm ), componentName );

			var properties = elm.querySelectorAll( "[property]" ),
				event_details = new Object(),
				place_details = [],
				i,
				i_len,
				prop_cache,
				googleLink,
				icsFile,
				i18nDict = {
					en: {
						"addcal-addto": "Add to",
						"addcal-calendar": "calendar",
						"addcal-other": "Other (Outlook, Apple, etc.)"
					},
					fr: {
						"addcal-addto": "Ajouter au",
						"addcal-calendar": "calendrier",
						"addcal-other": "Autre (Outlook, Apple, etc.)"
					}
				};

			// Initiate dictionary
			i18nDict = i18nDict[ $( "html" ).attr( "lang" ) || "en" ];
			i18nDict = {
				addto: i18nDict[ "addcal-addto" ],
				calendar: i18nDict[ "addcal-calendar" ],
				ical: i18nDict[ "addcal-other" ]
			};

			// Set date stamp with the date modified
			event_details.dtStamp = dtToISOString( $( "time[property='dateModified']" ) );

			i_len = properties.length;
			for ( i = 0; i < i_len; i++ ) {
				prop_cache = properties[ i ];
				switch ( prop_cache.getAttribute( "property" ) ) {
				case "name":

					// If the property=name is inside an element with typeof=Place defined
					if ( $( prop_cache ).parentsUntil( ( "." + componentName ), "[typeof=Place]" ).length ) {
						event_details.placeName = prop_cache.textContent;
					} else {
						event_details.name = prop_cache.textContent;
					}
					break;
				case "description":
					event_details.description = prop_cache.textContent.replace( /(\r\n|\n|\r)/gm, " " );
					break;
				case "startDate":
					event_details.sDate = dtToISOString( $( "time[property='startDate']", $elm ) );
					break;
				case "endDate":
					event_details.eDate = dtToISOString( $( "time[property='endDate']", $elm ) );
					break;
				case "location":

					// If the location doesn't have typeof defined OR has typeof=VirtualLocation without URL inside.
					if ( !prop_cache.getAttribute( "typeof" ) || ( prop_cache.getAttribute( "typeof" ) === "VirtualLocation" && !$( prop_cache ).find( "[property=url]" ).length ) ) {
						event_details.placeName = prop_cache.textContent;
					}
					break;
				case "streetAddress":
					event_details.placeAddress = prop_cache.textContent;
					break;
				case "addressLocality":
					event_details.placeLocality = prop_cache.textContent;
					break;
				case "addressRegion":
					event_details.placeRegion = prop_cache.textContent;
					break;
				case "postalCode":
					event_details.placePostalCode = prop_cache.textContent;
					break;
				case "url":

					// If the property=url is inside a property=location
					if ( $( prop_cache ).parentsUntil( ( "." + componentName ), "[property=location]" ).length ) {
						event_details.placeName = prop_cache.textContent;
					}
					break;
				}
			}

			place_details.push( ( event_details.placeName || "" ), ( event_details.placeAddress || "" ), ( event_details.placeLocality || "" ), ( event_details.placeRegion || "" ), ( event_details.placePostalCode || "" ) );

			// Error handling
			if ( !event_details.name ) {
				throw componentName + ": Event title is missing.";
			} else if ( !event_details.sDate ) {
				throw componentName + ": Start date is missing.";
			} else if ( !event_details.eDate ) {
				throw componentName + ": End date is missing.";
			}

			// Set Unique Identifier (UID) and Date Stamp (DSTAMP)
			event_details.uid = window.location.href.replace( /\.|-|\/|:|[G-Zg-z]/g, "" ).toUpperCase().substr( -10 ) + "-" + event_details.sDate + "-" + event_details.dtStamp;

			// Set google calendar link
			googleLink = encodeURI( "https://www.google.com/calendar/render?action=TEMPLATE" +  "&text=" + event_details.name +  "&details=" +
			event_details.description +  "&dates=" + event_details.sDate + "/" + event_details.eDate + "&location=" + place_details.join( " " ) );

			// Set ICS file for Outlook, Apple and other calendars
			icsFile = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//WET-BOEW//Add to Calendar v4.0//\nBEGIN:VEVENT\nDTSTAMP:" + event_details.dtStamp + "\nSUMMARY:" + event_details.name +  "\nDESCRIPTION:" + event_details.description + "\nUID:" + event_details.uid + "\nDTSTART:" + event_details.sDate + "\nDTEND:" + event_details.eDate + "\nLOCATION:" + place_details.join( " " ) + "\nEND:VEVENT\nEND:VCALENDAR";

			elm.dataset.icsFile = icsFile;

			// Create and add details summary to the wb-addcal event and initiate the unordered list
			$elm.append( "<details class='max-content " + componentName + "-buttons'><summary>" + i18nDict.addto + " " + i18nDict.calendar +
			"</summary><ul class='list-unstyled mrgn-bttm-0'><li><a class='btn btn-link' href='" + googleLink.replace( /'/g, "%27" ) + "' target='_blank' rel='noreferrer noopener'>Google<span class='wb-inv'>" + i18nDict.calendar + "</span></a></li><li><button class='btn btn-link download-ics'>" + i18nDict.ical +
			"<span class='wb-inv'>Calendar</span></button></li></ul></details>" );
		}

		wb.ready( $( elm ), componentName );

	};

// Convert date to ISO string and formating for ICS file
var dtToISOString = function( date ) {
	if ( date.is( "[datetime]" ) ) {
		date = date.attr( "datetime" );
	} else {
		date = date.text();
	}

	return new Date( date ).toISOString().replace( /\..*[0-9]/g, "" ).replace( /-|:|\./g, "" );
};

$document.on( "click", ".download-ics", function( event ) {
	var icsFile = $( event.currentTarget ).parentsUntil( "." + componentName ).parent()[ 0 ];
	icsFile =  $( icsFile ).attr( "data-ics-file" );
	wb.download( new Blob( [ icsFile ], { type: "text/calendar;charset=utf-8" } ), "evenement-gc-event.ics" );
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, wb );

/**
 * @title WET-BOEW Ajax Fetch [ ajax-fetch ]
 * @overview A basic AjaxLoader wrapper for WET-BOEW
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET Community
 */
( function( $, wb, DOMPurify ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var $document = wb.doc;

// Event binding
$document.on( "ajax-fetch.wb", function( event ) {

	// TODO: Remove event.element in future versions
	var caller = event.element || event.target,
		fetchOpts = event.fetch,
		urlParts = fetchOpts.url.split( " " ),
		url = urlParts[ 0 ],
		urlSubParts = url.split( "#" ),
		urlHash = urlSubParts[ 1 ],
		selector = urlParts[ 1 ] || ( urlHash ? "#" + urlHash : false ),
		fetchData = {},
		callerId, fetchNoCacheURL, urlSub,
		fetchNoCache = fetchOpts.nocache,
		fetchNoCacheKey = fetchOpts.nocachekey || wb.cacheBustKey || "wbCacheBust";

	// Separate the URL from the filtering criteria
	if ( selector ) {
		fetchOpts.url = urlParts[ 0 ];
	}

	if ( fetchNoCache ) {
		if ( fetchNoCache === "nocache" ) {
			fetchNoCacheURL = wb.guid();
		} else {
			fetchNoCacheURL = wb.sessionGUID();
		}
		fetchNoCacheURL = fetchNoCacheKey + "=" + fetchNoCacheURL;

		urlSub = urlSubParts[ 0 ];
		if ( urlSub.indexOf( "?" ) !== -1 ) {
			url = urlSub + "&" + fetchNoCacheURL + ( urlHash ? "#" + urlHash : "" );
		} else {
			url = urlSub + "?" + fetchNoCacheURL + ( urlHash ? "#" + urlHash : "" );
		}

		fetchOpts.url = url;
	}

	// Filter out any events triggered by descendants
	if ( caller === event.target || event.currentTarget === event.target ) {

		if ( !caller.id ) {
			caller.id = wb.getId();
		}
		callerId = caller.id;

		// Ensure we don't allow jsonp load
		if ( fetchOpts.dataType && fetchOpts.dataType === "jsonp" ) {
			fetchOpts.dataType = "json";
		}
		if ( fetchOpts.jsonp ) {
			fetchOpts.jsonp = false;
		}

		$.ajax( fetchOpts )
			.done( function( response, status, xhr ) {
				var responseType = typeof response;

				if ( selector ) {
					response = $( "<div>" + response + "</div>" ).find( selector );
				}

				fetchData.pointer = $( "<div id='" + wb.getId() + "' data-type='" + responseType + "'></div>" )
					.append( responseType === "string" ? response : "" );

				if ( !xhr.responseJSON ) {
					try {
						response = $( response );
					} catch ( e ) {
						response = DOMPurify.sanitize( xhr.responseText );
					}
				} else {
					response = xhr.responseText;
				}

				fetchData.response = response;
				fetchData.hasSelector = !!selector;
				fetchData.status = status;
				fetchData.xhr = xhr;

				$( "#" + callerId ).trigger( {
					type: "ajax-fetched.wb",
					fetch: fetchData
				}, this );
			} )
			.fail( function( xhr, status, error ) {
				$( "#" + callerId ).trigger( {
					type: "ajax-failed.wb",
					fetch: {
						xhr: xhr,
						status: status,
						error: error
					}
				}, this );
			}, this );
	}
} );

} )( jQuery, wb, DOMPurify );

/**
 * @title WET-BOEW Set background image
 * @overview Apply a background image or detects the change in screen width and replace the background image accordingly
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @namjohn920, @duboisp
 */
( function( $, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var $document = wb.doc,
	$window = wb.win,
	componentName = "wb-bgimg",
	selector = "[data-bgimg-srcset], [data-bgimg]",
	bgViews = {},
	ids = [],

	init = function( event ) {

		var elm, elmId,
			bgImg, bgimgSrcset, bgRawViews,
			i, i_len, i_views,
			imgSrc, imgSize;

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		elm = wb.init( event, componentName, selector );

		if ( elm ) {

			// Ensure the feature have an ID.
			if ( !elm.id ) {
				elm.id = wb.getId();
			}
			elmId = elm.id;

			// Apply default background image
			bgImg = elm.dataset.bgimg;
			if ( bgImg ) {
				elm.style.backgroundImage = "url(" + bgImg + ")";
			}

			// Apply background image set if defined
			bgimgSrcset = elm.dataset.bgimgSrcset;
			if ( bgimgSrcset ) {
				ids.push( elm.id );
				bgRawViews = elm.dataset.bgimgSrcset.split( "," );
				i_len = bgRawViews.length;
				bgViews[ elmId ] = [];

				for ( i = 0; i < i_len; i++ ) {
					i_views = bgRawViews[ i ].trim().split( " " );

					imgSrc = i_views[ 0 ];
					imgSize =  i_views[ i_views.length - 1 ];

					imgSize = parseInt( imgSize.substring( 0, imgSize.length - 1 ) );
					bgViews[ elmId ].push( [ imgSrc, imgSize ] );
				}

				bgViews[ elmId ].sort(
					function( a, b ) {
						return a[ 1 ] > b[ 1 ] ? 1 : -1;
					}
				);

				selectImage();

				// Add the resize listener
				$window.on( "resize", selectImage );
			}

			// Identify that initialization has completed
			wb.ready( $( elm ), componentName );
		}
	},

	selectImage = function() {
		var screenWidth = window.innerWidth,
			optimizedLink = {},
			i, i_len = ids.length, j,
			optimizedSize, currentId, currentId_len,
			currentInput,
			link, elm;

		for ( i = 0; i < i_len; i++ ) {
			optimizedSize = Infinity;
			currentId = bgViews[ ids[ i ] ];
			currentId_len = currentId.length;

			for ( j = 0; j < currentId_len; j++ ) {
				currentInput = currentId[ j ];
				if ( currentInput[ 1 ] >= screenWidth ) {
					if ( optimizedSize > currentInput[ 1 ] ) {
						optimizedSize = currentInput[ 1 ];
						optimizedLink[ ids[ i ] ] = currentInput[ 0 ];
					}
				}
			}
			if ( optimizedSize === Infinity ) {
				optimizedLink[ ids[ i ] ] = currentId[ currentId_len - 1 ][ 0 ];
			}
		}

		for ( link in optimizedLink ) {
			elm = document.getElementById( link );

			if ( optimizedLink[ link ] === "https://wet-boew.github.io/vocab/wb/utilities#no-image" ) {
				elm.style.backgroundImage = "none";
			} else {
				elm.style.backgroundImage = "url(" + optimizedLink[ link ] + ")";
			}
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb wb-init." + componentName, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, wb );

/**
 * @title WET-BOEW Events Calendar
 * @overview Dynamically generates a calendar interface for navigating a list of events.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET Community
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-calevt",
	selector = "." + componentName,
	componentEventName = componentName + "-cal",
	selectorEvent = "." + componentEventName,
	initEvent = "wb-init" + selector,
	evDetails = "ev-details",
	setFocusEvent = "focus",
	dataAttr = componentName,
	$document = wb.doc,
	hiddenClass = "hidden",

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered this handler
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {
			$elm = $( elm );

			// Load ajax content
			$.when.apply( $, $.map( $elm.find( "[data-calevt]" ), getAjax ) )
				.always( function() {
					processEvents( $elm );

					// Identify that initialization has completed
					wb.ready( $elm, componentName );
				} );
		}
	},

	getAjax = function( ajaxContainer ) {
		var $ajaxContainer = $( ajaxContainer ),
			urls = $ajaxContainer.data( "calevt" ).split( /\s+/ ),
			dfd = $.Deferred(),
			len = urls.length,
			promises = [],
			i, appendData;

		appendData = function( data ) {
			$ajaxContainer.append( $.trim( data ) );
		};

		for ( i = 0; i < len; i += 1 ) {
			promises.push( $.get( urls[ i ], appendData, "html" ) );
		}

		$.when.apply( $, promises ).always( function() {
			dfd.resolve();
		} );

		return dfd.promise();
	},

	processEvents = function( $elm ) {
		var settings = $.extend( {}, window[ componentName ], $elm.data( dataAttr ) ),
			year, month, events, containerId, $container,
			minDate, maxDate, minDateTime, maxDateTime,
			currDate = new Date(),
			currDateTime = currDate.getTime();

		events = getEvents( $elm );
		containerId = $elm.data( "calevtSrc" );
		$container = $( "#" + containerId ).addClass( componentEventName );

		year = settings.year;
		month = settings.month;

		if ( $elm.data( "calevtMinDate" ) ) {
			minDate = getLocaleDate( $elm.data( "calevtMinDate" ) );
		}
		if ( $elm.data( "calevtMaxDate" ) ) {
			maxDate = getLocaleDate( $elm.data( "calevtMaxDate" ) );
		}

		if ( !minDate || ( events.minDate < minDate ) ) {
			minDate = events.minDate;
		}
		if ( !maxDate || ( events.maxDate > maxDate ) ) {
			maxDate = events.maxDate;
		}

		minDateTime = minDate.getTime();
		maxDateTime = maxDate.getTime();

		if ( !year && minDateTime < currDateTime && currDateTime < maxDateTime ) {
			year = currDate.getFullYear();
		} else if ( !year && currDateTime < minDateTime ) {
			year = minDate.getFullYear();
		} else if ( !year && maxDateTime < currDateTime ) {
			year = maxDate.getFullYear();
		}

		if ( !month && minDateTime < currDateTime && currDate.getTime() < maxDateTime ) {
			month = currDate.getMonth();
		} else if ( !month && currDateTime < minDateTime ) {
			month = minDate.getMonth();
		} else if ( !month && maxDateTime < currDateTime ) {
			month = maxDate.getMonth();
		}

		wb.calendar.create( $container, {
			year: year,
			month: month,
			minDate: minDate,
			maxDate: maxDate,
			daysCallback: addEvents,
			events: events.list,
			$events: $elm
		} );
	},

	daysBetween = function( dateLow, dateHigh ) {

		// Simplified conversion to date object
		var date1 = wb.date.convert( dateLow ),
			date2 = wb.date.convert( dateHigh ),
			dstAdjust = 0,
			oneMinute = 1000 * 60,
			oneDay = oneMinute * 60 * 24,
			diff;

		// Equalize times in case date objects have them
		date1.setHours( 0 );
		date1.setMinutes( 0 );
		date1.setSeconds( 0 );
		date2.setHours( 0 );
		date2.setMinutes( 0 );
		date2.setSeconds( 0 );

		// Take care of spans across Daylight Saving Time changes
		if ( date2 > date1 ) {
			dstAdjust = ( date2.getTimezoneOffset() - date1.getTimezoneOffset() ) * oneMinute;
		} else {
			dstAdjust = ( date1.getTimezoneOffset() - date2.getTimezoneOffset() ) * oneMinute;
		}
		diff = Math.abs( date2.getTime() - date1.getTime() ) - dstAdjust;
		return Math.ceil( diff / oneDay );
	},

	///TODO: Review this code
	getEvents = function( obj ) {
		var directLinking = !( $( obj ).hasClass( "evt-anchor" ) ),
			events = {
				minDate: null,
				maxDate: null,
				iCount: 0,
				list: [
					{
						a: 1
					}
				]
			},
			objEventsList = obj.find( "ul, ol" ).first(),
			objEventsListItems = objEventsList.find( "> li:not(.wb-fltr-out)" ),
			iLen = objEventsListItems.length,
			dateTimeRegExp = /datetime\s+\{date:\s*(\d+-\d+-\d+)\}/,
			i, $event, event, $objTitle, title, link, href, target,
			linkId, date, tCollection, tCollectionTemp,	strDate1,
			strDate2, z, zLen, className, dateClass;

		for ( i = 0; i !== iLen; i += 1 ) {
			$event = objEventsListItems.eq( i );
			event = $event[ 0 ];
			$objTitle = $event.find( "*:header:first" );
			className = $objTitle.attr( "class" );
			title = $objTitle.text();
			link = $event.find( "a" )[ 0 ];
			href = link.getAttribute( "href" );
			target = link.getAttribute( "target" );
			zLen = 1;

			/*
			 * Modification direct-linking or page-linking
			 *	- added the ability  to have class set the behaviour of the links
			 *	- default is to use the link of the item as the event link in the calendar
			 *	- 'evt-anchor' class dynamically generates page anchors on the links it maps to the event
			 */
			if ( !directLinking ) {
				linkId = event.id || wb.getId();
				event.id = linkId;
				href = "#" + linkId;
			}

			date = new Date();
			date.setHours( 0, 0, 0, 0 );
			tCollection = event.getElementsByTagName( "time" );

			/*
			 * Date spanning capability
			 *   - since there may be some dates that are capable of spanning over months we need to identify them
			 *     the process is see how many time nodes are in the event. 2 nodes will trigger a span
			 */
			if ( tCollection.length !== 0 ) {
				tCollectionTemp = tCollection[ 0 ];
				strDate1 = tCollectionTemp.nodeName.toLowerCase() === "time" ?
					tCollectionTemp.getAttribute( "datetime" ).substr( 0, 10 ).split( "-" ) :
					tCollectionTemp.className.match( dateTimeRegExp )[ 1 ].substr( 0, 10 ).split( "-" );

				// Convert to zero-based month
				strDate1[ 1 ] = strDate1[ 1 ] - 1;

				date.setFullYear( strDate1[ 0 ], strDate1[ 1 ], strDate1[ 2 ] );

				if ( tCollection.length !== 1 ) {

					// This is a spanning event
					tCollectionTemp = tCollection[ 1 ];
					strDate2 = tCollectionTemp.nodeName.toLowerCase() === "time" ?
						tCollectionTemp.getAttribute( "datetime" ).substr( 0, 10 ).split( "-" ) :
						tCollectionTemp.className.match( dateTimeRegExp )[ 1 ].substr( 0, 10 ).split( "-" );

					// Convert to zero-based month
					strDate2[ 1 ] = strDate2[ 1 ] - 1;

					zLen += daysBetween( strDate1, strDate2 );
				}

				// Now loop in events to load up all the days that it would be on tomorrow.setDate(tomorrow.getDate() + 1);
				for ( z = 0; z !== zLen; z += 1 ) {
					if ( z !== 0 ) {
						date = new Date( date.setDate( date.getDate() + 1 ) );
					}

					if ( events.minDate === null || date < events.minDate ) {
						events.minDate = date;
					}

					if ( events.maxDate === null || date > events.maxDate ) {
						events.maxDate = date;
					}

					events.list[ events.iCount ] = {
						title: title,
						date: new Date( date.getTime() ),
						href: href,
						target: target
					};

					// Add a viewfilter
					dateClass = "filter-" + ( date.getFullYear() ) + "-" +
						wb.string.pad( date.getMonth() + 1, 2 );
					if ( !className ) {
						className = dateClass;
					} else if ( className.indexOf( dateClass ) === -1 ) {
						className += " " + dateClass;
					}
					events.iCount += 1;
				}
				$objTitle.attr( "class", className );
			}

		// End of loop through objects/events
		}

		//Sort events
		events.list.sort( function( firstEvent, secondEvent ) {
			return firstEvent.date - secondEvent.date;
		} );

		return events;
	},

	addEvents = function( year, month, $days ) {
		var eventsList = this.events,
			i, eLen, date, dayIndex, $day, $dayEvents, event, eventMonth;

		/*
		 * Determines for each event, if it occurs in the display month
		 */
		for ( i = 0, eLen = eventsList.length; i !== eLen; i += 1 ) {
			event = eventsList[ i ];
			date = event.date;

			if ( date.getFullYear() === year ) {
				eventMonth = date.getMonth();
				if ( eventMonth > month ) {

					//End the loop if the next event is in a future month because events are sorted chronologically
					break;
				} else if ( date.getMonth() === month ) {
					dayIndex = date.getDate() - 1;
					$day = $( $days[ dayIndex ] );

					//Get the appropriate day events if a day link exists
					if ( $day.parent().get( 0 ).nodeName !== "A" ) {
						$dayEvents = $day.next();
					} else {
						$dayEvents = $day.parent().next();
					}

					//Create the event list container if it doesn't exist
					if ( $dayEvents.length !== 1 ) {
						$dayEvents = $( "<ul></ul>" ).insertAfter( $day );

						//Determine the focus based on the day before
						if ( dayIndex && $days[ dayIndex - 1 ].parentNode.nodeName === "A" ) {
							$day.wrap( "<a class='cal-evt' tabindex='-1'></a>" );
						} else {
							$day.wrap( "<a class='cal-evt'></a>" );
						}
						$day.parent().attr( "href", "javascript:;" );
					}

					//Add the event to the list
					$dayEvents.append( "<li><a tabindex='-1' class='cal-evt-lnk' href='" + event.href + "'>" + event.title + "</a></li>" );
				}
			}
		}
	},

	filterEvents = function( year, month ) {
		this.find( "li.cal-disp-onshow" )
			.addClass( hiddenClass )
			.has( ":header[class*=filter-" + year + "-" +
				wb.string.pad( parseInt( month, 10 ) + 1, 2 ) + "]" )
			.removeClass( hiddenClass );
	},

	showEvents = function() {
		$( this )
			.next()
			.addClass( evDetails );
	},

	hideEvents = function() {
		var $link = $( this ),
			$cell = $link.closest( "td" );

		setTimeout( function() {
			if ( $cell.find( "a:focus" ).length === 0 ) {
				$cell.find( "ul" )
					.removeClass( evDetails )
					.find( "a" )
					.attr( "tabindex", "-1" );
			}
		}, 5 );
	},

	getLocaleDate = function( dateString ) {
		var date = new Date(),
			dateComponents = dateString.split( "-" );

		dateComponents[ 1 ] = dateComponents[ 1 ] - 1;	// Convert to zero-based month
		date.setFullYear( dateComponents[ 0 ], dateComponents[ 1 ], dateComponents[ 2 ] );

		return date;
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent + " wb-redraw" + selector, selector, function( event ) {

	var eventType = event.type,
		$elm = $( "#" + event.target.id ),
		calendarId = event.currentTarget.dataset.calevtSrc;

	switch ( eventType ) {
	case "timerpoke":
	case "wb-init":
		init( event );
		break;

	case "wb-redraw":
		$( "#" + calendarId + " .wb-clndr" ).remove();
		processEvents( $elm );
		$elm.trigger( "wb-updated" + selector );
		break;
	}
} );

$document.on( "wb-navigate.wb-clndr", selectorEvent, function( event ) {
	var lib = event.target.lib,
		$calEvent;

	if ( lib ) {
		$calEvent = lib.$events;

		if ( $calEvent ) {
			filterEvents.call( $calEvent, event.year, event.month );

			//TODO: Added for backwards compatibility. Remove in previous versions
			$calEvent.trigger( "wb-updated" + selector );
		}
	}
} );

$document.on( "focusin focusout keydown", selectorEvent + " .cal-evt", function( event ) {
	var eventType = event.type,
		$link;

	switch ( eventType ) {
	case "focusin":
		showEvents.call( event.target );
		break;
	case "focusout":
		hideEvents.call( event.target );
		break;
	case "keydown":
		$link = $( event.target );
		if ( ( event.which === 13 || event.which === 32 ) && $link.hasClass( "cal-evt" ) ) {
			$( event.target ).next().find( "a:first" ).trigger( setFocusEvent );
		}
		break;
	}
} );

$document.on( "keydown", selectorEvent + " td > ul li", function( event ) {
	var $item = $( event.currentTarget ),
		$toFocus, $itemParent;

	switch ( event.which ) {
	case 38:
		$toFocus = $item.prev().find( "a" );
		if ( $toFocus.length === 0 ) {
			$toFocus = $item.siblings( ":last" ).find( "a" );
		}
		$toFocus.trigger( setFocusEvent );
		break;
	case 40:
		$toFocus = $item.next().find( "a" );
		if ( $toFocus.length === 0 ) {
			$toFocus = $item.siblings( ":first" ).find( "a" );
		}
		$toFocus.trigger( setFocusEvent );
		break;
	case 27:
		$itemParent = $item.closest( "td" ).children( "a" );
		$itemParent.trigger( setFocusEvent );
		break;
	}
} );

$document.on( "focusout", selectorEvent + " td > ul", function( event ) {
	hideEvents.call( event.target );
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

( function( $, DOMPurify, window, document, wb, undef ) {

var i18nText,
	$document = wb.doc,
	selector = ".wb-clndr",
	navigateEvent = "wb-navigate" + selector,
	inited = false,
	currDate = new Date(),
	currYear = currDate.getFullYear(),
	currMonth = currDate.getMonth(),
	defaults = {
		year: currYear,
		month: currMonth,
		minDate: new Date( currYear, 0, 1 ),
		maxDate: new Date( currYear, 11, 31 )
	},
	$calBase,

	init = function() {
		var i18n = wb.i18n,
			textWeekDayNames, textMonthNames;

		i18nText = {
			monthNames: i18n( "mnths" ),
			prevMonth: i18n( "prvMnth" ),
			nextMonth: i18n( "nxtMnth" ),
			goToYear: i18n( "cal-goToYr" ),
			goToMonth: i18n( "cal-goToMnth" ),
			dayNames: i18n( "days" ),
			currDay: i18n( "currDay" ),
			format: i18n( "cal-format" ),
			calendar: i18n( "cal" )
		};

		textWeekDayNames = i18nText.dayNames;
		textMonthNames = i18nText.monthNames;

		$calBase = $( "<div class='wb-clndr' role='application' aria-label='" + i18nText.calendar + "'>" +
			"<div class='cal-nav'>" +
				"<span class='wb-inv current-month' aria-live='polite'></span>" + // Added for screen-readers
				"<button type='button' class='btn pull-left cal-month-prev'>" +
					"<span class='glyphicon glyphicon-arrow-left' aria-hidden='true'></span>" +
					"<span class='wb-inv'>" + i18nText.prevMonth + "<span></span></span>" +
				"</button>" +
				"<button type='button' class='btn pull-right cal-month-next'>" +
					"<span class='glyphicon glyphicon-arrow-right' aria-hidden='true'></span>" +
					"<span class='wb-inv'>" + i18nText.nextMonth + "<span></span></span>" +
				"</button>" +
				"<div class='form-group'>" +
					"<label><span class='wb-inv'>" + i18nText.goToYear + "</span><select class='cal-year'></select></label>\n" +
					"<label><span class='wb-inv'>" + i18nText.goToMonth + "</span><select class='cal-month'>" +
						( function() {
							var months = "",
								m;

							for ( m = 0; m < 12; m += 1 ) {
								months += "<option value='" + m + "'>" + textMonthNames[ m ] + "</option>";
							}

							return months;
						} )() +
					"</select></label>" +
				"</div>" +
			"</div>" +
			"<table>" +
				"<thead>" +
					"<tr>" +
						( function() {
							var days = "",
								d;

							for ( d = 0; d < 7; d += 1 ) {
								days += "<th><abbr title='" + textWeekDayNames[ d ] + "'>" + textWeekDayNames[ d ].substr( 0, 1 ) + "</abbr></th>";
							}

							return days;
						} )() +
					"</tr>" +
				"</thead>" +
				"<tbody class='cal-days'></tbody>" +
			"</table>" +
		"</div>" );

		inited = true;
	},

	createCalendar = function( $container, settings ) {
		var calendar = {
				reInit: initCalendar
			}, $calendarObj, calendarObj;

		if ( !inited ) {
			init();
		}

		$calendarObj = $calBase.clone();
		calendarObj = $calendarObj.get( 0 );

		calendar.$o = $calendarObj;
		calendar.o = calendarObj;
		calendarObj.lib = calendar;

		$calendarObj.appendTo( $container );

		calendar.reInit( settings );

		return calendar;
	},

	initCalendar = function( settings ) {
		var years = "",
			$calendarObj = this.$o,
			$yearField, lastYear, y, defaultsPartial;

		settings = settings || {};

		if ( settings.year !== undef && settings.month !== undef ) {
			defaultsPartial = {
				minDate: new Date( settings.year, 0, 1 ),
				maxDate: new Date( settings.year, 11, 31 )
			};
			$.extend( this, defaultsPartial, settings );
		} else {
			$.extend( this, defaults );
		}

		//Generates the list of years
		lastYear = this.maxDate.getFullYear();
		$yearField = $calendarObj.find( ".cal-year" ).empty();
		for ( y = this.minDate.getFullYear(); y <= lastYear; y += 1 ) {
			years += "<option value='" + y + "'>" + y + "</option>";
		}
		$yearField.append( years );

		$calendarObj
			.trigger( {
				type: navigateEvent,
				year: this.year,
				month: this.month,
				initEvent: true
			} );
	},

	createDays = function( calendar, year, month ) {
		var $container = $( calendar ).find( ".cal-days" ),
			daysContainer = $container.get( 0 ),
			dayCount = 1,
			textCurrentDay = i18nText.currDay,
			lib = calendar.lib,
			minDate = lib.minDate,
			maxDate = lib.maxDate,
			callback = lib.daysCallback,
			row, cell,
			date, firstDay, lastDay, currYear, currMonth, currDay, week, day, className, isCurrentDate, isoDate, printDate, breakAtEnd, days, inRange;

		date = new Date( year, month, 1 );

		firstDay = date.getDay();
		date.setMonth( month + 1, 0 );
		lastDay = date.getDate();

		// Get the current date
		date = new Date();
		currYear = date.getFullYear();
		currMonth = date.getMonth();
		currDay = date.getDate();

		// Clean all existing rows
		$container.empty();

		for ( week = 1; week < 7; week += 1 ) {
			row = daysContainer.insertRow();

			for ( day = 0; day < 7; day += 1 ) {

				if ( ( week === 1 && day < firstDay ) || ( dayCount > lastDay ) ) {

					// Creates empty cells | Cree les cellules vides
					cell = row.insertCell();
					cell.classList.add( "cal-empty" );
					cell.textContent = " ";

				} else {

					// Creates date cells | Cree les cellules de date
					isCurrentDate = ( dayCount === currDay && month === currMonth && year === currYear );
					className = "cal-index-" + dayCount + ( isCurrentDate ? " cal-curr-day " : "" );

					date.setFullYear( year, month, dayCount );
					isoDate = date.toLocalISOString().substr( 0, 10 );
					printDate = displayDate( date ) + ( isCurrentDate ? "<span class='wb-inv'>" + textCurrentDay + "</span>" : "" );

					cell = row.insertCell();
					cell.setAttribute( "class", className );
					cell.innerHTML = DOMPurify.sanitize( "<time datetime='" + isoDate  + "'>" + printDate + "</time>" );

					if ( dayCount >= lastDay ) {
						breakAtEnd = true;
					}

					dayCount += 1;
				}
			}
			if ( breakAtEnd ) {
				break;
			}
		}

		if ( callback ) {
			days = $container.find( "time" );
			inRange = {};

			if ( year === minDate.getFullYear() && month === minDate.getMonth() ) {
				inRange.min = minDate.getDate() - 1;
			}

			if ( year === maxDate.getFullYear() && month === maxDate.getMonth() ) {
				inRange.max = maxDate.getDate() - 1;
			}

			callback.call( calendar.lib, year, month, days, inRange );
		}
	},

	displayDate = function( date ) {
		var textWeekDayNames = i18nText.dayNames,
			textMonthNames = i18nText.monthNames;

		return i18nText.format.replace( /\{ddd\}|\{d\}|\{M\}|\{Y\}/g, function( match ) {
			switch ( match ) {
			case "{ddd}":
				return textWeekDayNames[ parseInt( date.getDay(), 10 ) ];
			case "{d}":
				return parseInt( date.getDate(), 10 );
			case "{M}":
				return textMonthNames[ parseInt( date.getMonth(), 10 ) ];
			case "{Y}":
				return date.getFullYear();
			}
		} );
	};

wb.calendar = {
	create: createCalendar
};

$document.on( navigateEvent, selector, function( event ) {
	var calendarObj = event.currentTarget,
		$calendar = $( calendarObj ),
		year = event.year,
		month = event.month,
		lib = calendarObj.lib,
		maxYear = lib.maxDate.getFullYear(),
		maxMonth = lib.maxDate.getMonth(),
		minYear = lib.minDate.getFullYear(),
		minMonth = lib.minDate.getMonth(),
		$prevArrow = $calendar.find( ".cal-month-prev" ),
		$nextArrow = $calendar.find( ".cal-month-next" ),
		$monthField = $calendar.find( ".cal-month" ),
		disabled = "disabled";

	if ( year !== undef ) {
		lib.year = year;
	}

	if ( month !== undef ) {
		lib.month = month;
	}

	//Update UI
	$calendar.find( ".cal-year" ).val( year );

	$monthField.val( month );

	$monthField.children( ":" + disabled ).removeAttr( disabled );

	if ( year < minYear || ( year === minYear && month <= minMonth ) ) {
		$prevArrow.attr( disabled, disabled );
	} else {
		$prevArrow.removeAttr( disabled );
	}

	if ( year > maxYear || ( year === maxYear && month >= maxMonth ) ) {
		$nextArrow.attr( disabled, disabled );
	} else {
		$nextArrow.removeAttr( disabled );
	}

	if ( year === minYear ) {
		$monthField.children( ":lt(" + minMonth + ")" ).attr( disabled, disabled );
	}

	if ( year === maxYear ) {
		$monthField.children( ":gt(" + maxMonth + ")" ).attr( disabled, disabled );
	}

	createDays( event.currentTarget, event.year, event.month );

	// Added declaration of current month in aria-live="polite" for screen-readers
	if ( !event.initEvent ) {
		$calendar.find( ".current-month" ).text( i18nText.monthNames[ month ] + " " + year );
	}
} );

$document.on( "change", selector, function( event ) {
	var target = event.target,
		calendar = event.currentTarget,
		year, month;

	switch ( target.className ) {
	case "cal-year":
		year = parseInt( target.value, 10 );
		month = calendar.lib.month;
		break;
	case "cal-month":
		year = calendar.lib.year;
		month = parseInt( target.value, 10 );
		break;
	}

	$( calendar ).trigger( {
		type: navigateEvent,
		year: year,
		month: month
	} );
} );

$document.on( "click", ".cal-month-prev, .cal-month-next", function( event ) {
	var $calendar = $( event.currentTarget ).closest( selector ),
		calendar = $calendar.get( 0 ),
		className = event.currentTarget.className,
		modifier = className.indexOf( "cal-month-prev" ) !== -1 ? -1 : 1,
		date = new Date( calendar.lib.year, calendar.lib.month + modifier, 1 );

	$calendar.trigger( {
		type: navigateEvent,
		year: date.getFullYear(),
		month: date.getMonth()
	} );
	if ( wb.ie11 ) {
		$calendar.trigger( "focusin" );
	}
} );

$document.on( "keydown", selector, function( event ) {
	var calendar = event.currentTarget,
		$days = $( event.currentTarget ).find( ".cal-days" ),
		target = event.target,
		which = event.which,
		lib = calendar.lib,
		date = new Date( lib.year, lib.month, 1 ),
		minDate = lib.minDate,
		maxDate = lib.maxDate,
		currentDate = new Date( date ),
		navigate = true,
		classMatch, isDayLink, lastDay, modifier, day;

	if ( !event.altKey && !event.metaKey && which > 32 && which < 41 ) {

		classMatch = target.parentNode.className.match( /cal-index-(\d{1,2})/ );
		isDayLink = classMatch !== null;

		//Key binding for the entire calendar
		switch ( which ) {

		//page up
		case 33:
			date.setDate( minDate.getDate() );

			//page down
			/* falls through */
		case 34:
			modifier = ( which === 33 ? -1 : 1 );

			if ( event.ctrlKey || event.shiftKey || event.altKey ) {
				date.setYear( date.getFullYear() + modifier );
			} else {
				date.setMonth( date.getMonth() + modifier );
			}
			break;
		}

		//Key binding for navigating calendar days
		if ( isDayLink ) {
			day = parseInt( classMatch[ 1 ], 10 );
			date.setMonth( date.getMonth() + 1, 0 );
			lastDay = date.getDate();
			date.setDate( day > lastDay ? lastDay : day );

			switch ( which ) {

			// end / home
			case 35:
				date.setDate( lastDay );
				break;
			case 36:
				date.setDate( 1 );
				break;

			// left / up / right / down arrows
			case 37:
				date.setDate( day - 1 );
				break;
			case 38:
				date.setDate( day - 7 );
				break;
			case 39:
				date.setDate( day + 1 );
				break;
			case 40:
				date.setDate( day + 7 );
				break;
			}
		}

		if ( date < minDate || date > maxDate ) {
			if ( which === 35 ) {
				date.setDate( maxDate.getDate() );
			} else if ( which === 36 ) {
				date = minDate;
			} else {
				navigate = false;
			}
		}

		if ( navigate && ( date.getMonth() !== currentDate.getMonth() || date.getFullYear() !== currentDate.getFullYear() ) ) {
			$( calendar ).trigger( {
				type: navigateEvent,
				year: date.getFullYear(),
				month: date.getMonth()
			} );
		}

		if ( isDayLink ) {
			$days.find( ".cal-index-" + date.getDate() + " a:first" ).focus();
		}

		event.preventDefault();
		return false;
	}

} );

( function() {

	function pad( number ) {
		if ( number < 10 ) {
			return "0" + number;
		}
		return number;
	}

	Date.prototype.toLocalISOString = function() {
		var tz = this.getTimezoneOffset();
		if ( tz === 0 ) {
			return this.toISOString();
		}
		return this.getFullYear() +
			"-" + pad( this.getMonth() + 1 ) +
			"-" + pad( this.getDate() ) +
			"T" + pad( this.getHours() ) +
			":" + pad( this.getMinutes() ) +
			":" + pad( this.getSeconds() ) +
			"." + ( this.getMilliseconds() / 1000 ).toFixed( 3 ).slice( 2, 5 ) +
			( tz < 0 ? "+" : "-" ) +
			pad( Math.floor( Math.abs( tz / 60 ) ) ) +
			":" + pad( tz % 60 );
	};

	if ( !Date.prototype.toISOString ) {
		Date.prototype.toISOString = function() {
			return this.getUTCFullYear() +
				"-" + pad( this.getUTCMonth() + 1 ) +
				"-" + pad( this.getUTCDate() ) +
				"T" + pad( this.getUTCHours() ) +
				":" + pad( this.getUTCMinutes() ) +
				":" + pad( this.getUTCSeconds() ) +
				"." + ( this.getUTCMilliseconds() / 1000 ).toFixed( 3 ).slice( 2, 5 ) +
				"Z";
		};
	}
}() );

} )( jQuery, DOMPurify, window, document, wb );

/**
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @title Charts and Graph
 * @overview Draw charts from an html simple and complex data table
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 *
 */
( function( $, window, document, wb ) {
"use strict";

/**
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-charts",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	tableParsingEvent = "passiveparse.wb-tableparser",
	tableParsingCompleteEvent = "parsecomplete.wb-tableparser",
	$document = wb.doc,
	i18n, i18nText,

	/**
	 * Main Entry function to create the charts
	 * @method createCharts
	 * @param {jQuery DOM element} $elm table element use to create the chart
	 */
	createCharts = function( $elm ) {
		var allSeries = [],
			chartslabels = [],
			dataSeries = [],
			nbBarChart = 0,
			$caption = $( "caption", $elm ),
			captionHtml = $caption.html() || "",
			captionText = $caption.text() || "",
			valuePoint = 0,
			dataCellUnitRegExp = /[^+\-., 0-9]+[^\-+0-9]*/,
			lowestFlotDelta, $imgContainer, $placeHolder,
			$wetChartContainer, htmlPlaceHolder, figurehtml,
			cellValue, datacolgroupfound, dataGroup, header,
			i, iLength, j, jLength, parsedData, rIndex, currVectorOptions,
			currentRowGroup, reverseTblParsing, dataGroupVector,
			currentDataGroupVector, dataCell, previousDataCell, currDataVector,
			pieQuaterFlotSeries, optionFlot, optionsCharts, globalOptions,
			defaultsOptions = {

				// Flot Global Options
				flot: {
					prefix: "wb-charts-",
					defaults: {
						colors: wb.drawColours,
						canvas: true,
						xaxis: {
							ticks: { }
						}
					},
					line: { },
					area: {
						lines: {
							show: true,
							fill: true
						}
					},
					bar: {
						bars: {
							show: true,
							barWidth: 1,
							align: "center"
						}
					},
					pie: {
						series: {
							pie: {
								show: true
							}
						},
						fn: {
							"/series/pie/label/formatter": function( label, series ) {
								var textlabel;
								if ( !optionsCharts.decimal ) {
									textlabel = Math.round( series.percent );
								} else {
									textlabel = Math.round( series.percent * Math.pow( 10, optionsCharts.decimal ) );
									textlabel = textlabel / Math.pow( 10, optionsCharts.decimal );
								}

								if ( optionsCharts.nolegend ) {

									// Add the series label
									textlabel = label + "<br />" + textlabel;
								}
								return textlabel + "%";
							}
						}
					},
					donut: {
						base: "pie",
						series: {
							pie: {
								radius: 1,
								label: {
									show: true,
									radius: 1,
									threshold: 0.08
								},
								tilt: 0.5,
								innerRadius: 0.45,
								startAngle: 1
							}
						},
						grid: {
							hoverable: true
						}
					},
					slicelegend: {
						base: "pie",
						series: {
							pie: {
								radius: 1,
								label: {
									radius: 1,
									show: true,
									threshold: 0.05
								},
								combine: {
									threshold: 0.05,
									color: "#555",
									label: i18nText.slicelegend
								}
							}
						},
						fn: {
							"/series/pie/label/formatter": function( label ) {
								return label;
							}
						}
					}
				},

				// Flot Series Options
				series: {
					prefix: "wb-charts-",
					defaults: { },
					line: { },
					area: {
						lines: {
							show: true,
							fill: true
						}
					},
					bar: {
						bars: {
							show: true,
							barWidth: 1,
							align: "center"
						}
					},
					stacked: {
						base: "bar"
					}
				},

				// Wet-boew Charts Options
				charts: {
					prefix: "wb-charts-",
					defaults: {

						// [string] Class name added at the figure element container
						graphclass: "wb-graph",

						// [boolean] Wrap or not the table in a details/summary elements
						noencapsulation: false,

						// [number] false means the deepest vector will be used for labelling
						labelposition: false,

						// [number] false means the deepest vector will be used for calculate the reference
						referencevalue: false,

						// [boolean] false means to move the legend from inside the charts to next to it
						legendinline: false,

						// [boolean] true means that the legend will be destroyed and the label for pie chart will include the legend
						nolegend: false,

						// [number] Literal number of displayed decimal for a pie charts
						decimal: 0,

						// [number] Provide a default width for the charts that will be rendered
						width: $elm.width(),

						// [number] Provide a default height for the charts that will be rendered
						height: $elm.height(),

						// [boolean] Flag for defining if the data table should be read in reverse compared to HTML spec
						reversettblparsing: false,
						fn: {
							"/getcellvalue": function( elem ) {

								// Get the number from the data cell, #3267
								var cellValue = $.trim( elem.dataset.wbChartsValue || $( elem ).text() );
								return [
									parseFloat( cellValue.replace( /(\d{1,3}(?:(?: |,)\d{3})*)(?:(?:.|,)(\d{1,2}))?$/, function( a, b, c ) {
										return b.replace( / |,/g, "" ) + "." + c || "0";
									} ), 10 ),
									cellValue.match( dataCellUnitRegExp )
								];
							}
						}
					},
					donut: {
						decimal: 1
					}
				}
			};

		/**
		 * A little function to overwrite and add preset into the default options
		 *
		 * @method overwriteDefaultsOptions
		 * @param {string} scopekey - Key that represent the subject of the setting, [flot, charts, series,...]
		 * @param {json object} target - DefaultOptions that will be overwritten
		 * @param {json object} object - User defined object for overwriting options
		 * @return {json object} - Return the new object
		 */
		function overwriteDefaultsOptions( scopekey, target, object ) {
			var cachedObj, key;

			cachedObj = object[ scopekey ];
			if ( !cachedObj ) {
				return target;
			}
			for ( key in cachedObj ) {
				if ( !Object.prototype.hasOwnProperty.call( cachedObj, key ) ) {
					continue;
				}
				target[ scopekey ][ key ] = cachedObj[ key ];
			}
			return target;
		}

		// User defined options
		if ( !window.chartsGraphOpts ) {
			globalOptions = window[ componentName ];

			// Global setting
			if ( globalOptions ) {
				overwriteDefaultsOptions( "flot", defaultsOptions, globalOptions );
				overwriteDefaultsOptions( "series", defaultsOptions, globalOptions );
				overwriteDefaultsOptions( "charts", defaultsOptions, globalOptions );
			}

			// Save the setting here in a case of a second graphic on the same page
			window.chartsGraphOpts = defaultsOptions;
		}
		defaultsOptions = window.chartsGraphOpts;

		/**
		 * A little function to ease the web editor life
		 *
		 * Apply preset defined by a set of space-separated tokens from a baseline json object and at the same time extend the result by using the HTML5 data attribute
		 *
		 * @method applyPreset
		 * @param {json object} baseline - Base line json object that includes predefined and userdefined preset
		 * @param {jQuery} $elem - Element on which the class attribute will be taken for a set of space-separated tokens
		 * @param {string} attribute - Name of the HTML5 data attribute for extending the object at the end
		 * @return {json object} - Return a new object build from the ```baseline``` or ```baseline.default``` object with the preset applied.
		 */
		function applyPreset( baseline, $elem, attribute ) {

			var config = $.extend( true, {}, baseline.defaults || baseline ),
				fn = $.extend( true, {}, baseline.defaults && baseline.defaults.fn || { } ),
				tokens = $elem.attr( "class" ) || "",
				tblTokens, i, iLength, token, tokenLength,

				// Prefix used in front of the token
				prefix, prefixLength,
				preset, key, tblFn, localKey, currObj;

			if ( tokens.length ) {

				prefix = ( baseline.prefix || "" );
				prefixLength = prefix.length;

				// split the set of space-separated tokens
				tblTokens = tokens.split( " " );

				for ( i = 0, iLength = tblTokens.length; i !== iLength; i += 1 ) {

					// Get the current token
					token = tblTokens[ i ];
					tokenLength = token.length;

					// Remove the token is used
					if ( tokenLength <= prefixLength || token.slice( 0, prefixLength ) !== prefix ) {
						continue;
					}
					token = token.slice( prefixLength, tokenLength );

					preset = baseline[ token ];

					// Apply the preset
					if ( preset ) {
						if ( preset.base ) {

							// Like setting herited from a parent config
							config = $.extend( true, config, baseline[ preset.base ] );
							fn = $.extend( true, fn, baseline[ preset.base ].fn || { } );
						}
						config = $.extend( true, config, preset );
						fn = $.extend( true, fn, preset.fn || { } );
					}
				}
			}

			// Extend the config from the element @data attribute
			config = $.extend( true, config, wb.getData( $elem, attribute ) );

			// Merge and override the function.
			for ( key in fn ) {
				if ( !Object.prototype.hasOwnProperty.call( fn, key ) ) {
					continue;
				}
				tblFn = key.split( "/" );
				currObj = config;
				for ( i = 0, iLength = tblFn.length - 1; i !== iLength; i += 1 ) {
					localKey = tblFn.shift();
					if ( localKey === "" ) {
						continue;
					}
					if ( !currObj[ localKey ] ) {
						currObj[ localKey ] = { };
					}
					currObj = currObj[ localKey ];
				}
				localKey = tblFn.shift();
				currObj[ localKey ] = fn[ key ];
			}
			return config;
		}

		// Apply any preset
		optionFlot = applyPreset( defaultsOptions.flot, $elm, "flot" );

		// Apply any preset
		optionsCharts = applyPreset( defaultsOptions.charts, $elm, componentName );

		// Fix default width and height in case the table is hidden or too small.
		optionsCharts.width = ( optionsCharts.width && optionsCharts.width > 250 ? optionsCharts.width : 250 );
		optionsCharts.height = ( optionsCharts.height && optionsCharts.height > 250 ? optionsCharts.height : 250 );

		/**
		 * @method getColumnGroupHeaderCalculateSteps
		 * @param {object} colGroupHead - Column Group Header Object from the table parser
		 * @param {number} referenceValuePosition - Vector position use as reference for defining the steps, zero based position
		 */
		function getColumnGroupHeaderCalculateSteps( colGroupHead, referenceValuePosition ) {

			// Get the appropriate ticks
			var headerCell, i, iLen,
				calcStep = 1,
				colRefValue, colCurent;

			if ( !colGroupHead ) {

				// There is an error. Possibly the series are missing a header.
				return;
			}

			colRefValue = colGroupHead.col[ referenceValuePosition ];
			colCurent = colGroupHead.col[ 0 ];

			for ( i = 0, iLen = colRefValue.cell.length; i !== iLen; i += 1 ) {

				headerCell = colRefValue.cell[ i ];

				if ( i === 0 || ( i > 0 && colCurent.cell[ i - 1 ].uid !== headerCell.uid ) ) {

					if ( headerCell.rowgroup && headerCell.rowgroup.type === 3 ) {

						// We only process the first column data group
						break;
					}

					if ( headerCell.type === 1 || headerCell.type === 7 ) {
						if ( headerCell.child.length !== 0 ) {
							calcStep = calcStep * groupHeaderCalculateStepsRecursive( headerCell, 1 );
						}
					}
				}
			}

			return calcStep;
		}

		/**
		 * @method getRowGroupHeaderCalculateSteps
		 * @param {object} rowGroupHead - Row Group Header Object from the table parser
		 * @param {number} referenceValuePosition - Vector position use as reference for defining the steps, zero based position
		 * @param {number} dataColgroupStart - Column position where the column data group start
		 */
		function getRowGroupHeaderCalculateSteps( rowGroupHead, referenceValuePosition, dataColgroupStart ) {

			// Find the range of the first data colgroup
			var headerCell, i, iLen,
				calcStep = 1,
				rowRefValueCells = rowGroupHead[ referenceValuePosition ].elem.cells;

			for ( i = 0, iLen = rowRefValueCells.length; i !== iLen; i += 1 ) {

				headerCell = $( rowRefValueCells[ i ] ).data().tblparser;

				if ( headerCell.colgroup && headerCell.colgroup.type === 3 ) {

					// We only process the first column data group
					break;
				}

				if ( headerCell.colpos >= dataColgroupStart && ( headerCell.type === 1 || headerCell.type === 7 ) ) {
					if ( headerCell.child.length !== 0 ) {
						calcStep = calcStep * headerCell.child.length * groupHeaderCalculateStepsRecursive( headerCell, 1 );
					}
				}
			}

			return calcStep;
		}

		/**
		 * @method groupHeaderCalculateStepsRecursive
		 * @param {object} headerCell - Header cell object from the table parser
		 * @param {number} refValue - Reference Value (Dénominateur) of headerCell
		 */
		function groupHeaderCalculateStepsRecursive( headerCell, refValue ) {
			var childLength = headerCell.child.length,
				calcStep = 1,
				kIndex, subRefValue, headerCellChild;

			if ( childLength === 0 ) {
				return calcStep;
			}

			subRefValue = childLength * refValue;

			calcStep = calcStep * subRefValue;

			for ( kIndex = 0; kIndex !== childLength; kIndex += 1 ) {
				headerCellChild = headerCell.child[ kIndex ];
				if ( headerCellChild.child.length !== 0 ) {
					calcStep = calcStep * groupHeaderCalculateStepsRecursive( headerCellChild, subRefValue );
				}
			}
			return calcStep;
		}

		/**
		 * Set the inner step value (divisor) of an header cell and for his child
		 *
		 * @method setInnerStepValues
		 * @param {object} vectorHead - Group Header Object from the table parser
		 * @param {number} headerLevel - Hiearchical Level of heading
		 * @param {number} stepsValue - Step Value for the reference value vector
		 * @param {number} referenceValue - Reference Value Vector ID
		 * @param {number} dataColgroupStart - Column position where the column data group start
		 *
		 */
		function setInnerStepValues( vectorHead, headerLevel, stepsValue, referenceValue, dataColgroupStart ) {
			var i, iLength,
				headerCell,
				cumulativeValue = 0;

			for ( i = 0, iLength = vectorHead.cell.length; i !== iLength; i += 1 ) {
				headerCell = vectorHead.cell[ i ];
				if ( i !== 0 && headerCell.uid === vectorHead.cell[ i - 1 ].uid || ( dataColgroupStart && headerCell.colpos < dataColgroupStart ) ) {
					continue;
				}

				// Only process the first data group
				if ( !reverseTblParsing ) {
					if ( headerCell.colgroup && headerCell.colgroup.type === 3 ) {
						break;
					}
				} else {
					if ( headerCell.rowgroup && headerCell.rowgroup.type === 3 ) {
						break;
					}
				}
				if ( headerCell.child > 0 && headerLevel < referenceValue ) {
					headerCell.flotDelta = stepsValue * headerCell.child.length;
				} else {
					headerCell.flotDelta = stepsValue;
				}
				if ( headerCell.type === 1 || headerCell.type === 7  ) {

					if ( !lowestFlotDelta || headerCell.flotDelta < lowestFlotDelta ) {
						lowestFlotDelta = headerCell.flotDelta;
					}
					headerCell.flotValue = cumulativeValue;

					cumulativeValue = cumulativeValue + stepsValue;

					if ( headerCell.child.length > 0 ) {
						setInnerStepValuesChildRecursive( headerCell, headerLevel, stepsValue, referenceValue );
					}
				}
			}
		}

		/**
		 * Recursize - Set the inner step value (divisor) of an sub header cell
		 *
		 * @method setInnerStepValuesChildRecursive
		 * @param {object} headerCell - Header cell object from the table parser
		 * @param {number} headerLevel - Hiearchical Level of heading
		 * @param {number} stepsValue - Specific Step Value applied for current headerCell
		 * @param {number} referenceValue - Reference Value Vector ID
		 */
		function setInnerStepValuesChildRecursive( headerCell, headerLevel, stepsValue, referenceValue ) {
			var cumulativeValue = 0,

				// Step Values for childs header in headerCell
				flotDelta,
				i, iLength,	currentHeaderCellChild;

			headerLevel += 1;
			cumulativeValue = headerCell.flotValue;
			flotDelta = stepsValue / headerCell.child.length;

			// Use to calculate the largest width for a bar in a bar chart
			if ( !lowestFlotDelta || flotDelta < lowestFlotDelta ) {
				lowestFlotDelta = flotDelta;
			}

			for ( i = 0, iLength = headerCell.child.length; i !== iLength; i += 1 ) {
				currentHeaderCellChild = headerCell.child[ i ];
				if ( headerLevel < referenceValue ) {
					currentHeaderCellChild.flotDelta = flotDelta * currentHeaderCellChild.child.length;
				} else {
					currentHeaderCellChild.flotDelta = flotDelta;
				}
				currentHeaderCellChild.flotValue = cumulativeValue;
				if ( currentHeaderCellChild.child.length > 0 ) {
					setInnerStepValuesChildRecursive( currentHeaderCellChild, headerLevel, flotDelta, referenceValue );
				}
				cumulativeValue = cumulativeValue + flotDelta;
			}
		}

		/**
		 * Set the header cell step value (flotDelta) for vector that regroup more than one reference
		 *
		 * @method setUpperStepValues
		 * @param {object} vectorHead - Group Header Object from the table parser
		 * @param {number} referenceValue - Reference Value Vector ID
		 */
		function setUpperStepValues( vectorHead, referenceValue ) {
			var i, k, m, kLen, mLen,
				cumulativeValue,
				currentCell,
				currentCellChild,
				currentVectorHead;

			// Calculate upper-step for cells that are
			// less precise than the reference value vector
			for ( i = referenceValue - 1; i !== -1; i -= 1 ) {
				currentVectorHead = vectorHead[ i ];

				for ( k = 0, kLen = currentVectorHead.cell.length; k !== kLen; k += 1 ) {
					currentCell = currentVectorHead.cell[ k ];

					if ( currentCell.flotDelta || k > 0 &&
						currentCell.uid === currentVectorHead.cell[ k - 1 ].uid ) {

						continue;
					}

					if ( !( currentCell.type === 1 || currentCell.type === 7 ) ) {
						continue;
					}

					cumulativeValue = 0;
					for ( m = 0, mLen = currentCell.child.length; m !== mLen; m += 1 ) {
						currentCellChild = currentCell.child[ m ];

						cumulativeValue = currentCellChild.flotDelta;
						if ( !currentCell.flotValue ) {
							currentCell.flotValue = currentCellChild.flotValue;
						}
					}
					currentCell.flotDelta = cumulativeValue;
				}
			}
		}

		/**
		 * Get labels for a specific vector
		 *
		 * @method getLabels
		 * @param {object} labelVector - Vector Header Object from the table parser
		 * @param {number} dataColgroupStart - Column position where the column data group start
		 */
		function getLabels( labelVector, dataColgroupStart ) {
			var labels = [],
				i, iLen, currentCell;

			for ( i = 0, iLen = labelVector.cell.length; i !== iLen; i += 1 ) {
				currentCell = labelVector.cell[ i ];

				if ( ( i !== 0 && currentCell.uid === labelVector.cell[ i - 1 ].uid ) ||
						( !( currentCell.type === 1 || currentCell.type === 7 ) ) ||
						( dataColgroupStart && currentCell.colpos < dataColgroupStart ) ) {
					continue;
				}

				labels.push( [ currentCell.flotValue, $( currentCell.elem ).text() ] );
			}
			return labels;
		}

		/**
		 * Get the vector that would be used for labelling x-axis
		 *
		 * @method getlabelsVectorPosition
		 * @param {object[]} arrVectorHeaders - Collection of vector headers
		 */
		function getlabelsVectorPosition( arrVectorHeaders ) {
			var labelPosition = optionsCharts.labelposition;
			return ( !labelPosition || ( labelPosition && labelPosition > arrVectorHeaders.length ) ?
				parsedData.theadRowStack.length : labelPosition ) - 1;
		}

		/**
		 * Get the vertical label and set the appropriate header cell x-axis Value
		 *
		 * @method verticalLabels
		 * @param {object} parsedData - Generic object generated by the table parser
		 */
		function verticalLabels( parsedData ) {

			// Get the appropriate ticks
			var headerlevel = 0,
				labelsVectorPosition, stepsValue, columnReferenceValue;

			if ( !reverseTblParsing || ( reverseTblParsing && optionsCharts.referencevalue === false ) ) {
				columnReferenceValue = parsedData.colgrouphead.col.length;
			} else {
				columnReferenceValue = optionsCharts.referencevalue;
			}

			columnReferenceValue = columnReferenceValue - 1;

			stepsValue = getColumnGroupHeaderCalculateSteps( parsedData.colgrouphead, columnReferenceValue );

			if ( !reverseTblParsing ) {
				labelsVectorPosition = parsedData.colgrouphead.col.length - 1;
			} else {
				labelsVectorPosition = getlabelsVectorPosition( parsedData.colgrouphead.col );
			}

			headerlevel = columnReferenceValue;

			// Calculate inner-step for cells that are more precise than the reference value vector
			setInnerStepValues( parsedData.colgrouphead.col[ columnReferenceValue ], headerlevel, stepsValue, columnReferenceValue );

			// Calculate upper-step for cells that are less precise than the reference value vector
			setUpperStepValues( parsedData.colgrouphead.col, columnReferenceValue );

			// Get the labelling
			return getLabels( parsedData.colgrouphead.col[ labelsVectorPosition ] );
		}

		/**
		 * Get the horizontal label and set the appropriate header cell x-axis Value
		 *
		 * @method horizontalLabels
		 * @param {object} parsedData - Generic object generated by the table parser
		 */
		function horizontalLabels( parsedData ) {

			// Find the range of the first data colgroup
			var dataColgroupStart = -1,
				headerlevel = 0,
				theadRowStack = parsedData.theadRowStack,
				i, iLength, labelsVectorPosition,
				stepsValue, rowReferenceValue;

			if ( !theadRowStack ) {
				return;
			}

			for ( i = 0, iLength = parsedData.colgroup.length; i !== iLength; i += 1 ) {
				if ( parsedData.colgroup[ i ].type === 2 ) {
					dataColgroupStart = parsedData.colgroup[ i ].start;
					break;
				}
			}

			if ( ( !reverseTblParsing && optionsCharts.referencevalue === false ) || reverseTblParsing ) {
				rowReferenceValue = theadRowStack.length;
			} else {
				rowReferenceValue = optionsCharts.referencevalue;
			}

			rowReferenceValue = rowReferenceValue - 1;

			stepsValue = getRowGroupHeaderCalculateSteps( theadRowStack, rowReferenceValue, dataColgroupStart );

			if ( !reverseTblParsing ) {
				labelsVectorPosition = getlabelsVectorPosition( theadRowStack );
			} else {
				labelsVectorPosition = theadRowStack.length - 1;
			}

			headerlevel = rowReferenceValue;

			// Calculate inner-step for cells that are more precise than the reference value vector
			setInnerStepValues( theadRowStack[ rowReferenceValue ], headerlevel, stepsValue, rowReferenceValue, dataColgroupStart );

			// Calculate upper-step for cells that are less precise than the reference value vector
			setUpperStepValues( theadRowStack, rowReferenceValue );

			// Get the labelling
			return getLabels( theadRowStack[ labelsVectorPosition ], dataColgroupStart );

		}

		/**
		 * Wrap the table into a smart details/summary element
		 *
		 * @method wrapTableIntoDetails
		 */
		function wrapTableIntoDetails() {
			var $summary;

			if ( !captionHtml.length ) {
				return;
			}

			$summary = $( "<summary>" + captionHtml + i18nText.tableMention + "</summary>" );
			$elm
				.wrap( "<details></details>" )
				.before( $summary );

			$summary.trigger( "wb-init.wb-details" );
		}

		function createContainer( withDimension ) {
			$elm
				.wrap( "<figure class='" + optionsCharts.graphclass + "'/>" )
				.before(

					// Copy to the inner table caption
					( captionHtml.length ? "<figcaption>" + captionHtml + "</figcaption>" : "" ) +

					// Image Container
					"<div role='img' aria-label='" + captionText + i18nText.tableFollowing + "'" +

					// Add Dimension
					( withDimension ? "style='height:" + optionsCharts.height +
					"px; width:" + optionsCharts.width + "px'" : "" ) + "></div>"
				);

			return $( "div:eq(0)", $elm.parent() );
		}

		// Retrieve the parsed data
		parsedData = $elm.data().tblparser;

		// Reverse table parsing
		reverseTblParsing = optionsCharts.reversettblparsing;

		// first data row group
		currentRowGroup = parsedData.lstrowgroup[ 0 ];

		if ( optionFlot.series && optionFlot.series.pie ) {

			// WET Charts placeholder
			$wetChartContainer = createContainer( false );

			// Flot pie chart placeholder
			htmlPlaceHolder = "<div style='height:" + optionsCharts.height +
				"px; width:" + optionsCharts.width + "px'></div>";

			if ( !reverseTblParsing ) {

				// If normal parsing
				dataGroup = parsedData.colgroup[ 0 ].type === 1 ?
					parsedData.colgroup[ 1 ] :
					parsedData.colgroup[ 0 ];

				rIndex = currentRowGroup.row.length - 1;
			} else {

				// If reverse parsing
				dataGroup = currentRowGroup;
				rIndex = ( parsedData.colgroup[ 0 ].type === 1 ?
					parsedData.colgroup[ 1 ].col.length :
					parsedData.colgroup[ 0 ].col.length ) - 1;
			}

			for ( rIndex; rIndex >= 0; rIndex -= 1 ) {

				dataGroupVector = !reverseTblParsing ? dataGroup.col : dataGroup.row;

				// For each row or column
				for ( i = 0, iLength = dataGroupVector.length; i !== iLength; i += 1 ) {
					dataSeries = [];
					valuePoint = 0;
					currentDataGroupVector = dataGroupVector[ i ];

					// For each cells
					for ( j = 0, jLength = currentDataGroupVector.cell.length; j !== jLength; j += 1 ) {

						dataCell = currentDataGroupVector.cell[ j ];

						// Skip the column if
						if ( reverseTblParsing && dataCell.col.type === 1 ) {
							continue;
						}

						previousDataCell = undefined;
						if ( j !== 0 ) {
							previousDataCell = currentDataGroupVector.cell[ j - 1 ];
						}

						// Verify if the selected cell still in the scope of a data group in his another axes (eg. row/col)
						// Verify if we are still in the same datagroup as the previous data cell
						if ( ( !reverseTblParsing && ( dataCell.row.type !== 2  || ( previousDataCell &&
								previousDataCell.rowgroup.uid !== dataCell.rowgroup.uid ) ) ) ||
								( reverseTblParsing && ( dataCell.col.type !== 2 ) || ( previousDataCell &&
								previousDataCell.col.type !== 1 &&
								previousDataCell.col.groupstruct.uid !== dataCell.col.groupstruct.uid ) ) ) {
							break;
						}

						// Gets the value
						header = !reverseTblParsing ? dataCell.row.header : dataCell.col.header;

						cellValue = optionsCharts.getcellvalue( !reverseTblParsing ?
							currentDataGroupVector.cell[ rIndex ].elem :
							currentDataGroupVector.datacell[ rIndex ].elem );

						dataSeries.push(
							[
								valuePoint,
								typeof cellValue === "object" ?
									cellValue[ 0 ] :
									cellValue
							]
						);

						valuePoint += header[ header.length - 1 ].flotDelta;

						break;
					}

					pieQuaterFlotSeries = { };

					// Get the setting from the associative cell header
					dataCell = !reverseTblParsing ?
						currentDataGroupVector.cell[ rIndex ] :
						currentDataGroupVector.datacell[ rIndex ];
					header = !reverseTblParsing ?
						dataCell.col.header :
						dataCell.row.header;
					header = header[ header.length - 1 ];

					// Apply any preset
					pieQuaterFlotSeries = applyPreset( defaultsOptions.series, $( header.elem ), "flot" );

					// Set the data issue from the table
					pieQuaterFlotSeries.data = dataSeries;
					pieQuaterFlotSeries.label = ( !reverseTblParsing ?
						$( currentDataGroupVector.dataheader[ currentDataGroupVector.dataheader.length - 1 ].elem ).text() :
						$( currentDataGroupVector.header[ currentDataGroupVector.header.length - 1 ].elem ).text() );

					// Add the series
					allSeries.push( pieQuaterFlotSeries );
				}

				// Create a sub Figure or use the main one
				if ( currentRowGroup.row.length === 1 &&
					( currentRowGroup.row[ 0 ].header[ 0 ].elem.innerHTML === captionHtml ||
					currentRowGroup.row[ 0 ].header.length === 0 ) ) {

					$placeHolder = $wetChartContainer;
					$placeHolder.css( {
						height: optionsCharts.height,
						width: optionsCharts.width
					} );

				} else {

					header = !reverseTblParsing ? dataCell.row.header : dataCell.col.header;

					figurehtml = "<figure><figcaption>" +
						header[ header.length - 1 ].elem.innerHTML +
						"</figcaption>" + htmlPlaceHolder + "</figure>";

					$wetChartContainer.append( $( figurehtml ) );

					$placeHolder = $( "div:last()", $wetChartContainer );
				}

				// Create the graphic
				$.plot( $placeHolder, allSeries, optionFlot );

				if ( !optionsCharts.legendinline ) {

					// Move the legend under the graphic
					$( ".legend", $placeHolder ).appendTo( $wetChartContainer );
				}

				allSeries = [];
			}

			if ( optionsCharts.nolegend ) {

				// Remove the legend
				$( ".legend", $wetChartContainer ).remove();
			}
			if ( !optionsCharts.legendinline ) {

				// Fix the legend that appear under the graphic
				$( ".legend > div", $wetChartContainer ).remove();
				$( ".legend > table", $wetChartContainer ).removeAttr( "style" ).addClass( "font-small" );
				$( ".legend", $placeHolder ).appendTo( $imgContainer );
			}

			// Remove any "pieLabel" ids set by the flotPie.js plugin at line #457
			$( ".pieLabel" ).removeAttr( "id" );

			if ( !optionsCharts.noencapsulation ) {
				wrapTableIntoDetails();
			}

			return;
		}

		if ( !reverseTblParsing ) {

			// If normal parsing
			dataGroup = currentRowGroup;
			rIndex = ( parsedData.colgroup[ 0 ].type === 1 ?
				parsedData.colgroup[ 1 ].col.length :
				parsedData.colgroup[ 0 ].col.length ) - 1;
			chartslabels = horizontalLabels( parsedData );
		} else {

			// If reverse parsing
			dataGroup = parsedData.colgroup[ 0 ].type === 1 ?
				parsedData.colgroup[ 1 ] :
				parsedData.colgroup[ 0 ];
			rIndex = currentRowGroup.row.length - 1;
			chartslabels = verticalLabels( parsedData );
		}

		// Add the labels at the Flot options
		optionFlot.xaxis.ticks = chartslabels;

		dataGroupVector = !reverseTblParsing ? dataGroup.row : dataGroup.col;

		// Count the number of bar charts,
		for ( i = 0, iLength = dataGroupVector.length; i !== iLength; i += 1 ) {
			currentDataGroupVector = dataGroupVector[ i ];
			currDataVector = currentDataGroupVector.header[ currentDataGroupVector.header.length - 1 ];

			// Apply any preset
			currVectorOptions = applyPreset( defaultsOptions.series, $( currDataVector.elem ), "flot" );

			if ( currVectorOptions.bars || ( optionFlot.bars && !currVectorOptions.lines ) ) {

				// Count number of bars, this number is use to calculate the bar width.
				nbBarChart += 1;

				// Set a default setting specially for bar charts
				if ( !currVectorOptions.bars ) {
					currVectorOptions.bars = { show: true, barWidth: 0.9 };
				}

				// Set a default order for orderBars flot plugin
				if ( !currVectorOptions.bars.order ) {
					currVectorOptions.bars.order = nbBarChart;
				}
			}

			// cache the compiled setting
			currDataVector.chartOption = currVectorOptions;
		}

		// First rowgroup assume is a data row group.
		// For all row....
		for ( i = 0, iLength = dataGroupVector.length; i !== iLength; i += 1 ) {
			dataSeries = [];
			datacolgroupfound = 0;
			valuePoint = 0;
			currDataVector = dataGroupVector[ i ];

			currVectorOptions = currDataVector.header[ currDataVector.header.length - 1 ].chartOption;

			// For each cells
			for ( j = 0, jLength = currDataVector.cell.length; j !== jLength; j += 1 ) {

				dataCell = currDataVector.cell[ j ];

				if ( datacolgroupfound > 1 && dataCell.col.groupstruct.type !== 2 ) {
					break;
				}

				if ( ( !reverseTblParsing && dataCell.col.groupstruct.type === 2 ) ||
						( reverseTblParsing && dataCell.row.rowgroup.type === 2 ) ) {

					// Gets the value
					header = !reverseTblParsing ? dataCell.col.header : dataCell.row.header;

					cellValue = optionsCharts.getcellvalue( dataCell.elem );

					// Add the data point
					dataSeries.push(
						[
							valuePoint,
							typeof cellValue === "object" ?
								cellValue[ 0 ] :
								cellValue
						]
					);
					valuePoint += header[ header.length - 1 ].flotDelta;
					datacolgroupfound += 1;
				}
			}

			currVectorOptions.data = dataSeries;
			currVectorOptions.label = $( currDataVector.header[ currDataVector.header.length - 1 ].elem ).text();

			if ( currVectorOptions.bars ) {

				// Adjust the bars width
				currVectorOptions.bars.barWidth = currVectorOptions.bars.barWidth * ( 1 / nbBarChart );
			}

			allSeries.push( currVectorOptions );

		}

		if ( optionFlot.bars ) {

			// Adjust the bars width
			optionFlot.bars.barWidth = optionFlot.bars.barWidth * ( 1 / nbBarChart );
		}

		// WET Charts Placeholder
		$placeHolder = createContainer( true );

		// Maximum width
		$placeHolder.css( "width", "100%" );

		// Create the graphic
		$.plot( $placeHolder, allSeries, optionFlot );

		if ( !optionsCharts.legendinline ) {

			// Move the legend under the graphic
			$( ".legend > div", $placeHolder ).remove();
			$( ".legend > table", $placeHolder ).removeAttr( "style" ).addClass( "font-small" );
			$placeHolder.css( "height", "auto" );
		}
		if ( optionsCharts.nolegend ) {

			// Remove the legend
			$( ".legend", $placeHolder ).remove();
		}

		if ( !optionsCharts.noencapsulation ) {
			wrapTableIntoDetails();
		}

		$( "canvas:eq(1)", $placeHolder ).css( "position", "static" );
		$( "canvas:eq(0)", $placeHolder ).css( "width", "100%" );

		$elm.trigger( "wb-updated" + selector );
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered this handler
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			settings = window[ componentName ],
			elmId, modeJS, deps;

		if ( elm ) {
			elmId = elm.id;
			modeJS = wb.getMode() + ".js";
			deps = [
				"site!deps/jquery.flot" + modeJS,
				"site!deps/jquery.flot.pie" + modeJS,
				"site!deps/jquery.flot.canvas" + modeJS,
				"site!deps/jquery.flot.orderBars" + modeJS,
				"site!deps/tableparser" + modeJS
			];

			//TODO: Revist this in the new plugin structure
			if ( settings && settings.plugins ) {
				deps = deps.concat( settings.plugins );
			}

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					tableMention: i18n( "hyphen" ) + i18n( "tbl-txt" ),
					tableFollowing: i18n( "hyphen" ) + i18n( "tbl-dtls" ),
					slicelegend: i18n( "chrt-cmbslc" )
				};
			}

			// Load the required dependencies
			Modernizr.load( {

				// For loading multiple dependencies
				load: deps,
				complete: function() {
					var $elm = $( "#" + elmId );

					// Let's parse the table
					$elm.trigger( tableParsingEvent );

					// Identify that initialization has completed
					wb.ready( $elm, componentName );
				}
			} );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent + " " + tableParsingCompleteEvent, selector, function( event ) {
	var eventType = event.type,
		elm = event.target;

	switch ( eventType ) {

	/*
	 * Init
	 */
	case "timerpoke":
	case "wb-init":
		init( event );
		break;

	/*
	 * Data table parsed
	 */
	case "parsecomplete":
		if ( event.currentTarget === elm ) {
			createCharts( $( elm ) );
		}
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

} )( jQuery, window, document, wb );

/**
 * @title WET-BOEW Collapsible alerts plugin
 * @overview Collapsible alerts (details/summary)
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET community
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the event - meaning that they will be initialized once per page,
 * not once per instance of event on the page.
 */
var componentName = "wb-collapsible",
	selector = "details.alert",
	initEvent = "wb-init." + componentName,
	$document = wb.doc,
	key,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var details = wb.init( event, componentName, selector ),
			$details;

		if ( details ) {
			$details = $( details );

			key = "alert-collapsible-state-" + details.getAttribute( "id" );

			try {
				if ( localStorage.getItem( key ) ) {

					// Set open/closed state for existing localStorage keys
					if ( localStorage.getItem( key ) === "open" ) {
						details.setAttribute( "open", "open" );
						details.className += " open";
					} else if ( localStorage.getItem( key ) === "closed" ) {
						details.removeAttribute( "open" );
						details.className = details.className.replace( " open", "" );
					}

				} else {

					// Set new localStorage values
					if ( details.hasAttribute( "open" ) ) {
						localStorage.setItem( key, "open" );
					} else {
						localStorage.setItem( key, "closed" );
					}

				}
			} catch ( e ) {
				/* swallow error */}

			// Identify that initialization has completed
			wb.ready( $details, componentName );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Do not bind events if details polyfill is active
if ( Modernizr.details ) {

	// Bind the the event handlers of the plugin
	$document.on( "click keydown toggle." + componentName, selector + " summary", function( event ) {
		var which = event.which,
			currentTarget = event.currentTarget,
			isClosed,
			details;

		// Ignore middle/right mouse buttons and wb-toggle enhanced summary elements (except for toggle)
		if ( ( !which || which === 1 ) &&
			( currentTarget.className.indexOf( "wb-toggle" ) === -1 ||
			( event.type === "toggle" && event.namespace === componentName ) ) ) {

			details = currentTarget.parentNode;
			isClosed = details.getAttribute( "open" ) === null;
			key = "alert-collapsible-state-" + details.getAttribute( "id" );

			if ( isClosed ) {
				try {
					localStorage.setItem( key, "open" );
				} catch ( e ) {
					/* swallow error */}
			} else {
				try {
					localStorage.setItem( key, "closed" );
				} catch ( e ) {
					/* swallow error */}
			}
		} else if ( which === 13 || which === 32 ) {
			event.preventDefault();
			$( currentTarget ).trigger( "click" );
		}

		/*
		 * Since we are working with events we want to ensure that we are being passive about our control,
		 * so returning true allows for events to always continue
		 */
		return true;
	} );
}

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Country Content
 * @overview A basic AjaxLoader wrapper that inserts AJAXed in content based on a visitors country as resolved by freegeoip.app
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @nschonni
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once
 * per page, not once per instance of plugin on the page. So, this is a good
 * place to define variables that are common to all instances of the plugin on a
 * page.
 */
var componentName = "wb-ctrycnt",
	selector = "[data-ctrycnt]",
	initEvent = "wb-init." + componentName,
	$document = wb.doc,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered this handler
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm, url;

		if ( elm ) {
			$elm = $( elm );
			url = $elm.data( "ctrycnt" );

			$.when( getCountry() ).then( function( countryCode ) {

				if ( countryCode === "" ) {

					// Leave default content since we couldn't find the country
					return;
				} else {

					// @TODO: Handle bad country values or any whitelist of countries.
				}

				url = url.replace( "{country}", countryCode.toLowerCase() );

				$elm.load( url, function() {

					// Identify that initialization has completed
					wb.ready( $elm, componentName );
				} );
			} );
		}
	},
	getCountry = function() {
		var dfd = $.Deferred(),
			countryCode = localStorage.getItem( "countryCode" );

		// Couldn"t find a value in the session
		if ( countryCode === null ) {

			// From https://github.com/aFarkas/webshim/blob/master/src/shims/geolocation.js#L89-L127
			$.ajax( {
				url: "https://api.country.is/",
				dataType: "json",
				cache: true,
				success: function( data ) {
					if ( data ) {
						countryCode = data.country;
						try {
							localStorage.setItem( "countryCode", countryCode );
						} catch ( error ) {

							/* swallow error */
						}
					}

					dfd.resolve( countryCode );
				},
				error: function() {
					dfd.reject( "" );
				}
			} );
		} else {
			dfd.resolve( countryCode );
		}

		return dfd.promise();
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Data Ajax [data-ajax-after], [data-ajax-append],
 * [data-ajax-before], [data-ajax-prepend] and [data-ajax-replace]
 * @overview A basic AjaxLoader wrapper that inserts AJAXed-in content
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET Community
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once
 * per page, not once per instance of plugin on the page. So, this is a good
 * place to define variables that are common to all instances of the plugin on a
 * page.
 */
var componentName = "wb-data-ajax",
	shortName = "wb-ajax",
	selectors = [
		"[data-ajax-after]",
		"[data-ajax-append]",
		"[data-ajax-before]",
		"[data-ajax-prepend]",
		"[data-ajax-replace]",
		"[data-" + shortName + "]"
	],
	ajaxTypes = [
		"before",
		"replace",
		"after",
		"append",
		"prepend"
	],
	selectorsLength = selectors.length,
	selector = selectors.join( "," ),
	initEvent = "wb-init." + componentName,
	updateEvent = "wb-update." + componentName,
	contentUpdatedEvent = "wb-contentupdated",
	$document = wb.doc,
	s,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered this handler
	 * @param {string} ajaxType The type of AJAX operation, either after, append, before or replace
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var ajxInfo = getAjxInfo( event.target ),
			ajaxType = ajxInfo.type,
			elm = wb.init( event, componentName + "-" + ajaxType, selector );

		if ( elm && ajxInfo.url ) {

			ajax.call( this, event, ajxInfo );

			// Identify that initialization has completed
			wb.ready( $( elm ), componentName, [ ajaxType ] );
		}
	},

	ajax = function( event, ajxInfo ) {
		var elm = event.target,
			$elm = $( elm ),
			settings = window[ componentName ],
			url,
			fetchObj,
			urlParts;

		if ( !ajxInfo ) {
			ajxInfo = getAjxInfo( elm );
		}
		url = ajxInfo.url;
		fetchObj = {
			url: url,
			nocache: ajxInfo.nocache,
			nocachekey: ajxInfo.nocachekey
		};

		// Detect CORS requests
		if ( settings && ( url.substr( 0, 4 ) === "http" || url.substr( 0, 2 ) === "//" ) ) {
			urlParts = wb.getUrlParts( url );
			if ( ( wb.pageUrlParts.protocol !== urlParts.protocol || wb.pageUrlParts.host !== urlParts.host ) && ( !Modernizr.cors || settings.forceCorsFallback ) ) {
				if ( typeof settings.corsFallback === "function" ) {
					fetchObj.dataType = "jsonp";
					fetchObj.jsonp = "callback";
					fetchObj = settings.corsFallback( fetchObj );
				}
			}
		}

		$elm.trigger( {
			type: "ajax-fetch.wb",
			fetch: fetchObj
		} );
	},

	// Get Info and return { "url": "the/ajax/URL", "atype" }
	getAjxInfo = function( elm ) {
		var ajaxType,
			len = ajaxTypes.length,
			i, url, dtAttr, nocache, nocachekey;

		for ( i = 0; i !== len; i += 1 ) {
			ajaxType = ajaxTypes[ i ];
			url = elm.getAttribute( "data-ajax-" + ajaxType );
			if ( url ) {
				break;
			}
		}

		if ( !url ) {
			dtAttr = wb.getData( $( elm ), shortName );

			// Abort the init when called on an invalid element (related to #8058)
			if ( !dtAttr ) {
				return {};
			}

			ajaxType = dtAttr.type;
			if ( ajaxTypes.indexOf( ajaxType ) === -1 ) {
				throw "Invalid ajax type";
			}

			url = getURL( dtAttr.url, dtAttr.httpref );
			if ( !url ) {
				return { "type": ajaxType };
			}

			nocache = dtAttr.nocache;
			nocachekey = dtAttr.nocachekey;
		}

		return {
			"url": url,
			"type": ajaxType,
			"nocache": nocache,
			"nocachekey": nocachekey
		};
	},

	// Return url for conditional display if regexp match http refer
	getURL = function( url, referer ) {
		var refers, httpRef, regHttpRef,
			i, i_len;

		if ( referer ) {
			if ( !$.isArray( referer ) ) {
				refers = [];
				refers.push( referer );
			} else {
				refers = referer;
			}

			httpRef = window.document.referrer;
			i_len = refers.length;
			for ( i = 0; i !== i_len; i += 1 ) {
				regHttpRef = new RegExp( refers[ i ] );
				if ( regHttpRef.test( httpRef ) ) {
					if ( $.isArray( url ) && url.length === i_len ) {
						return url[ i ];
					} else {
						return url;
					}
				}
			}
		} else {
			return url;
		}
		return "";
	},

	ajxFetched = function( elm, fetchObj ) {
		var $elm = $( elm ),
			ajxInfo = getAjxInfo( elm ),
			ajaxType = ajxInfo.type,
			content, jQueryCaching,
			settings = wb.getData( $( elm ), shortName ) || {},
			doEncode = settings.encode,
			hasSelector = fetchObj.hasSelector;

		// ajax-fetched event
		content = fetchObj.response;
		if ( content &&  content.length > 0 ) {

			// If the fetched content need to be encoded
			if ( doEncode && hasSelector ) {
				content = content.html().replaceAll( "<", "&lt;" );
			} else if ( doEncode && !hasSelector ) {
				content = fetchObj.xhr.responseText.replaceAll( "<", "&lt;" );
			}

			//Prevents the force caching of nested resources
			jQueryCaching = jQuery.ajaxSettings.cache;
			jQuery.ajaxSettings.cache = true;

			// "replace" is the only event that doesn't map to a jQuery function
			if ( ajaxType === "replace" ) {
				$elm.html( content );
			} else {
				$elm[ ajaxType ]( content );
			}

			//Resets the initial jQuery caching setting
			jQuery.ajaxSettings.cache = jQueryCaching;

			$elm.trigger( contentUpdatedEvent, { "ajax-type": ajaxType, "content": content } );
		}
	};

$document.on( "timerpoke.wb " + initEvent + " " + updateEvent + " ajax-fetched.wb", selector, function( event ) {
	var eventTarget = event.target;

	switch ( event.type ) {

	case "timerpoke":
	case "wb-init":
		init( event );
		break;
	case "wb-update":
		ajax( event );
		break;
	default:

		// Filter out any events triggered by descendants
		if ( event.currentTarget === eventTarget ) {
			ajxFetched( eventTarget, event.fetch );
		}
	}

	/*
	 * Since we are working with events we want to ensure that we are being
	 * passive about our control, so returning true allows for events to always
	 * continue
	 */
	return true;
} );

// Re-run WET for elements that have just been loaded if WET is already done initializing
$document.on( contentUpdatedEvent, function( event ) {
	if ( !wb.isDisabled ) {
		let updtElm = event.target;

		$( updtElm )
			.find( wb.allSelectors )
			.addClass( "wb-init" )
			.filter( ":not(#" + updtElm.id + " .wb-init .wb-init)" )
			.trigger( "timerpoke.wb" );
	}
} );

// Add the timerpoke to initialize the plugin
for ( s = 0; s !== selectorsLength; s += 1 ) {
	wb.add( selectors[ s ] );
}

} )( jQuery, window, wb );

/**
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @title Data Fusion Query
 * @overview Map a query parameter value into an input value
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 *
 */
( function( document, $, wb ) {
"use strict";

/**
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-data-fusion-query",
	selector = "[data-fusion-query][name]",
	initEvent = "wb-init." + componentName,


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
			inputName,
			queryParamValue;

		if ( elm ) {
			$elm = $( elm );

			// Retrieve the query parameter value and set it on the input
			inputName = $elm.attr( "name" );
			queryParamValue = wb.pageUrlParts.params[ inputName ];
			if ( queryParamValue ) {
				$elm.val( queryParamValue.replace( /\+/g, " " ) );
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	};

// Bind the init event of the plugin
wb.doc.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( document, jQuery, wb );

/**
 * @title WET-BOEW Data InView
 * @overview A simplified data-attribute driven plugin that responds to moving in and out of the viewport.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET Community
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-inview",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	scrollEvent = "scroll" + selector,
	$document = wb.doc,
	$window = wb.win,
	$elms = $(),

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered this handler
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {
			$elm = $( elm );
			$elms = $elms.add( $elm );

			// Allow other plugins to run first
			setTimeout( function() {
				onInView( $elm );

				// Identify that initialization has completed
				wb.ready( $elm, componentName );
			}, 1 );
		}
	},

	/**
	 * @method onInView
	 * @param {jQuery DOM element} $elm The plugin element
	 */
	onInView = function( $elm ) {
		var elementWidth = $elm.outerWidth(),
			elementHeight = $elm.outerHeight(),
			scrollTop = $window.scrollTop(),
			scrollBottom = scrollTop + $window.height(),
			scrollRight = $window.scrollLeft() + elementWidth,
			x1 = $elm.offset().left,
			x2 = x1 + elementWidth,
			y1 = $elm.offset().top,
			y2 = y1 + elementHeight,
			oldViewState = $elm.attr( "data-inviewstate" ),
			inView = ( scrollBottom < y1 || scrollTop > y2 ) || ( scrollRight < x1 || scrollRight > x2 ),

			// this is a bit of a play on true/false to get the desired effect. In short this variable depicts
			// the view state of the element
			// all - the whole element is in the viewport
			// partial - part of the element is in the viewport
			// none - no part of the element is in the viewport
			viewState = ( scrollBottom > y2 && scrollTop < y1 ) ? "all" : inView ? "none" : "partial",
			$dataInView = $( "#" + $elm.attr( "data-inview" ) ),
			show;

		// Remove any element that no longer exists in the DOM
		if ( elementWidth === 0 || elementHeight === 0 ) {
			$elms = $elms.not( $elm );
			$dataInView.addClass( "user-closed" );
			$dataInView.trigger( {
				type: ( "close" ),
				namespace: "wb-overlay",
				noFocus: true
			} );

			return;
		}

		// Link the overlay close button to the dismiss action if the inview content is dismissable
		if ( $elm.hasClass( "wb-dismissable" ) ) {
			if ( $dataInView.hasClass( "wb-overlay" ) ) {
				$dataInView.children( ".overlay-close" ).on( "click", function( event ) {
					var which = event.which;

					// Ignore middle/right mouse buttons
					if ( !which || which === 1 ) {
						$elm.parent().siblings( ".content-dismiss" ).trigger( "click" );
					}
				} );
			}
		}

		// Only if the view state has changed
		if ( viewState !== oldViewState ) {

			// Show on "partial"/"none" (default) or just "none" (requires "show-none" class)
			show = inView || ( $elm.hasClass( "show-none" ) ? false : viewState === "partial" );

			$elm.attr( "data-inviewstate", viewState );

			if ( $dataInView.length !== 0 ) {

				// Keep closed if the user closed the inView result
				if ( !$dataInView.hasClass( "user-closed" ) ) {
					if ( $dataInView.hasClass( "wb-overlay" ) ) {
						if ( !oldViewState ) {
							$dataInView.addClass( "outside-off" );
						}
						$dataInView.trigger( {
							type: ( show ? "open" : "close" ),
							namespace: "wb-overlay",
							noFocus: true
						} );
					} else {
						if ( !$dataInView.attr( "data-hasPlayed" ) ) {
							$dataInView.toggleClass( "in", !show );
							if ( !$dataInView.hasClass( "in-only" ) ) {
								$dataInView.toggleClass( "out", show );
							}
						}
						if ( wb.isReady && viewState === "all" && $dataInView.hasClass( "in-only" ) ) {
							$dataInView.attr( "data-hasPlayed", "true" );
						}
					}
				}
			}

			// Trigger an event on the element identifying that the view state has changed
			// (e.g., "all.wb-inview", "partial.wb-inview", "none.wb-inview")
			$elm.trigger( viewState + selector );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent + " " + scrollEvent, selector, function( event ) {
	var eventTarget = event.target,
		eventType = event.type;

	switch ( eventType ) {
	case "timerpoke":
	case "wb-init":
		init( event );
		break;

	case "scroll":

		// Filter out any events triggered by descendants
		if ( event.currentTarget === eventTarget ) {
			onInView( $( eventTarget ) );
		}
		break;
	}

	/*
	 * Since we are working with events we want to ensure that we are being passive about our control,
	 * so returning true allows for events to always continue
	 */
	return true;
} );

$window.on( "scroll scrollstop", function() {
	$elms.trigger( scrollEvent );
} );

$document.on( "txt-rsz.wb win-rsz-width.wb win-rsz-height.wb", function() {
	$elms.trigger( scrollEvent );
} );

$document.on( "refresh.wb", function() {
	$elms.each( function() {
		onInView( $( this ) );
	} );
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Data Picture
 * @overview Event driven port of the Picturefill library: https://github.com/scottjehl/picturefill
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var imgClass,
	componentName = "wb-pic",
	selector = "[data-pic]",
	initEvent = "wb-init." + componentName,
	picturefillEvent = "picfill." + componentName,
	$document = wb.doc,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered this handler
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {
			$elm = $( elm );

			// Store the class attribute of the plugin element.  It
			// will be added to the image created by the plugin.
			imgClass = $elm.data( "class" ) || "";

			$elm.trigger( picturefillEvent );

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	},

	/**
	 * Updates the image displayed according to media queries.
	 * This is the logic ported from Picturefill.
	 * @method picturefill
	 * @param {DOM element} elm The element containing the images to be updated
	 */
	picturefill = function( elm ) {
		var matches = [],
			img = elm.getElementsByTagName( "img" )[ 0 ],
			sources = elm.getElementsByTagName( "span" ),
			i, len, matchedElm, media;

		// Loop over the data-media elements and find matching media queries
		for ( i = 0, len = sources.length; i !== len; i += 1 ) {
			media = sources[ i ].getAttribute( "data-media" );
			if ( !media || Modernizr.mq( media ) ) {
				matches.push( sources[ i ] );
			}
		}

		// If a media query match was found, add the image to the page
		if ( matches.length !== 0 ) {
			matchedElm = matches.pop();
			if ( !img ) {
				img = $document[ 0 ].createElement( "img" );
				img.alt = elm.getAttribute( "data-alt" );
				img.className = imgClass;
			}
			img.src = matchedElm.getAttribute( "data-src" );
			matchedElm.appendChild( img );

		// No match and an image exists: delete it
		} else if ( img ) {
			img.parentNode.removeChild( img );
		}

		// Identify that the picture has been updated
		$( elm ).trigger( "wb-updated." + componentName );
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent + " " + picturefillEvent, selector, function( event ) {
	var eventTarget = event.target,
		eventType = event.type;

	switch ( eventType ) {
	case "timerpoke":
	case "wb-init":
		init( event );
		break;

	case "picfill":

		// Filter out any events triggered by descendants
		if ( event.currentTarget === eventTarget ) {
			picturefill( eventTarget );
		}
		break;
	}
} );

// Handles window resize so images can be updated as new media queries match
$document.on( "txt-rsz.wb win-rsz-width.wb win-rsz-height.wb", function() {
	$( selector ).trigger( picturefillEvent );
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Details closed on small screen
 * @overview Closes details on defined viewport and down if they were not engaged, default is small
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @thomasgohard
 */
( function( $, wb ) {
"use strict";

/*
* Variable and function definitions.
* These are global to the plugin - meaning that they will be initialized once per page,
* not once per instance of plugin on the page. So, this is a good place to define
* variables that are common to all instances of the plugin on a page.
*/
var componentName = "wb-details-close",
	selector = ".provisional." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	views = [ "xxs", "xs", "sm", "md", "lg", "xl" ],
	viewsClass = [ "xxsmallview", "xsmallview", "smallview", "mediumview", "largeview", "xlargeview" ],
	breakpoint,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm, i;

		if ( elm ) {
			$elm = $( elm );

			// Get the plugin JSON configuration set on attribute data-wb-details-close
			// Will define one set settings for all .wb-details-close on the page
			breakpoint = $elm.data( "breakpoint" ) || "sm";

			// reset breakpoint if config is passed
			if ( views.length === viewsClass.length ) {
				i = views.indexOf( breakpoint );
				viewsClass = viewsClass.slice( 0, i + 1 );
			}

			hideOnBreakpoint();

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	},

	/**
	 * Toggle details depending on breakpoint
	 * @method hideOnBreakpoint
	 * @param {jQuery DOM element | jQuery Event} $elm Element targetted by this plugin, which is the details
	 */
	hideOnBreakpoint = function() {
		var $elm = $( selector ),
			viewsSelector = "html." + viewsClass.join( ", html." );

		// If within the targetted views, keep details closed
		if ( $( viewsSelector ).length ) {
			$elm.removeAttr( "open" );
		} else {

			// If not, keep opened
			$elm.attr( "open", "" );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, wb );

/**
 * @title WET-BOEW Dismissable content plugin
 * @overview Enables content to be dismissed
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @thomasgohard
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the event - meaning that they will be initialized once per page,
 * not once per instance of event on the page.
 */
var componentName = "wb-dismissable",
	selector = "." + componentName,
	initEvent = "wb-init." + componentName,
	containerClass = "wb-dismissable-container",
	wrapperClass = "wb-dismissable-wrapper",
	dismissClass = "content-dismiss",
	idKey = "dismissable-item-id",
	$document = wb.doc,
	i18n, i18nText,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			itemId, dismissedState, contentContainer, contentWrapper, dismissButton;

		if ( elm ) {

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					dismiss: i18n( "dismiss" )
				};
			}

			// Give the dismissable element a unique ID
			if ( elm.hasAttribute( "id" ) ) {
				itemId = elm.getAttribute( "id" );

				// Ignore an ID assigned by wb
				if ( itemId.indexOf( "wb-auto-" ) === 0 ) {
					itemId = undefined;
				}
			}
			if ( itemId === undefined ) {
				itemId = wb.hashString( wb.stripWhitespace( elm.innerHTML ) );
			}

			dismissedState = getDismissedState( itemId );

			if ( dismissedState === "true" ) {

				// Remove the element if it has been dismissed
				if ( elm.parentNode ) {
					elm.parentNode.removeChild( elm );
				}
			} else {
				$( elm ).wrap( "<div class='" + wrapperClass + "'>" );
				contentWrapper = elm.parentNode;

				$( contentWrapper ).wrap( "<div class='" + containerClass + "'>" );
				contentContainer = contentWrapper.parentNode;

				dismissButton = "<button type='button' class='mfp-close " + dismissClass +
					"' title='" + i18nText.dismiss + "'>&#xd7;<span class='wb-inv'> " +
					i18nText.dismiss + "</span></button>";
				$( contentContainer ).append( dismissButton );

				contentContainer.setAttribute( "data-" + idKey, itemId );
			}

			// Identify that initialization has completed
			wb.ready( $document, componentName );
		}
	},

	getDismissedState = function( id ) {
		var dismissState = localStorage.getItem( id );

		if ( dismissState === null ) {
			return false;
		}

		return dismissState;
	},

	dismissContent = function( elm ) {
		localStorage.setItem( elm.getAttribute( "data-" + idKey ), true );
		elm.parentNode.removeChild( elm );
		$document.trigger( "refresh.wb" );
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Handler for clicking on the dismiss button
$document.on( "click", "." + dismissClass, function( event ) {
	var elm = event.currentTarget,
		which = event.which;

	// Ignore middle/right mouse buttons
	if ( !which || which === 1 ) {
		dismissContent( elm.parentNode );
	}
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title eqht
 * @overview Provide ability to have equal height containers and nested containers inside a WET-BOEW grid
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @luc-bertrand-hrsdc
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-eqht-grd",
	selector = "." + componentName + " .eqht-trgt",
	initEvent = "wb-init" + selector,
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
			$elm,
			$eqhtParents;

		if ( elm ) {
			$elm = $( elm );
			$elm.addClass( "hght-inhrt" );
			$eqhtParents = $elm.parentsUntil( "[class*='" + componentName + "']" );
			$eqhtParents.addClass( "hght-inhrt" );

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Responsive equal height
 * @overview Sets the same height for all elements in a container that are rendered on the same baseline (row). Adapted from https://codepen.io/micahgodbolt/pen/FgqLc.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @thomasgohard
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-eqht",
	selector = "." + componentName,
	$document = wb.doc,
	eventTimerpoke = "timerpoke.wb",
	initEvent = "wb-init" + selector,
	vAlignCSS = "vertical-align",
	vAlignDefault = "top",
	contentUpdatedEvent = "wb-contentupdated",
	minHeightCSS = "min-height",
	minHeightDefault = "0",
	cssValueSeparator = ":",
	cssPropertySeparator = ";",
	regexCSSValue = " ?[^;]+",
	regexVAlign = new RegExp( vAlignCSS + cssValueSeparator + " ?" + regexCSSValue + cssPropertySeparator + "?", "i" ),
	regexMinHeight = new RegExp( minHeightCSS + cssValueSeparator + " ?" + regexCSSValue + cssPropertySeparator + "?", "i" ),

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

			// Remove the event handler since only want init fired once per page (not per element)
			$document.off( eventTimerpoke, selector );

			onResize();

			// Identify that initialization has completed
			wb.ready( $document, componentName );
		}
	},

	/**
	 * Re-equalise any time the window/document or a child element of 'selector' is resized.
	 * @method onResize
	 */
	onResize = function() {
		var $elm, $children, $anchor, currentChild, childCSS, i, j,
			$elms = $( selector ),
			row = [],
			rowTop = -1,
			currentChildTop = -1,
			currentChildHeight = -1,
			tallestHeight = -1;

		for ( i = $elms.length - 1; i !== -1; i -= 1 ) {
			$elm = $elms.eq( i );
			$children = $elm.find( ".eqht-trgt" );
			if ( !$children.length ) {
				$children = $elm.children();
			}

			// Reinitialize the row at the beginning of each section of equal height
			row = [];

			$anchor = detachElement( $elm );
			for ( j = $children.length - 1; j !== -1; j -= 1 ) {
				currentChild = $children[ j ];
				childCSS = currentChild.style.cssText.toLowerCase();

				//Ensure the CSS string ends by a seperator
				if ( childCSS.length > 0 && childCSS.substr( childCSS.length - 1 ) !== cssPropertySeparator ) {
					childCSS += cssPropertySeparator;
				}

				// Ensure all children that are on the same baseline have the same 'top' value.
				if ( childCSS.indexOf( vAlignCSS ) !== -1 ) {
					childCSS = childCSS.replace( regexVAlign, vAlignCSS + cssValueSeparator + vAlignDefault + cssPropertySeparator );
				} else {
					childCSS += " " + vAlignCSS + cssValueSeparator + vAlignDefault + cssPropertySeparator;
				}

				// Remove any previously set min height
				if ( childCSS.indexOf( minHeightCSS ) !== -1 ) {
					childCSS = childCSS.replace( regexMinHeight, minHeightCSS + cssValueSeparator + minHeightDefault + cssPropertySeparator );
				} else {
					childCSS += " " + minHeightCSS + cssValueSeparator + minHeightDefault + cssPropertySeparator;
				}

				currentChild.style.cssText = childCSS;
				$children.eq( j ).data( minHeightCSS, minHeightDefault );
			}
			$elm = reattachElement( $anchor );

			// set the top offset and tallest height to the first element
			rowTop = $children[ 0 ] ? $children[ 0 ].getBoundingClientRect().top + window.pageYOffset : 0;
			tallestHeight = $children[ 0 ] ? $children[ 0 ].offsetHeight : 0;

			// first, the loop MUST be from start to end to work.
			for ( j = 0; j < $children.length; j++ ) {
				currentChild = $children[ j ];

				currentChildTop = currentChild.getBoundingClientRect().top + window.pageYOffset;
				currentChildHeight = currentChild.offsetHeight;

				// if the current element is visible...
				// note: hidden elements need to be excluded since they have a different top offset than visible ones
				if ( currentChildHeight ) {

					// as soon as we find an element not on this row (not the same top offset)...
					if ( currentChildTop !== rowTop ) {

						// we need to equalize each item in that row to align the next row
						equalize( row, tallestHeight );

						// since the elements of the previous row was equalized
						// we need to get the new top offset of the current element
						currentChildTop = currentChild.getBoundingClientRect().top + window.pageYOffset;

						// reset the row, rowTop and tallestHeight
						row.length = 0;
						rowTop = currentChildTop;
						tallestHeight = currentChildHeight;
					}

					tallestHeight = Math.max( currentChildHeight, tallestHeight );
					row.push( $children.eq( j ) );
				}
			}

			// equalize the last row
			equalize( row, tallestHeight );

			// Identify that the height equalization was updated
			$document.trigger( "wb-updated" + selector );
		}
	},

	/**
	* @method equalize
	* @param {array} row the array of items to be equalized
	* @param {int} tallestHeight the talest height to use to equalize
	*/
	equalize = function( row, tallestHeight ) {
		for ( var i = 0; i < row.length; i++ ) {

			// added a +1 because some floated element got stuck if the
			// shortest element was the last element in the row
			var minHeight = tallestHeight + 1;
			row[ i ][ 0 ].style.minHeight = minHeight + "px";
		}
	},

	/**
	 * @method detachElement
	 * @param {jQuery object} $elm The element to detach
	 * @returns {object} The detached element
	 */
	detachElement = function( $elm ) {
		var $prev = $elm.prev(),
			$next = $elm.next(),
			$parent = $elm.parent();

		if ( $prev.length ) {
			$elm.data( { anchor: $prev, anchorRel: "prev" } );
		} else if ( $next.length ) {
			$elm.data( { anchor: $next, anchorRel: "next" } );
		} else if ( $parent.length ) {
			$elm.data( { anchor: $parent, anchorRel: "parent" } );
		}

		return $elm.detach();
	},

	/**
	 * @method reattachElement
	 * @param {jQuery object} $elm The element to reattach
	 * @returns {object} The reattached element
	 */
	reattachElement = function( $elm ) {
		var $anchor = $elm.data( "anchor" ),
			anchorRel = $elm.data( "anchorRel" );

		switch ( anchorRel ) {
		case "prev":
			$anchor.after( $elm );
			break;
		case "next":
			$anchor.before( $elm );
			break;
		case "parent":
			$anchor.append( $elm );
			break;
		}

		return $elm;
	};

// Bind the init event of the plugin
$document.on( eventTimerpoke + " " + initEvent, selector, init );

// Handle text and window resizing
$document.on( "txt-rsz.wb win-rsz-width.wb win-rsz-height.wb " + contentUpdatedEvent + " wb-updated.wb-tables wb-update" + selector, onResize );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
* @title WET-BOEW Exit script plugin
* @overview Plugin redirects users to non secure site
* @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
* @author @ipaksc
*/
( function( $, window, wb, crypto ) {
"use strict";
var componentName = "wb-exitscript",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	exiturlparam = componentName + "-urlparam",
	keyForKeyHolder = componentName + "key",
	moDalId = componentName + "-modal",
	i18n,
	i18nDict = {
		en: {
			"msgboxHeader": "Warning",
			"exitMsg": "You are about to leave a secure site, do you wish to continue?",
			"targetWarning": "The link will open in a new browser window.",
			"yesBtn": "Yes",
			"cancelBtn": "Cancel"

		},
		fr: {
			"msgboxHeader": "Avertissement",
			"exitMsg": "Vous êtes sur le point de quitter un site sécurisé. Voulez-vous continuer?",
			"targetWarning": "Le lien s'ouvrira dans une nouvelle fenêtre de navigateur.",
			"yesBtn": "Oui",
			"cancelBtn": "Annuler"

		}
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {
		var elm = wb.init( event, componentName, selector ),
			settings,
			queryString = window.location.search,
			urlParams = new URLSearchParams( queryString ),
			counterInUrl = wb.string.fromHexString( urlParams.get( "exturl" ) ),
			encryptedUrl = localStorage.getItem( componentName ),
			jwt = JSON.parse( localStorage.getItem( keyForKeyHolder ) ),
			$elm;
		if ( elm ) {
			$elm = $( elm );
			settings = $.extend(
				true,
				window[ componentName ],
				wb.getData( $elm, componentName )

			);

			$elm.data( componentName, settings );

			if ( settings.url && crypto ) {

				crypto.subtle.generateKey(
					{
						name: "AES-CTR",
						length: 256
					},
					true,
					[ "encrypt", "decrypt" ]
				).then( function( keyToEncryp ) {

					var enc, messageEncoded, counter;

					// Save the key in the anchor
					crypto.subtle.exportKey( "jwk", keyToEncryp )
						.then( function( exportedJwtKey ) {
							elm[ keyForKeyHolder ] = exportedJwtKey;
						} );

					// Encrypt the URL
					enc = new TextEncoder();
					messageEncoded = enc.encode( elm.href );
					counter = crypto.getRandomValues( new Uint8Array( 16 ) );
					crypto.subtle.encrypt(
						{
							name: "AES-CTR",
							counter: counter,
							length: 64
						},
						keyToEncryp,
						messageEncoded
					).then( function( ciphertext ) {
						elm[ componentName ] = ciphertext;
					} );

					// Change the link URL by passing the counter as a key
					$elm.attr( "href", settings.url + "?exturl=" + wb.string.toHexString( counter ) );
				} );

			}

			i18n = i18nDict[ wb.lang || "en" ];

			// This conditional statement for a middle static exit page, to retrieve the URL to the non-secure site.
			if ( $elm.hasClass( exiturlparam ) && encryptedUrl !== null && jwt !== null ) {

				crypto.subtle.importKey(
					"jwk",
					jwt,
					{
						name: "AES-CTR",
						length: 256
					},
					true,
					[ "decrypt" ]
				).then( function( key ) {

					crypto.subtle.decrypt(
						{
							name: "AES-CTR",
							counter: counterInUrl,
							length: 64
						},
						key,
						wb.string.base64ToArrayBuffer( encryptedUrl )
					).then( function( decrypted ) {

						var dec = new TextDecoder(),
							urlToRedirect = dec.decode( decrypted );

						// Check if the decrypted message is an valid URL and silently fail if the pattern don't match
						if ( urlToRedirect.match( /^(http|https):\/\//g ) ) {
							elm.outerHTML = "<a href='" + urlToRedirect + "'>" + urlToRedirect + "</a>";
						}

					} );
				} );

			}

			// Remove the plugin data and ensure it is removed from the localstorage
			localStorage.removeItem( componentName );
			localStorage.removeItem( keyForKeyHolder );

			wb.ready( $elm, componentName );
		}
	};

$document.on( "click", selector, function( event ) {

	var elm = event.currentTarget,
		$elm = $( elm ),
		wrapper,
		targetAttribute = "",
		moDal = document.createDocumentFragment(),
		tpl = document.createElement( "div" ),
		settings =  $elm.data( componentName ),
		msgboxHeader = i18n.msgboxHeader,
		yesBtn = i18n.yesBtn,
		cancelBtn = i18n.cancelBtn,
		exitMsg = i18n.exitMsg,
		targetWarning = i18n.targetWarning;

	if ( settings.i18n ) {
		msgboxHeader =  settings.i18n.msgboxHeader || i18n.msgboxHeader;
		yesBtn = settings.i18n.yesBtn || i18n.yesBtn;
		cancelBtn = settings.i18n.cancelBtn || i18n.cancelBtn;
		exitMsg = settings.i18n.exitMsg || i18n.exitMsg;
		targetWarning = settings.i18n.targetWarning || i18n.targetWarning;
	}

	if ( !settings.url ) {

		event.preventDefault();
	}

	if ( this.hasAttribute( "target" ) ) {
		targetAttribute = "target='" + this.getAttribute( "target" ) + "'";
	} else {
		targetAttribute = "target='" + targetAttribute + "'";
	}

	if ( this.getAttribute( "target" ) === "_blank" ) {
		exitMsg = exitMsg  + " " + targetWarning;
	}

	if ( document.getElementById( moDalId ) ) {
		document.getElementById( moDalId ).remove();

	}

	if ( !settings.url ) {
		tpl.innerHTML = "<section id='" + moDalId + "' " + "class='mfp-hide modal-dialog modal-content overlay-def'>" +
			"<header class='modal-header'><h2 class='modal-title'>" + msgboxHeader + "</h2></header>" +
			"<div class='modal-body'>" +
			"<p>" + exitMsg + "</p>" +
			"</div>" +
			"<div class='modal-footer'>" +
			"<ul class='list-inline text-center'>" +
			"<li><a class='btn btn-default pull-right popup-modal-dismiss'" + targetAttribute + " href='" + this.getAttribute( "href" ) + "'>" + yesBtn + "</a></li>" +
			"<li><button class='btn btn-primary popup-modal-dismiss pull-left'>" + cancelBtn + "</button></li>" +
			"</ul></div></section>";
		moDal.appendChild( tpl );
		wrapper = moDal.firstChild;
		wrapper = wrapper.firstChild;
		document.body.appendChild( wrapper );

		$( wrapper ).trigger( "open.wb-lbx", [
			[ {
				src: "#" + moDalId,
				type: "inline"
			} ],

			true

		] );

	} else if ( crypto && this[ componentName ] ) {

		// Save to localstorage, the plugin init will ensure this data is only used once
		localStorage.setItem( componentName, wb.string.arrayBufferToBase64( this[ componentName ] ) );
		localStorage.setItem( keyForKeyHolder, JSON.stringify( this[ keyForKeyHolder ] ) );
	}

} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb, crypto );

/**
* @title WET-BOEW Facebook embedded page
* @overview Helps with implementing Facebook embedded pages.
* @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
* @author @pjackson28
*/
( function( $, window, wb ) {
"use strict";

/*
* Variable and function definitions.
* These are global to the plugin - meaning that they will be initialized once per page,
* not once per instance of plugin on the page. So, this is a good place to define
* variables that are common to all instances of the plugin on a page.
*/
var componentName = "wb-facebook",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	fbinited = false,

	/**
	* @method init
	* @param {jQuery Event} event Event that triggered the function call
	*/
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var ele = wb.init( event, componentName, selector ),
			protocol = wb.pageUrlParts.protocol;

		if ( ele ) {
			Modernizr.load(
				{
					load: [ ( protocol.indexOf( "http" ) === -1 ? "http:" : protocol ) + "//connect.facebook.net/" + wb.lang + "_US/sdk.js" ],
					complete: function() {
						if ( !fbinited ) {
							window.FB.init( {
								version: "v2.4"
							} );
							fbinited = true;
						}

						window.FB.XFBML.parse( ele[ 0 ] );
						wb.ready( $( ele ), componentName );
					}
				}
			);
		}
	};

$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Favicon Plugin
 * @overview Provides the ability to add and update a page's favicons
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 *
 * This plugin provides the ability to add and update the favicon's on a web page. Its default behaviour is to add a mobile favicon to web pages that have a favicon defined by a `<link rel='icon'>` element.
 *
 * The mobile favicon's file name, rel, path and sizes can be set with data attributes on the `<link rel='icon'/>`:
 *
 * -**data-filename:** filename of the mobile favicon (defaults to "favicon-mobile.png"). This will be appended to the favicon's path.
 * -**data-path:** path to the mobile favicon (defaults to using the same path as the shortcut icon).
 * -**data-rel:** rel attribute of the mobile favicon (defaults to "apple-touch-icon").
 * -**data-sizes:** sizes attribute of the mobile favicon (defaults to "57x57 72x72 114x114 144x144 150x150").
 *
 * For example, the following overides the rel and file name attributes of the mobile favicon:
 *
 *     <link href="favion.ico" rel='icon' data-rel="apple-touch-icon-precomposed" data-filename="my-mobile-favicon.ico"/>
 */
( function( $, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-favicon",
	selector = "link[rel='icon']",
	initEvent = "wb-init." + componentName,
	updatedEvent = "wb-updated." + componentName,
	mobileEvent = "mobile." + componentName,
	iconEvent = "icon." + componentName,
	$document = wb.doc,

	/*
	 * Plugin users can override these defaults by setting attributes on the html elements that the
	 * selector matches.
	 * For example, adding the attribute data-option1="false", will override option1 for that plugin instance.
	 */
	defaults = {
		filename: "favicon-mobile.png",
		path: null,
		rel: "apple-touch-icon",
		sizes: "57x57 72x72 114x114 144x144 150x150"
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector, true ),
			$favicon, settings;

		if ( elm ) {
			$favicon = $( elm );

			// Merge default settings with overrides from the selected plugin element.
			settings = $.extend( {}, defaults, $favicon.data() );

			$favicon.trigger( mobileEvent, settings );

			// Identify that initialization has completed
			wb.ready( $document, componentName );
		}
	},

	/**
	 * Adds, or updates, the mobile favicon on a page. Mobile favicons are identified by the
	 * `apple` prefix in the `<link>` elements rel attribute.
	 * @method mobile
	 * @param {DOM element} favicon Favicon element
	 * @param {jQuery Event} event Event that triggered this handler
	 * @param {Object} data Key-value data object passed with the event
	 */
	mobile = function( favicon, event, data ) {
		var faviconPath,
			faviconMobile = $( "link[rel^='apple']" ),
			isFaviconMobile = faviconMobile.length !== 0;

		// Create the mobile favicon if it doesn't exist
		if ( !isFaviconMobile ) {
			var lnk = document.createElement( "link" );
			lnk.setAttribute( "rel", data.rel  );
			lnk.setAttribute( "sizes", data.sizes );
			lnk.setAttribute( "class", componentName );

			document.head.appendChild( lnk );

			faviconMobile = $( lnk );
		}

		// Only add/update a mobile favicon that was created by the plugin
		if ( faviconMobile.hasClass( componentName ) ) {
			faviconPath = data.path !== null ? data.path : getPath( favicon.getAttribute( "href" ) );
			faviconMobile.attr( "href", faviconPath + data.filename );

			if ( !isFaviconMobile ) {
				favicon.parentNode.insertBefore( faviconMobile[ 0 ], favicon );
			}
		}

		$document.trigger( updatedEvent, [ "mobile" ] );
	},

	/**
	 * Updates the the page's shortcut icon
	 * @method icon
	 * @param {DOM element} favicon Favicon element
	 * @param {jQuery Event} event Event that triggered this handler
	 * @param {Object} data Key-value data object passed with the event
	 */
	icon = function( favicon, event, data ) {
		var faviconPath = data.path !== null ? data.path : getPath( favicon.getAttribute( "href" ) );
		favicon.setAttribute( "href", faviconPath + data.filename );

		$document.trigger( updatedEvent, [ "icon" ] );
	},

	/**
	 * Given a full file path, returns the path without the filename
	 * @method getPath
	 * @param {string} filepath The full path to file, including filename
	 * @returns {string} The path to the file
	 */
	getPath = function( filepath ) {
		return filepath.substring( 0, filepath.lastIndexOf( "/" ) + 1 );
	};

// Bind the init event
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Bind the mobile and icon events
$document.on( mobileEvent + " " + iconEvent, selector, function( event, data ) {
	var eventTarget = event.target;

	// Filter out any events triggered by descendants
	if ( event.currentTarget === eventTarget ) {
		switch ( event.type ) {
		case "mobile":
			mobile( eventTarget, event, data );
			break;

		case "icon":
			icon( eventTarget, event, data );
			break;
		}
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

/**
 * @title WET-BOEW Feeds
 * @overview Aggregates and displays entries from one or more Web feeds.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, window, wb, undef ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-feeds",
	selector = "." + componentName,
	feedLinkSelector = "li > a",
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	patt = /\\u([\d\w]{4})/g,

	/**
	 * @object Templates
	 * @properties {function}
	 * @param {object} requires a entry object of various ATOM based properties
	 * @returns {string} modified string with appropiate markup/format for a entry object
	 */
	Templates = {

		/**
		 * [fickr template]
		 * @param  {entry object} data
		 * @return {string}	HTML string for creating a photowall effect
		 */
		flickr: function( data ) {
			var media = data.media.m,
				flickrData = {
					title: data.title,
					thumbnail: media.replace( "_m.", "_s." ),
					image: media.replace( "_m", "" ),
					description: data.description.replace( /^\s*<p>(.*?)<\/p>\s*<p>(.*?)<\/p>/i, "" )
				};

			// due to CORS we cannot default to simple ajax pulls of the image. We have to inline the content box
			return "<li><a class='feed-flickr' href='#' data-flickr='" +
				wb.escapeAttribute( JSON.stringify( flickrData ) ) + "'><img src='" + flickrData.thumbnail + "' alt='" +
				wb.escapeAttribute( flickrData.title ) + "' title='" + wb.escapeAttribute( flickrData.title ) +
				"' class='img-responsive'/></a></li>";
		},

		/**
		 * [Youtube template]
		 * @param  {entry object} data
		 * @return {string}	HTML string for creating a photowall effect
		 */
		youtube: function( data ) {
			var youtubeDate = {
				title: data.title,
				videoId: data.id
			};

			// Due to CORS we cannot default to simple ajax pulls of the image. We have to inline the content box
			return "<li class='col-md-4 col-sm-6'><button class='btn btn-lnk feed-youtube' data-youtube='" +
				wb.escapeAttribute( JSON.stringify( youtubeDate ) ) + "'><img src='" +
				wb.pageUrlParts.protocol + "//img.youtube.com/vi/" + youtubeDate.videoId + "/mqdefault.jpg' alt='" +
				wb.escapeAttribute( youtubeDate.title ) + "' title='" + wb.escapeAttribute( youtubeDate.title ) +
				"' class='img-responsive' /></button></li>";
		},

		/**
		 * [pinterest template]
		 * @param  {entry object}    data
		 * @return {string}    HTML string of formatted using a simple list / anchor view
		 */
		pinterest: function( data ) {
			var content = fromCharCode( data.description ).replace( /<a href="\/pin[^"]*"><img ([^>]*)><\/a>([^<]*)(<a .*)?/, "<a href='" +
				data.link + "'><img alt='' class='center-block' $1><br/>$2</a>$3" );
			return "<li class='media'>" + content +
			( data.publishedDate !== "" ? " <small class='small feeds-date'><time>" +
			wb.date.toDateISO( data.publishedDate, true ) + "</time></small>" : "" ) + "</li>";
		},

		/**
		 * [generic template]
		 * @param  {entry object}	data
		 * @return {string}	HTML string of formatted using a simple list / anchor view
		 */
		generic: function( data ) {
			var title = data.title;

			if ( typeof( title ) === "object" ) {
				if ( title.content ) {
					title = title.content;
				} else if ( title.type === "xhtml" && title.div ) {
					title = title.div.content;
				}
			}
			return "<li><a href='" + data.link + "'>" + title + "</a><br />" +
				( data.publishedDate !== "" ? " <small class='feeds-date'><time>" +
				wb.date.toDateISO( data.publishedDate, true ) + "</time></small>" : "" ) + "</li>";
		}
	},

	/**
	 * Helper function that returns the string representaion of a unicode character
	 * @method decode
	 * @param  {regex} match  unicode pattern
	 * @param  {string} code  string where unicode is needed to be converted
	 * @return {string}	unicode string character
	 */
	decode = function( match, code ) {
		return String.fromCharCode( parseInt( code, 16 ) );
	},

	/**
	 * Helper wrapper function that performs unicode decodes on a string
	 * @method fromCharCode
	 * @param  {string} s string to sanitize with escaped unicode characters
	 * @return {string}	sanitized string
	 */
	fromCharCode = function( s ) {
		return s.replace( patt, decode );
	},

	/**
	 * Helper function that returns a class-based set limit on plugin instances
	 * @method getLimit
	 * @param {DOM object} elm The element to search for a class of the form limit-5
	 * @return {number} 0 if none found, which means the plugin default
	 */
	getLimit = function( elm ) {
		var count = elm.className.match( /\blimit-\d+/ );
		if ( !count ) {
			return 0;
		}
		return Number( count[ 0 ].replace( /limit-/i, "" ) );
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
			fetch, url, $content, limit, feeds, fType, last, i, callback, fElem, fIcon, youtubeData, $elm;
		if ( elm ) {
			$elm = $( elm );
			$content = $elm.find( ".feeds-cont" );
			limit = getLimit( elm );
			feeds = $content.find( feedLinkSelector );
			last = feeds.length - 1;

			// Lets bind some variables to the node to ensure safe ajax thread counting

			$content.data( "toProcess", feeds.length )
				.data( "feedLimit", limit )
				.data( "entries", [] );

			for ( i = last; i !== -1; i -= 1 ) {
				fElem = feeds.eq( i );
				fIcon = fElem.find( "> img" );

				fetch = {
					dataType: "jsonp",
					timeout: 10000
				};

				if ( fElem.attr( "data-ajax" ) ) {

					if ( fElem.attr( "href" ).indexOf( "flickr" ) !== -1 ) {
						fType =  "flickr";
						callback = "jsoncallback";
						$content.data( componentName + "-postProcess", [ ".wb-lbx" ] );
					} else {
						fType = "generic";
						callback = false;
						fetch.dataType = "json";
					}

					// We need a Gallery so lets add another plugin
					// #TODO: Lightbox review for more abstraction we should not have to add a wb.add() for overlaying
					fetch.url = fElem.attr( "data-ajax" );
					fetch.jsonp = callback;
				} else if ( fElem.attr( "data-youtube" ) ) {
					youtubeData = wb.getData( fElem, "youtube" );

					$content.data( componentName + "-postProcess", [ ".wb-lbx", ".wb-mltmd" ] );

					if ( youtubeData.playlist ) {
						fElem.trigger( {
							type: "data-ready.wb-feeds",
							feedsData: youtubeData.playlist
						}, {
							feedType: "youtube",
							_content: $content
						} );
					}

				} else {

					url = fElem.attr( "href" );
					fetch.dataType = "xml";
					fetch.url = url;

					// Let's bind the template to the Entries
					if ( url.indexOf( "pinterest.com" ) > -1  ) {
						fType = "pinterest";
					} else {
						fType = "generic";
					}
				}

				fetch.jsonp = callback;

				fetch.context = {
					fIcon: ( fIcon.length !== 0 ) ? fIcon.attr( "src" ) : "",
					feedType: fType,
					_content: $content
				};

				fElem.trigger( {
					type: "ajax-fetch.wb",
					fetch: fetch
				} );
			}
		}
	},

	/**
	 * Process Feed/JSON Entries for CORS Enabled
	 * @method corsEntry
	 */
	corsEntry = function( xmlDoc, limit ) {
		var entries = xmlDoc.getElementsByTagName( "entry" ).length,
			arr_entry = [],
			corsObj = {},
			jsonString = JSON.stringify( xmlToJson( xmlDoc ) ),
			jsonObj = JSON.parse( jsonString ),
			i, iCache;
		if ( limit > entries || limit === 0 || limit === null ) {
			limit = entries;
		}
		if ( entries === 1 ) {
			iCache = jsonObj.feed.entry;
			corsObj = {
				title: iCache.title[ "#text" ],
				link: ( iCache.link ? iCache.link[ "@attributes" ].href : iCache.id[ "#text" ] ),
				updated: iCache.updated[ "#text" ]
			};
			arr_entry.push( corsObj );
		} else if ( entries ) {
			for ( i = 0; i < limit; i++ ) {
				iCache = jsonObj.feed.entry[ i ];
				corsObj = {
					title: iCache.title[ "#text" ],
					link: ( iCache.link ? iCache.link[ "@attributes" ].href : iCache.id[ "#text" ] ),
					updated: iCache.updated[ "#text" ]
				};
				arr_entry.push( corsObj );
			}
		}
		return arr_entry;
	},

	/**
	 * Process XML to JSON
	 * @method xmlToJson
	 * @param  {xml}
	 */
	xmlToJson = function( xml ) {

		var obj = {},
			i, iCache, nodeName, old,
			xmlAttributes, xmlChildNodes,
			xmlNodeType = xml.nodeType;

		if ( xmlNodeType === 1 ) {
			xmlAttributes = xml.attributes;
			if ( xmlAttributes.length ) {
				obj[ "@attributes" ] = {};
				for ( i = 0; i < xmlAttributes.length; i++ ) {
					iCache = xmlAttributes.item( i );
					obj[ "@attributes" ][ iCache.nodeName ] = iCache.nodeValue;
				}
			}
		} else if ( xmlNodeType === 3 ) {
			obj = xml.nodeValue;
		}

		if ( xml.hasChildNodes() ) {
			xmlChildNodes = xml.childNodes;
			for ( i = 0; i < xmlChildNodes.length; i++ ) {
				iCache = xmlChildNodes.item( i );
				nodeName = iCache.nodeName;
				if ( typeof( obj[ nodeName ] ) === "undefined" ) {
					obj[ nodeName ] = xmlToJson( iCache );
				} else {
					if ( typeof( obj[ nodeName ].push ) === "undefined" ) {
						old = obj[ nodeName ];
						obj[ nodeName ] = [];
						obj[ nodeName ].push( old );
					}
					obj[ nodeName ].push( xmlToJson( iCache ) );
				}
			}
		}
		return obj;
	},

	/**
	 * Process Feed/JSON Entries
	 * @method processEntries
	 * @param  {data} JSON formatted data to process
	 * @return {string} of HTML output
	 */
	processEntries = function( data ) {
		var items = data,
			entries = [],
			icon = this.fIcon,
			$content = this._content,
			toProcess = $content.data( "toProcess" ),
			i, len;

		len = items.length;
		for ( i = 0; i !== len; i += 1 ) {
			items[ i ].fIcon =  icon;

			if ( items[ i ].publishedDate === undef ) {
				items[ i ].publishedDate = ( items[ i ].published || items[ i ].pubDate || items[ i ].updated || "" );
			}

			var link = items[ i ].link;

			if ( link && link.href ) {
				items[ i ].link = link.href;
			}

			entries.push( items[ i ] );
		}

		// lets merge with latest entries
		entries = $.merge( entries, $content.data( "entries" ) );

		if ( toProcess === 1 ) {
			parseEntries( entries, $content.data( "feedLimit" ), $content, this.feedType );
			return 0;
		}

		toProcess -= 1;
		$content.data( {
			"toProcess": toProcess,
			"entries": entries
		} );

		return toProcess;
	},

	/**
	 * Parses the results from a JSON request and appends to an element
	 * @method parseEntries
	 * @param {object} entries Results from a JSON request.
	 * @param {integer} limit Limit on the number of results to append to the element.
	 * @param {jQuery DOM element} $elm Element to which the elements will be appended.
	 * @return {url} The URL for the JSON request
	 */
	parseEntries = function( entries, limit, $elm, feedtype ) {
		var cap = ( limit > 0 && limit < entries.length ? limit : entries.length ),
			result = "",
			compare = wb.date.compare,
			$details = $elm.closest( "details" ),
			activate = true,
			feedContSelector = ".feeds-cont",
			hasVisibilityHandler = "vis-handler",
			i, sorted, sortedEntry, $tabs;

		if ( feedtype !== "youtube" ) {
			sorted = entries.sort( function( a, b ) {
				return compare( b.publishedDate, a.publishedDate );
			} );
		} else {
			sorted = entries;
		}

		for ( i = 0; i !== cap; i += 1 ) {
			sortedEntry = sorted[ i ];
			result += Templates[ feedtype ]( sortedEntry );
		}
		$elm.data( componentName + "-result", result );

		// Check to see if feed should be activated (only if visible)
		// and add handler to determine visibility
		if ( $details.length !== 0 ) {
			if ( $details.attr( "role" ) === "tabpanel" ) {
				if ( $details.attr( "aria-hidden" ) === "true" ) {
					activate = false;
					$elm.empty().addClass( "waiting" );
					$tabs = $details.closest( ".wb-tabs" );
					if ( !$tabs.hasClass( hasVisibilityHandler ) ) {
						$tabs
							.on( "wb-updated.wb-tabs", function( event, $newPanel ) {
								var $feedCont = $newPanel.find( feedContSelector );
								if ( !$feedCont.hasClass( "feed-active" ) ) {
									activateFeed( $feedCont );
								}
							} )
							.addClass( hasVisibilityHandler );
					}
				}
			} else if ( !$details.attr( "open" ) ) {
				activate = false;
				$elm.empty().addClass( "waiting" );
				$details
					.children( "summary" )
					.on( "click.wb-feeds", function( event ) {
						var $summary = $( event.currentTarget ).off( "click.wb-feeds" );
						activateFeed( $summary.parent().find( feedContSelector ) );
					} );
			}
		}

		if ( activate ) {
			activateFeed( $elm );
		}

		return true;
	},

	/**
	 * Activates feed results view
	 * @method activateFeed
	 * @param = {jQuery object} $elm Feed container
	 */
	activateFeed = function( $elm ) {
		var result = $elm.data( componentName + "-result" ),
			postProcess = $elm.data( componentName + "-postProcess" ),
			i, postProcessSelector;

		if ( !result ) {
			return;
		}

		$elm.empty()
			.removeClass( "waiting" )
			.addClass( "feed-active" )
			.append( result );

		if ( postProcess ) {
			for ( i = postProcess.length - 1; i !== -1; i -= 1 ) {
				postProcessSelector = postProcess[ i ];
				$elm.find( postProcessSelector )
					.trigger( "wb-init" + postProcessSelector );
			}
		}

		// Identify that the feed has now been displayed
		$elm.trigger( "wb-feed-ready" + selector );
	};

$document.on( "ajax-fetched.wb data-ready.wb-feeds", selector + " " + feedLinkSelector, function( event, context ) {
	var eventTarget = event.target,
		data, response, responseRaw,
		$emlRss, limit, results;

	// Filter out any events triggered by descendants
	if ( event.currentTarget === eventTarget ) {
		$emlRss = $( eventTarget ).parentsUntil( selector ).parent();
		switch ( event.type ) {
		case "ajax-fetched":
			responseRaw = event.fetch.response;
			if ( typeof responseRaw === "string" ) {
				response = JSON.parse( responseRaw ); // Assuming we have fetch a JSON document, try to parse it.
			} else {
				response = responseRaw.get( 0 ); // fetched an HTML or XML document which has been parsed by jQuery and sanitized by DomPurify
			}
			if ( response.documentElement ) {
				limit = getLimit( $emlRss[ Object.keys( $emlRss )[ 0 ] ] );
				data = corsEntry( response, limit );
			} else if ( response.query ) {
				results = response.query.results;
				if ( !results ) {
					data = results.item; // Flicker feeds
					if ( !Array.isArray( data ) ) {
						data = [ data ];
					}
				} else {
					data = [];
				}
			} else {
				data = ( response.responseData ) ? response.responseData.feed.entries : response.items || response.feed.entry;
			}
			break;
		default:
			data = event.feedsData;
		}

		// Identify that initialization has completed
		// if there are no entries left to process
		if ( processEntries.apply( context, [ data ] ) === 0 ) {
			wb.ready( $( eventTarget ).closest( selector ), componentName );
		}
	}
} );

$document.on( "click", selector + " .feed-youtube", function( event ) {
	var youTubeOverlaySelector  = "#wb-feeds-youtube-lbx",
		$youTubeOverlay = $( youTubeOverlaySelector ),
		youtubeData = wb.getData( event.currentTarget, "youtube" ),
		videoUrl = wb.pageUrlParts.protocol + "//www.youtube.com/watch?v=" + youtubeData.videoId,
		videoSource = "<figure class='wb-mltmd'><video title='" + youtubeData.title + "'>" +
			"<source type='video/youtube' src='" + videoUrl + "'></source>" +
			"</video><figcaption><p>" +  youtubeData.title + "</p>" +
			"</figcaption></figure>";

	if ( $youTubeOverlay.length === 0 ) {
		$youTubeOverlay = $( "<section id='wb-feeds-youtube-lbx' class='mfp-hide modal-dialog modal-content overlay-def'>" +
			"<header class='modal-header'><h2 class='modal-title'>" + youtubeData.title + "</h2></header>" +
			"<div class='modal-body'>" +
			videoSource +
			"</div></section>" ).insertAfter( "main" );
	} else {

		//Modify lightbox
		$youTubeOverlay.find( ".modal-title" ).text( youtubeData.title );
		$youTubeOverlay.find( ".modal-body" ).empty().append( videoSource );
	}

	//Temporary fix until lightbox auto initialize the multimedia player
	$youTubeOverlay.find( ".wb-mltmd" ).trigger( "wb-init.wb-mltmd" );

	$( document ).trigger( "open.wb-lbx", [ {
		src: youTubeOverlaySelector,
		type: "inline"
	} ] );
} );

$document.on( "click", selector + " .feed-flickr", function( event ) {
	var flickrOverlaySelector  = "#wb-feeds-flick-lbx",
		$flickrOverlay = $( flickrOverlaySelector ),
		flickrData = wb.getData( event.currentTarget, "flickr" ),
		body = "<img src='" + flickrData.image + "' class='thumbnail center-block' alt='" + flickrData.title + "' /><span>" +
			flickrData.description + "</span>";

	if ( $flickrOverlay.length === 0 ) {
		$flickrOverlay = $( "<section id='wb-feeds-flick-lbx' class='mfp-hide modal-dialog modal-content overlay-def'>" +
			"<header class='modal-header'><h2 class='modal-title'>" + flickrData.title + "</h2></header>" +
			"<div class='modal-body'>" + body + "</div></section>" ).insertAfter( "main" );
	} else {

		//Modify lightbox
		$flickrOverlay.find( ".modal-title" ).text( flickrData.title );
		$flickrOverlay.find( ".modal-body" ).empty().append( body );
	}

	$( document ).trigger( "open.wb-lbx", [ {
		src: flickrOverlaySelector,
		type: "inline"
	} ] );
} );

// Bind the init event to the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

( function( $, window, wb ) {
"use strict";

var componentName = "wb-filter",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	filterClass = "wb-fltr-out",
	tagFilterClass = "wb-tgfltr-out",
	notFilterClassSel = ":not(." + filterClass + "):not(." + tagFilterClass + ")",
	inputClass = "wb-fltr-inpt",
	dtNameFltrArea = "wbfltrid",
	selectorInput = "." + inputClass,
	defaults = {
		std: {
			selector: "li"
		},
		grp: {
			selector: "li",
			section: ">section"
		},
		tbl: {
			selector: "tr",
			section: ">tbody"
		},
		tblgrp: {
			selector: " th:not([scope])" + notFilterClassSel,
			hdnparentuntil: "tbody",
			section: ">tbody"
		}
	},
	i18n, i18nText,
	wait,

	init = function( event ) {
		var elm = wb.init( event, componentName, selector ),
			$elm, elmTagName, filterUI, prependUI,
			settings, setDefault,
			itemsObserver,
			inptId, totalEntries,
			secSelector,
			uiTemplate, uiInpt, uiInfo,
			uiNbItems, uiTotal, uiInfoID;

		if ( elm ) {
			$elm = $( elm );
			elmTagName = elm.nodeName;
			uiInfoID = elm.id + "-info";

			if ( [ "DIV", "SECTION", "ARTICLE" ].indexOf( elmTagName ) >= 0 ) {
				setDefault = defaults.grp;
				prependUI = true;
			} else if ( elmTagName === "TABLE" ) {
				if ( $elm.find( "tbody" ).length > 1 ) {
					setDefault = defaults.tblgrp;
				} else {
					setDefault = defaults.tbl;
				}
			} else {
				setDefault = defaults.std;
			}

			settings = $.extend( true, {}, setDefault, window[ componentName ], wb.getData( $elm, componentName ) );
			$elm.data( settings );

			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					filter_label: i18n( "fltr-lbl" ),
					fltr_info: i18n( "fltr-info" )
				};
			}

			Modernizr.addTest( "stringnormalize", "normalize" in String );
			Modernizr.load( {
				test: Modernizr.stringnormalize,
				nope: [
					"site!deps/unorm" + wb.getMode() + ".js"
				]
			} );

			if ( !elm.id ) {
				elm.id = wb.getId();
			}

			if ( settings.uiTemplate ) {
				uiTemplate = document.querySelector( settings.uiTemplate );
				uiInpt = uiTemplate.querySelector( "input[type=search]" );

				if ( uiInpt ) {
					uiInfo = uiTemplate.querySelector( ".wb-fltr-info" );

					uiInpt.classList.add( inputClass );
					uiInpt.setAttribute( "data-" + dtNameFltrArea, elm.id );
					uiInpt.setAttribute( "aria-controls", elm.id );

					if ( uiInfo ) {
						uiInfoID = uiInfo.id || uiInfoID;
						uiInfo.id = uiInfoID;
						uiInfo.setAttribute( "role", "status" );
					}
				} else {
					console.error( componentName + ": " + "an <input type=\"search\"> is required in your UI template." );
				}

				if ( settings.source ) {
					console.warn( componentName + ": " + "the 'source' option is not compatible with the 'uiTemplate' option. If both options are defined, only 'uiTemplate' will be registered." );
				}
			} else {
				inptId = elm.id + "-inpt";
				filterUI = $( "<div class=\"input-group\">" +
					"<label for=\"" + inptId + "\" class=\"input-group-addon\"><span class=\"glyphicon glyphicon-filter\" aria-hidden=\"true\"></span> " + i18nText.filter_label + "</label>" +
					"<input id=\"" + inptId + "\" class=\"form-control " + inputClass + "\" data-" + dtNameFltrArea + "=\"" + elm.id + "\" aria-controls=\"" + elm.id + "\" type=\"search\">" +
					"</div>" +
					"<p role=\"status\" id=\"" + uiInfoID + "\">" + i18nText.fltr_info + "</p>" );

				if ( settings.source ) {
					$( settings.source ).prepend( filterUI );
				} else if ( prependUI ) {
					$elm.prepend( filterUI );
				} else {
					$elm.before( filterUI );
				}
			}

			secSelector = ( settings.section || "" ) + " ";
			totalEntries = $elm.find( secSelector + settings.selector ).length;
			uiNbItems = document.querySelector( "#" + uiInfoID + " [data-nbitem]" );
			uiTotal = document.querySelector( "#" + uiInfoID + " [data-total]" );

			if ( uiNbItems ) {
				uiNbItems.textContent = totalEntries;

				itemsObserver = new MutationObserver( function() {
					uiNbItems.textContent = $elm.find( secSelector + settings.selector + notFilterClassSel ).length;
				} );

				itemsObserver.observe( elm, { attributes: true, subtree: true } );
			}

			if ( uiTotal ) {
				uiTotal.textContent = totalEntries;
			}

			wb.ready( $elm, componentName );
		}
	},

	/*
	 * Takes in the text from the filter box
	 * Returns:
	 *  An array of search words
	 *      Special characters are escaped
	 *      Double and single quotes removed
	 */
	filterQueryParser = function( filter ) {

		// Pattern to seperate the filter text into "words"
		var pattern = /[^\s"]+|"([^"]*)"/gi;

		// Make strings safe again for regex
		// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
		filter = filter.replace( /[.*+?^${}()|[\]\\]/g, "\\$&" );

		// Apply the word match pattern and return
		return filter.match( pattern );
	},

	/**
	 * Build the Regular Expression that we are going
	 * to use to filter content
	 * This involves identifying the type of search being
	 * applied and then breaking up the search string into
	 * words
	 */
	buildSearchFilterRegularExp =  function( filterType, filter ) {

		var words, wordRegExFilter = filter,
			i, i_len;

		switch ( filterType ) {

		case "and":
			words = filterQueryParser( filter );
			if ( words ) {
				wordRegExFilter = ".*";
				i_len = words.length;
				for ( i = 0; i < i_len; i++ ) {
					wordRegExFilter = wordRegExFilter + ( "(?=.*" + words[ i ] + ")" );
				}
			}
			break;

		case "or": // If one word fall back on default
			words = filterQueryParser( filter );
			if ( words ) {
				wordRegExFilter =  words.join( "|" );
			}
			break;

		default:
			break;

		}

		return new RegExp( wordRegExFilter, "i" );

	},

	filter = function( $field, $elm, settings ) {
		var unAccent = function( str ) {
				return str.normalize( "NFD" ).replace( /[\u0300-\u036f]/g, "" );
			},
			filter = unAccent( $field.val().trim() ),
			fCallBack = settings.filterCallback,
			secSelector = ( settings.section || "" )  + " ",
			hndParentSelector = settings.hdnparentuntil,
			$items = $elm.find( secSelector + settings.selector ),
			itemsLength = $items.length,
			i, $item, text, searchFilterRegularExp;

		$elm.find( "." + filterClass ).removeClass( filterClass );

		searchFilterRegularExp = buildSearchFilterRegularExp( settings.filterType, filter );

		for ( i = 0; i < itemsLength; i += 1 ) {
			$item = $items.eq( i );
			text = unAccent( $item.text() );

			if ( !searchFilterRegularExp.test( text ) ) {
				if ( hndParentSelector ) {
					$item = $item.parentsUntil( hndParentSelector );
				}
				$item.addClass( filterClass );
			}
		}

		if ( !fCallBack || typeof fCallBack !== "function"  ) {
			fCallBack = filterCallback;
		}
		fCallBack.apply( this, arguments );

		$elm.trigger( "wb-contentupdated" );
	},
	filterCallback = function( $field, $elm, settings ) {
		var $sections =	$elm.find( settings.section ),
			sectionsLength = $sections.length,
			fndSelector = notFilterClassSel + settings.selector,
			s, $section;

		for ( s = 0; s < sectionsLength; s += 1 ) {
			$section = $sections.eq( s );
			if ( $section.find( fndSelector ).length === 0 ) {
				$section.addClass( filterClass );
			}
		}
	};

$document.on( "keyup", selectorInput, function( event ) {
	var target = event.target,
		$input = $( target ),
		$elm = $( "#" + $input.data( dtNameFltrArea ) );

	if ( wait ) {
		clearTimeout( wait );
	}
	wait = setTimeout( filter.bind( this, $input, $elm, $elm.data() ), 250 );

} );

$document.on( "timerpoke.wb " + initEvent, selector, init );

wb.add( selector );
} )( jQuery, window, wb );

/**
 * @title WET-BOEW Footnotes
 * @overview Provides a consistent, accessible way of handling footnotes across websites.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @EricDunsworth
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-fnote",
	selector = "." + componentName,
	modFlag = "data-" + componentName,
	initEvent = "wb-init" + selector,
	setFocusEvent = "setfocus.wb",
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
			$elm, footnoteDd, footnoteDt, i, len, dd, dt;

		if ( elm ) {
			$elm = $( elm );
			footnoteDd = elm.getElementsByTagName( "dd" );
			footnoteDt = elm.getElementsByTagName( "dt" );

			// Set initial event handlers for return to referrer links
			len = footnoteDd.length;
			for ( i = 0; i !== len; i += 1 ) {
				dd = footnoteDd[ i ];
				dt = footnoteDt[ i ];
				dd.setAttribute( "tabindex", "-1" );
				dt.id = dd.id + "-dt";
			}

			// Remove "first/premier/etc"-style text from certain footnote return links (via the child spans that hold those bits of text)
			$elm.find( "dd p.fn-rtn a span span" ).remove();

			// Listen for footnote reference links that get clicked
			$document.on( "click", "main :not(" + selector + ") sup a.fn-lnk", function( event ) {
				var eventTarget = event.target,
					which = event.which,
					refId, $refLinkDest;

				// Ignore middle/right mouse button
				if ( !which || which === 1 ) {
					refId = "#" + wb.jqEscape( eventTarget.getAttribute( "href" ).substring( 1 ) );
					$refLinkDest = $document.find( refId );

					$refLinkDest.find( "p.fn-rtn a" )
						.attr( "href", "#" + eventTarget.parentNode.id )
						.attr( modFlag, true );

					// Assign focus to $refLinkDest
					$refLinkDest.trigger( setFocusEvent );
					return false;
				}
			} );

			// Listen for footnote return links that get clicked
			$document.on( "click", selector + " dd p.fn-rtn a", function( event ) {
				var which = event.which,
					$elmTarget = $( event.target ),
					ref,
					refId,
					refIdSrc,
					refIdDashIdx,
					searchRefId;

				// Ignore middle/right mouse button
				if ( !which || which === 1 ) {
					ref = $elmTarget.attr( "href" );

					// Focus on associated referrer link (if the return link points to an ID)
					if ( ref.charAt( 0 ) === "#" ) {
						refId = wb.jqEscape( ref.substring( 1 ) );

						// When first clicked, ensure we send the user on the first instance when the id follow the recommend pattern
						refIdDashIdx = refId.indexOf( "-" );
						if ( refIdDashIdx !== -1 && !$elmTarget.attr( modFlag ) ) {
							searchRefId = refId.substring( 0, refIdDashIdx + 1 );
							refIdSrc = wb.jqEscape( $( "sup[id^='" + searchRefId + "']:first()" ).attr( "id" ) );
							if ( !refIdSrc || refId !== refIdSrc ) {
								console.warn( componentName + " - Relink first reference of " + ref + " for #" + refIdSrc );
								refId = refIdSrc;
								$elmTarget
									.attr( "href", "#" + refId )
									.attr( modFlag, true );
							}
						}

						// Assign focus to the link
						$document.find( "#" + refId + " a" ).trigger( setFocusEvent );
						return false;
					}
				}
			} );

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Form validation
 * @overview Provides generic validation and error message handling for Web forms.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, window, document, wb ) {
"use strict";

/*
* Variable and function definitions.
* These are global to the plugin - meaning that they will be initialized once per page,
* not once per instance of plugin on the page. So, this is a good place to define
* variables that are common to all instances of the plugin on a page.
*/
var componentName = "wb-frmvld",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	setFocusEvent = "setfocus.wb",
	$document = wb.doc,
	idCount = 0,
	i18n, i18nText,

	defaults = {
		hdLvl: "h2",
		ignore: ":hidden"
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var eventTarget = wb.init( event, componentName, selector ),
			elmId, modeJS;

		if ( eventTarget ) {
			elmId = eventTarget.id;

			// Ensure there is a unique id on the element
			if ( !elmId ) {
				elmId = componentName + "-id-" + idCount;
				idCount += 1;
				eventTarget.id = elmId;
			}

			// Read the selector node for parameters
			modeJS = wb.getMode() + ".js";

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					colon: i18n( "colon" ),
					hyphen: i18n( "hyphen" ),
					error: i18n( "err" ),
					errorFound: i18n( "err-fnd" ),
					errorsFound: i18n( "errs-fnd" ),
					formNotSubmitted: i18n( "frm-nosubmit" ),
					errorCorrect: i18n( "err-correct" )
				};
			}

			Modernizr.load( {
				load: [ "site!deps/jquery.validate" + modeJS ],
				testReady: function() {
					return ( $.validator );
				},
				complete: function() {
					Modernizr.load( {

						// For loading multiple dependencies
						load: [ "site!deps/additional-methods" + modeJS ],
						testReady: function() {
							return ( $.validator.methods.bic );
						},
						complete: function() {
							var $elm = $( "#" + elmId ),
								$form = $elm.find( "form" ),
								formDOM = $form.get( 0 ),
								formId = $form.attr( "id" ),
								labels = formDOM.getElementsByTagName( "label" ),
								submitted = false,
								errorFormId = "errors-" + ( !formId ? "default" : formId ),
								settings = $.extend(
									true,
									{},
									defaults,
									window[ componentName ],
									wb.getData( $elm, componentName )
								),
								summaryHeading = settings.hdLvl,
								i, len, validator;

							if ( wb.lang === "fr" ) {

								// alphanumeric regex is changed to allow french characters;
								$.validator.addMethod( "alphanumeric", function( value, element ) {
									return this.optional( element ) || /^[a-zàâçéèêëîïôûùüÿæœ0-9_]+$/i.test( value );
								}, "Letters, numbers, and underscores only please." );

								// error french text is adjusted to remove the word "spaces"
								$.extend( $.validator.messages, {
									alphanumeric: "Veuillez fournir seulement des lettres, nombres et soulignages."
								} );
							}

							// Append the aria-live region (for provide message updates to screen readers)
							$elm.append( "<div class='arialive wb-inv' aria-live='polite' aria-relevant='all'></div>" );

							// Add space to the end of the labels (so separation between label and error when CSS turned off)
							len = labels.length;
							for ( i = 0; i !== len; i += 1 ) {
								labels[ i ].innerHTML += " ";
							}

							// Hide "required" label text in older forms from screen readers
							// Prevents redundant "required" announcements on semantically-required fields whose labels mention they're required
							$form.find( "strong.required:not([aria-hidden='true'])" ).each( function() {
								const $requiredText = $( this ),
									$label = $requiredText.closest( "label" ),
									fieldId = $label.attr( "for" );
								let $field = fieldId ? $( "#" + fieldId ) : $label.find( ":input" ).first();

								// If the label's field has yet to be found, look for fields that refer to the label via aria-labelledby
								if ( !$field.length ) {
									const labelId = $label.attr( "id" ) || $requiredText.closest( "id" );
									$field = $form.find( "[aria-labelledby~='" + labelId + "']:input" ).first();
								}

								// Hide the "required" text if its field is semantically-required
								if ( $field.is( "[required], [aria-required='true']" ) ) {
									$requiredText.attr( "aria-hidden", "true" );
								}
							} );

							// The jQuery validation plug-in in action
							validator = $form.validate( {
								meta: "validate",
								focusInvalid: false,
								ignore: settings.ignore,

								// Set the element which will wrap the inline error messages
								errorElement: "strong",

								// Location for the inline error messages
								// In this case we will place them in the associated label element
								errorPlacement: function( $error, $element ) {
									var type = $element.attr( "type" ),
										group = $element.attr( "data-rule-require_from_group" ),
										$fieldset, $legend;

									$error.data( "element-id", $element.attr( "id" ) );
									if ( type ) {
										type = type.toLowerCase();
										if ( type === "radio" || type === "checkbox" ) {
											$fieldset = $element.closest( "fieldset" );
											if ( $fieldset.length !== 0 ) {
												$legend = $fieldset.find( "legend" ).first();
												if ( $legend.length !== 0 && $fieldset.find( "input[name='" + $element.attr( "name" ) + "']" ) !== 1 ) {
													$error.appendTo( $legend );
													return;
												}
											}
										}
									}

									if ( group ) {
										$fieldset = $element.closest( "fieldset" );
										if ( $fieldset.length !== 0 ) {
											$legend = $fieldset.find( "legend" ).first();
											if ( $legend.length !== 0 && $fieldset.find( "input[name='" + $element.attr( "name" ) + "']" ) !== 1 ) {
												var $strong = $legend.find( "strong.error" ),
													id = $legend.attr( "id" );

												if ( $strong.length > 0 ) {
													$strong.remove();
												}

												if ( !id ) {
													id = "required-group-" + idCount;
													idCount += 1;

													$legend.attr( "id", id );
												}

												$error.data( "element-id", id );
												$error.attr( "id", id );
												$error.appendTo( $legend );

												return;
											}
										}
									}

									//Std If we have a label and the input field is inside the label
									// need to add a css-implicite-input
									if ( $form.find( "label" ).find( ".wb-server-error + input.css-implicite-input[name='" + $element.attr( "name" ) + "']" ).length > 0 ) {
										$error.insertBefore( $form.find( ".wb-server-error + input.css-implicite-input[name='" + $element.attr( "name" ) + "']" ) );
										return;
									}

									$error.appendTo( $form.find( "label[for='" + $element.attr( "id" ) + "']" ) );
									return;
								},

								// Create our error summary that will appear before the form
								showErrors: function( errorMap ) {
									this.defaultShowErrors();
									var $errors = $form.find( ".wb-server-error, strong.error" ).filter( ":not(:hidden)" ),
										$errorfields = $form.find( "input.error, select.error, textarea.error" ),
										prefixStart = "<span class='prefix'>" + i18nText.error + "&#160;",
										prefixEnd = i18nText.colon + " </span>",
										separator = i18nText.hyphen,
										ariaLive = $form.closest( ".wb-frmvld" ).find( ".arialive" )[ 0 ],
										$summaryContainer, summary, key, i, len, $error, prefix, $fieldName, $fieldset, label, labelString;

									// Correct the colouring of fields that are no longer invalid
									$form
										.find( ".has-error [aria-invalid=false]" )
										.closest( ".has-error" )
										.removeClass( "has-error" );

									if ( $errors.length !== 0 ) {

										// Post process
										summary = "<" + summaryHeading + ">" +
											i18nText.formNotSubmitted + $errors.length +
											(
												$errors.length !== 1 ?
													i18nText.errorsFound :
													i18nText.errorFound
											) + "</" + summaryHeading + "><ul>";
										$errorfields
											.closest( ".form-group" )
											.addClass( "has-error" );
										len = $errors.length;
										for ( i = 0; i !== len; i += 1 ) {
											$error = $errors.eq( i );
											prefix = prefixStart + ( i + 1 ) + prefixEnd;
											$fieldName = $error.closest( "label" ).find( ".field-name" );

											// Try to find the field name in the legend (if one exists)
											if ( $fieldName.length === 0 ) {
												$fieldset = $error.closest( "fieldset" );
												if ( $fieldset.length !== 0 ) {
													$fieldName = $fieldset.find( "legend .field-name" );
												}
											}

											$error.find( "span.prefix" ).detach();

											//Verify if it is a wb-server-error
											if ( $errors[ i ].classList.contains( "wb-server-error" ) ) {
												if ( $errors[ i ].id ) {
													var myParent = document.getElementById( $errors[ i ].id ).parentElement;
													if ( myParent === null ) {
														summary += "<li><a>" + prefix + ( $fieldName.length !== 0 ? $fieldName.html() + separator : "" ) + $error.text() + separator + i18nText.errorCorrect + "</a></li>";
													} else {
														if ( myParent.hasAttribute( "for" ) && myParent.getAttribute( "for" ).length > 0 ) {
															summary += "<li><a href='#" + myParent.getAttribute( "for" ) + "'>" + prefix + ( $fieldName.length !== 0 ? $fieldName.html() + separator : "" ) + $error.text() + separator + i18nText.errorCorrect + "</a></li>";
														} else {
															if ( myParent.getElementsByTagName( "input" )[ 0 ] && myParent.getElementsByTagName( "input" )[ 0 ].name.length > 0 ) {
																summary += "<li><a href='#" + myParent.getElementsByTagName( "input" )[ 0 ].id + "'>" + prefix + ( $fieldName.length !== 0 ? $fieldName.html() + separator : "" ) + $error.text() + separator + i18nText.errorCorrect + "</a></li>";
															} else {
																if ( myParent.tagName === ( "LEGEND" ) && ( myParent.parentElement.getElementsByTagName( "input" )[ 0 ].type === "checkbox" || myParent.parentElement.getElementsByTagName( "input" )[ 0 ].type === "radio" && myParent.parentElement.getElementsByTagName( "input" )[ 0 ].name.length > 0 ) ) {
																	summary += "<li><a href='#" + myParent.parentElement.getElementsByTagName( "input" )[ 0 ].id + "'>" + prefix + ( $fieldName.length !== 0 ? $fieldName.html() + separator : "" ) + $error.text() + separator + i18nText.errorCorrect + "</a></li>";
																} else {
																	summary += "<li><a>" + prefix + ( $fieldName.length !== 0 ? $fieldName.html() + separator : "" ) + $error.text() + separator + i18nText.errorCorrect + "</a></li>";
																}
															}
														}
													}
													$error.html( "<strong>" + prefix + $error.text() + "</strong>" );
												}
											} else {
												summary += "<li><a href='#" + $error.data( "element-id" ) + "'>" + prefix + ( $fieldName.length !== 0 ? $fieldName.html() + separator : "" ) + $error.text() + "</a></li>";
												$error.html( "<span class='label label-danger'>" + prefix + $error.text() + "</span>" );
											}
										}
										summary += "</ul>";

										if ( !submitted ) {

											// Update the aria-live region as necessary
											i = 0;
											for ( key in errorMap ) {
												if ( Object.prototype.hasOwnProperty.call( errorMap, key ) ) {
													i += 1;
													break;
												}
											}
											if ( i !== 0 ) {
												len = $errors.length;
												for ( i = 0; i !== len; i += 1 ) {
													label = $errors[ i ].parentNode;
													if ( label.getAttribute( "for" ) === key ) {
														labelString = label.innerHTML;
														if ( labelString !== ariaLive.innerHTML ) {
															ariaLive.innerHTML = labelString;
														}
														break;
													}
												}
											} else if ( ariaLive.innerHTML.length !== 0 ) {
												ariaLive.innerHTML = "";
											}
										}

										// Delay updating the summary container in case a summary link was clicked
										setTimeout( function() {
											$summaryContainer = $form.find( "#" + errorFormId );

											// Output our error summary and place it in the error container
											// Create our container if one doesn't already exist
											if ( $summaryContainer.length === 0 ) {
												$summaryContainer = $( "<section id='" + errorFormId + "' class='alert alert-danger' tabindex='-1'>" + summary + "</section>" ).prependTo( $form );
											} else {
												$summaryContainer.empty().append( summary );
											}

											// Put focus on the error if the errors are generated by an attempted form submission
											if ( submitted ) {

												// Assign focus to $summaryContainer
												$summaryContainer.trigger( setFocusEvent );
												submitted = false;
											}
										}, 100 );
									} else {

										// Update the aria-live region as necessary
										if ( ariaLive.innerHTML.length !== 0 ) {
											ariaLive.innerHTML = "";
										}
										$form.find( "#" + errorFormId ).detach();
									}
								},

								/* End of showErrors() */

								invalidHandler: function() {
									submitted = true;
								}

							} ); /* end of validate() */

							/* fixes validation issue (see PR #7913) */
							$form.on( "change", "input[type=date], input[type=file], select", function() {
								$form.validate().element( this );
							} );

							// Clear the form and remove error messages on reset
							$document.on( "click", selector + " input[type=reset]", function( event ) {
								var which = event.which,
									ariaLive;

								// Ignore middle/right mouse buttons
								if ( !which || which === 1 ) {
									validator.resetForm();
									$( "#" + errorFormId ).detach();

									ariaLive = $form.closest( ".wb-frmvld" ).find( ".arialive" )[ 0 ];
									if ( ariaLive.innerHTML.length !== 0 ) {
										ariaLive.innerHTML = "";
									}

									// Correct the colouring of fields that are no longer invalid
									$form.find( ".has-error" ).removeClass( "has-error" );
								}
							} );

							//Trigger validation on wb-server-error
							$form.find( ".wb-server-error" ).filter( ":not( :hidden )" ).parent().each( function() {
								if ( this.attributes.for && this.attributes.for.value.length > 0 ) {
									$form.validate().element( $( "[id =" + this.attributes.for.value + "]" ) );
								} else if ( $( this ).find( "input" )[ 0 ] ) {
									$form.validate().element( $( this ).find( "input" )[ 0 ] );
								} else if ( $( this ).next( ".radio, .checkbox" ).children( "label" ).children( "input" )[ 0 ] ) {
									if ( $( this ).find( $( this ).next( ".radio, .checkbox" ).children( "label" ).children( "input" )[ 0 ].id ) ) {
										$form.validate().element( $( this ).next( ".radio, .checkbox" ).children( "label" ).children( "input" )[ 0 ] );
									}
								} else if ( $( this ).next( ".radio-inline, .checkbox-inline, .label-inline" ).children( "input" )[ 0 ] ) {
									if ( $( this ).find( $( this ).next( ".radio-inline, .checkbox-inline, .label-inline" ).children( "input" )[ 0 ].id ) ) {
										$form.validate().element( $( this ).next( ".radio-inline, .checkbox-inline, .label-inline" ).children( "input" )[ 0 ] );
									}
								}
							} );

							// Tell the i18n file to execute to run any $.validator extends
							$form.trigger( "formLanguages.wb" );

							// Identify that initialization has completed
							wb.ready( $( eventTarget ), componentName );
						}
					} );
				}
			} );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );

/*
 * @title WET-BOEW Geomap
 * @overview Displays a dynamic map over which information from additional sources can be overlaid.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, wb ) {
"use strict";

var componentName = "wb-geomap",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
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
			$elm, $map, $leg, modeJS;

		if ( elm ) {
			$elm = $( elm );
			$map = $elm.find( ".wb-geomap-map" );
			$leg = $elm.find( ".wb-geomap-legend" );

			// Initialize the map height for the loader
			$map.height( $map.width() * 0.8 );
			$map.append( "<div class='geomap-progress'><span class='wb-inv'>" + wb.i18n( "load" ) + "</span></div>" );
			$leg.append( "<div class='skeleton-lgnd-1'><span class='skeleton-lgnd-3'></span></div>" +
					"<div class='skeleton-lgnd-2'><span class='skeleton-lgnd-3'></span></div>" +
					"<div class='skeleton-lgnd-2'><span class='skeleton-lgnd-3'></span></div>" +
					"<div class='skeleton-lgnd-2'><span class='skeleton-lgnd-3'></span></div>" +
					"<div  class='skeleton-lgnd-1'><span class='skeleton-lgnd-3'></span></div>" );

			modeJS = wb.getMode() + ".js";

			Modernizr.load( [ {

				// For loading multiple dependencies
				both: [
					"site!deps/proj4" + modeJS,
					"site!deps/ol" + modeJS,
					"site!deps/geomap-lib" + modeJS
				],
				complete: function() {
					$elm.trigger( "geomap.wb" );
				}
			} ] );
		}
	};

// Bind the init function to the timerpoke event
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, wb );

/**
 * @title WET-BOEW JSON Fetch [ json-fetch ]
 * @overview Load and filter data from a JSON file
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
/*global jsonpointer */
( function( $, wb, DOMPurify ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var $document = wb.doc,
	component = "json-fetch",
	fetchEvent = component + ".wb",
	jsonCache = { },
	jsonCacheBacklog = { },
	completeJsonFetch = function( callerId, refId, response, status, xhr, selector, fetchedOpts ) {
		if ( !window.jsonpointer ) {

			// JSON pointer library is loaded but not executed in memory yet, we need to wait a tick before to continue
			setTimeout( function() {
				completeJsonFetch( callerId, refId, response, status, xhr, selector, fetchedOpts );
			}, 100 );
			return false;
		}
		if ( selector ) {
			try {
				response = jsonpointer.get( response, selector );
			} catch ( ex ) {
				console.error( "JSON fetch - Bad JSON selector: " + selector );
				console.error( response );
				console.error( $( "#" + callerId ).get( 0 ) );
			}
		}
		$( "#" + callerId ).trigger( {
			type: "json-fetched.wb",
			fetch: {
				response: response,
				status: status,
				xhr: xhr,
				refId: refId,
				fetchedOpts: fetchedOpts
			}
		}, this );
	};

// Event binding
$document.on( fetchEvent, function( event ) {

	var caller = event.element || event.target,
		fetchOpts = event.fetch || { url: "" },
		urlParts = fetchOpts.url.split( "#" ),
		url = urlParts[ 0 ],
		fetchNoCache = fetchOpts.nocache,
		fetchNoCacheKey = fetchOpts.nocachekey || wb.cacheBustKey || "wbCacheBust",
		fetchNoCacheValue,
		fetchCacheURL,
		hashPart,
		datasetName,
		selector = urlParts[ 1 ] || false,
		callerId, refId = fetchOpts.refId,
		cachedResponse;

	// Filter out any events triggered by descendants
	if ( caller === event.target || event.currentTarget === event.target ) {

		if ( !caller.id ) {
			caller.id = wb.getId();
		}
		callerId = caller.id;

		if ( selector ) {

			// If a Dataset Name exist let it managed by wb-jsonpatch plugin
			hashPart = selector.split( "/" );
			datasetName = hashPart[ 0 ];

			// A dataset name must start with "[" character, if it is a letter, then follow JSON Schema (to be implemented)
			if ( datasetName.charCodeAt( 0 ) === 91 ) {

				// Let the wb-jsonpatch plugin to manage it
				$( "#" + callerId ).trigger( {
					type: "postpone.wb-jsonmanager",
					postpone: {
						callerId: callerId,
						refId: refId,
						dsname: datasetName,
						selector: selector.substring( datasetName.length )
					}
				} );
				return;
			}
			fetchOpts.url = url;
		}

		if ( fetchNoCache ) {
			if ( fetchNoCache === "nocache" ) {
				fetchNoCacheValue = wb.guid();
			} else {
				fetchNoCacheValue = wb.sessionGUID();
			}
			fetchCacheURL = fetchNoCacheKey + "=" + fetchNoCacheValue;

			if ( url.indexOf( "?" ) !== -1 ) {
				url = url + "&" + fetchCacheURL;
			} else {
				url = url + "?" + fetchCacheURL;
			}
			fetchOpts.url = url;
		}

		Modernizr.load( {
			load: "site!deps/jsonpointer" + wb.getMode() + ".js",
			complete: function() {

				// Ensure this fetch has an URL. There is no URL when only using dataset name (a virtual JSON file).
				if ( !url ) {
					return;
				}

				if ( !fetchOpts.nocache ) {
					cachedResponse = jsonCache[ url ];

					if ( cachedResponse ) {
						completeJsonFetch( callerId, refId, cachedResponse, "success", undefined, selector, fetchOpts );
						return;
					} else {
						if ( !jsonCacheBacklog[ url ] ) {
							jsonCacheBacklog[ url ] = [ ];
						} else {
							jsonCacheBacklog[ url ].push( {
								"callerId": callerId,
								"refId": refId,
								"selector": selector
							} );
							return;
						}
					}
				}

				// Ensure we only receive JSON data and don't allow jsonp
				// jQuery will raise an error if other data format is received
				fetchOpts.dataType = "json";
				if ( fetchOpts.jsonp ) {
					fetchOpts.jsonp = false;
				}

				// Sending Data
				if ( fetchOpts.data ) {
					try {
						fetchOpts.data = ( typeof fetchOpts.data === "string" ? fetchOpts.data : JSON.stringify( fetchOpts.data ) );
					} catch ( err ) {
						throw "JSON fetch - Data being sent to server - " + err;
					}

					fetchOpts.method = fetchOpts.method || "POST";
					fetchOpts.contentType = fetchOpts.contentType || "application/json";
				}

				$.ajax( fetchOpts )
					.done( function( response, status, xhr ) {
						var i, i_len, i_cache, backlog;

						if ( !fetchOpts.nocache ) {
							try {
								jsonCache[ url ] = response;
							} catch ( error ) {
								return;
							}
						}

						completeJsonFetch( callerId, refId, response, status, xhr, selector, fetchOpts );

						if ( jsonCacheBacklog[ url ] ) {
							backlog = jsonCacheBacklog[ url ];

							i_len = backlog.length;

							for ( i = 0; i !== i_len; i += 1 ) {
								i_cache = backlog[ i ];
								completeJsonFetch( i_cache.callerId, i_cache.refId, response, status, xhr, i_cache.selector, fetchOpts );
							}
						}

					} )
					.fail( function( xhr, status, error ) {
						xhr.responseText = DOMPurify.sanitize( xhr.responseText );
						$( "#" + callerId ).trigger( {
							type: "json-failed.wb",
							fetch: {
								xhr: xhr,
								status: status,
								error: error,
								refId: refId,
								fetchOpts: fetchOpts
							}
						}, this );
					}, this );
			}
		} );
	}
} );

} )( jQuery, wb, DOMPurify );

/**
 * @title WET-BOEW Lightbox
 * @overview Helps build a photo gallery on a web page.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, DOMPurify, window, document, wb, undef ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-lbx",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	setFocusEvent = "setfocus.wb",
	dependenciesLoadedEvent = "deps-loaded" + selector,
	modalHideSelector = "#wb-tphp, body > header, body > main, body > footer",
	$document = wb.doc,
	callbacks, i18n, i18nText,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			elmId;

		if ( elm ) {
			elmId = elm.id;

			// Ensure the dependencies are loaded first
			$document.one( dependenciesLoadedEvent, function() {
				var elm = document.getElementById( elmId ),
					$elm = $( elm ),
					settings = {},
					firstLink;

				if ( !elm ) {
					return;
				}

				// TODO: Add swipe support

				settings.callbacks = callbacks;

				if ( elm.nodeName.toLowerCase() !== "a" ) {
					settings.delegate = "a:not(" + selector + "-skip)";
					firstLink = elm.getElementsByTagName( "a" )[ 0 ];

					// Is the element a gallery?
					if ( elm.className.indexOf( "-gal" ) !== -1 ) {
						settings.gallery = {
							enabled: true
						};
					}
				} else {
					firstLink = elm;
				}

				if ( firstLink ) {
					if ( firstLink.getAttribute( "href" ).charAt( 0 ) === "#" ) {
						settings.type = "inline";
					} else if ( firstLink.className.indexOf( "lbx-iframe" ) !== -1 ) {
						settings.type = "iframe";
					} else if ( firstLink.getElementsByTagName( "img" ).length === 0 ) {
						settings.type = "ajax";
					} else {
						settings.type = "image";
					}

					if ( elm.className.indexOf( "lbx-modal" ) !== -1 ) {
						settings.modal = true;
					}
					if ( elm.className.indexOf( "lbx-ajax" ) !== -1 ) {
						settings.type = "ajax";
					}
					if ( elm.className.indexOf( "lbx-image" ) !== -1 ) {
						settings.type = "image";
					}
					if ( elm.className.indexOf( "lbx-inline" ) !== -1 ) {
						settings.type = "inline";
					}

					// Extend the settings with window[ "wb-lbx" ] then data-wb-lbx
					settings = $.extend(
						true,
						settings,
						window[ componentName ],
						wb.getData( $elm, componentName )
					);
					$elm.magnificPopup(
						settings
					).data( "wbLbxFilter", settings.filter );
				}

				// Identify that initialization has completed
				wb.ready( $elm, componentName );
			} );

			// Load dependencies as needed
			setup();
		}
	},

	/**
	 * @method setup
	 */
	setup = function() {

		// Only initialize the i18nText and callbacks once
		if ( !i18nText ) {
			i18n = wb.i18n;
			i18nText = {
				close: i18n( "close" ),
				oClose: i18n( "overlay-close" ),
				tClose: i18n( "overlay-close" ) + i18n( "space" ) + i18n( "esc-key" ),
				tLoading: i18n( "load" ),
				gallery: {
					tPrev: i18n( "prv-l" ),
					tNext: i18n( "nxt-r" ),
					tCounter: i18n( "lb-curr" )
				},
				image: {
					tError: i18n( "lb-img-err" ) + " (<a href=\"url%\">)"
				},
				ajax: {
					tError: i18n( "lb-xhr-err" ) + " (<a href=\"url%\">)"
				}
			};

			callbacks = {
				open: function() {

					// TODO: Better if dealt with upstream by Magnific popup
					var $item = this.currItem,
						$content = this.contentContainer,
						$wrap = this.wrap,
						$container = $wrap.find( ".mfp-container" ),
						$containerParent = $container.parent(),
						$modal = $wrap.find( ".modal-dialog" ),
						$buttons = $wrap.find( ".mfp-close, .mfp-arrow" ),
						len = $buttons.length,
						i, button;

					createCloseButton( $modal );

					$document.find( "body" ).addClass( "wb-modal" );
					$document.find( modalHideSelector ).attr( "aria-hidden", "true" );
					for ( i = 0; i !== len; i += 1 ) {
						button = $buttons[ i ];
						button.innerHTML += "<span class='wb-inv'> " + button.title + "</span>";
					}

					if ( $item.type === "image" ) {
						$content.find( ".mfp-bottom-bar" ).attr( "id", "lbx-title" );
					} else {
						$content.attr( "role", "document" );
					}

					this.contentContainer.attr( "data-pgtitle", document.getElementsByTagName( "H1" )[ 0 ].textContent );

					trapTabbing( $wrap );

					if ( !$containerParent.is( "dialog" ) ) {
						$container.wrap( "<dialog class='mfp-container' open='open'></dialog>" );
					} else {
						$containerParent.attr( "open", "open" );
					}
				},
				close: function() {
					$document.find( "body" ).removeClass( "wb-modal" );
					$document.find( modalHideSelector ).removeAttr( "aria-hidden" );
					this.wrap.find( "dialog" ).removeAttr( "open" );

				},
				change: function() {
					var $item = this.currItem,
						$content = this.contentContainer,
						$el, $bottomBar, $source, $target,
						description, altTitleId, altTitle;

					if ( $item.type === "image" ) {
						$el = $item.el;
						$target = $item.img;
						$bottomBar = $content.find( ".mfp-bottom-bar" );

						if ( $el ) {
							$source = $el.find( "img" );
							$target.attr( "alt", $source.attr( "alt" ) );

							// Replicate aria-describedby if it exists
							description = $source.attr( "aria-describedby" );
							if ( description ) {
								$target.attr( "aria-describedby", description );
							}

							// Replicate longdesc if it exists
							description = $source.attr( "longdesc" );
							if ( description ) {
								$target.attr( "longdesc", description );
							}

							// Handle alternate titles
							altTitleId = $el.attr( "data-title" );
							if ( altTitleId ) {
								altTitle = document.getElementById( altTitleId );
								if ( altTitle !== null ) {
									$bottomBar.find( ".mfp-title" ).html( altTitle.innerHTML );
								}
							}
						} else {
							$target.attr( "alt", $bottomBar.find( ".mfp-title" ).html() );
						}
					} else {
						$content
							.find( ".modal-title, h1" )
							.first()
							.attr( "id", "lbx-title" );
					}

					$content.attr( "aria-labelledby", "lbx-title" );
				},
				parseAjax: function( mfpResponse ) {
					var currItem = this.currItem,
						currEl = currItem.el,
						urlHash = currItem.src.split( "#" )[ 1 ],
						filter = currEl ? currEl.data( "wbLbxFilter" ) : undef,
						selector = filter || ( urlHash ? "#" + urlHash : false ),
						$response;

					// Sanitize the response
					mfpResponse.data = DOMPurify.sanitize( mfpResponse.data );

					// Provide the ability to filter the AJAX response HTML
					// by the URL hash or a selector
					// TODO: Should be dealt with upstream by Magnific Popup
					if ( selector ) {
						$response = $( "<div>" + mfpResponse.data + "</div>" ).find( selector );
					} else {
						$response = $( mfpResponse.data );
					}
					createCloseButton( $response );

					$response
						.find( ".modal-title, h1" )
						.first()
						.attr( "id", "lbx-title" );

					mfpResponse.data = $response;
				},
				ajaxContentAdded: function() {
					trapTabbing( this.wrap );
				}
			};
		}

		// Load Magnific Popup dependency and bind the init event handler
		Modernizr.load( {
			load: "site!deps/jquery.magnific-popup" + wb.getMode() + ".js",
			testReady: function() {
				return $.magnificPopup;
			},
			complete: function() {

				// Set the dependency i18nText only once
				$.extend( true, $.magnificPopup.defaults, i18nText );

				$document.trigger( dependenciesLoadedEvent );
			}
		} );
	},
	createCloseButton = function( $modal ) {
		if ( $modal !== null && $modal.hasClass( "modal-dialog" ) ) {
			var footer = $modal.find( ".modal-footer" ).first(),
				hasFooter = footer.length,
				hasButton = hasFooter && $( footer ).find( ".popup-modal-dismiss" ).length !== 0,
				closeClassFtr = "popup-modal-dismiss",
				closeTextFtr = i18nText.close,
				spanTextFtr = i18nText.oClose,
				overlayCloseFtr;

			if ( !hasButton ) {
				if ( !hasFooter ) {
					footer = document.createElement( "div" );
					footer.setAttribute( "class", "modal-footer" );
				}

				overlayCloseFtr = "<button type='button' class='btn btn-sm btn-primary pull-left " + closeClassFtr +
					"' title='" + spanTextFtr + "'>" +
					closeTextFtr +
					"<span class='wb-inv'>" + spanTextFtr + "</span></button>";

				$( footer ).append( overlayCloseFtr );
				if ( !hasFooter ) {
					$( footer ).insertAfter( $modal.find( ".modal-body" ) );
				}
			}
		}
	},
	trapTabbing = function( $wrap ) {

		$wrap.on( "keydown", function( e ) {
			if ( e.which === 9 ) {
				var tabbable = $wrap.find( ".mfp-container :tabbable:visible" ),
					firstTabbable = tabbable.first()[ 0 ],
					lastTabbable = tabbable.last()[ 0 ],
					currentFocus = $( document.activeElement )[ 0 ];

				if ( !e.shiftKey && currentFocus === lastTabbable ) {
					e.preventDefault();
					firstTabbable.focus();
				} else if ( e.shiftKey && ( currentFocus === firstTabbable || currentFocus === $wrap[ 0 ] ) ) {
					e.preventDefault();
					lastTabbable.focus();
				}
			}
		} );
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Handler for clicking on a same page link within the overlay to outside the overlay
$document.on( "click", ".mfp-wrap a[href^='#']", function( event ) {
	var which = event.which,
		eventTarget = event.currentTarget,
		$lightbox, linkTarget;

	// Ignore middle/right mouse buttons
	if ( !which || which === 1 ) {
		$lightbox = $( eventTarget ).closest( ".mfp-wrap" );
		linkTarget = document.getElementById( eventTarget.getAttribute( "href" ).substring( 1 ) );

		// Ignore same page links to within the overlay
		if ( linkTarget && !$.contains( $lightbox[ 0 ], linkTarget ) ) {

			// Stop propagation of the click event
			if ( event.stopPropagation ) {
				event.stopImmediatePropagation();
			} else {
				event.cancelBubble = true;
			}

			// Close the overlay and set focus to the same page link
			$.magnificPopup.close();
			$( linkTarget ).trigger( setFocusEvent );
		}
	}
} );

// Event handler for closing a modal popup
$( document ).on( "click", ".popup-modal-dismiss", function( event ) {
	if ( !this.hasAttribute( "target" ) ) {
		event.preventDefault();
	}

	$.magnificPopup.close();
} );

// Event handler for opening a popup without a link
$( document ).on( "open" + selector, function( event, items, modal, title, ajax ) {
	if ( event.namespace === componentName ) {
		var isGallery = items.length > 1,
			isModal = modal && !isGallery ? modal : false,
			titleSrc = title ? function() {
				return title[ $.magnificPopup.instance.index ];
			} : "title";

		event.preventDefault();

		// Ensure the dependencies are loaded first
		$document.one( dependenciesLoadedEvent, function() {
			$.magnificPopup.open( {
				items: items,
				modal: isModal,
				gallery: {
					enabled: isGallery
				},
				image: {
					titleSrc: titleSrc
				},
				callbacks: callbacks,
				ajax: ajax
			} );

			wb.ready( undef, componentName );
		} );

		// Load dependencies as needed
		setup();
	}
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, DOMPurify, window, document, wb );

/**
 * @title WET-BOEW Menu plugin
 * @overview A Menu plugin for WET
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET community
 */
( function( $, window, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-menu",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	breadcrumb = document.getElementById( "wb-bc" ),
	navCurrentEvent = "navcurr.wb",
	focusEvent = "setfocus.wb",
	detailsInitEvent = "wb-init.wb-details",
	menuItemSelector = "> a, > details > summary",
	$document = wb.doc,

	// Used for half second delay on showing/hiding menus because of mouse hover
	hoverDelay = 500,
	menuCount = 0,
	globalTimeout,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm, ajaxFetch;

		if ( elm ) {
			$elm = $( elm );

			// Ensure the container has an id attribute
			if ( !$elm.attr( "id" ) ) {
				$elm.attr( "id", componentName + "-" + menuCount );
			}
			menuCount += 1;

			// Lets test to see if we have any menus to fetch
			// This is required for backwards compatibility. In previous versions, the menu was not integrated witht he data ajax plugin.
			ajaxFetch = $elm.data( "ajax-fetch" );
			if ( ajaxFetch ) {
				$elm.trigger( {
					type: "ajax-fetch.wb",
					fetch: {
						url: ajaxFetch
					}
				} );
			} else {

				//Enhance menus that don't rely on the data-ajax plugin
				ajaxFetch = $elm.data( "ajax-replace" ) || $elm.data( "ajax-append" ) || $elm.data( "ajax-prepend" );
				if ( !ajaxFetch ) {
					onAjaxLoaded( $elm, $elm );
				}
			}
		}
	},

	/**
	 * Lets set some aria states and attributes
	 * @method drizzleAria
	 * @param {jQuery DOM elements} $elements The collection of elements
	 */
	drizzleAria = function( $elements ) {
		var length = $elements.length,
			$elm, $subMenu, i;

		// Lets tweak for aria
		for ( i = 0; i !== length; i += 1 ) {
			$elm = $elements.eq( i );
			$subMenu = $elm.siblings( "ul" );

			$elm.attr( {
				"aria-posinset": ( i + 1 ),
				"aria-setsize": length,
				role: "menuitem"
			} );

			// if there is a submenu lets put in the aria for it
			if ( $subMenu.length !== 0 ) {

				$elm.attr( "aria-haspopup", "true" );

				$subMenu.attr( {
					"aria-expanded": "false",
					"aria-hidden": "true"
				} );

				// recurse into submenu
				drizzleAria( $subMenu.children( "li" ).find( menuItemSelector ) );
			}
		}
	},

	/**
	 * @method createCollapsibleSection
	 * @return {string}
	 */
	createCollapsibleSection = function( section, sectionIndex, sectionsLength, $items, itemsLength ) {

		// Use details/summary for the collapsible mechanism
		var k, $elm, elm, $item, $subItems, subItemsLength,
			$section = $( section ),
			posinset = "' aria-posinset='",
			menuitem = " role='menuitem' aria-setsize='",
			sectionHtml = "<li><details>" + "<summary class='mb-item" +
				( $section.hasClass( "wb-navcurr" ) || $section.children( ".wb-navcurr" ).length !== 0 ? " wb-navcurr'" : "'" ) +
				menuitem + sectionsLength + posinset + ( sectionIndex + 1 ) +
				"' aria-haspopup='true'>" + $section.text() + "</summary>" +
				"<ul class='list-unstyled mb-sm' role='menu' aria-expanded='false' aria-hidden='true'>";

		// Convert each of the list items into WAI-ARIA menuitems
		for ( k = 0; k !== itemsLength; k += 1 ) {
			$item = $items.eq( k );
			$elm = $item.find( menuItemSelector );
			elm = $elm[ 0 ];
			$subItems = $elm.parent().find( "> ul > li" );
			subItemsLength = $subItems.length;

			if ( elm && subItemsLength === 0 && elm.nodeName.toLowerCase() === "a" ) {
				sectionHtml += "<li>" + $item[ 0 ].innerHTML.replace(
					/(<a\s)/,
					"$1" + menuitem + itemsLength +
							posinset + ( k + 1 ) +
							"' tabindex='-1' "
				) + "</li>";
			} else {
				sectionHtml += createCollapsibleSection( elm, k, itemsLength, $subItems, $subItems.length );
			}
		}

		return sectionHtml + "</ul></details></li>";
	},

	/**
	 * @method createMobilePanelMenu
	 * @param {array} allProperties Properties used to build the menu system
	 * @return {string}
	 */
	createMobilePanelMenu = function( allProperties ) {
		var panel = "",
			sectionHtml, properties, sections, section, parent, $items,
			linkHtml, i, j, len, sectionsLength, itemsLength;

		// Process the secondary and site menus
		len = allProperties.length;
		for ( i = 0; i !== len; i += 1 ) {
			properties = allProperties[ i ];
			sectionHtml = "";
			sections = properties[ 0 ];
			sectionsLength = sections.length;
			for ( j = 0; j !== sectionsLength; j += 1 ) {
				section = sections[ j ];
				$items = $( section.parentNode ).find( "> ul > li" );
				itemsLength = $items.length;

				// Collapsible section
				if ( itemsLength !== 0 ) {
					sectionHtml += createCollapsibleSection( section, j, sectionsLength, $items, itemsLength );
				} else {
					parent = section.parentNode;

					// Menu item without a section
					if ( parent.nodeName.toLowerCase() === "li" ) {
						linkHtml = parent.innerHTML;

					// Non-list menu items without a section and that contain their own link
					} else if ( parent.getElementsByTagName( "a" )[ 0 ] === section.getElementsByTagName( "a" )[ 0 ] ) {
						linkHtml = section.innerHTML;

					// Non-list menu item without a section and whose siblings contain a link
					} else {
						linkHtml = "<a href='" +
							parent.getElementsByTagName( "a" )[ 0 ].href + "'>" +
							section.innerHTML + "</a>";
					}

					// Convert the list item to a WAI-ARIA menuitem
					sectionHtml += "<li class='no-sect'>" +
						linkHtml.replace(
							/(<a\s)/,
							"$1 class='mb-item' " + "role='menuitem' aria-setsize='" +
								sectionsLength + "' aria-posinset='" + ( j + 1 ) +
								"' tabindex='-1' "
						) + "</li>";
				}
			}

			// Create the panel section
			panel += "<nav role='navigation' typeof='SiteNavigationElement' id='" +
				properties[ 1 ] + "' class='" + properties[ 1 ] + " wb-menu wb-menu-inited'>" +
				"<h3>" + properties[ 2 ] + "</h3>" +
				"<ul class='list-unstyled mb-menu' role='menu'>" +
				sectionHtml + "</ul></nav>";
		}

		return panel.replace( /['"]?list-group-item['"]?/gi, "\"\"" );
	},

	/**
	 * @method onAjaxLoaded
	 * @param {jQuery DOM element} $elm The plugin element
	 * @param {jQuery DOM element} $ajaxResult The AJAXed in menu content to import
	 */
	onAjaxLoaded = function( $elm, $ajaxResult ) {
		var $info = $( "#wb-info" ),
			inner = function() {
				var $ajaxed = $ajaxResult && $ajaxResult.attr( "data-type" ) === "string" ? $ajaxResult : $elm,
					$menubar = $ajaxed.find( ".menu" ),
					$menu = $menubar.find( "> li > a" ),
					target = $elm.data( "trgt" ),
					$secnav = $( "#wb-sec" ),
					$language = $( "#wb-lng" ),
					search = document.getElementById( "wb-srch" ),
					panel = "",
					panelDOM = document.getElementById( target ),
					$panel = $( panelDOM ),
					allProperties = [],
					$navCurr, $menuItem, $langItems, len, i;

				/*
				 * Build the mobile panel
				 */

				// Add search
				if ( search !== null ) {
					panel += "<section class='srch-pnl'>" +
						search.innerHTML
							.replace( /h2>/i, "h3>" )
							.replace( /(for|id)="([^"]+)"/gi, "$1='$2-imprt'" ) +
						"</section>";
				}

				// Add active language offer
				if ( $language.length !== 0 ) {
					$langItems = $language.find( "li:not(.curr)" );
					len = $langItems.length;
					panel += "<section class='lng-ofr'>" +
						"<h3>" + $language.children( "h2" ).html() + "</h3>" +
						"<ul class='list-inline'>";
					for ( i = 0; i !== len; i += 1 ) {
						panel += $langItems[ i ].innerHTML
							.replace( /(<a\s.*<\/a>?)/, "<li>$1</li>" );
					}
					panel += "</ul></section>";
				}

				// Create menu system
				if ( $secnav.length !== 0 || $menubar.length !== 0 || $info.length !== 0 ) {

					// Add the secondary menu
					if ( $secnav.length !== 0 ) {
						allProperties.push( [
							$secnav.find( "ul" ).filter( ":not(li > ul)" ).find( " > li > *:first-child" ).get(),
							"sec-pnl",
							$secnav.find( "h2" ).html()
						] );

						if ( $secnav.find( ".wb-navcurr" ).length === 0 ) {

							// Trigger the navcurrent plugin
							$secnav.trigger( navCurrentEvent, breadcrumb );
						}
					}

					// Add the site menu
					if ( $menubar.length !== 0 ) {

						// Add the menubar role if it is missing
						if ( !$menubar.attr( "role" ) ) {
							$menubar.attr( "role", "menubar" );
						}

						allProperties.push( [
							$menu.get(),
							"sm-pnl",
							$ajaxed.find( "h2" ).html()
						] );
					}

					// Add the site information
					if ( $info.length !== 0 ) {
						allProperties.push( [
							$info.find( "h3, a" ).not( "section a" ),
							"info-pnl",
							$info.find( "h2" ).html()
						] );

						if ( $info.find( ".wb-navcurr" ).length === 0 ) {

							// Trigger the navcurrent plugin
							$info.trigger( navCurrentEvent, breadcrumb );
						}
					}

					panel += createMobilePanelMenu( allProperties );
				}

				// Let's now populate the DOM since we have done all the work in a documentFragment
				panelDOM.innerHTML = "<header class='modal-header'><div class='modal-title'>" +
						document.getElementById( "wb-glb-mn" )
							.getElementsByTagName( "h2" )[ 0 ]
							.innerHTML +
						"</div></header><div class='modal-body'>" + panel + "</div>";
				panelDOM.className += " wb-overlay modal-content overlay-def wb-panel-r";

				// fix #8241
				if ( $.active > 0 ) {
					$( document ).ajaxStop( function() {
						initOverlay( $panel );
					} );
				} else {
					initOverlay( $panel );
				}

				/*
				 * Build the regular mega menu
				 */
				$ajaxed
					.find( ":discoverable" )
					.attr( "tabindex", "-1" );

				if ( $menu.length !== 0 ) {
					$menu[ 0 ].setAttribute( "tabindex", "0" );
					drizzleAria( $menu );
					$menu
						.filter( "[aria-haspopup=true]" )
						.append( "<span class='expicon glyphicon glyphicon-chevron-down'></span>" );
				}

				// Replace elements
				$elm.html( $ajaxed.html() );

				// Trigger the navcurrent plugin
				setTimeout( function() {
					$elm.trigger( navCurrentEvent, breadcrumb );
					$panel.find( "#sm-pnl" ).trigger( navCurrentEvent, breadcrumb );

					// Ensure that wb-navcurr is reflected in the top level
					$navCurr = $panel.find( ".wb-navcurr" );
					len = $navCurr.length;
					for ( i = 0; i !== len; i += 1 ) {
						$menuItem = $navCurr.eq( i );

						// If not at the top level, then add wb-navcurr to the top level
						if ( !$menuItem.hasClass( ".mb-item" ) ) {
							$menuItem = $menuItem
								.closest( "details" )
								.children( "summary" )
								.addClass( "wb-navcurr" );
						}
					}

					// Open up the secondary menu if it has wb-navcurr and has a submenu
					$menuItem = $panel.find( "#sec-pnl .wb-navcurr.mb-item" );
					if ( $menuItem.attr( "aria-haspopup" ) === "true" ) {
						$menuItem
							.trigger( "click" )
							.parent()
							.prop( "open", "open" );
					}

					// Identify that initialization has completed
					wb.ready( $elm, componentName );
				}, 1 );
			},
			$footerAjax  = $info.find( "[data-ajax-replace],[data-ajax-append],[data-ajax-prepend]" ),
			footerAjaxLength = $footerAjax.length,
			ajaxCount = 0;

		//Delay the execution the menu until any ajaxed footer content is in
		if ( footerAjaxLength === 0 ) {
			inner();
		} else {
			$info.on( "wb-contentupdated ajax-failed.wb", function() {
				ajaxCount += 1;
				if ( ajaxCount === footerAjaxLength ) {
					inner();
				}
			} );
		}
	},

	// fix #8517
	/**
	 * @method initOverlay
	 * @param {jQuery object} $panel Current panel
	 */
	initOverlay = function( $panel ) {
		$panel
			.trigger( "wb-init.wb-overlay" )
			.find( "summary" )
			.attr( "tabindex", "-1" )
			.trigger( detailsInitEvent );
		$panel
			.find( ".mb-menu > li:first-child" )
			.find( ".mb-item" )
			.attr( "tabindex", "0" );
	},

	/**
	 * @method menuIncrement
	 * @param {jQuery object} $menuItems Collection of of menu items to move between
	 * @param {jQuery object} $current Current menu item
	 * @param {integer} indexChange Requested relative change to the menu item index
	 */
	menuIncrement = function( $menuItems, $current, indexChange ) {
		var menuItemsLength = $menuItems.length,
			index = $menuItems.index( $current ) + indexChange;

		// Correct out-of-range indexes
		index = index === menuItemsLength ? 0 : index === -1 ? menuItemsLength - 1 : index;

		// Move to the new menu item
		$menuItems.eq( index ).trigger( focusEvent );
	},

	/**
	 * @method menuClose
	 * @param {jQuery DOM element} $elm Parent of the element to close
	 * @param {boolean} removeActive Whether or not to keep the active class
	 */
	menuClose = function( $elm, removeActive ) {
		$elm
			.removeClass( "sm-open" )
			.children( ".open" )
			.removeClass( "open" )
			.attr( {
				"aria-hidden": "true",
				"aria-expanded": "false"
			} )

		// Close nested submenus
			.find( "details" )
			.removeAttr( "open" )
			.children( "ul" )
			.attr( {
				"aria-hidden": "true",
				"aria-expanded": "false"
			} );

		if ( removeActive ) {
			$elm.removeClass( "active" );
		}
	},

	/**
	 * @method menuDisplay
	 * @param {jQuery DOM element} $elm The plugin element
	 * @param {jQuery event} menu The menu to display
	 */
	menuDisplay = function( $elm, menu ) {
		var menuLink = menu.children( "a" );

		menuClose( $elm.find( ".active" ), true );

		menu.addClass( "active" );

		// Ignore if doesn't have a submenu
		if ( menuLink.attr( "aria-haspopup" ) === "true" ) {

			// Add the open state classes
			menu
				.addClass( "sm-open" )
				.children( ".sm" )
				.addClass( "open" )
				.attr( {
					"aria-hidden": "false",
					"aria-expanded": "true"
				} );
		}
	},

	/**
	 * Searches for the next link that has link text starting with a specific letter
	 * @method selectByLetter
	 * @param {integer} charCode The charCode of the letter to search for
	 * @param {DOM elements} links Collection of links to search
	 */
	selectByLetter = function( charCode, links ) {
		var len = links.length,
			keyChar = String.fromCharCode( charCode ),
			link, i;

		for ( i = 0; i !== len; i += 1 ) {
			link = links[ i ];
			if ( link.innerHTML.charAt( 0 ) === keyChar ) {
				$( link ).trigger( focusEvent );
				return true;
			}
		}

		return false;
	};

// Bind the events of the plugin
$document.on( "timerpoke.wb " + initEvent + " ajax-fetched.wb ajax-failed.wb", selector, function( event ) {

	var eventType = event.type,
		elm, $elm;

	switch ( eventType ) {
	case "ajax-fetched":
	case "ajax-failed":
		elm = event.target;

		// Filter out any events triggered by descendants
		if ( event.currentTarget === elm ) {
			$elm = $( elm );

			// Only replace the menu if there isn't an error
			onAjaxLoaded(
				$elm,
				eventType === "ajax-fetched" ? event.fetch.pointer : $elm
			);
		}
		return false;

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

$document.on( "mouseleave", selector + " .menu", function( event ) {
	var $currentTarget = $( event.currentTarget );

	// Clear the timeout for open/closing menus
	clearTimeout( globalTimeout );

	globalTimeout = setTimeout( function() {
		menuClose( $currentTarget.find( ".active" ), true );
	}, hoverDelay );
} );

// Prevent opening another menu if mouse re-enters already opened menu
$document.on( "mouseenter", selector + " .sm", function() {
	if ( $( this ).attr( "aria-expanded" ) === "true" ) {
		clearTimeout( globalTimeout );
	}
} );

// Touchscreen "touches" on menubar items should close the submenu if it is open
$document.on( "click", selector + " .item[aria-haspopup=true]", function( event ) {
	var which = event.which,
		$this, $parent;

	// Ignore middle and right mouse buttons
	if ( !which || which === 1 ) {
		event.preventDefault();
		$this = $( this );
		$parent = $this.parent();

		// Open the submenu if it is closed
		if ( !$parent.hasClass( "sm-open" ) ) {
			$this.trigger( "focusin" );
		}
	}
} );

// Click on menu items with submenus should open and close those submenus
$document.on( "click", selector + " [role=menu] [aria-haspopup=true]", function( event ) {
	var menuItem = event.currentTarget,
		parent = menuItem.parentNode,
		submenu = parent.getElementsByTagName( "ul" )[ 0 ],
		isOpen = submenu.getAttribute( "aria-hidden" ) === "false",
		menuItemOffsetTop, menuContainer;

	// Close any other open menus
	if ( !isOpen ) {
		$( parent )
			.closest( "[role^='menu']" )
			.find( "[aria-hidden=false]" )
			.parent()
			.find( "[aria-haspopup=true]" )
			.not( menuItem )
			.trigger( "click" );

		// Ensure the opened menu is in view if in a mobile panel
		menuContainer = document.getElementById( "mb-pnl" );
		menuItemOffsetTop = menuItem.offsetTop;
		if ( $.contains( menuContainer, menuItem ) &&
			menuItemOffsetTop < menuContainer.scrollTop ) {

			menuContainer.scrollTop = menuItemOffsetTop;
		}
	}

	submenu.setAttribute( "aria-expanded", !isOpen );
	submenu.setAttribute( "aria-hidden", isOpen );
} );

// Clicks and touches outside of menus should close any open menus
$document.on( "click", function( event ) {
	var $openMenus,
		which = event.which;

	// Ignore middle and right mouse buttons
	if ( event.type === "" || ( !which || which === 1 ) ) {
		$openMenus = $( selector + " .sm-open" );
		if ( $openMenus.length !== 0 &&
			$( event.target ).closest( selector ).length === 0 ) {

			menuClose( $openMenus, true );
		}
	}
} );

$document.on( "mouseover focusin", selector + " .item", function( event ) {
	var $elm = $( event.currentTarget ),
		$parent = $elm.parent(),
		$container = $parent.closest( selector );

	// Clear the timeout for open/closing menus
	clearTimeout( globalTimeout );

	if ( event.type === "focusin" ) {
		menuDisplay( $container, $parent );
	} else {
		globalTimeout = setTimeout( function() {
			menuDisplay( $container, $parent );
		}, hoverDelay );
	}
} );

/*
 * Keyboard bindings
 */
$document.on( "keydown", selector + " [role=menuitem]", function( event ) {
	var menuItem = event.currentTarget,
		which = event.which,
		$menuItem = $( menuItem ),
		hasPopup = $menuItem.attr( "aria-haspopup" ) === "true",
		$menu = $menuItem.parent().closest( "[role^='menu']" ),
		inMenuBar = $menu.attr( "role" ) === "menubar",
		$menuLink, $parentMenu, $parent, $subMenu, result,
		menuitemSelector, isOpen, menuItemOffsetTop, menuContainer;

	// Define keycodes. (Make const when WET supports ES6)
	var TAB_KC = 9,
		ENTER_KC = 13,
		ESC_KC = 27,
		LEFT_KC = 37,
		UP_KC = 38,
		RIGHT_KC = 39,
		DOWN_KC = 40,
		SPACE_KC = 32;

	if ( !( event.ctrlKey || event.altKey || event.metaKey ) ) {

		// Tab key = Hide all sub-menus
		if ( which === TAB_KC ) {
			menuClose( $( selector + " .active" ), true );

		//Enter or spacebar on a link = follow the link and close menus
		} else if ( menuItem.nodeName === "A" && menuItem.hasAttribute( "href" ) &&
			( which === ENTER_KC || which === SPACE_KC ) ) {

			event.preventDefault();
			menuItem.click();
			menuClose( $( selector + " .active" ), true );

		// Menu item is within a menu bar
		} else if ( inMenuBar ) {

			// Left / right arrow = Previous / next menu item
			if ( which === LEFT_KC || which === RIGHT_KC ) {
				event.preventDefault();
				menuIncrement(
					$menu.find( "> li > a" ),
					$menuItem,
					which === LEFT_KC ? -1 : 1
				);

			// Enter sub-menu
			} else if ( hasPopup && ( which === ENTER_KC || which === SPACE_KC || which === UP_KC || which === DOWN_KC ) ) {
				event.preventDefault();
				$parent = $menuItem.parent();
				$subMenu = $parent.find( ".sm" );

				// Open the submenu if it is not already open
				if ( !$subMenu.hasClass( "open" ) ) {
					menuDisplay( $menu.closest( selector ), $parent );
				}

				// Set focus on the first submenu item
				$subMenu.children( "li" ).eq( 0 ).find( menuItemSelector ).trigger( focusEvent );

			// Hide sub-menus and set focus
			} else if ( which === ESC_KC ) {
				event.preventDefault();
				menuClose( $menu.closest( selector ).find( ".active" ), false );

			// Letters only
			} else if ( which > 64 && which < 91 ) {
				event.preventDefault();
				selectByLetter(
					which,
					$menuItem.parent().find( "> ul > li > a, > ul > li > details > summary" ).get()
				);
			}

		// Menu item is not within a menu bar
		} else {
			menuitemSelector = menuItemSelector;

			// Up / down arrow = Previous / next menu item
			if ( which === UP_KC || which === DOWN_KC ) {
				event.preventDefault();
				menuIncrement(
					$menu.children( "li" ).find( menuitemSelector ),
					$menuItem,
					which === UP_KC ? -1 : 1
				);

			// Enter, space, or right arrow with a submenu
			} else if ( hasPopup && ( which === ENTER_KC || which === SPACE_KC || which === RIGHT_KC ) ) {
				$parent = $menuItem.parent();

				// Prevent handling by details.js polyfill
				event.stopImmediatePropagation();
				event.preventDefault();

				// If the menu item is a summary element
				if ( menuItem.nodeName.toLowerCase( "summary" ) ) {
					isOpen = !!$parent.attr( "open" );

					// Close any other open menus
					if ( !isOpen ) {
						$( parent )
							.closest( "[role^='menu']" )
							.find( "[aria-hidden=false]" )
							.parent()
							.find( "[aria-haspopup=true]" )
							.not( menuItem )
							.trigger( "click" );

						// Ensure the opened menu is in view if in a mobile panel
						menuContainer = document.getElementById( "mb-pnl" );
						menuItemOffsetTop = menuItem.offsetTop;
						if ( $.contains( menuContainer, menuItem ) &&
							menuItemOffsetTop < menuContainer.scrollTop ) {

							menuContainer.scrollTop = menuItemOffsetTop;
						}

						// Ensure the menu is opened or stays open
						$menuItem.trigger( "click" );
					}

					// Update the WAI-ARIA states and move focus to
					// the first submenu item
					$parent.children( "ul" )
						.attr( {
							"aria-expanded": "true",
							"aria-hidden": "false"
						} )
						.find( "[role=menuitem]:first" )
						.trigger( "setfocus.wb" );
				}

			// Escape, left / right arrow without a submenu
			} else if ( which === ESC_KC || which === LEFT_KC || which === RIGHT_KC ) {
				$parent = $menu.parent();
				$parentMenu = $parent.closest( "[role^='menu']" );
				if ( which === LEFT_KC || which === RIGHT_KC ) {
					event.preventDefault();
				}

				// If the parent menu is a menubar
				if ( $parentMenu.attr( "role" ) === "menubar" ) {
					$menuLink = $menu.siblings( "a" );

					// Escape key = Close menu and return to menu bar item
					if ( which === ESC_KC ) {
						event.preventDefault();
						$menuLink.trigger( focusEvent );

						// Close the menu but keep the referring link active
						setTimeout( function() {
							menuClose( $menuLink.parent(), false );
						}, 100 );

					// Left / right key = Next / previous menu bar item
					} else if ( $parentMenu.attr( "role" ) === "menubar" ) {
						menuIncrement(
							$parentMenu.find( "> li > a" ),
							$menuLink,
							which === LEFT_KC ? -1 : 1
						);
					}

				// Escape or left arrow: Go up a level if there is a higher-level
				// menu or close the current submenu if there isn't
				} else if ( which !== RIGHT_KC ) {
					$subMenu = $parentMenu.length !== 0 ? $menu : $menuItem;

					// There is a higher-level menu
					if ( $parentMenu.length !== 0 ) {
						event.preventDefault();
						$menu.closest( "li" )
							.find( menuitemSelector )
							.trigger( "click" )
							.trigger( "setfocus.wb" );

					// No higher-level menu but the current submenu is open
					} else if ( $menuItem.parent().children( "ul" ).attr( "aria-hidden" ) === "false" ) {
						event.preventDefault();
						$menuItem
							.trigger( "click" )
							.trigger( "setfocus.wb" );
					}
				}

			// Select a menu item in the current menu by the first letter
			} else if ( which > 64 && which < 91 ) {
				event.preventDefault();
				$parent = $menuItem.closest( "li" );

				// Try to find a match in the next siblings
				result = selectByLetter(
					which,
					$parent.nextAll().find( menuitemSelector ).get()
				);

				// If couldn't find a match, try the previous siblings
				if ( !result ) {
					result = selectByLetter(
						which,
						$parent.prevAll().find( menuitemSelector ).get()
					);
				}
			}
		}
	}
} );

// Prevent Firefox from double-triggering menu behaviour
$document.on( "keyup", selector + " [role=menuitem]", function( event ) {
	event.preventDefault();
	return false;
} );

// Close the mobile panel if switching to medium, large or extra large view
$document.on( "mediumview.wb largeview.wb xlargeview.wb", function() {
	var mobilePanel = document.getElementById( "mb-pnl" );
	if ( mobilePanel && mobilePanel.getAttribute( "aria-hidden" ) === "false" ) {
		$( mobilePanel ).trigger( "close.wb-overlay" );
	}
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );

/**
 * @title WET-BOEW Multimedia PLayer
 * @overview An accessible multimedia player for <audio> and <video> tags
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET Community
 */
/* globals YT */
( function( $, DOMPurify, window, wb, undef ) {
"use strict";

/* Local scoped variables*/
var componentName = "wb-mltmd",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	ctrls = selector + " .wb-mm-ctrls",
	dispCtrls = selector + " .display," + ctrls,
	template,
	i18n, i18nText,
	youtubeReadyEvent = "ready.youtube",
	captionsLoadedEvent = "ccloaded" + selector,
	captionsLoadFailedEvent = "ccloadfail" + selector,
	captionsVisibleChangeEvent = "ccvischange" + selector,
	renderUIEvent = "renderui" + selector,
	initializedEvent = "inited" + selector,
	youtubeEvent = "youtube" + selector,
	resizeEvent = "resize" + selector,
	templateLoadedEvent = "templateloaded" + selector,
	cuepointEvent = "cuepoint" + selector,
	captionClass = "cc_on",
	multimediaEvents = [
		"durationchange",
		"playing",
		"pause",
		"ended",
		"volumechange",
		"timeupdate",
		"waiting",
		"canplay",
		"seeked",
		"progress",
		captionsLoadedEvent,
		captionsLoadFailedEvent,
		captionsVisibleChangeEvent,
		cuepointEvent
	].join( " " ),
	$document = wb.doc,
	$window = wb.win,

	/**
	 * @function init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var eventTarget = wb.init( event, componentName, selector );

		if ( eventTarget ) {

			// Only initialize the i18nText once
			if ( !i18nText ) {

				// YT workaround for when played inside a modal dialog, like with lightbox
				//
				// the issue is when the iFrame is moved, it reloads and then it doesn't emit the right event to
				// adjust the WET multimedia controller to represent its current state.
				//
				// This needs to be executed only once, that is why it is in the i18nText conditional
				window.addEventListener( "message", function( e ) {
					var data, frames, i, i_len, i_cache;

					// Ensure we don't conflict with other postMessage listener
					try {
						data = JSON.parse( e.data );

						// Only for a specific YT message
						if ( data.event && data.event === "infoDelivery" && data.info && data.info.playerState ) {

							// Find the iFrame and evaluate if it needs to be reposted
							frames = document.getElementsByTagName( "iframe" );

							i_len = frames.length;
							for ( i = 0; i < i_len; i++ ) {
								i_cache = frames[ i ];
								if ( i_cache.dataset.L2 && i_cache.contentWindow === e.source  ) {

									// Prepare the event data and emulate the YT object for our event management need
									youTubeEvents.call( i_cache, {
										target: i_cache.parentElement.parentElement.object,
										data: data.info.playerState
									} );
									break;
								}
							}
						}
					} catch ( err ) {

						/* swallow error */
					}
				} );

				//
				// END YT workaround
				//

				i18n = wb.i18n;
				i18nText = {
					play: i18n( "mmp-play" ),
					pause: i18n( "pause" ),
					volume: i18n( "volume" ),
					cc_on: i18n( "cc", "on" ),
					cc_off: i18n( "cc", "off" ),
					cc_error: i18n( "cc-err" ),
					fs: i18n( "fs" ),
					mute_on: i18n( "mute", "on" ),
					mute_off: i18n( "mute", "off" ),
					duration: i18n( "dur" ),
					position: i18n( "pos" )
				};
			}

			if ( template === undef ) {
				template = "";
				$( eventTarget ).trigger( {
					type: "ajax-fetch.wb",
					fetch: {
						url: wb.getPath( "/assets" ) + "/mediacontrols.html"
					}
				} );
			} else if ( template !== "" ) {
				$( eventTarget ).trigger( templateLoadedEvent );
			}
		}
	},

	/* helper functions*/

	/**
	 * @method formatTime
	 * @description format a number of seconds to SMTPE Timecode format (HH:MM:SS.FF)
	 * @param {Float} time The time to format
	 * @returns {String} the formatted time
	 */
	formatTime = function( time ) {
		var index = 2,
			timecode = "",
			secondsIn, current, pad;

		pad = function( number, digits ) {
			return new Array( Math.max( digits - String( number ).length + 1, 0 ) ).join( 0 ) + number;
		};

		time = Math.floor( time );

		//Loop to extract hours, minutes and seconds
		while ( index >= 0 ) {

			//Get the number of seconds for the current iteration (hour, minute or second)
			secondsIn = Math.pow( 60, index );
			current = Math.floor( time / secondsIn );

			if ( timecode !== "" ) {
				timecode += ":";
			}

			timecode += pad( current, 2 );
			time -= secondsIn * current;
			index -= 1;
		}
		return timecode;
	},

	/**
	 * @method parseTime
	 * @description parse an SMTPE Timecode string (HH:MM:SS.FF) or duration (45s) and returns the number of seconds for the timecode
	 * @param {String} time The timecode or duration string to parse
	 * @returns {Float} the number of seconds in time
	 */
	parseTime = function( time ) {
		var i, parts, timeStringPortion, partLength, seconds;

		if ( time !== undef ) {
			if ( time.charAt( time.length - 1 ) === "s" ) {

				//Duration parsing
				return parseFloat( time.substring( 0, time.length - 1 ) );
			} else {

				//SMTPE Timecode Parsing
				parts = time.split( ":" ).reverse();
				seconds = 0;

				for ( i = 0, partLength = parts.length; i < partLength; i += 1 ) {
					timeStringPortion = i === 0 ?
						parseFloat( parts[ i ] ) :
						parseInt( parts[ i ], 10 );
					seconds += timeStringPortion * Math.pow( 60, i );
				}
				return seconds;
			}
		}
		return -1;
	},

	/*
	 * Peformant micro templater
	 * @credit: https://github.com/premasagar/tim/blob/master/tinytim.js
	 * @todo: caching
	 */
	tmpl = ( function() {
		var start = "{{",
			end = "}}",

			// e.g. config.person.name
			path = "[a-z0-9_$][\\.a-z0-9_]*",
			pattern = new RegExp( start + "\\s*(" + path + ")\\s*" + end, "gi" );
		return function( template, data ) {

			// Merge data into the template string
			return template.replace( pattern, function( tag, token ) {
				var path = token.split( "." ),
					len = path.length,
					lookup = data,
					i = 0;
				for ( ; i < len; i += 1 ) {
					lookup = lookup[ path[ i ] ];

					// Property not found
					if ( lookup === undef ) {
						throw "tim: '" + path[ i ] + "' not found in " + tag;
					}

					// Return the required value
					if ( i === len - 1 ) {
						return lookup;
					}
				}
			} );
		};
	}() ),

	/**
	 * @method parseHtml
	 * @description parse an HTML fragment and extract embed captions
	 * @param {String} content The HTML fragment containing the captions
	 * @returns {Array} An array of captions objects (ex: {text: "Caption", begin: 0, end :10})
	 */
	parseHtml = function( content ) {
		var captions = [],
			captionSelector = ".wb-tmtxt",
			captionElements = content.find( captionSelector ),
			len = captionElements.length,
			i, captionElement, json, begin, end;

		for ( i = 0; i !== len; i += 1 ) {
			captionElement = $( captionElements[ i ] );
			begin = -1;
			end = -1;

			if ( captionElement.attr( "data-begin" ) !== undef ) {
				begin = parseTime( captionElement.attr( "data-begin" ) );
				end = captionElement.attr( "data-end" ) !== undef ?
					parseTime( captionElement.attr( "data-end" ) ) :
					parseTime( captionElement.attr( "data-dur" ) ) + begin;
			} else if ( captionElement.attr( "data" ) !== undef ) {
				json = captionElement.attr( "data" )
					.replace( /(begin|dur|end)/g, "\"$1\"" )
					.replace( /'/g, "\"" );
				json = $.parseJSON( json );
				begin = parseTime( json.begin );
				end = json.end !== undef ?
					parseTime( json.end ) :
					parseTime( json.dur ) + begin;
			}

			//Removes nested captions if an
			captionElement = captionElement.clone();
			captionElement.find( captionSelector ).detach();

			captions[ captions.length ] = {
				text: captionElement.html(),
				begin: begin,
				end: end
			};
		}
		return captions;
	},

	/**
	 * @method parseXml
	 * @description parse an TTML (Xml) document and extract captions
	 * @param {String} content The TTML fragment containing the captions
	 * @returns {Array} An array of captions objects (ex: {text: "Caption", begin: 0, end :10})
	 */
	parseXml = function( content ) {
		var captions = [],
			captionSelector = "[begin]",
			parser = new DOMParser(),
			doc = parser.parseFromString( content, "application/xml" ),
			captionElements = doc.querySelectorAll( captionSelector ),
			len = captionElements.length,
			i, captionElement, begin, end;

		for ( i = 0; i !== len; i += 1 ) {
			captionElement = captionElements[ i ];

			begin = parseTime( captionElement.getAttribute( "begin" ) + "" );
			end = captionElement.hasAttribute( "end" ) ?
				parseTime( captionElement.getAttribute( "end" ) + "" ) :
				parseTime( captionElement.getAttribute( "dur" ) + "" ) + begin;

			captions[ captions.length ] = {
				text: DOMPurify.sanitize( captionElement.textContent ),
				begin: begin,
				end: end
			};
		}
		return captions;
	},

	/**
	 * @method loadCaptionsExternal
	 * @description Loads captions from an external source (HTML embed or TTML)
	 * @param {Object} elm The jQuery object for the multimedia player loading the captions
	 * @param {String} url The url for the captions resource to load
	 * @fires ccloaded.wb-mltmd
	 * @fires ccloadfail.wb-mltmd
	 */
	loadCaptionsExternal = function( elm, url ) {
		$.ajax( {
			url: url,
			dataType: "html",

			//Filters out images and objects from the content to avoid loading them
			dataFilter: function( data ) {
				return data.replace( /<img|object [^>]*>/g, "" );
			},
			success: function( data ) {

				var captionItems;

				if ( data.indexOf( "<html" ) !== -1 ) {

					// Sanitize the response
					captionItems = parseHtml( $( DOMPurify.sanitize( data, { WHOLE_DOCUMENT: true } ) ) );
				} else {

					// Response is sanitized in the XML parser function
					captionItems = parseXml( data );
				}

				if ( captionItems.length ) {
					elm.trigger( {
						type: captionsLoadedEvent,
						captions: captionItems
					} );
				} else {
					elm.trigger( {
						type: captionsLoadFailedEvent
					} );
				}
			},
			error: function( response, textStatus, errorThrown ) {
				elm.trigger( {
					type: captionsLoadFailedEvent,
					error: errorThrown
				} );
			}
		} );
	},

	/**
	 * @method loadCaptionsInternal
	 * @description Loads same page captions emebed in HTML
	 * @param {Object} elm The jQuery object for the multimedia player loading the captions
	 * @param {Object} obj The jQUery object containing the captions
	 * @fires ccloaded.wb-mltmd
	 */
	loadCaptionsInternal = function( elm, obj ) {
		var captionItems = parseHtml( obj );

		if ( captionItems.length ) {
			elm.trigger( {
				type: captionsLoadedEvent,
				captions: captionItems
			} );
		} else {
			elm.trigger( {
				type: captionsLoadFailedEvent
			} );
		}
	},

	/**
	 * @method updateCaptions
	 * @description Update the captions for a multimedia player (called from the timeupdate event of the HTML5 media API)
	 * @param {Object} area The jQuery object for the element where captions are displayed
	 * @param {Float} seconds The current time of the media (use to sync the captions)
	 * @param {Object} captions The JavaScript object containing the captions
	 */
	updateCaptions = function( area, seconds, captions ) {
		var caption, i,
			captionsLength = captions.length;

		// added &#160; (non-breaking space) to prevent caption space from collapsing
		// Used .html() instead of .append for performance purposes
		// https://jsperf.com/jquery-append-vs-html-list-performance/2
		area.html( "&#160;" );

		for ( i = 0; i < captionsLength; i += 1 ) {
			caption = captions[ i ];
			if ( seconds >= caption.begin && seconds <= caption.end ) {
				area.html( $( "<div>" + caption.text + "</div>" ) );
			}
		}
	},

	/**
	 * @method playerApi
	 * @description Normalizes the calls to the HTML5 media API
	 * @param {String} fn The function to call
	 * @param {object} args The arguments to send to the function call
	 */
	playerApi = function( fn, args ) {
		var $this, method;

		switch ( fn ) {
		case "play":
			try {
				this.object.play();
			} catch ( ex ) {
				this.object.doPlay();
			}
			break;
		case "pause":
			try {
				this.object.pause();
			} catch ( ex ) {
				this.object.doPause();
			}
			break;
		case "getCaptionsVisible":
			return $( this ).hasClass( captionClass );
		case "setCaptionsVisible":
			$this = $( this );
			if ( args ) {
				$this.addClass( captionClass );
			} else {
				$this.removeClass( captionClass );
			}
			$this.trigger( captionsVisibleChangeEvent );
			break;
		case "fullscreen":
			if ( this.object.requestFullscreen ) {
				this.object.requestFullscreen();
			} else if ( this.object.webkitRequestFullscreen ) { /* Safari */
				this.object.webkitRequestFullscreen();
			} else if ( this.object.msRequestFullscreen ) { /* IE11 */
				this.object.msRequestFullscreen();
			}
			break;
		case "getBuffering":
			return this.object.buffering || false;
		case "setBuffering":
			this.object.buffering = args;
			break;
		case "getPreviousTime":
			return this.object.previousTime;
		case "setPreviousTime":
			this.object.previousTime = args;
			break;
		default:
			method = fn.charAt( 3 ).toLowerCase() + fn.substr( 4 );
			switch ( fn.substr( 0, 3 ) ) {
			case "get":
				return typeof this.object[ method ] !== "function" ?
					this.object[ method ] :
					this.object[ method ]();
			case "set":
				typeof this.object[ method ] !== "function" ?
					this.object[ method ] = args :
					this.object[ fn ]( args );
			}
		}
	},

	/**
	 * @method youTubeApi
	 * @description Normalizes the calls to the YouTube API
	 * @param {String} fn The function to call
	 * @param {object} args The arguments to send to the function call
	 */
	youTubeApi = function( fn, args ) {
		var $media = $( this.object.getIframe() ),
			state;

		switch ( fn ) {
		case "play":
			this.object.wasMutedPlay = this.object.isMuted();
			return this.object.playVideo();
		case "pause":
			return this.object.pauseVideo();
		case "getPaused":
			state = this.object.getPlayerState();
			return state === -1 || state === 0 || state === 2 || state === 5;
		case "getPlayed":
			return this.object.getPlayerState() > -1;
		case "getEnded":
			return this.object.getPlayerState() === 0;
		case "getDuration":
			return this.object.getDuration();
		case "getCurrentTime":
			return this.object.getCurrentTime();
		case "setCurrentTime":
			return this.object.seekTo( args, true );
		case "fullscreen":
			return this.object.getIframe().requestFullscreen();
		case "getMuted":
			if ( !this.object.playedOnce && this.object.wasMutedPlay ) {
				state = this.object.wasMutedPlay;
				this.object.playedOnce = true;
				return state;
			} else {
				return this.object.isMuted();
			}
		case "setMuted":
			if ( args ) {
				this.object.mute();
			} else {
				this.object.unMute();
			}
			setTimeout( function() {
				$media.trigger( "volumechange" );
			}, ( wb.isReady ? 50 : 500 ) );
			break;
		case "getVolume":
			return this.object.getVolume() / 100;
		case "setVolume":
			this.object.setVolume( args * 100 );
			setTimeout( function() {
				$media.trigger( "volumechange" );
			}, 50 );
			break;
		case "getCaptionsVisible":
			return $( this ).hasClass( captionClass );
		case "setCaptionsVisible":
			if ( args ) {
				$( this ).addClass( captionClass );
				try {
					this.object.loadModule( "cc" );
					this.object.setOption( "cc", "track", { languageCode: this.object.getOption( "cc", "tracklist" )[ 0 ].languageCode } );
				} catch ( e ) {
					this.object.loadModule( "captions" );
					this.object.setOption( "captions", "track", { languageCode: this.object.getOption( "captions", "tracklist" )[ 0 ].languageCode } );
				}
			} else {
				$( this ).removeClass( captionClass );
				this.object.unloadModule( "cc" );
				this.object.unloadModule( "captions" );
			}
			$media.trigger( "ccvischange" );
		}
	},

	/**
	 * @method youTubeEvents
	 * @description Youtube API event manager
	 * @param {object} event The event object fior the triggered event
	 */
	youTubeEvents = function( event ) {
		var media = event.target.getIframe(),
			$media = $( media ),
			timeline = function() {
				$media.trigger( "timeupdate" );
			},
			$mltmPlayerElm,
			mltmPlayerElm,
			isMuted;

		switch ( event.data ) {
		case null: // init
			$media
				.trigger( "canplay" )
				.trigger( "durationchange" );

			// Put video on mute if the video is muted on init, run once
			$mltmPlayerElm = $media.parentsUntil( selector ).parent();

			// Mute the player, GUI
			if ( $mltmPlayerElm.data( "putMutedOnInit" ) ) {
				youTubeApi.call( $mltmPlayerElm.get( 0 ), "setMuted", true );
				$mltmPlayerElm.data( "putMutedOnInit", false );
			}
			break;
		case -1:
			event.target.unMute();
			$media.trigger( "durationchange" );
			break;
		case 0:
			$media.trigger( "ended" );
			media.timeline = clearInterval( media.timeline );
			break;
		case 1: // play

			// Get the media player
			$mltmPlayerElm = $media.parentsUntil( selector ).parent();
			mltmPlayerElm = $mltmPlayerElm.get( 0 );

			// Need to be muted here
			isMuted = mltmPlayerElm.player( "getMuted" );

			// Reset the close caption state when iframe was reloaded
			if ( media.dataset.L2 ) {
				youTubeApi.call( mltmPlayerElm, "setCaptionsVisible", $mltmPlayerElm.hasClass( captionClass ) );
			}

			// Play
			$media
				.trigger( "canplay" )
				.trigger( "play" )
				.trigger( "playing" );

			// Reset muted as needed because youtube onMute by default when playing
			if ( isMuted ) {
				youTubeApi.call( mltmPlayerElm, "setMuted", true );
			}

			media.timeline = setInterval( timeline, 250 );
			break;
		case 2:
			$media.trigger( "pause" );
			media.timeline = clearInterval( media.timeline );
			break;
		case 3:
			media.timeline = clearInterval( media.timeline );
			break;
		}
	},

	youTubeAPIReady = function() {
		var youTube = window.youTube;
		youTube.ready = true;
		$document.trigger( youtubeReadyEvent );
	},

	onResize = function() {
		$( selector + " object, " + selector + " iframe, " +  selector + " video" ).trigger( resizeEvent );
	};

$document.on( "timerpoke.wb " + initEvent, selector, init );

$window.on( "resize", onResize );

$document.on( "ready", onResize );

$document.on( "ajax-fetched.wb " + templateLoadedEvent, selector, function( event ) {
	var $this = $( this );

	if ( event.type === "ajax-fetched" ) {
		template = event.fetch.pointer.html();

		//Notify all player waiting for the controls to load
		$this = $( selector );
	}

	$this.trigger( {
		type: initializedEvent
	} );
} );

$document.on( initializedEvent, selector, function( event ) {
	if ( event.namespace === componentName ) {
		var $this = $( this ),
			$media = $this.children( "audio, video" ).eq( 0 ),
			captions = $media.children( "track[kind='captions']" ).attr( "src" ) || undef,
			id = $this.attr( "id" ),
			mId = $media.attr( "id" ) || id + "-md",
			type = $media.is( "audio" ) ? "audio" : "video",
			title = $media.attr( "title" ) || "",
			width = type === "video" ? $media.attr( "width" ) || $media.width() : 0,
			height = type === "video" ? $media.attr( "height" ) || $media.height() : 0,
			settings = wb.getData( $this, componentName ),
			data = $.extend( {
				media: $media,
				captions: captions,
				id: id,
				mId: mId,
				type: type,
				title: title,
				height: height,
				width: width
			}, i18nText ),
			media = $media.get( 0 ),
			youTube = window.youTube,
			url,
			i18n = wb.i18n;

		if ( $media.attr( "id" ) === undef ) {
			$media.attr( "id", mId );
		}

		if ( settings !== undef ) {
			data.shareUrl = settings.shareUrl;
			data.fullscreen = settings.fullscreenBtn || false;
		}

		$this.addClass( type );

		if ( $media.find( "[type='video/youtube']" ).length > 0 ) {

			// lets tweak some variables and start the load sequence
			url = wb.getUrlParts( $this.find( "[type='video/youtube']" ).attr( "src" ) );

			// lets set the flag for the call back
			data.youTubeId = url.params.v ? url.params.v : url.pathname.substr( 1 );

			// Defaults config set on the video element
			data.isInitMuted = $media.get( 0 ).muted;

			if ( youTube.ready === false ) {
				$document.one( youtubeReadyEvent, function() {
					$this.trigger( youtubeEvent, data );
				} );
			} else {
				$this.trigger( youtubeEvent, data );
			}

			// finally lets load safely
			return Modernizr.load( {
				load: "https://www.youtube.com/iframe_api",

				//possible solution for multimedia and doaction conflict in corporate network
				complete: function() {

					// Ensure that Youtube API is loading the iframe and if it fails, ensure that it will show a message, like accessing the web via our GC network.
					setTimeout( function() {
						var resources, arrIframesYt, $notifText;

						resources = window.performance.getEntriesByType( "resource" );

						/* get all the iframe initiators that have the same YT url id */
						arrIframesYt  = resources.filter( function( obj ) {

							return obj.initiatorType === "iframe" && obj.name.includes( data.youTubeId );

						} );


						/* if none found, most probably wb is loaded in restricted network so wb.ready() is triggered for not preventing other wb components to load*/
						if ( arrIframesYt.length < 1 ) {
							if ( !wb.isReady ) {

								// show the video notification error
								$notifText = $( "<div aria-live='polite' class='pstn-lft-xs bg-dark text-white'><p class='mrgn-tp-md mrgn-rght-md mrgn-bttm-md mrgn-lft-md'>" + i18n( "msgYoutubeNotLoad" ) + "</p></div>" );
								$this.prepend( $notifText );
								data.notifyText = $notifText;
								wb.ready( $this, componentName );
							}
						}
					}, 1000 );

				}
			} );

		} else if ( media.error === null && media.currentSrc !== "" && media.currentSrc !== undef ) {
			$this.trigger( renderUIEvent, [ type, data ] );

			// Identify that initialization has completed
			wb.ready( $this, componentName );
		}
	}
} );

/*
 *  Youtube Video mode Event
 */
$document.on( youtubeEvent, selector, function( event, data ) {
	if ( event.namespace === componentName ) {
		var mId = data.mId,
			$this = $( event.currentTarget ),
			$media, ytPlayer;

		ytPlayer = new YT.Player( mId, {
			videoId: data.youTubeId,
			playerVars: {
				autoplay: 0,
				controls: 0,
				origin: wb.pageUrlParts.host,
				modestbranding: 1,
				rel: 0,
				showinfo: 0,
				html5: 1,
				cc_load_policy: 1
			},
			events: {
				onReady: function( event ) {
					if ( data.notifyText ) {
						data.notifyText.hide();
					}
					onResize();
					youTubeEvents( event );
					if ( !wb.isReady ) {
						wb.ready( $this, componentName );
					}
				},
				onStateChange: youTubeEvents,
				onApiChange: function() {

					//If captions were enabled before the module was ready, re-enable them
					var t = $this.get( 0 );
					t.player( "setCaptionsVisible", t.player( "getCaptionsVisible" ) );
				},
				onError: function() {
					console.warn( "There is an issue loading the Youtube player" );
				}
			}
		} );

		$this.addClass( "youtube" );

		$media = $this.find( "#" + mId ).attr( "tabindex", -1 );

		data.media = $media;
		data.ytPlayer = ytPlayer;

		// The fullscreen button is not visible by default because there are no controls when in full screen.
		if ( data.fullscreen ) {
			$this.attr( "data-fullscreen-btn", true );
		}

		// Detect if the YT player reloads, like when magnific Popup show the modal, because it moves the iframe
		// and then the iframe gets refreshed and reloaded. So the issue is that the iframe stops emitting the event
		// needed to adjust the multimedia player controler, like the "onStateChange" event.
		$media.on( "load", function( evt ) {

			var elm = evt.currentTarget,
				ds = elm.dataset;

			// Do nothing on the first load and add a flag to indicate it is loaded a second time
			if ( ds.L1 ) {
				ds.L2 = true;
			} else {
				ds.L1 = true;
			}
		} );

		$this.trigger( renderUIEvent, [ "youtube", data ] );
	}
} );

$document.on( renderUIEvent, selector, function( event, type, data ) {
	if ( event.namespace === componentName ) {
		var $this = $( event.currentTarget ),
			captionsUrl = wb.getUrlParts( data.captions ),
			currentUrl = wb.getUrlParts( window.location.href ),
			$media = data.media,
			$eventReceiver;

		$media
			.after( tmpl( template, data ) )
			.wrap( "<div class=\"display\"></div>" );

		$eventReceiver = $media.is( "object" ) ? $media.children( ":first-child" ) : $media;

		// Create an adapter for the event management
		$eventReceiver.on( multimediaEvents, function( event ) {
			$this.trigger( event );
		} );

		this.object = data.ytPlayer || $media.get( 0 );
		this.player = ( data.ytPlayer ) ? youTubeApi : playerApi;

		// Trigger the duration change for cases where the event was called before the event binding
		if ( type !== "youtube" && !isNaN( this.player( "getDuration" ) ) ) {
			$eventReceiver.trigger( "durationchange" );
		}

		// Load the progress polyfill if needed
		$this.find( "progress" ).trigger( "wb-init.wb-progress" );

		// Load the slider polyfill if needed
		$this.find( "input[type='range']" ).trigger( "wb-init.wb-slider" );

		// Create the share widgets if needed
		if ( data.shareUrl !== undef ) {
			$( "<div class='wb-share' data-wb-share='{\"type\": \"" +
				( type === "audio" ? type : "video" ) + "\", \"title\": \"" +
				data.title.replace( /'/g, "&apos;" ) + "\", \"url\": \"" + data.shareUrl +
				"\", \"pnlId\": \"" + data.id + "-shr\"}'></div>" )
				.insertBefore( $media.parent() )
				.trigger( "wb-init.wb-share" );
		}

		if ( data.isInitMuted ) {
			$this.data( "putMutedOnInit", true );
		} else if ( !data.ytPlayer && this.object.muted ) {
			$media.trigger( "volumechange" );
		}

		if ( data.captions === undef ) {
			return 1;
		}

		// Load the captions
		if ( currentUrl.absolute.replace( currentUrl.hash || "#", "" ) !== captionsUrl.absolute.replace( captionsUrl.hash || "#", "" ) ) {
			loadCaptionsExternal( $media, captionsUrl.absolute );
		} else {
			loadCaptionsInternal( $media, $( "#" + wb.jqEscape( captionsUrl.hash.substring( 1 ) ) ) );
		}

		// The fullscreen button is not visible by default because there are no controls when in full screen.
		if ( data.fullscreen ) {
			$this.attr( "data-fullscreen-btn", true );
		}
	}
} );

/*
 * UI Bindings
 */

$document.on( "click", selector, function( event ) {
	var $target = $( event.target ),
		className = $target.attr( "class" ) || "";

	// Ignore middle and right mouse buttons
	if ( event.which === 2 || event.which === 3 ) {
		return true;
	}

	// Optimized multiple class tests to include child glyphicon because Safari was reporting the click event
	// from the child span not the parent button, forcing us to have to check for both elements
	// JSPerf for multiple class matching https://jsperf.com/hasclass-vs-is-stackoverflow/7
	if (  /playpause|-play|-pause|display/.test( className ) || $target.is( "object" ) || $target.is( "video" ) ) {
		this.player( "getPaused" ) || this.player( "getEnded" ) ? this.player( "play" ) : this.player( "pause" );
	} else if ( /(^|\s)cc\b|-subtitles/.test( className ) && !$target.attr( "disabled" ) && !$target.parent().attr( "disabled" ) ) {
		this.player( "setCaptionsVisible", !this.player( "getCaptionsVisible" ) );
	} else if ( /\bmute\b|-volume-(up|off)/.test( className ) ) {
		this.player( "setMuted", !this.player( "getMuted" ) );
	} else if ( $target.is( "progress" ) || $target.hasClass( "progress" ) || $target.hasClass( "progress-bar" ) ) {
		this.player( "setCurrentTime", this.player( "getDuration" ) * ( ( event.pageX - $target.offset().left ) / $target.width() ) );
	} else if ( /\brewind\b|-backward/.test( className ) ) {
		this.player( "setCurrentTime", this.player( "getCurrentTime" ) - this.player( "getDuration" ) * 0.05 );
	} else if ( /\bfastforward\b|-forward/.test( className ) ) {
		this.player( "setCurrentTime", this.player( "getCurrentTime" ) + this.player( "getDuration" ) * 0.05 );
	} else if ( className.includes( "cuepoint" ) ) {
		$( this ).trigger( { type: "cuepoint", cuepoint: $target.data( "cuepoint" ) } );
	} else if ( /fullscreen|fs/.test( className ) ) {
		this.player( "fullscreen" );
	}
} );

$document.on( "input change", selector, function( event ) {
	var target = event.target;

	if ( $( target ).hasClass( "volume" ) ) {
		event.currentTarget.player( "setMuted", false );
		event.currentTarget.player( "setVolume", target.value / 100 );
	}
} );

$document.on( "keydown", dispCtrls, function( event ) {
	var playerTarget = event.currentTarget.parentNode,
		which = event.which,
		volume = 0,
		step = 0.05,
		$playerTarget = $( playerTarget );

	if ( !( event.ctrlKey || event.altKey || event.metaKey ) ) {
		switch ( which ) {
		case 32:

			// Mute/unmute if focused on the mute/unmute button or volume input.
			if ( $( event.target ).hasClass( "mute" ) || event.target.nodeName === "INPUT" ) {
				$playerTarget.find( ".mute" ).trigger( "click" );
			} else if ( $( event.target ).hasClass( "fs" ) ) {

				// Enter full screen if focused on the full screen button
				$playerTarget.find( ".fs" ).trigger( "click" );
			} else if ( $( event.target ).hasClass( "cc" ) ) {

				// Show/hide captions if focused on the closed captions button.
				$playerTarget.find( ".cc" ).trigger( "click" );
			} else {

				// Play/pause if focused on anything else (i.e. the video itself, play/pause button or progress bar).
				$playerTarget.find( ".playpause" ).trigger( "click" );
			}
			break;

		case 37:
			playerTarget.player( "setCurrentTime", this.parentNode.player( "getCurrentTime" ) - this.parentNode.player( "getDuration" ) * 0.05 );
			break;

		case 39:
			playerTarget.player( "setCurrentTime", this.parentNode.player( "getCurrentTime" ) + this.parentNode.player( "getDuration" ) * 0.05 );
			break;

		case 38:
			volume = Math.round( playerTarget.player( "getVolume" ) * 100 ) / 100 + step;
			playerTarget.player( "setVolume", volume < 1 ? volume : 1 );
			break;

		case 40:
			volume = Math.round( playerTarget.player( "getVolume" ) * 100 ) / 100 - step;
			playerTarget.player( "setVolume", volume > 0 ? volume : 0 );
			break;

		default:
			return true;
		}
		return false;
	}
} );

$document.on( "keyup", ctrls, function( event ) {
	if ( event.which === 32 && !( event.ctrlKey || event.altKey || event.metaKey ) ) {

		// Allows the spacebar to be used for play/pause without double triggering
		return false;
	}
} );

$document.on( "wb-activate", selector, function() {
	this.player( "play" );
} );

$document.on( "closed.wb-overlay", ".wb-overlay", function( event ) {
	var mltmdPlayer = event.currentTarget.querySelector( selector );
	if ( mltmdPlayer ) {
		mltmdPlayer.player( "pause" );
	}
} );

$document.on( multimediaEvents, selector, function( event, simulated ) {
	var eventTarget = event.currentTarget,
		eventType = event.type,
		eventNamespace = event.namespace,
		$this = $( eventTarget ),
		invStart = "<span class='wb-inv'>",
		invEnd = "</span>",
		currentTime, $button, $slider, buttonData, isPlay, isMuted, isCCVisible, skipTo, volume;
	switch ( eventType ) {
	case "playing":
	case "pause":
	case "ended":
		isPlay = eventType === "playing";
		$button = $this.find( ".playpause" );
		buttonData = $button.data( "state-" + ( isPlay ? "off" : "on" ) );
		if ( isPlay ) {
			$this.addClass( "playing" );
			$this.find( ".progress" ).addClass( "active" );
		} else {
			if ( eventType === "ended" ) {
				this.loading = clearTimeout( this.loading );
			}
			$this.removeClass( "playing" );
		}
		$button
			.attr( "title", buttonData )
			.children( "span" )
			.toggleClass( "glyphicon-play", !isPlay )
			.toggleClass( "glyphicon-pause", isPlay )
			.html( invStart + buttonData + invEnd );
		break;

	case "volumechange":
		isMuted = eventTarget.player( "getMuted" );
		$button = $this.find( ".mute" );
		buttonData = $button.data( "state-" + ( isMuted ? "off" : "on" ) );
		volume = eventTarget.player( "getVolume" ) * 100;
		$button
			.attr( {
				title: buttonData,
				"aria-pressed": isMuted
			} )
			.children( "span" )
			.toggleClass( "glyphicon-volume-up", !isMuted )
			.toggleClass( "glyphicon-volume-off", isMuted )
			.html( invStart + buttonData + invEnd );
		$slider = $this.find( "input[type='range']" );
		$slider[ 0 ].value = isMuted ? 0 : volume;
		$slider.trigger( "wb-update.wb-slider" );
		break;

	case "timeupdate":
		currentTime = eventTarget.player( "getCurrentTime" );
		$this.find( "progress" )
			.attr(
				"value",
				Math.round( currentTime / eventTarget.player( "getDuration" ) * 1000 ) / 10
			).trigger( "wb-update.wb-progress" );

		$this.find( ".wb-mm-tmln-crrnt span:nth-child(2)" )
			.text( formatTime( currentTime ) );

		if ( $this.hasClass( captionClass ) && $.data( eventTarget, "captions" ) !== undef ) {
			updateCaptions(
				$this.find( ".wb-mm-cc" ),
				currentTime,
				$.data( eventTarget, "captions" )
			);
		}
		break;

	case "durationchange":
		$this.find( ".wb-mm-tmln-ttl span:nth-child(2)" )
			.text( formatTime( eventTarget.player( "getDuration" ) ) );

		// Skip to pointer from the querystring
		skipTo = wb.pageUrlParts.params[ event.target.id ];
		if ( skipTo ) {
			skipTo = parseTime( skipTo );
			eventTarget.player( "setCurrentTime", skipTo );
		}
		break;

	case "ccloaded":
		if ( eventNamespace === componentName ) {
			$.data( eventTarget, "captions", event.captions );
		}
		break;

	case "ccloadfail":
		if ( eventNamespace === componentName ) {
			if ( !$this.hasClass( "errmsg" ) ) {
				$this.addClass( "cc_on errmsg" )
					.find( ".wb-mm-cc" )
					.append( "<div>" + i18nText.cc_error + "</div>" )
					.end()
					.find( ".cc" )
					.attr( "disabled", "" )
					.removeAttr( "aria-pressed" );
			}
		}
		break;

	case "ccvischange":
		if ( eventNamespace === componentName ) {
			isCCVisible = eventTarget.player( "getCaptionsVisible" );
			$button = $this.find( ".cc" );
			buttonData = $button.data( "state-" + ( isCCVisible ? "off" : "on" ) );
			$button.attr( {
				title: buttonData,
				"aria-pressed": isCCVisible
			} ).children( "span" ).html( invStart + buttonData + invEnd );
		}
		break;

	case "waiting":
		if ( !simulated ) {
			$document.off( "progress", selector );
		}
		this.loading = setTimeout( function() {
			$this.addClass( "waiting" );
		}, 500 );
		break;

	case "canplay":
	case "seeked":
		this.loading = clearTimeout( this.loading );
		$this.removeClass( "waiting" );
		break;
	case "cuepoint":
		eventTarget.player( "setCurrentTime", parseTime( event.cuepoint ) );
		break;
	}
} );

// Fallback for browsers that don't implement the waiting events
$document.on( "progress", selector, function( event ) {
	var eventTarget = event.currentTarget,
		$this = $( eventTarget );

	// Waiting detected
	if ( this.player( "getPaused" ) === false && this.player( "getCurrentTime" ) === this.player( "getPreviousTime" ) ) {
		if ( eventTarget.player( "getBuffering" ) === false ) {
			eventTarget.player( "setBuffering", true );
			$this.trigger( "waiting", true );
		}

	// Waiting has ended
	} else if ( eventTarget.player( "getBuffering" ) === true ) {
		eventTarget.player( "setBuffering", false );
		$this.trigger( "canplay", true );
	}
	eventTarget.player( "setPreviousTime", eventTarget.player( "getCurrentTime" ) );
} );

$document.on( resizeEvent, selector, function( event ) {
	if ( event.namespace === componentName ) {
		var media = event.target,
			$media = $( media ),
			ratio, newHeight;

		if ( $( event.currentTarget ).hasClass( "video" ) ) {
			if ( media.videoWidth === 0 || media.videoWidth === undef ) {
				ratio = $media.attr( "height" ) / $media.attr( "width" );

				// Calculate the new height based on the specified ratio or assume a default 16:9 ratio
				newHeight = Math.round( $media.width() * ( !isNaN( ratio ) ? ratio : 0.5625 ) );

				$media.css( "height", newHeight + "px" );
			} else {
				$media.css( "height", "" );
			}
		}
	}
} );

window.onYouTubeIframeAPIReady = youTubeAPIReady;

window.youTube = {
	ready: false
};

wb.add( selector );

} )( jQuery, DOMPurify, window, wb );

/**
 * @title WET-BOEW NavCurrent
 * @overview Identify URL in a navigation system that matches current page URL or a URL in the breadcrumb trail. Call by applying .trigger( "navcurr.wb", breadcrumb ) where the breadcrumb parameter is an optional object (DOM or jQuery)
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-navcurr",
	selector = "." + componentName,
	$document = wb.doc,
	breadcrumbLinksArray, breadcrumbLinksUrlArray,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 * @param {jQuery DOM element | DOM element} breadcrumb Optional breadcrumb element
	 * @param {string} classNameOverride Optional class name override (default is wb-navcurr)
	 */
	init = function( event, breadcrumb, classNameOverride ) {
		if ( event.namespace === "wb" ) {

			// Start initialization
			// returns DOM object = proceed with init
			// returns undefined = do not proceed with init (e.g., already initialized)
			var menu = wb.init( event.target, componentName, selector ),
				menuLinks = menu.getElementsByTagName( "a" ),
				menuLinksArray = [],
				menuLinksUrlArray = [],
				windowLocation = window.location,
				pageUrl = windowLocation.hostname + windowLocation.pathname.replace( /^([^/])/, "/$1" ),
				pageUrlQuery = windowLocation.search,
				match = false,
				className = classNameOverride ? classNameOverride : componentName,
				child, len, i, j, link, linkHref, linkUrl, linkQuery, linkQueryLen,
				localBreadcrumbLinks, localBreadcrumbLinksArray, localBreadcrumbLinksUrlArray,
				localBreadcrumbQuery, localBreadcrumbLinkUrl;

			if ( menu ) {

				// Try to find a match with the page Url and cache link + Url for later if no match found
				// Perform the check and caching in reverse to go from more specific links to more general links
				for ( i = menuLinks.length - 1; i !== -1; i -= 1 ) {
					link = menuLinks[ i ];
					linkHref = link.getAttribute( "href" );
					if ( linkHref !== null ) {
						if ( linkHref.length !== 0 && linkHref.charAt( 0 ) !== "#" ) {
							linkUrl = link.hostname + link.pathname.replace( /^([^/])/, "/$1" );
							linkQuery = link.search;
							linkQueryLen = linkQuery.length;
							if ( pageUrl.slice( -linkUrl.length ) === linkUrl && ( linkQueryLen === 0 || pageUrlQuery.slice( -linkQueryLen ) === linkQuery ) ) {
								match = true;
								break;
							}
							menuLinksArray.push( link );
							menuLinksUrlArray.push( linkUrl );
						}
					}
				}

				// No page Url match found, try a breadcrumb link match instead
				if ( !match && breadcrumb ) {

					// Check to see if the data has been cached already
					if ( !breadcrumbLinksArray ) {

						// Pre-process the breadcrumb links
						localBreadcrumbLinksArray = [];
						localBreadcrumbLinksUrlArray = [];
						localBreadcrumbLinks = ( breadcrumb.jquery ? breadcrumb[ 0 ] : breadcrumb ).getElementsByTagName( "li" );
						len = localBreadcrumbLinks.length;
						if ( len ) {
							link = localBreadcrumbLinks[ len - 1 ];
							child = link.firstChild;
							linkHref = ( child && child.nodeName === "A" ) ? child.getAttribute( "href" ) : "";
							if ( linkHref && linkHref.charAt( 0 ) !== "#" ) {
								localBreadcrumbLinksArray.push( child );
								localBreadcrumbLinksUrlArray.push( child.hostname + child.pathname.replace( /^([^/])/, "/$1" ) );
							}
						}

						// Cache the data in case of more than one execution (e.g., site menu + secondary navigation)
						breadcrumbLinksArray = localBreadcrumbLinksArray;
						breadcrumbLinksUrlArray = localBreadcrumbLinksUrlArray;
					} else {

						// Retrieve the cached data
						localBreadcrumbLinksArray = breadcrumbLinksArray;
						localBreadcrumbLinksUrlArray = breadcrumbLinksUrlArray;
					}

					// Try to match each breadcrumb link
					len = menuLinksArray.length;
					for ( j = localBreadcrumbLinksArray.length - 1; j !== -1; j -= 1 ) {
						localBreadcrumbLinkUrl = localBreadcrumbLinksUrlArray[ j ];
						localBreadcrumbQuery = localBreadcrumbLinksArray[ j ].search;

						for ( i = 0; i !== len; i += 1 ) {
							link = menuLinksArray[ i ];
							linkUrl = menuLinksUrlArray[ i ];
							linkQuery = link.search;
							linkQueryLen = linkQuery.length;

							if ( localBreadcrumbLinkUrl.slice( -linkUrl.length ) === linkUrl && ( linkQueryLen === 0 || localBreadcrumbQuery.slice( -linkQueryLen ) === linkQuery ) ) {
								match = true;
								break;
							}
						}
						if ( match ) {
							break;
						}
					}
				}

				if ( match ) {
					link.className += " " + className;
					if ( menu.className.indexOf( "wb-menu" ) !== -1 && link.className.indexOf( "item" ) === -1 ) {
						$( link ).closest( ".sm" ).parent().children( "a" ).addClass( className );
					}
				}

				// Identify that initialization has completed
				wb.ready( $( menu ), componentName );
			}
		}
	};

// Bind the navcurrent event of the plugin
$document.on( "navcurr.wb", init );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Overlay
 * @overview Provides multiple styles of overlays such as panels and pop-ups
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @thomasgohard, @pjackson28
 */
( function( $, window, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-overlay",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	closeClass = "overlay-close",
	linkClass = "overlay-lnk",
	ignoreOutsideClass = "outside-off",
	OverlayOpenFlag = "wb-overlay-dlg",
	initialized = false,
	sourceLinks = {},
	setFocusEvent = "setfocus.wb",
	$document = wb.doc,
	i18n, i18nText,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm, footer, $header, closeText, overlayClose;

		if ( elm ) {
			$elm = $( elm );

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					close: i18n( "close" ),
					colon: i18n( "colon" ),
					space: i18n( "space" ),
					esc: i18n( "esc-key" ),
					closeOverlay: i18n( closeClass )
				};
			}

			// One left and right panels add close button
			var isPanel = ( $elm.attr( "class" ).indexOf( "wb-panel" ) > -1 ) ? true : false,
				isPopup = ( $elm.attr( "class" ).indexOf( "wb-popup" ) > -1 ) ? true : false;
			if ( isPanel || isPopup ) {
				footer = $elm.find( ".modal-footer" )[ 0 ];

				var hasFooter = ( footer && footer.length !== 0 ) ? true : false,
					hasButton = hasFooter && $( footer ).find( "." + closeClass ).length !== 0,
					closeClassFtr = ( $elm.hasClass( "wb-panel-l" ) ? "pull-right " : "pull-left " )  + closeClass,
					closeTextFtr = i18nText.close,
					spanTextFtr = i18nText.closeOverlay,
					overlayCloseFtr;

				if ( !hasButton ) {
					if ( !hasFooter ) {
						footer = document.createElement( "div" );
						footer.setAttribute( "class", "modal-footer" );
					}

					if ( isPopup ) {
						footer.style.border = "0";
					}

					overlayCloseFtr = "<button type='button' class='btn btn-sm btn-primary " + closeClassFtr +
						"' title='" + spanTextFtr + "'>" +
						closeTextFtr +
						"<span class='wb-inv'>" + spanTextFtr + "</span></button>";

					$( footer ).append( overlayCloseFtr );
					if ( !hasFooter ) {
						$elm.append( footer );
					}
				}
			}

			// Add close button
			$header = $elm.find( ".modal-title" );
			if ( $header.length !== 0 ) {
				closeText = i18nText.close + i18nText.colon + i18nText.space +
					$header.text() + i18nText.space + i18nText.esc;
			} else {
				closeText = i18nText.closeOverlay;
			}
			closeText = closeText.replace( "'", "&#39;" );
			overlayClose = "<button type='button' class='mfp-close " + closeClass +
				"' title='" + closeText + "'>&#xd7;<span class='wb-inv'> " +
				closeText + "</span></button>";

			$elm.append( overlayClose );
			elm.setAttribute( "aria-hidden", "true" );

			// Identify that initialization has completed
			initialized = true;
			wb.ready( $elm, componentName );
		}
	},

	openOverlay = function( overlayId, noFocus ) {
		var $overlay = $( "#" + wb.jqEscape( overlayId ) );

		$overlay
			.addClass( "open" )
			.attr( "role", "dialog" )
			.attr( "aria-hidden", "false" );

		if ( $overlay.hasClass( "wb-popup-full" ) || $overlay.hasClass( "wb-popup-mid" ) ) {
			$overlay.attr( "data-pgtitle", document.getElementsByTagName( "H1" )[ 0 ].textContent );
			$document.find( "body" ).addClass( OverlayOpenFlag );
		}

		if ( !noFocus ) {
			$overlay
				.scrollTop( 0 )
				.trigger( setFocusEvent );
		}

		// Register the overlay if it wasn't previously registered
		// (only required when opening through an event)
		if ( !sourceLinks[ overlayId ] ) {
			setTimeout( function() {
				sourceLinks[ overlayId ] = null;
			}, 1 );
		}

		$overlay.trigger( "opened" + selector );
	},

	closeOverlay = function( overlayId, noFocus, userClosed ) {
		var $overlay = $( "#" + overlayId ),
			sourceLink = sourceLinks[ overlayId ];

		$overlay
			.removeClass( "open" )
			.removeAttr( "role" )
			.attr( "aria-hidden", "true" );

		if ( $overlay.hasClass( "wb-popup-full" ) || $overlay.hasClass( "wb-popup-mid" ) ) {
			$document.find( "body" ).removeClass( OverlayOpenFlag );
		}

		if ( userClosed ) {
			$overlay.addClass( "user-closed" );
		}

		if ( !noFocus && sourceLink ) {

			// Returns focus to the source link for the overlay
			$( sourceLink ).trigger( setFocusEvent );
		}

		// Delete the source link reference
		delete sourceLinks[ overlayId ];

		$overlay.trigger( "closed" + selector );
	};

$document.on( "timerpoke.wb " + initEvent + " keydown open" + selector +
" close" + selector, selector, function( event ) {

	var eventType = event.type,
		which = event.which,
		eventTarget = event.target,
		eventTurrentTarget = event.currentTarget,
		overlayId = eventTurrentTarget.id,
		overlay, $focusable, index, length;

	switch ( eventType ) {
	case "timerpoke":
	case "wb-init":
		init( event );
		break;

	case "open":
		if ( eventTurrentTarget === eventTarget ) {
			openOverlay( overlayId, event.noFocus );
		}
		break;

	case "close":
		if ( eventTurrentTarget === eventTarget ) {
			closeOverlay( overlayId, event.noFocus );
		}
		break;

	default:
		overlay = document.getElementById( overlayId );

		switch ( which ) {

		// Tab key
		case 9:

			// No special tab handling when ignoring outside activity
			if ( overlay.className.indexOf( ignoreOutsideClass ) === -1 ) {
				$focusable = $( overlay ).find( ":focusable:not([tabindex='-1'])" );
				length = $focusable.length;
				index = $focusable.index( event.target ) + ( event.shiftKey ? -1 : 1 );

				if ( index === -1 || index === length ) {
					event.preventDefault();
					$focusable.eq( index === -1 ? length - 1 : 0 )
						.trigger( setFocusEvent );
				}
			}
			break;

		// Escape key
		case 27:
			if ( !event.isDefaultPrevented() ) {
				closeOverlay( overlayId, false, true );
			}
			break;
		}
	}
} );

// Handler for clicking on the close button of the overlay
$document.on( "click", "." + closeClass, function( event ) {
	var which = event.which;

	// Ignore if not initialized and middle/right mouse buttons
	if ( initialized && ( !which || which === 1 ) ) {
		closeOverlay(
			$( event.currentTarget ).closest( selector ).attr( "id" ),
			false,
			true
		);
	}
} );

// Handler for clicking on a source link for the overlay
$document.on( "click keydown", "." + linkClass, function( event ) {
	var which = event.which,
		sourceLink = event.currentTarget,
		overlayId = sourceLink.hash.substring( 1 );

	// Ignore if not initialized and middle/right mouse buttons
	if ( initialized && ( !which || which === 1 || which === 32 ) ) {
		event.preventDefault();

		// Introduce a delay to prevent outside activity detection
		setTimeout( function() {

			// Stores the source link for the overlay
			sourceLinks[ overlayId ] = sourceLink;

			// Opens the overlay
			openOverlay( overlayId );
		}, 1 );
	}
} );

// Handler for clicking on a same page link within the overlay to outside the overlay
$document.on( "click", selector + " a[href^='#']", function( event ) {
	var which = event.which,
		eventTarget = event.target,
		href, overlay, linkTarget;

	// Ignore if not initialized and middle/right mouse buttons
	if ( initialized && ( !which || which === 1 ) ) {
		overlay = $( eventTarget ).closest( selector )[ 0 ];
		href = eventTarget.getAttribute( "href" );
		linkTarget = document.getElementById( href.substring( 1 ) );

		// Ignore same page links to within the overlay
		if ( href.length > 1 && !$.contains( overlay, linkTarget ) ) {

			// Stop propagation of the click event
			if ( event.stopPropagation ) {
				event.stopImmediatePropagation();
			} else {
				event.cancelBubble = true;
			}

			// Close the overlay and set focus to the same page link
			closeOverlay( overlay.id, true );
			$( linkTarget ).trigger( setFocusEvent );
		}
	}
} );

// Outside activity detection
$document.on( "click focusin", "body", function( event ) {
	var eventTarget = event.target,
		which = event.which,
		overlayId, overlay;

	// Ignore if not initialized and middle/right mouse buttons
	if ( initialized && ( !which || which === 1 ) ) {

		// Close any overlays with outside activity
		for ( overlayId in sourceLinks ) {
			overlay = document.getElementById( overlayId );
			if ( overlay && overlay.getAttribute( "aria-hidden" ) === "false" &&
				eventTarget.id !== overlayId &&
				overlay.className.indexOf( ignoreOutsideClass ) === -1 &&
				!$.contains( overlay, eventTarget ) ) {

				// Close the overlay
				closeOverlay( overlayId );
			}
		}
	}
} );

// Ensure any element in focus outside an overlay is visible
$document.on( "keyup", function( ) {
	var elmInFocus, elmInFocusRect, focusAreaBelow, focusAreaAbove,
		overlayId, overlay, overlayRect;

	// Ignore if not initialized
	if ( initialized ) {
		elmInFocus = document.activeElement;
		elmInFocusRect = elmInFocus.getBoundingClientRect();
		focusAreaBelow = 0;
		focusAreaAbove = window.innerHeight;

		// Ensure that at least one overlay is visible, and that the element in focus is not an overlay,
		// a child of an overlay, or the body element
		if ( $.isEmptyObject( sourceLinks ) || elmInFocus.className.indexOf( componentName ) !== -1 ||
			$( elmInFocus ).parents( selector ).length !== 0 || elmInFocus === document.body ) {
			return;
		}

		// Determine the vertical portion of the viewport that is not obscured by an overlay
		for ( overlayId in sourceLinks ) {
			overlay = document.getElementById( overlayId );
			if ( overlay && overlay.getAttribute( "aria-hidden" ) === "false" ) {
				overlayRect = overlay.getBoundingClientRect();
				if ( overlay.className.indexOf( "wb-bar-t" ) !== -1 ) {
					focusAreaBelow = Math.max( overlayRect.bottom, focusAreaBelow );
				} else if ( overlay.className.indexOf( "wb-bar-b" ) !== -1 ) {
					focusAreaAbove = Math.min( overlayRect.top, focusAreaAbove );
				}
			}
		}

		// Ensure the element in focus is visible
		// TODO: Find a solution for when there isn't enough page to scoll up or down
		if ( elmInFocusRect.top < focusAreaBelow ) {

			// Scroll down till the top of the element is visible
			window.scrollBy( 0, focusAreaBelow - elmInFocusRect.top );
		} else if ( elmInFocusRect.bottom > focusAreaAbove ) {

			// Scroll up till the bottom of the element is visible
			window.scrollBy( 0, elmInFocusRect.bottom - focusAreaAbove );
		}
	}
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );

/**
 * @title WET-BOEW Tag filter
 * @overview Filter based content tagging
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, window, document, wb ) {
"use strict";

let i18n, i18nText;

const componentName = "wb-paginate",
	selector = ".provisional." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	filterClass = "wb-fltr-out",
	pgFilterOutClass = "wb-pgfltr-out",
	tagFilterClass = "wb-tgfltr-out",
	pagerClass = "wb-paginate-pager",
	pageData = "data-pagination-idx",
	notFilterClassSel = ":not(." + filterClass + "):not(." + tagFilterClass + ")",
	defaults = {
		lst: {
			selector: "li"
		},
		grp: {
			selector: "> *"
		},
		tbl: {
			selector: "tr",
			section: ":scope > tbody"
		},
		itemsPerPage: 10
	},

	init = function( event ) {
		const elm = wb.init( event, componentName, selector );

		if ( elm ) {
			var $elm = $( elm ),
				paginationElm,
				elmTagName = elm.nodeName,
				setDefault,
				uiTargetElm;

			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					prv: i18n( "prv" ),
					nxt: i18n( "nxt" )
				};
			}

			// Setup configurations
			switch ( elmTagName ) {
			case "UL":
				setDefault = defaults.lst;
				break;
			case "TABLE":
				setDefault = defaults.tbl;
				break;
			default:
				setDefault = defaults.grp;
				break;
			}

			elm.id = elm.id || wb.getId();
			elm.pgSettings = $.extend( true, {}, setDefault, window[ componentName ], wb.getData( $elm, componentName ) );
			elm.pgSettings.currPage = 1;
			elm.pgSettings.itemsPerPage = elm.pgSettings.itemsPerPage || defaults.itemsPerPage;
			elm.pgSettings.items = elm.querySelectorAll( ( elm.pgSettings.section || ":scope" ) + " " + elm.pgSettings.selector + notFilterClassSel );

			// Setup pagination container
			paginationElm = document.createElement( "div" );
			paginationElm.id = componentName + "-" + elm.id;
			paginationElm.classList.add( pagerClass );

			// Add pagination container
			if ( elm.pgSettings.uiTarget ) {
				uiTargetElm = document.querySelector( elm.pgSettings.uiTarget );
				uiTargetElm.appendChild( paginationElm );
			} else if ( elm.pgSettings.section ) {
				if ( elmTagName === "UL" || elmTagName === "TABLE" ) {
					elm.after( paginationElm );
				} else {
					elm.querySelector( elm.pgSettings.section ).after( paginationElm );
				}
			} else {
				elm.after( paginationElm );
			}

			// Show/hide items and generate pagination
			updateItems( elm );
			generateUI( elm );

			wb.ready( $( elm ), componentName );
		}
	},

	// Set or reset pagination UI
	generateUI = function( elm ) {
		var paginationUI = "",
			currPage = elm.pgSettings.currPage,
			pagesCount = elm.pgSettings.pagesCount,
			paginationElm = document.querySelector( "#" + componentName + "-" + elm.id ),
			i = 1;

		// Make sure the defined current page is not bigger than the total pages
		if ( currPage > pagesCount ) {
			currPage = pagesCount;
		}

		// Only add pagination if there is more than one page
		if ( pagesCount > 1 ) {
			paginationUI = "<ol class=\"pagination\">";

			// Add Previous page button
			paginationUI += "<li" + ( i === currPage ? " class=\"disabled\"" : "" ) + "><a class=\"paginate-prev\" aria-controls=\"" + elm.id + "\" href=\"#" + elm.id + "\">" + i18nText.prv + "</a></li>";

			// Add pages buttons
			for ( i; i <= pagesCount; i++ ) {
				paginationUI += "<li class=\"" + returnItemClass( currPage, pagesCount, i ) + "\"" + ( i === currPage ? " aria-current=\"page\"" : "" ) + "><a href=\"#" + elm.id + "\" " + pageData + "=\"" + i + "\" aria-controls=\"" + elm.id + "\"><span class=\"wb-inv\">Page </span>" + i + "</a></li>";
			}

			// Add Next page button
			paginationUI += "<li" + ( i === currPage ? " class=\"disabled\"" : "" ) + "><a class=\"paginate-next\" aria-controls=\"" + elm.id + "\" href=\"#" + elm.id + "\">" + i18nText.nxt + "</a></li>";

			paginationUI += "</ol>";
		}

		// Insert HTML
		paginationElm.innerHTML = paginationUI;
	},

	// Show/hide items to reflect current page
	updateItems = function( elm ) {
		let currPage = elm.pgSettings.currPage,
			items = elm.pgSettings.items,
			itemsPerPage = elm.pgSettings.itemsPerPage;

		items.forEach( function( item, index ) {
			if ( ( index < ( itemsPerPage * currPage ) ) && ( index >= ( itemsPerPage * currPage ) - itemsPerPage ) ) {
				item.classList.remove( pgFilterOutClass );
			} else {
				item.classList.add( pgFilterOutClass );
			}
		} );

		elm.pgSettings.pagesCount = Math.ceil( items.length / itemsPerPage );
	},

	// Update pagination to reflect current page
	goToPage = function( elm ) {
		let paginationElm = document.querySelector( "#" + componentName + "-" + elm.id ),
			pageItems = paginationElm.querySelectorAll( "li" ),
			itemClass,
			pageLink,
			currPage = elm.pgSettings.currPage,
			pagesCount = elm.pgSettings.pagesCount;

		pageItems.forEach( function( pageItem, i ) {
			pageLink = pageItem.querySelector( "a" );

			if ( pageLink.classList.contains( "paginate-prev" ) ) {
				if ( currPage > 1 ) {
					pageItem.classList.remove( "disabled" );
				} else {
					pageItem.classList.add( "disabled" );
				}
			} else if ( pageLink.classList.contains( "paginate-next" ) ) {
				if ( currPage < pagesCount ) {
					pageItem.classList.remove( "disabled" );
				} else {
					pageItem.classList.add( "disabled" );
				}
			} else {
				pageItem.className = "";
				pageItem.removeAttribute( "aria-current" );

				itemClass = returnItemClass( currPage, pagesCount, i );

				if ( i === currPage ) {
					pageItem.setAttribute( "aria-current", "page" );
				}

				pageItem.className = itemClass;
			}
		} );
	},

	// Return the list item classname
	returnItemClass = function( currPage, pagesCount, i ) {
		let itemClass = "";

		if ( currPage > 1 && currPage < pagesCount ) {
			if ( Math.abs( currPage - i ) > 1 ) {
				itemClass += "hidden-xs hidden-sm";

				if ( Math.abs( currPage - i ) > 2 ) {
					itemClass += " hidden-md";
				}
			}
		} else {
			if ( Math.abs( currPage - i ) > 2 ) {
				itemClass += "hidden-xs hidden-sm";

				if ( Math.abs( currPage - i ) > 4 ) {
					itemClass += " hidden-md";
				}
			}
		}

		if ( pagesCount > 10 ) {
			if ( currPage <= 5 ) {
				if ( i > 10 ) {
					itemClass += " hidden";
				}
			} else if ( ( currPage > 5 ) && ( currPage < pagesCount - 5 ) ) {
				if ( ( i < currPage - 4 ) || ( i > currPage + 5 ) ) {
					itemClass += " hidden";
				}
			} else {
				if ( i <= pagesCount - 10 ) {
					itemClass += " hidden";
				}
			}
		}

		if ( i === currPage ) {
			itemClass += " active";
		}

		return itemClass;
	};

// When a filter is updated
$document.on( "click", "." + pagerClass + " a", function()  {
	let elm = document.querySelector( "#" + this.getAttribute( "aria-controls" ) ),
		pageDest = ( ( this.getAttribute( pageData ) ) * 1 ) || elm.pgSettings.currPage;

	if ( this.classList.contains( "paginate-next" ) ) {
		pageDest++;
	} else if ( this.classList.contains( "paginate-prev" ) ) {
		pageDest--;
	}

	if ( pageDest !== elm.pgSettings.currPage ) {
		elm.pgSettings.currPage = pageDest;

		updateItems( elm );
		goToPage( elm );
	}
} );

// Resets items and pagination
$document.on( "wb-contentupdated", selector, function() {
	this.pgSettings.currPage = 1;
	this.pgSettings.items = this.pgSettings.items = this.querySelectorAll( ( this.pgSettings.section || ":scope" ) + " " + this.pgSettings.selector + notFilterClassSel );

	updateItems( this );
	generateUI( this );
} );

$document.on( "timerpoke.wb " + initEvent, selector, init );

wb.add( selector );

} )( jQuery, window, document, wb );

/**
 * @title WET-BOEW Prettify Plugin
 * @overview Wrapper for Google Code Prettify library: https://github.com/google/code-prettify
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/*
 * Syntax highlighting of source code snippets in an html page using [google-code-prettify](https://github.com/google/code-prettify).
 *
 * 1. Apply `class="prettyprint"` to a `pre` or `code` element to apply syntax highlighting. Alternatively use `class="all-pre"` to apply syntax highlighting to all `pre` elements on the page.
 * 2. Apply `class="linenums"` to a `pre` or `code` element to add line numbers. Alternatively use `class="all-linenums"` to all applicable `pre` elements. Specify the starting number by adding `linenums:#` before `linenums`.
 * 3. Add extra language support by applying `class="lang-*"` to each applicable `pre` or `code` element. Supported language syntax CSS classes are as follows:
 *    - lang-apollo
 *    - lang-clj
 *    - lang-css
 *    - lang-dart
 *    - lang-go
 *    - lang-hs
 *    - lang-lisp
 *    - lang-lua
 *    - lang-ml
 *    - lang-n
 *    - lang-proto
 *    - lang-scala
 *    - lang-sql
 *    - lang-tex
 *    - lang-vb
 *    - lang-vhdl
 *    - lang-wiki
 *    - lang-xq
 *    - lang-yaml
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-prettify",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	prettyPrintEvent = "prettyprint" + selector,
	$document = wb.doc,

	/*
	 * Plugin users can override these defaults by setting attributes on the html elements that the
	 * selector matches.
	 */
	defaults = {
		linenums: false,
		allpre: false
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
			modeJS = wb.getMode() + ".js",
			deps = [ "site!deps/prettify" + modeJS ],
			$elm, classes, settings, i, len, $pre;

		if ( elm ) {
			$elm = $( elm );
			classes = elm.className.split( " " );

			// Merge default settings with overrides from the selected plugin element. There may be more than one, so don't override defaults globally!
			settings = $.extend( {}, defaults, $elm.data() );

			// Check the element for `lang-*` syntax CSS classes
			for ( i = 0, len = classes.length; i !== len; i += 1 ) {
				if ( classes[ i ].indexOf( "lang-" ) === 0 ) {
					deps.push( "site!deps/" + classes[ i ] + modeJS );
				}
			}

			// CSS class overides of settings
			settings.allpre = settings.allpre || $elm.hasClass( "all-pre" );
			settings.linenums = settings.linenums || $elm.hasClass( "linenums" );

			// Apply global settings
			if ( settings.allpre || settings.linenums ) {
				$pre = $document.find( "pre" );
				if ( settings.allpre ) {
					$pre.addClass( "prettyprint" );
				}
				if ( settings.linenums ) {
					$pre.filter( ".prettyprint" ).addClass( "linenums" );
				}
			}

			// Load the required dependencies and prettify the code once finished
			Modernizr.load( {
				load: deps,
				complete: function() {
					$document.trigger( prettyPrintEvent );
				}
			} );
		}
	},

	prettifyDone = function() {

		// Identify that initialization has completed
		wb.ready( $document, componentName );
	},

	/*
	 * Invoke the Google pretty print library if it has been initialized
	 * @method prettyprint
	 */
	prettyprint = function( event ) {
		if ( event.namespace === componentName &&
			typeof window.prettyPrint === "function" ) {

			window.prettyPrint( prettifyDone );
		}
	};

// Bind the plugin events
$document
	.on( "timerpoke.wb " + initEvent, selector, init )
	.on( prettyPrintEvent, prettyprint );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Resize
 * @overview Text and window resizing event handler
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, window, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-rsz",
	selector = "#" + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	sizes = [],
	events = [
		"txt-rsz.wb",
		"win-rsz-width.wb",
		"win-rsz-height.wb"
	],

	// Breakpoint names and lower pixel limits
	breakpoints = {
		xxsmallview: 0,
		xsmallview: 480,
		smallview: 768,
		mediumview: 992,
		largeview: 1200,
		xlargeview: 1600
	},
	resizeTest, currentView,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			localResizeTest;

		if ( elm ) {

			// Set up the DOM element used for resize testing
			localResizeTest = document.createElement( "span" );
			localResizeTest.innerHTML = "&#160;";
			localResizeTest.setAttribute( "id", componentName );
			document.body.appendChild( localResizeTest );
			resizeTest = localResizeTest;

			// Get a snapshot of the current sizes
			sizes = [
				localResizeTest.offsetHeight,
				window.innerWidth || $document.width(),
				window.innerHeight || $document.height()
			];

			// Determine the current view
			viewChange( sizes[ 1 ] );

			// Identify that initialization has completed
			wb.ready( $document, componentName );
		}
	},

	viewChange = function( viewportWidth ) {
		var breakpoint, viewName;

		// Check for a change between views
		for ( breakpoint in breakpoints ) {

			// Determine the current view
			if ( viewportWidth < breakpoints[ breakpoint ] ) {
				break;
			} else {
				viewName = breakpoint;
			}
		}

		// Determine if the current view is different than the previous view
		if ( viewName !== currentView ) {

			// Change the breakpoint class on the html element
			wb.html
				.removeClass( currentView || "" )
				.addClass( viewName );

			// Update the current view
			currentView = viewName;

			// Trigger the view event
			$document.trigger( viewName + ".wb" );
		}
	},

	/**
	 * Tests for text size, window width and window height changes and triggers an event when a change is found
	 * @method test
	 */
	test = function() {
		var currentSizes = [
				resizeTest.offsetHeight,
				window.innerWidth || $document.width(),
				window.innerHeight || $document.height()
			],
			len = currentSizes.length,
			i;

		// Check for a viewport or text size change
		for ( i = 0; i !== len; i += 1 ) {
			if ( currentSizes[ i ] !== sizes[ i ] ) {

				// Change detected so trigger related event
				$document.trigger( events[ i ], currentSizes );

				// Check for a view change
				viewChange( currentSizes[ 1 ] );
			}
		}
		sizes = currentSizes;

		return;
	};

// Bind the init event to the plugin
$document.on( initEvent, init );

// Re-test on each timerpoke
$document.on( "timerpoke.wb", selector, test );

// Initialize the resources
$document.trigger( initEvent );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );

/**
 * @title WET-BOEW Session Timeout
 * @overview Helps Web asset owners to provide session timeout and inactivity timeout functionality.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
( function( $, DOMPurify, window, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var $modal, $modalLink, countdownInterval, i18n, i18nText,
	$document = wb.doc,
	componentName = "wb-sessto",
	selector = "." + componentName,
	confirmClass = componentName + "-confirm",
	initEvent = "wb-init" + selector,
	resetEvent = "reset" + selector,
	keepaliveEvent = "keepalive" + selector,
	inactivityEvent = "inactivity" + selector,
	dataAttr = componentName,

	/*
	 * Plugin users can override these defaults by setting attributes on the html elements that the
	 * selector matches.
	 * For example, adding the attribute data-option1="false", will override option1 for that plugin instance.
	 */
	defaults = {
		inactivity: 1200000,		/* default inactivity period 20 minutes */
		reactionTime: 180000,		/* default confirmation period of 3 minutes */
		sessionalive: 1200000,		/* default keepalive period of 20 minutes */
		refreshCallbackUrl: null,	/* refresh callback if using AJAX keepalive (no default) */
		logouturl: "./",			/* logout URL once the session has expired */
		refreshOnClick: true,		/* refresh session if user clicks on the page */
		refreshLimit: 120000,		/* default period of 2 minutes (ajax calls happen only once during this period) */
		method: "POST",				/* the request method to use */
		additionalData: null,		/* additional data to send with the request */
		refreshCallback: function( response ) {	/* callback function used to check the server response */
			return response.replace( /\s/g, "" ) === "true";
		}
	},

	/**
	 * @function init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm, settings, onReady;

		if ( elm ) {
			$elm = $( elm );

			// For backwards compatibility where data-wet-boew was used instead of data-wb-sessto
			if ( !$elm.attr( "data-" + componentName ) ) {
				dataAttr = "wet-boew";
			}

			// Merge default settings with overrides from the plugin element
			// and save back to the element for future reference
			settings = $.extend( {}, defaults, window[ componentName ], $elm.data( dataAttr ) );
			$elm.data( dataAttr, settings );

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					buttonContinue: i18n( "st-btn-cont" ),
					buttonEnd: i18n( "st-btn-end" ),
					buttonSignin: i18n( "tmpl-signin" ),
					timeoutBegin: i18n( "st-to-msg-bgn" ),
					timeoutEnd: i18n( "st-to-msg-end" ),
					timeoutTitle: i18n( "st-msgbx-ttl" ),
					timeoutAlready: i18n( "st-alrdy-to-msg" )
				};
			}

			onReady = function() {

				// Setup the refresh on click behaviour
				initRefreshOnClick( $elm, settings );

				// Initialize the keepalive and inactive timeouts of the plugin
				$elm.trigger( resetEvent, settings );

				// Identify that initialization has completed
				wb.ready( $elm, componentName );
			};

			// Create the modal dialog
			initModalDialog( onReady );
		}
	},

	/**
	 * Initializes a timeout that triggers an event
	 * @function initEventTimeout
	 * @param {jQuery DOM Element} $elm Element to trigger the event on
	 * @param {string} eventName Name of the event to trigger on setTimeout
	 * @param {mixed} time Time to wait before triggering the event
	 * @param {Object} settings Key-value object
	 */
	initEventTimeout = function( $elm, eventName, time, settings ) {
		var duration = parseTime( time );

		// Clear any existing timeout for the event
		clearTimeout( $elm.data( eventName ) );

		// Create the new timeout that will trigger the event
		$elm.data( eventName, setTimeout( function() {
			$elm.trigger( eventName, settings );
		}, duration ) );
	},

	/**
	 * Creates the modal dialog element, appends to the <body> and initializes the lightbox plugin
	 * that is used to create the dialog behaviour.
	 * @function initModalDialog
	 */
	initModalDialog = function( callback ) {
		var modalID = "#" + componentName + "-modal",
			child, modal, temp;

		if ( $document.find( modalID ).length === 0 ) {
			modal = document.createDocumentFragment();
			temp = document.createElement( "div" );

			// Create the modal dialog.  A temp <div> element is used so that its innerHTML can be set as a string.
			temp.innerHTML = "<a class='wb-lbx lbx-modal mfp-hide' href='#" + componentName + "-modal'>" + i18nText.timeoutTitle + "</a>" +
				"<section id='" + componentName + "-modal' class='mfp-hide modal-dialog modal-content overlay-def'>" +
				"<header class='modal-header'><h2 class='modal-title'>" + i18nText.timeoutTitle + "</h2></header>" +
				"<div class='modal-body'></div>" +
				"<div class='modal-footer'></div>" +
				"</section>";

			// Get the temporary <div>'s top level children and append to the fragment
			while ( ( child = temp.firstChild ) !== null ) {
				modal.appendChild( child );
			}
			document.body.appendChild( modal );

			$modal = $document.find( modalID );

			// Get object references to the modal and its triggering link
			$modalLink = $modal.prev()
				.one( "wb-ready.wb-lbx", callback )
				.trigger( "wb-init.wb-lbx" );
		} else {
			callback();
		}
	},

	/**
	 * Initialize the refresh on click keepalive behaviour. This will cause a `keepalive.wb-sessto`
	 * event to be triggered when the document is clicked, limited by the settings.refreshLimit value.
	 * @function initRefreshOnClick
	 * @param {jQuery DOM Element} $elm DOM element to trigger the event on
	 * @param {Object} settings Key-value object that will be passed when event is triggered.
	 */
	initRefreshOnClick = function( $elm, settings ) {
		if ( settings.refreshOnClick ) {
			$document.on( "click", function( event ) {
				var className = event.target.className,
					lastActivity, currentTime;

				// Ignore clicks when the modal dialog is open
				if ( ( !className || className.indexOf( confirmClass ) === -1 ) &&
					$( ".mfp-ready ." + confirmClass ).length === 0 ) {

					lastActivity = $elm.data( "lastActivity" );
					currentTime = getCurrentTime();
					if ( !lastActivity || ( currentTime - lastActivity ) > settings.refreshLimit ) {
						$elm
							.trigger( resetEvent, settings )
							.trigger( keepaliveEvent, settings );
						$elm.data( "lastActivity", currentTime );
					}
				}
			} );
		}
	},

	/**
	 * Keepalive session event handler. Sends the POST request to determine if the session is still alive.
	 * @function keepalive
	 * @param {jQuery Event} event `keepalive.wb-sessto` event that triggered the function call
	 * @param {Object} settings Key-value object
	 */
	keepalive = function( event, settings ) {
		var $elm = $( event.target );
		if ( settings.refreshCallbackUrl !== null ) {
			$.ajax( {
				url: settings.refreshCallbackUrl,
				data: settings.additionalData,
				dataType: "text",
				method: settings.method,
				success: function( response ) {

					// Sanitize the response
					response = DOMPurify.sanitize( response );

					// Session is valid
					if ( response && settings.refreshCallback( response ) ) {
						$elm.trigger( resetEvent, settings );

					// Session has timed out - let the user know they need to sign in again
					} else {

						// End the inactivity timeouts since the session is already kaput
						clearTimeout( $elm.data( inactivityEvent ) );
						clearTimeout( $elm.data( keepaliveEvent ) );

						openModal( {
							body: "<p>" + i18nText.timeoutAlready + "</p>",
							buttons: $( "<button type='button' class='" + confirmClass +
								" btn btn-primary popup-modal-dismiss'>" + i18nText.buttonSignin + "</button>" )
								.data( "logouturl", settings.logouturl )
						} );
					}
				}
			} );
		}
	},

	/**
	 * Inactivity check event handler. Displays the modal dialog to allow the user to confirm their activity.
	 * @function inactivity
	 * @param {jQuery Event} event `inactivity.wb-sessto` event that triggered the function call
	 * @param {Object} settings Key-value object
	 */
	inactivity = function( event, settings ) {
		var $buttonContinue, $buttonEnd,
			time = getTime( settings.reactionTime ),
			startTime = getCurrentTime(),
			timeoutBegin = i18nText.timeoutBegin
				.replace( "#min#", "<span class='min'>" + time.minutes + "</span>" )
				.replace( "#sec#", "<span class='sec'>" + time.seconds + "</span>" ),
			buttonStart = "<button type='button' class='",
			buttonEnd = "</button>";

		// Clear the keepalive timeout to avoid double firing of requests
		clearInterval( $( event.target ).data( keepaliveEvent ) );

		$buttonContinue = $( buttonStart + confirmClass +
			" btn btn-primary popup-modal-dismiss'>" + i18nText.buttonContinue + buttonEnd )
			.data( settings )
			.data( "start", startTime );
		$buttonEnd = $( buttonStart + confirmClass + " btn btn-default'>" +
			i18nText.buttonEnd + buttonEnd )
			.data( "logouturl", settings.logouturl );

		openModal( {
			body: "<p>" + timeoutBegin + "<br />" + i18nText.timeoutEnd + "</p>",
			buttons: [ $buttonContinue, $buttonEnd ],
			open: function() {
				var $minutes = $modal.find( ".min" ),
					$seconds = $modal.find( ".sec" ),
					endDuration = settings.reactionTime;

				countdownInterval = setInterval( function() {
					if ( countdown( $minutes, $seconds, startTime, endDuration ) ) {
						clearInterval( countdownInterval );

						// Let the user know their session has timed out
						$modal.find( "p" ).text( i18nText.timeoutAlready );
						$buttonContinue.text( i18nText.buttonSignin );
						$buttonEnd.hide();
					}
				}, 500 );
			}
		} );
	},

	/**
	 * Initialize the inactivity and keepalive timeouts of the plugin
	 * @function reset
	 * @param {jQuery Event} event `reset.wb-sessto` event that triggered the function call
	 * @param {Object} settings Key-value object
	 */
	reset = function( event, settings ) {
		var $elm = $( event.target );

		initEventTimeout( $elm, inactivityEvent, settings.inactivity, settings );
		if ( settings.refreshCallbackUrl !== null ) {
			initEventTimeout( $elm, keepaliveEvent, settings.sessionalive, settings );
		}
	},

	/**
	 * Checks if the user wants to keep their session alive.
	 * @function inactivity
	 * @param {jQuery Event} event `confirm.wb-sessto` event that triggered the function call
	 */
	confirm = function( event ) {
		var elm = event.target,
			$elm = $( elm ),
			settings = $elm.data();

		event.preventDefault();
		$.magnificPopup.close();
		clearInterval( countdownInterval );

		// User wants their session maintained
		if ( settings.start !== undefined && ( getCurrentTime() - settings.start ) <= settings.reactionTime ) {
			$( selector )
				.trigger( resetEvent, settings )
				.trigger( keepaliveEvent, settings );

		// Negative confirmation or the user took too long; logout
		} else {
			window.location.href = settings.logouturl;
		}
	},

	/**
	 * Add the modal dialog's content and display it to the user
	 * @function openModal
	 * @param {Object} data Key-value object
	 */
	openModal = function( data ) {

		// Detach the modal to prevent reflows while updating the element
		$modal = $modal.detach();
		$modal.find( ".modal-body" ).html( data.body );
		$modal.find( ".modal-footer" ).empty().append( data.buttons );

		// Re-attach the modal and open the dialog
		$modal = $modal.insertAfter( $modalLink );
		$modalLink.magnificPopup( "open" );

		// Execute the open callback if it exists
		if ( data.open ) {
			data.open();
		}
	},

	/**
	 * Returns the current time in milliseconds
	 * @function getCurrentTime
	 * @returns {integer} Current time in milliseconds
	 */
	getCurrentTime = function() {
		return ( new Date() ).getTime();
	},

	/**
	 * Parses a time value into a milliseconds integer value.
	 * @function parseTime
	 * @param {Mixed} value The time value to parse (integer or string)
	 * @returns {integer} Millisecond integer value parsed from the time value
	 */
	parseTime = function( value ) {
		var result, num, mult,
			powers = {
				ms: 1,
				cs: 10,
				ds: 100,
				s: 1000,
				das: 10000,
				hs: 100000,
				ks: 1000000
			};

		if ( value == null ) { //eslint-disable-line no-eq-null
			return null;
		}

		result = /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/.exec( $.trim( value.toString() ) );
		if ( result[ 2 ] ) {
			num = parseFloat( result[ 1 ] );
			mult = powers[ result[ 2 ] ] || 1;
			return num * mult;
		}
		return value;
	},

	/**
	 * Converts a millisecond value into minutes and seconds
	 * @function getTime
	 * @param {integer} milliseconds The time value in milliseconds
	 * @returns {Object} An object with a seconds and minutes property
	 */
	getTime = function( milliseconds ) {
		var time = { minutes: "", seconds: "" };

		if ( milliseconds != null ) { //eslint-disable-line no-eq-null
			time.minutes = parseInt( ( milliseconds / ( 1000 * 60 ) ) % 60, 10 );
			time.seconds = parseInt( ( milliseconds / 1000 ) % 60, 10 );
		}
		return time;
	},

	/**
	 * Given 2 elements representing minutes and seconds, decrement their time value by 1 second
	 * @function countdown
	 * @param {jQuery DOM Element} $minutes Element that contains the minute value
	 * @param {jQuery DOM Element} $seconds Element that contains the second value
	 * @param { integer } startTime The time value of when the countdown started in milliseconds
	 * @param { integer } endDuration The time value of the duration of the countdown in milliseconds
	 * @returns {boolean} Is the countdown finished?
	 */
	countdown = function( $minutes, $seconds, startTime, endDuration ) {
		var newTime = getTime( endDuration - ( getCurrentTime() - startTime ) );

		// Update the DOM elements
		$minutes.text( newTime.minutes );
		$seconds.text( newTime.seconds );

		return newTime.minutes <= 0 && newTime.seconds <= 0;
	};

// Bind the plugin events
$document.on( "timerpoke.wb " + initEvent + " " + keepaliveEvent + " " +
inactivityEvent + " " + resetEvent, selector, function( event, settings ) {

	var eventType = event.type;

	switch ( eventType ) {
	case "timerpoke":
	case "wb-init":
		init( event );
		break;

	case "keepalive":
		keepalive( event, settings );
		break;

	case "inactivity":
		inactivity( event, settings );
		break;

	case "reset":
		reset( event, settings );
		break;
	}
} );

$document.on( "click", "." + confirmClass, confirm );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, DOMPurify, window, document, wb );

/**
 * @title WET-BOEW Share widget
 * @overview Facilitates sharing Web content on social media platforms.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, window, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-share",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	shareLink = "shr-lnk",
	panelCount = 0,
	$document = wb.doc,
	i18n, i18nText,

	/*
	 * Plugin users can override these defaults by setting attributes on the html elements that the
	 * selector matches.
	 */
	defaults = {
		hdLvl: "h2",

		// Supported types are: "page", "video" and "audio"
		type: "page",

		// For custom types
		// custType = " this comment" results in "Share this comment"
		custType: "",

		url: wb.pageUrlParts.href,
		title: document.title || $document.find( "h1:first" ).text(),

		pnlId: "",
		lnkClass: "",
		img: "",
		desc: "",

		// For filtering the sites that area displayed and controlling the order
		// they are displayed. Empty array displays all sites in the default order.
		// Otherwise, it displays the sites in the order in the array using the
		// keys used by the sites object.
		filter: [],

		sites: {

			// The definitions of the available bookmarking sites, in URL use
			// '{u}' for the page URL, '{t}' for the page title, {i} for the image, and '{d}' for the description
			blogger: {
				name: "Blogger",
				url: "https://www.blogger.com/blog_this.pyra?t=&amp;u={u}&amp;n={t}"
			},
			diigo: {
				name: "Diigo",
				url: "https://www.diigo.com/post?url={u}&amp;title={t}"
			},
			facebook: {
				name: "Facebook",
				url: "https://www.facebook.com/sharer.php?u={u}&amp;t={t}"
			},
			gmail: {
				name: "Gmail",
				url: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su={t}&body={u}%0A{d}"
			},
			linkedin: {
				name: "LinkedIn®",
				url: "https://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary={d}&amp;source="
			},
			myspace: {
				name: "MySpace",
				url: "https://www.myspace.com/Modules/PostTo/Pages/?u={u}&amp;t={t}"
			},
			pinterest: {
				name: "Pinterest",
				url: "https://www.pinterest.com/pin/create/button/?url={u}&amp;media={i}&amp;description={t}"
			},
			reddit: {
				name: "reddit",
				url: "https://reddit.com/submit?url={u}&amp;title={t}"
			},
			tinyurl: {
				name: "TinyURL",
				url: "https://tinyurl.com/create.php?url={u}"
			},
			tumblr: {
				name: "tumblr",
				url: "https://www.tumblr.com/share/link?url={u}&amp;name={t}&amp;description={d}"
			},
			twitter: {
				name: "Twitter",
				url: "https://twitter.com/intent/tweet?text={t}&url={u}"
			},
			yahoomail: {
				name: "Yahoo! Mail",
				url: "https://compose.mail.yahoo.com/?to=&subject={t}&body={u}%0A{d}"
			},
			whatsapp: {
				name: "Whatsapp",
				url: "https://api.whatsapp.com/send?text={t}%0A{d}%0A{u}"
			}
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
			sites, heading, settings, panel, link, $share, $elm,
			pageHref, pageTitle, pageImage, pageDescription,
			siteProperties, url, shareText, id, pnlId, regex,
			filter, i, len, keys, key;

		if ( elm ) {

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					shareText: i18n( "shr-txt" ),
					page: i18n( "shr-pg" ),
					video: i18n( "shr-vid" ),
					audio: i18n( "shr-aud" ),
					disclaimer: i18n( "shr-disc" ),
					email: i18n( "email" )
				};

				// Add an email mailto option
				defaults.sites.email = {
					name: i18nText.email,
					url: "mailto:?subject={t}&body={u}%0A{d}",
					isMailto: true
				};
			}

			$elm = $( elm );
			settings = $.extend(
				true,
				{},
				defaults,
				window[ componentName ],
				wb.getData( $elm, componentName )
			);
			sites = settings.sites;
			filter = settings.filter;
			heading = settings.hdLvl;

			shareText = i18nText.shareText + ( settings.custType.length !== 0 ? settings.custType : i18nText[ settings.type ] );
			pnlId = settings.pnlId;
			id = "shr-pg" + ( pnlId.length !== 0 ? "-" + pnlId : panelCount );
			pageHref = encodeURIComponent( settings.url );

			regex = /'|&#39;|&apos;/g;
			pageTitle = encodeURIComponent( settings.title )
				.replace( regex, "%27" );
			pageImage = encodeURIComponent( settings.img );
			pageDescription = encodeURIComponent( settings.desc )
				.replace( regex, "%27" );

			// Don't create the panel for the second link (class="link-only")
			if ( elm.className.indexOf( "link-only" ) === -1 ) {
				panel = "<section id='" + id  + "' class='shr-pg mfp-hide modal-dialog modal-content overlay-def" +
					"'><header class='modal-header'><" + heading + " class='modal-title'>" +
					shareText + "</" + heading + "></header><div class='modal-body'>" +
					"<ul class='list-unstyled colcount-xs-2'>";

				// If there is no filter array of site keys, then generate an array of site keys
				if ( !filter || filter.length === 0 ) {
					keys = [];
					for ( key in sites ) {
						if ( Object.prototype.hasOwnProperty.call( sites, key ) ) {
							keys.push( key );
						}
					}
				} else {
					keys = filter;
				}

				// i18n-friendly sort of the site keys
				keys.sort( function( x, y ) {
					return wb.normalizeDiacritics( x ).localeCompare( wb.normalizeDiacritics( y ) );
				} );
				len = keys.length;

				// Generate the panel
				for ( i = 0; i !== len; i += 1 ) {
					key = keys[ i ];
					siteProperties = sites[ key ];
					url = siteProperties.url
						.replace( /\{u\}/, pageHref )
						.replace( /\{t\}/, pageTitle )
						.replace( /\{i\}/, pageImage )
						.replace( /\{d\}/, pageDescription );
					panel += "<li><a href='" + url + "' class='" + shareLink +
						" " + ( siteProperties.isMailto ? "email" : key ) +
						" btn btn-default' target='_blank' rel='noreferrer noopener'>" +
						siteProperties.name + "</a></li>";
				}

				panel += "</ul><p class='col-sm-12 shr-dscl'>" + i18nText.disclaimer +
					"</p><div class='clearfix'></div></div></section>";
				panelCount += 1;
			}
			link = "<a href='#" + id + "' aria-controls='" + id +
				"' class='shr-opn wb-lbx " + settings.lnkClass +
				"'><span class='glyphicon glyphicon-share'></span>" +
				shareText + "</a>";

			$share = $( ( panel ? panel : "" ) + link );

			$elm.append( $share );

			$share
				.trigger( "wb-init.wb-lbx" );

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );

/**
 * @title WET-BOEW step form
 * @overview Provide ability for a form to be broken into steps.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @kodecount
 */
( function( $, window, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-steps",
	selector = ".provisional." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	i18n, i18nText,
	btnPrevious, btnNext, btnSubmit,

	/**
	 * @method init
	 * @param {jQuery Event} evt Event that triggered the function call
	 */
	init = function( evt ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( evt, componentName, selector );

		if ( elm ) {

			// Ensure there is a unique id on the element
			if ( !elm.id ) {
				elm.id = wb.getId();
			}

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					prv: i18n( "prv" ),
					nxt: i18n( "nxt" )
				};
			}

			/*
			 * Variable and function definitions
			 * These will be initialized once per instance of plugin.
			 */
			var form = elm.getElementsByTagName( "FORM" )[ 0 ],
				fieldsets = ( form ) ? $( form ).children( "fieldset" ) : 0,
				hasStepsInitialized;

			// Initialize navigation buttons
			btnPrevious = createStepsButton( "prev", "mrgn-rght-sm mrgn-bttm-md", i18nText.prv );
			btnNext = createStepsButton( "next", "mrgn-bttm-md", i18nText.nxt );
			btnSubmit = form.querySelector( "input[type=submit], button[type=submit]" );
			btnSubmit.classList.add( "mrgn-bttm-md" );

			/*
			 * Determines if html is correctly formatted and initialize all fieldsets/legend combinations into steps.
			 */
			for ( var i = 0, len = fieldsets.length; i < len; i++ ) {

				/*
				 * Variable and function definitions
				 * These well be initialized once per instance of each fieldset.
				 * Determines the following business rules:
				 *  -Only allow steps if elements are in proper order fieldset -> legend -> div
				 *  -Only allow NEXT button on first step
				 *  -Only allow final SUBMIT button on last step
				 */
				var fieldset = fieldsets[ i ],
					isFirstFieldset = ( i === 0 ) ? true : false,
					isLastFieldset = ( i === ( len - 1 ) ) ? true : false,
					legend = fieldset.firstElementChild,
					div = ( legend && legend.tagName === "LEGEND" ) ? legend.nextElementSibling : false,
					buttonGroup = document.createElement( "div" ),
					wrapper = document.createElement( "div" ),
					buttonGroupClassList = buttonGroup.classList,
					divClassList = div.classList;

				buttonGroupClassList.add( "buttons" );
				fieldset.parentNode.insertBefore( wrapper, fieldset );
				wrapper.appendChild( fieldset );
				wrapper.classList.add( "steps-wrapper" );

				if ( div && div.tagName === "DIV" ) {
					var btnClone;
					hasStepsInitialized = true;

					if ( !isFirstFieldset ) {
						btnClone = btnPrevious.cloneNode( true );
						setStepsBtnEvent( btnClone );
						buttonGroup.appendChild( btnClone );
						wrapper.appendChild( buttonGroup );
					}

					if ( !isLastFieldset ) {
						btnClone = btnNext.cloneNode( true );
						setStepsBtnEvent( btnClone );
						buttonGroup.appendChild( btnClone );
					} else {
						buttonGroup.appendChild( btnSubmit );
					}

					wrapper.appendChild( buttonGroup );

					fieldset.classList.add( "wb-tggle-fildst" );
					divClassList.add( "hidden" );
					buttonGroupClassList.add( "hidden" );

					if ( isFirstFieldset ) {
						legend.classList.add( "wb-steps-active" );
						btnClone.classList.remove( "hidden" );
						divClassList.remove( "hidden" );
						buttonGroupClassList.remove( "hidden" );
					}
				}
			}

			/*
			 * if steps has initialized hide any precreated submit or reset buttons
			 */
			if ( form && hasStepsInitialized ) {
				$( form ).children( "input" ).hide();
				wb.ready( $( elm ), componentName );
			}
		}
	},

	/**
	 * @method createStepsButton
	 * @param {string var} tagName, {string var} type, {boolean var} isPrimary, {string var} style, {string var} text
	 * @returns {Object} A ready-to-use button element
	 */
	createStepsButton = function( type, style, text ) {
		var control = document.createElement( "BUTTON" );

		// set default attributes
		control.className = ( type === "prev" ? "btn btn-md btn-default" : "btn btn-md btn-primary" ) + " " + style;
		control.setAttribute( "type", "button" );
		control.innerHTML = text;

		return control;
	},

	/**
	 * @method setStepsBtnEvent
	 * @param {JavaScript element} elm
	 */
	setStepsBtnEvent = function( elm ) {
		elm.addEventListener( "click", function( evt ) {
			evt.preventDefault();
			var classes = ( this.className ) ? this.className : false,
				isNext = ( classes && classes.indexOf( "btn-primary" ) > -1 ),
				isFormValid = true,
				parentElement = this.parentElement,
				parentParentElement = parentElement.parentElement,
				parentPreviousClassList = parentElement.previousElementSibling.classList;

			// confirm if form is valid
			if ( isNext && jQuery.validator && jQuery.validator !== "undefined" ) {
				isFormValid =  $( "#" + parentParentElement.parentElement.id ).valid();
			}

			// continue if valid
			if ( isFormValid ) {
				showSteps( parentParentElement, isNext );
				if ( isNext ) {
					parentPreviousClassList.remove( "wb-steps-error" );
				}
			} else if ( isNext && !isFormValid ) {
				parentPreviousClassList.add( "wb-steps-error" );
			}
		} );
	},

	/**
	 * @method showSteps
	 * @param {JavaScript element} elm and {boolean var} isNext
	 */
	showSteps = function( elm, isNext ) {
		var fieldsetElement = elm.getElementsByTagName( "FIELDSET" )[ 0 ],
			fields = fieldsetElement.getElementsByTagName( "div" )[ 0 ],
			legend = fieldsetElement.getElementsByTagName( "legend" )[ 0 ],
			buttonGroup = elm.querySelector( "div.buttons" ),
			fieldset;

		if ( elm ) {
			fields.classList.add( "hidden" );
			buttonGroup.classList.add( "hidden" );

			if ( legend ) {
				legend.classList.remove( "wb-steps-active" );
			}

			fieldset = ( !isNext ) ? elm.previousElementSibling : elm.nextElementSibling;
			if ( fieldset ) {
				legend = fieldset.getElementsByTagName( "LEGEND" )[ 0 ];
				elm = fieldset.getElementsByTagName( "DIV" )[ 0 ];
				buttonGroup = fieldset.querySelector( "div.buttons" );
				if ( legend ) {
					legend.classList.add( "wb-steps-active" );
					legend.tabIndex = 0;
					legend.focus();
					legend.tabIndex = -1;
				}
				if ( elm ) {
					elm.classList.remove( "hidden" );
				}
				if ( buttonGroup ) {
					buttonGroup.classList.remove( "hidden" );
				}
			}
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );

/**
 * @title WET-BOEW Tables
 * @overview Integrates the DataTables plugin into WET providing searching, sorting, filtering, pagination and other advanced features for tables.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @jeresiv
 */
/*jshint scripturl:true*/
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-tables",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	idCount = 0,
	i18n, i18nText, defaults,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			elmId;

		if ( elm ) {
			elmId = elm.id;

			// Ensure there is a unique id on the element
			if ( !elmId ) {
				elmId = componentName + "-id-" + idCount;
				idCount += 1;
				elm.id = elmId;
			}

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					aria: {
						sortAscending: i18n( "sortAsc" ),
						sortDescending: i18n( "sortDesc" )
					},
					emptyTable: i18n( "emptyTbl" ),
					info: i18n( "infoEntr" ),
					infoEmpty: i18n( "infoEmpty" ),
					infoFiltered: i18n( "infoFilt" ),
					lengthMenu: i18n( "lenMenu" ),
					loadingRecords: i18n( "load" ),
					paginate: {
						first: i18n( "first" ),
						last: i18n( "last" ),
						next: i18n( "nxt" ),
						previous: i18n( "prv" ),
						page: i18n( "page" )
					},
					processing: i18n( "process" ),
					search: i18n( "filter" ),
					thousands: i18n( "info1000" ),
					zeroRecords: i18n( "infoEmpty" ),
					tblFilterInstruction: i18n( "tbFilterInst" )
				};
			}

			defaults = {
				asStripeClasses: [],
				language: i18nText,
				dom: "<'top'fil>rt<'bottom'p><'clear'>"
			};

			Modernizr.load( {
				load: [ "site!deps/jquery.dataTables" + wb.getMode() + ".js" ],
				testReady: function() {
					return ( $.fn.dataTable && $.fn.dataTable.version );
				},
				complete: function() {
					var $elm = $( "#" + elmId ),
						dataTableExt = $.fn.dataTableExt,
						settings = wb.getData( $elm, componentName ) || {};

					// Explicitly deactivate the paging for the filterEmphasis provisional feature/styling when not configured
					if ( $elm.hasClass( "provisional" ) && $elm.hasClass( "filterEmphasis" ) ) {
						settings.paging = settings.paging ? settings.paging : false;
					}

					/*
					 * Extend sorting support
					 */
					$.extend( dataTableExt.type.order, {

						// Enable internationalization support in the sorting
						"html-pre": function( a ) {
							return wb.normalizeDiacritics(
								!a ? "" : a.replace ?
									a.replace( /<.*?>/g, "" ).toLowerCase() : a + ""
							);
						},
						"string-case-pre": function( a ) {
							return wb.normalizeDiacritics( a );
						},
						"string-pre": function( a ) {
							return wb.normalizeDiacritics( a );
						},

						// Formatted number sorting
						"formatted-num-asc": function( a, b ) {
							return wb.formattedNumCompare( a, b );
						},
						"formatted-num-desc": function( a, b ) {
							return wb.formattedNumCompare( b, a );
						}
					} );

					// Create the DataTable object
					$elm.dataTable( $.extend( true, {}, defaults, window[ componentName ], settings ) );
				}
			} );
		}
	},
	updatePaginationMarkup = function( $pagination, setFocusOnId ) {

		var ol = document.createElement( "OL" ),
			li = document.createElement( "LI" ),
			paginate_buttons = $pagination.find( ".paginate_button" ),
			navFocusOnId;

		if ( $pagination.length === 0 ) {
			return;
		}

		// Set the element to get the focus upon navigation
		navFocusOnId = setFocusOnId || $pagination.get( 0 ).id;

		// Update Pagination List
		for ( var i = 0; i < paginate_buttons.length; i++ ) {
			var item = li.cloneNode( true );
			item.appendChild( paginate_buttons[ i ] );
			ol.appendChild( item );
		}

		ol.className = "pagination mrgn-tp-0 mrgn-bttm-0";
		$pagination.empty();
		$pagination.append( ol );

		// Update the aria-pressed properties on the pagination buttons
		// Should be pushed upstream to DataTables
		$pagination.find( ".paginate_button" )
			.attr( {
				"href": "#" + navFocusOnId
			} )

			// This is required to override the datatable.js (v1.10.13) behavior to cancel the event propagation on anchor element.
			.on( "keypress", function( evn ) {
				if ( evn.keyCode === 13 ) {
					window.location = evn.target.href;
				}
			} )

			.not( ".previous, .next" )
			.attr( "aria-pressed", "false" )
			.html( function( index, oldHtml ) {
				return "<span class='wb-inv'>" + i18nText.paginate.page + " </span>" + oldHtml;
			} )
			.filter( ".current" )
			.attr( "aria-pressed", "true" );
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Handle the draw.dt event
$document.on( "draw.dt", selector, function( event, settings ) {
	var $elm = $( event.target ),
		pagination = $elm.next( ".bottom" ).find( "div:first-child" ),
		pagination_top = $elm.prevAll( ".top" ).find( "div.dataTables_paginate" ),
		paginate_buttons = $elm.next( ".bottom" ).find( ".paginate_button" ),
		pbLength = paginate_buttons.length,
		pHasLF = pagination.find( ".last, .first" ).length === 2,
		pHasPN = pagination.find( ".previous, .next" ).length === 2;

	// Handle sorting/ordering
	var order = $elm.dataTable( { "retrieve": true } ).api().order();
	$elm.find( "th" ).each( function( index ) {
		var $th = $( this ),
			$btn = $th.find( "button" );
		if ( order && order.length && order[ 0 ][ 0 ] === index ) {
			var label = ( order[ 0 ][ 1 ] === "desc" ) ? i18nText.aria.sortAscending : i18nText.aria.sortDescending;
			label = $btn.text() + label;
			$btn.attr( "title", label );
		}
		$th.removeAttr( "aria-label" );
	} );

	// Determine if Pagination required
	if (
		pbLength === 1 ||
		(
			pbLength === 3 &&
			(
				pHasLF ||
				pHasPN
			)
		) ||
		(
			pbLength === 5 &&
			pHasLF &&
			pHasPN
		)
	) {
		pagination.addClass( "hidden" );
		pagination_top.addClass( "hidden" );
	} else {

		// Make sure Pagination is visible
		pagination.removeClass( "hidden" );
		pagination_top.removeClass( "hidden" );

		updatePaginationMarkup( pagination, $elm.get( 0 ).id );
		updatePaginationMarkup( pagination_top );
	}

	// Identify that the table has been updated
	$elm.trigger( "wb-updated" + selector, [ settings ] );
} );

// Identify that initialization has completed
$document.on( "init.dt", selector, function( event ) {
	var $elm = $( event.target ),
		settings = $.extend( true, {}, defaults, window[ componentName ], wb.getData( $elm, componentName ) );

	// Handle sorting/ordering
	var ordering = ( settings && settings.ordering === false ) ? false : true;
	if ( ordering ) {
		$elm.find( "thead th" ).each( function() {
			var $th = $( this ),
				label = ( $th.attr( "aria-sort" ) === "ascending" ) ? i18nText.aria.sortDescending : i18nText.aria.sortAscending;
			if ( ( $th.attr( "data-orderable" ) !== "false" ) && !( $th.hasClass( "sorting_disabled" ) ) ) {
				$th.html( "<button type='button' aria-controls='" + $th.attr( "aria-controls" ) +  "' title='" + $th.text().replace( /'/g, "&#39;" ) + label + "'>" + $th.html() + "<span class='sorting-cnt'><span class='sorting-icons' aria-hidden='true'></span></span></button>" );
				$th.removeAttr( "aria-label tabindex aria-controls" );
			}
		} );
		$elm.attr( "aria-label", i18nText.tblFilterInstruction );
	}

	// Apply the filter emphasis style
	if ( $elm.hasClass( "provisional" ) && $elm.hasClass( "filterEmphasis" ) ) {
		$elm.parent().addClass( "provisional filterEmphasis" );
	}

	wb.ready( $( event.target ), componentName );
} );

// Handle the draw.dt event
$document.on( "submit", ".wb-tables-filter", function( event ) {

	event.preventDefault();

	var $form = $( this ),
		$datatable = $( "#" + $form.data( "bind-to" ) ).dataTable( { "retrieve": true } ).api(),
		$toNumber = function stringToNumber( number ) {
			number = number.replace( /[^0-9\-,.]+/g, "" );
			if ( /[,]\d{1,2}$/.test( number ) ) {
				number = number.replace( /(\d{2})$/, ".$1" );
			}
			number = number.replace( /,/g, "" );
			return parseFloat( number );
		},
		$isDate = function isDate( date ) {
			return date instanceof Date && !isNaN( date );
		};

	// Lets reset the search
	$datatable.search( "" ).columns().search( "" );

	// Lets loop throug all options
	var $prevCol = -1, $cachedVal = "";
	$form.find( "[name]" ).each( function() {
		var $elm = $( this ),
			$val = $elm.val(),
			$value = "",
			$regex = "",
			$column = parseInt( $elm.attr( "data-column" ), 10 ),
			$isAopts = $elm.data( "aopts" ),
			$aoptsSelector = "[data-aopts*='\"column\": \"" + $column + "\"']:checked",
			$aopts = $( $aoptsSelector ),
			$aoType = ( $aopts && $aopts.data( "aopts" ) ) ? $aopts.data( "aopts" ).type.toLowerCase() : "",
			$fData;

		// Ignore the advanced options fields
		if ( $isAopts ) {
			return;
		}

		// Verifies if filtering the same column
		if ( $column !== $prevCol || $prevCol === -1 ) {
			$cachedVal = "";
		}
		$prevCol = $column;

		// Filters based on input type
		if ( $elm.is( "select" ) ) {
			$value = $elm.find( "option:selected" ).val();
		} else if ( $elm.is( "input[type='number']" ) ) {
			var $minNum, $maxNum = null;

			// Retain minimum number (always the first number input)
			if ( $cachedVal === "" ) {
				$cachedVal = parseFloat( $val );
				$cachedVal = ( $cachedVal ) ? $cachedVal : "-0";
			} else {
				$maxNum = parseFloat( $val );
				$maxNum = ( $maxNum ) ? $maxNum : "-0";
			}
			$minNum = $cachedVal;

			//Number filtering logic needs to be reviewed in order to remove the "-0" value (issue #9235)
			// Generates a list of numbers (within the min and max number)
			if ( !isNaN( $minNum ) && !isNaN( $maxNum ) ) {
				$fData = $datatable.column( $column ).data().filter( function( obj ) {
					var $num = $toNumber( obj.toString() );

					if ( !isNaN( $num ) ) {
						if ( $aoType === "and" ) {
							if ( $cachedVal !== $maxNum && $cachedVal !== "-0" && $maxNum !== "0" && $num >= $minNum && $num <= $maxNum ) {
								return true;
							}
						} else {
							if ( $maxNum === null ) { // only one input number
								return $minNum === "-0" || $minNum === $num;
							} else if ( $maxNum === $cachedVal && $cachedVal === "-0" ) { // both are empty
								return true;
							} else if ( $maxNum !== "-0" && $minNum === $maxNum && $num === $maxNum ) { // min and max are the same
								return true;
							} else if ( $maxNum === "-0" && $num >= $minNum ) { // max number is missing
								return true;
							} else if ( $cachedVal === "-0" && $num <= $maxNum ) { // min number is missing
								return true;
							} else if ( $cachedVal !== "-0" && $num >= $minNum && $num <= $maxNum ) { // min and max are present
								return true;
							}
						}
					}
					return false;
				} );
				$fData = $fData.join( "|" );

				// If no numbers match set as -0, so no results return
				$value = ( $fData ) ? $fData : "-0";
				$regex = "(" + $value.replace( /&nbsp;|\s/g, "\\s" ).replace( /\$/g, "\\$" ) + ")";
			}
		} else if ( $elm.is( "input[type='date']" ) && $val ) {
			var $minDate, $maxDate;

			// Retain minimum date (always the first date input)
			if ( $cachedVal === "" ) {
				$cachedVal = new Date( $val );
				$cachedVal.setDate( $cachedVal.getDate() + 1 );
				$cachedVal.setHours( 0, 0, 0, 0 );
			}
			$minDate = $cachedVal;

			// Maximum date is always the current selected date
			$maxDate = new Date( $val );
			$maxDate.setDate( $maxDate.getDate() + 1 );
			$maxDate.setHours( 23, 59, 59, 999 );

			// Generates a list of date strings (within the min and max date)
			$fData = $datatable.column( $column ).data().filter( function( obj ) {
				var $date = obj.replace( /[0-9]{2}\s[0-9]{2}:/g, function( e ) {
					return e.replace( /\s/g, "T" );
				} );

				if ( !$date.includes( "T" ) ) {
					$date = $date + "T00:00:00";
				}
				$date = new Date( $date );
				$date.setHours( 0, 0, 0, 0 );

				if ( !$isDate( $minDate ) || !$isDate( $maxDate ) || !$isDate( $date ) ) {
					return;
				}
				return ( $date >= $minDate && $date <= $maxDate );
			} );
			$fData = $fData.join( "|" );

			// If no dates match set as element value, so no results return
			$value = ( $fData ? $fData : $val );
		} else if ( $elm.is( ":checkbox" ) ) {

			// Verifies if checkbox is checked before setting value
			if ( $elm.is( ":checked" ) ) {
				if ( $aoType === "both" ) {
					$cachedVal += "(?=.*\\b" + $val + "\\b)";
				} else {
					$cachedVal += ( $cachedVal.length > 0 ) ? "|" : "";
					$cachedVal += $val;
				}

				$value = $cachedVal;
				$value = $value.replace( /\s/g, "\\s*" );

				// Adjust regex based on advanced options
				switch ( $aoType ) {
				case "both":
					$regex = "(" + $value + ").*";
					break;
				case "either":
					$regex = "^(" + $value + ")$";
					break;
				case "and":
					$regex = ( $value.indexOf( "|" ) > -1 ) ? "^(" + $value + "|[,\\s])(" + $value + "|[,\\s])+$" : "(" + $value + ")";
					break;
				case "any":
				default:
					$regex = "(" + $value + ")";
					break;
				}
			}
		} else {
			$value = $val;
		}

		if ( $value ) {

			// Verifies if regex was preset, if not preset use 'contains value' as default
			if ( !$regex ) {
				if ( $elm[ 0 ].getAttribute( "data-exact" ) ) {
					$regex = "^" + $value + "$";
				} else {
					$value = $value.replace( /\s/g, "\\s*" );
					$regex = "(" + $value + ")";
				}
			}

			$datatable.column( $column ).search( $regex, true );
		}
	} );
	$datatable.draw();
	return false;
} );

$document.on( "click", ".wb-tables-filter [type='reset']", function( event ) {
	event.preventDefault();

	var $form = $( this ).closest( ".wb-tables-filter" ),
		$datatable = $( "#" + $form.data( "bind-to" ) ).dataTable( { "retrieve": true } ).api();

	$datatable.search( "" ).columns().search( "" ).draw();

	$form.find( "select" ).prop( "selectedIndex", 0 );
	$form.find( "input:checkbox, input:radio" ).prop( "checked", false );
	$form.find( ":input" ).not( ":button, :submit, :reset, :hidden, :checkbox, :radio" ).val( "" );
	return false;
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Tabbed interface
 * @overview Dynamically stacks multiple sections of content, transforming them into a tabbed interface.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET Community
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-tabs",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	shiftEvent = "wb-shift" + selector,
	selectEvent = "wb-select" + selector,
	updatedEvent = "wb-updated" + selector,
	setFocusEvent = "setfocus.wb",
	controls = selector + " ul[role=tablist] a, " + selector + " ul[role=tablist] .tab-count",
	initialized = false,
	tabsAccordionClass = "tabs-acc",
	nestedTglPanelSelector = "> .tabpanels > details > .tgl-panel",
	activePanel = "-activePanel",
	activateEvent = "click keydown",
	pagePath = wb.pageUrlParts.pathname + "#",
	$document = wb.doc,
	i18n, i18nText,

	// Includes "smallview", "xsmallview" and "xxsmallview"
	smallViewPattern = "smallview",
	isSmallView, oldIsSmallView,

	defaults = {
		excludePlay: false,
		interval: 6,
		updateHash: false,
		ignoreSession: false
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
			isCarousel = true,
			open = "open",
			hashTargetLen = 0,
			$panels, $tablist, activeId, $openPanel, $elm, elmId, $hashTarget,
			settings, $panel, i, len, tablist, isOpen, hashFocus,
			newId, positionY, groupClass, $tabPanels, openByHash;

		if ( elm ) {
			$elm = $( elm );

			// For backwards compatibility. Should be removed in WET v4.1
			if ( $elm.children( ".tabpanels" ).length === 0 ) {
				$elm.children( "[role=tabpanel], details" ).wrapAll( "<div class='tabpanels'></div>" );
			}

			$panels = $elm.find( "> .tabpanels > [role=tabpanel], > .tabpanels > details" );
			$tablist = $elm.children( "[role=tablist]" );
			isCarousel = $tablist.length !== 0;

			// If a carousel contains only 1 panel, remove its controls, visually-hide its thumbnails and prevent it from attempting to play
			if ( isCarousel && $panels.length === 1 ) {

				$elm.removeClass( "show-thumbs playing" );
				$elm.addClass( "exclude-controls" );
			}

			activeId = wb.jqEscape( wb.pageUrlParts.hash.substring( 1 ) );
			hashFocus = activeId.length !== 0;
			$openPanel = hashFocus ? $panels.filter( "#" + activeId ) : undefined;
			openByHash = $openPanel && $openPanel.length !== 0;
			elmId = elm.id;

			settings = $.extend(
				true,
				{},
				defaults,
				{
					interval: $elm.hasClass( "slow" ) ?
						9 : $elm.hasClass( "fast" ) ?
							3 : defaults.interval,
					excludeControls: $elm.hasClass( "exclude-controls" ),
					excludePlay: $elm.hasClass( "exclude-play" ),
					updateHash: $elm.hasClass( "update-hash" ),
					playing: $elm.hasClass( "playing" ),
					ignoreSession: $elm.hasClass( "ignore-session" )
				},
				window[ componentName ],
				wb.getData( $elm, componentName )
			);

			try {

				// If the panel was not set by URL hash
				if ( !openByHash ) {
					if ( hashFocus ) {
						$hashTarget = $panels.find( "#" + activeId );
						hashTargetLen = $hashTarget.length;
					}

					// If the anchor target is within a panel, then open that panel
					if ( hashTargetLen !== 0 ) {
						activeId = $hashTarget.closest( "[role=tabpanel]" ).attr( "id" );

					// Attempt to retrieve active panel from sessionStorage
					} else {
						if ( !settings.ignoreSession ) {
							activeId = sessionStorage.getItem( pagePath + elmId + activePanel );
						}
					}

					if ( activeId ) {
						$openPanel = $panels.filter( "#" + activeId );
					}

				// If the panel was set by URL hash, then store in sessionStorage
				} else {
					if ( !settings.ignoreSession ) {
						try {
							sessionStorage.setItem( pagePath + elmId + activePanel, activeId );
						} catch ( error ) {

							/* swallow error */
						}
					}
				}
			} catch ( error ) {

				/* swallow error */
			}

			// Determine the current view
			isSmallView = document.documentElement.className.indexOf( smallViewPattern ) !== -1;

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					prev: i18n( "prv" ),
					next: i18n( "nxt" ),
					play: i18n( "tab-play" ),
					rotStart: i18n( "tab-rot" ).on,
					rotStop: i18n( "tab-rot" ).off,
					space: i18n( "space" ),
					hyphen: i18n( "hyphen" ),
					pause: i18n( "pause" ),
					tabCount: i18n( "lb-curr" )
				};
			}

			// Build the tablist and enhance the panels as needed for details/summary
			if ( !isCarousel ) {
				$elm.addClass( tabsAccordionClass );
				groupClass = elmId + "-grp";
				$tabPanels = $elm.children( ".tabpanels" );
				$panels = $tabPanels.children( "details" );
				len = $panels.length;

				$tabPanels.detach();

				// Ensure there is only one panel open
				// Order of priority is hash, open property, first details
				if ( !$openPanel || $openPanel.length === 0 ) {
					$openPanel = $panels.filter( "[open]" ).first();
					if ( $openPanel.length === 0 ) {
						$openPanel = $panels.eq( 0 );
					}
				}
				$panels.removeAttr( open );
				$openPanel.attr( open, open );

				// Hide the tablist in small view and the summary elements in large view
				tablist = "<ul role='tablist' aria-live='off' class='generated'>";

				for ( i = 0; i !== len; i += 1 ) {
					$panel = $panels.eq( i );
					$panel
						.addClass( groupClass )
						.html(
							$panel.html()
								.replace( /(<\/summary>)/i, "$1<div class='tgl-panel'>" ) +
							"</div>"
						);

					newId = $panel.attr( "id" );
					if ( !newId ) {
						newId = wb.getId();
						$panel.attr( "id", newId );
					}
					isOpen = !!$panel.attr( open );

					if ( isSmallView ) {
						if ( !Modernizr.details ) {
							$panel.toggleClass( "open", isOpen );
						}
					} else {
						$panel.attr( {
							role: "tabpanel",
							open: open
						} );
						$panel.addClass( ( Modernizr.details ? "" :  open + " " ) +
							"fade " + ( isOpen ? "in" : "noheight out wb-inv" ) );
					}

					tablist += "<li" + ( isOpen ? " class='active'" : "" ) +
						"><a id='" + newId + "-lnk' href='#" + newId + "'>" +
						$panel.children( "summary" ).html() + "</a></li>";
				}

				$tablist = $( tablist + "</ul>" );
				$tabPanels.find( "> details > summary" )
					.addClass( "wb-toggle tgl-tab" )
					.attr( "data-toggle", "{\"parent\": \"#" + elmId +
						"\", \"group\": \"." + groupClass + "\"}" );

				$elm
					.prepend( $tablist )
					.append( $tabPanels )
					.trigger( "wb-init.wb-toggle" );
			} else if ( $openPanel && $openPanel.length !== 0 ) {
				$panels.filter( ".in" )
					.addClass( "out noheight" )
					.removeClass( "in" );
				$openPanel
					.addClass( "in" )
					.removeClass( "out noheight" );
				$tablist.find( ".active" )
					.removeClass( "active" );
				$tablist.find( "a" )
					.filter( "[href$='" + activeId + "']" )
					.parent()
					.addClass( "active" );
			}

			drizzleAria( $panels, $tablist );

			if ( isCarousel ) {

				// Returns true if the tabs should be rotating automatically
				if ( createControls( $tablist, settings ) ) {

					// Register this specific tabs instance for timerpoke.wb events
					wb.add( "#" + elmId + selector );
				}
			}

			// If focus is being set by the URL hash, then ensure the tabs are
			// not above the top of the viewport (if the panel was the target),
			// or the anchor is not above the top of viewport (if the anchor was
			// the target)
			if ( hashFocus ) {

				// Need a slight delay to allow for the reflow
				setTimeout( function() {
					if ( openByHash ) {
						positionY = $tablist.offset().top;
					} else if ( hashTargetLen !== 0 ) {
						positionY = $hashTarget.offset().top;
					} else {
						positionY = -1;
					}

					if ( positionY !== -1 && positionY < document.body.scrollTop ) {
						document.body.scrollTop = positionY;
					}
				}, 1 );
			}

			$elm.data( {
				"wb-tabs": {
					panels: $panels,
					tablist: $tablist,
					settings: settings,
					ctime: 0
				}
			} );

			initialized = true;
			onResize( $elm );

			// Update the URL hash if needed
			if ( settings.updateHash ) {
				updateHash( $openPanel[ 0 ] );
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	},

	/**
	 * @method onTimerPoke
	 * @param {jQuery DOM element} $elm The plugin element
	 */
	onTimerPoke = function( $elm ) {
		var data = $elm.data( componentName ),
			delayCurrent = parseFloat( data.ctime ) + 0.5;

		// Check if we need to rotate panels
		if ( parseFloat( data.settings.interval ) <= delayCurrent ) {
			$elm.trigger( shiftEvent );
			delayCurrent = 0;
		}

		data.ctime = delayCurrent;
		$elm.data( componentName, data );
	},

	/**
	 * @method createControls
	 * @param {jQuery DOM element} $tablist The plugin element
	 * @param {object} settings Settings for the tabs instance
	 * @returns {boolean} Whether or not the tabs should be rotating initially
	 */
	createControls = function( $tablist, settings ) {
		var prevText = i18nText.prev,
			nextText = i18nText.next,
			spaceText = i18nText.space,
			excludeControls = settings.excludeControls,
			excludePlay = settings.excludePlay,
			isPlaying = !excludeControls && !excludePlay && settings.playing,
			state = isPlaying ? i18nText.pause : i18nText.play,
			hidden = isPlaying ? i18nText.rotStop : i18nText.rotStart,
			glyphiconStart = "<span class='glyphicon glyphicon-",
			wbInvStart = "<span class='wb-inv'>",
			tabsToggleStart = "<li class='control ",
			btnMiddle = "' href='javascript:;' role='button' title='",
			btnEnd = "</span></a></li> ",
			iconState = glyphiconStart + ( isPlaying ? "pause" : "play" ) + "'></span>",
			$tabs = $tablist.find( "[role=tab]" ),
			currentIndex = $tabs.index( $tabs.filter( "[aria-selected=true]" ) ) + 1,
			i18nTabCount = i18nText.tabCount,
			firstReplaceIndex = i18nTabCount.indexOf( "%" ),
			lastReplaceIndex = i18nTabCount.lastIndexOf( "%" ) + 1,
			prevControl = tabsToggleStart + "prv'><a class='prv" + btnMiddle +
				prevText + "'>" + glyphiconStart + "chevron-left'></span>" +
				wbInvStart + prevText + btnEnd,
			tabCount = tabsToggleStart + " tab-count' tabindex='0'><div>" +
				i18nTabCount.substring( 0, firstReplaceIndex ) +
				"<div class='curr-count'>" +
				i18nTabCount.substring( firstReplaceIndex, lastReplaceIndex )
					.replace( "%curr%", "<span class='curr-index'>" + currentIndex + "</span>" )
					.replace( "%total%", $tabs.length ) +
				"</div>" + i18nTabCount.substring( lastReplaceIndex ) +
				"</div></li>",
			nextControl = tabsToggleStart + "nxt'><a class='nxt" + btnMiddle +
				nextText + "'>" + glyphiconStart + "chevron-right'></span>" +
				wbInvStart + nextText + btnEnd,
			playControl =  tabsToggleStart + "plypause'><a class='plypause" +
				btnMiddle + state + "'>" + iconState + " <span>" + state +
				"</span>" + wbInvStart + spaceText + i18nText.hyphen + spaceText +
				hidden + btnEnd;

		if ( !excludeControls ) {
			$tablist.prepend( prevControl + tabCount + nextControl );
		}

		if ( !excludeControls && !excludePlay ) {
			$tablist.append( playControl );
		}
		$tablist.find( "a[role=button]" ).attr( "href", "javascript:;" );

		return isPlaying;
	},

	/**
	 * @method drizzleAria
	 * @param {jQuery DOM element} $panels Tabpanel groupings
	 * @param {jQuery DOM element} $tablist Pointers to the groupings
	 */
	drizzleAria = function( $panels, $tabList ) {

		// Let's process the elements for aria
		var panels = $panels.get(),
			tabCounter = panels.length - 1,
			listItems = $tabList.children().get(),
			listCounter = listItems.length - 1,
			isDetails = $panels[ 0 ].nodeName.toLowerCase() === "details",
			isActive, item, link, panelId, activeFound;

		for ( ; tabCounter !== -1; tabCounter -= 1 ) {
			item = panels[ tabCounter ];
			isActive = item.className.indexOf( "out" ) === -1;

			if ( !isDetails || !isSmallView ) {
				item.setAttribute( "aria-hidden", isActive ? "false" : "true" );
				item.setAttribute( "aria-expanded", isActive ? "true" : "false" );
			}
			item.setAttribute( "aria-labelledby", item.id + "-lnk" );
		}

		activeFound = false;
		for ( ; listCounter !== -1; listCounter -= 1 ) {
			item = listItems[ listCounter ];
			item.setAttribute( "role", "presentation" );

			isActive = item.className.indexOf( "active" ) !== -1;
			if ( isActive ) {
				activeFound = true;
			} else if ( listCounter === 0 && !activeFound ) {
				isActive = true;
				item.className += " active";
			}

			link = item.getElementsByTagName( "a" )[ 0 ];
			panelId = link.getAttribute( "href" ).substring( 1 );

			link.tabIndex = isActive ? "0" : "-1";
			link.setAttribute( "role", "tab" );
			link.setAttribute( "aria-selected", isActive ? "true" : "false" );
			link.setAttribute( "aria-controls", panelId );
			link.id = panelId + "-lnk";
		}
		$tabList.attr( "aria-live", "off" );
	},

	/**
	 * @method updateHash
	 * @param {DOM element} elm Tabpanel to be referenced in the URL hash
	 */
	updateHash = function( elm ) {
		var elmId = elm.id;

		wb.ignoreHashChange = true;
		elm.id += "-off";
		window.location.hash = elmId;
		elm.id = elmId;
		wb.ignoreHashChange = false;
	},

	updateNodes = function( $panels, $controls, $next, $control ) {
		var $tabs = $controls.find( "[role=tab]" ),
			newIndex = $tabs.index( $control ) + 1,
			$currPanel = $panels.filter( ".in" ),
			$container = $next.closest( selector ),
			tabSettings = $container.data( componentName ).settings,
			mPlayers = $currPanel.find( ".wb-mltmd-inited" ).get(),
			mPlayersLen = mPlayers.length,
			mPlayer, i, j, last;

		// Handle the direction of the slide transitions
		if ( $currPanel[ 0 ].className.indexOf( "slide" ) !== -1 ) {
			i = $panels.index( $currPanel );
			j = $panels.index( $next );
			last = $panels.length - 1;

			$panels.toggleClass(
				"reverse",
				( i > j && ( i !== last || j !== 0 ) ) || ( i === 0 && j === last )
			);
		}

		$currPanel
			.removeClass( "in" )
			.addClass( "out noheight" )
			.attr( {
				"aria-hidden": "true",
				"aria-expanded": "false"
			} );

		// Pause all multimedia players in the current panel
		for ( i = 0; i !== mPlayersLen; i += 1 ) {
			mPlayer = mPlayers[ i ];
			if ( mPlayer.player ) {
				mPlayer.player( "pause" );
			}
		}

		$next
			.removeClass( "out noheight" )
			.addClass( "in" )
			.attr( {
				"aria-hidden": "false",
				"aria-expanded": "true"
			} );

		$controls
			.find( ".active" )
			.removeClass( "active" )
			.children( "a" )
			.attr( {
				"aria-selected": "false",
				tabindex: "-1"
			} );

		// Update the Item x of n
		$controls
			.find( ".curr-index" )
			.html( newIndex );

		$control
			.attr( {
				"aria-selected": "true",
				tabindex: "0"
			} )
			.parent()
			.addClass( "active" );

		// Update sessionStorage with the current active panel
		if ( !tabSettings.ignoreSession ) {
			try {
				sessionStorage.setItem(
					pagePath + $container.attr( "id" ) + activePanel,
					$next.attr( "id" )
				);
			} catch ( error ) {

				/* swallow error */
			}
		}

		// Update the URL hash if needed
		if ( tabSettings.updateHash ) {
			updateHash( $next[ 0 ] );
		}

		// Identify that the tabbed interface/carousel was updated
		$container.trigger( updatedEvent, [ $next ] );
	},

	/**
	 * @method onPick
	 * @param {jQuery DOM element} $sldr The plugin element
	 * @param {jQuery DOM element} $elm The selected link from the tablist
	 */
	onPick = function( $sldr, $elm ) {
		var data = $sldr.data( componentName ),
			$panels = data.panels,
			$controls = data.tablist,
			$next = $panels.filter( "#" + $elm.attr( "aria-controls" ) );

		updateNodes( $panels, $controls, $next, $elm );
	},

	/**
	 * @method onShift
	 * @param (jQuery event} event Current event
	 * @param {jQuery DOM element} $elm The plugin element
	 */
	onShift = function( event, $elm ) {
		var data = $elm.data( componentName ),
			$panels = data.panels,
			len = $panels.length,
			current = $elm.find( "> .tabpanels > .in" ).prevAll( "[role=tabpanel]" ).length,
			autoCycle = !event.shiftto,
			next = current > len ? 0 : current + ( autoCycle ? 1 : event.shiftto );

		onSelect( $panels[ ( next > len - 1 ) ? 0 : ( next < 0 ) ? len - 1 : next ].id, autoCycle );
	},

	/**
	 * @method onSelect
	 * @param (string) id Id attribute of the panel
	 * @param (boolean) autoCycle Whether change is caused by an auto cycle
	 */
	onSelect = function( id, autoCycle ) {
		var panelSelector = "#" + id,
			$panel = $( panelSelector ),
			$panelSelectorLink;

		if ( isSmallView && $panel[ 0 ].nodeName.toLowerCase() === "details" ) {
			$panel.children( "summary" ).trigger( $panel.attr( "open" ) ? setFocusEvent : "click" );
		} else {
			$panelSelectorLink = $( panelSelector + "-lnk" );
			$panelSelectorLink.trigger( {
				type: "click",
				which: autoCycle ? undefined : 1
			} );

			// Don't change the focus if change is cause by an auto cycle
			if ( !autoCycle ) {
				$panelSelectorLink.trigger( setFocusEvent );
			}
		}
	},

	/**
	 * @method onCycle
	 * @param {jQuery DOM element} $elm The plugin element
	 * @param {integer} shifto The item to shift to
	 */
	onCycle = function( $elm, shifto ) {
		$elm.trigger( {
			type: shiftEvent,
			shiftto: shifto
		} );
	},

	/**
	 * @method onResize
	 * @param {jQuery Object} $currentElm Element being initialized (only during initialization process).
	 */
	onResize = function( $currentElm ) {
		var $elms, $elm, $tabPanels, $details, $detailsElm, $tablist,
			$openDetails, openDetailsId, activeId, $summary, $panelElm,
			i, len, j, len2, viewChange, isInit, isActive;

		if ( initialized ) {
			isSmallView = document.documentElement.className.indexOf( smallViewPattern ) !== -1;
			viewChange = isSmallView !== oldIsSmallView;
			isInit = $currentElm.length ? true : false;

			if ( viewChange || isInit ) {
				$elms = isInit ? $currentElm : $( selector );
				len = $elms.length;

				for ( i = 0; i !== len; i += 1 ) {
					$elm = $elms.eq( i );
					$tabPanels = $elm.children( ".tabpanels" );
					$details = $tabPanels.children( "details" );
					len2 = $details.length;

					if ( $details.length !== 0 ) {
						$tabPanels.detach();
						$summary = $details.children( "summary" );
						$tablist = $elm.children( "ul" );

						if ( isSmallView ) {

							// Switch to small view
							activeId = $tablist.find( ".active a" ).attr( "href" ).substring( 1 );
							for ( j = 0; j !== len2; j += 1 ) {
								$detailsElm = $details.eq( j );
								$panelElm = $detailsElm.children( ".tgl-panel" );
								isActive = $detailsElm.attr( "id" ) === activeId;

								$detailsElm
									.removeAttr( "role aria-expanded aria-hidden" )
									.removeClass( "fade out noheight in" )
									.toggleClass( "open", isActive );

								$panelElm
									.attr( "role", "tabpanel" )
									.removeAttr( "aria-expanded" )
									.removeAttr( "aria-hidden" );

								if ( isActive ) {
									$detailsElm.attr( "open", "open" );
								} else {
									$detailsElm.removeAttr( "open" );
								}

								if ( !isInit ) {
									$detailsElm
										.children( "summary" )
										.attr( {
											"aria-expanded": isActive,
											"aria-selected": isActive
										} );
								}
							}
						} else if ( oldIsSmallView ) {

							// Switch to large view
							$openDetails = $details.filter( "[open]" );
							openDetailsId = $openDetails.attr( "id" );

							$openDetails = ( $openDetails.length === 0 ? $details : $openDetails ).eq( 0 );

							$details
								.attr( {
									role: "tabpanel",
									open: "open"
								} )
								.not( $openDetails )
								.addClass( "fade out noheight wb-inv" )
								.attr( {
									"aria-hidden": "true",
									"aria-expanded": "false"
								} );

							$details.children( ".tgl-panel" ).removeAttr( "role" );

							$openDetails
								.addClass( "fade in" )
								.attr( {
									"aria-hidden": "false",
									"aria-expanded": "true"
								} );
						}

						$summary.attr( "aria-hidden", !isSmallView );
						$tablist.attr( "aria-hidden", isSmallView );

						$elm.append( $tabPanels );

						// Update the tablist role
						if ( isSmallView && !isInit ) {
							$elm.attr( "role", "tablist" );
						} else if ( oldIsSmallView ) {
							$elm
								.removeAttr( "role" )
								.find( nestedTglPanelSelector ).removeAttr( "role" );

							$elm.find( "> ul [href$='" + openDetailsId + "']" ).trigger( "click" );
						}
					}
				}

				// Need timeout to account for Toggle changes
				if ( isInit && !isSmallView && $elms.hasClass( tabsAccordionClass ) ) {
					setTimeout( function() {
						$elms
							.removeAttr( "role" )
							.find( nestedTglPanelSelector ).removeAttr( "role" );
					}, 1 );
				}
			}

			oldIsSmallView = isSmallView;
		}

		if ( viewChange || isInit ) {

			// Remove wb-inv from regular tabs that were used to prevent FOUC (after 300ms delay)
			setTimeout( function() {
				$( selector + " .tabpanels > details.wb-inv" ).removeClass( "wb-inv" );
			}, 300 );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent + " " + shiftEvent + " " + selectEvent, selector, function( event ) {
	var eventTarget = event.target,
		eventCurrentTarget = event.currentTarget,
		$elm;

	// Filter out any events triggered by descendants
	if ( eventCurrentTarget === eventTarget ) {
		switch ( event.type ) {
		case "timerpoke":
			$elm = $( eventTarget );
			if ( !$elm.hasClass( componentName + "-inited" ) ) {
				init( event );
			} else if ( $elm.hasClass( "playing" ) ) {
				onTimerPoke( $elm );
			}
			break;

		/*
		 * Init
		 */
		case "wb-init":
			init( event );
			break;

		/*
		 * Change tab panels by a delta
		 */
		case "wb-shift":
			onShift( event, $( eventTarget ) );
			break;

		/*
		 * Select a specific tab panel
		 */
		case "wb-select":
			onSelect( event.id );
			break;
		}
	}

	/*
	 * Since we are working with events we want to ensure that we are being passive about our control,
	 * so returning true allows for events to always continue
	 */
	return true;
} );

/*
 * Tabs, next, previous and play/pause
 */
$document.on( activateEvent, controls, function( event ) {
	var which = event.which,
		elm = event.currentTarget,
		className = elm.className,
		spaceText = i18nText.space,
		$elm, $sldr, sldrId, plypause, buttonText, data, isPlaying, isPlayPause;

	// No control, alt or meta keys and only left mouse button, enter key,
	// space bar, escape key and arrow keys
	if ( !( event.ctrlKey || event.altKey || event.metaKey ) &&
			( !which || which === 1 || which === 13 || which === 27 ||
			which === 32 || ( which > 36 && which < 41 ) ) ) {

		// Stop propagation of the activate event
		event.preventDefault();
		if ( event.stopPropagation ) {
			event.stopImmediatePropagation();
		} else {
			event.cancelBubble = true;
		}

		$elm = $( elm );
		$sldr = $elm.closest( selector );
		sldrId = $sldr[ 0 ].id;
		isPlaying = $sldr.hasClass( "playing" );
		isPlayPause = className.indexOf( "plypause" ) !== -1;

		// Reset ctime to 0
		data = $sldr.data( componentName );
		data.ctime = 0;
		$sldr.data( componentName, data );

		// Stop the slider from playing unless it is already stopped
		// and the play button is activated
		if ( ( isPlaying && which ) || ( isPlayPause && !( which > 36 && which < 41 ) ) ) {
			if ( isPlaying ) {
				wb.remove( "#" + sldrId + selector );
			} else {
				wb.add( "#" + sldrId + selector );
			}

			$sldr.toggleClass( "playing" );
			isPlaying = !isPlaying;
			buttonText = isPlaying ? i18nText.pause : i18nText.play;

			plypause = $sldr.find( "a.plypause" )[ 0 ];
			plypause.setAttribute( "title", buttonText );
			plypause.innerHTML = "<span class='glyphicon glyphicon-" +
				( isPlaying ? "pause" : "play" ) + "'></span> " +
				"<span>" + buttonText + "</span><span class='wb-inv'>" +
				spaceText + i18nText.hyphen + spaceText +
				( isPlaying ? i18nText.rotStop : i18nText.rotStart ) + "</span>";
		}

		// Arrow keys
		if ( which > 36 ) {
			onCycle( $sldr, which < 39 ? -1 : 1 );
			$sldr.find( "> [role=tablist] .active a" ).trigger( setFocusEvent );

		// Not the escape key
		} else if ( which !== 27 ) {

			// If the target is a tab
			if ( elm.getAttribute( "role" ) === "tab" ) {

				// Only change the tabpanel if the tab is not currently selected
				if ( elm.getAttribute( "aria-selected" ) !== "true" ) {
					onPick( $sldr, $elm );
				}

				// Put focus on the tab panel if the enter key or space bar are used
				if ( which === 13 || which === 32 ) {
					$sldr.find( elm.getAttribute( "href" ) )
						.trigger( setFocusEvent );
				}

			// If the target is next, previous or tab count
			} else if ( !isPlayPause ) {
				onCycle( $sldr, className.indexOf( "prv" ) !== -1 ? -1 : 1 );
			}
		}
	}

	/*
	 * Since we are working with events we want to ensure that we are being passive about our control,
	 * so returning true allows for events to always continue
	 */
	return true;
} );

$document.on( activateEvent, selector + " [role=tabpanel]", function( event ) {
	var currentTarget = event.currentTarget,
		which = event.which,
		$container;

	// Stop propagation of the click/keydown event
	if ( event.stopPropagation ) {
		event.stopImmediatePropagation();
	} else {
		event.cancelBubble = true;
	}

	// Ctrl + Up arrow
	if ( event.ctrlKey && event.which === 38 ) {

		// Move focus to the tab or summary element
		if ( isSmallView ) {
			$( currentTarget ).prev().trigger( setFocusEvent );
		} else {
			$( currentTarget )
				.closest( selector )
				.find( "[href$='#" + currentTarget.id + "']" )
				.trigger( setFocusEvent );
		}

	// Left mouse button click or escape key
	} else if ( !which || which === 1 || which === 27 ) {
		$container = $( event.currentTarget ).closest( selector );

		// Stop the carousel
		if ( $container.hasClass( "playing" ) ) {
			$container.find( ".plypause" ).trigger( "click" );
		}
	}
} );

// Handling for links to tabs from within a panel
$document.on( "click", selector + " [role=tabpanel] a", function( event ) {
	var currentTarget = event.currentTarget,
		href = currentTarget.getAttribute( "href" ),
		which = event.which,
		$tabpanels, $panel, $summary;

	// Ignore middle and right mouse buttons
	if ( ( !which || which === 1 ) && href.charAt( 0 ) === "#" ) {
		$tabpanels = $( currentTarget ).closest( ".tabpanels" );
		$panel = $tabpanels.children( "#" + wb.jqEscape( href.substring( 1 ) ) );
		if ( $panel.length !== 0 ) {
			event.preventDefault();
			$summary = $panel.children( "summary" );
			if ( $summary.length !== 0 && $summary.attr( "aria-hidden" ) !== "true" ) {
				$summary.trigger( "click" );
			} else {
				$tabpanels.parent().find( href + "-lnk" ).trigger( "click" );
			}
		}
	}
} );

// These events only fire at the document level
$document.on( wb.resizeEvents, onResize );

$document.on( activateEvent, selector + " > .tabpanels > details > summary", function( event ) {
	var which = event.which,
		details = event.currentTarget.parentNode,
		$details, $container, tabSettings;

	if ( !( event.ctrlKey || event.altKey || event.metaKey ) &&
		( !which || which === 1 || which === 13 || which === 32 ) ) {

		$container = $( details.parentNode.parentNode );
		$details = $( details );
		tabSettings = $container.data( componentName ).settings;

		// Update sessionStorage with the current active panel
		if ( !tabSettings.ignoreSession ) {
			try {
				sessionStorage.setItem(
					pagePath + $container.attr( "id" ) + activePanel,
					details.id
				);
			} catch ( error ) {

				/* swallow error */
			}
		}

		// Update the URL hash if needed
		if ( tabSettings.updateHash ) {
			updateHash( details );
		}

		// Identify that the tabbed interface accordion was updated
		// if the panel was not already open
		if ( !$details.attr( "open" ) ) {
			$container.trigger( updatedEvent, [ $details ] );
		}
	}
} );

// Change the panel based upon an external link click
$document.on( "click", ".wb-tabs-ext", function( event ) {
	var which = event.which;

	// Ignore middle and right mouse buttons
	if ( !which || which === 1 ) {
		event.preventDefault();
		onSelect( event.currentTarget.getAttribute( "href" ).substring( 1 ) );
	}
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Tag filter
 * @overview Filter based content tagging
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, window, document, wb ) {
"use strict";

let wait;

const componentName = "wb-tagfilter",
	selector = ".provisional." + componentName,
	selectorCtrl = "." + componentName + "-ctrl",
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	filterOutClass = "wb-fltr-out",
	tgFilterOutClass = "wb-tgfltr-out",
	itemsWrapperClass = "wb-tagfilter-items",
	noResultWrapperClass = "wb-tagfilter-noresult",

	init = function( event ) {
		const elm = wb.init( event, componentName, selector );

		if ( elm ) {
			const filterControls = elm.querySelectorAll( selectorCtrl ),
				taggedItems = elm.querySelectorAll( "[data-wb-tags]" ),
				taggedItemsWrapper = elm.querySelector( "." + itemsWrapperClass ),
				noResultWrapper = elm.querySelector( "." + noResultWrapperClass );

			elm.items = [];
			elm.filters = {};
			elm.activeFilters = [];

			if ( taggedItemsWrapper ) {
				taggedItemsWrapper.id = taggedItemsWrapper.id || wb.getId(); // Ensure the element has an ID
				taggedItemsWrapper.setAttribute( "aria-live", "polite" );
			}

			// Handle filters
			if ( filterControls.length ) {
				elm.filters = buildFiltersObj( filterControls );

				filterControls.forEach( function( item ) {
					item.setAttribute( "aria-controls", taggedItemsWrapper.id );
				} );
			}

			// Handle tagged items
			if ( taggedItems.length ) {
				elm.items = buildTaggedItemsArr( taggedItems );
			}

			// Add accessibility to no result element
			if ( noResultWrapper ) {
				noResultWrapper.setAttribute( "role", "status" );
			}

			// Update list of visible items (in case of predefined filters)
			update( elm );

			wb.ready( $( elm ), componentName );
		}
	},

	// Add every tagged item to an array of objects with their DOM ID, list of associated tags, and default isMatched attribute
	buildTaggedItemsArr = function( taggedItems ) {
		let taggedItemsArr = [];

		taggedItems.forEach( function( taggedItem ) {
			let tagsList = taggedItem.dataset.wbTags.split( " " );

			if ( !taggedItem.id ) {
				taggedItem.setAttribute( "id", wb.getId() );
			}

			taggedItemsArr.push( {
				id: taggedItem.id,
				tags: tagsList,
				isMatched: true,
				itemText: taggedItem.innerText.toLowerCase()
			} );
		} );

		return taggedItemsArr;
	},

	// Build list of available filters using all filters grouped by filter name
	buildFiltersObj = function( filterControls ) {
		let filtersObj = {};

		filterControls.forEach( function( control ) {
			if ( !control.name ) {
				console.error( componentName + ": Filter controls require an attribute 'name'." );
			}

			switch ( control.type ) {
			case "checkbox":
			case "radio":
				if ( !( control.name in filtersObj ) ) {
					filtersObj[ control.name ] = [ ];
				}

				filtersObj[ control.name ].push( {
					isChecked: control.checked,
					type: control.type,
					value: control.value
				} );

				break;
			case "select-one":
				filtersObj[ control.name ] = [ {
					type: control.type,
					value: control.value
				} ];
				break;
			}
		} );

		return filtersObj;
	},

	// Update array of active filters according to UI selected controls
	refineFilters = function( instance ) {
		instance.activeFilters = [ ]; // Clear active filters

		for ( let filterGroupName in instance.filters ) {
			let filterGroup = instance.filters[ filterGroupName ],
				filterGroupChkCnt = filterGroup.filter( function( o ) {
					return o.isChecked === true;
				} ).length,
				filterGroupActiveFilters = [ ];

			switch ( filterGroup[ 0 ].type ) {
			case "checkbox":
				if ( filterGroupChkCnt > 0 ) {
					filterGroup.forEach( function( filterItem ) {
						if ( filterItem.isChecked ) {
							filterGroupActiveFilters.push( filterItem.value );
						}
					} );
				}
				break;

			case "radio":
				if ( filterGroupChkCnt > 0 ) {
					for ( let filterItem of filterGroup ) {
						if ( filterItem.isChecked === true ) {
							if ( filterItem.value !== "" ) {
								filterGroupActiveFilters.push( filterItem.value );
							}
							break;
						}
					}
				} else {
					console.warn( componentName + ": Radio button groups must have a default selected value. If you want to display all items, add an option called \"All\" with an empty value." );
				}
				break;

			case "select-one":
				if ( filterGroup[ 0 ].value !== "" ) {
					filterGroupActiveFilters.push( filterGroup[ 0 ].value );
				}
				break;
			}

			instance.activeFilters.push( filterGroupActiveFilters );
		}
	},

	// Match tagged items to active filters and only return items that have an active filter in every filter group
	matchItemsToFilters = function( instance ) {
		let filtersGroups = instance.activeFilters.length;

		instance.items.forEach( function( item ) {
			let matchCount = 0;

			instance.activeFilters.forEach( function( filterGroup ) {
				if ( filterGroup.length === 0 ) {
					matchCount++;
				} else {
					let itemIncludesFilter = filterGroup.filter( function( f ) {
						return item.tags.includes( f );
					} ).length;

					if ( itemIncludesFilter ) {
						matchCount++;
					}
				}
			} );

			matchCount === filtersGroups ? item.isMatched = true : item.isMatched = false;
		} );
	},

	// Update list of visible items according to their "isMatched" property
	updateDOMItems = function( instance ) {
		const updatedItemsList = instance.items.forEach( function( item ) {
			let domItem = instance.querySelector( "#" + item.id ),
				matched = item.isMatched;

			if ( matched ) {
				if ( domItem.classList.contains( tgFilterOutClass ) ) {
					domItem.classList.remove( tgFilterOutClass );
				}
			} else {
				if ( !domItem.classList.contains( tgFilterOutClass ) ) {
					domItem.classList.add( tgFilterOutClass );
				}
			}
		} );

		return updatedItemsList;
	},

	// Utility method to update stored active filters, update stored items and update visibility of tagged items
	update = function( instance ) {
		refineFilters( instance );
		matchItemsToFilters( instance );
		updateDOMItems( instance );

		$( instance ).trigger( "wb-contentupdated", [ { source: componentName } ] );
	};

// When a filter is updated
$document.on( "change", selectorCtrl, function( event )  {
	let control = event.currentTarget,
		filterType = control.type,
		filterName = control.name,
		filterValue = control.value,
		elm = control.closest( selector ),
		filterGroup = elm.filters[ filterName ];

	switch ( filterType ) {
	case "checkbox":

		// Update virtual filter to the new state
		filterGroup.find( function( filter ) {
			return filter.value === filterValue;
		} ).isChecked = !!control.checked;
		break;

	case "radio":

		// Set all virtual radio items to unchecked
		filterGroup.forEach( function( filterItem ) {
			filterItem.isChecked = false;
		} );

		// Set selected radio button's associated virtual filter to checked
		filterGroup.find( function( filter ) {
			return filter.value === filterValue;
		} ).isChecked = true;
		break;

	case "select-one":

		// Update virtual filter to the new value
		filterGroup[ 0 ].value = filterValue;
		break;
	}

	// Update list of visible items
	update( elm );
} );

$document.on( "wb-contentupdated", selector, function( event, data )  {
	let that = this,
		supportsHas = window.getComputedStyle( document.documentElement ).getPropertyValue( "--supports-has" ); // Get "--supports-has" CSS property

	// Reinitialize tagfilter if content on the page has been updated by another plugin
	if ( data.source !== componentName ) {
		if ( wait ) {
			clearTimeout( wait );
		}

		wait = setTimeout( function() {
			that.classList.remove( "wb-init", componentName + "-inited" );
			$( that ).trigger( "wb-init." + componentName );
		}, 100 );
	}

	// Show no result message if on Firefox -- Remove once Firefox supports ":has()"
	if ( supportsHas === "false" ) {
		let noResultItem = this.querySelector( "." + noResultWrapperClass );

		if ( noResultItem && this.items.length > 0 ) {
			let visibleItems = this.querySelectorAll( "." + itemsWrapperClass + " " + "[data-wb-tags]:not(." + tgFilterOutClass + ", ." + filterOutClass + ")" );

			if ( visibleItems.length < 1 ) {
				noResultItem.style.display = "block";
			} else {
				noResultItem.style.display = "none";
			}
		}
	}
} );

$document.on( "timerpoke.wb " + initEvent, selector, init );

wb.add( selector );

} )( jQuery, window, document, wb );

/**
 * @title WET-BOEW Text highlighting
 * @overview Automatically highlights certain words on a Web page. The highlighted words can be selected via the query string.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, window, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-txthl",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
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
			params = wb.pageUrlParts.params,
			searchCriteria, newText;

		if ( elm ) {
			if ( event.txthl ) {
				searchCriteria = $.isArray( event.txthl ) ? event.txthl.join( "|" ) : event.txthl;
			} else if ( params && params.txthl ) {
				searchCriteria = decodeURIComponent(
					wb.pageUrlParts.params.txthl
						.replace( /^\s+|\s+$|\|+|"|\(|\)/g, "" ).replace( /\++/g, "|" )
				);
			}

			if ( searchCriteria ) {

				// Strip html
				var map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" };
				searchCriteria = searchCriteria.replace( /[&<>"']/g, function( m ) {
					return map[ m ];
				} );

				// Make sure that we're not checking for text within a tag; only the text outside of tags.
				searchCriteria = "(?=([^>]*<))([\\s'])?(" + searchCriteria + ")(?!>)";

				newText = elm.innerHTML.replace( new RegExp( searchCriteria, "gi" ), function( match, group1, group2, group3 ) {
					return ( !group2 ? "" : group2 ) + "<mark>" + group3 + "</mark>";
				} );
				elm.innerHTML = newText;
			}

			// Identify that initialization has completed
			wb.ready( $( elm ), componentName );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );

/**
 * @title WET-BOEW Toggle
 * @overview Plugin that allows a link to toggle elements between on and off states.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-toggle",
	selector = "." + componentName,
	selectorPanel = ".tgl-panel",
	selectorTab = ".tgl-tab",
	initEvent = "wb-init" + selector,
	toggleEvent = "toggle" + selector,
	toggledEvent = "toggled" + selector,
	setFocusEvent = "setfocus.wb",
	states = {},
	$document = wb.doc,
	$window = wb.win,

	defaults = {
		stateOn: "on",
		stateOff: "off"
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var link = wb.init( event, componentName, selector, true ),
			$link, data, persistState;

		if ( link ) {

			// Merge the elements settings with the defaults
			$link = $( link );
			data = $.extend( {}, defaults, $link.data( "toggle" ) );
			$link.data( "toggle", data );

			// Add aria attributes of the toggle element
			initAria( link, data );

			// Persist toggle state across page loads
			if ( data.persist ) {
				persistState = initPersist( $link, data );
			}

			// Toggle behaviour when the page is printed
			if ( data.print ) {
				initPrint( $link, data );
			}

			// Set the initial state if the state has been specified and
			// the persistent state has not been set
			if ( !persistState && data.state ) {
				setState( $link, data, data.state );
			}

			// Identify that initialization has completed
			wb.ready( $link, componentName );
		}
	},

	/**
	 * Initialize the aria attributes for a given toggle element
	 * @param {DOM element} link The toggle element to initialize
	 * @param {Object} data Simple key/value data object passed when the event was triggered
	 */
	initAria = function( link, data ) {
		var i, len, elm, elms, parent, tabs, tab, panel, isOpen, wrapper,
			ariaControls = "",
			hasOpen = false;

		// Group toggle elements with a parent are assumed to be a tablist
		if ( data.group != null && data.parent != null ) { //eslint-disable-line no-eq-null
			parent = document.querySelector( data.parent );

			// Check that the tablist widget hasn't already been initialized
			if ( parent.getAttribute( "role" ) !== "tablist" ) {

				// Only apply the tablist role if the parent is not the tabbed interface container
				// or the page is currently in "smallview", "xsmallview" or "xxsmallview"
				if ( parent.className.indexOf( "wb-tabs" ) === -1 ||
					document.documentElement.className.indexOf( "smallview" ) !== -1 ) {
					parent.setAttribute( "role", "tablist" );
				}

				elms = parent.querySelectorAll( data.group );
				tabs = parent.querySelectorAll( data.group + " " + selectorTab );

				// Set the tab and panel aria attributes
				for ( i = 0, len = elms.length; i !== len; i += 1 ) {
					elm = elms[ i ];
					tab = tabs[ i ];
					panel = elm.querySelector( selectorPanel );

					// Check if the element is toggled on based on the
					// open attribute or "on" CSS class
					isOpen = elm.nodeName.toLowerCase() === "details" ?
						!!elm.hasAttribute( "open" ) :
						( " " + tab.className + " " ).indexOf( " " + data.stateOn + " " );
					if ( isOpen ) {
						hasOpen = true;
					}

					if ( !tab.getAttribute( "id" ) ) {
						tab.setAttribute( "id", wb.getId() );
					}

					//Details and summary don't support aria roles and some aria attribute that is why they are wrapped in a div
					if ( elm.nodeName.toLowerCase() === "details" && elm.parentNode.className.toLowerCase().indexOf( "accordion" ) > -1 ) {
						wrapper = document.createElement( "div" );
						wrapper.classList.add( "tgl-tab" );
						wrapper.setAttribute( "role", "tab" );
						wrapper.setAttribute( "aria-selected", isOpen );
						wrapper.setAttribute( "tabindex", isOpen ? "0" : "-1" );
						wrapper.setAttribute( "aria-posinset", i + 1 );
						wrapper.setAttribute( "aria-setsize", len );
						parent.replaceChild( wrapper, elm );
						wrapper.appendChild( elm );
					} else {
						tab.setAttribute( "role", "tab" );
						tab.setAttribute( "aria-selected", isOpen );
						tab.setAttribute( "tabindex", isOpen ? "0" : "-1" );
						tab.setAttribute( "aria-posinset", i + 1 );
						tab.setAttribute( "aria-setsize", len );
					}
					panel.setAttribute( "role", "tabpanel" );
					panel.setAttribute( "aria-labelledby", tab.getAttribute( "id" ) );
					panel.setAttribute( "aria-expanded", isOpen );
					panel.setAttribute( "aria-hidden", !isOpen );
				}

				// No open panels so put the first summary in the tab order
				if ( !hasOpen ) {
					tabs[ 0 ].setAttribute( "tabindex", "0" );
				}
			}

		// Set the elements this link controls
		} else {
			elms = getElements( link, data );
			for ( i = 0, len = elms.length; i !== len; i += 1 ) {
				elm = elms[ i ];
				if ( !elm.id ) {
					elm.id = wb.getId();
				}
				ariaControls += elm.id + " ";
			}
			link.setAttribute( "aria-controls", ariaControls.slice( 0, -1 ) );
		}
	},

	/**
	 * Initializes persistent behaviour of the toggle element
	 * @param {jQuery Object} $link The toggle element to initialize
	 * @param {Object} data Simple key/value data object passed when the event was triggered
	 * @returns {string} Persistent state
	 */
	initPersist = function( $link, data ) {
		var state,
			link = $link[ 0 ];

		// Store the persistence type and key for later use
		data.persist = data.persist === "session" ? sessionStorage : localStorage;
		data.persistKey = componentName + ( data.group ? data.group : "" ) + link.id;

		// If there's a saved toggle state, trigger the change to that state
		state = data.persist.getItem( data.persistKey );
		if ( state ) {
			$link.trigger( toggleEvent, $.extend( {}, data, { type: state } ) );
		}

		return state;
	},

	/**
	 * Initialize open on print behaviour of the toggle element
	 * @param {jQuery Object} $link The toggle element to initialize
	 * @param {Object} data Simple key/value data object passed when the event was triggered
	 */
	initPrint = function( $link, data ) {
		var mediaQuery,
			printEvent = "beforeprint";

		$window.on( printEvent, function() {
			$link.trigger( toggleEvent, $.extend( {}, data, { type: data.print } ) );
		} );

		// Fallback for browsers that don't support print events
		if ( window.matchMedia ) {
			mediaQuery = window.matchMedia( "print" );
			if ( mediaQuery.addListener ) {
				mediaQuery.addListener( function( query ) {
					if ( query.matches ) {
						$window.trigger( printEvent );
					}
				} );
			}
		}
	},

	/**
	 * Click handler for the toggle links
	 * @param {jQuery Event} event The event that triggered this invocation
	 */
	click = function( event ) {
		var $link = $( event.currentTarget );

		$link.trigger( toggleEvent, $link.data( "toggle" ) );
		event.preventDefault();

		// Assign focus to eventTarget
		$link.trigger( setFocusEvent );
	},

	/**
	 * Toggles the elements a link controls between the on and off states.
	 * @param {jQuery Event} event The event that triggered this invocation
	 * @param {Object} data Simple key/value data object passed when the event was triggered
	 */
	toggle = function( event, data ) {
		if ( event.namespace === componentName ) {
			var dataGroup, key, $elmsGroup,
				isGroup = !!data.group,
				isPersist = !!data.persist,
				isTablist = isGroup && !!data.parent,
				link = event.currentTarget,
				$link = $( link ),
				stateFrom = getState( $link, data ),
				isToggleOn = stateFrom === data.stateOff,
				stateTo = isToggleOn ? data.stateOn : data.stateOff,
				$elms = isTablist ?	$link.parent( data.group ) : getElements( link, data );

			// Group toggle behaviour: only one element in the group open at a time.
			if ( isGroup ) {

				// Get the grouped elements using data.group as the CSS selector
				dataGroup = $.extend( {}, data, { selector: data.group } );
				$elmsGroup = getElements( link, dataGroup );

				// Set the toggle state to "off".  For tab lists, this is stored on the tab element
				setState( isTablist ? $( data.parent ).find( selectorTab ) : $elmsGroup,
					dataGroup, data.stateOff );

				// Toggle all grouped elements to "off"
				$elmsGroup.wb( "toggle", data.stateOff, data.stateOn );
				$elmsGroup.trigger( toggledEvent, {
					isOn: false,
					isTablist: isTablist,
					elms: $elmsGroup
				} );

				// Remove all grouped persistence keys
				if ( isPersist ) {
					for ( key in data.persist ) {
						if ( key.indexOf( componentName + data.group ) === 0 ) {
							data.persist.removeItem( key );
						}
					}
				}
			}

			// Set the toggle state. For tab lists, this is set on the tab element
			setState( isTablist ? $link : $elms, data, stateTo );

			// Toggle all elements to the requested state
			$elms.wb( "toggle", stateTo, stateFrom );
			$elms.trigger( toggledEvent, {
				isOn: isToggleOn,
				isTablist: isTablist,
				elms: $elms
			} );

			// Ensure that last focused element in the accordion remains keyboard focusable
			// whether it is collapsed or not
			if ( isGroup ) {
				$elms.find( "summary" ).attr( { "tabindex": "0" } );
			}

			// Store the toggle link's current state if persistence is turned on.
			// Try/catch is required to address exceptions thrown when using BB10 or
			// private browsing in iOS.
			if ( isPersist ) {
				try {
					data.persist.setItem( data.persistKey, stateTo );
				} catch ( error ) {

					/* swallow error */
				}
			}
		}
	},

	/**
	 * Sets the required property and attribute for toggling open/closed a details element
	 * @param {jQuery Event} event The event that triggered this invocation
	 * @param {Object} data Simple key/value data object passed when the event was triggered
	 */
	toggleDetails = function( event, data ) {
		if ( event.namespace === componentName && event.target === event.currentTarget ) {
			var top,
				isOn = data.isOn,
				$elms = data.elms,
				$this = $( this ),
				$detail = $this.is( "summary" ) ? $this.parent() : $this;

			// Stop propagation of the toggleDetails event
			if ( event.stopPropagation ) {
				event.stopImmediatePropagation();
			} else {
				event.cancelBubble = true;
			}

			$detail.prop( "open", isOn );

			if ( data.isTablist ) {

				// Set the required aria attributes
				$elms.find( selectorTab ).parents( selectorTab ).attr( {
					"aria-selected": isOn,
					tabindex: isOn ? "0" : "-1"
				} );
				$elms.find( selectorPanel ).attr( {
					"aria-hidden": !isOn,
					"aria-expanded": isOn
				} );

				// Check that the top of the open element is in view.
				if ( isOn && $elms.length === 1 ) {
					top = $elms.offset().top;
					if ( top < $window.scrollTop() ) {
						$window.scrollTop( top );
					}
				}
			}
		}
	},

	/**
	 * Returns the elements a given toggle element controls.
	 * @param {DOM element} link Toggle element that was clicked
	 * @param {Object} data Simple key/value data object passed when the event was triggered
	 * @returns {jQuery Object} DOM elements the toggle link controls
	 */
	getElements = function( link, data ) {
		var selector = data.selector || link,
			parent = data.parent || null;

		return parent !== null ? $( parent ).find( selector ) : $( selector );
	},

	/**
	 * Gets the current toggle state of elements controlled by the given link.
	 * @param {jQuery Object} $link Toggle link that was clicked
	 * @param {Object} data Simple key/value data object passed when the event was triggered
	 */
	getState = function( $link, data ) {
		var parent = data.parent,
			selector = data.selector,
			type = data.type;

		// Get opposite state of the type. Toggle reverses this
		// to the requested state.
		if ( type ) {
			return type === "on" ? data.stateOff : data.stateOn;

		// <details> elements use the open attribute to determine state
		} else if ( $link[ 0 ].nodeName.toLowerCase() === "summary" ) {
			return $link.parent().attr( "open" ) ? data.stateOn : data.stateOff;

		// When no selector, use the data attribute of the link
		} else if ( !selector ) {
			return $link.data( componentName + "-state" ) || data.stateOff;

		// When toggling multiple <details> elements, state is "off" if any are collapsed
		} else if ( selector === "details" && !type ) {
			var anyCollapsed = false;
			getElements( $link, data ).each( function() {
				if ( !$( this ).attr( "open" ) ) {
					anyCollapsed = true;
				}
			} );
			return anyCollapsed ? data.stateOff : data.stateOn;

		// Get the current on/off state of the elements specified by the selector and parent
		} else if ( Object.prototype.hasOwnProperty.call( states, selector ) ) {
			return Object.prototype.hasOwnProperty.call( states[ selector ], parent ) ?
				states[ selector ][ parent ] :
				states[ selector ].all;
		}
		return data.stateOff;
	},

	/*
	 * Sets the current toggle state of elements controlled by the given link.
	 * @param {DOM element} link Toggle link that was clicked
	 * @param {Object} data Simple key/value data object passed when the event was triggered
	 * @param {String} state The current state of the elements: "on" or "off"
	 */
	setState = function( $elms, data, state ) {
		var prop,
			parent = data.parent,
			selector = data.selector,
			elmsState = states[ selector ];

		if ( selector ) {

			// Check the selector object has been created
			if ( !elmsState ) {
				elmsState = { all: data.stateOff };
				states[ selector ] = elmsState;
			}

			// If there's a parent, set its state
			if ( parent ) {
				elmsState[ parent ] = state;

			// No parent means set all states for the given selector. This is
			// because toggle links that apply to the entire DOM also affect
			// links that are restricted by parent.
			} else {
				for ( prop in elmsState ) {
					if ( Object.prototype.hasOwnProperty.call( elmsState, prop ) ) {
						elmsState[ prop ] = state;
					}
				}
			}
		}

		// Store the state on the elements as well. This allows a link to toggle itself.
		$elms.data( componentName + "-state", state );
	};

// Bind the plugin's events
$document.on( "timerpoke.wb " + initEvent + " " + toggleEvent +
" click", selector, function( event, data ) {

	var eventType = event.type;

	switch ( eventType ) {
	case "click":
		click( event );
		break;

	case "toggle":
		toggle( event, data );
		break;

	case "timerpoke":
	case "wb-init":
		init( event );
		break;
	}
} );

$document.on( toggledEvent, "summary, details", toggleDetails );

// Keyboard handling for the accordion
$document.on( "keydown", selectorTab, function( event ) {
	var which = event.which,
		data, $elm, $parent, $group, $newPanel, index;

	if ( !event.ctrlKey && which > 34 && which < 41 ) {
		event.preventDefault();
		$elm = $( event.currentTarget );
		data = $elm.data( "toggle" );
		$parent = $document.find( data.parent );
		$group = $parent.find( data.group );
		index = $group.index( $elm.parent() );

		switch ( which ) {

		// End
		case 35:
			$newPanel = $group.last();
			break;

		// Home
		case 36:
			$newPanel = $group.first();
			break;

		// Left / up arrow
		case 37:
		case 38:
			if ( index === 0 ) {
				$newPanel = $group.last();
			} else {
				$newPanel = $group.eq( index - 1 );
			}
			break;

		// Right / down arrow
		case 39:
		case 40:
			if ( index === $group.length - 1 ) {
				$newPanel = $group.first();
			} else {
				$newPanel = $group.eq( index + 1 );
			}
			break;
		}

		$newPanel
			.children( "summary" )
			.trigger( setFocusEvent );
	}
} );

$document.on( "keydown", selectorPanel, function( event ) {

	// Ctrl + Up arrow
	if ( event.ctrlKey && event.which === 38 ) {

		// Move focus to the summary element
		$( event.currentTarget )
			.prev()
			.trigger( setFocusEvent );
	}
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Twitter embedded timeline
 * @overview Helps with implementing Twitter embedded timelines.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-twitter",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	i18n, i18nText,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var eventTarget = wb.init( event, componentName, selector ),
			protocol = wb.pageUrlParts.protocol;

		if ( eventTarget ) {
			const twitterLink = eventTarget.querySelector( "a.twitter-timeline" );

			// Ignore IE11
			// Note: Twitter's widget no longer supports it...
			if ( wb.ie11 ) {
				wb.ready( $( eventTarget ), componentName );
				return;
			}

			// Process the Twitter link
			if ( twitterLink ) {
				const loadingDiv = document.createElement( "div" );
				let observer;

				// Only initialize the i18nText once
				if ( !i18nText ) {
					i18n = wb.i18n;
					i18nText = {
						startNotice: i18n( "twitter-start-notice" ),
						endNotice: i18n( "twitter-end-notice" ),
						skipEnd: i18n( "twitter-skip-end" ),
						skipStart: i18n( "twitter-skip-start" ),
						timelineTitle: i18n( "twitter-timeline-title" )
					};
				}

				// Set Chinese (Simplfified)'s language code to "zh-cn"
				// If the link doesn't specify a widget language and its "in-page" language code is "zh-Hans"...
				// Notes:
				// -WET uses "zh-Hans", Twitter uses "zh-ch" and falls back to English if the former is used
				// -Language code sourced from https://developer.twitter.com/en/docs/twitter-for-websites/supported-languages
				if ( !twitterLink.dataset.lang && twitterLink.closest( "[lang='zh-Hans']" ) ) {
					twitterLink.dataset.lang = "zh-cn";
				}

				// Match the Facebook page plugin's default height
				// If data-height is set to "fb-page" OR the widget has a tweet limit and lacks a custom height...
				// Notes:
				// -Counteracts enormous default widget heights that can reach tens of thousands of pixels without a scrollbar
				// -Timeline widgets stopped honouring tweet limits on July 21, 2023 and began showing up to 100 tweets at a time ("verified" accounts only)
				// -Facebook page plugin's default height is documented in https://developers.facebook.com/docs/plugins/page-plugin#settings
				if ( twitterLink.dataset.height === "fb-page" || ( twitterLink.dataset.tweetLimit && !twitterLink.dataset.height ) ) {
					twitterLink.dataset.height = "500";
				}

				// Add a "do not track" parameter (i.e. data-dnt="true" attribute) unless it's already been set
				// Note: Covered in https://developer.twitter.com/en/docs/twitter-for-websites/webpage-properties
				if ( !twitterLink.dataset.dnt ) {
					twitterLink.dataset.dnt = "true";
				}

				// Add a loading icon below the link
				loadingDiv.className = "twitter-timeline-loading";
				twitterLink.after( loadingDiv );

				// Observe DOM mutations
				observer = new MutationObserver( function( mutations ) {
					mutations.forEach( function( mutation ) {
						switch ( mutation.type ) {

						// Check for attribute changes
						case "attributes": {
							const mutationTarget = mutation.target;

							// Override the timeline iframe's title right after Twitter's widget script adds it
							// Note: The timeline's iframe title is English-only and written in title case ("Twitter Timeline")... This replaces it with an i18n version written in sentence case.
							if ( mutationTarget.nodeName === "IFRAME" && mutationTarget.title !== i18nText.timelineTitle ) {
								mutationTarget.title = i18nText.timelineTitle;
							}
							break;
						}

						// Check for node removals
						case "childList": {
							mutation.removedNodes.forEach( function( removedNode ) {

								// If the removed node was a Twitter link, remove its adjacent loading icon, add skip links and stop observing
								// Note: Twitter's widget script removes "a.twitter-timeline" upon displaying the timeline iframe's content... at which point the loading icon is no longer useful
								if ( removedNode === twitterLink && mutation.nextSibling === loadingDiv ) {
									const iframeContainer = loadingDiv.previousElementSibling;

									loadingDiv.remove();
									addSkipLinks( iframeContainer );

									// The following 2 lines were added as a workaround in Safari where the iFrame is not displayed
									eventTarget.style.opacity = 1;
									eventTarget.style.opacity = "";

									observer.disconnect();
								}
							} );
						}
						}
					} );
				} );

				// Observe changes to the plugin container's child elements and title attributes
				observer.observe( eventTarget, {
					attributeFilter: [ "title" ],
					childList: true,
					subtree: true
				} );
			}

			Modernizr.load( {
				load: ( protocol.indexOf( "http" ) === -1 ? "http:" : protocol ) + "//platform.twitter.com/widgets.js",
				complete: function() {

					// Identify that initialization has completed
					wb.ready( $( eventTarget ), componentName );
				}
			} );
		}
	},

	// Add skip links immediately before and after the timeline widget
	// Note: Verified account timelines may contain several hundred interactive elements... this provides a mechanism to spare keyboard-only users from needing to tab through everything to move past the widget.
	addSkipLinks = function( iframeContainer ) {
		const timelineIframe = iframeContainer.getElementsByTagName( "iframe" )[ 0 ];
		const username = getTwitterUsername( timelineIframe.src );
		const noticeClass = componentName + "-" + "notice";
		const skipClass = componentName + "-" + "skip";
		const startText = "start";
		const endText = "end";
		let startNotice;
		let endNotice;
		let skipToEndLink;
		let skipToStartLink;

		// Abort if Twitter username is falsy
		// Note: Unlikely to happen unless the username doesn't exist... in which case Twitter's third party widget script will have already failed and triggered an exception by this point
		if ( !username ) {
			return;
		}

		// Add a start of timeline notice
		startNotice = createNotice( i18nText.startNotice, username, timelineIframe.id, noticeClass, startText );
		iframeContainer.before( startNotice );

		// Add an end of timeline notice
		endNotice = createNotice( i18nText.endNotice, username, timelineIframe.id, noticeClass, endText );
		iframeContainer.after( endNotice );

		// Add a skip to end link
		skipToEndLink = createSkipLink( i18nText.skipEnd, username, endNotice.id, skipClass, endText );
		startNotice.after( skipToEndLink );

		// Add a skip to start link
		skipToStartLink = createSkipLink( i18nText.skipStart, username, startNotice.id, skipClass, startText );
		endNotice.before( skipToStartLink );
	},

	// Extract a Twitter username from the iframe's timeline URL
	getTwitterUsername = function( iframeSrc ) {
		let username = iframeSrc.match( /\/screen-name\/([^?]+)/ );
		username = username ? username[ 1 ] : null;

		return username;
	},

	// Create a timeline notice
	createNotice = function( textTemplate, username, iframeId, noticeClass, position ) {
		const spanElm = document.createElement( "span" );
		const pElm = document.createElement( "p" );

		spanElm.innerHTML = textTemplate.replace( "%username%", username );

		pElm.id = iframeId + "-" + position;
		pElm.className = noticeClass + "-" + position;
		pElm.prepend( spanElm );

		// Hide the notice upon losing focus
		// Removes its tabindex attribute to make its CSS hide it from screen readers
		pElm.addEventListener( "blur", function( e ) {
			e.target.removeAttribute( "tabindex" );
		} );

		return pElm;
	},

	// Create a skip link
	createSkipLink = function( textTemplate, username, linkDestId, skipClass, linkDir ) {
		const spanElm = document.createElement( "span" );
		const aElm = document.createElement( "a" );
		const pElm = document.createElement( "p" );

		spanElm.innerHTML = textTemplate.replace( "%username%", username );

		aElm.href = "#" + linkDestId;
		aElm.prepend( spanElm );

		// Focus onto the destination of a clicked link
		$( aElm ).on( "click", function( event ) {
			const currentTarget = event.currentTarget;
			const linkDestId = "#" + wb.jqEscape( currentTarget.getAttribute( "href" ).substring( 1 ) );
			const $linkDest = $document.find( linkDestId );

			// Assign focus to the link's destination
			// Note: The focus event's scrolling behaviour is more graceful than "jumping" to an anchor link's destination
			$linkDest.trigger( "setfocus.wb" );

			// Don't engage normal link navigation behaviour (i.e. "jumping" to the link destination, changing address/navigation history)
			return false;
		} );

		pElm.className = skipClass + " " + skipClass + "-" + linkDir;
		pElm.prepend( aElm );

		return pElm;
	};

$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Data Json [data-json-after], [data-json-append],
 * [data-json-before], [data-json-prepend], [data-json-replace], [data-json-replacewith] and [data-wb-json]
 * @overview Insert content extracted from JSON file.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
/*global jsonpointer */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-data-json",
	shortName = "wb-json",
	selectors = [
		"[data-json-after]",
		"[data-json-append]",
		"[data-json-before]",
		"[data-json-prepend]",
		"[data-json-replace]",
		"[data-json-replacewith]",
		"[data-" + shortName + "]"
	],
	allowJsonTypes = [ "after", "append", "before", "prepend", "val" ],
	allowAttrNames = /(href|src|data-*|aria-*|role|pattern|min|max|step|low|high|lang|hreflang|action)/,
	allowPropNames = /(checked|selected|disabled|required|readonly|multiple|hidden)/,
	selectorsLength = selectors.length,
	selector = selectors.join( "," ),
	initEvent = "wb-init." + componentName,
	updateEvent = "wb-update." + componentName,
	contentUpdatedEvent = "wb-contentupdated",
	dataQueue = componentName + "-queue",
	$document = wb.doc,
	isExtensionRegistered,
	s,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered this handler
	 * @param {string} ajaxType The type of JSON operation, either after, append, before or replace
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			jsSettings = window[ componentName ] || { },
			prop,
			$elm;

		if ( elm ) {

			var jsonCoreTypes = [
					"before",
					"replace",
					"replacewith",
					"after",
					"append",
					"prepend"
				],
				jsonType, jsondata,
				i, i_len = jsonCoreTypes.length, i_cache,
				lstCall = [],
				url;

			$elm = $( elm );

			for ( i = 0; i !== i_len; i += 1 ) {
				jsonType = jsonCoreTypes[ i ];
				url = elm.getAttribute( "data-json-" + jsonType );
				if ( url !== null ) {
					lstCall.push( {
						type: jsonType,
						url: url
					} );
				}
			}

			// Extend but not overwrite the functionTest and the functionForOperand if some was added
			if ( !isExtensionRegistered ) {
				if ( jsSettings.functionForTest ) {
					for ( prop in jsSettings.functionForTest ) {
						if ( !functionForTest[ prop ] ) {
							functionForTest[ prop ] = jsSettings.functionForTest[ prop ];
						}
					}
				}
				if ( jsSettings.functionForOperand ) {
					for ( prop in jsSettings.functionForOperand ) {
						if ( !functionForOperand[ prop ] ) {
							functionForOperand[ prop ] = jsSettings.functionForOperand[ prop ];
						}
					}
				}
				isExtensionRegistered = true;
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );

			jsondata = wb.getData( $elm, shortName );

			if ( jsondata && jsondata.url ) {
				lstCall.push( jsondata );
			} else if ( jsondata && $.isArray( jsondata ) ) {
				i_len = jsondata.length;
				for ( i = 0; i !== i_len; i += 1 ) {
					lstCall.push( jsondata[ i ] );
				}
			}

			// Save it to the dataJSON object.
			$elm.data( dataQueue, lstCall );

			i_len = lstCall.length;
			for ( i = 0; i !== i_len; i += 1 ) {
				i_cache = lstCall[ i ];
				loadJSON( elm, i_cache.url, i, i_cache.nocache, i_cache.nocachekey, i_cache.data, i_cache.contenttype, i_cache.method );
			}

		}
	},

	loadJSON = function( elm, url, refId, nocache, nocachekey, data, contentType, method ) {
		var $elm = $( elm ),
			fetchObj = {
				url: url,
				refId: refId,
				nocache: nocache,
				nocachekey: nocachekey,
				data: data,
				contentType: contentType,
				method: method
			};

		$elm.trigger( {
			type: "json-fetch.wb",
			fetch: fetchObj
		} );
	},


	// Manage JSON value After the json data has been fetched. This function can deal with array.
	jsonFetched = function( event ) {

		var elm = event.target,
			$elm = $( elm ),
			lstCall = $elm.data( dataQueue ),
			fetchObj = event.fetch,
			itmSettings = lstCall[ fetchObj.refId ],
			jsonType = itmSettings.type,
			attrname = itmSettings.prop || itmSettings.attr,
			showEmpty = itmSettings.showempty,
			content = fetchObj.response,
			typeOfContent = typeof content,
			jQueryCaching;

		if ( showEmpty || typeOfContent !== "undefined" ) {

			if ( showEmpty && typeOfContent === "undefined" ) {
				content = "";
			}

			//Prevents the force caching of nested resources
			jQueryCaching = jQuery.ajaxSettings.cache;
			jQuery.ajaxSettings.cache = true;

			// "replace" and "replaceWith" doesn't map to a jQuery function
			if ( !jsonType ) {
				jsonType = "template";
				applyTemplate( elm, itmSettings, content );

				// Trigger wet
				if ( itmSettings.trigger && !wb.isDisabled ) {
					$elm
						.find( wb.allSelectors )
						.addClass( "wb-init" )
						.filter( ":not(#" + elm.id + " .wb-init .wb-init)" )
						.trigger( "timerpoke.wb" );
				}
			} else if ( jsonType === "replace" ) {
				$elm.html( content );
			} else if ( jsonType === "replacewith" ) {
				$elm.replaceWith( content );
			} else if ( jsonType === "addclass" ) {
				$elm.addClass( content );
			} else if ( jsonType === "removeclass" ) {
				$elm.removeClass( content );
			} else if ( jsonType === "prop" && attrname && allowPropNames.test( attrname ) ) {
				$elm.prop( attrname, content );
			} else if ( jsonType === "attr" && attrname && allowAttrNames.test( attrname ) ) {
				$elm.attr( attrname, content );
			} else if ( typeof $elm[ jsonType ] === "function" && allowJsonTypes.indexOf( jsonType ) !== -1 ) {
				$elm[ jsonType ]( content );
			} else {
				throw componentName + " do not support type: " + jsonType;
			}

			//Resets the initial jQuery caching setting
			jQuery.ajaxSettings.cache = jQueryCaching;

			$elm.trigger( contentUpdatedEvent, { "json-type": jsonType, "content": content } );
		}
	},

	// Apply the template as per the configuration
	applyTemplate = function( elm, settings, content ) {

		var elmClass = elm.className,
			dataTable,
			dataTableAddRow,
			template = settings.source ? document.querySelector( settings.source ) : elm.querySelector( "template" );

		// If combined with wb-tables plugin
		if ( elm.tagName === "TABLE" && elmClass.indexOf( "wb-tables" ) !== -1 ) {

			//  Wait for its initialization before to applyTemplate
			if ( elmClass.indexOf( "wb-tables-inited" ) === -1 ) {
				$( elm ).one( "wb-ready.wb-tables,init.dt", function( ) {
					applyTemplate( elm, settings, content );
				} );
				return;
			}

			// Edge case, when both plugin are ready at the same time, just wait for the next tick
			if ( !$.fn.dataTable.isDataTable( elm ) && elmClass.indexOf( componentName + "-dtwait" ) === -1 ) {
				elm.classList.add( componentName + "-dtwait" );
				setTimeout( function( ) {
					applyTemplate( elm, settings, content );
				}, 50 );
				return;
			}

			dataTable = $( elm ).dataTable( { "retrieve": true } ).api();
			dataTableAddRow = dataTable.row.add;
			settings.tobeclone = "tr"; // Only table row can be added
		}

		if ( !template ) {
			return;
		}

		// Needed when executing sub-template that wasn't polyfill, like in IE11
		if ( !template.content ) {
			wb.tmplPolyfill( template );
		}

		if ( !settings.streamline ) {
			dataIterator( elm, content, settings );
		} else {
			processMapping( elm, elm, content, settings );
		}

		// Refresh the dataTable display
		if ( dataTableAddRow ) {
			dataTable.draw();
		}
	},

	// Iterate over the dataset
	dataIterator = function( elm, content, mappingConfig, useClone ) {

		var i, i_len, i_cache,
			elmAppendTo = elm,
			clone, template,
			dataTable, dataTableAddRow;

		if ( mappingConfig.appendto ) {
			elmAppendTo = $( mappingConfig.appendto ).get( 0 );
		}

		// Connection with data table plugin
		if ( elm.tagName === "TABLE" && elm.className.indexOf( "wb-tables" ) !== -1 ) {
			dataTable = $( elm ).dataTable( { "retrieve": true } ).api();
			dataTableAddRow = dataTable.row.add;
			mappingConfig.tobeclone = "tr";
		}


		// if content is object, transform into array @id and @value
		if ( !$.isArray( content ) ) {
			if ( typeof content !== "object" ) {
				content = [ content ];
			} else {
				content = $.map( content, function( val, index ) {
					if ( val && typeof val === "object" && !$.isArray( val ) ) {
						if ( !val[ "@id" ] ) {
							val[ "@id" ] = index;
						}
					} else {
						val = {
							"@id": index,
							"@value": val
						};
					}
					return [ val ];
				} );
			}
		}
		i_len = content.length;

		// Get the template to be iterated.
		if ( !useClone && mappingConfig.source ) {
			template = document.querySelector( mappingConfig.source );
		} else if ( !useClone && mappingConfig.template ) {
			template = elm.querySelector( mappingConfig.template );
		} else if ( !useClone ) {
			template = elm.querySelectorAll( ":scope > template" );
			if ( template.length === 1 || template[ 0 ].attributes.length === 0 ) {

				// Only when there is one choice or take the first one only if only there is no attribute set on the element
				template = template[ 0 ];
			} else {

				// let the mapping instructions to define which template to use
				template = false;
			}
		}

		// Iterate the data array
		for ( i = 0; i < i_len; i += 1 ) {
			i_cache = content[ i ];


			// If the data are filtered. This is deprecated and are only for backward compatible purpose
			if ( !filterPassJSON( i_cache, mappingConfig.filter, mappingConfig.filternot ) ) {
				continue;
			}

			// Get the template (if applicable)
			if ( !clone && useClone ) {
				clone = useClone;
			}

			// Create a clone if one unique template is found
			if ( !useClone && template && !mappingConfig.tobeclone ) {
				clone = template.content.cloneNode( true );
			} else if ( !useClone && template ) {
				clone = template.content.querySelector( mappingConfig.tobeclone ).cloneNode( true );
			}

			// process the mapping, return value is the new clone object if applicable
			var tmpClone;
			tmpClone = processMapping( elm, clone, i_cache, mappingConfig );

			// Remove the template flag, to ensure we do reuse it for the subsequent iteration
			if ( tmpClone ) {
				delete mappingConfig.template;
				clone = tmpClone;
			}

			// Add the clone object
			if ( dataTableAddRow ) {
				dataTableAddRow( $( clone ) ); // If wb-tables, use its API to add rows
			} else if ( !useClone && template ) {
				elmAppendTo.appendChild( clone );
			}
		}

		// Refresh the dataTable display (if applicable)
		if ( dataTableAddRow ) {
			dataTable.draw();
		}

	},

	// Check if the mapping are met or not
	canProcessMapping = function( content, mappingConfig ) {

		var rawValue, value,
			testableData,
			operand = mappingConfig.operand || "softEq",
			operandOutcome;

		if ( !mappingConfig.test ) {
			return;
		}

		// Get the value to be tested
		try {
			rawValue = getRawValue( content, mappingConfig.assess || mappingConfig.value );
			value = getValue( rawValue );
		} catch ( ex ) {

			// If this is an error, the path probably don't exist
			rawValue = undefined;
			value = undefined;
		}

		// Get the function to use
		if ( !functionForTest[ mappingConfig.test ] ) {
			console.error( "The test function '" + mappingConfig.test + "' don't exist. Default to false test result" );
			console.error( mappingConfig );
			return false;
		}
		testableData = functionForTest[ mappingConfig.test ].call( mappingConfig, value, rawValue );

		// Run the operand
		if ( !functionForOperand[ operand ] ) {
			console.error( "The operand '" + operand + "' don't exist" );
			console.error( mappingConfig );
			operand = "softEq";
		}
		operandOutcome = functionForOperand[ operand ].call( mappingConfig, testableData, mappingConfig.expect );

		// If not true, go next
		if ( !operandOutcome ) {
			return false;
		}

		// Run mapping if satisfied
		return true;
	},

	// Special mapping typed function
	functionForTypedMapping = {

		"rdf:Alt": function( elm, clone, content, mappingConfig ) {

			var mapping = mappingConfig.mapping,
				i, i_cache,
				i_len = mapping.length,
				value = content;

			for ( i = 0; i < i_len || i === 0; i += 1 ) {
				i_cache = mapping[ i ];

				if ( canProcessMapping( content, i_cache ) ) {

					// Clone the object to avoid conflict when it is reused for other data
					i_cache = $.extend( true, {}, i_cache );

					// Remove the test, because it was checked
					delete i_cache.test;

					// Navigate the content if specified
					if ( i_cache.value ) {
						value = getValue( content, i_cache.value );
					}

					// Process the mapping
					processMapping( elm, clone, value, i_cache );

					// End
					return;
				}
			}
		}
	},

	// Function called for testing the mapping condition, which can be extend via the js configuration
	functionForTest = {

		"fn:isArray": function( value ) {
			return $.isArray( value );
		},

		"fn:isLiteral": function( value ) {

			// Check if the value are set under the JSON-LD parameter @value
			if ( value && value[ "@value" ] ) {
				value = value[ "@value" ];
			}

			if ( value && typeof value !== "object" ) {
				return true;
			}

			return false;
		},

		"fn:getType": function( value, rawValue ) {

			var tp = value[ "@type" ] || rawValue[ "@type" ];

			if ( tp === "@json" ) {
				return "rdf:JSON";
			} else if ( $.isArray( tp ) && tp.indexOf( "@json" ) !== -1 ) {
				tp[ tp.indexOf( "@json" ) ] = "rdf:JSON";
			}

			if ( tp ) {
				return tp;
			} else {
				return typeof value;
			}
		},

		"fn:getValue": function( value ) {

			return value;

		},

		"fn:guessType": function( value, rawValue ) {

			var guessType;

			if ( !value ) {
				guessType = "undefined";
			} else if ( value[ "@type" ] ) {
				guessType = value[ "@type" ];
			} else if ( rawValue[ "@type" ] ) {
				guessType = rawValue[ "@type" ];
			} else if ( value[ "@value" ] ) {

				// Only if we are in JSON ld mode
				// Check if the value are set under the JSON-LD parameter @value
				value = value[ "@value" ];
			}

			// Edge case to convert the @json data type into its RDF form
			if ( guessType && guessType !== "undefined" ) {
				if ( guessType === "@json" ) {
					guessType = "rdf:JSON";
				} else if ( $.isArray( guessType ) && guessType.indexOf( "@json" ) !== -1 ) {
					guessType[ guessType.indexOf( "@json" ) ] = "rdf:JSON";
				}
			}

			if ( !guessType ) {
				if ( typeof value === "string" && value.match( /^([a-z][a-z0-9+\-.]*):/i ) ) {
					guessType = [ "xsd:anyURI", "rdfs:Literal" ];
				} else if ( typeof value === "string" ) {
					guessType = [ "xsd:string", "rdfs:Literal" ];
				} else if ( typeof value === "boolean" ) {
					guessType = [ "xsd:boolean", "rdfs:Literal" ];
				} else if ( typeof value === "number" ) {
					guessType = [ "xsd:double", "rdfs:Literal" ];
				} else if ( typeof value === "undefined" ) {
					guessType = "undefined";
				} else if ( $.isArray( value ) ) {
					guessType = "rdfs:Container";
				} else {

					// The type is a generic Object
					guessType = "rdfs:Resource";
				}
			}

			return guessType;
		}

	},

	// Operand used to evaluate the testable output from functionForTest to determine if the mapping condition is met or not, which can be extend via the js configuration
	functionForOperand = {

		"softEq": function( value, expect ) {
			var i, i_len;

			if ( $.isArray( value ) && !$.isArray( expect ) && value.indexOf( expect ) !== -1 ) {
				return true;
			} else if ( $.isArray( value ) &&  $.isArray( expect ) ) {
				i_len = expect.length;
				for ( i = 0; i !== i_len; i++ ) {
					if ( value.indexOf( expect[ i ] ) ) {
						return true;
					}
				}
			} else if ( expect && value === expect ) {
				return true;
			} else if ( !expect && value ) {
				return true;
			}

			return false;

		},

		"eq": function( value, expect ) {

			if ( _equalsJSON( value, expect ) ) {
				return true;
			}

			return false;
		},

		"neq": function( value, expect ) {
			if ( !_equalsJSON( value, expect ) ) {
				return true;
			}

			return false;
		},

		"in": function( value, expect ) {

			var i;

			if ( !expect ) {
				console.error( "Expected value is missing. Defaulting to false." );
				console.error( this );
				return false;
			}

			if ( $.isArray( value ) && !$.isArray( expect ) && value.indexOf( expect ) !== -1 ) {
				return true;
			} else if ( $.isArray( value ) &&  $.isArray( expect ) ) {
				for ( i = 0; i !== expect.length; i++ ) {
					if ( value.indexOf( expect[ i ] ) ) {
						return true;
					}
				}
			} else if ( !$.isArray( value ) &&  $.isArray( expect ) && expect.indexOf( value ) !== -1  ) {
				return true;
			} else if ( value === expect ) {
				return true;
			}

			return false;
		},

		"nin": function( value, expect ) {
			return !functionForOperand.in.call( this, value, expect );
		}
	},

	// Mapping the data into a template or into a node
	processMapping = function( elm, clone, content, mappingConfig ) {

		var j, j_cache,
			cached_node, cached_value,
			cached_value_is_HTML, cached_value_is_JSON, cached_value_is_IRI,
			queryAll = mappingConfig.queryall,
			selElements,
			mapping = mappingConfig.mapping,
			mapping_len,
			upstreamClone, template;


		// Is this mapping a special mapping type?
		if ( mappingConfig[ "@type" ] ) {
			functionForTypedMapping[ mappingConfig[ "@type" ] ].call( content, elm, clone, content, mappingConfig );
			return;
		}

		// Can we proceed?
		if ( mappingConfig.test && !canProcessMapping( content, mappingConfig ) ) {
			return;
		}

		// Check if there is some mapping configuration
		if ( !mapping && !queryAll && !mappingConfig.template && typeof mapping !== "object" ) {
			return;
		}

		// Clone mappingConfig to ensure it don't interfere with subsequent data iteration
		mappingConfig = $.extend( true, {}, mappingConfig );

		// If there is no clone, let use the element (parent)
		clone = clone || elm;

		// If there is a "template" property, get the inner template
		if ( mappingConfig.template ) {
			template = clone.querySelector( mappingConfig.template );

			upstreamClone = clone; // Keep reference of the top clone

			clone = template.content.cloneNode( true );

			// Ensure we don't recreated it if during a subsequent iteration
			delete mappingConfig.template;
		}


		// Is content an array? then iterate the content
		if ( $.isArray( content ) ) {


			dataIterator( clone, content, mappingConfig, clone );

			// Case of where a template is associated with this mapping action
			if ( template ) {
				if ( template.parentNode ) {

					if ( !mappingConfig.append ) {
						template.parentNode.insertBefore( clone, template );
					} else {
						template.parentNode.appendChild( clone );
					}
				} else {
					upstreamClone.appendChild( clone );
				}

				return elm;

			}
			return;
		}

		// Prepare the mapping object to be iterated
		if ( !mapping ) {
			mapping = [ {} ];
		}
		if ( !$.isArray( mapping ) ) {
			mapping = [ mapping ];
		}
		mapping_len = mapping.length;

		// Ensure the mapping is an array of Mapping Object
		for ( j = 0; j < mapping_len || j === 0; j += 1 ) {
			if ( typeof mapping[ j ] === "string" ) {
				mapping[ j ] = {
					value: mapping[ j ]
				};
			}
		}

		if ( queryAll ) {
			selElements = clone.querySelectorAll( queryAll );

			// Replicate this setting the in the mapping
			for ( j = 0; j < selElements.length || j === 0; j += 1 ) {
				if ( !mapping[ j ].selector && queryAll.indexOf( "nth-child" ) === -1 ) {
					mapping[ j ].selector = queryAll + ":nth-child(" + ( j + 1 ) + ")";
				} else if ( !mapping[ j ].selector ) {
					mapping[ j ].selector = queryAll;
				}
			}
		}


		//
		// Process the mapping
		//
		for ( j = 0; j < mapping_len || j === 0; j += 1 ) {
			j_cache = mapping[ j ];

			// Reset the cache value special type flag
			cached_value_is_IRI = false;
			cached_value_is_HTML = false;
			cached_value_is_JSON = false;

			// Get the element to be updated
			if ( j_cache.selector ) {
				cached_node = clone.querySelector( j_cache.selector );
			} else {
				cached_node = clone;
			}

			// Get the value to be set
			try {
				cached_value = getRawValue( content, j_cache );
			} catch ( ex ) {

				// The path don't exist, let continue to the next mapping item
				console.info( "JSON selector path for mapping don't exist in content" );
				console.info( j_cache );
				console.info( content );
				continue;
			}

			// Go to the next mapping if the value of JSON node don't exist to ensure we keep the default text set in the template, but move ahead if empty or null
			if ( typeof cached_value === "undefined" ) {
				continue;
			}

			// Do the cache value contain special @type
			if ( cached_value && cached_value[ "@value" ] && cached_value[ "@type" ] ) {
				if ( !$.isArray( cached_value[ "@type" ] ) ) {
					cached_value[ "@type" ] = [ cached_value[ "@type" ] ];
				}
				cached_value_is_IRI = cached_value[ "@type" ].indexOf( "@id" ) !== -1;
				cached_value_is_HTML = cached_value[ "@type" ].indexOf( "rdf:HTML" ) !== -1;
				cached_value_is_JSON = cached_value[ "@type" ].indexOf( "rdf:JSON" ) !== -1 || cached_value[ "@type" ].indexOf( "@json" ) !== -1;
			}

			// Action the value
			if ( $.isArray( cached_value ) && ( j_cache.mapping || j_cache.queryall ) ) {

				// Deep dive into the content if a mapping exist
				dataIterator( cached_node, cached_value, j_cache );

			} else if ( j_cache.mapping || j_cache.queryall || !j_cache.mapping && typeof j_cache.mapping === "object" ) {
				try {

					// Map the inner mapping
					processMapping( template || elm, cached_node, cached_value, j_cache );
				} catch ( ex ) {

					if ( ex === "cached_node: null" && typeof cached_value === "object" ) {

						// If it fail, let iterate the cached_value object
						dataIterator( cached_node, cached_value, j_cache );
					} else {
						throw ex;
					}
				}
			} else if ( cached_value_is_IRI && cached_value_is_HTML ) {

				// The import file type are expected to be HTML
				// Add the data-ajax instruction so the content would be added once the JSON mapping is completed and added on the page.
				cached_node.dataset.wbAjax = JSON.stringify( {
					url: cached_value[ "@value" ],
					type: "replace",
					dataType: cached_value_is_JSON ? "json" : null,
					encode: j_cache.encode
				} );
			} else if ( cached_value_is_HTML && cached_value_is_JSON && !cached_value_is_IRI ) {

				// Get content from the "@value" property which contain JSON value and use it as a string value
				cached_value = JSON.stringify( cached_value[ "@value" ] );

				// Map the value in the element
				mapValue( cached_node, cached_value, j_cache );

			} else if ( !cached_node && typeof cached_value === "object" ) {
				throw "cached_node: null";
			} else if ( mappingConfig.mapping !== null ) {

				cached_value = getValue( cached_value );

				// Serialize the value if it is an JS object and its not a null object
				if ( typeof cached_value === "object" &&  cached_value !== null ) {
					cached_value = JSON.stringify( cached_value );
				}

				// Map the value in the element
				mapValue( cached_node, cached_value, j_cache );
			}

		}

		// Add the template, if applicable
		if ( template ) {
			if ( template.parentNode ) {

				if ( !mappingConfig.append ) {
					template.parentNode.insertBefore( clone, template );
				} else {
					template.parentNode.appendChild( clone );
				}
			} else {
				upstreamClone.appendChild( clone );
			}

			return elm;
		}

	},

	// Extract the value of an JS object
	getValue = function( source, pointer ) {

		var value = getRawValue( source, pointer );

		// for JSON-LD @value support
		if ( typeof value === "object" && value !== null && Object.prototype.hasOwnProperty.call( value, "@value" ) ) {
			value = value[ "@value" ];
		}

		return value;
	},

	// Extract the value without considering it possible JSON-LD value
	getRawValue = function( source, pointer ) {

		var value;
		pointer = pointer || false; // Ensure pointer is defined

		// Get the value if source is string or pointer is pointing to root
		if ( typeof source === "string" || pointer === "/" || pointer === "/@value" || pointer.value === "/" || pointer.value === "/@value" ) {
			value = source;
		} else if ( typeof pointer === "string" ) {
			value = jsonpointer.get( source, pointer );
		} else if ( pointer.value ) {
			value = jsonpointer.get( source, pointer.value );
		} else {
			value = source;
		}

		return value;
	},

	// Map a value into an HTML element or attribute
	mapValue = function( element, value, mappingConfig ) {

		var attributeName, placeholderText;

		attributeName = mappingConfig.attr;
		if ( attributeName ) {
			if ( !element.hasAttribute( attributeName ) ) {
				element.setAttribute( attributeName, "" );
			}
			element = element.getAttributeNode( attributeName );
		}

		// Placeholder text replacement if any
		if ( mappingConfig.placeholder ) {
			placeholderText = element.textContent || "";
			value = placeholderText.replace( mappingConfig.placeholder, value );
		}

		// Exclude null values and replace with default text
		if ( value !== null ) {
			if ( mappingConfig.isHTML ) {
				element.innerHTML = value;
			} else {
				element.textContent = value;
			}
		}
	},


	// Filtering a JSON
	// Return true if trueness && falseness
	// Return false if !( trueness && falseness )
	// trueness and falseness is an array of { "path": "", "value": "" } object
	filterPassJSON = function( obj, trueness, falseness ) {
		var i, i_cache,
			trueness_len = trueness ? trueness.length : 0,
			falseness_len = falseness ? falseness.length : 0,
			compareResult = false,
			isEqual;

		if ( trueness_len || falseness_len ) {

			for ( i = 0; i < trueness_len; i += 1 ) {
				i_cache = trueness[ i ];
				isEqual = _equalsJSON( jsonpointer.get( obj, i_cache.path ), i_cache.value );

				if ( i_cache.optional ) {
					compareResult = compareResult || isEqual;
				} else if ( !isEqual ) {
					return false;
				} else {
					compareResult = true;
				}
			}
			if ( trueness_len && !compareResult ) {
				return false;
			}

			for ( i = 0; i < falseness_len; i += 1 ) {
				i_cache = falseness[ i ];
				isEqual = _equalsJSON( jsonpointer.get( obj, i_cache.path ), i_cache.value );

				if ( isEqual && !i_cache.optional || isEqual && i_cache.optional ) {
					return false;
				}
			}

		}
		return true;
	},

	//
	_equalsJSON = function( a, b ) {
		switch ( typeof a ) {
		case "undefined":
			return false;
		case "boolean":
		case "string":
		case "number":
			return a === b;
		case "object":
			if ( a === null ) {
				return b === null;
			}
			var i, l;
			if ( $.isArray( a ) ) {
				if (  !$.isArray( b ) || a.length !== b.length ) {
					return false;
				}
				for ( i = 0, l = a.length; i < l; i++ ) {
					if ( !_equalsJSON( a[ i ], b[ i ] ) ) {
						return false;
					}
				}
				return true;
			}
			var bKeys = _objectKeys( b ),
				bLength = bKeys.length;
			if ( _objectKeys( a ).length !== bLength ) {
				return false;
			}
			for ( i in a ) {
				if ( !_equalsJSON( a[ i ], b[ i ] ) ) {
					return false;
				}
			}
			return true;
		default:
			return false;
		}
	},
	_objectKeys = function( obj ) {
		var keys;
		if ( $.isArray( obj ) ) {
			keys = new Array( obj.length );
			for ( var k = 0; k < keys.length; k++ ) {
				keys[ k ] = "" + k;
			}
			return keys;
		}
		if ( Object.keys ) {
			return Object.keys( obj );
		}
		keys = [];
		for ( var i in obj ) {
			if ( Object.prototype.hasOwnProperty.call( obj, i ) ) {
				keys.push( i );
			}
		}
		return keys;
	},

	// Manage JSON value After the json data has been fetched
	jsonUpdate = function( event ) {
		var elm = event.target,
			$elm = $( elm ),
			lstCall = $elm.data( dataQueue ),
			refId = lstCall.length,
			wbJsonConfig = event[ "wb-json" ];

		if ( !( wbJsonConfig.url && ( wbJsonConfig.type || wbJsonConfig.source ) ) ) {
			throw "Data JSON update not configured properly";
		}

		lstCall.push( wbJsonConfig );
		$elm.data( dataQueue, lstCall );

		loadJSON( elm, wbJsonConfig.url, refId );
	};

$document.on( "json-failed.wb", selector, function( event ) {

	var elm = event.currentTarget,
		$elm = $( elm ),
		lstCall = $elm.data( dataQueue ),
		fetchObj = event.fetch,
		xhrResponse = fetchObj.xhr,
		itmSettings = lstCall[ fetchObj.refId ],
		failSettings = itmSettings.fail;

	if ( failSettings ) {

		// Mapping is always streamline because the data structure is a static object not an array
		failSettings.streamline = true;

		// apply the templaty to display an error message
		applyTemplate( elm, failSettings, {
			error: fetchObj.error.message || xhrResponse.statusText,
			status: fetchObj.status,
			url: fetchObj.fetchOpts.url,
			response: {
				text: xhrResponse.responseText || "",
				status: xhrResponse.status,
				statusText: xhrResponse.statusText
			}
		} );
	}

	console.info( event.currentTarget );
	console.error( "Error or bad JSON Fetched from url in " + componentName );
} );

// Load template polyfill
Modernizr.load( {
	test: ( "content" in document.createElement( "template" ) ),
	nope: "site!deps/template" + wb.getMode() + ".js"
} );

$document.on( "timerpoke.wb " + initEvent + " " + updateEvent + " json-fetched.wb", selector, function( event ) {

	if ( event.currentTarget === event.target ) {
		switch ( event.type ) {

		case "timerpoke":
		case "wb-init":
			init( event );
			break;
		case "wb-update":
			jsonUpdate( event );
			break;
		default:
			jsonFetched( event );
			break;
		}
	}

	return true;
} );

// Add the timerpoke to initialize the plugin
for ( s = 0; s !== selectorsLength; s += 1 ) {
	wb.add( selectors[ s ] );
}

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Disable Event
 * @overview Event creates the active offer for users that have disabled the event.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @gc
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the event - meaning that they will be initialized once per page,
 * not once per instance of event on the page.
 */
var componentName = "wb-disable",
	selector = "#wb-tphp",
	$document = wb.doc,
	allowOnDisableClass = "wb-disable-allow",
	allowedPlugins = [
		{
			selectors: "[data-wb-jsonmanager]",
			initEvent: "wb-jsonmanager"
		},
		{
			selectors: "[data-wb-postback]",
			initEvent: "wb-postback"
		},
		{
			selectors: [
				"[data-ajax-after]",
				"[data-ajax-append]",
				"[data-ajax-before]",
				"[data-ajax-prepend]",
				"[data-ajax-replace]",
				"[data-wb-ajax]"
			],
			initEvent: "wb-data-ajax"
		},
		{
			selectors: [
				"[data-json-after]",
				"[data-json-append]",
				"[data-json-before]",
				"[data-json-prepend]",
				"[data-json-replace]",
				"[data-json-replacewith]",
				"[data-wb-json]"
			],
			initEvent: "wb-data-json"
		}
	],

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector, true ),
			nQuery = "?",
			$html = wb.html,
			i18n = wb.i18n,
			pageUrl = wb.pageUrlParts,
			param,
			noticeHeader = i18n( "disable-notice-h" ),
			noticeBody = i18n( "disable-notice" ),
			noticehtml = "<section",
			noticehtmlend = "</a>.</p></section>",
			canonicalUrl,
			canonicalLink;

		if ( elm ) {

			// Rebuild the query string
			for ( param in pageUrl.params ) {
				if ( param && Object.prototype.hasOwnProperty.call( pageUrl.params, param ) && param !== "wbdisable" ) {
					nQuery += param + "=" + pageUrl.params[ param ] + "&";
				}
			}

			try {
				if ( wb.isDisabled || wb.ie ) {
					$html.addClass( "wb-disable" );

					try {

						// Store preference for WET plugins and polyfills to be disabled in localStorage
						localStorage.setItem( "wbdisable", "true" );
					} catch ( e ) {

						/* swallow error */
					}

					// Trigger initialization of plugins that are needed in basic mode
					runAllowedPlugins();

					// Add canonical link if not already present
					if ( !document.querySelector( "link[rel=canonical]" ) ) {

						// Remove wbdisable from URL
						canonicalUrl = window.location.href.replace( /&?wbdisable=true/gi, "" ).replace( "?&", "?" ).replace( "?#", "#" );

						if ( canonicalUrl.indexOf( "?" ) === ( canonicalUrl.length - 1 ) ) {
							canonicalUrl = canonicalUrl.replace( "?", "" );
						}

						canonicalLink = document.createElement( "link" );
						canonicalLink.rel = "canonical";
						canonicalLink.href = canonicalUrl;

						document.head.appendChild( canonicalLink );
					}

					// Add notice and link to re-enable WET plugins and polyfills
					let significantLinkId = wb.getId();
					noticehtml = noticehtml + " class='container-fluid bg-warning text-center mrgn-tp-sm py-4'><h2 class='mrgn-tp-0'>" + noticeHeader + "</h2><p>" + noticeBody + "</p><p><a id='" + significantLinkId + "' rel='alternate' href='" + nQuery + "wbdisable=false'>" + i18n( "wb-enable" ) + noticehtmlend;
					$( elm ).after( noticehtml );
					document.querySelector( "#" + significantLinkId ).setAttribute( "property", "significantLink" );
					return true;
				} else {
					$html.addClass( "wb-enable" );

					if ( localStorage ) {

						// Store preference for WET plugins and polyfills to be enabled in localStorage
						localStorage.setItem( "wbdisable", "false" );
					}

					// Remove variable from URL
					var lc = window.location.href.replace( /&?wbdisable=false/gi, "" ).replace( "?&", "?" ).replace( "?#", "#" );
					if ( lc.indexOf( "?" ) === ( lc.length - 1 ) ) {
						lc = lc.replace( "?", "" );
					}
					window.history.replaceState( "", "", lc );
				}
			} catch ( error ) {

				/* swallow error */
			}

			// Append the Basic HTML version link version
			// Add link to disable WET plugins and polyfills
			wb.addSkipLink( i18n( "wb-disable" ), {
				href: nQuery + "wbdisable=true",
				rel: "alternate"
			}, false, true );

			// Identify that initialization has completed
			wb.ready( $document, componentName );
		}
	},

	// Trigger initialization of plugins that are needed in basic mode
	// TODO: Remove once basic initialization is implemented at the core level
	runAllowedPlugins = function() {
		allowedPlugins.forEach( allowedPlugin => {
			if ( typeof( allowedPlugin.selectors ) === "object" ) {
				allowedPlugin.selectors = allowedPlugin.selectors.join( "." + allowOnDisableClass + "," );
			}

			allowedPlugin.selectors = allowedPlugin.selectors + "." + allowOnDisableClass;

			$( allowedPlugin.selectors ).trigger( "wb-init." + allowedPlugin.initEvent );
		} );
	};

// Bind the events
$document.on( "timerpoke.wb", selector, init );

// Go through allowed plugins once again when content has been added dynamically
$document.on( "wb-contentupdated", function() {
	runAllowedPlugins();
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Focus
 * @overview User agent safe way of assigning focus to an element
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, wb ) {
"use strict";

var $document = wb.doc,
	$window = wb.win,
	clickEvents = "click",
	setFocusEvent = "setfocus.wb",
	linkSelector = "a[href]",
	$linkTarget,

	/**
	 * @method processHash
	 */
	processHash = function() {
		var hash = wb.pageUrlParts.hash;

		if ( hash && ( $linkTarget = $( "#" + wb.jqEscape( hash.substring( 1 ) ) ) ).length !== 0 ) {
			$linkTarget.trigger( setFocusEvent );
		}
	};

// Bind the setfocus event
$document.on( setFocusEvent, function( event ) {
	if ( event.namespace === "wb" ) {
		var $elm = $( event.target ),
			$closedParents = $elm.not( "summary" ).parents( "details, [role='tabpanel']" ),
			$closedPanels, $closedPanel, len, i;

		if ( $closedParents.length !== 0 ) {

			// Open any closed ancestor details elements
			$closedParents.not( "[open]" ).children( "summary" ).trigger( "click" );

			// Open any closed tabpanels
			$closedPanels = $closedParents.filter( "[aria-hidden='true']" );
			len = $closedPanels.length;
			for ( i = 0; i !== len; i += 1 ) {
				$closedPanel = $closedPanels.eq( i );
				$closedPanel.closest( ".wb-tabs" )
					.find( "#" + $closedPanel.attr( "aria-labelledby" ) )
					.trigger( "click" );
			}
		}

		// Set the tabindex to -1 (as needed) to ensure the element is focusable
		$elm
			.filter( ":not([tabindex], a[href], button, input, textarea, select)" )
			.attr( "tabindex", "-1" );

		// Assigns focus to an element (delay allows for revealing of hidden content)
		setTimeout( function() {
			$elm.trigger( "focus" );

			var $topBar = $( ".wb-bar-t[aria-hidden=false]" );

			// Ensure the top bar overlay does not conceal the focus target
			if ( $topBar.length !== 0 ) {
				document.documentElement.scrollTop -= $topBar.outerHeight();
			}

			return $elm;
		}, 100 );
	}
} );

// Set focus to the target of a deep link from a different page
// (helps browsers that can't set the focus on their own)
$document.on( "wb-ready.wb", processHash );

// Handle any changes to the URL hash after the page has loaded
$window.on( "hashchange", function() {
	wb.pageUrlParts.hash = window.location.hash;
	if ( !wb.ignoreHashChange ) {
		processHash();
	}
} );

// Helper for browsers that can't change keyboard and/or event focus on a same page link click
$document.on( clickEvents, linkSelector, function( event ) {
	var testHref = event.currentTarget.getAttribute( "href" );

	// Same page links only
	if ( testHref.length > 1 && testHref.charAt( 0 ) === "#" && !event.isDefaultPrevented() &&
		( $linkTarget = $( "#" + wb.jqEscape( testHref.substring( 1 ) ) ) ).length !== 0 ) {
		wb.ignoreHashChange = true;
		$linkTarget.trigger( setFocusEvent );
	}
} );

} )( jQuery, wb );

/**
 * @title WET-BOEW JSON Manager
 * @overview Manage JSON dataset, execute JSON patch operation.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
/*global jsonpointer, jsonpatch */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-jsonmanager",
	selector = "[data-" + componentName + "]",
	initEvent = "wb-init." + componentName,
	postponeEvent = "postpone." + componentName,
	patchesEvent = "patches." + componentName,
	jsonFailedClass = "jsonfail",
	reloadFlag = "data-" + componentName + "-reload",
	dsNameRegistered = [],
	datasetCache = {},
	datasetCacheSettings = {},
	dsDelayed = {},
	dsPostponePatches = {},
	dsFetching = {},
	dsFetchIsArray = {},
	dsFetchMerged = {},
	$document = wb.doc,
	defaults = {
		ops: [
			{
				name: "patches",
				fn: function( obj, key, tree ) {
					var path = this.path,
						patches = this.patches,
						newTree = jsonpointer.get( tree, path );

					patches.forEach( ( patchConf ) => {
						patchConf.mainTree = tree;
						patchConf.pathParent = path;
						jsonpatch.apply( newTree, [ patchConf ] );
					} );
				}
			},
			{
				name: "wb-count",
				fn: function( obj, key, tree ) {
					var countme = obj[ key ],
						len = 0, i_len, i,
						filter = this.filter || [ ],
						filternot = this.filternot || [ ];

					if ( !Array.isArray( filter ) ) {
						filter = [ filter ];
					}
					if ( !Array.isArray( filternot ) ) {
						filternot = [ filternot ];
					}

					if ( ( filter.length || filternot.length ) && Array.isArray( countme ) ) {

						// Iterate in obj[key] / item and check if is true for the given path is any.
						i_len = countme.length;

						for ( i = 0; i !== i_len; i = i + 1 ) {
							if ( filterPassJSON( countme[ i ], filter, filternot ) ) {
								len = len + 1;
							}
						}
					} else if ( Array.isArray( countme ) ) {
						len = countme.length;
					}
					applyPatch( tree, "add", this.set, len );
				}
			},
			{
				name: "wb-first",
				fn: function( obj, key, tree ) {
					var currObj = obj[ key ];
					if ( !Array.isArray( currObj ) || currObj.length === 0 ) {
						return;
					}

					applyPatch( tree, "add", this.set, currObj[ 0 ] );
				}
			},
			{
				name: "wb-last",
				fn: function( obj, key, tree ) {
					var currObj = obj[ key ];
					if ( !Array.isArray( currObj ) || currObj.length === 0 ) {
						return;
					}

					applyPatch( tree, "add", this.set, currObj[ currObj.length - 1 ] );
				}
			},
			{
				name: "wb-nbtolocal",
				fn: function( obj, key, tree ) {
					var val = obj[ key ],
						loc = this.locale || window.wb.lang,
						suffix = this.suffix || "",
						prefix = this.prefix || "";

					if ( typeof val === "string" ) {
						val = parseFloat( val );
						if ( isNaN( val ) ) {
							return;
						}
					}

					applyPatch( tree, "replace", this.path, prefix + val.toLocaleString( loc ) + suffix );
				}
			},
			{
				name: "wb-decodeUTF8Base64",
				fn: function( obj, key, tree ) {
					var val = obj[ key ];

					if ( !this.set ) {
						applyPatch( tree, "replace", this.path, wb.decodeUTF8Base64( val ) );
					} else {
						applyPatch( tree, "add", this.set, wb.decodeUTF8Base64( val ) );
					}
				}
			},
			{
				name: "wb-escapeHTML",
				fn: function( obj, key, tree ) {
					var val = obj[ key ];

					if ( !this.set ) {
						applyPatch( tree, "replace", this.path, wb.escapeHTML( val ) );
					} else {
						applyPatch( tree, "add", this.set, wb.escapeHTML( val ) );
					}
				}
			},
			{
				name: "wb-toDateISO",
				fn: function( obj, key, tree ) {
					if ( !this.set ) {
						applyPatch( tree, "replace", this.path, wb.date.toDateISO( obj[ key ] ) );
					} else {
						applyPatch( tree, "add", this.set, wb.date.toDateISO( obj[ key ] ) );
					}
				}
			},
			{
				name: "wb-toDateTimeISO",
				fn: function( obj, key, tree ) {
					if ( !this.set ) {
						applyPatch( tree, "replace", this.path, wb.date.toDateISO( obj[ key ], true ) );
					} else {
						applyPatch( tree, "add", this.set, wb.date.toDateISO( obj[ key ], true ) );
					}
				}
			},
			{
				name: "wb-swap",
				fn: function( obj, key, tree ) {
					var val = obj[ key ],
						ref = this.ref,
						mainTree = this.mainTree || obj,
						path = this.path,
						newVal,
						refObject, refIsArray, valWasArray,
						i, i_len, i_item,
						j, j_len, j_item;

					if ( val ) {

						refObject = jsonpointer.get( mainTree, ref );
						refIsArray = Array.isArray( refObject );
						valWasArray = Array.isArray( val );

						if ( !valWasArray ) {
							val =  [ val ];
						}

						i_len = val.length;

						for ( i = 0; i !== i_len; i++ ) {
							i_item = val[ i ];
							newVal = undefined; // Reinit
							if ( !refIsArray ) {
								i_item = i_item.replaceAll( "~", "~0" ).replaceAll( "/", "~1" ); // Escape slashed and tilde in val when the key is an IRI for JSON pointer compatibility
								newVal = mainTree ? jsonpointer.get( mainTree, ref + "/" + i_item ) : jsonpointer.get( tree, ref + "/" + i_item );
							} else {

								// Iterate until we found a corresponding value in the property "@id"
								j_len = refObject.length;
								for ( j = 0; j !== j_len; j++ ) {
									j_item = refObject[ j ];
									if ( j_item[ "@id" ] && j_item[ "@id" ] === i_item ) {
										newVal = j_item;
										break;
									}
								}
								if ( !newVal ) {
									console.error( "wb-swap: Unable to find a corresponding value for: " + val + " in reference " + ref );
									break;
								}
							}
							if ( newVal && !valWasArray ) {
								applyPatch( tree, "replace", path, newVal );
							} else if ( newVal ) {
								applyPatch( tree, "replace", path + "/" + i, newVal );
							}
						}
					}
				}
			}
		],
		opsArray: [
			{
				name: "wb-toDateISO",
				fn: function( arr )  {
					var setval = this.set,
						pathval = this.path,
						i, i_len = arr.length;
					for ( i = 0; i !== i_len; i += 1 ) {
						if ( setval ) {
							jsonpatch.apply( arr, [
								{ op: "wb-toDateISO", set: "/" + i + setval, path: "/" + i + pathval }
							] );
						} else {
							jsonpatch.apply( arr, [
								{ op: "wb-toDateISO", path: "/" + i + pathval }
							] );
						}
					}
				}
			},
			{
				name: "wb-toDateTimeISO",
				fn: function( arr ) {
					var setval = this.set,
						pathval = this.path,
						i, i_len = arr.length;
					for ( i = 0; i !== i_len; i += 1 ) {
						if ( setval ) {
							jsonpatch.apply( arr, [
								{ op: "wb-toDateTimeISO", set: "/" + i + setval, path: "/" + i + pathval }
							] );
						} else {
							jsonpatch.apply( arr, [
								{ op: "wb-toDateTimeISO", path: "/" + i + pathval }
							] );
						}
					}
				}
			},
			{
				name: "wb-swap",
				fn: function( arr ) {
					arr.forEach( ( item, i ) => {
						jsonpatch.apply( arr, [
							{ op: "wb-swap", path: "/" + i + this.path, ref: this.ref, mainTree: this.mainTree }
						] );
					} );
				}
			},
			{
				name: "patches",
				fn: function( arr ) {
					arr.forEach( ( item, i ) => {
						jsonpatch.apply( this.mainTree || arr, [
							{ op: "patches", path: ( this.pathParent || "" ) + "/" + i + this.path, patches: this.patches }
						] );
					} );
				}
			}
		],
		opsRoot: [],
		settings: { },
		docMapKeys: { "referer": document.referrer, "locationHref": location.href }
	},

	// Add debug information after the JSON manager element
	debugPrintOut = function( $elm, name, json, patches ) {
		$elm.after( "<p lang=\"en\"><strong>JSON Manager Debug</strong> (" +  name + ")</p><ul lang=\"en\"><li>JSON: <pre><code>" + JSON.stringify( json ) + "</code></pre></li><li>Patches: <pre><code>" + JSON.stringify( patches ) + "</code></pre>" );
		console.log( json );
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
			jsSettings = window[ componentName ] || { },
			ops, opsArray, opsRoot,
			i, i_len, i_cache,
			url, urlActual, dsName,
			fetchOpts = { };

		if ( elm ) {
			$elm = $( elm );

			// Load handlebars
			Modernizr.load( {

				// For loading multiple dependencies
				load: [
					"site!deps/json-patch" + wb.getMode() + ".js",
					"site!deps/jsonpointer" + wb.getMode() + ".js"
				],
				testReady: function() {
					return window.jsonpatch && window.jsonpointer;
				},
				complete: function() {
					var elmData = wb.getData( $elm, componentName );

					if ( !defaults.registered ) {
						ops = defaults.ops.concat( jsSettings.ops || [ ] );
						opsArray = defaults.opsArray.concat( jsSettings.opsArray || [ ] );
						opsRoot = defaults.opsRoot.concat( jsSettings.opsRoot || [ ] );

						if ( ops.length ) {
							for ( i = 0, i_len = ops.length; i !== i_len; i++ ) {
								i_cache = ops[ i ];
								jsonpatch.registerOps( i_cache.name, i_cache.fn );
							}
						}
						if ( opsArray.length ) {
							for ( i = 0, i_len = opsArray.length; i !== i_len; i++ ) {
								i_cache = opsArray[ i ];
								jsonpatch.registerOpsArray( i_cache.name, i_cache.fn );
							}
						}
						if ( opsRoot.length ) {
							for ( i = 0, i_len = opsRoot.length; i !== i_len; i++ ) {
								i_cache = opsRoot[ i ];
								jsonpatch.registerOpsRoot( i_cache.name, i_cache.fn );
							}
						}
						defaults.settings = $.extend( {}, defaults.settings, jsSettings.settings || {} );
						defaults.registered = true;
					}

					dsName = elmData.name;
					if ( !dsName || dsName in dsNameRegistered ) {
						throw "Dataset name must be unique";
					}
					dsNameRegistered.push( dsName );

					url = elmData.url;

					if ( url ) {

						url = typeof url === "string" ? [ url ] : url;
						i_len = url.length;

						dsFetching[ dsName ] = i_len;

						for ( i = 0; i !== i_len; i++ ) {

							urlActual = url[ i ];

							// Fetch default configuration
							fetchOpts = {
								nocache: elmData.nocache,
								nocachekey: elmData.nocachekey,
								data: elmData.data,
								contentType: elmData.contenttype,
								method: elmData.method
							};

							// When the "url" is an extended configuration
							if ( urlActual.url ) {
								fetchOpts.savingPath = urlActual.path || "";
								fetchOpts.url = urlActual.url;
							} else {
								fetchOpts.url = urlActual;
							}

							// Fetch the JSON
							$elm.trigger( {
								type: "json-fetch.wb",
								fetch: fetchOpts
							} );

							// If the URL is a dataset, make it ready
							if ( fetchOpts.url.charCodeAt( 0 ) === 35 && fetchOpts.url.charCodeAt( 1 ) === 91 ) {
								wb.ready( $elm, componentName );
							}
						}
					} else if ( !url && elmData.extractor ) {
						$elm.trigger( {
							type: "json-fetched.wb",
							fetch: {
								response: {}
							}
						} );
						wb.ready( $elm, componentName );

					} else {

						$elm.trigger( {
							type: "json-fetch.wb"
						} );
						wb.ready( $elm, componentName );
					}

				}
			} );
		}
	},
	extractData = function( elmObj ) {

		var isGroup = false,
			selectedTag,
			targetTag,
			lastIndex = [],
			j_tag = "",
			group = {},
			arrMap = [],
			node_children = [],
			j_node = 0,
			arrRepeatPath = [],
			combineToObj = function( cur_obj ) {
				if ( cur_obj.selector === j_tag ) {
					if ( !lastIndex.includes( j_tag ) ) {
						group[ cur_obj.path ] = cur_obj.attr && node_children[ j_node ].getAttributeNode( cur_obj.attr ) ?
							node_children[ j_node ].getAttributeNode( cur_obj.attr ).textContent :
							node_children[ j_node ].textContent;
						lastIndex.push( j_tag );
					}
				}
			},
			manageObjDir = function( selector, selectedValue, json_return ) {
				var arrPath = selector.path.split( "/" ).filter( Boolean );

				// Check if selectedValue is an empty value returned by querySelectorAll
				if ( selectedValue && selectedValue instanceof NodeList && selectedValue.length === 0 ) {
					selectedValue = null;
				}

				if ( arrPath.length > 1 ) {
					var pointer = "";
					pointer = arrPath.pop();

					if ( arrPath[ 0 ] && arrPath[ 0 ] !== "" ) {

						if ( !json_return[ arrPath[ 0 ] ] && !arrRepeatPath.includes( arrPath[ 0 ] ) ) {
							arrRepeatPath.push( arrPath[ 0 ] );
							json_return[ arrPath[ 0 ] ] = {};
						}
						if ( selector.selectAll && !json_return[ arrPath[ 0 ] ] [ pointer ]  ) {
							json_return[ arrPath[ 0 ] ] [ pointer ] = [];
						}
						if ( selector.selectAll ) {
							json_return[ arrPath[ 0 ] ] [ pointer ].push( selectedValue );
						} else {
							json_return[ arrPath[ 0 ] ] [ pointer ] = selectedValue;
						}

					} else {

						if ( selector.selectAll ) {
							json_return[ arrPath[ 0 ] ].push( selectedValue );
						} else {
							json_return[ pointer ] = selectedValue;
						}
					}
				} else {

					if ( selector.selectAll ) {
						if ( !json_return[ selectedTag.path ] ) {
							json_return[ selectedTag.path ] = [];
						}
						json_return[ selectedTag.path ].push( selectedValue );
					} else {
						json_return[ selectedTag.path ] = selectedValue;
					}
				}
			},
			jsonSource = {};


		for ( var tag = 0; tag <= elmObj.length - 1; tag++ ) {

			selectedTag = elmObj[ tag ];

			if ( !selectedTag.interface ) {

				targetTag = document.querySelectorAll( selectedTag.selector || "" );
				isGroup = selectedTag.extractor && selectedTag.extractor.length >= 1 ? true : false;

				if ( selectedTag.selectAll ) {

					for ( var i_node = 0; i_node <= targetTag.length - 1; i_node++ ) {

						var selectedTagValue = selectedTag.attr && targetTag [ i_node ].getAttributeNode( selectedTag.attr ) ?
							targetTag [ i_node ].getAttributeNode( selectedTag.attr ).textContent :
							targetTag [ i_node ].textContent;

						manageObjDir( selectedTag, selectedTagValue, jsonSource );
					}
				}

				// extract from combined selectors and group the values e.g dt with dd
				if ( isGroup ) {

					jsonSource[ selectedTag.path ] = [];

					node_children = targetTag[ 0 ].children;

					var extractorLength = Object.keys( selectedTag.extractor ).length;

					for ( j_node = 0; j_node <= node_children.length - 1; j_node++ ) {

						j_tag = node_children[ j_node ].tagName.toLowerCase();

						selectedTag.extractor.find( combineToObj );
						if ( Object.keys( group ).length === extractorLength ) {
							arrMap.push( group );
							group = {};
							lastIndex = [];
						}
					}
					$.extend( jsonSource[ selectedTag.path ], arrMap );
				}

				if ( targetTag.length ) {
					targetTag = selectedTag.attr && targetTag [ 0 ].getAttributeNode( selectedTag.attr ) ?
						targetTag [ 0 ].getAttributeNode( selectedTag.attr ).textContent :
						targetTag [ 0 ].textContent;
				}

			} else {

				targetTag = defaults.docMapKeys[ selectedTag.interface ];

				manageObjDir( selectedTag, targetTag, jsonSource );
			}

			if ( !selectedTag.selectAll  ) {
				if ( isGroup === false ) {
					manageObjDir( selectedTag, targetTag, jsonSource );
				}
			}
		}

		return jsonSource;
	},

	// Filtering a JSON
	// Return true if trueness && falseness
	// Return false if !( trueness && falseness )
	// trueness and falseness is an array of { "path": "", "value": "" } object
	filterPassJSON = function( obj, trueness, falseness ) {
		var i, i_cache,
			trueness_len = trueness.length,
			falseness_len = falseness.length,
			compareResult = false,
			isEqual;

		if ( trueness_len || falseness_len ) {

			for ( i = 0; i < trueness_len; i += 1 ) {
				i_cache = trueness[ i ];
				isEqual = _equalsJSON( jsonpointer.get( obj, i_cache.path ), i_cache.value );

				if ( i_cache.optional ) {
					compareResult = compareResult || isEqual;
				} else if ( !isEqual ) {
					return false;
				} else {
					compareResult = true;
				}
			}
			if ( trueness_len && !compareResult ) {
				return false;
			}

			for ( i = 0; i < falseness_len; i += 1 ) {
				i_cache = falseness[ i ];
				isEqual = _equalsJSON( jsonpointer.get( obj, i_cache.path ), i_cache.value );

				if ( isEqual && !i_cache.optional || isEqual && i_cache.optional ) {
					return false;
				}
			}

		}
		return true;
	},

	// Utility function to compare two JSON value
	_equalsJSON = function( a, b ) {
		switch ( typeof a ) {
		case "undefined":
			return false;
		case "boolean":
		case "string":
		case "number":
			return a === b;
		case "object":
			if ( a === null ) {
				return b === null;
			}
			var i, l;
			if ( Array.isArray( a ) ) {
				if (  Array.isArray( b ) || a.length !== b.length ) {
					return false;
				}
				for ( i = 0, l = a.length; i < l; i++ ) {
					if ( !_equalsJSON( a[ i ], b[ i ] ) ) {
						return false;
					}
				}
				return true;
			}
			var bKeys = _objectKeys( b ),
				bLength = bKeys.length;
			if ( _objectKeys( a ).length !== bLength ) {
				return false;
			}
			for ( i = 0; i < bLength; i++ ) {
				if ( !_equalsJSON( a[ i ], b[ i ] ) ) {
					return false;
				}
			}
			return true;
		default:
			return false;
		}
	},
	_objectKeys = function( obj ) {
		var keys;
		if ( Array.isArray( obj ) ) {
			keys = new Array( obj.length );
			for ( var k = 0; k < keys.length; k++ ) {
				keys[ k ] = "" + k;
			}
			return keys;
		}
		if ( Object.keys ) {
			return Object.keys( obj );
		}
		keys = [];
		for ( var i in obj ) {
			if ( Object.prototype.hasOwnProperty.call( obj, i ) ) {
				keys.push( i );
			}
		}
		return keys;
	},

	// Utility function to apply a JSON patch
	applyPatch = function( tree, op, path, value ) {
		jsonpatch.apply( tree, [
			{ op: op, path: path, value: value }
		] );
	},

	// Create series of patches for filtering
	getPatchesToFilter = function( JSONsource, filterPath, filterTrueness, filterFaslseness ) {
		var filterObj,
			i, i_len;

		if ( !Array.isArray( filterTrueness ) ) {
			filterTrueness = [ filterTrueness ];
		}
		if ( !Array.isArray( filterFaslseness ) ) {
			filterFaslseness = [ filterFaslseness ];
		}

		filterObj = jsonpointer.get( JSONsource, filterPath );
		if ( Array.isArray( filterObj ) ) {
			i_len = filterObj.length - 1;
			for ( i = i_len; i !== -1; i -= 1 ) {
				if ( !filterPassJSON( filterObj[ i ], filterTrueness, filterFaslseness ) ) {
					jsonpatch.apply( JSONsource, [ { op: "remove", path: filterPath + "/" + i } ] );
				}
			}
		}
		return JSONsource;
	};

$document.on( "json-failed.wb", selector, function( event ) {
	var elm = event.target,
		$elm;

	if ( elm === event.currentTarget ) {
		$elm = $( elm );
		$elm.addClass( jsonFailedClass );

		// Identify that initialization has completed
		wb.ready( $elm, componentName );
	}
} );

$document.on( "json-fetched.wb", selector, function( event ) {
	var elm = event.target,
		$elm = $( elm ),
		settings,
		fetchedOpts = event.fetch.fetchedOpts,
		isReloading = elm.hasAttribute( reloadFlag ),
		dsName,
		JSONresponse = event.fetch.response,
		isArrayResponse,
		resultSet,
		i, i_len, i_cache, backlog, selector,
		objIterator, savingPathSplit,
		patches, filterTrueness, filterFaslseness, filterPath, extractor;

	if ( elm === event.currentTarget ) {
		settings = wb.getData( $elm, componentName );

		// Is the fetched JSON need to be wrap in another plain object
		if ( fetchedOpts && fetchedOpts.savingPath ) {
			savingPathSplit = fetchedOpts.savingPath.split( "/" );

			for ( i = savingPathSplit.length - 1; i > 0; i-- ) {
				if ( !savingPathSplit[ i ] ) {
					continue;
				}
				objIterator = {};
				objIterator[ savingPathSplit[ i ] ] = JSONresponse;
				JSONresponse = objIterator;
			}
		}

		// Determine if the response is an array
		isArrayResponse = Array.isArray( JSONresponse );

		// Ensure the response is an independant clone
		if ( isArrayResponse ) {
			JSONresponse = $.extend( true, [], JSONresponse );
		} else {
			JSONresponse = $.extend( true, {}, JSONresponse );
		}

		dsName = settings.name;
		dsFetching[ dsName ]--;

		// Ensure that we do have fetched and merged all urls everything before to move ahead
		dsFetchIsArray[ dsName ] = dsFetchIsArray[ dsName ] ? dsFetchIsArray[ dsName ] : isArrayResponse;

		if ( dsFetchIsArray[ dsName ] !== isArrayResponse ) {
			throw "Can't merge, incompatible JSON type (array vs object)";
		}

		if ( !dsFetchMerged[ dsName ] ) {
			dsFetchMerged[ dsName ] = JSONresponse;
		} else if ( dsFetchMerged[ dsName ] && isArrayResponse ) {
			dsFetchMerged[ dsName ] = dsFetchMerged[ dsName ].concat( JSONresponse );
		} else {
			dsFetchMerged[ dsName ] = $.extend( dsFetchMerged[ dsName ], JSONresponse );
		}

		// Quit and wait for the next fetch
		if ( !isReloading && dsFetching[ dsName ] ) {
			return;
		}

		JSONresponse = dsFetchMerged[ dsName ];

		extractor = settings.extractor;
		if ( extractor ) {
			if ( !Array.isArray( extractor ) ) {
				extractor = [ extractor ];
			}
			JSONresponse = $.extend( JSONresponse, extractData( extractor ) );

		}

		dsName = "[" + dsName + "]";
		patches = settings.patches || [];
		filterPath = settings.fpath;
		filterTrueness = settings.filter || [];
		filterFaslseness = settings.filternot || [];

		if ( !Array.isArray( patches ) ) {
			patches = [ patches ];
		}

		// Apply a filtering
		if ( filterPath ) {
			JSONresponse = getPatchesToFilter( JSONresponse, filterPath, filterTrueness, filterFaslseness );
		}

		// Apply the wraproot
		if ( settings.wraproot  ) {
			i_cache = { };
			i_cache[ settings.wraproot ] = JSONresponse;
			JSONresponse = i_cache;
		}

		// Apply the patches
		if ( patches.length ) {
			jsonpatch.apply( JSONresponse, patches );
		}

		if ( settings.debug ) {
			debugPrintOut( $elm, "initEvent", JSONresponse, patches );
		}

		try {
			datasetCache[ dsName ] = JSONresponse;
		} catch ( error ) {
			return;
		}
		datasetCacheSettings[ dsName ] = settings;

		if ( isReloading ) {
			elm.removeAttribute( reloadFlag );
			i_cache = dsPostponePatches[ dsName ];
			if ( i_cache ) {
				$elm.trigger( i_cache );
			}
		}

		if ( !settings.wait && dsDelayed[ dsName ] ) {
			backlog = dsDelayed[ dsName ];
			i_len = backlog.length;
			for ( i = 0; i !== i_len; i += 1 ) {
				i_cache = backlog[ i ];
				selector = i_cache.selector;
				if ( selector.length ) {
					try {
						resultSet = jsonpointer.get( JSONresponse, selector );
					} catch  ( e ) {
						throw dsName + " - JSON selector not found: " + selector;
					}
				} else {
					resultSet = JSONresponse;
				}
				$( "#" + i_cache.callerId ).trigger( {
					type: "json-fetched.wb",
					fetch: {
						response: resultSet,
						status: "200",
						refId: i_cache.refId,
						xhr: null
					}
				}, this );
			}
		}

		// Identify that initialization has completed
		wb.ready( $elm, componentName );
	}
} );

// Apply patches to a preloaded JSON data
$document.on( patchesEvent, selector, function( event ) {
	var elm = event.target,
		$elm = $( elm ),
		patches = event.patches,
		filterPath = event.fpath,
		filterTrueness = event.filter || [],
		filterFaslseness = event.filternot || [],
		isCumulative = !!event.cumulative,
		settings,
		dsName,
		dsJSON, resultSet,
		delayedLst,
		i, i_len, i_cache, pntrSelector;

	if ( elm === event.currentTarget && Array.isArray( patches ) ) {
		settings = wb.getData( $elm, componentName );

		if ( !settings ) {
			return true;
		}
		dsName = "[" + settings.name + "]";

		// Check if the patches need to be hold until the next json-fetch event
		if ( elm.hasAttribute( reloadFlag ) ) {
			dsPostponePatches[ dsName ] = event;
			return true;
		}

		if ( !dsDelayed[ dsName ] ) {
			throw "Applying patched on undefined dataset name: " + dsName;
		}

		dsJSON = datasetCache[ dsName ];
		if ( !isCumulative ) {
			dsJSON = $.extend( true, ( Array.isArray( dsJSON ) ? [] : {} ), dsJSON );
		}

		// Apply a filtering
		if ( filterPath ) {
			dsJSON = getPatchesToFilter( dsJSON, filterPath, filterTrueness, filterFaslseness );
		}

		jsonpatch.apply( dsJSON, patches );

		if ( settings.debug ) {
			debugPrintOut( $elm, "patchesEvent", dsJSON, patches );
		}

		delayedLst = dsDelayed[ dsName ];
		i_len = delayedLst.length;
		for ( i = 0; i !== i_len; i += 1 ) {
			i_cache = delayedLst[ i ];
			pntrSelector = i_cache.selector;
			if ( pntrSelector.length ) {
				try {
					resultSet = jsonpointer.get( dsJSON, pntrSelector );
				} catch  ( e ) {
					throw dsName + " - JSON selector not found: " + pntrSelector;
				}
			} else {
				resultSet = dsJSON;
			}
			$( "#" + i_cache.callerId ).trigger( {
				type: "json-fetched.wb",
				fetch: {
					response: resultSet,
					status: "200",
					refId: i_cache.refId,
					xhr: null
				}
			}, this );
		}
	}
} );


// Used by the JSON-fetch plugin for when trying fetching a resource that is mapped a dataset name
$document.on( postponeEvent, function( event ) {
	var jsonPostpone = event.postpone,
		dsName = jsonPostpone.dsname,
		callerId = jsonPostpone.callerId,
		refId = jsonPostpone.refId,
		selector = jsonPostpone.selector,
		resultSet;

	if ( !dsDelayed[ dsName ] ) {
		dsDelayed[ dsName ] = [ ];
	}

	// Add to the delayed updates list
	dsDelayed[ dsName ].push( {
		"callerId": callerId,
		"refId": refId,
		"selector": selector
	} );

	// Send the data if the dataset is ready?
	if ( datasetCache[ dsName ] && !datasetCacheSettings[ dsName ].wait ) {
		resultSet = datasetCache[ dsName ];
		if ( selector.length ) {
			try {
				resultSet = jsonpointer.get( resultSet, selector );
			} catch  ( e ) {
				throw dsName + " - JSON selector not found: " + selector;
			}
		}
		$( "#" + callerId ).trigger( {
			type: "json-fetched.wb",
			fetch: {
				response: resultSet,
				status: "200",
				refId: refId,
				xhr: null
			}
		}, this );
	}

} );

/*
 * Integration with wb-fieldflow
 *
 */
function pushData( $elm, prop, data, reset ) {
	var dtCache = $elm.data( prop );
	if ( !dtCache || reset ) {
		dtCache = [];
	}
	dtCache.push( data );
	return $elm.data( prop, dtCache );
}

// Fieldflow "op" action
$document.on( "op.action.wb-fieldflow", ".wb-fieldflow", function( event, data ) {

	if ( !data.op ) {
		return;
	}

	// Postpone the event for form submission
	data.preventSubmit = true;
	pushData( $( data.provEvt ), "wb-fieldflow-submit", data );
} );

// Fieldflow "op" submit
$document.on( "op.submit.wb-fieldflow", ".wb-fieldflow", function( event, data ) {

	// Get the hbs Plugin
	var op = data.op,
		source = data.source,
		ops;

	if ( !op ) {
		return true;
	}

	if ( !Array.isArray( op ) ) {
		ops = [];
		ops.push( op );
	} else {
		ops = op;
	}

	$( source ).trigger( {
		type: "patches.wb-jsonmanager",
		patches: ops
	} );
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );


// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title WET-BOEW wb-postback
 * @overview This plugin implements AJAX request for form data to submit on same page without refresh
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @masterbee, @namjohn920, @GormFrank
 **/
( function( $, wb ) {
"use strict";

var $document = wb.doc,
	componentName = "wb-postback",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	failEvent = "fail" + selector,
	successEvent = "success" + selector,
	defaults = {},

	init = function( event ) {
		var elm = wb.init( event, componentName, selector );

		if ( elm ) {
			var $elm = $( elm ),
				settings = $.extend(
					true,
					{},
					defaults,
					wb.getData( $elm, componentName )
				),
				multiple = typeof $elm.data( componentName + "-multiple" ) !== "undefined",
				classToggle = settings.toggle || "hide",
				selectorSuccess = settings.success,
				selectorFailure = settings.failure || selectorSuccess;
			const attrBlocked = "data-wb-blocked",
				attrSending = "data-wb-sending";

			elm.addEventListener( "submit", function( e ) {

				// Prevent regular form submit
				e.preventDefault();

				//Check if the form use the validation plugin
				if ( elm.parentElement.classList.contains( "wb-frmvld" ) ) {

					// Block invalid forms and allow valid ones
					if ( !$elm.valid() ) {
						$( this ).attr( attrBlocked, "true" );
					} else {
						$( this ).removeAttr( attrBlocked );
					}
				}

				// Submit the form unless it's blocked or currently being sent
				if ( !$( this ).attr( attrBlocked ) && !$( this ).attr( attrSending ) ) {
					var data = $elm.serializeArray(),
						btn = e.submitter,
						$selectorSuccess = $( selectorSuccess ),
						$selectorFailure = $( selectorFailure );

					// Indicate that the form is currently being sent (to prevent multiple submissions in parallel)
					$( this ).attr( attrSending, true );

					// If the submit button contains a variable, add it to the form's paramaters
					// Note: Submitting a form via Enter will act as if the FIRST submit button was pressed. Therefore, that button's variable will be added (as opposed to nothing). This is in line with default form submission behaviour.
					if ( btn && btn.name ) {
						data.push( { name: btn.name, value: btn.value } );
					}

					// Hide feedback messages
					$selectorFailure.addClass( classToggle );
					$selectorSuccess.addClass( classToggle );

					// Send the form through ajax and ignore the response body.
					$.ajax( {
						type: this.method,
						url: this.action,
						data: $.param( data )
					} )
						.done( function() {
							$elm.trigger( successEvent );
							$selectorSuccess.removeClass( classToggle );
						} )
						.fail( function( response ) {
							$elm.trigger( failEvent, response );
							$selectorFailure.removeClass( classToggle );
						} )
						.always( function() {

							// Hide the form unless multiple submits are allowed
							if ( !multiple ) {
								$elm.addClass( classToggle );
							}

							// Remove the sending indicator now that submission is fully complete (i.e. HTTP response code has been received)
							$elm.removeAttr( attrSending );
						} );
				}
			} );

			wb.ready( $( elm ), componentName );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, wb );

/**
 * @title WET-BOEW Randomize
 * @overview This plugin randomly picks one of the child component to be shown on the browser.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @masterbee @namjohn920
 */
( function( $, window, wb ) {
"use strict";

var $document = wb.doc,
	componentName = "wb-randomize",
	selector = "[data-wb-randomize]",
	initEvent = "wb-init" + selector,
	defaults = {},

	init = function( event ) {
		var elm = wb.init( event, componentName, selector ),
			$elm, settings, $selectedElm, valuesList;

		if ( elm ) {
			$elm = $( elm );
			settings = $.extend(
				true,
				{},
				defaults,
				window[ componentName ],
				wb.getData( $elm, componentName )
			);

			if ( settings.attribute ) {
				if ( settings.values && Array.isArray( settings.values ) ) {
					valuesList = settings.values;
					shuffleArray( valuesList );
					elm.setAttribute( settings.attribute, valuesList[ 0 ] );
				} else {
					throw componentName + ": You must define the property \"values\" to an array of strings when \"attribute\" property is defined.";
				}
			} else {
				$selectedElm = settings.selector ? $( settings.selector, $elm ) : $elm.children();

				if ( !$selectedElm.length ) {
					throw componentName + " selector setting is invalid or no children";
				}

				if ( settings.shuffle ) {
					$selectedElm = wb.shuffleDOM( $selectedElm );
				}

				if ( settings.toggle ) {
					$selectedElm = wb.pickElements( $selectedElm, settings.number );
					$selectedElm.toggleClass( settings.toggle );
				}
			}

			wb.ready( $elm, componentName );
		}
	},

	shuffleArray = function( array ) {
		for ( let i = array.length - 1; i > 0; i-- ) {
			const j = Math.floor( Math.random() * ( i + 1 ) );
			[ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ];
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @title Zebra
 * @overview Apply Zebra stripping on a complex data table and simulate column hovering effect
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 *
 */
( function( $, window, document, wb ) {
"use strict";

/**
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-zebra",
	selector = "." + componentName,
	hoverColClass = componentName + "-col-hover",
	selectorHoverCol = "." + hoverColClass + " td, " + hoverColClass + " th",
	initEvent = "wb-init" + selector,
	tableParsingEvent = "passiveparse.wb-tableparser",
	tableParsingCompleteEvent = "parsecomplete.wb-tableparser",
	$document = wb.doc,
	idCount = 0,
	i18n, i18nText,

	/**
	 * Main Entry function to apply the complex zebra stripping
	 * @method zebraTable
	 * @param {jQuery DOM element} $elm table element use to apply complex zebra stripping
	 */
	zebraTable = function( $elm ) {
		var i, iLength, tblGroup,

			// Cache the table parsed results
			tblparser = $elm.data().tblparser;

		function addCellClass( arr, className ) {
			var i, iLength;

			for ( i = 0, iLength = arr.length; i !== iLength; i += 1 ) {
				$( arr[ i ].elem ).addClass( className );
			}
		}

		// Key Cell
		if ( tblparser.keycell ) {
			addCellClass( tblparser.keycell, "wb-cell-key" );
		}

		// Description Cell
		if ( tblparser.desccell ) {
			addCellClass( tblparser.desccell, "wb-cell-desc" );
		}

		// Layout Cell
		if ( tblparser.layoutCell ) {
			addCellClass( tblparser.layoutCell, "wb-cell-layout" );
		}

		// Summary Row Group
		if ( tblparser.lstrowgroup ) {
			for ( i = 0, iLength = tblparser.lstrowgroup.length; i !== iLength; i += 1 ) {
				tblGroup = tblparser.lstrowgroup[ i ];

				// Add a class to the row
				if ( tblGroup.type === 3 || tblGroup.row[ 0 ].type === 3 ) {
					$( tblGroup.elem ).addClass( "wb-group-summary" );
				}
			}
		}

		// Summary Column Group
		if ( tblparser.colgroup ) {
			for ( i = 0, iLength = tblparser.colgroup.length; i !== iLength; i += 1 ) {
				tblGroup = tblparser.colgroup[ i ];

				// Add a class to the row
				if ( tblGroup.type === 3 ) {
					$( tblGroup.elem ).addClass( "wb-group-summary" );
				}
			}
		}

		// Identify that initialization has completed
		wb.ready( $elm, componentName );
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
			deps = [
				"site!deps/tableparser" + wb.getMode() + ".js"
			],
			elmId;

		if ( elm ) {
			elmId = elm.id;

			// Ensure there is a unique id on the element
			if ( !elmId ) {
				elmId = componentName + "-id-" + idCount;
				idCount += 1;
				elm.id = elmId;
			}

			// Only initialize the i18nText once
			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					tableMention: i18n( "hyphen" ) + i18n( "tbl-txt" ),
					tableFollowing: i18n( "hyphen" ) + i18n( "tbl-dtls" )
				};
			}

			// Load the required dependencies
			Modernizr.load( {

				// For loading multiple dependencies
				load: deps,
				complete: function() {

					// Let's parse the table
					$( "#" + elmId ).trigger( tableParsingEvent );
				}
			} );
		}
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent + " " + tableParsingCompleteEvent, selector, function( event ) {
	var eventTarget = event.target;

	switch ( event.type ) {

	/*
	 * Init
	 */
	case "timerpoke":
	case "wb-init":
		init( event );
		break;

	/*
	 * Data table parsed
	 */
	case "parsecomplete":
		if ( event.currentTarget === eventTarget ) {
			zebraTable( $( eventTarget ) );
		}
		break;
	}

	/*
	 * Since we are working with events we want to ensure that we are being passive about our control,
	 * so returning true allows for events to always continue
	 */
	return true;
} );

// Applying the hover, Simulate Column Hovering Effect
$document.on( "mouseenter focusin", selectorHoverCol, function( event ) {
	var tblparserCell = $( event.currentTarget ).data().tblparser;

	if ( tblparserCell.col && tblparserCell.col.elem ) {
		$( tblparserCell.col.elem ).addClass( "table-hover" );
	}
} );

// Removing the hover, Simulate Column Hovering Effect
$document.on( "mouseleave focusout", selectorHoverCol, function( event ) {
	var tblparserCell = $( event.currentTarget ).data().tblparser;

	if ( tblparserCell.col && tblparserCell.col.elem ) {
		$( tblparserCell.col.elem ).removeClass( "table-hover" );
	}
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );
