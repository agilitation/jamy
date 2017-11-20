(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['friends'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header>\n  <nav>\n    <a href=\"#/profile/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"arrow\">\n        <svg style=\"height: 1em; width: 1em\" viewBox=\"0 0 64 64\">\n          <polygon points=\"52 8.081 43.919 0 12 31.919 12.081 32 12 32.081 43.919 64 52 55.919 28.081 32 52 8.081\">\n          </polygon>\n        </svg>\n      </div>\n    </a>\n    <div class=\"spacer\"></div>\n  </nav>\n  <h1>Friends</h1>\n</header>\n<div class=\"content\">\n  <div class=\"container\">\n    <div class=\"progress\">\n      <div class=\"bar\" style=\"width: 28%\"></div>\n    </div>\n    <div class=\"legend\">\n      1/5 semaines de connexion\n    </div>\n    <p>Consulter le site chaque semaine vous rapporte des points, et même un bonus !</p>\n    <!-- CHECKLIST -->\n    <div class=\"centered\">\n      <div class=\"checklist\">\n        <div class=\"border\" style=\"animation-duration: 2s\"></div>\n        <ul>\n          <li class=\"checked\">\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 1</p>\n              <p><span class=\"reward\">+10</span></p>\n            </div>\n          </li>\n          <li class=\"checked active\">\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 2</p>\n              <p><span class=\"reward\">+15</span></p>\n            </div>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 3</p>\n              <p><span class=\"reward\">+15</span></p>\n            </div>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 4</p>\n              <p><span class=\"reward\">+15</span></p>\n            </div>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 5</p>\n              <p><span class=\"reward\">livraison gratuite !</span></p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['modal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content modal\">\n  <div class=\"container greeting\">\n      <h1>Salut Laura !</h1>\n      <p>Tu as des missions en cours</p>\n  </div>\n  <div class=\"container full\">\n    <div class=\"slider\">\n      <a href=\"#prev\" class=\"arrow prev\">\n        <svg viewBox=\"0 0 16 36\">\n          <polyline points=\"10.379 31.115 5.32 17.979 10.5 4.844\"></polyline>\n        </svg>\n      </a>\n      <div class=\"slides\">\n        <div class=\"slide\">\n          <div class=\"badge\">\n            <div class=\"icon\">\n              <svg version=\"1.1\" viewBox=\"0 0 204 204\" class=\"circle\">\n                <path\n                    stroke=\"#000000\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"rgba(0,0,0,0)\"\n                    d=\"M 102, 102\n            m -100, 0\n            a 100,100 0 1,0 200,0\n            a 100,100 0 1,0 -200,0\">\n                </path>\n              </svg>\n              <img src=\"../assets/icons8-search.png\" alt=\"\">\n              <span class=\"level\">2</span>\n            </div>\n          </div>\n          <h4>Passionné</h4>\n          <div class=\"progress\">\n            <div class=\"bar\" style=\"width: 20%\"></div>\n          </div>\n          <div class=\"legend\">\n            Passer 2 commandes supplémentaires\n          </div>\n        </div>\n        <div class=\"slide\">\n          <div class=\"badge\">\n            <div class=\"icon\">\n              <svg version=\"1.1\" viewBox=\"0 0 204 204\" class=\"circle\">\n                <path\n                    stroke=\"#000000\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"rgba(0,0,0,0)\"\n                    d=\"M 102, 102\n            m -100, 0\n            a 100,100 0 1,0 200,0\n            a 100,100 0 1,0 -200,0\">\n                </path>\n              </svg>\n              <img src=\"../assets/icons8-search.png\" alt=\"\">\n              <span class=\"level\">3</span>\n            </div>\n          </div>\n          <h4>Explorateur</h4>\n          <div class=\"progress\">\n            <div class=\"bar\" style=\"width: 20%\"></div>\n          </div>\n          <div class=\"legend\">\n            Voir 5 fiches produits\n          </div>\n        </div>\n      </div>\n      <a href=\"#next\" class=\"arrow next\">\n        <svg viewBox=\"0 0 16 36\">\n          <polyline points=\"5.32 4.844 10.5 17.979 5.441 31.115\"></polyline>\n        </svg>\n      </a>\n    </div>\n  </div>\n  <div class=\"container action\">\n    <button onclick=\"app.hideModal()\" class=\"btn\">Mon compte</button>\n  </div>\n</div>";
},"useData":true});
templates['profile'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header>\n  <div class=\"points\">\n    <span class=\"value\">1 257</span>\n    <button class=\"info\">i</button>\n    <span class=\"unit\">points</span>\n  </div>\n  <div style=\"position: relative; \">\n    <div class=\"progress\">\n      <div class=\"bar\" style=\"width: 55%;\"></div>\n    </div>\n    <div class=\"scale\">\n      <span style=\"left: 0;\">500</span>\n      <span style=\"left: 50%\">1000</span>\n      <span style=\"left: 100%\">1500</span>\n    </div>\n  </div>\n  <button class=\"btn\">Échanger</button>\n</header>\n<div class=\"content\">\n\n  <div class=\"container full badges\">\n    <h2>Niveaux</h2>\n    <div class=\"badge\">\n      <div class=\"icon\">\n        <svg version=\"1.1\" viewBox=\"0 0 204 204\" class=\"circle\">\n          <path\n              stroke=\"#000000\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"rgba(0,0,0,0)\"\n              d=\"M 102, 102\n            m -100, 0\n            a 100,100 0 1,0 200,0\n            a 100,100 0 1,0 -200,0\">\n          </path>\n        </svg>\n        <img src=\"../assets/icons8-search.png\">\n      </div>\n      <div class=\"detail\">\n        <h3>Curieux</h3>\n        <div class=\"progress mini\">\n          <div class=\"bar\" style=\"width:40%\"></div>\n        </div>\n        <div class=\"legend\">\n          15/20 fiches produits consultées\n        </div>\n      </div>\n      <div class=\"action\">\n        <a href=\"#/friends\">\n          <svg viewBox=\"0 0 16 36\">\n            <polyline points=\"5.32 4.844 10.5 17.979 5.441 31.115\"></polyline>\n          </svg>\n        </a>\n      </div>\n    </div>\n    <h2>One-shot</h2>\n    <div class=\"badge\">\n      <div class=\"icon\">\n        <svg version=\"1.1\" viewBox=\"0 0 204 204\" class=\"circle\">\n          <path\n              stroke=\"#000000\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"rgba(0,0,0,0)\"\n              d=\"M 102, 102\n            m -100, 0\n            a 100,100 0 1,0 200,0\n            a 100,100 0 1,0 -200,0\">\n          </path>\n        </svg>\n        <img src=\"../assets/icons8-search.png\">\n      </div>\n      <div class=\"detail\">\n        <h3>Fan</h3>\n        <div class=\"legend\">\n          Like us on Facebook!\n        </div>\n        <div class=\"points\">+ 30</div>\n      </div>\n      <div class=\"action\">\n        <button class=\"btn small\">\n          Like\n        </button>\n      </div>\n    </div>\n    <div class=\"badge\">\n      <div class=\"icon\">\n        <svg version=\"1.1\" viewBox=\"0 0 204 204\" class=\"circle\">\n          <path\n              stroke=\"#000000\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"rgba(0,0,0,0)\"\n              d=\"M 102, 102\n            m -100, 0\n            a 100,100 0 1,0 200,0\n            a 100,100 0 1,0 -200,0\">\n          </path>\n        </svg>\n        <img src=\"../assets/icons8-search.png\">\n      </div>\n      <div class=\"detail\">\n        <h3>Curieux</h3>\n        <div class=\"progress mini\">\n          <div class=\"bar\" style=\"width:40%\"></div>\n        </div>\n        <div class=\"legend\">\n          15/20 fiches produits consultées\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <p><a href=\"#/profile/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "/friends\">Friends</a></p>\n    <button class=\"btn\" onclick=\"app.showModal()\">Mon Compte</button>\n    <button class=\"btn small\">Button small</button>\n\n    <h2>Progressbar</h2>\n    <div class=\"progress\">\n      <div class=\"bar\" style=\"width:80%\"></div>\n    </div>\n    <h2>Progressbar mini</h2>\n    <div class=\"progress mini\">\n      <div class=\"bar\" style=\"width:80%\"></div>\n    </div>\n\n  </div>\n\n</div>";
},"useData":true});

},{"handlebars/runtime":21}],2:[function(require,module,exports){
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

},{}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = require('./handlebars/base');

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = require('./handlebars/safe-string');

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = require('./handlebars/exception');

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = require('./handlebars/utils');

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = require('./handlebars/runtime');

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = require('./handlebars/no-conflict');

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];


},{"./handlebars/base":4,"./handlebars/exception":7,"./handlebars/no-conflict":17,"./handlebars/runtime":18,"./handlebars/safe-string":19,"./handlebars/utils":20}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _helpers = require('./helpers');

var _decorators = require('./decorators');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.11';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];


},{"./decorators":5,"./exception":7,"./helpers":8,"./logger":16,"./utils":20}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = require('./decorators/inline');

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}


},{"./decorators/inline":6}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];


},{"../utils":20}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];


},{}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = require('./helpers/block-helper-missing');

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = require('./helpers/each');

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = require('./helpers/helper-missing');

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = require('./helpers/if');

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = require('./helpers/log');

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = require('./helpers/lookup');

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = require('./helpers/with');

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}


},{"./helpers/block-helper-missing":9,"./helpers/each":10,"./helpers/helper-missing":11,"./helpers/if":12,"./helpers/log":13,"./helpers/lookup":14,"./helpers/with":15}],9:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];


},{"../utils":20}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('../utils');

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];


},{"../exception":7,"../utils":20}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];


},{"../exception":7}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];


},{"../utils":20}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];


},{}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];


},{}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];


},{"../utils":20}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('./utils');

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];


},{"./utils":20}],17:[function(require,module,exports){
(function (global){
/* global window */
'use strict';

exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = require('./utils');

var Utils = _interopRequireWildcard(_utils);

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _base = require('./base');

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}


},{"./base":4,"./exception":7,"./utils":20}],19:[function(require,module,exports){
// Build out our basic SafeString type
'use strict';

exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];


},{}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}


},{}],21:[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime')['default'];

},{"./dist/cjs/handlebars.runtime":3}],22:[function(require,module,exports){
var Application = require('./application');
var æ = require('./async');
var Template = require('./navigation/template');
require('../gen/templates');
var Slider = require('./kinematic/slider');
var app = new Application('#app');
var k = require('./kinematic');
var h = require('./kinematic/helpers');

/*app.router.on('/profile/:id', function(path){
 var profileView = app.templates.profile.create(path);
 app.anim.performTransition(app.currentView, profileView, 'push');
 });*/

app.addTemplate(new Template('profile'));
app.addTemplate(new Template('friends'));
app.addTemplate(new Template('modal'));

app.templates.friends.on('beforeEnter', function (view, done) {
    view.empty();
    view.data = null;
    loadFriends(view);
    done();
});

app.templates.friends.on('onEnter', function (view, done) {
    view.data ? onData() : view.on('data', onData);
    function onData() {
        æ.series([
            renderView,
            k.hide('li'),
            k.hide('.checklist .border'),
            k.parallel([
                k.animateCss('.checklist .border', 'expand'),
                k.animateCss('li', 'fadeInRight', {delay: 200})
            ])
        ], done, view);
    }
});

app.templates.profile.on('beforeEnter', function (view, done) {
    view.data = {
        id: 1,
        name: 'Romain'
    };
    view.render();
    var header = view.el.querySelector('header');
    var content = view.el.querySelector('header + .content');
    content.style.height = 'calc(100% - ' + getComputedStyle(header).height + ')';
    done();
});

app.templates.friends.on('onExit', function (view, done) {
    k.animateCss('h1, li', 'fadeOutRight', {
        delay: 200,
        addClass: k.classnames.hide.TRANSPARENT
    })(view, done)
});

app.templates.modal.on('beforeEnter', function (view, done) {
    view.render();
    window.slider = new Slider(view.el.querySelector('.slider'));
    var content = view.el.querySelector('.content');
    content.style.height = 'auto';
    app.el.style.height = getComputedStyle(content).height;
    done();
});

app.templates.modal.on('onExit', function(view, done){
    app.el.removeAttribute('style');
    done();
});

function renderView(view, done) {
    view.render();
    done();
}

app.init = function () {
    window.myProfileView = app.createView('profile', '#/profile/1');
    window.friendsView = app.createView('friends', '#/profile/1/friends');
    window.modalView = app.createView('modal', '#/modal');
    h.addClass(window.modalView.el, 'kinematic-translate-bottom');
};

app.gotoFriends = function () {
    k.transitions.cover({app: app, from: myProfileView, to: friendsView})
};

app.gotoProfile = function () {
    k.transitions.reveal({app: app, from: friendsView, to: myProfileView})
};

app.showModal = function () {
    k.transitions.modal({app: app, to: modalView})
};

app.hideModal = function () {
    k.transitions.modal({app: app, from: modalView})
};

window.addEventListener('hashchange', function () {
    var view = app.views[location.hash];
    if (view === window.myProfileView) {
        app.gotoProfile();
    } else {
        app.gotoFriends();
    }
});

app.init();

window.dispatchEvent(new HashChangeEvent("hashchange"));

function loadFriends(view) {
    setTimeout(function () {
        view.data = {
            id: 1,
            friends: [
                {name: "Romain"},
                {name: "Delphine"},
                {name: "Laurent"},
                {name: "Guillaume"},
                {name: "Christophe"},
                {name: "Laura"}
            ]
        };
        view.hook('data');
    }, 350);
}


// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Référence : https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
    Array.from = (function () {
        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) {
                return 0;
            }
            if (number === 0 || !isFinite(number)) {
                return number;
            }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        // La propriété length de la méthode vaut 1.
        return function from(arrayLike/*, mapFn, thisArg */) {
            // 1. Soit C, la valeur this
            var C = this;

            // 2. Soit items le ToObject(arrayLike).
            var items = Object(arrayLike);

            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
                throw new TypeError("Array.from doit utiliser un objet semblable à un tableau - null ou undefined ne peuvent pas être utilisés");
            }

            // 4. Si mapfn est undefined, le mapping sera false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. sinon
                // 5. a. si IsCallable(mapfn) est false, on lève une TypeError.
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: lorsqu il est utilisé le deuxième argument doit être une fonction');
                }

                // 5. b. si thisArg a été fourni, T sera thisArg ; sinon T sera undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Soit lenValue pour Get(items, "length").
            // 11. Soit len pour ToLength(lenValue).
            var len = toLength(items.length);

            // 13. Si IsConstructor(C) vaut true, alors
            // 13. a. Soit A le résultat de l'appel à la méthode interne [[Construct]] avec une liste en argument qui contient l'élément len.
            // 14. a. Sinon, soit A le résultat de ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            // 16. Soit k égal à 0.
            var k = 0;  // 17. On répète tant que k < len…
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            // 18. Soit putStatus égal à Put(A, "length", len, true).
            A.length = len;  // 20. On renvoie A.
            return A;
        };
    }());
}

window.app = app;
window.k = k;
},{"../gen/templates":1,"./application":23,"./async":24,"./kinematic":30,"./kinematic/helpers":27,"./kinematic/slider":31,"./navigation/template":37}],23:[function(require,module,exports){
/**
 *
 * @param selector
 * @constructor
 * @class
 */
var Application = function (selector) {
    this.templates = {};
    this.el = document.querySelector(selector);
    this.el.innerHTML = '<header></header><div class="views"></div><footer></footer>';
    this.views = {};
};

Application.prototype.addTemplate = function(template){
    this.templates[template.name] = template;
};

Application.prototype.createView = function(name, path){
    this.views[path] = this.templates[name].create(path);
    this.el.querySelector(':scope > .views').append(this.views[path].el);
    return this.views[path];
};

module.exports = Application;
},{}],24:[function(require,module,exports){

function eachParallelObj(obj, fn, done) {
    eachParallelArr(Object.keys(obj), function (key, cb) {
        fn(key, obj[key], cb);
    }, done);
}

function eachSeriesObj(obj, fn, done) {
    eachSeriesArr(Object.keys(obj), function (key, cb) {
        fn(key, obj[key], cb);
    }, done);
}

function eachParallelArr(arr, fn, done) {
    var i = 0, completed = 0, l = arr.length, cb = function () {
        completed++;
        if (completed === l) {
            callIfFunction(done)
        }
    };
    for (; i < l; i++) {
        fn(arr[i], cb);
    }
}

function eachParallel(subject, fn, done) {
    if (Array.isArray(subject)) {
        return eachParallelArr(subject, fn, done);
    }
    eachParallelObj(subject, fn, done);
}

function parallel(functions, done) {
    var additionalArgs = Array.prototype.slice.call(arguments, 2);
    eachParallelArr(functions, function (fn, cb, prev) {
        var args = [cb, prev];
        if (additionalArgs.length){
            args = additionalArgs.concat(args);
        }
        fn.apply(fn, args);
    }, done);
}

function eachSeries(subject, fn, done) {
    if (Array.isArray(subject)) {
        return eachSeriesArr(subject, fn, done);
    }
    eachSeriesObj(subject, fn, done);
}

function eachSeriesArr(arr, fn, done) {
    var i = 0, prev, cb = function () {
        i++;
        prev = Array.prototype.slice.call(arguments);
        exec();
    };

    function exec() {
        if (i < arr.length) {
            fn(arr[i], cb, prev);
        } else {
            callIfFunction(done);
        }
    }

    exec();
}

/**
 * Additional parameters will be passed as parameters of the callback function
 * @param functions
 * @param done
 */
function series(functions, done) {
    var additionalArgs = Array.prototype.slice.call(arguments, 2);
    eachSeriesArr(functions, function (fn, cb, prev) {
        var args = [cb, prev];
        if (additionalArgs.length){
            args = additionalArgs.concat(args);
        }
        fn.apply(fn, args);
    }, done);
}

function callIfFunction(fn) {
    if (typeof fn === "function") {
        fn();
    }
}


module.exports = {
    eachSeries: eachSeries,
    series: series,
    eachParallel: eachParallel,
    parallel: parallel
};
},{}],25:[function(require,module,exports){
var h = require('./helpers');
var æ = require('../async');
var classnames = require('./classnames');


/**
 * @function animateCss
 * @description
 * @param {NodeList|HTMLElement|HTMLElement[]|string} selector
 * @param {string} cls
 * @param {object} options
 * @param {boolean=} options.remove remove class instead of applying it
 * @param {number=} options.delay time to wait before firing the animation, in ms
 * @param {string=} options.addClass add class(es) to the element after the animation finishes
 * @param {string=} options.removeClass remove class(es) to the element after the animation finishes
 * @param {function|undefined} options.after exec a callback for each animated element
 * @return {function}
 */
module.exports = function animateCss(selector, cls, options) {
    options = options || {delay: 1, remove: false};
    return function animateInView(view, done) {
        // targets may be a single dom element or a node list
        var targets;
        if (typeof selector === 'string') {
            targets = Array.from(view.el.querySelectorAll(selector));
        } else if (selector instanceof HTMLElement) {
            targets = [selector];
        } else { // case isArray or NodeList
            targets = selector;
        }

        if (targets.length === 0) {
            return done();
        }

        // current element iteration, used to delay
        var i = 0;
        æ.eachParallel(targets, function (el, cb) {
            //we use a setTimeout to delay the application of the class
            setTimeout(function () {
                h.removeClass(el, h.everyClassname(classnames.hide));
                h.addClass(el, 'animated');
                // void el.offsetWidth; // force the browser to do a reflow
                h.cls(el, [options.remove ? h.minus(cls) : cls], function () {
                    h.addClass(el, options.addClass);
                    h.removeClass(el, options.removeClass);
                    h.removeClass(el, 'animated');
                    if (!options.remove) {
                        h.removeClass(el, cls);
                    }
                    h.isFunction(options.after) ? options.after(el, cb) : cb();
                });
            }, options.delay * i);
            i++;
        }, done);
    }
};
},{"../async":24,"./classnames":26,"./helpers":27}],26:[function(require,module,exports){
module.exports = {
    transition: {
      WITH: 'kinematic-with-transition',
        WITHOUT: 'kinematic-without-transition'
    },
    opacity: {
        TRANSPARENT: 'kinematic-opacity-transparent',
        OPAQUE: 'kinematic-opacity-opaque',
        LIGHT: 'kinematic-opacity-light',
        HEAVY: 'kinematic-opacity-heavy'
    },
    depth: {
        FARTHEST: 'kinematic-farthest',
        FAR: 'kinematic-far',
        NEAR: 'kinematic-near',
        NEAREST: 'kinematic-nearest'
    },
    shadow: {
        BASE: 'kinematic-shadow',
        BIG_DIFFUSE: 'kinematic-shadow-big-diffuse',
        MEDIUM_DIFFUSE: 'kinematic-shadow-medium-diffuse',
        TRANSPARENT: 'kinematic-shadow-transparent'
    },
    hide: {
        DISPLAY_NONE: 'kinematic-no-display',
        TRANSPARENT: 'kinematic-hide-transparent',
        COLLAPSE_HEIGHT: 'kinematic-collapse-height',
        COLLAPSE_WIDTH: 'kinematic-collapse-width'
    },
    translate: {
        RIGHT: 'kinematic-translate-right',
        TOP: 'kinematic-translate-top',
        LEFT: 'kinematic-translate-left',
        BOTTOM: 'kinematic-translate-bottom',
        RIGHT_FAR: 'kinematic-translate-right-far',
        TOP_FAR: 'kinematic-translate-top-far',
        LEFT_FAR: 'kinematic-translate-left-far',
        BOTTOM_FAR: 'kinematic-translate-bottom-far'
    }
};
},{}],27:[function(require,module,exports){
var æ = require('../async');

function bindAnimationOrTransition(element, callback, computedPropertyName, domEventName) {
    var computedStyle = getComputedStyle(element);
    var duration = computedStyle.getPropertyValue(computedPropertyName);
    if (duration === '' || duration == '0s') {
        setTimeout(callback, 1);
        return;
    }
    var handler = function (event) {
        element.removeEventListener(domEventName, handler);
        callback(event);
    };
    element.addEventListener(domEventName, handler);
}

function onTransitionEnd(element, callback) {
    bindAnimationOrTransition(element, callback, 'transition-duration', whichTransitionEvent());
}

function onAnimationEnd(element, callback) {
    bindAnimationOrTransition(element, callback, 'animation-duration', whichAnimationEvent());
}

function addAnimatedClass(element, cls, callback) {
    onAnimationEnd(element, callback);
    requestAnimationFrame(function () {
        addClass(element, cls);
    });
}

function getClassnamesFromArgs(args) {
    var argsArray = Array.prototype.slice.call(args), classnames = [];

    function filterArr(arr) {
        arr.forEach(function (arg) {
            if (typeof arg === 'string' && arg !== '') {
                classnames.push(arg);
            } else if (Array.isArray(arg)) {
                filterArr(arg);
            }
        });
    }

    filterArr(argsArray);
    return classnames;
}

function addClass(element, cls) {
    manageClass(element, getClassnamesFromArgs(arguments), 'add');
}
function removeClass(element, cls) {
    manageClass(element, getClassnamesFromArgs(arguments), 'remove');
}
/**
 *
 * @param {Element} element
 * @param {string[]} cls
 * @param {string} addOrRemove
 */
function manageClass(element, cls, addOrRemove) {
    if (cls.length > 0) {
        element.classList[addOrRemove].apply(element.classList, cls);
    }
}

function whichAnimationEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'Animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    };

    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}

function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    };

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}


/**
 * @description apply classlist transformations from string
 * @function cls
 * @param {HTMLElement} element
 * @param {string|string[]} operations A string containing classnames. If a minus sign precedes the class names, it is removed
 * @param {function=} [done=undefined] If specified, animation & transition listeners are added.
 * @param {function=} [start=undefined] If specified, called when the animation frame requested is given by the browser.
 * The `done` function is called when both properties are fine
 */
function cls(element, operations, done, start) {
    var add = [], remove = [], ops = Array.isArray(operations) ? operations : operations.split(' ');

    function parseOps(opsArray) {
        opsArray.forEach(function (op) {
            if (Array.isArray(op)) {
                return parseOps(op);
            }
            if (op[0] === '-') {
                remove.push(op.substring(1))
            } else {
                add.push(op)
            }
        });
    }

    parseOps(ops);

    function applyClsChange() {
        addClass(element, add);
        removeClass(element, remove);
    }

    if (typeof done === 'function') {
        æ.parallel([onAnimationEnd, onTransitionEnd], done, element);
        requestAnimationFrame(function () {
            if (typeof start === 'function') {
                start();
            }
            applyClsChange();
        });
    } else {
        applyClsChange();
    }
}
/**
 *
 * @param {object} object
 * @param {boolean=} [inverse]
 * @return {Array}
 */
function everyClassname(object, inverse) {
    var res = [], k;
    for (k in object) {
        if (object.hasOwnProperty(k)) {
            res.push(inverse ? '-' + object[k] : object[k])
        }
    }
    return res;
}


function minus(className) {
    return '-' + className;
}

module.exports = {
    addAnimatedClass: addAnimatedClass,
    onAnimationEnd: onAnimationEnd,
    onTransitionEnd: onTransitionEnd,
    addClass: addClass,
    removeClass: removeClass,
    everyClassname: everyClassname,
    minus: minus,
    cls: cls,
    isFunction: function isFunction(arg) {
        return typeof arg === 'function';
    }
};

},{"../async":24}],28:[function(require,module,exports){
var h = require('./helpers');
var c = require('./classnames');
/**
 * @param selector
 * @param {object=} options
 * @param {string=} options.cls One of hide function constant
 * @return {Function}
 */
module.exports = function hide(selector, options) {
    options = options || {cls: c.hide.TRANSPARENT};
    return function (view, done) {
        view.find(selector).forEach(function (el) {
            h.addClass(el, options.cls)
        });
        done();
    }
};

},{"./classnames":26,"./helpers":27}],29:[function(require,module,exports){
var æ = require('../async');

module.exports = {
    on: function (hookName, handler) {
        this.hooks = this.hooks || {};
        if (!Array.isArray(this.hooks[hookName])) {
            this.hooks[hookName] = [];
        }
        this.hooks[hookName].push(handler);
    },
    hook: function (name, done) {
        var self = this;
        this.hooks = this.hooks || {};
        if (Array.isArray(this.hooks[name]) && this.hooks[name].length > 0) {
            æ.eachSeries(this.hooks[name], function (operation, cb) {
                operation(self, cb)
            }, done);
        } else if (typeof done === 'function') {
            done();
        }
    },
    fhook: function (name) {
        var self = this;
        return function (cb) {
            self.hook(name, cb);
        }
    }
};
},{"../async":24}],30:[function(require,module,exports){
var hide = require('./hide');
var helpers = require('./helpers');
var æ = require('../async');

var kinematics = {
    transitions: require('./transitions'),
    animateCss: require('./animate'),
    hide: hide,
    helpers: helpers,
    classnames: require('./classnames'),
    parallel: function (operations) {
        return function(view, done){
            æ.eachParallel(operations, function(fn, cb){
                fn.call(fn, view, cb);
            }, done)
        }
    }
};
module.exports = kinematics;

},{"../async":24,"./animate":25,"./classnames":26,"./helpers":27,"./hide":28,"./transitions":34}],31:[function(require,module,exports){
var hooks = require('./hooks');
var extend = require('extend');
var h = require('./helpers');
var c = require('./classnames');
var æ = require('../async');

var Slider = function (el, opts) {
    opts = opts || {};
    this.current = opts.current || 0;
    this.prev = opts.prev || 0;
    this.el = el;
    this.slides = [];
    this.createSlides();
    var self = this;
    this.el.querySelector('a.prev').addEventListener('click', function (event) {
        self.previous();
        event.preventDefault();
    });
    this.el.querySelector('a.next').addEventListener('click', function (event) {
        self.next();
        event.preventDefault();
    });

    this.slides.forEach(function (slide, index) {
        if (index !== self.current) {
            h.addClass(slide.el, c.translate.RIGHT);
        }
    })

};
Slider.prototype.createSlides = function () {
    var slideElements = this.el.querySelectorAll('.slides > .slide');
    var self = this;
    slideElements.forEach(function (el) {
        var slide = new Slide(el);
        self.slides.push(slide);
    });
};
Slider.prototype.add = function () {

};

Slider.prototype.next = function (onComplete) {
    this.prev = this.current;
    this.current = (this.current + 1 < this.slides.length) ? this.current + 1 : 0;
    this.update('next', onComplete);
};

Slider.prototype.previous = function (onComplete) {
    this.prev = this.current;
    this.current = (this.current > 0) ? this.current - 1 : this.slides.length - 1;
    this.update('prev', onComplete);
};

Slider.prototype.update = function (direction, onComplete) {
    var prevSlide = this.slides[this.prev].el;
    var currentSlide = this.slides[this.current].el;
    currentSlide.style.display = 'none';
    h.removeClass(currentSlide, h.everyClassname(c.translate));
    h.addClass(currentSlide, (direction === 'prev') ? c.translate.LEFT : c.translate.RIGHT);
    // horrible hack to make the currentSlide actually move to the opposite side
    // setTimeout(function () {
    //     window.requestAnimationFrame(function () {
    console.info('force layout thrashing', getComputedStyle(currentSlide).transform);
    currentSlide.style.display = 'block';
    currentSlide.style.transitionTimingFunction = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    prevSlide.style.transitionTimingFunction = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    h.addClass(prevSlide, c.transition.WITH);
    h.addClass(currentSlide, c.transition.WITH);
    æ.parallel([
        function (parallelCb) {
            setTimeout(function () {
                h.cls(currentSlide, h.everyClassname(c.translate, true), parallelCb)
            }, 200);
        }, function (parallelCb) {
            h.cls(prevSlide, [(direction === 'prev') ? c.translate.RIGHT : c.translate.LEFT], parallelCb)
        }
    ], function () {
        currentSlide.fhook('afterEnter');
        prevSlide.fhook('afterExit');
        h.removeClass(prevSlide, c.transition.WITH);
        h.removeClass(currentSlide, c.transition.WITH);
        if (typeof onComplete === 'function') {
            onComplete()
        }
    });
};

var Slide = function (el) {
    this.el = el;
};

extend(Slide.prototype, hooks);


module.exports = Slider;
},{"../async":24,"./classnames":26,"./helpers":27,"./hooks":29,"extend":2}],32:[function(require,module,exports){
var h = require('../helpers');
var æ = require('../../async');
var c = require('../classnames');
var hide = require('../hide');
var createMask = require('./createMask');

/**
 *
 * @param {object} options
 * @param {View} options.from
 * @param {View} options.to
 * @param {Application} options.app
 * @param {string=} [options.maskOpacity]
 * @param {function} complete
 */
module.exports = function coverTransition(options, complete) {
    var fromView = options.from;
    var toView = options.to;
    var from = fromView.el;
    var app = options.app.el;
    var to = toView.el;
    var mask = createMask();


    mask.style.transitionTimingFunction = 'ease-out';
    æ.series([

        fromView.fhook('beforeExit'), // exec blocking "beforeExit" hooks
        function (cb) {
            fromView.hook('onExit'); // exec NON-blocking "onExit" hooks
            h.addClass(from, c.depth.FARTHEST); //fromView will be overlaped by both mask and toView
            h.addClass(mask, c.depth.FAR, c.opacity.TRANSPARENT);
            app.append(mask); //added to app because it's simpler for transform management
            cb();
        },
        toView.fhook('beforeEnter'), // exec blocking "beforeEnter" hooks
        function (cb) {
            h.addClass(to, [ // that's where we prepare the next view. It is...
                c.translate.RIGHT, // placed on the right
                c.transition.WITH, // animated
                c.depth.NEAREST, // above everything else
                c.shadow.BASE // has a drop shadow
            ]);
            h.removeClass(to, h.everyClassname(c.hide)); // make sure it is visible
            // the mask will opacify for the same amount of time the toView will arrive
            mask.style.transitionDuration = getComputedStyle(to).transitionDuration;
            mask.style.opacity = options.maskOpacity || '0.5'; // this line triggers the transition
            toView.hook('onEnter'); // exec NON-blocking onEnter hook
            h.cls(to, [
                h.minus(c.translate.RIGHT),
                c.shadow.MEDIUM_DIFFUSE // and opacify the drop shadow
            ], cb);
        },
        function (cb) { // transition is fulfilled
            h.removeClass(from, h.everyClassname(c.depth), c.transition.WITH); //reset classes on from element
            h.addClass(from, c.hide.DISPLAY_NONE); // hide that old chum
            h.removeClass(to, [
                c.transition.WITH,
                c.depth.NEAREST,
                c.shadow.MEDIUM_DIFFUSE,
                c.shadow.BASE
            ]); //reset classes on "to" element
            app.removeChild(mask); // remove the mask ? should we null it?
            cb();
        },
        //exec blocking after hooks
        toView.fhook('afterEnter'),
        fromView.fhook('afterExit')
    ], complete)
};
},{"../../async":24,"../classnames":26,"../helpers":27,"../hide":28,"./createMask":33}],33:[function(require,module,exports){
/**
 * @return {Element}
 */
module.exports = function createMask(){
    var el = document.createElement('div');
    var s = el.style;
    s.position = 'absolute';
    s.width = '100%';
    s.height = '100%';
    s.top = '0';
    s.left = '0';
    s.background = 'rgba(0,0,0, 0.5)';
    return el;
};
},{}],34:[function(require,module,exports){
module.exports = {
  cover: require('./cover'),
  reveal: require('./reveal'),
  modal: require('./modal'),
};

},{"./cover":32,"./modal":35,"./reveal":36}],35:[function(require,module,exports){
var æ = require('../../async');
var createMask = require('./createMask');
var c = require('../classnames');
var h = require('../helpers');

module.exports = function modal(options, complete) {
    (options.to) ? show(options, complete) : hide(options, complete);
};
/**
 *
 * @param {object} options
 * @param {View} options.to
 * @param {Application} options.app
 * @param complete
 */
function show(options, complete) {
    var modalView = options.to;
    var app = options.app;
    var el = modalView.el;
    var mask = createMask();

    æ.series([
        modalView.fhook('beforeEnter'),
        function (cb) {
            app.el.appendChild(mask);
            el.style.display = 'none';
            h.addClass(mask, c.depth.NEAR, c.transition.WITH, c.opacity.TRANSPARENT);
            h.addClass(el, c.depth.NEAREST, c.translate.BOTTOM, c.transition.WITH);
            cb();
        },
        function (cb) {
            æ.parallel([
                function (parallelCb) {
                    h.cls(mask, [c.opacity.HEAVY, h.minus(c.opacity.TRANSPARENT)], parallelCb)
                },
                function (parallelCb) {
                    setTimeout(function () {
                        modalView.hook('onEnter');
                        el.style.display = 'block';
                        h.cls(el, [h.minus(c.translate.BOTTOM)], parallelCb);
                    }, 200);
                }
            ], cb)
        },
        function (cb) {
            h.removeClass(el, c.transition.WITH, c.depth.NEAREST);
            app.el.removeChild(mask);
            cb();
        },
        modalView.fhook('afterEnter')
    ], complete);
}

function hide(options, complete) {
    var modalView = options.from;
    var app = options.app;
    var el = modalView.el;
    var mask = createMask();

    æ.series([
        modalView.fhook('beforeExit'),
        function (cb) {
            app.el.appendChild(mask);
            h.addClass(mask, c.depth.NEAR, c.transition.WITH, c.opacity.HEAVY);
            h.addClass(el, c.depth.NEAREST, c.translate.BOTTOM, c.transition.WITH);
            cb();
        },
        function (cb) {
            æ.parallel([
                function (parallelCb) {
                    h.cls(mask, [c.opacity.TRANSPARENT, h.minus(c.opacity.HEAVY)], parallelCb)
                },
                function (parallelCb) {
                    modalView.hook('onExit');
                    h.cls(el, [c.translate.BOTTOM], parallelCb);
                }
            ], cb)
        },
        function (cb) {
            h.cls(el, [c.transition.WITH, c.hide.DISPLAY_NONE]);
            app.el.removeChild(mask);
            cb();
        },
        modalView.fhook('afterExit')
    ], complete);
}
},{"../../async":24,"../classnames":26,"../helpers":27,"./createMask":33}],36:[function(require,module,exports){
var h = require('../helpers');
var æ = require('../../async');

var c = require('../classnames');
var hide = require('../hide');
var createMask = require('./createMask');

module.exports = function (options, complete) {
    var fromView = options.from;
    var toView = options.to;
    var from = fromView.el;
    var to = toView.el;
    var app = options.app.el;
    var mask = createMask();
    var interval;
    æ.series([
        fromView.fhook('beforeExit'),
        function (cb) {
            fromView.hook('onExit');
            //toView is behind
            h.addClass(from, c.depth.NEAREST);
            h.addClass(to, c.depth.FARTHEST);
            //toView is visible
            h.removeClass(to, h.everyClassname(c.hide));
            //add the mask to toView
            app.append(mask);
            h.addClass(mask, c.depth.FAR);
            cb();
        },
        toView.fhook('beforeEnter'),
        function (cb) {
            //fromView will move, and is the nearest view
            //fromView will cast a shadow on toView
            h.addClass(from, [c.transition.WITH, c.depth.NEAREST, c.shadow.BASE, c.shadow.BIG_DIFFUSE]);
            //mask will transition for the same duration that $from will leave
            mask.style.transitionDuration = getComputedStyle(from).transitionDuration;
            mask.style.transitionProperty = 'opacity';
            mask.style.transitionTimingFunction = 'ease-in-out';
            //trigger the onEnter just before starting the transition
            toView.hook('onEnter');
            //transition happens here : oldView move right
            æ.parallel([
                function(parallelCb){
                    h.cls(from, [
                        c.translate.RIGHT,
                        h.minus(c.shadow.BIG_DIFFUSE)
                    ], parallelCb);
                },
                function (parallelCb){
                    h.cls(mask, [c.opacity.TRANSPARENT], parallelCb)
                }
            ], cb);

        },
        function (cb) {
            clearInterval(interval);
            h.removeClass(from,
                c.transition.WITH,
                h.everyClassname(c.depth),
                h.everyClassname(c.shadow)
            );
            h.addClass(from, c.hide.DISPLAY_NONE);
            h.removeClass(to, c.transition.WITH, h.everyClassname(c.depth));
            //remove the mask
            app.removeChild(mask);
            cb();
        },
        toView.fhook('afterEnter'),
        fromView.fhook('afterExit')
    ], complete);
};
},{"../../async":24,"../classnames":26,"../helpers":27,"../hide":28,"./createMask":33}],37:[function(require,module,exports){
var extend = require('extend');
var Handlebars = require('handlebars/runtime');

var hooks = require('../kinematic/hooks');
/**
 * @class View
 * @constructor
 */
var Template = function (name) {
    this.name = name;
    this.hb = Handlebars.templates[name];
};

extend(Template.prototype, hooks);

Template.prototype.create = function (path) {
    var template = this;

    var View = function () {
        var childSelf = this;
        childSelf.path = path;
        childSelf.el = document.createElement('section');
        childSelf.el.classList.add('view');
        childSelf.el.setAttribute('data-path', path);
    };

    View.prototype = this;
    View.prototype.render = function (params) {
        this.el.innerHTML = template.hb(params || this.data);
    };
    View.prototype.empty = function () {
        this.el.innerHTML = '';
    };

    return new View();
};


Template.prototype.addClass = function (classNames) {
    this.el.classList.add.apply(this.el.classList, classNames.split(' '));
};

Template.prototype.removeClass = function (classNames) {
    this.el.classList.remove.apply(this.el.classList, classNames.split(' '));
};

Template.prototype.find = function (selector) {
    return this.el.querySelectorAll(selector);
};

module.exports = Template;
},{"../kinematic/hooks":29,"extend":2,"handlebars/runtime":21}]},{},[22])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL2dlbi90ZW1wbGF0ZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMucnVudGltZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9kZWNvcmF0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvZGVjb3JhdG9ycy9pbmxpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9leGNlcHRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9oZWxwZXJzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9oZWxwZXJzL2lmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvaGVscGVycy9sb2cuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvdXRpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwiYXBwLmpzIiwiYXBwbGljYXRpb24vaW5kZXguanMiLCJhc3luYy9pbmRleC5qcyIsImtpbmVtYXRpYy9hbmltYXRlLmpzIiwia2luZW1hdGljL2NsYXNzbmFtZXMuanMiLCJraW5lbWF0aWMvaGVscGVycy5qcyIsImtpbmVtYXRpYy9oaWRlLmpzIiwia2luZW1hdGljL2hvb2tzLmpzIiwia2luZW1hdGljL2luZGV4LmpzIiwia2luZW1hdGljL3NsaWRlci5qcyIsImtpbmVtYXRpYy90cmFuc2l0aW9ucy9jb3Zlci5qcyIsImtpbmVtYXRpYy90cmFuc2l0aW9ucy9jcmVhdGVNYXNrLmpzIiwia2luZW1hdGljL3RyYW5zaXRpb25zL2luZGV4LmpzIiwia2luZW1hdGljL3RyYW5zaXRpb25zL21vZGFsLmpzIiwia2luZW1hdGljL3RyYW5zaXRpb25zL3JldmVhbC5qcyIsIm5hdmlnYXRpb24vdGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OzhCQ3RGc0IsbUJBQW1COztJQUE3QixJQUFJOzs7OztvQ0FJTywwQkFBMEI7Ozs7bUNBQzNCLHdCQUF3Qjs7OzsrQkFDdkIsb0JBQW9COztJQUEvQixLQUFLOztpQ0FDUSxzQkFBc0I7O0lBQW5DLE9BQU87O29DQUVJLDBCQUEwQjs7Ozs7QUFHakQsU0FBUyxNQUFNLEdBQUc7QUFDaEIsTUFBSSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7QUFFMUMsT0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkIsSUFBRSxDQUFDLFVBQVUsb0NBQWEsQ0FBQztBQUMzQixJQUFFLENBQUMsU0FBUyxtQ0FBWSxDQUFDO0FBQ3pCLElBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLElBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7O0FBRTdDLElBQUUsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ2hCLElBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBUyxJQUFJLEVBQUU7QUFDM0IsV0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztHQUNuQyxDQUFDOztBQUVGLFNBQU8sRUFBRSxDQUFDO0NBQ1g7O0FBRUQsSUFBSSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRXJCLGtDQUFXLElBQUksQ0FBQyxDQUFDOztBQUVqQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDOztxQkFFUixJQUFJOzs7Ozs7Ozs7Ozs7O3FCQ3BDeUIsU0FBUzs7eUJBQy9CLGFBQWE7Ozs7dUJBQ0UsV0FBVzs7MEJBQ1IsY0FBYzs7c0JBQ25DLFVBQVU7Ozs7QUFFdEIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDOztBQUN6QixJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQzs7O0FBRTVCLElBQU0sZ0JBQWdCLEdBQUc7QUFDOUIsR0FBQyxFQUFFLGFBQWE7QUFDaEIsR0FBQyxFQUFFLGVBQWU7QUFDbEIsR0FBQyxFQUFFLGVBQWU7QUFDbEIsR0FBQyxFQUFFLFVBQVU7QUFDYixHQUFDLEVBQUUsa0JBQWtCO0FBQ3JCLEdBQUMsRUFBRSxpQkFBaUI7QUFDcEIsR0FBQyxFQUFFLFVBQVU7Q0FDZCxDQUFDOzs7QUFFRixJQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQzs7QUFFOUIsU0FBUyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUNuRSxNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDN0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQzs7QUFFbkMsa0NBQXVCLElBQUksQ0FBQyxDQUFDO0FBQzdCLHdDQUEwQixJQUFJLENBQUMsQ0FBQztDQUNqQzs7QUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUc7QUFDaEMsYUFBVyxFQUFFLHFCQUFxQjs7QUFFbEMsUUFBTSxxQkFBUTtBQUNkLEtBQUcsRUFBRSxvQkFBTyxHQUFHOztBQUVmLGdCQUFjLEVBQUUsd0JBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNqQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLHlDQUF5QyxDQUFDLENBQUM7T0FBRTtBQUMzRSxvQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVCLE1BQU07QUFDTCxVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN6QjtHQUNGO0FBQ0Qsa0JBQWdCLEVBQUUsMEJBQVMsSUFBSSxFQUFFO0FBQy9CLFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUMzQjs7QUFFRCxpQkFBZSxFQUFFLHlCQUFTLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDdkMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLG9CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0IsTUFBTTtBQUNMLFVBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO0FBQ2xDLGNBQU0seUVBQTBELElBQUksb0JBQWlCLENBQUM7T0FDdkY7QUFDRCxVQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztLQUMvQjtHQUNGO0FBQ0QsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFO0FBQ2hDLFdBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM1Qjs7QUFFRCxtQkFBaUIsRUFBRSwyQkFBUyxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ3BDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxVQUFJLEVBQUUsRUFBRTtBQUFFLGNBQU0sMkJBQWMsNENBQTRDLENBQUMsQ0FBQztPQUFFO0FBQzlFLG9CQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDL0IsTUFBTTtBQUNMLFVBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQzVCO0dBQ0Y7QUFDRCxxQkFBbUIsRUFBRSw2QkFBUyxJQUFJLEVBQUU7QUFDbEMsV0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzlCO0NBQ0YsQ0FBQzs7QUFFSyxJQUFJLEdBQUcsR0FBRyxvQkFBTyxHQUFHLENBQUM7OztRQUVwQixXQUFXO1FBQUUsTUFBTTs7Ozs7Ozs7Ozs7O2dDQzdFQSxxQkFBcUI7Ozs7QUFFekMsU0FBUyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUU7QUFDbEQsZ0NBQWUsUUFBUSxDQUFDLENBQUM7Q0FDMUI7Ozs7Ozs7O3FCQ0pvQixVQUFVOztxQkFFaEIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxVQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRTtBQUMzRSxRQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixRQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUNuQixXQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNwQixTQUFHLEdBQUcsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFOztBQUUvQixZQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO0FBQ2xDLGlCQUFTLENBQUMsUUFBUSxHQUFHLGNBQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUQsWUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQixpQkFBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDOUIsZUFBTyxHQUFHLENBQUM7T0FDWixDQUFDO0tBQ0g7O0FBRUQsU0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQzs7QUFFN0MsV0FBTyxHQUFHLENBQUM7R0FDWixDQUFDLENBQUM7Q0FDSjs7Ozs7Ozs7OztBQ3BCRCxJQUFNLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUVuRyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ2hDLE1BQUksR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRztNQUN0QixJQUFJLFlBQUE7TUFDSixNQUFNLFlBQUEsQ0FBQztBQUNYLE1BQUksR0FBRyxFQUFFO0FBQ1AsUUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ3RCLFVBQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFMUIsV0FBTyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztHQUN4Qzs7QUFFRCxNQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7QUFHMUQsT0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDaEQsUUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztHQUM5Qzs7O0FBR0QsTUFBSSxLQUFLLENBQUMsaUJBQWlCLEVBQUU7QUFDM0IsU0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztHQUMxQzs7QUFFRCxNQUFJO0FBQ0YsUUFBSSxHQUFHLEVBQUU7QUFDUCxVQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7OztBQUl2QixVQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUU7QUFDekIsY0FBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ3BDLGVBQUssRUFBRSxNQUFNO0FBQ2Isb0JBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztPQUNKLE1BQU07QUFDTCxZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztPQUN0QjtLQUNGO0dBQ0YsQ0FBQyxPQUFPLEdBQUcsRUFBRTs7R0FFYjtDQUNGOztBQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7cUJBRW5CLFNBQVM7Ozs7Ozs7Ozs7Ozs7eUNDaERlLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEI7Ozs7Ozs7O3FCQ2hCcUQsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztxQkMvQjhFLFVBQVU7O3lCQUNuRSxjQUFjOzs7O3FCQUVyQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDekQsUUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNaLFlBQU0sMkJBQWMsNkJBQTZCLENBQUMsQ0FBQztLQUNwRDs7QUFFRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRTtRQUNmLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTztRQUN6QixDQUFDLEdBQUcsQ0FBQztRQUNMLEdBQUcsR0FBRyxFQUFFO1FBQ1IsSUFBSSxZQUFBO1FBQ0osV0FBVyxZQUFBLENBQUM7O0FBRWhCLFFBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLGlCQUFXLEdBQUcseUJBQWtCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDakY7O0FBRUQsUUFBSSxrQkFBVyxPQUFPLENBQUMsRUFBRTtBQUFFLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7O0FBRTFELFFBQUksT0FBTyxDQUFDLElBQUksRUFBRTtBQUNoQixVQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOztBQUVELGFBQVMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ3pDLFVBQUksSUFBSSxFQUFFO0FBQ1IsWUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7QUFFbkIsWUFBSSxXQUFXLEVBQUU7QUFDZixjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDeEM7T0FDRjs7QUFFRCxTQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDN0IsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztPQUMvRSxDQUFDLENBQUM7S0FDSjs7QUFFRCxRQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDMUMsVUFBSSxlQUFRLE9BQU8sQ0FBQyxFQUFFO0FBQ3BCLGFBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZDLGNBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRTtBQUNoQix5QkFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7V0FDL0M7U0FDRjtPQUNGLE1BQU07QUFDTCxZQUFJLFFBQVEsWUFBQSxDQUFDOztBQUViLGFBQUssSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFO0FBQ3ZCLGNBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTs7OztBQUkvQixnQkFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLDJCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoQztBQUNELG9CQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ2YsYUFBQyxFQUFFLENBQUM7V0FDTDtTQUNGO0FBQ0QsWUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLHVCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEM7T0FDRjtLQUNGOztBQUVELFFBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNYLFNBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckI7O0FBRUQsV0FBTyxHQUFHLENBQUM7R0FDWixDQUFDLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozt5QkM5RXFCLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLGlDQUFnQztBQUN2RSxRQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztBQUUxQixhQUFPLFNBQVMsQ0FBQztLQUNsQixNQUFNOztBQUVMLFlBQU0sMkJBQWMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZGO0dBQ0YsQ0FBQyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7cUJDWmlDLFVBQVU7O3FCQUU3QixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxVQUFTLFdBQVcsRUFBRSxPQUFPLEVBQUU7QUFDM0QsUUFBSSxrQkFBVyxXQUFXLENBQUMsRUFBRTtBQUFFLGlCQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOzs7OztBQUt0RSxRQUFJLEFBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFdBQVcsSUFBSyxlQUFRLFdBQVcsQ0FBQyxFQUFFO0FBQ3ZFLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QixNQUFNO0FBQ0wsYUFBTyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCO0dBQ0YsQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMvRCxXQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7R0FDdkgsQ0FBQyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7cUJDbkJjLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGtDQUFpQztBQUM5RCxRQUFJLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNsQixPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUMsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzdDLFVBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekI7O0FBRUQsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsUUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7QUFDOUIsV0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQzVCLE1BQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUNyRCxXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUI7QUFDRCxRQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDOztBQUVoQixZQUFRLENBQUMsR0FBRyxNQUFBLENBQVosUUFBUSxFQUFTLElBQUksQ0FBQyxDQUFDO0dBQ3hCLENBQUMsQ0FBQztDQUNKOzs7Ozs7Ozs7O3FCQ2xCYyxVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDckQsV0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQzFCLENBQUMsQ0FBQztDQUNKOzs7Ozs7Ozs7O3FCQ0o4RSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKOzs7Ozs7Ozs7O3FCQ3ZCcUIsU0FBUzs7QUFFL0IsSUFBSSxNQUFNLEdBQUc7QUFDWCxXQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7QUFDN0MsT0FBSyxFQUFFLE1BQU07OztBQUdiLGFBQVcsRUFBRSxxQkFBUyxLQUFLLEVBQUU7QUFDM0IsUUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFDN0IsVUFBSSxRQUFRLEdBQUcsZUFBUSxNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQzlELFVBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtBQUNqQixhQUFLLEdBQUcsUUFBUSxDQUFDO09BQ2xCLE1BQU07QUFDTCxhQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztPQUM3QjtLQUNGOztBQUVELFdBQU8sS0FBSyxDQUFDO0dBQ2Q7OztBQUdELEtBQUcsRUFBRSxhQUFTLEtBQUssRUFBYztBQUMvQixTQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFbEMsUUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUFFO0FBQy9FLFVBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsVUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTs7QUFDcEIsY0FBTSxHQUFHLEtBQUssQ0FBQztPQUNoQjs7d0NBUG1CLE9BQU87QUFBUCxlQUFPOzs7QUFRM0IsYUFBTyxDQUFDLE1BQU0sT0FBQyxDQUFmLE9BQU8sRUFBWSxPQUFPLENBQUMsQ0FBQztLQUM3QjtHQUNGO0NBQ0YsQ0FBQzs7cUJBRWEsTUFBTTs7Ozs7Ozs7Ozs7cUJDakNOLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ1pzQixTQUFTOztJQUFwQixLQUFLOzt5QkFDSyxhQUFhOzs7O29CQUM4QixRQUFROztBQUVsRSxTQUFTLGFBQWEsQ0FBQyxZQUFZLEVBQUU7QUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDdkQsZUFBZSwwQkFBb0IsQ0FBQzs7QUFFMUMsTUFBSSxnQkFBZ0IsS0FBSyxlQUFlLEVBQUU7QUFDeEMsUUFBSSxnQkFBZ0IsR0FBRyxlQUFlLEVBQUU7QUFDdEMsVUFBTSxlQUFlLEdBQUcsdUJBQWlCLGVBQWUsQ0FBQztVQUNuRCxnQkFBZ0IsR0FBRyx1QkFBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUM1RCxZQUFNLDJCQUFjLHlGQUF5RixHQUN2RyxxREFBcUQsR0FBRyxlQUFlLEdBQUcsbURBQW1ELEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDaEssTUFBTTs7QUFFTCxZQUFNLDJCQUFjLHdGQUF3RixHQUN0RyxpREFBaUQsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDbkY7R0FDRjtDQUNGOztBQUVNLFNBQVMsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7O0FBRTFDLE1BQUksQ0FBQyxHQUFHLEVBQUU7QUFDUixVQUFNLDJCQUFjLG1DQUFtQyxDQUFDLENBQUM7R0FDMUQ7QUFDRCxNQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtBQUN2QyxVQUFNLDJCQUFjLDJCQUEyQixHQUFHLE9BQU8sWUFBWSxDQUFDLENBQUM7R0FDeEU7O0FBRUQsY0FBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQzs7OztBQUlsRCxLQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTVDLFdBQVMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDdkQsUUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ2hCLGFBQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xELFVBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGVBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO09BQ3ZCO0tBQ0Y7O0FBRUQsV0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RSxRQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRXhFLFFBQUksTUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekYsWUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztLQUMzRDtBQUNELFFBQUksTUFBTSxJQUFJLElBQUksRUFBRTtBQUNsQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDbEIsWUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLGNBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDNUIsa0JBQU07V0FDUDs7QUFFRCxlQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7QUFDRCxjQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUMzQjtBQUNELGFBQU8sTUFBTSxDQUFDO0tBQ2YsTUFBTTtBQUNMLFlBQU0sMkJBQWMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsMERBQTBELENBQUMsQ0FBQztLQUNqSDtHQUNGOzs7QUFHRCxNQUFJLFNBQVMsR0FBRztBQUNkLFVBQU0sRUFBRSxnQkFBUyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQzFCLFVBQUksRUFBRSxJQUFJLElBQUksR0FBRyxDQUFBLEFBQUMsRUFBRTtBQUNsQixjQUFNLDJCQUFjLEdBQUcsR0FBRyxJQUFJLEdBQUcsbUJBQW1CLEdBQUcsR0FBRyxDQUFDLENBQUM7T0FDN0Q7QUFDRCxhQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQjtBQUNELFVBQU0sRUFBRSxnQkFBUyxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQzdCLFVBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDMUIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1QixZQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO0FBQ3hDLGlCQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtPQUNGO0tBQ0Y7QUFDRCxVQUFNLEVBQUUsZ0JBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUNqQyxhQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztLQUN4RTs7QUFFRCxvQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO0FBQ3hDLGlCQUFhLEVBQUUsb0JBQW9COztBQUVuQyxNQUFFLEVBQUUsWUFBUyxDQUFDLEVBQUU7QUFDZCxVQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsU0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLGFBQU8sR0FBRyxDQUFDO0tBQ1o7O0FBRUQsWUFBUSxFQUFFLEVBQUU7QUFDWixXQUFPLEVBQUUsaUJBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO0FBQ25FLFVBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQ2pDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLFVBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxXQUFXLElBQUksbUJBQW1CLEVBQUU7QUFDeEQsc0JBQWMsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztPQUMzRixNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDMUIsc0JBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzlEO0FBQ0QsYUFBTyxjQUFjLENBQUM7S0FDdkI7O0FBRUQsUUFBSSxFQUFFLGNBQVMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUMzQixhQUFPLEtBQUssSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUN2QixhQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztPQUN2QjtBQUNELGFBQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDRCxTQUFLLEVBQUUsZUFBUyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQzdCLFVBQUksR0FBRyxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUM7O0FBRTFCLFVBQUksS0FBSyxJQUFJLE1BQU0sSUFBSyxLQUFLLEtBQUssTUFBTSxBQUFDLEVBQUU7QUFDekMsV0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztPQUN2Qzs7QUFFRCxhQUFPLEdBQUcsQ0FBQztLQUNaOztBQUVELGVBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7QUFFNUIsUUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSTtBQUNqQixnQkFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRO0dBQ3BDLENBQUM7O0FBRUYsV0FBUyxHQUFHLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDaEMsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzs7QUFFeEIsT0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQzVDLFVBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0FBQ0QsUUFBSSxNQUFNLFlBQUE7UUFDTixXQUFXLEdBQUcsWUFBWSxDQUFDLGNBQWMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO0FBQy9ELFFBQUksWUFBWSxDQUFDLFNBQVMsRUFBRTtBQUMxQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDbEIsY0FBTSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO09BQzNGLE1BQU07QUFDTCxjQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUNwQjtLQUNGOztBQUVELGFBQVMsSUFBSSxDQUFDLE9BQU8sZ0JBQWU7QUFDbEMsYUFBTyxFQUFFLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3JIO0FBQ0QsUUFBSSxHQUFHLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdEcsV0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQy9CO0FBQ0QsS0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRWpCLEtBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxPQUFPLEVBQUU7QUFDN0IsUUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDcEIsZUFBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVsRSxVQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUU7QUFDM0IsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUN0RTtBQUNELFVBQUksWUFBWSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsYUFBYSxFQUFFO0FBQ3pELGlCQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDNUU7S0FDRixNQUFNO0FBQ0wsZUFBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3BDLGVBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUN0QyxlQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FDM0M7R0FDRixDQUFDOztBQUVGLEtBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbEQsUUFBSSxZQUFZLENBQUMsY0FBYyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQy9DLFlBQU0sMkJBQWMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztBQUNELFFBQUksWUFBWSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNyQyxZQUFNLDJCQUFjLHlCQUF5QixDQUFDLENBQUM7S0FDaEQ7O0FBRUQsV0FBTyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDakYsQ0FBQztBQUNGLFNBQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRU0sU0FBUyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDNUYsV0FBUyxJQUFJLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDakMsUUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFFBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLEtBQUssU0FBUyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUNoRyxtQkFBYSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFDOztBQUVELFdBQU8sRUFBRSxDQUFDLFNBQVMsRUFDZixPQUFPLEVBQ1AsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxFQUNyQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksRUFDcEIsV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFDeEQsYUFBYSxDQUFDLENBQUM7R0FDcEI7O0FBRUQsTUFBSSxHQUFHLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7O0FBRXpFLE1BQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLE1BQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLE1BQUksQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxDQUFDO0FBQzVDLFNBQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRU0sU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDeEQsTUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNaLFFBQUksT0FBTyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtBQUNyQyxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN6QyxNQUFNO0FBQ0wsYUFBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFDO0dBQ0YsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7O0FBRXpDLFdBQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFdBQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQ3JDO0FBQ0QsU0FBTyxPQUFPLENBQUM7Q0FDaEI7O0FBRU0sU0FBUyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRXZELE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzFFLFNBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLE1BQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLFdBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7R0FDdkU7O0FBRUQsTUFBSSxZQUFZLFlBQUEsQ0FBQztBQUNqQixNQUFJLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7O0FBQ3JDLGFBQU8sQ0FBQyxJQUFJLEdBQUcsa0JBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV6QyxVQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQ3BCLGtCQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLG1CQUFtQixDQUFDLE9BQU8sRUFBZ0I7WUFBZCxPQUFPLHlEQUFHLEVBQUU7Ozs7QUFJL0YsZUFBTyxDQUFDLElBQUksR0FBRyxrQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsZUFBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztBQUNwRCxlQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FDN0IsQ0FBQztBQUNGLFVBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtBQUNmLGVBQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDcEU7O0dBQ0Y7O0FBRUQsTUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLFlBQVksRUFBRTtBQUN6QyxXQUFPLEdBQUcsWUFBWSxDQUFDO0dBQ3hCOztBQUVELE1BQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUN6QixVQUFNLDJCQUFjLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDLENBQUM7R0FDNUUsTUFBTSxJQUFJLE9BQU8sWUFBWSxRQUFRLEVBQUU7QUFDdEMsV0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ2xDO0NBQ0Y7O0FBRU0sU0FBUyxJQUFJLEdBQUc7QUFBRSxTQUFPLEVBQUUsQ0FBQztDQUFFOztBQUVyQyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQy9CLE1BQUksQ0FBQyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUM5QixRQUFJLEdBQUcsSUFBSSxHQUFHLGtCQUFZLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNyQyxRQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztHQUNyQjtBQUNELFNBQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUN6RSxNQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU7QUFDaEIsUUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVGLFNBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYjs7Ozs7Ozs7QUN2UkQsU0FBUyxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQzFCLE1BQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0NBQ3RCOztBQUVELFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVc7QUFDdkUsU0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztDQUN6QixDQUFDOztxQkFFYSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNUekIsSUFBTSxNQUFNLEdBQUc7QUFDYixLQUFHLEVBQUUsT0FBTztBQUNaLEtBQUcsRUFBRSxNQUFNO0FBQ1gsS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtDQUNkLENBQUM7O0FBRUYsSUFBTSxRQUFRLEdBQUcsWUFBWTtJQUN2QixRQUFRLEdBQUcsV0FBVyxDQUFDOztBQUU3QixTQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDdkIsU0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDcEI7O0FBRU0sU0FBUyxNQUFNLENBQUMsR0FBRyxvQkFBbUI7QUFDM0MsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekMsU0FBSyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDNUIsVUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQzNELFdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7T0FDOUI7S0FDRjtHQUNGOztBQUVELFNBQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRU0sSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7Ozs7OztBQUtoRCxJQUFJLFVBQVUsR0FBRyxvQkFBUyxLQUFLLEVBQUU7QUFDL0IsU0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7Q0FDcEMsQ0FBQzs7O0FBR0YsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbkIsVUFJTSxVQUFVLEdBSmhCLFVBQVUsR0FBRyxVQUFTLEtBQUssRUFBRTtBQUMzQixXQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixDQUFDO0dBQ3BGLENBQUM7Q0FDSDtRQUNPLFVBQVUsR0FBVixVQUFVOzs7OztBQUlYLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksVUFBUyxLQUFLLEVBQUU7QUFDdEQsU0FBTyxBQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Q0FDakcsQ0FBQzs7Ozs7QUFHSyxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3BDLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDaEQsUUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO0FBQ3RCLGFBQU8sQ0FBQyxDQUFDO0tBQ1Y7R0FDRjtBQUNELFNBQU8sQ0FBQyxDQUFDLENBQUM7Q0FDWDs7QUFHTSxTQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtBQUN2QyxNQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTs7QUFFOUIsUUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUMzQixhQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN4QixNQUFNLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtBQUN6QixhQUFPLEVBQUUsQ0FBQztLQUNYLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNsQixhQUFPLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0FBS0QsVUFBTSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7R0FDdEI7O0FBRUQsTUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFBRSxXQUFPLE1BQU0sQ0FBQztHQUFFO0FBQzlDLFNBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7Q0FDN0M7O0FBRU0sU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFO0FBQzdCLE1BQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtBQUN6QixXQUFPLElBQUksQ0FBQztHQUNiLE1BQU0sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDL0MsV0FBTyxJQUFJLENBQUM7R0FDYixNQUFNO0FBQ0wsV0FBTyxLQUFLLENBQUM7R0FDZDtDQUNGOztBQUVNLFNBQVMsV0FBVyxDQUFDLE1BQU0sRUFBRTtBQUNsQyxNQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLE9BQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ3ZCLFNBQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxRQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNsQixTQUFPLE1BQU0sQ0FBQztDQUNmOztBQUVNLFNBQVMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRTtBQUNqRCxTQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFBLEdBQUksRUFBRSxDQUFDO0NBQ3BEOzs7O0FDM0dEO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKTsgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMudGVtcGxhdGUsIHRlbXBsYXRlcyA9IEhhbmRsZWJhcnMudGVtcGxhdGVzID0gSGFuZGxlYmFycy50ZW1wbGF0ZXMgfHwge307XG50ZW1wbGF0ZXNbJ2ZyaWVuZHMnXSA9IHRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXI7XG5cbiAgcmV0dXJuIFwiPGhlYWRlcj5cXG4gIDxuYXY+XFxuICAgIDxhIGhyZWY9XFxcIiMvcHJvZmlsZS9cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFycm93XFxcIj5cXG4gICAgICAgIDxzdmcgc3R5bGU9XFxcImhlaWdodDogMWVtOyB3aWR0aDogMWVtXFxcIiB2aWV3Qm94PVxcXCIwIDAgNjQgNjRcXFwiPlxcbiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XFxcIjUyIDguMDgxIDQzLjkxOSAwIDEyIDMxLjkxOSAxMi4wODEgMzIgMTIgMzIuMDgxIDQzLjkxOSA2NCA1MiA1NS45MTkgMjguMDgxIDMyIDUyIDguMDgxXFxcIj5cXG4gICAgICAgICAgPC9wb2x5Z29uPlxcbiAgICAgICAgPC9zdmc+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvYT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic3BhY2VyXFxcIj48L2Rpdj5cXG4gIDwvbmF2PlxcbiAgPGgxPkZyaWVuZHM8L2gxPlxcbjwvaGVhZGVyPlxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJhclxcXCIgc3R5bGU9XFxcIndpZHRoOiAyOCVcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibGVnZW5kXFxcIj5cXG4gICAgICAxLzUgc2VtYWluZXMgZGUgY29ubmV4aW9uXFxuICAgIDwvZGl2PlxcbiAgICA8cD5Db25zdWx0ZXIgbGUgc2l0ZSBjaGFxdWUgc2VtYWluZSB2b3VzIHJhcHBvcnRlIGRlcyBwb2ludHMsIGV0IG3Dqm1lIHVuIGJvbnVzICE8L3A+XFxuICAgIDwhLS0gQ0hFQ0tMSVNUIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjZW50ZXJlZFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tsaXN0XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJvcmRlclxcXCIgc3R5bGU9XFxcImFuaW1hdGlvbi1kdXJhdGlvbjogMnNcXFwiPjwvZGl2PlxcbiAgICAgICAgPHVsPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImNoZWNrZWRcXFwiPlxcbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cXFwiMCAwIDEyMCAxMjBcXFwiIGNsYXNzPVxcXCJjaGVja1xcXCI+XFxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI2MFxcXCIgY3k9XFxcIjYwXFxcIiByPVxcXCI1MFxcXCI+PC9jaXJjbGU+XFxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVxcXCI4Ni44NzUgNDQuMDYzIDUzLjc1IDc2LjU2MyAzNy4xNTcgNjAuODQzXFxcIj48L3BvbHlsaW5lPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbFxcXCI+XFxuICAgICAgICAgICAgICA8cD5TZW1haW5lIDE8L3A+XFxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzcz1cXFwicmV3YXJkXFxcIj4rMTA8L3NwYW4+PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImNoZWNrZWQgYWN0aXZlXFxcIj5cXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxMjAgMTIwXFxcIiBjbGFzcz1cXFwiY2hlY2tcXFwiPlxcbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNjBcXFwiIGN5PVxcXCI2MFxcXCIgcj1cXFwiNTBcXFwiPjwvY2lyY2xlPlxcbiAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cXFwiODYuODc1IDQ0LjA2MyA1My43NSA3Ni41NjMgMzcuMTU3IDYwLjg0M1xcXCI+PC9wb2x5bGluZT5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWxcXFwiPlxcbiAgICAgICAgICAgICAgPHA+U2VtYWluZSAyPC9wPlxcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3M9XFxcInJld2FyZFxcXCI+KzE1PC9zcGFuPjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cXFwiMCAwIDEyMCAxMjBcXFwiIGNsYXNzPVxcXCJjaGVja1xcXCI+XFxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI2MFxcXCIgY3k9XFxcIjYwXFxcIiByPVxcXCI1MFxcXCI+PC9jaXJjbGU+XFxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVxcXCI4Ni44NzUgNDQuMDYzIDUzLjc1IDc2LjU2MyAzNy4xNTcgNjAuODQzXFxcIj48L3BvbHlsaW5lPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbFxcXCI+XFxuICAgICAgICAgICAgICA8cD5TZW1haW5lIDM8L3A+XFxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzcz1cXFwicmV3YXJkXFxcIj4rMTU8L3NwYW4+PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTIwIDEyMFxcXCIgY2xhc3M9XFxcImNoZWNrXFxcIj5cXG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjYwXFxcIiBjeT1cXFwiNjBcXFwiIHI9XFxcIjUwXFxcIj48L2NpcmNsZT5cXG4gICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XFxcIjg2Ljg3NSA0NC4wNjMgNTMuNzUgNzYuNTYzIDM3LjE1NyA2MC44NDNcXFwiPjwvcG9seWxpbmU+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsXFxcIj5cXG4gICAgICAgICAgICAgIDxwPlNlbWFpbmUgNDwvcD5cXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzPVxcXCJyZXdhcmRcXFwiPisxNTwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxMjAgMTIwXFxcIiBjbGFzcz1cXFwiY2hlY2tcXFwiPlxcbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNjBcXFwiIGN5PVxcXCI2MFxcXCIgcj1cXFwiNTBcXFwiPjwvY2lyY2xlPlxcbiAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cXFwiODYuODc1IDQ0LjA2MyA1My43NSA3Ni41NjMgMzcuMTU3IDYwLjg0M1xcXCI+PC9wb2x5bGluZT5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWxcXFwiPlxcbiAgICAgICAgICAgICAgPHA+U2VtYWluZSA1PC9wPlxcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3M9XFxcInJld2FyZFxcXCI+bGl2cmFpc29uIGdyYXR1aXRlICE8L3NwYW4+PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xudGVtcGxhdGVzWydtb2RhbCddID0gdGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiY29udGVudCBtb2RhbFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgZ3JlZXRpbmdcXFwiPlxcbiAgICAgIDxoMT5TYWx1dCBMYXVyYSAhPC9oMT5cXG4gICAgICA8cD5UdSBhcyBkZXMgbWlzc2lvbnMgZW4gY291cnM8L3A+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBmdWxsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2xpZGVyXFxcIj5cXG4gICAgICA8YSBocmVmPVxcXCIjcHJldlxcXCIgY2xhc3M9XFxcImFycm93IHByZXZcXFwiPlxcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMzZcXFwiPlxcbiAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVxcXCIxMC4zNzkgMzEuMTE1IDUuMzIgMTcuOTc5IDEwLjUgNC44NDRcXFwiPjwvcG9seWxpbmU+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICA8L2E+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2xpZGVzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNsaWRlXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDQgMjA0XFxcIiBjbGFzcz1cXFwiY2lyY2xlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIGZpbGw9XFxcInJnYmEoMCwwLDAsMClcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNIDEwMiwgMTAyXFxuICAgICAgICAgICAgbSAtMTAwLCAwXFxuICAgICAgICAgICAgYSAxMDAsMTAwIDAgMSwwIDIwMCwwXFxuICAgICAgICAgICAgYSAxMDAsMTAwIDAgMSwwIC0yMDAsMFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvcGF0aD5cXG4gICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uL2Fzc2V0cy9pY29uczgtc2VhcmNoLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxldmVsXFxcIj4yPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGg0PlBhc3Npb25uw6k8L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzc1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFyXFxcIiBzdHlsZT1cXFwid2lkdGg6IDIwJVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWdlbmRcXFwiPlxcbiAgICAgICAgICAgIFBhc3NlciAyIGNvbW1hbmRlcyBzdXBwbMOpbWVudGFpcmVzXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzbGlkZVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhZGdlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjA0IDIwNFxcXCIgY2xhc3M9XFxcImNpcmNsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBmaWxsPVxcXCJyZ2JhKDAsMCwwLDApXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTSAxMDIsIDEwMlxcbiAgICAgICAgICAgIG0gLTEwMCwgMFxcbiAgICAgICAgICAgIGEgMTAwLDEwMCAwIDEsMCAyMDAsMFxcbiAgICAgICAgICAgIGEgMTAwLDEwMCAwIDEsMCAtMjAwLDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8L3BhdGg+XFxuICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi9hc3NldHMvaWNvbnM4LXNlYXJjaC5wbmdcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsZXZlbFxcXCI+Mzwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxoND5FeHBsb3JhdGV1cjwvaDQ+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjAlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlZ2VuZFxcXCI+XFxuICAgICAgICAgICAgVm9pciA1IGZpY2hlcyBwcm9kdWl0c1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxhIGhyZWY9XFxcIiNuZXh0XFxcIiBjbGFzcz1cXFwiYXJyb3cgbmV4dFxcXCI+XFxuICAgICAgICA8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAzNlxcXCI+XFxuICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XFxcIjUuMzIgNC44NDQgMTAuNSAxNy45NzkgNS40NDEgMzEuMTE1XFxcIj48L3BvbHlsaW5lPlxcbiAgICAgICAgPC9zdmc+XFxuICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGFjdGlvblxcXCI+XFxuICAgIDxidXR0b24gb25jbGljaz1cXFwiYXBwLmhpZGVNb2RhbCgpXFxcIiBjbGFzcz1cXFwiYnRuXFxcIj5Nb24gY29tcHRlPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xudGVtcGxhdGVzWydwcm9maWxlJ10gPSB0ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiBcIjxoZWFkZXI+XFxuICA8ZGl2IGNsYXNzPVxcXCJwb2ludHNcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidmFsdWVcXFwiPjEgMjU3PC9zcGFuPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJpbmZvXFxcIj5pPC9idXR0b24+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ1bml0XFxcIj5wb2ludHM8L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxkaXYgc3R5bGU9XFxcInBvc2l0aW9uOiByZWxhdGl2ZTsgXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJhclxcXCIgc3R5bGU9XFxcIndpZHRoOiA1NSU7XFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjYWxlXFxcIj5cXG4gICAgICA8c3BhbiBzdHlsZT1cXFwibGVmdDogMDtcXFwiPjUwMDwvc3Bhbj5cXG4gICAgICA8c3BhbiBzdHlsZT1cXFwibGVmdDogNTAlXFxcIj4xMDAwPC9zcGFuPlxcbiAgICAgIDxzcGFuIHN0eWxlPVxcXCJsZWZ0OiAxMDAlXFxcIj4xNTAwPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIj7DiWNoYW5nZXI8L2J1dHRvbj5cXG48L2hlYWRlcj5cXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBmdWxsIGJhZGdlc1xcXCI+XFxuICAgIDxoMj5OaXZlYXV4PC9oMj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDQgMjA0XFxcIiBjbGFzcz1cXFwiY2lyY2xlXFxcIj5cXG4gICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIGZpbGw9XFxcInJnYmEoMCwwLDAsMClcXFwiXFxuICAgICAgICAgICAgICBkPVxcXCJNIDEwMiwgMTAyXFxuICAgICAgICAgICAgbSAtMTAwLCAwXFxuICAgICAgICAgICAgYSAxMDAsMTAwIDAgMSwwIDIwMCwwXFxuICAgICAgICAgICAgYSAxMDAsMTAwIDAgMSwwIC0yMDAsMFxcXCI+XFxuICAgICAgICAgIDwvcGF0aD5cXG4gICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uL2Fzc2V0cy9pY29uczgtc2VhcmNoLnBuZ1xcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsXFxcIj5cXG4gICAgICAgIDxoMz5DdXJpZXV4PC9oMz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzIG1pbmlcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MCVcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWdlbmRcXFwiPlxcbiAgICAgICAgICAxNS8yMCBmaWNoZXMgcHJvZHVpdHMgY29uc3VsdMOpZXNcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFjdGlvblxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjL2ZyaWVuZHNcXFwiPlxcbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAzNlxcXCI+XFxuICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cXFwiNS4zMiA0Ljg0NCAxMC41IDE3Ljk3OSA1LjQ0MSAzMS4xMTVcXFwiPjwvcG9seWxpbmU+XFxuICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGgyPk9uZS1zaG90PC9oMj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDQgMjA0XFxcIiBjbGFzcz1cXFwiY2lyY2xlXFxcIj5cXG4gICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIGZpbGw9XFxcInJnYmEoMCwwLDAsMClcXFwiXFxuICAgICAgICAgICAgICBkPVxcXCJNIDEwMiwgMTAyXFxuICAgICAgICAgICAgbSAtMTAwLCAwXFxuICAgICAgICAgICAgYSAxMDAsMTAwIDAgMSwwIDIwMCwwXFxuICAgICAgICAgICAgYSAxMDAsMTAwIDAgMSwwIC0yMDAsMFxcXCI+XFxuICAgICAgICAgIDwvcGF0aD5cXG4gICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uL2Fzc2V0cy9pY29uczgtc2VhcmNoLnBuZ1xcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsXFxcIj5cXG4gICAgICAgIDxoMz5GYW48L2gzPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVnZW5kXFxcIj5cXG4gICAgICAgICAgTGlrZSB1cyBvbiBGYWNlYm9vayFcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9pbnRzXFxcIj4rIDMwPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYWN0aW9uXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBzbWFsbFxcXCI+XFxuICAgICAgICAgIExpa2VcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDQgMjA0XFxcIiBjbGFzcz1cXFwiY2lyY2xlXFxcIj5cXG4gICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIGZpbGw9XFxcInJnYmEoMCwwLDAsMClcXFwiXFxuICAgICAgICAgICAgICBkPVxcXCJNIDEwMiwgMTAyXFxuICAgICAgICAgICAgbSAtMTAwLCAwXFxuICAgICAgICAgICAgYSAxMDAsMTAwIDAgMSwwIDIwMCwwXFxuICAgICAgICAgICAgYSAxMDAsMTAwIDAgMSwwIC0yMDAsMFxcXCI+XFxuICAgICAgICAgIDwvcGF0aD5cXG4gICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uL2Fzc2V0cy9pY29uczgtc2VhcmNoLnBuZ1xcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsXFxcIj5cXG4gICAgICAgIDxoMz5DdXJpZXV4PC9oMz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzIG1pbmlcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MCVcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWdlbmRcXFwiPlxcbiAgICAgICAgICAxNS8yMCBmaWNoZXMgcHJvZHVpdHMgY29uc3VsdMOpZXNcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPHA+PGEgaHJlZj1cXFwiIy9wcm9maWxlL1wiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIi9mcmllbmRzXFxcIj5GcmllbmRzPC9hPjwvcD5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBvbmNsaWNrPVxcXCJhcHAuc2hvd01vZGFsKClcXFwiPk1vbiBDb21wdGU8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIHNtYWxsXFxcIj5CdXR0b24gc21hbGw8L2J1dHRvbj5cXG5cXG4gICAgPGgyPlByb2dyZXNzYmFyPC9oMj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJhclxcXCIgc3R5bGU9XFxcIndpZHRoOjgwJVxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8aDI+UHJvZ3Jlc3NiYXIgbWluaTwvaDI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzIG1pbmlcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJhclxcXCIgc3R5bGU9XFxcIndpZHRoOjgwJVxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuXFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KGFycik7XG5cdH1cblxuXHRyZXR1cm4gdG9TdHIuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuXHRpZiAoIW9iaiB8fCB0b1N0ci5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0dmFyIGhhc0lzUHJvdG90eXBlT2YgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuXHQvLyBOb3Qgb3duIGNvbnN0cnVjdG9yIHByb3BlcnR5IG11c3QgYmUgT2JqZWN0XG5cdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gT3duIHByb3BlcnRpZXMgYXJlIGVudW1lcmF0ZWQgZmlyc3RseSwgc28gdG8gc3BlZWQgdXAsXG5cdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBvYmopIHsgLyoqLyB9XG5cblx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnIHx8IGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmU7XG5cdHZhciB0YXJnZXQgPSBhcmd1bWVudHNbMF07XG5cdHZhciBpID0gMTtcblx0dmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdHZhciBkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG5cdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdGkgPSAyO1xuXHR9XG5cdGlmICh0YXJnZXQgPT0gbnVsbCB8fCAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykpIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdGZvciAoOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzW2ldO1xuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAob3B0aW9ucyAhPSBudWxsKSB7XG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRzcmMgPSB0YXJnZXRbbmFtZV07XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBjb3B5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuIiwiaW1wb3J0ICogYXMgYmFzZSBmcm9tICcuL2hhbmRsZWJhcnMvYmFzZSc7XG5cbi8vIEVhY2ggb2YgdGhlc2UgYXVnbWVudCB0aGUgSGFuZGxlYmFycyBvYmplY3QuIE5vIG5lZWQgdG8gc2V0dXAgaGVyZS5cbi8vIChUaGlzIGlzIGRvbmUgdG8gZWFzaWx5IHNoYXJlIGNvZGUgYmV0d2VlbiBjb21tb25qcyBhbmQgYnJvd3NlIGVudnMpXG5pbXBvcnQgU2FmZVN0cmluZyBmcm9tICcuL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmcnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2hhbmRsZWJhcnMvZXhjZXB0aW9uJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vaGFuZGxlYmFycy91dGlscyc7XG5pbXBvcnQgKiBhcyBydW50aW1lIGZyb20gJy4vaGFuZGxlYmFycy9ydW50aW1lJztcblxuaW1wb3J0IG5vQ29uZmxpY3QgZnJvbSAnLi9oYW5kbGViYXJzL25vLWNvbmZsaWN0JztcblxuLy8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBoYiA9IG5ldyBiYXNlLkhhbmRsZWJhcnNFbnZpcm9ubWVudCgpO1xuXG4gIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG4gIGhiLlNhZmVTdHJpbmcgPSBTYWZlU3RyaW5nO1xuICBoYi5FeGNlcHRpb24gPSBFeGNlcHRpb247XG4gIGhiLlV0aWxzID0gVXRpbHM7XG4gIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIGhiLlZNID0gcnVudGltZTtcbiAgaGIudGVtcGxhdGUgPSBmdW5jdGlvbihzcGVjKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWUudGVtcGxhdGUoc3BlYywgaGIpO1xuICB9O1xuXG4gIHJldHVybiBoYjtcbn1cblxubGV0IGluc3QgPSBjcmVhdGUoKTtcbmluc3QuY3JlYXRlID0gY3JlYXRlO1xuXG5ub0NvbmZsaWN0KGluc3QpO1xuXG5pbnN0WydkZWZhdWx0J10gPSBpbnN0O1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0O1xuIiwiaW1wb3J0IHtjcmVhdGVGcmFtZSwgZXh0ZW5kLCB0b1N0cmluZ30gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uJztcbmltcG9ydCB7cmVnaXN0ZXJEZWZhdWx0SGVscGVyc30gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7cmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9yc30gZnJvbSAnLi9kZWNvcmF0b3JzJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9ICc0LjAuMTEnO1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAnXG59O1xuXG5jb25zdCBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nZ2VyLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oYEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIiR7bmFtZX1cIiBhcyB1bmRlZmluZWRgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBsb2cgPSBsb2dnZXIubG9nO1xuXG5leHBvcnQge2NyZWF0ZUZyYW1lLCBsb2dnZXJ9O1xuIiwiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiIsImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iLCJcbmNvbnN0IGVycm9yUHJvcHMgPSBbJ2Rlc2NyaXB0aW9uJywgJ2ZpbGVOYW1lJywgJ2xpbmVOdW1iZXInLCAnbWVzc2FnZScsICduYW1lJywgJ251bWJlcicsICdzdGFjayddO1xuXG5mdW5jdGlvbiBFeGNlcHRpb24obWVzc2FnZSwgbm9kZSkge1xuICBsZXQgbG9jID0gbm9kZSAmJiBub2RlLmxvYyxcbiAgICAgIGxpbmUsXG4gICAgICBjb2x1bW47XG4gIGlmIChsb2MpIHtcbiAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG4gICAgY29sdW1uID0gbG9jLnN0YXJ0LmNvbHVtbjtcblxuICAgIG1lc3NhZ2UgKz0gJyAtICcgKyBsaW5lICsgJzonICsgY29sdW1uO1xuICB9XG5cbiAgbGV0IHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcbiAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEV4Y2VwdGlvbik7XG4gIH1cblxuICB0cnkge1xuICAgIGlmIChsb2MpIHtcbiAgICAgIHRoaXMubGluZU51bWJlciA9IGxpbmU7XG5cbiAgICAgIC8vIFdvcmsgYXJvdW5kIGlzc3VlIHVuZGVyIHNhZmFyaSB3aGVyZSB3ZSBjYW4ndCBkaXJlY3RseSBzZXQgdGhlIGNvbHVtbiB2YWx1ZVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2x1bW4nLCB7XG4gICAgICAgICAgdmFsdWU6IGNvbHVtbixcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChub3ApIHtcbiAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb247XG4iLCJpbXBvcnQgcmVnaXN0ZXJCbG9ja0hlbHBlck1pc3NpbmcgZnJvbSAnLi9oZWxwZXJzL2Jsb2NrLWhlbHBlci1taXNzaW5nJztcbmltcG9ydCByZWdpc3RlckVhY2ggZnJvbSAnLi9oZWxwZXJzL2VhY2gnO1xuaW1wb3J0IHJlZ2lzdGVySGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVySWYgZnJvbSAnLi9oZWxwZXJzL2lmJztcbmltcG9ydCByZWdpc3RlckxvZyBmcm9tICcuL2hlbHBlcnMvbG9nJztcbmltcG9ydCByZWdpc3Rlckxvb2t1cCBmcm9tICcuL2hlbHBlcnMvbG9va3VwJztcbmltcG9ydCByZWdpc3RlcldpdGggZnJvbSAnLi9oZWxwZXJzL3dpdGgnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0SGVscGVycyhpbnN0YW5jZSkge1xuICByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyhpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyRWFjaChpbnN0YW5jZSk7XG4gIHJlZ2lzdGVySGVscGVyTWlzc2luZyhpbnN0YW5jZSk7XG4gIHJlZ2lzdGVySWYoaW5zdGFuY2UpO1xuICByZWdpc3RlckxvZyhpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9va3VwKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJXaXRoKGluc3RhbmNlKTtcbn1cbiIsImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzQXJyYXksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2VhY2gnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcbiAgICB9XG5cbiAgICBsZXQgZm4gPSBvcHRpb25zLmZuLFxuICAgICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmV0ID0gJycsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGNvbnRleHRQYXRoO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgY29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjb250ZXh0KSkgeyBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpOyB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcbiAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcblxuICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcbiAgICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gY29udGV4dFBhdGggKyBmaWVsZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2ZpZWxkXSwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogYmxvY2tQYXJhbXMoW2NvbnRleHRbZmllbGRdLCBmaWVsZF0sIFtjb250ZXh0UGF0aCArIGZpZWxkLCBudWxsXSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgaW4gY29udGV4dCkge1xuICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHByaW9yS2V5O1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgaWYgKGNvbnRleHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG4gICAgICAgICAgICAvLyB0aGUgbGFzdCBpdGVyYXRpb24gd2l0aG91dCBoYXZlIHRvIHNjYW4gdGhlIG9iamVjdCB0d2ljZSBhbmQgY3JlYXRlXG4gICAgICAgICAgICAvLyBhbiBpdGVybWVkaWF0ZSBrZXlzIGFycmF5LlxuICAgICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHJldCA9IGludmVyc2UodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iLCJpbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdoZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24oLyogW2FyZ3MsIF1vcHRpb25zICovKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3RydWN0LlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb2cnLCBmdW5jdGlvbigvKiBtZXNzYWdlLCBvcHRpb25zICovKSB7XG4gICAgbGV0IGFyZ3MgPSBbdW5kZWZpbmVkXSxcbiAgICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWwgPSAxO1xuICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuICAgIH1cbiAgICBhcmdzWzBdID0gbGV2ZWw7XG5cbiAgICBpbnN0YW5jZS5sb2coLi4uIGFyZ3MpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbihvYmosIGZpZWxkKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmpbZmllbGRdO1xuICB9KTtcbn1cbiIsImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignd2l0aCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihjb250ZXh0KSkgeyBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpOyB9XG5cbiAgICBsZXQgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKCFpc0VtcHR5KGNvbnRleHQpKSB7XG4gICAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IGJsb2NrUGFyYW1zKFtjb250ZXh0XSwgW2RhdGEgJiYgZGF0YS5jb250ZXh0UGF0aF0pXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtpbmRleE9mfSBmcm9tICcuL3V0aWxzJztcblxubGV0IGxvZ2dlciA9IHtcbiAgbWV0aG9kTWFwOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuICBsZXZlbDogJ2luZm8nLFxuXG4gIC8vIE1hcHMgYSBnaXZlbiBsZXZlbCB2YWx1ZSB0byB0aGUgYG1ldGhvZE1hcGAgaW5kZXhlcyBhYm92ZS5cbiAgbG9va3VwTGV2ZWw6IGZ1bmN0aW9uKGxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBsZXZlbE1hcCA9IGluZGV4T2YobG9nZ2VyLm1ldGhvZE1hcCwgbGV2ZWwudG9Mb3dlckNhc2UoKSk7XG4gICAgICBpZiAobGV2ZWxNYXAgPj0gMCkge1xuICAgICAgICBsZXZlbCA9IGxldmVsTWFwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV2ZWwgPSBwYXJzZUludChsZXZlbCwgMTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsZXZlbDtcbiAgfSxcblxuICAvLyBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuICBsb2c6IGZ1bmN0aW9uKGxldmVsLCAuLi5tZXNzYWdlKSB7XG4gICAgbGV2ZWwgPSBsb2dnZXIubG9va3VwTGV2ZWwobGV2ZWwpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBsb2dnZXIubG9va3VwTGV2ZWwobG9nZ2VyLmxldmVsKSA8PSBsZXZlbCkge1xuICAgICAgbGV0IG1ldGhvZCA9IGxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHsgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgbWV0aG9kID0gJ2xvZyc7XG4gICAgICB9XG4gICAgICBjb25zb2xlW21ldGhvZF0oLi4ubWVzc2FnZSk7ICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyBDT01QSUxFUl9SRVZJU0lPTiwgUkVWSVNJT05fQ0hBTkdFUywgY3JlYXRlRnJhbWUgfSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcbiAgY29uc3QgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgICAgY3VycmVudFJldmlzaW9uID0gQ09NUElMRVJfUkVWSVNJT047XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gIT09IGN1cnJlbnRSZXZpc2lvbikge1xuICAgIGlmIChjb21waWxlclJldmlzaW9uIDwgY3VycmVudFJldmlzaW9uKSB7XG4gICAgICBjb25zdCBydW50aW1lVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG4gICAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBydW50aW1lVmVyc2lvbnMgKyAnKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKCcgKyBjb21waWxlclZlcnNpb25zICsgJykuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZSB0aGUgZW1iZWRkZWQgdmVyc2lvbiBpbmZvIHNpbmNlIHRoZSBydW50aW1lIGRvZXNuJ3Qga25vdyBhYm91dCB0aGlzIHJldmlzaW9uIHlldFxuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBjb21waWxlckluZm9bMV0gKyAnKS4nKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlKHRlbXBsYXRlU3BlYywgZW52KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICghZW52KSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlJyk7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIHRlbXBsYXRlU3BlYy5tYWluLmRlY29yYXRvciA9IHRlbXBsYXRlU3BlYy5tYWluX2Q7XG5cbiAgLy8gTm90ZTogVXNpbmcgZW52LlZNIHJlZmVyZW5jZXMgcmF0aGVyIHRoYW4gbG9jYWwgdmFyIHJlZmVyZW5jZXMgdGhyb3VnaG91dCB0aGlzIHNlY3Rpb24gdG8gYWxsb3dcbiAgLy8gZm9yIGV4dGVybmFsIHVzZXJzIHRvIG92ZXJyaWRlIHRoZXNlIGFzIHBzdWVkby1zdXBwb3J0ZWQgQVBJcy5cbiAgZW52LlZNLmNoZWNrUmV2aXNpb24odGVtcGxhdGVTcGVjLmNvbXBpbGVyKTtcblxuICBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsV3JhcHBlcihwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgICAgY29udGV4dCA9IFV0aWxzLmV4dGVuZCh7fSwgY29udGV4dCwgb3B0aW9ucy5oYXNoKTtcbiAgICAgIGlmIChvcHRpb25zLmlkcykge1xuICAgICAgICBvcHRpb25zLmlkc1swXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIGxldCByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLCBlbnYpO1xuICAgICAgcmVzdWx0ID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xuICAgICAgICBsZXQgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpbmVzW2ldID0gb3B0aW9ucy5pbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBKdXN0IGFkZCB3YXRlclxuICBsZXQgY29udGFpbmVyID0ge1xuICAgIHN0cmljdDogZnVuY3Rpb24ob2JqLCBuYW1lKSB7XG4gICAgICBpZiAoIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbbmFtZV07XG4gICAgfSxcbiAgICBsb29rdXA6IGZ1bmN0aW9uKGRlcHRocywgbmFtZSkge1xuICAgICAgY29uc3QgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhbWJkYTogZnVuY3Rpb24oY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbihpKSB7XG4gICAgICBsZXQgcmV0ID0gdGVtcGxhdGVTcGVjW2ldO1xuICAgICAgcmV0LmRlY29yYXRvciA9IHRlbXBsYXRlU3BlY1tpICsgJ19kJ107XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24oaSwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgICAgbGV0IHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSxcbiAgICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG4gICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24odmFsdWUsIGRlcHRoKSB7XG4gICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLl9wYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBtZXJnZTogZnVuY3Rpb24ocGFyYW0sIGNvbW1vbikge1xuICAgICAgbGV0IG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiAocGFyYW0gIT09IGNvbW1vbikpIHtcbiAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIC8vIEFuIGVtcHR5IG9iamVjdCB0byB1c2UgYXMgcmVwbGFjZW1lbnQgZm9yIG51bGwtY29udGV4dHNcbiAgICBudWxsQ29udGV4dDogT2JqZWN0LnNlYWwoe30pLFxuXG4gICAgbm9vcDogZW52LlZNLm5vb3AsXG4gICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcbiAgfTtcblxuICBmdW5jdGlvbiByZXQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsICYmIHRlbXBsYXRlU3BlYy51c2VEYXRhKSB7XG4gICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIGxldCBkZXB0aHMsXG4gICAgICAgIGJsb2NrUGFyYW1zID0gdGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zID8gW10gOiB1bmRlZmluZWQ7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMpIHtcbiAgICAgIGlmIChvcHRpb25zLmRlcHRocykge1xuICAgICAgICBkZXB0aHMgPSBjb250ZXh0ICE9IG9wdGlvbnMuZGVwdGhzWzBdID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBvcHRpb25zLmRlcHRocztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIH1cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnModGVtcGxhdGVTcGVjLm1haW4sIG1haW4sIGNvbnRhaW5lciwgb3B0aW9ucy5kZXB0aHMgfHwgW10sIGRhdGEsIGJsb2NrUGFyYW1zKTtcbiAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuaGVscGVycywgZW52LmhlbHBlcnMpO1xuXG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMucGFydGlhbHMsIGVudi5wYXJ0aWFscyk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5kZWNvcmF0b3JzLCBlbnYuZGVjb3JhdG9ycyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcbiAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24oaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgYmxvY2sgcGFyYW1zJyk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgdGVtcGxhdGVTcGVjW2ldLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY3VycmVudERlcHRocyA9IGRlcHRocztcbiAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT0gZGVwdGhzWzBdICYmICEoY29udGV4dCA9PT0gY29udGFpbmVyLm51bGxDb250ZXh0ICYmIGRlcHRoc1swXSA9PT0gbnVsbCkpIHtcbiAgICAgIGN1cnJlbnREZXB0aHMgPSBbY29udGV4dF0uY29uY2F0KGRlcHRocyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuKGNvbnRhaW5lcixcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscyxcbiAgICAgICAgb3B0aW9ucy5kYXRhIHx8IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLFxuICAgICAgICBjdXJyZW50RGVwdGhzKTtcbiAgfVxuXG4gIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBpZiAoIXBhcnRpYWwpIHtcbiAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCFwYXJ0aWFsLmNhbGwgJiYgIW9wdGlvbnMubmFtZSkge1xuICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHBhcnRpYWwgdGhhdCByZXR1cm5lZCBhIHN0cmluZ1xuICAgIG9wdGlvbnMubmFtZSA9IHBhcnRpYWw7XG4gICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbcGFydGlhbF07XG4gIH1cbiAgcmV0dXJuIHBhcnRpYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgLy8gVXNlIHRoZSBjdXJyZW50IGNsb3N1cmUgY29udGV4dCB0byBzYXZlIHRoZSBwYXJ0aWFsLWJsb2NrIGlmIHRoaXMgcGFydGlhbFxuICBjb25zdCBjdXJyZW50UGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG4gIH1cblxuICBsZXQgcGFydGlhbEJsb2NrO1xuICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAvLyBXcmFwcGVyIGZ1bmN0aW9uIHRvIGdldCBhY2Nlc3MgdG8gY3VycmVudFBhcnRpYWxCbG9jayBmcm9tIHRoZSBjbG9zdXJlXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcbiAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGZ1bmN0aW9uIHBhcnRpYWxCbG9ja1dyYXBwZXIoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG5cbiAgICAgIC8vIFJlc3RvcmUgdGhlIHBhcnRpYWwtYmxvY2sgZnJvbSB0aGUgY2xvc3VyZSBmb3IgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgYmxvY2tcbiAgICAgIC8vIGkuZS4gdGhlIHBhcnQgaW5zaWRlIHRoZSBibG9jayBvZiB0aGUgcGFydGlhbCBjYWxsLlxuICAgICAgb3B0aW9ucy5kYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gY3VycmVudFBhcnRpYWxCbG9jaztcbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIGlmIChmbi5wYXJ0aWFscykge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFscyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucy5wYXJ0aWFscywgZm4ucGFydGlhbHMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQgJiYgcGFydGlhbEJsb2NrKSB7XG4gICAgcGFydGlhbCA9IHBhcnRpYWxCbG9jaztcbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgcmV0dXJuICcnOyB9XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBjcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIGxldCBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcbiAgfVxuICByZXR1cm4gcHJvZztcbn1cbiIsIi8vIEJ1aWxkIG91dCBvdXIgYmFzaWMgU2FmZVN0cmluZyB0eXBlXG5mdW5jdGlvbiBTYWZlU3RyaW5nKHN0cmluZykge1xuICB0aGlzLnN0cmluZyA9IHN0cmluZztcbn1cblxuU2FmZVN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcgPSBTYWZlU3RyaW5nLnByb3RvdHlwZS50b0hUTUwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICcnICsgdGhpcy5zdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYWZlU3RyaW5nO1xuIiwiY29uc3QgZXNjYXBlID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgJ2AnOiAnJiN4NjA7JyxcbiAgJz0nOiAnJiN4M0Q7J1xufTtcblxuY29uc3QgYmFkQ2hhcnMgPSAvWyY8PlwiJ2A9XS9nLFxuICAgICAgcG9zc2libGUgPSAvWyY8PlwiJ2A9XS87XG5cbmZ1bmN0aW9uIGVzY2FwZUNoYXIoY2hyKSB7XG4gIHJldHVybiBlc2NhcGVbY2hyXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChvYmovKiAsIC4uLnNvdXJjZSAqLykge1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2ldLCBrZXkpKSB7XG4gICAgICAgIG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZXhwb3J0IGxldCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8vIFNvdXJjZWQgZnJvbSBsb2Rhc2hcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtc3R5bGUgKi9cbmxldCBpc0Z1bmN0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyBmYWxsYmFjayBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAoaXNGdW5jdGlvbigveC8pKSB7XG4gIGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH07XG59XG5leHBvcnQge2lzRnVuY3Rpb259O1xuLyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG59O1xuXG4vLyBPbGRlciBJRSB2ZXJzaW9ucyBkbyBub3QgZGlyZWN0bHkgc3VwcG9ydCBpbmRleE9mIHNvIHdlIG11c3QgaW1wbGVtZW50IG91ciBvd24sIHNhZGx5LlxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUV4cHJlc3Npb24oc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGVzY2FwZSBTYWZlU3RyaW5ncywgc2luY2UgdGhleSdyZSBhbHJlYWR5IHNhZmVcbiAgICBpZiAoc3RyaW5nICYmIHN0cmluZy50b0hUTUwpIHtcbiAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XG4gICAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZyArICcnO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuICAgIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuICB9XG5cbiAgaWYgKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHsgcmV0dXJuIHN0cmluZzsgfVxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcbiAgbGV0IGZyYW1lID0gZXh0ZW5kKHt9LCBvYmplY3QpO1xuICBmcmFtZS5fcGFyZW50ID0gb2JqZWN0O1xuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibG9ja1BhcmFtcyhwYXJhbXMsIGlkcykge1xuICBwYXJhbXMucGF0aCA9IGlkcztcbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcbn1cbiIsIi8vIENyZWF0ZSBhIHNpbXBsZSBwYXRoIGFsaWFzIHRvIGFsbG93IGJyb3dzZXJpZnkgdG8gcmVzb2x2ZVxuLy8gdGhlIHJ1bnRpbWUgb24gYSBzdXBwb3J0ZWQgcGF0aC5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUnKVsnZGVmYXVsdCddO1xuIiwidmFyIEFwcGxpY2F0aW9uID0gcmVxdWlyZSgnLi9hcHBsaWNhdGlvbicpO1xudmFyIMOmID0gcmVxdWlyZSgnLi9hc3luYycpO1xudmFyIFRlbXBsYXRlID0gcmVxdWlyZSgnLi9uYXZpZ2F0aW9uL3RlbXBsYXRlJyk7XG5yZXF1aXJlKCcuLi9nZW4vdGVtcGxhdGVzJyk7XG52YXIgU2xpZGVyID0gcmVxdWlyZSgnLi9raW5lbWF0aWMvc2xpZGVyJyk7XG52YXIgYXBwID0gbmV3IEFwcGxpY2F0aW9uKCcjYXBwJyk7XG52YXIgayA9IHJlcXVpcmUoJy4va2luZW1hdGljJyk7XG52YXIgaCA9IHJlcXVpcmUoJy4va2luZW1hdGljL2hlbHBlcnMnKTtcblxuLyphcHAucm91dGVyLm9uKCcvcHJvZmlsZS86aWQnLCBmdW5jdGlvbihwYXRoKXtcbiB2YXIgcHJvZmlsZVZpZXcgPSBhcHAudGVtcGxhdGVzLnByb2ZpbGUuY3JlYXRlKHBhdGgpO1xuIGFwcC5hbmltLnBlcmZvcm1UcmFuc2l0aW9uKGFwcC5jdXJyZW50VmlldywgcHJvZmlsZVZpZXcsICdwdXNoJyk7XG4gfSk7Ki9cblxuYXBwLmFkZFRlbXBsYXRlKG5ldyBUZW1wbGF0ZSgncHJvZmlsZScpKTtcbmFwcC5hZGRUZW1wbGF0ZShuZXcgVGVtcGxhdGUoJ2ZyaWVuZHMnKSk7XG5hcHAuYWRkVGVtcGxhdGUobmV3IFRlbXBsYXRlKCdtb2RhbCcpKTtcblxuYXBwLnRlbXBsYXRlcy5mcmllbmRzLm9uKCdiZWZvcmVFbnRlcicsIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgdmlldy5lbXB0eSgpO1xuICAgIHZpZXcuZGF0YSA9IG51bGw7XG4gICAgbG9hZEZyaWVuZHModmlldyk7XG4gICAgZG9uZSgpO1xufSk7XG5cbmFwcC50ZW1wbGF0ZXMuZnJpZW5kcy5vbignb25FbnRlcicsIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgdmlldy5kYXRhID8gb25EYXRhKCkgOiB2aWV3Lm9uKCdkYXRhJywgb25EYXRhKTtcbiAgICBmdW5jdGlvbiBvbkRhdGEoKSB7XG4gICAgICAgIMOmLnNlcmllcyhbXG4gICAgICAgICAgICByZW5kZXJWaWV3LFxuICAgICAgICAgICAgay5oaWRlKCdsaScpLFxuICAgICAgICAgICAgay5oaWRlKCcuY2hlY2tsaXN0IC5ib3JkZXInKSxcbiAgICAgICAgICAgIGsucGFyYWxsZWwoW1xuICAgICAgICAgICAgICAgIGsuYW5pbWF0ZUNzcygnLmNoZWNrbGlzdCAuYm9yZGVyJywgJ2V4cGFuZCcpLFxuICAgICAgICAgICAgICAgIGsuYW5pbWF0ZUNzcygnbGknLCAnZmFkZUluUmlnaHQnLCB7ZGVsYXk6IDIwMH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICBdLCBkb25lLCB2aWV3KTtcbiAgICB9XG59KTtcblxuYXBwLnRlbXBsYXRlcy5wcm9maWxlLm9uKCdiZWZvcmVFbnRlcicsIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgdmlldy5kYXRhID0ge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1JvbWFpbidcbiAgICB9O1xuICAgIHZpZXcucmVuZGVyKCk7XG4gICAgdmFyIGhlYWRlciA9IHZpZXcuZWwucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgdmFyIGNvbnRlbnQgPSB2aWV3LmVsLnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciArIC5jb250ZW50Jyk7XG4gICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAnY2FsYygxMDAlIC0gJyArIGdldENvbXB1dGVkU3R5bGUoaGVhZGVyKS5oZWlnaHQgKyAnKSc7XG4gICAgZG9uZSgpO1xufSk7XG5cbmFwcC50ZW1wbGF0ZXMuZnJpZW5kcy5vbignb25FeGl0JywgZnVuY3Rpb24gKHZpZXcsIGRvbmUpIHtcbiAgICBrLmFuaW1hdGVDc3MoJ2gxLCBsaScsICdmYWRlT3V0UmlnaHQnLCB7XG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIGFkZENsYXNzOiBrLmNsYXNzbmFtZXMuaGlkZS5UUkFOU1BBUkVOVFxuICAgIH0pKHZpZXcsIGRvbmUpXG59KTtcblxuYXBwLnRlbXBsYXRlcy5tb2RhbC5vbignYmVmb3JlRW50ZXInLCBmdW5jdGlvbiAodmlldywgZG9uZSkge1xuICAgIHZpZXcucmVuZGVyKCk7XG4gICAgd2luZG93LnNsaWRlciA9IG5ldyBTbGlkZXIodmlldy5lbC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJykpO1xuICAgIHZhciBjb250ZW50ID0gdmlldy5lbC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIGFwcC5lbC5zdHlsZS5oZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGNvbnRlbnQpLmhlaWdodDtcbiAgICBkb25lKCk7XG59KTtcblxuYXBwLnRlbXBsYXRlcy5tb2RhbC5vbignb25FeGl0JywgZnVuY3Rpb24odmlldywgZG9uZSl7XG4gICAgYXBwLmVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBkb25lKCk7XG59KTtcblxuZnVuY3Rpb24gcmVuZGVyVmlldyh2aWV3LCBkb25lKSB7XG4gICAgdmlldy5yZW5kZXIoKTtcbiAgICBkb25lKCk7XG59XG5cbmFwcC5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5teVByb2ZpbGVWaWV3ID0gYXBwLmNyZWF0ZVZpZXcoJ3Byb2ZpbGUnLCAnIy9wcm9maWxlLzEnKTtcbiAgICB3aW5kb3cuZnJpZW5kc1ZpZXcgPSBhcHAuY3JlYXRlVmlldygnZnJpZW5kcycsICcjL3Byb2ZpbGUvMS9mcmllbmRzJyk7XG4gICAgd2luZG93Lm1vZGFsVmlldyA9IGFwcC5jcmVhdGVWaWV3KCdtb2RhbCcsICcjL21vZGFsJyk7XG4gICAgaC5hZGRDbGFzcyh3aW5kb3cubW9kYWxWaWV3LmVsLCAna2luZW1hdGljLXRyYW5zbGF0ZS1ib3R0b20nKTtcbn07XG5cbmFwcC5nb3RvRnJpZW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBrLnRyYW5zaXRpb25zLmNvdmVyKHthcHA6IGFwcCwgZnJvbTogbXlQcm9maWxlVmlldywgdG86IGZyaWVuZHNWaWV3fSlcbn07XG5cbmFwcC5nb3RvUHJvZmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBrLnRyYW5zaXRpb25zLnJldmVhbCh7YXBwOiBhcHAsIGZyb206IGZyaWVuZHNWaWV3LCB0bzogbXlQcm9maWxlVmlld30pXG59O1xuXG5hcHAuc2hvd01vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGsudHJhbnNpdGlvbnMubW9kYWwoe2FwcDogYXBwLCB0bzogbW9kYWxWaWV3fSlcbn07XG5cbmFwcC5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgay50cmFuc2l0aW9ucy5tb2RhbCh7YXBwOiBhcHAsIGZyb206IG1vZGFsVmlld30pXG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmlldyA9IGFwcC52aWV3c1tsb2NhdGlvbi5oYXNoXTtcbiAgICBpZiAodmlldyA9PT0gd2luZG93Lm15UHJvZmlsZVZpZXcpIHtcbiAgICAgICAgYXBwLmdvdG9Qcm9maWxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXBwLmdvdG9GcmllbmRzKCk7XG4gICAgfVxufSk7XG5cbmFwcC5pbml0KCk7XG5cbndpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBIYXNoQ2hhbmdlRXZlbnQoXCJoYXNoY2hhbmdlXCIpKTtcblxuZnVuY3Rpb24gbG9hZEZyaWVuZHModmlldykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2aWV3LmRhdGEgPSB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGZyaWVuZHM6IFtcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJSb21haW5cIn0sXG4gICAgICAgICAgICAgICAge25hbWU6IFwiRGVscGhpbmVcIn0sXG4gICAgICAgICAgICAgICAge25hbWU6IFwiTGF1cmVudFwifSxcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJHdWlsbGF1bWVcIn0sXG4gICAgICAgICAgICAgICAge25hbWU6IFwiQ2hyaXN0b3BoZVwifSxcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJMYXVyYVwifVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgICB2aWV3Lmhvb2soJ2RhdGEnKTtcbiAgICB9LCAzNTApO1xufVxuXG5cbi8vIFByb2R1Y3Rpb24gc3RlcHMgb2YgRUNNQS0yNjIsIEVkaXRpb24gNiwgMjIuMS4yLjFcbi8vIFLDqWbDqXJlbmNlIDogaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFycmF5LmZyb21cbmlmICghQXJyYXkuZnJvbSkge1xuICAgIEFycmF5LmZyb20gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgICAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgICAgICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gTGEgcHJvcHJpw6l0w6kgbGVuZ3RoIGRlIGxhIG3DqXRob2RlIHZhdXQgMS5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgICAgICAgICAvLyAxLiBTb2l0IEMsIGxhIHZhbGV1ciB0aGlzXG4gICAgICAgICAgICB2YXIgQyA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIDIuIFNvaXQgaXRlbXMgbGUgVG9PYmplY3QoYXJyYXlMaWtlKS5cbiAgICAgICAgICAgIHZhciBpdGVtcyA9IE9iamVjdChhcnJheUxpa2UpO1xuXG4gICAgICAgICAgICAvLyAzLiBSZXR1cm5JZkFicnVwdChpdGVtcykuXG4gICAgICAgICAgICBpZiAoYXJyYXlMaWtlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkuZnJvbSBkb2l0IHV0aWxpc2VyIHVuIG9iamV0IHNlbWJsYWJsZSDDoCB1biB0YWJsZWF1IC0gbnVsbCBvdSB1bmRlZmluZWQgbmUgcGV1dmVudCBwYXMgw6p0cmUgdXRpbGlzw6lzXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA0LiBTaSBtYXBmbiBlc3QgdW5kZWZpbmVkLCBsZSBtYXBwaW5nIHNlcmEgZmFsc2UuXG4gICAgICAgICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIFQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIDUuIHNpbm9uXG4gICAgICAgICAgICAgICAgLy8gNS4gYS4gc2kgSXNDYWxsYWJsZShtYXBmbikgZXN0IGZhbHNlLCBvbiBsw6h2ZSB1bmUgVHlwZUVycm9yLlxuICAgICAgICAgICAgICAgIGlmICghaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbTogbG9yc3F1IGlsIGVzdCB1dGlsaXPDqSBsZSBkZXV4acOobWUgYXJndW1lbnQgZG9pdCDDqnRyZSB1bmUgZm9uY3Rpb24nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyA1LiBiLiBzaSB0aGlzQXJnIGEgw6l0w6kgZm91cm5pLCBUIHNlcmEgdGhpc0FyZyA7IHNpbm9uIFQgc2VyYSB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAxMC4gU29pdCBsZW5WYWx1ZSBwb3VyIEdldChpdGVtcywgXCJsZW5ndGhcIikuXG4gICAgICAgICAgICAvLyAxMS4gU29pdCBsZW4gcG91ciBUb0xlbmd0aChsZW5WYWx1ZSkuXG4gICAgICAgICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgLy8gMTMuIFNpIElzQ29uc3RydWN0b3IoQykgdmF1dCB0cnVlLCBhbG9yc1xuICAgICAgICAgICAgLy8gMTMuIGEuIFNvaXQgQSBsZSByw6lzdWx0YXQgZGUgbCdhcHBlbCDDoCBsYSBtw6l0aG9kZSBpbnRlcm5lIFtbQ29uc3RydWN0XV0gYXZlYyB1bmUgbGlzdGUgZW4gYXJndW1lbnQgcXVpIGNvbnRpZW50IGwnw6lsw6ltZW50IGxlbi5cbiAgICAgICAgICAgIC8vIDE0LiBhLiBTaW5vbiwgc29pdCBBIGxlIHLDqXN1bHRhdCBkZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbik7XG5cbiAgICAgICAgICAgIC8vIDE2LiBTb2l0IGsgw6lnYWwgw6AgMC5cbiAgICAgICAgICAgIHZhciBrID0gMDsgIC8vIDE3LiBPbiByw6lww6h0ZSB0YW50IHF1ZSBrIDwgbGVu4oCmXG4gICAgICAgICAgICB2YXIga1ZhbHVlO1xuICAgICAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcbiAgICAgICAgICAgICAgICBpZiAobWFwRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgQVtrXSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKGtWYWx1ZSwgaykgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQVtrXSA9IGtWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgayArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gMTguIFNvaXQgcHV0U3RhdHVzIMOpZ2FsIMOgIFB1dChBLCBcImxlbmd0aFwiLCBsZW4sIHRydWUpLlxuICAgICAgICAgICAgQS5sZW5ndGggPSBsZW47ICAvLyAyMC4gT24gcmVudm9pZSBBLlxuICAgICAgICAgICAgcmV0dXJuIEE7XG4gICAgICAgIH07XG4gICAgfSgpKTtcbn1cblxud2luZG93LmFwcCA9IGFwcDtcbndpbmRvdy5rID0gazsiLCIvKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBjb25zdHJ1Y3RvclxuICogQGNsYXNzXG4gKi9cbnZhciBBcHBsaWNhdGlvbiA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHRoaXMudGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxoZWFkZXI+PC9oZWFkZXI+PGRpdiBjbGFzcz1cInZpZXdzXCI+PC9kaXY+PGZvb3Rlcj48L2Zvb3Rlcj4nO1xuICAgIHRoaXMudmlld3MgPSB7fTtcbn07XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5hZGRUZW1wbGF0ZSA9IGZ1bmN0aW9uKHRlbXBsYXRlKXtcbiAgICB0aGlzLnRlbXBsYXRlc1t0ZW1wbGF0ZS5uYW1lXSA9IHRlbXBsYXRlO1xufTtcblxuQXBwbGljYXRpb24ucHJvdG90eXBlLmNyZWF0ZVZpZXcgPSBmdW5jdGlvbihuYW1lLCBwYXRoKXtcbiAgICB0aGlzLnZpZXdzW3BhdGhdID0gdGhpcy50ZW1wbGF0ZXNbbmFtZV0uY3JlYXRlKHBhdGgpO1xuICAgIHRoaXMuZWwucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLnZpZXdzJykuYXBwZW5kKHRoaXMudmlld3NbcGF0aF0uZWwpO1xuICAgIHJldHVybiB0aGlzLnZpZXdzW3BhdGhdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvbjsiLCJcbmZ1bmN0aW9uIGVhY2hQYXJhbGxlbE9iaihvYmosIGZuLCBkb25lKSB7XG4gICAgZWFjaFBhcmFsbGVsQXJyKE9iamVjdC5rZXlzKG9iaiksIGZ1bmN0aW9uIChrZXksIGNiKSB7XG4gICAgICAgIGZuKGtleSwgb2JqW2tleV0sIGNiKTtcbiAgICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gZWFjaFNlcmllc09iaihvYmosIGZuLCBkb25lKSB7XG4gICAgZWFjaFNlcmllc0FycihPYmplY3Qua2V5cyhvYmopLCBmdW5jdGlvbiAoa2V5LCBjYikge1xuICAgICAgICBmbihrZXksIG9ialtrZXldLCBjYik7XG4gICAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGVhY2hQYXJhbGxlbEFycihhcnIsIGZuLCBkb25lKSB7XG4gICAgdmFyIGkgPSAwLCBjb21wbGV0ZWQgPSAwLCBsID0gYXJyLmxlbmd0aCwgY2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbXBsZXRlZCsrO1xuICAgICAgICBpZiAoY29tcGxldGVkID09PSBsKSB7XG4gICAgICAgICAgICBjYWxsSWZGdW5jdGlvbihkb25lKVxuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmbihhcnJbaV0sIGNiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVhY2hQYXJhbGxlbChzdWJqZWN0LCBmbiwgZG9uZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN1YmplY3QpKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGFyYWxsZWxBcnIoc3ViamVjdCwgZm4sIGRvbmUpO1xuICAgIH1cbiAgICBlYWNoUGFyYWxsZWxPYmooc3ViamVjdCwgZm4sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBwYXJhbGxlbChmdW5jdGlvbnMsIGRvbmUpIHtcbiAgICB2YXIgYWRkaXRpb25hbEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIGVhY2hQYXJhbGxlbEFycihmdW5jdGlvbnMsIGZ1bmN0aW9uIChmbiwgY2IsIHByZXYpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbY2IsIHByZXZdO1xuICAgICAgICBpZiAoYWRkaXRpb25hbEFyZ3MubGVuZ3RoKXtcbiAgICAgICAgICAgIGFyZ3MgPSBhZGRpdGlvbmFsQXJncy5jb25jYXQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZm4uYXBwbHkoZm4sIGFyZ3MpO1xuICAgIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBlYWNoU2VyaWVzKHN1YmplY3QsIGZuLCBkb25lKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hTZXJpZXNBcnIoc3ViamVjdCwgZm4sIGRvbmUpO1xuICAgIH1cbiAgICBlYWNoU2VyaWVzT2JqKHN1YmplY3QsIGZuLCBkb25lKTtcbn1cblxuZnVuY3Rpb24gZWFjaFNlcmllc0FycihhcnIsIGZuLCBkb25lKSB7XG4gICAgdmFyIGkgPSAwLCBwcmV2LCBjYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBwcmV2ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgZXhlYygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBleGVjKCkge1xuICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZuKGFycltpXSwgY2IsIHByZXYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbElmRnVuY3Rpb24oZG9uZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjKCk7XG59XG5cbi8qKlxuICogQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHdpbGwgYmUgcGFzc2VkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZnVuY3Rpb25zXG4gKiBAcGFyYW0gZG9uZVxuICovXG5mdW5jdGlvbiBzZXJpZXMoZnVuY3Rpb25zLCBkb25lKSB7XG4gICAgdmFyIGFkZGl0aW9uYWxBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICBlYWNoU2VyaWVzQXJyKGZ1bmN0aW9ucywgZnVuY3Rpb24gKGZuLCBjYiwgcHJldikge1xuICAgICAgICB2YXIgYXJncyA9IFtjYiwgcHJldl07XG4gICAgICAgIGlmIChhZGRpdGlvbmFsQXJncy5sZW5ndGgpe1xuICAgICAgICAgICAgYXJncyA9IGFkZGl0aW9uYWxBcmdzLmNvbmNhdChhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBmbi5hcHBseShmbiwgYXJncyk7XG4gICAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxJZkZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGVhY2hTZXJpZXM6IGVhY2hTZXJpZXMsXG4gICAgc2VyaWVzOiBzZXJpZXMsXG4gICAgZWFjaFBhcmFsbGVsOiBlYWNoUGFyYWxsZWwsXG4gICAgcGFyYWxsZWw6IHBhcmFsbGVsXG59OyIsInZhciBoID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG52YXIgw6YgPSByZXF1aXJlKCcuLi9hc3luYycpO1xudmFyIGNsYXNzbmFtZXMgPSByZXF1aXJlKCcuL2NsYXNzbmFtZXMnKTtcblxuXG4vKipcbiAqIEBmdW5jdGlvbiBhbmltYXRlQ3NzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEBwYXJhbSB7Tm9kZUxpc3R8SFRNTEVsZW1lbnR8SFRNTEVsZW1lbnRbXXxzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xzXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtib29sZWFuPX0gb3B0aW9ucy5yZW1vdmUgcmVtb3ZlIGNsYXNzIGluc3RlYWQgb2YgYXBwbHlpbmcgaXRcbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0aW9ucy5kZWxheSB0aW1lIHRvIHdhaXQgYmVmb3JlIGZpcmluZyB0aGUgYW5pbWF0aW9uLCBpbiBtc1xuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLmFkZENsYXNzIGFkZCBjbGFzcyhlcykgdG8gdGhlIGVsZW1lbnQgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBmaW5pc2hlc1xuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLnJlbW92ZUNsYXNzIHJlbW92ZSBjbGFzcyhlcykgdG8gdGhlIGVsZW1lbnQgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBmaW5pc2hlc1xuICogQHBhcmFtIHtmdW5jdGlvbnx1bmRlZmluZWR9IG9wdGlvbnMuYWZ0ZXIgZXhlYyBhIGNhbGxiYWNrIGZvciBlYWNoIGFuaW1hdGVkIGVsZW1lbnRcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFuaW1hdGVDc3Moc2VsZWN0b3IsIGNscywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtkZWxheTogMSwgcmVtb3ZlOiBmYWxzZX07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFuaW1hdGVJblZpZXcodmlldywgZG9uZSkge1xuICAgICAgICAvLyB0YXJnZXRzIG1heSBiZSBhIHNpbmdsZSBkb20gZWxlbWVudCBvciBhIG5vZGUgbGlzdFxuICAgICAgICB2YXIgdGFyZ2V0cztcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRhcmdldHMgPSBBcnJheS5mcm9tKHZpZXcuZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICB9IGVsc2UgeyAvLyBjYXNlIGlzQXJyYXkgb3IgTm9kZUxpc3RcbiAgICAgICAgICAgIHRhcmdldHMgPSBzZWxlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGN1cnJlbnQgZWxlbWVudCBpdGVyYXRpb24sIHVzZWQgdG8gZGVsYXlcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICDDpi5lYWNoUGFyYWxsZWwodGFyZ2V0cywgZnVuY3Rpb24gKGVsLCBjYikge1xuICAgICAgICAgICAgLy93ZSB1c2UgYSBzZXRUaW1lb3V0IHRvIGRlbGF5IHRoZSBhcHBsaWNhdGlvbiBvZiB0aGUgY2xhc3NcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3MoZWwsIGguZXZlcnlDbGFzc25hbWUoY2xhc3NuYW1lcy5oaWRlKSk7XG4gICAgICAgICAgICAgICAgaC5hZGRDbGFzcyhlbCwgJ2FuaW1hdGVkJyk7XG4gICAgICAgICAgICAgICAgLy8gdm9pZCBlbC5vZmZzZXRXaWR0aDsgLy8gZm9yY2UgdGhlIGJyb3dzZXIgdG8gZG8gYSByZWZsb3dcbiAgICAgICAgICAgICAgICBoLmNscyhlbCwgW29wdGlvbnMucmVtb3ZlID8gaC5taW51cyhjbHMpIDogY2xzXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBoLmFkZENsYXNzKGVsLCBvcHRpb25zLmFkZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhlbCwgb3B0aW9ucy5yZW1vdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3MoZWwsICdhbmltYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKGVsLCBjbHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGguaXNGdW5jdGlvbihvcHRpb25zLmFmdGVyKSA/IG9wdGlvbnMuYWZ0ZXIoZWwsIGNiKSA6IGNiKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBvcHRpb25zLmRlbGF5ICogaSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0sIGRvbmUpO1xuICAgIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgV0lUSDogJ2tpbmVtYXRpYy13aXRoLXRyYW5zaXRpb24nLFxuICAgICAgICBXSVRIT1VUOiAna2luZW1hdGljLXdpdGhvdXQtdHJhbnNpdGlvbidcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgICAgVFJBTlNQQVJFTlQ6ICdraW5lbWF0aWMtb3BhY2l0eS10cmFuc3BhcmVudCcsXG4gICAgICAgIE9QQVFVRTogJ2tpbmVtYXRpYy1vcGFjaXR5LW9wYXF1ZScsXG4gICAgICAgIExJR0hUOiAna2luZW1hdGljLW9wYWNpdHktbGlnaHQnLFxuICAgICAgICBIRUFWWTogJ2tpbmVtYXRpYy1vcGFjaXR5LWhlYXZ5J1xuICAgIH0sXG4gICAgZGVwdGg6IHtcbiAgICAgICAgRkFSVEhFU1Q6ICdraW5lbWF0aWMtZmFydGhlc3QnLFxuICAgICAgICBGQVI6ICdraW5lbWF0aWMtZmFyJyxcbiAgICAgICAgTkVBUjogJ2tpbmVtYXRpYy1uZWFyJyxcbiAgICAgICAgTkVBUkVTVDogJ2tpbmVtYXRpYy1uZWFyZXN0J1xuICAgIH0sXG4gICAgc2hhZG93OiB7XG4gICAgICAgIEJBU0U6ICdraW5lbWF0aWMtc2hhZG93JyxcbiAgICAgICAgQklHX0RJRkZVU0U6ICdraW5lbWF0aWMtc2hhZG93LWJpZy1kaWZmdXNlJyxcbiAgICAgICAgTUVESVVNX0RJRkZVU0U6ICdraW5lbWF0aWMtc2hhZG93LW1lZGl1bS1kaWZmdXNlJyxcbiAgICAgICAgVFJBTlNQQVJFTlQ6ICdraW5lbWF0aWMtc2hhZG93LXRyYW5zcGFyZW50J1xuICAgIH0sXG4gICAgaGlkZToge1xuICAgICAgICBESVNQTEFZX05PTkU6ICdraW5lbWF0aWMtbm8tZGlzcGxheScsXG4gICAgICAgIFRSQU5TUEFSRU5UOiAna2luZW1hdGljLWhpZGUtdHJhbnNwYXJlbnQnLFxuICAgICAgICBDT0xMQVBTRV9IRUlHSFQ6ICdraW5lbWF0aWMtY29sbGFwc2UtaGVpZ2h0JyxcbiAgICAgICAgQ09MTEFQU0VfV0lEVEg6ICdraW5lbWF0aWMtY29sbGFwc2Utd2lkdGgnXG4gICAgfSxcbiAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgUklHSFQ6ICdraW5lbWF0aWMtdHJhbnNsYXRlLXJpZ2h0JyxcbiAgICAgICAgVE9QOiAna2luZW1hdGljLXRyYW5zbGF0ZS10b3AnLFxuICAgICAgICBMRUZUOiAna2luZW1hdGljLXRyYW5zbGF0ZS1sZWZ0JyxcbiAgICAgICAgQk9UVE9NOiAna2luZW1hdGljLXRyYW5zbGF0ZS1ib3R0b20nLFxuICAgICAgICBSSUdIVF9GQVI6ICdraW5lbWF0aWMtdHJhbnNsYXRlLXJpZ2h0LWZhcicsXG4gICAgICAgIFRPUF9GQVI6ICdraW5lbWF0aWMtdHJhbnNsYXRlLXRvcC1mYXInLFxuICAgICAgICBMRUZUX0ZBUjogJ2tpbmVtYXRpYy10cmFuc2xhdGUtbGVmdC1mYXInLFxuICAgICAgICBCT1RUT01fRkFSOiAna2luZW1hdGljLXRyYW5zbGF0ZS1ib3R0b20tZmFyJ1xuICAgIH1cbn07IiwidmFyIMOmID0gcmVxdWlyZSgnLi4vYXN5bmMnKTtcblxuZnVuY3Rpb24gYmluZEFuaW1hdGlvbk9yVHJhbnNpdGlvbihlbGVtZW50LCBjYWxsYmFjaywgY29tcHV0ZWRQcm9wZXJ0eU5hbWUsIGRvbUV2ZW50TmFtZSkge1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICB2YXIgZHVyYXRpb24gPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoY29tcHV0ZWRQcm9wZXJ0eU5hbWUpO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gJycgfHwgZHVyYXRpb24gPT0gJzBzJykge1xuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tRXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH07XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGRvbUV2ZW50TmFtZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChlbGVtZW50LCBjYWxsYmFjaykge1xuICAgIGJpbmRBbmltYXRpb25PclRyYW5zaXRpb24oZWxlbWVudCwgY2FsbGJhY2ssICd0cmFuc2l0aW9uLWR1cmF0aW9uJywgd2hpY2hUcmFuc2l0aW9uRXZlbnQoKSk7XG59XG5cbmZ1bmN0aW9uIG9uQW5pbWF0aW9uRW5kKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgYmluZEFuaW1hdGlvbk9yVHJhbnNpdGlvbihlbGVtZW50LCBjYWxsYmFjaywgJ2FuaW1hdGlvbi1kdXJhdGlvbicsIHdoaWNoQW5pbWF0aW9uRXZlbnQoKSk7XG59XG5cbmZ1bmN0aW9uIGFkZEFuaW1hdGVkQ2xhc3MoZWxlbWVudCwgY2xzLCBjYWxsYmFjaykge1xuICAgIG9uQW5pbWF0aW9uRW5kKGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDbGFzc25hbWVzRnJvbUFyZ3MoYXJncykge1xuICAgIHZhciBhcmdzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKSwgY2xhc3NuYW1lcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gZmlsdGVyQXJyKGFycikge1xuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgYXJnICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNsYXNzbmFtZXMucHVzaChhcmcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJBcnIoYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlsdGVyQXJyKGFyZ3NBcnJheSk7XG4gICAgcmV0dXJuIGNsYXNzbmFtZXM7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNscykge1xuICAgIG1hbmFnZUNsYXNzKGVsZW1lbnQsIGdldENsYXNzbmFtZXNGcm9tQXJncyhhcmd1bWVudHMpLCAnYWRkJyk7XG59XG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbHMpIHtcbiAgICBtYW5hZ2VDbGFzcyhlbGVtZW50LCBnZXRDbGFzc25hbWVzRnJvbUFyZ3MoYXJndW1lbnRzKSwgJ3JlbW92ZScpO1xufVxuLyoqXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjbHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBhZGRPclJlbW92ZVxuICovXG5mdW5jdGlvbiBtYW5hZ2VDbGFzcyhlbGVtZW50LCBjbHMsIGFkZE9yUmVtb3ZlKSB7XG4gICAgaWYgKGNscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0W2FkZE9yUmVtb3ZlXS5hcHBseShlbGVtZW50LmNsYXNzTGlzdCwgY2xzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHdoaWNoQW5pbWF0aW9uRXZlbnQoKSB7XG4gICAgdmFyIHQ7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHtcbiAgICAgICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnLFxuICAgICAgICAnT0FuaW1hdGlvbic6ICdvQW5pbWF0aW9uRW5kJyxcbiAgICAgICAgJ01vekFuaW1hdGlvbic6ICdBbmltYXRpb25lbmQnLFxuICAgICAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCdcbiAgICB9O1xuXG4gICAgZm9yICh0IGluIGFuaW1hdGlvbnMpIHtcbiAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb25zW3RdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aGljaFRyYW5zaXRpb25FdmVudCgpIHtcbiAgICB2YXIgdDtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpO1xuICAgIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgICdNb3pUcmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgIH07XG5cbiAgICBmb3IgKHQgaW4gdHJhbnNpdGlvbnMpIHtcbiAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBhcHBseSBjbGFzc2xpc3QgdHJhbnNmb3JtYXRpb25zIGZyb20gc3RyaW5nXG4gKiBAZnVuY3Rpb24gY2xzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gb3BlcmF0aW9ucyBBIHN0cmluZyBjb250YWluaW5nIGNsYXNzbmFtZXMuIElmIGEgbWludXMgc2lnbiBwcmVjZWRlcyB0aGUgY2xhc3MgbmFtZXMsIGl0IGlzIHJlbW92ZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb249fSBbZG9uZT11bmRlZmluZWRdIElmIHNwZWNpZmllZCwgYW5pbWF0aW9uICYgdHJhbnNpdGlvbiBsaXN0ZW5lcnMgYXJlIGFkZGVkLlxuICogQHBhcmFtIHtmdW5jdGlvbj19IFtzdGFydD11bmRlZmluZWRdIElmIHNwZWNpZmllZCwgY2FsbGVkIHdoZW4gdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0ZWQgaXMgZ2l2ZW4gYnkgdGhlIGJyb3dzZXIuXG4gKiBUaGUgYGRvbmVgIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIGJvdGggcHJvcGVydGllcyBhcmUgZmluZVxuICovXG5mdW5jdGlvbiBjbHMoZWxlbWVudCwgb3BlcmF0aW9ucywgZG9uZSwgc3RhcnQpIHtcbiAgICB2YXIgYWRkID0gW10sIHJlbW92ZSA9IFtdLCBvcHMgPSBBcnJheS5pc0FycmF5KG9wZXJhdGlvbnMpID8gb3BlcmF0aW9ucyA6IG9wZXJhdGlvbnMuc3BsaXQoJyAnKTtcblxuICAgIGZ1bmN0aW9uIHBhcnNlT3BzKG9wc0FycmF5KSB7XG4gICAgICAgIG9wc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKG9wKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VPcHMob3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wWzBdID09PSAnLScpIHtcbiAgICAgICAgICAgICAgICByZW1vdmUucHVzaChvcC5zdWJzdHJpbmcoMSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZC5wdXNoKG9wKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXJzZU9wcyhvcHMpO1xuXG4gICAgZnVuY3Rpb24gYXBwbHlDbHNDaGFuZ2UoKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGFkZCk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHJlbW92ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb25lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIMOmLnBhcmFsbGVsKFtvbkFuaW1hdGlvbkVuZCwgb25UcmFuc2l0aW9uRW5kXSwgZG9uZSwgZWxlbWVudCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGx5Q2xzQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGx5Q2xzQ2hhbmdlKCk7XG4gICAgfVxufVxuLyoqXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtib29sZWFuPX0gW2ludmVyc2VdXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZXZlcnlDbGFzc25hbWUob2JqZWN0LCBpbnZlcnNlKSB7XG4gICAgdmFyIHJlcyA9IFtdLCBrO1xuICAgIGZvciAoayBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgcmVzLnB1c2goaW52ZXJzZSA/ICctJyArIG9iamVjdFtrXSA6IG9iamVjdFtrXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG5cbmZ1bmN0aW9uIG1pbnVzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiAnLScgKyBjbGFzc05hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFkZEFuaW1hdGVkQ2xhc3M6IGFkZEFuaW1hdGVkQ2xhc3MsXG4gICAgb25BbmltYXRpb25FbmQ6IG9uQW5pbWF0aW9uRW5kLFxuICAgIG9uVHJhbnNpdGlvbkVuZDogb25UcmFuc2l0aW9uRW5kLFxuICAgIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG4gICAgZXZlcnlDbGFzc25hbWU6IGV2ZXJ5Q2xhc3NuYW1lLFxuICAgIG1pbnVzOiBtaW51cyxcbiAgICBjbHM6IGNscyxcbiAgICBpc0Z1bmN0aW9uOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG59O1xuIiwidmFyIGggPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbnZhciBjID0gcmVxdWlyZSgnLi9jbGFzc25hbWVzJyk7XG4vKipcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIHtvYmplY3Q9fSBvcHRpb25zXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdGlvbnMuY2xzIE9uZSBvZiBoaWRlIGZ1bmN0aW9uIGNvbnN0YW50XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoaWRlKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge2NsczogYy5oaWRlLlRSQU5TUEFSRU5UfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZpZXcsIGRvbmUpIHtcbiAgICAgICAgdmlldy5maW5kKHNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhlbCwgb3B0aW9ucy5jbHMpXG4gICAgICAgIH0pO1xuICAgICAgICBkb25lKCk7XG4gICAgfVxufTtcbiIsInZhciDDpiA9IHJlcXVpcmUoJy4uL2FzeW5jJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9uOiBmdW5jdGlvbiAoaG9va05hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IHRoaXMuaG9va3MgfHwge307XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmhvb2tzW2hvb2tOYW1lXSkpIHtcbiAgICAgICAgICAgIHRoaXMuaG9va3NbaG9va05hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rc1tob29rTmFtZV0ucHVzaChoYW5kbGVyKTtcbiAgICB9LFxuICAgIGhvb2s6IGZ1bmN0aW9uIChuYW1lLCBkb25lKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ob29rcyA9IHRoaXMuaG9va3MgfHwge307XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuaG9va3NbbmFtZV0pICYmIHRoaXMuaG9va3NbbmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgw6YuZWFjaFNlcmllcyh0aGlzLmhvb2tzW25hbWVdLCBmdW5jdGlvbiAob3BlcmF0aW9uLCBjYikge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbihzZWxmLCBjYilcbiAgICAgICAgICAgIH0sIGRvbmUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb25lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGZob29rOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHNlbGYuaG9vayhuYW1lLCBjYik7XG4gICAgICAgIH1cbiAgICB9XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9oaWRlJyk7XG52YXIgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xudmFyIMOmID0gcmVxdWlyZSgnLi4vYXN5bmMnKTtcblxudmFyIGtpbmVtYXRpY3MgPSB7XG4gICAgdHJhbnNpdGlvbnM6IHJlcXVpcmUoJy4vdHJhbnNpdGlvbnMnKSxcbiAgICBhbmltYXRlQ3NzOiByZXF1aXJlKCcuL2FuaW1hdGUnKSxcbiAgICBoaWRlOiBoaWRlLFxuICAgIGhlbHBlcnM6IGhlbHBlcnMsXG4gICAgY2xhc3NuYW1lczogcmVxdWlyZSgnLi9jbGFzc25hbWVzJyksXG4gICAgcGFyYWxsZWw6IGZ1bmN0aW9uIChvcGVyYXRpb25zKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih2aWV3LCBkb25lKXtcbiAgICAgICAgICAgIMOmLmVhY2hQYXJhbGxlbChvcGVyYXRpb25zLCBmdW5jdGlvbihmbiwgY2Ipe1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoZm4sIHZpZXcsIGNiKTtcbiAgICAgICAgICAgIH0sIGRvbmUpXG4gICAgICAgIH1cbiAgICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBraW5lbWF0aWNzO1xuIiwidmFyIGhvb2tzID0gcmVxdWlyZSgnLi9ob29rcycpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpO1xudmFyIGggPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbnZhciBjID0gcmVxdWlyZSgnLi9jbGFzc25hbWVzJyk7XG52YXIgw6YgPSByZXF1aXJlKCcuLi9hc3luYycpO1xuXG52YXIgU2xpZGVyID0gZnVuY3Rpb24gKGVsLCBvcHRzKSB7XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgdGhpcy5jdXJyZW50ID0gb3B0cy5jdXJyZW50IHx8IDA7XG4gICAgdGhpcy5wcmV2ID0gb3B0cy5wcmV2IHx8IDA7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuc2xpZGVzID0gW107XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdhLnByZXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzZWxmLnByZXZpb3VzKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdhLm5leHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzZWxmLm5leHQoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggIT09IHNlbGYuY3VycmVudCkge1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhzbGlkZS5lbCwgYy50cmFuc2xhdGUuUklHSFQpO1xuICAgICAgICB9XG4gICAgfSlcblxufTtcblNsaWRlci5wcm90b3R5cGUuY3JlYXRlU2xpZGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzbGlkZUVsZW1lbnRzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVzID4gLnNsaWRlJyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNsaWRlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIHNsaWRlID0gbmV3IFNsaWRlKGVsKTtcbiAgICAgICAgc2VsZi5zbGlkZXMucHVzaChzbGlkZSk7XG4gICAgfSk7XG59O1xuU2xpZGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG5cbn07XG5cblNsaWRlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChvbkNvbXBsZXRlKSB7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuICAgIHRoaXMuY3VycmVudCA9ICh0aGlzLmN1cnJlbnQgKyAxIDwgdGhpcy5zbGlkZXMubGVuZ3RoKSA/IHRoaXMuY3VycmVudCArIDEgOiAwO1xuICAgIHRoaXMudXBkYXRlKCduZXh0Jywgb25Db21wbGV0ZSk7XG59O1xuXG5TbGlkZXIucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24gKG9uQ29tcGxldGUpIHtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5jdXJyZW50ID0gKHRoaXMuY3VycmVudCA+IDApID8gdGhpcy5jdXJyZW50IC0gMSA6IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgdGhpcy51cGRhdGUoJ3ByZXYnLCBvbkNvbXBsZXRlKTtcbn07XG5cblNsaWRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRpcmVjdGlvbiwgb25Db21wbGV0ZSkge1xuICAgIHZhciBwcmV2U2xpZGUgPSB0aGlzLnNsaWRlc1t0aGlzLnByZXZdLmVsO1xuICAgIHZhciBjdXJyZW50U2xpZGUgPSB0aGlzLnNsaWRlc1t0aGlzLmN1cnJlbnRdLmVsO1xuICAgIGN1cnJlbnRTbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGgucmVtb3ZlQ2xhc3MoY3VycmVudFNsaWRlLCBoLmV2ZXJ5Q2xhc3NuYW1lKGMudHJhbnNsYXRlKSk7XG4gICAgaC5hZGRDbGFzcyhjdXJyZW50U2xpZGUsIChkaXJlY3Rpb24gPT09ICdwcmV2JykgPyBjLnRyYW5zbGF0ZS5MRUZUIDogYy50cmFuc2xhdGUuUklHSFQpO1xuICAgIC8vIGhvcnJpYmxlIGhhY2sgdG8gbWFrZSB0aGUgY3VycmVudFNsaWRlIGFjdHVhbGx5IG1vdmUgdG8gdGhlIG9wcG9zaXRlIHNpZGVcbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5pbmZvKCdmb3JjZSBsYXlvdXQgdGhyYXNoaW5nJywgZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50U2xpZGUpLnRyYW5zZm9ybSk7XG4gICAgY3VycmVudFNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGN1cnJlbnRTbGlkZS5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSknO1xuICAgIHByZXZTbGlkZS5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSknO1xuICAgIGguYWRkQ2xhc3MocHJldlNsaWRlLCBjLnRyYW5zaXRpb24uV0lUSCk7XG4gICAgaC5hZGRDbGFzcyhjdXJyZW50U2xpZGUsIGMudHJhbnNpdGlvbi5XSVRIKTtcbiAgICDDpi5wYXJhbGxlbChbXG4gICAgICAgIGZ1bmN0aW9uIChwYXJhbGxlbENiKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBoLmNscyhjdXJyZW50U2xpZGUsIGguZXZlcnlDbGFzc25hbWUoYy50cmFuc2xhdGUsIHRydWUpLCBwYXJhbGxlbENiKVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHBhcmFsbGVsQ2IpIHtcbiAgICAgICAgICAgIGguY2xzKHByZXZTbGlkZSwgWyhkaXJlY3Rpb24gPT09ICdwcmV2JykgPyBjLnRyYW5zbGF0ZS5SSUdIVCA6IGMudHJhbnNsYXRlLkxFRlRdLCBwYXJhbGxlbENiKVxuICAgICAgICB9XG4gICAgXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXJyZW50U2xpZGUuZmhvb2soJ2FmdGVyRW50ZXInKTtcbiAgICAgICAgcHJldlNsaWRlLmZob29rKCdhZnRlckV4aXQnKTtcbiAgICAgICAgaC5yZW1vdmVDbGFzcyhwcmV2U2xpZGUsIGMudHJhbnNpdGlvbi5XSVRIKTtcbiAgICAgICAgaC5yZW1vdmVDbGFzcyhjdXJyZW50U2xpZGUsIGMudHJhbnNpdGlvbi5XSVRIKTtcbiAgICAgICAgaWYgKHR5cGVvZiBvbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlKClcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIFNsaWRlID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xufTtcblxuZXh0ZW5kKFNsaWRlLnByb3RvdHlwZSwgaG9va3MpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVyOyIsInZhciBoID0gcmVxdWlyZSgnLi4vaGVscGVycycpO1xudmFyIMOmID0gcmVxdWlyZSgnLi4vLi4vYXN5bmMnKTtcbnZhciBjID0gcmVxdWlyZSgnLi4vY2xhc3NuYW1lcycpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9oaWRlJyk7XG52YXIgY3JlYXRlTWFzayA9IHJlcXVpcmUoJy4vY3JlYXRlTWFzaycpO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtWaWV3fSBvcHRpb25zLmZyb21cbiAqIEBwYXJhbSB7Vmlld30gb3B0aW9ucy50b1xuICogQHBhcmFtIHtBcHBsaWNhdGlvbn0gb3B0aW9ucy5hcHBcbiAqIEBwYXJhbSB7c3RyaW5nPX0gW29wdGlvbnMubWFza09wYWNpdHldXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wbGV0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvdmVyVHJhbnNpdGlvbihvcHRpb25zLCBjb21wbGV0ZSkge1xuICAgIHZhciBmcm9tVmlldyA9IG9wdGlvbnMuZnJvbTtcbiAgICB2YXIgdG9WaWV3ID0gb3B0aW9ucy50bztcbiAgICB2YXIgZnJvbSA9IGZyb21WaWV3LmVsO1xuICAgIHZhciBhcHAgPSBvcHRpb25zLmFwcC5lbDtcbiAgICB2YXIgdG8gPSB0b1ZpZXcuZWw7XG4gICAgdmFyIG1hc2sgPSBjcmVhdGVNYXNrKCk7XG5cblxuICAgIG1hc2suc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJ2Vhc2Utb3V0JztcbiAgICDDpi5zZXJpZXMoW1xuXG4gICAgICAgIGZyb21WaWV3LmZob29rKCdiZWZvcmVFeGl0JyksIC8vIGV4ZWMgYmxvY2tpbmcgXCJiZWZvcmVFeGl0XCIgaG9va3NcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBmcm9tVmlldy5ob29rKCdvbkV4aXQnKTsgLy8gZXhlYyBOT04tYmxvY2tpbmcgXCJvbkV4aXRcIiBob29rc1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhmcm9tLCBjLmRlcHRoLkZBUlRIRVNUKTsgLy9mcm9tVmlldyB3aWxsIGJlIG92ZXJsYXBlZCBieSBib3RoIG1hc2sgYW5kIHRvVmlld1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhtYXNrLCBjLmRlcHRoLkZBUiwgYy5vcGFjaXR5LlRSQU5TUEFSRU5UKTtcbiAgICAgICAgICAgIGFwcC5hcHBlbmQobWFzayk7IC8vYWRkZWQgdG8gYXBwIGJlY2F1c2UgaXQncyBzaW1wbGVyIGZvciB0cmFuc2Zvcm0gbWFuYWdlbWVudFxuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9WaWV3LmZob29rKCdiZWZvcmVFbnRlcicpLCAvLyBleGVjIGJsb2NraW5nIFwiYmVmb3JlRW50ZXJcIiBob29rc1xuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGguYWRkQ2xhc3ModG8sIFsgLy8gdGhhdCdzIHdoZXJlIHdlIHByZXBhcmUgdGhlIG5leHQgdmlldy4gSXQgaXMuLi5cbiAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZS5SSUdIVCwgLy8gcGxhY2VkIG9uIHRoZSByaWdodFxuICAgICAgICAgICAgICAgIGMudHJhbnNpdGlvbi5XSVRILCAvLyBhbmltYXRlZFxuICAgICAgICAgICAgICAgIGMuZGVwdGguTkVBUkVTVCwgLy8gYWJvdmUgZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgYy5zaGFkb3cuQkFTRSAvLyBoYXMgYSBkcm9wIHNoYWRvd1xuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBoLnJlbW92ZUNsYXNzKHRvLCBoLmV2ZXJ5Q2xhc3NuYW1lKGMuaGlkZSkpOyAvLyBtYWtlIHN1cmUgaXQgaXMgdmlzaWJsZVxuICAgICAgICAgICAgLy8gdGhlIG1hc2sgd2lsbCBvcGFjaWZ5IGZvciB0aGUgc2FtZSBhbW91bnQgb2YgdGltZSB0aGUgdG9WaWV3IHdpbGwgYXJyaXZlXG4gICAgICAgICAgICBtYXNrLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUodG8pLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIG1hc2suc3R5bGUub3BhY2l0eSA9IG9wdGlvbnMubWFza09wYWNpdHkgfHwgJzAuNSc7IC8vIHRoaXMgbGluZSB0cmlnZ2VycyB0aGUgdHJhbnNpdGlvblxuICAgICAgICAgICAgdG9WaWV3Lmhvb2soJ29uRW50ZXInKTsgLy8gZXhlYyBOT04tYmxvY2tpbmcgb25FbnRlciBob29rXG4gICAgICAgICAgICBoLmNscyh0bywgW1xuICAgICAgICAgICAgICAgIGgubWludXMoYy50cmFuc2xhdGUuUklHSFQpLFxuICAgICAgICAgICAgICAgIGMuc2hhZG93Lk1FRElVTV9ESUZGVVNFIC8vIGFuZCBvcGFjaWZ5IHRoZSBkcm9wIHNoYWRvd1xuICAgICAgICAgICAgXSwgY2IpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHsgLy8gdHJhbnNpdGlvbiBpcyBmdWxmaWxsZWRcbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3MoZnJvbSwgaC5ldmVyeUNsYXNzbmFtZShjLmRlcHRoKSwgYy50cmFuc2l0aW9uLldJVEgpOyAvL3Jlc2V0IGNsYXNzZXMgb24gZnJvbSBlbGVtZW50XG4gICAgICAgICAgICBoLmFkZENsYXNzKGZyb20sIGMuaGlkZS5ESVNQTEFZX05PTkUpOyAvLyBoaWRlIHRoYXQgb2xkIGNodW1cbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3ModG8sIFtcbiAgICAgICAgICAgICAgICBjLnRyYW5zaXRpb24uV0lUSCxcbiAgICAgICAgICAgICAgICBjLmRlcHRoLk5FQVJFU1QsXG4gICAgICAgICAgICAgICAgYy5zaGFkb3cuTUVESVVNX0RJRkZVU0UsXG4gICAgICAgICAgICAgICAgYy5zaGFkb3cuQkFTRVxuICAgICAgICAgICAgXSk7IC8vcmVzZXQgY2xhc3NlcyBvbiBcInRvXCIgZWxlbWVudFxuICAgICAgICAgICAgYXBwLnJlbW92ZUNoaWxkKG1hc2spOyAvLyByZW1vdmUgdGhlIG1hc2sgPyBzaG91bGQgd2UgbnVsbCBpdD9cbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vZXhlYyBibG9ja2luZyBhZnRlciBob29rc1xuICAgICAgICB0b1ZpZXcuZmhvb2soJ2FmdGVyRW50ZXInKSxcbiAgICAgICAgZnJvbVZpZXcuZmhvb2soJ2FmdGVyRXhpdCcpXG4gICAgXSwgY29tcGxldGUpXG59OyIsIi8qKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVNYXNrKCl7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIHMgPSBlbC5zdHlsZTtcbiAgICBzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBzLndpZHRoID0gJzEwMCUnO1xuICAgIHMuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHMudG9wID0gJzAnO1xuICAgIHMubGVmdCA9ICcwJztcbiAgICBzLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMCwgMC41KSc7XG4gICAgcmV0dXJuIGVsO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY292ZXI6IHJlcXVpcmUoJy4vY292ZXInKSxcbiAgcmV2ZWFsOiByZXF1aXJlKCcuL3JldmVhbCcpLFxuICBtb2RhbDogcmVxdWlyZSgnLi9tb2RhbCcpLFxufTtcbiIsInZhciDDpiA9IHJlcXVpcmUoJy4uLy4uL2FzeW5jJyk7XG52YXIgY3JlYXRlTWFzayA9IHJlcXVpcmUoJy4vY3JlYXRlTWFzaycpO1xudmFyIGMgPSByZXF1aXJlKCcuLi9jbGFzc25hbWVzJyk7XG52YXIgaCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtb2RhbChvcHRpb25zLCBjb21wbGV0ZSkge1xuICAgIChvcHRpb25zLnRvKSA/IHNob3cob3B0aW9ucywgY29tcGxldGUpIDogaGlkZShvcHRpb25zLCBjb21wbGV0ZSk7XG59O1xuLyoqXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7Vmlld30gb3B0aW9ucy50b1xuICogQHBhcmFtIHtBcHBsaWNhdGlvbn0gb3B0aW9ucy5hcHBcbiAqIEBwYXJhbSBjb21wbGV0ZVxuICovXG5mdW5jdGlvbiBzaG93KG9wdGlvbnMsIGNvbXBsZXRlKSB7XG4gICAgdmFyIG1vZGFsVmlldyA9IG9wdGlvbnMudG87XG4gICAgdmFyIGFwcCA9IG9wdGlvbnMuYXBwO1xuICAgIHZhciBlbCA9IG1vZGFsVmlldy5lbDtcbiAgICB2YXIgbWFzayA9IGNyZWF0ZU1hc2soKTtcblxuICAgIMOmLnNlcmllcyhbXG4gICAgICAgIG1vZGFsVmlldy5maG9vaygnYmVmb3JlRW50ZXInKSxcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBhcHAuZWwuYXBwZW5kQ2hpbGQobWFzayk7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhtYXNrLCBjLmRlcHRoLk5FQVIsIGMudHJhbnNpdGlvbi5XSVRILCBjLm9wYWNpdHkuVFJBTlNQQVJFTlQpO1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhlbCwgYy5kZXB0aC5ORUFSRVNULCBjLnRyYW5zbGF0ZS5CT1RUT00sIGMudHJhbnNpdGlvbi5XSVRIKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgw6YucGFyYWxsZWwoW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChwYXJhbGxlbENiKSB7XG4gICAgICAgICAgICAgICAgICAgIGguY2xzKG1hc2ssIFtjLm9wYWNpdHkuSEVBVlksIGgubWludXMoYy5vcGFjaXR5LlRSQU5TUEFSRU5UKV0sIHBhcmFsbGVsQ2IpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocGFyYWxsZWxDYikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsVmlldy5ob29rKCdvbkVudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGguY2xzKGVsLCBbaC5taW51cyhjLnRyYW5zbGF0ZS5CT1RUT00pXSwgcGFyYWxsZWxDYik7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSwgY2IpXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhlbCwgYy50cmFuc2l0aW9uLldJVEgsIGMuZGVwdGguTkVBUkVTVCk7XG4gICAgICAgICAgICBhcHAuZWwucmVtb3ZlQ2hpbGQobWFzayk7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LFxuICAgICAgICBtb2RhbFZpZXcuZmhvb2soJ2FmdGVyRW50ZXInKVxuICAgIF0sIGNvbXBsZXRlKTtcbn1cblxuZnVuY3Rpb24gaGlkZShvcHRpb25zLCBjb21wbGV0ZSkge1xuICAgIHZhciBtb2RhbFZpZXcgPSBvcHRpb25zLmZyb207XG4gICAgdmFyIGFwcCA9IG9wdGlvbnMuYXBwO1xuICAgIHZhciBlbCA9IG1vZGFsVmlldy5lbDtcbiAgICB2YXIgbWFzayA9IGNyZWF0ZU1hc2soKTtcblxuICAgIMOmLnNlcmllcyhbXG4gICAgICAgIG1vZGFsVmlldy5maG9vaygnYmVmb3JlRXhpdCcpLFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGFwcC5lbC5hcHBlbmRDaGlsZChtYXNrKTtcbiAgICAgICAgICAgIGguYWRkQ2xhc3MobWFzaywgYy5kZXB0aC5ORUFSLCBjLnRyYW5zaXRpb24uV0lUSCwgYy5vcGFjaXR5LkhFQVZZKTtcbiAgICAgICAgICAgIGguYWRkQ2xhc3MoZWwsIGMuZGVwdGguTkVBUkVTVCwgYy50cmFuc2xhdGUuQk9UVE9NLCBjLnRyYW5zaXRpb24uV0lUSCk7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIMOmLnBhcmFsbGVsKFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocGFyYWxsZWxDYikge1xuICAgICAgICAgICAgICAgICAgICBoLmNscyhtYXNrLCBbYy5vcGFjaXR5LlRSQU5TUEFSRU5ULCBoLm1pbnVzKGMub3BhY2l0eS5IRUFWWSldLCBwYXJhbGxlbENiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHBhcmFsbGVsQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxWaWV3Lmhvb2soJ29uRXhpdCcpO1xuICAgICAgICAgICAgICAgICAgICBoLmNscyhlbCwgW2MudHJhbnNsYXRlLkJPVFRPTV0sIHBhcmFsbGVsQ2IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sIGNiKVxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGguY2xzKGVsLCBbYy50cmFuc2l0aW9uLldJVEgsIGMuaGlkZS5ESVNQTEFZX05PTkVdKTtcbiAgICAgICAgICAgIGFwcC5lbC5yZW1vdmVDaGlsZChtYXNrKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGFsVmlldy5maG9vaygnYWZ0ZXJFeGl0JylcbiAgICBdLCBjb21wbGV0ZSk7XG59IiwidmFyIGggPSByZXF1aXJlKCcuLi9oZWxwZXJzJyk7XG52YXIgw6YgPSByZXF1aXJlKCcuLi8uLi9hc3luYycpO1xuXG52YXIgYyA9IHJlcXVpcmUoJy4uL2NsYXNzbmFtZXMnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaGlkZScpO1xudmFyIGNyZWF0ZU1hc2sgPSByZXF1aXJlKCcuL2NyZWF0ZU1hc2snKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgY29tcGxldGUpIHtcbiAgICB2YXIgZnJvbVZpZXcgPSBvcHRpb25zLmZyb207XG4gICAgdmFyIHRvVmlldyA9IG9wdGlvbnMudG87XG4gICAgdmFyIGZyb20gPSBmcm9tVmlldy5lbDtcbiAgICB2YXIgdG8gPSB0b1ZpZXcuZWw7XG4gICAgdmFyIGFwcCA9IG9wdGlvbnMuYXBwLmVsO1xuICAgIHZhciBtYXNrID0gY3JlYXRlTWFzaygpO1xuICAgIHZhciBpbnRlcnZhbDtcbiAgICDDpi5zZXJpZXMoW1xuICAgICAgICBmcm9tVmlldy5maG9vaygnYmVmb3JlRXhpdCcpLFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGZyb21WaWV3Lmhvb2soJ29uRXhpdCcpO1xuICAgICAgICAgICAgLy90b1ZpZXcgaXMgYmVoaW5kXG4gICAgICAgICAgICBoLmFkZENsYXNzKGZyb20sIGMuZGVwdGguTkVBUkVTVCk7XG4gICAgICAgICAgICBoLmFkZENsYXNzKHRvLCBjLmRlcHRoLkZBUlRIRVNUKTtcbiAgICAgICAgICAgIC8vdG9WaWV3IGlzIHZpc2libGVcbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3ModG8sIGguZXZlcnlDbGFzc25hbWUoYy5oaWRlKSk7XG4gICAgICAgICAgICAvL2FkZCB0aGUgbWFzayB0byB0b1ZpZXdcbiAgICAgICAgICAgIGFwcC5hcHBlbmQobWFzayk7XG4gICAgICAgICAgICBoLmFkZENsYXNzKG1hc2ssIGMuZGVwdGguRkFSKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvVmlldy5maG9vaygnYmVmb3JlRW50ZXInKSxcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICAvL2Zyb21WaWV3IHdpbGwgbW92ZSwgYW5kIGlzIHRoZSBuZWFyZXN0IHZpZXdcbiAgICAgICAgICAgIC8vZnJvbVZpZXcgd2lsbCBjYXN0IGEgc2hhZG93IG9uIHRvVmlld1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhmcm9tLCBbYy50cmFuc2l0aW9uLldJVEgsIGMuZGVwdGguTkVBUkVTVCwgYy5zaGFkb3cuQkFTRSwgYy5zaGFkb3cuQklHX0RJRkZVU0VdKTtcbiAgICAgICAgICAgIC8vbWFzayB3aWxsIHRyYW5zaXRpb24gZm9yIHRoZSBzYW1lIGR1cmF0aW9uIHRoYXQgJGZyb20gd2lsbCBsZWF2ZVxuICAgICAgICAgICAgbWFzay5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKGZyb20pLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIG1hc2suc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ29wYWNpdHknO1xuICAgICAgICAgICAgbWFzay5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnZWFzZS1pbi1vdXQnO1xuICAgICAgICAgICAgLy90cmlnZ2VyIHRoZSBvbkVudGVyIGp1c3QgYmVmb3JlIHN0YXJ0aW5nIHRoZSB0cmFuc2l0aW9uXG4gICAgICAgICAgICB0b1ZpZXcuaG9vaygnb25FbnRlcicpO1xuICAgICAgICAgICAgLy90cmFuc2l0aW9uIGhhcHBlbnMgaGVyZSA6IG9sZFZpZXcgbW92ZSByaWdodFxuICAgICAgICAgICAgw6YucGFyYWxsZWwoW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHBhcmFsbGVsQ2Ipe1xuICAgICAgICAgICAgICAgICAgICBoLmNscyhmcm9tLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZS5SSUdIVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGgubWludXMoYy5zaGFkb3cuQklHX0RJRkZVU0UpXG4gICAgICAgICAgICAgICAgICAgIF0sIHBhcmFsbGVsQ2IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHBhcmFsbGVsQ2Ipe1xuICAgICAgICAgICAgICAgICAgICBoLmNscyhtYXNrLCBbYy5vcGFjaXR5LlRSQU5TUEFSRU5UXSwgcGFyYWxsZWxDYilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLCBjYik7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3MoZnJvbSxcbiAgICAgICAgICAgICAgICBjLnRyYW5zaXRpb24uV0lUSCxcbiAgICAgICAgICAgICAgICBoLmV2ZXJ5Q2xhc3NuYW1lKGMuZGVwdGgpLFxuICAgICAgICAgICAgICAgIGguZXZlcnlDbGFzc25hbWUoYy5zaGFkb3cpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhmcm9tLCBjLmhpZGUuRElTUExBWV9OT05FKTtcbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3ModG8sIGMudHJhbnNpdGlvbi5XSVRILCBoLmV2ZXJ5Q2xhc3NuYW1lKGMuZGVwdGgpKTtcbiAgICAgICAgICAgIC8vcmVtb3ZlIHRoZSBtYXNrXG4gICAgICAgICAgICBhcHAucmVtb3ZlQ2hpbGQobWFzayk7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LFxuICAgICAgICB0b1ZpZXcuZmhvb2soJ2FmdGVyRW50ZXInKSxcbiAgICAgICAgZnJvbVZpZXcuZmhvb2soJ2FmdGVyRXhpdCcpXG4gICAgXSwgY29tcGxldGUpO1xufTsiLCJ2YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyk7XG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hhbmRsZWJhcnMvcnVudGltZScpO1xuXG52YXIgaG9va3MgPSByZXF1aXJlKCcuLi9raW5lbWF0aWMvaG9va3MnKTtcbi8qKlxuICogQGNsYXNzIFZpZXdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgVGVtcGxhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5oYiA9IEhhbmRsZWJhcnMudGVtcGxhdGVzW25hbWVdO1xufTtcblxuZXh0ZW5kKFRlbXBsYXRlLnByb3RvdHlwZSwgaG9va3MpO1xuXG5UZW1wbGF0ZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzO1xuXG4gICAgdmFyIFZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjaGlsZFNlbGYgPSB0aGlzO1xuICAgICAgICBjaGlsZFNlbGYucGF0aCA9IHBhdGg7XG4gICAgICAgIGNoaWxkU2VsZi5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgY2hpbGRTZWxmLmVsLmNsYXNzTGlzdC5hZGQoJ3ZpZXcnKTtcbiAgICAgICAgY2hpbGRTZWxmLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgcGF0aCk7XG4gICAgfTtcblxuICAgIFZpZXcucHJvdG90eXBlID0gdGhpcztcbiAgICBWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUuaGIocGFyYW1zIHx8wqB0aGlzLmRhdGEpO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgVmlldygpO1xufTtcblxuXG5UZW1wbGF0ZS5wcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lcykge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZC5hcHBseSh0aGlzLmVsLmNsYXNzTGlzdCwgY2xhc3NOYW1lcy5zcGxpdCgnICcpKTtcbn07XG5cblRlbXBsYXRlLnByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWVzKSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlLmFwcGx5KHRoaXMuZWwuY2xhc3NMaXN0LCBjbGFzc05hbWVzLnNwbGl0KCcgJykpO1xufTtcblxuVGVtcGxhdGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGU7Il19
