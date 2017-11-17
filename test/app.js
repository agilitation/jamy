(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['friends'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header>\n  <nav>\n    <a href=\"#/profile/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"arrow\">\n        <svg style=\"height: 1em; width: 1em\" viewBox=\"0 0 64 64\">\n          <polygon points=\"52 8.081 43.919 0 12 31.919 12.081 32 12 32.081 43.919 64 52 55.919 28.081 32 52 8.081\">\n          </polygon>\n        </svg>\n      </div>\n    </a>\n    <div class=\"spacer\"></div>\n  </nav>\n  <h1>Friends</h1>\n</header>\n<div class=\"content\">\n  <div class=\"container\">\n    <div class=\"progress\">\n      <div class=\"bar\" style=\"width: 28%\"></div>\n    </div>\n    <div class=\"legend\">\n      1/5 semaines de connexion\n    </div>\n    <p>Consulter le site chaque semaine vous rapporte des points, et même un bonus !</p>\n    <!-- CHECKLIST -->\n    <div class=\"centered\">\n      <div class=\"checklist\">\n        <div class=\"border\" style=\"animation-duration: 2s\"></div>\n        <ul>\n          <li class=\"checked\">\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 1</p>\n              <p><span class=\"reward\">+10</span></p>\n            </div>\n          </li>\n          <li class=\"checked active\">\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 2</p>\n              <p><span class=\"reward\">+15</span></p>\n            </div>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 3</p>\n              <p><span class=\"reward\">+15</span></p>\n            </div>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 4</p>\n              <p><span class=\"reward\">+15</span></p>\n            </div>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 5</p>\n              <p><span class=\"reward\">livraison gratuite !</span></p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['modal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content modal\">\n  <div class=\"container greeting\">\n      <h1>Salut Laura !</h1>\n      <p>Tu as des missions en cours</p>\n  </div>\n  <div class=\"container full\">\n    <div class=\"slider\">\n      <a href=\"#prev\" class=\"arrow prev\">\n        <svg viewBox=\"0 0 16 36\">\n          <polyline points=\"10.379 31.115 5.32 17.979 10.5 4.844\"></polyline>\n        </svg>\n      </a>\n      <div class=\"slides\">\n        <div class=\"slide\">\n          <div class=\"badge\">\n            <div class=\"icon\">\n              <svg version=\"1.1\" viewBox=\"0 0 204 204\" class=\"circle\">\n                <path\n                    stroke=\"#000000\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"rgba(0,0,0,0)\"\n                    d=\"M 102, 102\n            m -100, 0\n            a 100,100 0 1,0 200,0\n            a 100,100 0 1,0 -200,0\">\n                </path>\n              </svg>\n              <img src=\"../assets/icons8-search.png\" alt=\"\">\n              <span class=\"level\">2</span>\n            </div>\n          </div>\n          <h4>Passionné</h4>\n          <div class=\"progress\">\n            <div class=\"bar\" style=\"width: 20%\"></div>\n          </div>\n          <div class=\"legend\">\n            Passer 2 commandes supplémentaires\n          </div>\n        </div>\n      </div>\n      <a href=\"#next\" class=\"arrow next\">\n        <svg viewBox=\"0 0 16 36\">\n          <polyline points=\"5.32 4.844 10.5 17.979 5.441 31.115\"></polyline>\n        </svg>\n      </a>\n    </div>\n  </div>\n  <div class=\"container action\">\n    <button onclick=\"app.hideModal()\" class=\"btn\">Mon compte</button>\n  </div>\n</div>";
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
},{"../gen/templates":1,"./application":23,"./async":24,"./kinematic":30,"./kinematic/helpers":27,"./navigation/template":36}],23:[function(require,module,exports){
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
        BOTTOM: 'kinematic-translate-bottom'
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

},{"../async":24,"./animate":25,"./classnames":26,"./helpers":27,"./hide":28,"./transitions":33}],31:[function(require,module,exports){
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
},{"../../async":24,"../classnames":26,"../helpers":27,"../hide":28,"./createMask":32}],32:[function(require,module,exports){
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
},{}],33:[function(require,module,exports){
module.exports = {
  cover: require('./cover'),
  reveal: require('./reveal'),
  modal: require('./modal'),
};

},{"./cover":31,"./modal":34,"./reveal":35}],34:[function(require,module,exports){
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
},{"../../async":24,"../classnames":26,"../helpers":27,"./createMask":32}],35:[function(require,module,exports){
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
},{"../../async":24,"../classnames":26,"../helpers":27,"../hide":28,"./createMask":32}],36:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL2dlbi90ZW1wbGF0ZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMucnVudGltZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9kZWNvcmF0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvZGVjb3JhdG9ycy9pbmxpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9leGNlcHRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9oZWxwZXJzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9oZWxwZXJzL2lmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvaGVscGVycy9sb2cuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvdXRpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwiYXBwLmpzIiwiYXBwbGljYXRpb24vaW5kZXguanMiLCJhc3luYy9pbmRleC5qcyIsImtpbmVtYXRpYy9hbmltYXRlLmpzIiwia2luZW1hdGljL2NsYXNzbmFtZXMuanMiLCJraW5lbWF0aWMvaGVscGVycy5qcyIsImtpbmVtYXRpYy9oaWRlLmpzIiwia2luZW1hdGljL2hvb2tzLmpzIiwia2luZW1hdGljL2luZGV4LmpzIiwia2luZW1hdGljL3RyYW5zaXRpb25zL2NvdmVyLmpzIiwia2luZW1hdGljL3RyYW5zaXRpb25zL2NyZWF0ZU1hc2suanMiLCJraW5lbWF0aWMvdHJhbnNpdGlvbnMvaW5kZXguanMiLCJraW5lbWF0aWMvdHJhbnNpdGlvbnMvbW9kYWwuanMiLCJraW5lbWF0aWMvdHJhbnNpdGlvbnMvcmV2ZWFsLmpzIiwibmF2aWdhdGlvbi90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQ7Ozs7QUMzR0Q7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFycy9ydW50aW1lXCIpOyAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy50ZW1wbGF0ZSwgdGVtcGxhdGVzID0gSGFuZGxlYmFycy50ZW1wbGF0ZXMgPSBIYW5kbGViYXJzLnRlbXBsYXRlcyB8fCB7fTtcbnRlbXBsYXRlc1snZnJpZW5kcyddID0gdGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlcjtcblxuICByZXR1cm4gXCI8aGVhZGVyPlxcbiAgPG5hdj5cXG4gICAgPGEgaHJlZj1cXFwiIy9wcm9maWxlL1wiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYXJyb3dcXFwiPlxcbiAgICAgICAgPHN2ZyBzdHlsZT1cXFwiaGVpZ2h0OiAxZW07IHdpZHRoOiAxZW1cXFwiIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCI+XFxuICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cXFwiNTIgOC4wODEgNDMuOTE5IDAgMTIgMzEuOTE5IDEyLjA4MSAzMiAxMiAzMi4wODEgNDMuOTE5IDY0IDUyIDU1LjkxOSAyOC4wODEgMzIgNTIgOC4wODFcXFwiPlxcbiAgICAgICAgICA8L3BvbHlnb24+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzcGFjZXJcXFwiPjwvZGl2PlxcbiAgPC9uYXY+XFxuICA8aDE+RnJpZW5kczwvaDE+XFxuPC9oZWFkZXI+XFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzc1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYmFyXFxcIiBzdHlsZT1cXFwid2lkdGg6IDI4JVxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsZWdlbmRcXFwiPlxcbiAgICAgIDEvNSBzZW1haW5lcyBkZSBjb25uZXhpb25cXG4gICAgPC9kaXY+XFxuICAgIDxwPkNvbnN1bHRlciBsZSBzaXRlIGNoYXF1ZSBzZW1haW5lIHZvdXMgcmFwcG9ydGUgZGVzIHBvaW50cywgZXQgbcOqbWUgdW4gYm9udXMgITwvcD5cXG4gICAgPCEtLSBDSEVDS0xJU1QgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNlbnRlcmVkXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2xpc3RcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm9yZGVyXFxcIiBzdHlsZT1cXFwiYW5pbWF0aW9uLWR1cmF0aW9uOiAyc1xcXCI+PC9kaXY+XFxuICAgICAgICA8dWw+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiY2hlY2tlZFxcXCI+XFxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTIwIDEyMFxcXCIgY2xhc3M9XFxcImNoZWNrXFxcIj5cXG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjYwXFxcIiBjeT1cXFwiNjBcXFwiIHI9XFxcIjUwXFxcIj48L2NpcmNsZT5cXG4gICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XFxcIjg2Ljg3NSA0NC4wNjMgNTMuNzUgNzYuNTYzIDM3LjE1NyA2MC44NDNcXFwiPjwvcG9seWxpbmU+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsXFxcIj5cXG4gICAgICAgICAgICAgIDxwPlNlbWFpbmUgMTwvcD5cXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzPVxcXCJyZXdhcmRcXFwiPisxMDwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiY2hlY2tlZCBhY3RpdmVcXFwiPlxcbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cXFwiMCAwIDEyMCAxMjBcXFwiIGNsYXNzPVxcXCJjaGVja1xcXCI+XFxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI2MFxcXCIgY3k9XFxcIjYwXFxcIiByPVxcXCI1MFxcXCI+PC9jaXJjbGU+XFxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVxcXCI4Ni44NzUgNDQuMDYzIDUzLjc1IDc2LjU2MyAzNy4xNTcgNjAuODQzXFxcIj48L3BvbHlsaW5lPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbFxcXCI+XFxuICAgICAgICAgICAgICA8cD5TZW1haW5lIDI8L3A+XFxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzcz1cXFwicmV3YXJkXFxcIj4rMTU8L3NwYW4+PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTIwIDEyMFxcXCIgY2xhc3M9XFxcImNoZWNrXFxcIj5cXG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjYwXFxcIiBjeT1cXFwiNjBcXFwiIHI9XFxcIjUwXFxcIj48L2NpcmNsZT5cXG4gICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XFxcIjg2Ljg3NSA0NC4wNjMgNTMuNzUgNzYuNTYzIDM3LjE1NyA2MC44NDNcXFwiPjwvcG9seWxpbmU+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsXFxcIj5cXG4gICAgICAgICAgICAgIDxwPlNlbWFpbmUgMzwvcD5cXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzPVxcXCJyZXdhcmRcXFwiPisxNTwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxMjAgMTIwXFxcIiBjbGFzcz1cXFwiY2hlY2tcXFwiPlxcbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNjBcXFwiIGN5PVxcXCI2MFxcXCIgcj1cXFwiNTBcXFwiPjwvY2lyY2xlPlxcbiAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cXFwiODYuODc1IDQ0LjA2MyA1My43NSA3Ni41NjMgMzcuMTU3IDYwLjg0M1xcXCI+PC9wb2x5bGluZT5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWxcXFwiPlxcbiAgICAgICAgICAgICAgPHA+U2VtYWluZSA0PC9wPlxcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3M9XFxcInJld2FyZFxcXCI+KzE1PC9zcGFuPjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cXFwiMCAwIDEyMCAxMjBcXFwiIGNsYXNzPVxcXCJjaGVja1xcXCI+XFxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI2MFxcXCIgY3k9XFxcIjYwXFxcIiByPVxcXCI1MFxcXCI+PC9jaXJjbGU+XFxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVxcXCI4Ni44NzUgNDQuMDYzIDUzLjc1IDc2LjU2MyAzNy4xNTcgNjAuODQzXFxcIj48L3BvbHlsaW5lPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbFxcXCI+XFxuICAgICAgICAgICAgICA8cD5TZW1haW5lIDU8L3A+XFxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzcz1cXFwicmV3YXJkXFxcIj5saXZyYWlzb24gZ3JhdHVpdGUgITwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG50ZW1wbGF0ZXNbJ21vZGFsJ10gPSB0ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50IG1vZGFsXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBncmVldGluZ1xcXCI+XFxuICAgICAgPGgxPlNhbHV0IExhdXJhICE8L2gxPlxcbiAgICAgIDxwPlR1IGFzIGRlcyBtaXNzaW9ucyBlbiBjb3VyczwvcD5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGZ1bGxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJcXFwiPlxcbiAgICAgIDxhIGhyZWY9XFxcIiNwcmV2XFxcIiBjbGFzcz1cXFwiYXJyb3cgcHJldlxcXCI+XFxuICAgICAgICA8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAzNlxcXCI+XFxuICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XFxcIjEwLjM3OSAzMS4xMTUgNS4zMiAxNy45NzkgMTAuNSA0Ljg0NFxcXCI+PC9wb2x5bGluZT5cXG4gICAgICAgIDwvc3ZnPlxcbiAgICAgIDwvYT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzbGlkZXNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2xpZGVcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWRnZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDIwNCAyMDRcXFwiIGNsYXNzPVxcXCJjaXJjbGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVxcXCIjMDAwMDAwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgZmlsbD1cXFwicmdiYSgwLDAsMCwwKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk0gMTAyLCAxMDJcXG4gICAgICAgICAgICBtIC0xMDAsIDBcXG4gICAgICAgICAgICBhIDEwMCwxMDAgMCAxLDAgMjAwLDBcXG4gICAgICAgICAgICBhIDEwMCwxMDAgMCAxLDAgLTIwMCwwXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9wYXRoPlxcbiAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vYXNzZXRzL2ljb25zOC1zZWFyY2gucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGV2ZWxcXFwiPjI8L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8aDQ+UGFzc2lvbm7DqTwvaDQ+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjAlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlZ2VuZFxcXCI+XFxuICAgICAgICAgICAgUGFzc2VyIDIgY29tbWFuZGVzIHN1cHBsw6ltZW50YWlyZXNcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8YSBocmVmPVxcXCIjbmV4dFxcXCIgY2xhc3M9XFxcImFycm93IG5leHRcXFwiPlxcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMzZcXFwiPlxcbiAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVxcXCI1LjMyIDQuODQ0IDEwLjUgMTcuOTc5IDUuNDQxIDMxLjExNVxcXCI+PC9wb2x5bGluZT5cXG4gICAgICAgIDwvc3ZnPlxcbiAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBhY3Rpb25cXFwiPlxcbiAgICA8YnV0dG9uIG9uY2xpY2s9XFxcImFwcC5oaWRlTW9kYWwoKVxcXCIgY2xhc3M9XFxcImJ0blxcXCI+TW9uIGNvbXB0ZTwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcbnRlbXBsYXRlc1sncHJvZmlsZSddID0gdGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlcjtcblxuICByZXR1cm4gXCI8aGVhZGVyPlxcbiAgPGRpdiBjbGFzcz1cXFwicG9pbnRzXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInZhbHVlXFxcIj4xIDI1Nzwvc3Bhbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiaW5mb1xcXCI+aTwvYnV0dG9uPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidW5pdFxcXCI+cG9pbnRzPC9zcGFuPlxcbiAgPC9kaXY+XFxuICA8ZGl2IHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7IFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNTUlO1xcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY2FsZVxcXCI+XFxuICAgICAgPHNwYW4gc3R5bGU9XFxcImxlZnQ6IDA7XFxcIj41MDA8L3NwYW4+XFxuICAgICAgPHNwYW4gc3R5bGU9XFxcImxlZnQ6IDUwJVxcXCI+MTAwMDwvc3Bhbj5cXG4gICAgICA8c3BhbiBzdHlsZT1cXFwibGVmdDogMTAwJVxcXCI+MTUwMDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCI+w4ljaGFuZ2VyPC9idXR0b24+XFxuPC9oZWFkZXI+XFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgZnVsbCBiYWRnZXNcXFwiPlxcbiAgICA8aDI+Tml2ZWF1eDwvaDI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImJhZGdlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgIDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjA0IDIwNFxcXCIgY2xhc3M9XFxcImNpcmNsZVxcXCI+XFxuICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBmaWxsPVxcXCJyZ2JhKDAsMCwwLDApXFxcIlxcbiAgICAgICAgICAgICAgZD1cXFwiTSAxMDIsIDEwMlxcbiAgICAgICAgICAgIG0gLTEwMCwgMFxcbiAgICAgICAgICAgIGEgMTAwLDEwMCAwIDEsMCAyMDAsMFxcbiAgICAgICAgICAgIGEgMTAwLDEwMCAwIDEsMCAtMjAwLDBcXFwiPlxcbiAgICAgICAgICA8L3BhdGg+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi9hc3NldHMvaWNvbnM4LXNlYXJjaC5wbmdcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbFxcXCI+XFxuICAgICAgICA8aDM+Q3VyaWV1eDwvaDM+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcyBtaW5pXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFyXFxcIiBzdHlsZT1cXFwid2lkdGg6NDAlXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVnZW5kXFxcIj5cXG4gICAgICAgICAgMTUvMjAgZmljaGVzIHByb2R1aXRzIGNvbnN1bHTDqWVzXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhY3Rpb25cXFwiPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiIy9mcmllbmRzXFxcIj5cXG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMzZcXFwiPlxcbiAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XFxcIjUuMzIgNC44NDQgMTAuNSAxNy45NzkgNS40NDEgMzEuMTE1XFxcIj48L3BvbHlsaW5lPlxcbiAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgIDwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxoMj5PbmUtc2hvdDwvaDI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImJhZGdlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgIDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjA0IDIwNFxcXCIgY2xhc3M9XFxcImNpcmNsZVxcXCI+XFxuICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBmaWxsPVxcXCJyZ2JhKDAsMCwwLDApXFxcIlxcbiAgICAgICAgICAgICAgZD1cXFwiTSAxMDIsIDEwMlxcbiAgICAgICAgICAgIG0gLTEwMCwgMFxcbiAgICAgICAgICAgIGEgMTAwLDEwMCAwIDEsMCAyMDAsMFxcbiAgICAgICAgICAgIGEgMTAwLDEwMCAwIDEsMCAtMjAwLDBcXFwiPlxcbiAgICAgICAgICA8L3BhdGg+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi9hc3NldHMvaWNvbnM4LXNlYXJjaC5wbmdcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbFxcXCI+XFxuICAgICAgICA8aDM+RmFuPC9oMz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxlZ2VuZFxcXCI+XFxuICAgICAgICAgIExpa2UgdXMgb24gRmFjZWJvb2shXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBvaW50c1xcXCI+KyAzMDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFjdGlvblxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gc21hbGxcXFwiPlxcbiAgICAgICAgICBMaWtlXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImJhZGdlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgIDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjA0IDIwNFxcXCIgY2xhc3M9XFxcImNpcmNsZVxcXCI+XFxuICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBmaWxsPVxcXCJyZ2JhKDAsMCwwLDApXFxcIlxcbiAgICAgICAgICAgICAgZD1cXFwiTSAxMDIsIDEwMlxcbiAgICAgICAgICAgIG0gLTEwMCwgMFxcbiAgICAgICAgICAgIGEgMTAwLDEwMCAwIDEsMCAyMDAsMFxcbiAgICAgICAgICAgIGEgMTAwLDEwMCAwIDEsMCAtMjAwLDBcXFwiPlxcbiAgICAgICAgICA8L3BhdGg+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi9hc3NldHMvaWNvbnM4LXNlYXJjaC5wbmdcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbFxcXCI+XFxuICAgICAgICA8aDM+Q3VyaWV1eDwvaDM+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcyBtaW5pXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFyXFxcIiBzdHlsZT1cXFwid2lkdGg6NDAlXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVnZW5kXFxcIj5cXG4gICAgICAgICAgMTUvMjAgZmljaGVzIHByb2R1aXRzIGNvbnN1bHTDqWVzXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxwPjxhIGhyZWY9XFxcIiMvcHJvZmlsZS9cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCIvZnJpZW5kc1xcXCI+RnJpZW5kczwvYT48L3A+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgb25jbGljaz1cXFwiYXBwLnNob3dNb2RhbCgpXFxcIj5Nb24gQ29tcHRlPC9idXR0b24+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBzbWFsbFxcXCI+QnV0dG9uIHNtYWxsPC9idXR0b24+XFxuXFxuICAgIDxoMj5Qcm9ncmVzc2JhcjwvaDI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDo4MCVcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGgyPlByb2dyZXNzYmFyIG1pbmk8L2gyPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcyBtaW5pXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDo4MCVcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcblxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcbiIsImltcG9ydCAqIGFzIGJhc2UgZnJvbSAnLi9oYW5kbGViYXJzL2Jhc2UnO1xuXG4vLyBFYWNoIG9mIHRoZXNlIGF1Z21lbnQgdGhlIEhhbmRsZWJhcnMgb2JqZWN0LiBObyBuZWVkIHRvIHNldHVwIGhlcmUuXG4vLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuaW1wb3J0IFNhZmVTdHJpbmcgZnJvbSAnLi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9oYW5kbGViYXJzL2V4Y2VwdGlvbic7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL2hhbmRsZWJhcnMvdXRpbHMnO1xuaW1wb3J0ICogYXMgcnVudGltZSBmcm9tICcuL2hhbmRsZWJhcnMvcnVudGltZSc7XG5cbmltcG9ydCBub0NvbmZsaWN0IGZyb20gJy4vaGFuZGxlYmFycy9uby1jb25mbGljdCc7XG5cbi8vIEZvciBjb21wYXRpYmlsaXR5IGFuZCB1c2FnZSBvdXRzaWRlIG9mIG1vZHVsZSBzeXN0ZW1zLCBtYWtlIHRoZSBIYW5kbGViYXJzIG9iamVjdCBhIG5hbWVzcGFjZVxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICBsZXQgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuICBVdGlscy5leHRlbmQoaGIsIGJhc2UpO1xuICBoYi5TYWZlU3RyaW5nID0gU2FmZVN0cmluZztcbiAgaGIuRXhjZXB0aW9uID0gRXhjZXB0aW9uO1xuICBoYi5VdGlscyA9IFV0aWxzO1xuICBoYi5lc2NhcGVFeHByZXNzaW9uID0gVXRpbHMuZXNjYXBlRXhwcmVzc2lvbjtcblxuICBoYi5WTSA9IHJ1bnRpbWU7XG4gIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24oc3BlYykge1xuICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcbiAgfTtcblxuICByZXR1cm4gaGI7XG59XG5cbmxldCBpbnN0ID0gY3JlYXRlKCk7XG5pbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxubm9Db25mbGljdChpbnN0KTtcblxuaW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdDtcbiIsImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjExJztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cbmV4cG9ydCBjb25zdCBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcbiAgNzogJz49IDQuMC4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKGBBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCIke25hbWV9XCIgYXMgdW5kZWZpbmVkYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHtjcmVhdGVGcmFtZSwgbG9nZ2VyfTtcbiIsImltcG9ydCByZWdpc3RlcklubGluZSBmcm9tICcuL2RlY29yYXRvcnMvaW5saW5lJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMoaW5zdGFuY2UpIHtcbiAgcmVnaXN0ZXJJbmxpbmUoaW5zdGFuY2UpO1xufVxuXG4iLCJpbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckRlY29yYXRvcignaW5saW5lJywgZnVuY3Rpb24oZm4sIHByb3BzLCBjb250YWluZXIsIG9wdGlvbnMpIHtcbiAgICBsZXQgcmV0ID0gZm47XG4gICAgaWYgKCFwcm9wcy5wYXJ0aWFscykge1xuICAgICAgcHJvcHMucGFydGlhbHMgPSB7fTtcbiAgICAgIHJldCA9IGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhcnRpYWxzIHN0YWNrIGZyYW1lIHByaW9yIHRvIGV4ZWMuXG4gICAgICAgIGxldCBvcmlnaW5hbCA9IGNvbnRhaW5lci5wYXJ0aWFscztcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gZXh0ZW5kKHt9LCBvcmlnaW5hbCwgcHJvcHMucGFydGlhbHMpO1xuICAgICAgICBsZXQgcmV0ID0gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9yaWdpbmFsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm9wcy5wYXJ0aWFsc1tvcHRpb25zLmFyZ3NbMF1dID0gb3B0aW9ucy5mbjtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuIiwiXG5jb25zdCBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgbGV0IGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIGxldCB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAobG9jKSB7XG4gICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xuXG4gICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29sdW1uJywge1xuICAgICAgICAgIHZhbHVlOiBjb2x1bW4sXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAobm9wKSB7XG4gICAgLyogSWdub3JlIGlmIHRoZSBicm93c2VyIGlzIHZlcnkgcGFydGljdWxhciAqL1xuICB9XG59XG5cbkV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjZXB0aW9uO1xuIiwiaW1wb3J0IHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJFYWNoIGZyb20gJy4vaGVscGVycy9lYWNoJztcbmltcG9ydCByZWdpc3RlckhlbHBlck1pc3NpbmcgZnJvbSAnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJztcbmltcG9ydCByZWdpc3RlcklmIGZyb20gJy4vaGVscGVycy9pZic7XG5pbXBvcnQgcmVnaXN0ZXJMb2cgZnJvbSAnLi9oZWxwZXJzL2xvZyc7XG5pbXBvcnQgcmVnaXN0ZXJMb29rdXAgZnJvbSAnLi9oZWxwZXJzL2xvb2t1cCc7XG5pbXBvcnQgcmVnaXN0ZXJXaXRoIGZyb20gJy4vaGVscGVycy93aXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgcmVnaXN0ZXJCbG9ja0hlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlckVhY2goaW5zdGFuY2UpO1xuICByZWdpc3RlckhlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlcklmKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb2coaW5zdGFuY2UpO1xuICByZWdpc3Rlckxvb2t1cChpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyV2l0aChpbnN0YW5jZSk7XG59XG4iLCJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBjcmVhdGVGcmFtZSwgaXNBcnJheX0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGxldCBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZuKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoY29udGV4dCA9PT0gZmFsc2UgfHwgY29udGV4dCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgIGlmIChjb250ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgICAgb3B0aW9ucy5pZHMgPSBbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzLmVhY2goY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBsZXQgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgIG9wdGlvbnMgPSB7ZGF0YTogZGF0YX07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHthcHBlbmRDb250ZXh0UGF0aCwgYmxvY2tQYXJhbXMsIGNyZWF0ZUZyYW1lLCBpc0FycmF5LCBpc0Z1bmN0aW9ufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG4gICAgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbixcbiAgICAgICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJldCA9ICcnLFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb250ZXh0UGF0aDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IGJsb2NrUGFyYW1zKFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLCBbY29udGV4dFBhdGggKyBmaWVsZCwgbnVsbF0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcmlvcktleTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29udGV4dCkge1xuICAgICAgICAgIGlmIChjb250ZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIHJ1bm5pbmcgdGhlIGl0ZXJhdGlvbnMgb25lIHN0ZXAgb3V0IG9mIHN5bmMgc28gd2UgY2FuIGRldGVjdFxuICAgICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuICAgICAgICAgICAgLy8gYW4gaXRlcm1lZGlhdGUga2V5cyBhcnJheS5cbiAgICAgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaW9yS2V5ID0ga2V5O1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuIiwiaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaGVscGVyTWlzc2luZycsIGZ1bmN0aW9uKC8qIFthcmdzLCBdb3B0aW9ucyAqLykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0cnVjdC5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvbWVvbmUgaXMgYWN0dWFsbHkgdHJ5aW5nIHRvIGNhbGwgc29tZXRoaW5nLCBibG93IHVwLlxuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignTWlzc2luZyBoZWxwZXI6IFwiJyArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0ubmFtZSArICdcIicpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQge2lzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihjb25kaXRpb25hbCkpIHsgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpOyB9XG5cbiAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXG4gICAgLy8gVGhlIGBpbmNsdWRlWmVyb2Agb3B0aW9uIG1heSBiZSBzZXQgdG8gdHJlYXQgdGhlIGNvbmR0aW9uYWwgYXMgcHVyZWx5IG5vdCBlbXB0eSBiYXNlZCBvbiB0aGVcbiAgICAvLyBiZWhhdmlvciBvZiBpc0VtcHR5LiBFZmZlY3RpdmVseSB0aGlzIGRldGVybWluZXMgaWYgMCBpcyBoYW5kbGVkIGJ5IHRoZSBwb3NpdGl2ZSBwYXRoIG9yIG5lZ2F0aXZlLlxuICAgIGlmICgoIW9wdGlvbnMuaGFzaC5pbmNsdWRlWmVybyAmJiAhY29uZGl0aW9uYWwpIHx8IGlzRW1wdHkoY29uZGl0aW9uYWwpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5mbih0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd1bmxlc3MnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHtmbjogb3B0aW9ucy5pbnZlcnNlLCBpbnZlcnNlOiBvcHRpb25zLmZuLCBoYXNoOiBvcHRpb25zLmhhc2h9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9nJywgZnVuY3Rpb24oLyogbWVzc2FnZSwgb3B0aW9ucyAqLykge1xuICAgIGxldCBhcmdzID0gW3VuZGVmaW5lZF0sXG4gICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsID0gMTtcbiAgICBpZiAob3B0aW9ucy5oYXNoLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5oYXNoLmxldmVsO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YS5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuZGF0YS5sZXZlbDtcbiAgICB9XG4gICAgYXJnc1swXSA9IGxldmVsO1xuXG4gICAgaW5zdGFuY2UubG9nKC4uLiBhcmdzKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKEhhbmRsZWJhcnMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgbGV0IHJvb3QgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyxcbiAgICAgICRIYW5kbGViYXJzID0gcm9vdC5IYW5kbGViYXJzO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBIYW5kbGViYXJzLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocm9vdC5IYW5kbGViYXJzID09PSBIYW5kbGViYXJzKSB7XG4gICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcbiAgICB9XG4gICAgcmV0dXJuIEhhbmRsZWJhcnM7XG4gIH07XG59XG4iLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQ09NUElMRVJfUkVWSVNJT04sIFJFVklTSU9OX0NIQU5HRVMsIGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgbGV0IGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbihkZXB0aHMsIG5hbWUpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIGxldCBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0LyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICB9XG4gICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSxcbiAgICAgICAgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IHJldHVybiAnJzsgfVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICBsZXQgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG4iLCIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiIsImNvbnN0IGVzY2FwZSA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyYjeDI3OycsXG4gICdgJzogJyYjeDYwOycsXG4gICc9JzogJyYjeDNEOydcbn07XG5cbmNvbnN0IGJhZENoYXJzID0gL1smPD5cIidgPV0vZyxcbiAgICAgIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob2JqLyogLCAuLi5zb3VyY2UgKi8pIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmV4cG9ydCBsZXQgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vLyBTb3VyY2VkIGZyb20gbG9kYXNoXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmVzdGllanMvbG9kYXNoL2Jsb2IvbWFzdGVyL0xJQ0VOU0UudHh0XG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLXN0eWxlICovXG5sZXQgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59O1xuLy8gZmFsbGJhY2sgZm9yIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKGlzRnVuY3Rpb24oL3gvKSkge1xuICBpc0Z1bmN0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9O1xufVxuZXhwb3J0IHtpc0Z1bmN0aW9ufTtcbi8qIGVzbGludC1lbmFibGUgZnVuYy1zdHlsZSAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA6IGZhbHNlO1xufTtcblxuLy8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVFeHByZXNzaW9uKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBlc2NhcGUgU2FmZVN0cmluZ3MsIHNpbmNlIHRoZXkncmUgYWxyZWFkeSBzYWZlXG4gICAgaWYgKHN0cmluZyAmJiBzdHJpbmcudG9IVE1MKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnRvSFRNTCgpO1xuICAgIH0gZWxzZSBpZiAoc3RyaW5nID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcgKyAnJztcbiAgICB9XG5cbiAgICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcbiAgICAvLyB0aGUgcmVnZXggdGVzdCB3aWxsIGRvIHRoaXMgdHJhbnNwYXJlbnRseSBiZWhpbmQgdGhlIHNjZW5lcywgY2F1c2luZyBpc3N1ZXMgaWZcbiAgICAvLyBhbiBvYmplY3QncyB0byBzdHJpbmcgaGFzIGVzY2FwZWQgY2hhcmFjdGVycyBpbiBpdC5cbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZztcbiAgfVxuXG4gIGlmICghcG9zc2libGUudGVzdChzdHJpbmcpKSB7IHJldHVybiBzdHJpbmc7IH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG4gIGxldCBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcbiAgcGFyYW1zLnBhdGggPSBpZHM7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4iLCIvLyBDcmVhdGUgYSBzaW1wbGUgcGF0aCBhbGlhcyB0byBhbGxvdyBicm93c2VyaWZ5IHRvIHJlc29sdmVcbi8vIHRoZSBydW50aW1lIG9uIGEgc3VwcG9ydGVkIHBhdGguXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9janMvaGFuZGxlYmFycy5ydW50aW1lJylbJ2RlZmF1bHQnXTtcbiIsInZhciBBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJy4vYXBwbGljYXRpb24nKTtcbnZhciDDpiA9IHJlcXVpcmUoJy4vYXN5bmMnKTtcbnZhciBUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vbmF2aWdhdGlvbi90ZW1wbGF0ZScpO1xucmVxdWlyZSgnLi4vZ2VuL3RlbXBsYXRlcycpO1xuXG52YXIgYXBwID0gbmV3IEFwcGxpY2F0aW9uKCcjYXBwJyk7XG52YXIgayA9IHJlcXVpcmUoJy4va2luZW1hdGljJyk7XG52YXIgaCA9IHJlcXVpcmUoJy4va2luZW1hdGljL2hlbHBlcnMnKTtcblxuLyphcHAucm91dGVyLm9uKCcvcHJvZmlsZS86aWQnLCBmdW5jdGlvbihwYXRoKXtcbiB2YXIgcHJvZmlsZVZpZXcgPSBhcHAudGVtcGxhdGVzLnByb2ZpbGUuY3JlYXRlKHBhdGgpO1xuIGFwcC5hbmltLnBlcmZvcm1UcmFuc2l0aW9uKGFwcC5jdXJyZW50VmlldywgcHJvZmlsZVZpZXcsICdwdXNoJyk7XG4gfSk7Ki9cblxuYXBwLmFkZFRlbXBsYXRlKG5ldyBUZW1wbGF0ZSgncHJvZmlsZScpKTtcbmFwcC5hZGRUZW1wbGF0ZShuZXcgVGVtcGxhdGUoJ2ZyaWVuZHMnKSk7XG5hcHAuYWRkVGVtcGxhdGUobmV3IFRlbXBsYXRlKCdtb2RhbCcpKTtcblxuYXBwLnRlbXBsYXRlcy5mcmllbmRzLm9uKCdiZWZvcmVFbnRlcicsIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgdmlldy5lbXB0eSgpO1xuICAgIHZpZXcuZGF0YSA9IG51bGw7XG4gICAgbG9hZEZyaWVuZHModmlldyk7XG4gICAgZG9uZSgpO1xufSk7XG5cbmFwcC50ZW1wbGF0ZXMuZnJpZW5kcy5vbignb25FbnRlcicsIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgdmlldy5kYXRhID8gb25EYXRhKCkgOiB2aWV3Lm9uKCdkYXRhJywgb25EYXRhKTtcbiAgICBmdW5jdGlvbiBvbkRhdGEoKSB7XG4gICAgICAgIMOmLnNlcmllcyhbXG4gICAgICAgICAgICByZW5kZXJWaWV3LFxuICAgICAgICAgICAgay5oaWRlKCdsaScpLFxuICAgICAgICAgICAgay5oaWRlKCcuY2hlY2tsaXN0IC5ib3JkZXInKSxcbiAgICAgICAgICAgIGsucGFyYWxsZWwoW1xuICAgICAgICAgICAgICAgIGsuYW5pbWF0ZUNzcygnLmNoZWNrbGlzdCAuYm9yZGVyJywgJ2V4cGFuZCcpLFxuICAgICAgICAgICAgICAgIGsuYW5pbWF0ZUNzcygnbGknLCAnZmFkZUluUmlnaHQnLCB7ZGVsYXk6IDIwMH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICBdLCBkb25lLCB2aWV3KTtcbiAgICB9XG59KTtcblxuYXBwLnRlbXBsYXRlcy5wcm9maWxlLm9uKCdiZWZvcmVFbnRlcicsIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgdmlldy5kYXRhID0ge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1JvbWFpbidcbiAgICB9O1xuICAgIHZpZXcucmVuZGVyKCk7XG4gICAgdmFyIGhlYWRlciA9IHZpZXcuZWwucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgdmFyIGNvbnRlbnQgPSB2aWV3LmVsLnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciArIC5jb250ZW50Jyk7XG4gICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAnY2FsYygxMDAlIC0gJyArIGdldENvbXB1dGVkU3R5bGUoaGVhZGVyKS5oZWlnaHQgKyAnKSc7XG4gICAgZG9uZSgpO1xufSk7XG5cbmFwcC50ZW1wbGF0ZXMuZnJpZW5kcy5vbignb25FeGl0JywgZnVuY3Rpb24gKHZpZXcsIGRvbmUpIHtcbiAgICBrLmFuaW1hdGVDc3MoJ2gxLCBsaScsICdmYWRlT3V0UmlnaHQnLCB7XG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIGFkZENsYXNzOiBrLmNsYXNzbmFtZXMuaGlkZS5UUkFOU1BBUkVOVFxuICAgIH0pKHZpZXcsIGRvbmUpXG59KTtcblxuYXBwLnRlbXBsYXRlcy5tb2RhbC5vbignYmVmb3JlRW50ZXInLCBmdW5jdGlvbiAodmlldywgZG9uZSkge1xuICAgIHZpZXcucmVuZGVyKCk7XG4gICAgdmFyIGNvbnRlbnQgPSB2aWV3LmVsLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgYXBwLmVsLnN0eWxlLmhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoY29udGVudCkuaGVpZ2h0O1xuICAgIGRvbmUoKTtcbn0pO1xuXG5hcHAudGVtcGxhdGVzLm1vZGFsLm9uKCdvbkV4aXQnLCBmdW5jdGlvbih2aWV3LCBkb25lKXtcbiAgICBhcHAuZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIGRvbmUoKTtcbn0pO1xuXG5mdW5jdGlvbiByZW5kZXJWaWV3KHZpZXcsIGRvbmUpIHtcbiAgICB2aWV3LnJlbmRlcigpO1xuICAgIGRvbmUoKTtcbn1cblxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm15UHJvZmlsZVZpZXcgPSBhcHAuY3JlYXRlVmlldygncHJvZmlsZScsICcjL3Byb2ZpbGUvMScpO1xuICAgIHdpbmRvdy5mcmllbmRzVmlldyA9IGFwcC5jcmVhdGVWaWV3KCdmcmllbmRzJywgJyMvcHJvZmlsZS8xL2ZyaWVuZHMnKTtcbiAgICB3aW5kb3cubW9kYWxWaWV3ID0gYXBwLmNyZWF0ZVZpZXcoJ21vZGFsJywgJyMvbW9kYWwnKTtcbiAgICBoLmFkZENsYXNzKHdpbmRvdy5tb2RhbFZpZXcuZWwsICdraW5lbWF0aWMtdHJhbnNsYXRlLWJvdHRvbScpO1xufTtcblxuYXBwLmdvdG9GcmllbmRzID0gZnVuY3Rpb24gKCkge1xuICAgIGsudHJhbnNpdGlvbnMuY292ZXIoe2FwcDogYXBwLCBmcm9tOiBteVByb2ZpbGVWaWV3LCB0bzogZnJpZW5kc1ZpZXd9KVxufTtcblxuYXBwLmdvdG9Qcm9maWxlID0gZnVuY3Rpb24gKCkge1xuICAgIGsudHJhbnNpdGlvbnMucmV2ZWFsKHthcHA6IGFwcCwgZnJvbTogZnJpZW5kc1ZpZXcsIHRvOiBteVByb2ZpbGVWaWV3fSlcbn07XG5cbmFwcC5zaG93TW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgay50cmFuc2l0aW9ucy5tb2RhbCh7YXBwOiBhcHAsIHRvOiBtb2RhbFZpZXd9KVxufTtcblxuYXBwLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBrLnRyYW5zaXRpb25zLm1vZGFsKHthcHA6IGFwcCwgZnJvbTogbW9kYWxWaWV3fSlcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2aWV3ID0gYXBwLnZpZXdzW2xvY2F0aW9uLmhhc2hdO1xuICAgIGlmICh2aWV3ID09PSB3aW5kb3cubXlQcm9maWxlVmlldykge1xuICAgICAgICBhcHAuZ290b1Byb2ZpbGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcHAuZ290b0ZyaWVuZHMoKTtcbiAgICB9XG59KTtcblxuYXBwLmluaXQoKTtcblxud2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEhhc2hDaGFuZ2VFdmVudChcImhhc2hjaGFuZ2VcIikpO1xuXG5mdW5jdGlvbiBsb2FkRnJpZW5kcyh2aWV3KSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZpZXcuZGF0YSA9IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgZnJpZW5kczogW1xuICAgICAgICAgICAgICAgIHtuYW1lOiBcIlJvbWFpblwifSxcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJEZWxwaGluZVwifSxcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJMYXVyZW50XCJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIkd1aWxsYXVtZVwifSxcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJDaHJpc3RvcGhlXCJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIkxhdXJhXCJ9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICAgIHZpZXcuaG9vaygnZGF0YScpO1xuICAgIH0sIDM1MCk7XG59XG5cblxuLy8gUHJvZHVjdGlvbiBzdGVwcyBvZiBFQ01BLTI2MiwgRWRpdGlvbiA2LCAyMi4xLjIuMVxuLy8gUsOpZsOpcmVuY2UgOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYXJyYXkuZnJvbVxuaWYgKCFBcnJheS5mcm9tKSB7XG4gICAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAwIHx8ICFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuICAgICAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBsZW4gPSB0b0ludGVnZXIodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGxlbiwgMCksIG1heFNhZmVJbnRlZ2VyKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBMYSBwcm9wcmnDqXTDqSBsZW5ndGggZGUgbGEgbcOpdGhvZGUgdmF1dCAxLlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICAgICAgICAgIC8vIDEuIFNvaXQgQywgbGEgdmFsZXVyIHRoaXNcbiAgICAgICAgICAgIHZhciBDID0gdGhpcztcblxuICAgICAgICAgICAgLy8gMi4gU29pdCBpdGVtcyBsZSBUb09iamVjdChhcnJheUxpa2UpLlxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSk7XG5cbiAgICAgICAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cbiAgICAgICAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5mcm9tIGRvaXQgdXRpbGlzZXIgdW4gb2JqZXQgc2VtYmxhYmxlIMOgIHVuIHRhYmxlYXUgLSBudWxsIG91IHVuZGVmaW5lZCBuZSBwZXV2ZW50IHBhcyDDqnRyZSB1dGlsaXPDqXNcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIDQuIFNpIG1hcGZuIGVzdCB1bmRlZmluZWQsIGxlIG1hcHBpbmcgc2VyYSBmYWxzZS5cbiAgICAgICAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgVDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWFwRm4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gNS4gc2lub25cbiAgICAgICAgICAgICAgICAvLyA1LiBhLiBzaSBJc0NhbGxhYmxlKG1hcGZuKSBlc3QgZmFsc2UsIG9uIGzDqHZlIHVuZSBUeXBlRXJyb3IuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tOiBsb3JzcXUgaWwgZXN0IHV0aWxpc8OpIGxlIGRldXhpw6htZSBhcmd1bWVudCBkb2l0IMOqdHJlIHVuZSBmb25jdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIDUuIGIuIHNpIHRoaXNBcmcgYSDDqXTDqSBmb3VybmksIFQgc2VyYSB0aGlzQXJnIDsgc2lub24gVCBzZXJhIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgVCA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIDEwLiBTb2l0IGxlblZhbHVlIHBvdXIgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cbiAgICAgICAgICAgIC8vIDExLiBTb2l0IGxlbiBwb3VyIFRvTGVuZ3RoKGxlblZhbHVlKS5cbiAgICAgICAgICAgIHZhciBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyAxMy4gU2kgSXNDb25zdHJ1Y3RvcihDKSB2YXV0IHRydWUsIGFsb3JzXG4gICAgICAgICAgICAvLyAxMy4gYS4gU29pdCBBIGxlIHLDqXN1bHRhdCBkZSBsJ2FwcGVsIMOgIGxhIG3DqXRob2RlIGludGVybmUgW1tDb25zdHJ1Y3RdXSBhdmVjIHVuZSBsaXN0ZSBlbiBhcmd1bWVudCBxdWkgY29udGllbnQgbCfDqWzDqW1lbnQgbGVuLlxuICAgICAgICAgICAgLy8gMTQuIGEuIFNpbm9uLCBzb2l0IEEgbGUgcsOpc3VsdGF0IGRlIEFycmF5Q3JlYXRlKGxlbikuXG4gICAgICAgICAgICB2YXIgQSA9IGlzQ2FsbGFibGUoQykgPyBPYmplY3QobmV3IEMobGVuKSkgOiBuZXcgQXJyYXkobGVuKTtcblxuICAgICAgICAgICAgLy8gMTYuIFNvaXQgayDDqWdhbCDDoCAwLlxuICAgICAgICAgICAgdmFyIGsgPSAwOyAgLy8gMTcuIE9uIHLDqXDDqHRlIHRhbnQgcXVlIGsgPCBsZW7igKZcbiAgICAgICAgICAgIHZhciBrVmFsdWU7XG4gICAgICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgICAgIGtWYWx1ZSA9IGl0ZW1zW2tdO1xuICAgICAgICAgICAgICAgIGlmIChtYXBGbikge1xuICAgICAgICAgICAgICAgICAgICBBW2tdID0gdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnID8gbWFwRm4oa1ZhbHVlLCBrKSA6IG1hcEZuLmNhbGwoVCwga1ZhbHVlLCBrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBBW2tdID0ga1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAxOC4gU29pdCBwdXRTdGF0dXMgw6lnYWwgw6AgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXG4gICAgICAgICAgICBBLmxlbmd0aCA9IGxlbjsgIC8vIDIwLiBPbiByZW52b2llIEEuXG4gICAgICAgICAgICByZXR1cm4gQTtcbiAgICAgICAgfTtcbiAgICB9KCkpO1xufVxuXG53aW5kb3cuYXBwID0gYXBwO1xud2luZG93LmsgPSBrOyIsIi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQGNvbnN0cnVjdG9yXG4gKiBAY2xhc3NcbiAqL1xudmFyIEFwcGxpY2F0aW9uID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdGhpcy50ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPGhlYWRlcj48L2hlYWRlcj48ZGl2IGNsYXNzPVwidmlld3NcIj48L2Rpdj48Zm9vdGVyPjwvZm9vdGVyPic7XG4gICAgdGhpcy52aWV3cyA9IHt9O1xufTtcblxuQXBwbGljYXRpb24ucHJvdG90eXBlLmFkZFRlbXBsYXRlID0gZnVuY3Rpb24odGVtcGxhdGUpe1xuICAgIHRoaXMudGVtcGxhdGVzW3RlbXBsYXRlLm5hbWVdID0gdGVtcGxhdGU7XG59O1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuY3JlYXRlVmlldyA9IGZ1bmN0aW9uKG5hbWUsIHBhdGgpe1xuICAgIHRoaXMudmlld3NbcGF0aF0gPSB0aGlzLnRlbXBsYXRlc1tuYW1lXS5jcmVhdGUocGF0aCk7XG4gICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAudmlld3MnKS5hcHBlbmQodGhpcy52aWV3c1twYXRoXS5lbCk7XG4gICAgcmV0dXJuIHRoaXMudmlld3NbcGF0aF07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcGxpY2F0aW9uOyIsIlxuZnVuY3Rpb24gZWFjaFBhcmFsbGVsT2JqKG9iaiwgZm4sIGRvbmUpIHtcbiAgICBlYWNoUGFyYWxsZWxBcnIoT2JqZWN0LmtleXMob2JqKSwgZnVuY3Rpb24gKGtleSwgY2IpIHtcbiAgICAgICAgZm4oa2V5LCBvYmpba2V5XSwgY2IpO1xuICAgIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBlYWNoU2VyaWVzT2JqKG9iaiwgZm4sIGRvbmUpIHtcbiAgICBlYWNoU2VyaWVzQXJyKE9iamVjdC5rZXlzKG9iaiksIGZ1bmN0aW9uIChrZXksIGNiKSB7XG4gICAgICAgIGZuKGtleSwgb2JqW2tleV0sIGNiKTtcbiAgICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gZWFjaFBhcmFsbGVsQXJyKGFyciwgZm4sIGRvbmUpIHtcbiAgICB2YXIgaSA9IDAsIGNvbXBsZXRlZCA9IDAsIGwgPSBhcnIubGVuZ3RoLCBjYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcGxldGVkKys7XG4gICAgICAgIGlmIChjb21wbGV0ZWQgPT09IGwpIHtcbiAgICAgICAgICAgIGNhbGxJZkZ1bmN0aW9uKGRvbmUpXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZuKGFycltpXSwgY2IpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZWFjaFBhcmFsbGVsKHN1YmplY3QsIGZuLCBkb25lKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQYXJhbGxlbEFycihzdWJqZWN0LCBmbiwgZG9uZSk7XG4gICAgfVxuICAgIGVhY2hQYXJhbGxlbE9iaihzdWJqZWN0LCBmbiwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIHBhcmFsbGVsKGZ1bmN0aW9ucywgZG9uZSkge1xuICAgIHZhciBhZGRpdGlvbmFsQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgZWFjaFBhcmFsbGVsQXJyKGZ1bmN0aW9ucywgZnVuY3Rpb24gKGZuLCBjYiwgcHJldikge1xuICAgICAgICB2YXIgYXJncyA9IFtjYiwgcHJldl07XG4gICAgICAgIGlmIChhZGRpdGlvbmFsQXJncy5sZW5ndGgpe1xuICAgICAgICAgICAgYXJncyA9IGFkZGl0aW9uYWxBcmdzLmNvbmNhdChhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBmbi5hcHBseShmbiwgYXJncyk7XG4gICAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGVhY2hTZXJpZXMoc3ViamVjdCwgZm4sIGRvbmUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJqZWN0KSkge1xuICAgICAgICByZXR1cm4gZWFjaFNlcmllc0FycihzdWJqZWN0LCBmbiwgZG9uZSk7XG4gICAgfVxuICAgIGVhY2hTZXJpZXNPYmooc3ViamVjdCwgZm4sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBlYWNoU2VyaWVzQXJyKGFyciwgZm4sIGRvbmUpIHtcbiAgICB2YXIgaSA9IDAsIHByZXYsIGNiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpKys7XG4gICAgICAgIHByZXYgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICBleGVjKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIGlmIChpIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgZm4oYXJyW2ldLCBjYiwgcHJldik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsSWZGdW5jdGlvbihkb25lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4ZWMoKTtcbn1cblxuLyoqXG4gKiBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgd2lsbCBiZSBwYXNzZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSBmdW5jdGlvbnNcbiAqIEBwYXJhbSBkb25lXG4gKi9cbmZ1bmN0aW9uIHNlcmllcyhmdW5jdGlvbnMsIGRvbmUpIHtcbiAgICB2YXIgYWRkaXRpb25hbEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIGVhY2hTZXJpZXNBcnIoZnVuY3Rpb25zLCBmdW5jdGlvbiAoZm4sIGNiLCBwcmV2KSB7XG4gICAgICAgIHZhciBhcmdzID0gW2NiLCBwcmV2XTtcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxBcmdzLmxlbmd0aCl7XG4gICAgICAgICAgICBhcmdzID0gYWRkaXRpb25hbEFyZ3MuY29uY2F0KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGZuLmFwcGx5KGZuLCBhcmdzKTtcbiAgICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gY2FsbElmRnVuY3Rpb24oZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZm4oKTtcbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZWFjaFNlcmllczogZWFjaFNlcmllcyxcbiAgICBzZXJpZXM6IHNlcmllcyxcbiAgICBlYWNoUGFyYWxsZWw6IGVhY2hQYXJhbGxlbCxcbiAgICBwYXJhbGxlbDogcGFyYWxsZWxcbn07IiwidmFyIGggPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbnZhciDDpiA9IHJlcXVpcmUoJy4uL2FzeW5jJyk7XG52YXIgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJy4vY2xhc3NuYW1lcycpO1xuXG5cbi8qKlxuICogQGZ1bmN0aW9uIGFuaW1hdGVDc3NcbiAqIEBkZXNjcmlwdGlvblxuICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MRWxlbWVudHxIVE1MRWxlbWVudFtdfHN0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRpb25zLnJlbW92ZSByZW1vdmUgY2xhc3MgaW5zdGVhZCBvZiBhcHBseWluZyBpdFxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRpb25zLmRlbGF5IHRpbWUgdG8gd2FpdCBiZWZvcmUgZmlyaW5nIHRoZSBhbmltYXRpb24sIGluIG1zXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdGlvbnMuYWRkQ2xhc3MgYWRkIGNsYXNzKGVzKSB0byB0aGUgZWxlbWVudCBhZnRlciB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdGlvbnMucmVtb3ZlQ2xhc3MgcmVtb3ZlIGNsYXNzKGVzKSB0byB0aGUgZWxlbWVudCBhZnRlciB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufHVuZGVmaW5lZH0gb3B0aW9ucy5hZnRlciBleGVjIGEgY2FsbGJhY2sgZm9yIGVhY2ggYW5pbWF0ZWQgZWxlbWVudFxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5pbWF0ZUNzcyhzZWxlY3RvciwgY2xzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge2RlbGF5OiAxLCByZW1vdmU6IGZhbHNlfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gYW5pbWF0ZUluVmlldyh2aWV3LCBkb25lKSB7XG4gICAgICAgIC8vIHRhcmdldHMgbWF5IGJlIGEgc2luZ2xlIGRvbSBlbGVtZW50IG9yIGEgbm9kZSBsaXN0XG4gICAgICAgIHZhciB0YXJnZXRzO1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20odmlldy5lbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgIH0gZWxzZSB7IC8vIGNhc2UgaXNBcnJheSBvciBOb2RlTGlzdFxuICAgICAgICAgICAgdGFyZ2V0cyA9IHNlbGVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3VycmVudCBlbGVtZW50IGl0ZXJhdGlvbiwgdXNlZCB0byBkZWxheVxuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIMOmLmVhY2hQYXJhbGxlbCh0YXJnZXRzLCBmdW5jdGlvbiAoZWwsIGNiKSB7XG4gICAgICAgICAgICAvL3dlIHVzZSBhIHNldFRpbWVvdXQgdG8gZGVsYXkgdGhlIGFwcGxpY2F0aW9uIG9mIHRoZSBjbGFzc1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhlbCwgaC5ldmVyeUNsYXNzbmFtZShjbGFzc25hbWVzLmhpZGUpKTtcbiAgICAgICAgICAgICAgICBoLmFkZENsYXNzKGVsLCAnYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAvLyB2b2lkIGVsLm9mZnNldFdpZHRoOyAvLyBmb3JjZSB0aGUgYnJvd3NlciB0byBkbyBhIHJlZmxvd1xuICAgICAgICAgICAgICAgIGguY2xzKGVsLCBbb3B0aW9ucy5yZW1vdmUgPyBoLm1pbnVzKGNscykgOiBjbHNdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGguYWRkQ2xhc3MoZWwsIG9wdGlvbnMuYWRkQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKGVsLCBvcHRpb25zLnJlbW92ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhlbCwgJ2FuaW1hdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3MoZWwsIGNscyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaC5pc0Z1bmN0aW9uKG9wdGlvbnMuYWZ0ZXIpID8gb3B0aW9ucy5hZnRlcihlbCwgY2IpIDogY2IoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuZGVsYXkgKiBpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfSwgZG9uZSk7XG4gICAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBXSVRIOiAna2luZW1hdGljLXdpdGgtdHJhbnNpdGlvbicsXG4gICAgICAgIFdJVEhPVVQ6ICdraW5lbWF0aWMtd2l0aG91dC10cmFuc2l0aW9uJ1xuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgICBUUkFOU1BBUkVOVDogJ2tpbmVtYXRpYy1vcGFjaXR5LXRyYW5zcGFyZW50JyxcbiAgICAgICAgT1BBUVVFOiAna2luZW1hdGljLW9wYWNpdHktb3BhcXVlJyxcbiAgICAgICAgTElHSFQ6ICdraW5lbWF0aWMtb3BhY2l0eS1saWdodCcsXG4gICAgICAgIEhFQVZZOiAna2luZW1hdGljLW9wYWNpdHktaGVhdnknXG4gICAgfSxcbiAgICBkZXB0aDoge1xuICAgICAgICBGQVJUSEVTVDogJ2tpbmVtYXRpYy1mYXJ0aGVzdCcsXG4gICAgICAgIEZBUjogJ2tpbmVtYXRpYy1mYXInLFxuICAgICAgICBORUFSOiAna2luZW1hdGljLW5lYXInLFxuICAgICAgICBORUFSRVNUOiAna2luZW1hdGljLW5lYXJlc3QnXG4gICAgfSxcbiAgICBzaGFkb3c6IHtcbiAgICAgICAgQkFTRTogJ2tpbmVtYXRpYy1zaGFkb3cnLFxuICAgICAgICBCSUdfRElGRlVTRTogJ2tpbmVtYXRpYy1zaGFkb3ctYmlnLWRpZmZ1c2UnLFxuICAgICAgICBNRURJVU1fRElGRlVTRTogJ2tpbmVtYXRpYy1zaGFkb3ctbWVkaXVtLWRpZmZ1c2UnLFxuICAgICAgICBUUkFOU1BBUkVOVDogJ2tpbmVtYXRpYy1zaGFkb3ctdHJhbnNwYXJlbnQnXG4gICAgfSxcbiAgICBoaWRlOiB7XG4gICAgICAgIERJU1BMQVlfTk9ORTogJ2tpbmVtYXRpYy1uby1kaXNwbGF5JyxcbiAgICAgICAgVFJBTlNQQVJFTlQ6ICdraW5lbWF0aWMtaGlkZS10cmFuc3BhcmVudCcsXG4gICAgICAgIENPTExBUFNFX0hFSUdIVDogJ2tpbmVtYXRpYy1jb2xsYXBzZS1oZWlnaHQnLFxuICAgICAgICBDT0xMQVBTRV9XSURUSDogJ2tpbmVtYXRpYy1jb2xsYXBzZS13aWR0aCdcbiAgICB9LFxuICAgIHRyYW5zbGF0ZToge1xuICAgICAgICBSSUdIVDogJ2tpbmVtYXRpYy10cmFuc2xhdGUtcmlnaHQnLFxuICAgICAgICBUT1A6ICdraW5lbWF0aWMtdHJhbnNsYXRlLXRvcCcsXG4gICAgICAgIExFRlQ6ICdraW5lbWF0aWMtdHJhbnNsYXRlLWxlZnQnLFxuICAgICAgICBCT1RUT006ICdraW5lbWF0aWMtdHJhbnNsYXRlLWJvdHRvbSdcbiAgICB9XG59OyIsInZhciDDpiA9IHJlcXVpcmUoJy4uL2FzeW5jJyk7XG5cbmZ1bmN0aW9uIGJpbmRBbmltYXRpb25PclRyYW5zaXRpb24oZWxlbWVudCwgY2FsbGJhY2ssIGNvbXB1dGVkUHJvcGVydHlOYW1lLCBkb21FdmVudE5hbWUpIHtcbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgdmFyIGR1cmF0aW9uID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGNvbXB1dGVkUHJvcGVydHlOYW1lKTtcbiAgICBpZiAoZHVyYXRpb24gPT09ICcnIHx8IGR1cmF0aW9uID09ICcwcycpIHtcbiAgICAgICAgc2V0VGltZW91dChjYWxsYmFjaywgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGRvbUV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9O1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihkb21FdmVudE5hbWUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICBiaW5kQW5pbWF0aW9uT3JUcmFuc2l0aW9uKGVsZW1lbnQsIGNhbGxiYWNrLCAndHJhbnNpdGlvbi1kdXJhdGlvbicsIHdoaWNoVHJhbnNpdGlvbkV2ZW50KCkpO1xufVxuXG5mdW5jdGlvbiBvbkFuaW1hdGlvbkVuZChlbGVtZW50LCBjYWxsYmFjaykge1xuICAgIGJpbmRBbmltYXRpb25PclRyYW5zaXRpb24oZWxlbWVudCwgY2FsbGJhY2ssICdhbmltYXRpb24tZHVyYXRpb24nLCB3aGljaEFuaW1hdGlvbkV2ZW50KCkpO1xufVxuXG5mdW5jdGlvbiBhZGRBbmltYXRlZENsYXNzKGVsZW1lbnQsIGNscywgY2FsbGJhY2spIHtcbiAgICBvbkFuaW1hdGlvbkVuZChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xzKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NuYW1lc0Zyb21BcmdzKGFyZ3MpIHtcbiAgICB2YXIgYXJnc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyksIGNsYXNzbmFtZXMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGZpbHRlckFycihhcnIpIHtcbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGFyZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBjbGFzc25hbWVzLnB1c2goYXJnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyQXJyKGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbHRlckFycihhcmdzQXJyYXkpO1xuICAgIHJldHVybiBjbGFzc25hbWVzO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbHMpIHtcbiAgICBtYW5hZ2VDbGFzcyhlbGVtZW50LCBnZXRDbGFzc25hbWVzRnJvbUFyZ3MoYXJndW1lbnRzKSwgJ2FkZCcpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xzKSB7XG4gICAgbWFuYWdlQ2xhc3MoZWxlbWVudCwgZ2V0Q2xhc3NuYW1lc0Zyb21BcmdzKGFyZ3VtZW50cyksICdyZW1vdmUnKTtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmdbXX0gY2xzXG4gKiBAcGFyYW0ge3N0cmluZ30gYWRkT3JSZW1vdmVcbiAqL1xuZnVuY3Rpb24gbWFuYWdlQ2xhc3MoZWxlbWVudCwgY2xzLCBhZGRPclJlbW92ZSkge1xuICAgIGlmIChjbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdFthZGRPclJlbW92ZV0uYXBwbHkoZWxlbWVudC5jbGFzc0xpc3QsIGNscyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aGljaEFuaW1hdGlvbkV2ZW50KCkge1xuICAgIHZhciB0O1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSB7XG4gICAgICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcbiAgICAgICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgICAgICdNb3pBbmltYXRpb24nOiAnQW5pbWF0aW9uZW5kJyxcbiAgICAgICAgJ1dlYmtpdEFuaW1hdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnXG4gICAgfTtcblxuICAgIGZvciAodCBpbiBhbmltYXRpb25zKSB7XG4gICAgICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uc1t0XTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKSB7XG4gICAgdmFyIHQ7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICB9O1xuXG4gICAgZm9yICh0IGluIHRyYW5zaXRpb25zKSB7XG4gICAgICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gYXBwbHkgY2xhc3NsaXN0IHRyYW5zZm9ybWF0aW9ucyBmcm9tIHN0cmluZ1xuICogQGZ1bmN0aW9uIGNsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IG9wZXJhdGlvbnMgQSBzdHJpbmcgY29udGFpbmluZyBjbGFzc25hbWVzLiBJZiBhIG1pbnVzIHNpZ24gcHJlY2VkZXMgdGhlIGNsYXNzIG5hbWVzLCBpdCBpcyByZW1vdmVkXG4gKiBAcGFyYW0ge2Z1bmN0aW9uPX0gW2RvbmU9dW5kZWZpbmVkXSBJZiBzcGVjaWZpZWQsIGFuaW1hdGlvbiAmIHRyYW5zaXRpb24gbGlzdGVuZXJzIGFyZSBhZGRlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb249fSBbc3RhcnQ9dW5kZWZpbmVkXSBJZiBzcGVjaWZpZWQsIGNhbGxlZCB3aGVuIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdGVkIGlzIGdpdmVuIGJ5IHRoZSBicm93c2VyLlxuICogVGhlIGBkb25lYCBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiBib3RoIHByb3BlcnRpZXMgYXJlIGZpbmVcbiAqL1xuZnVuY3Rpb24gY2xzKGVsZW1lbnQsIG9wZXJhdGlvbnMsIGRvbmUsIHN0YXJ0KSB7XG4gICAgdmFyIGFkZCA9IFtdLCByZW1vdmUgPSBbXSwgb3BzID0gQXJyYXkuaXNBcnJheShvcGVyYXRpb25zKSA/IG9wZXJhdGlvbnMgOiBvcGVyYXRpb25zLnNwbGl0KCcgJyk7XG5cbiAgICBmdW5jdGlvbiBwYXJzZU9wcyhvcHNBcnJheSkge1xuICAgICAgICBvcHNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChvcCkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlT3BzKG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcFswXSA9PT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlLnB1c2gob3Auc3Vic3RyaW5nKDEpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGQucHVzaChvcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFyc2VPcHMob3BzKTtcblxuICAgIGZ1bmN0aW9uIGFwcGx5Q2xzQ2hhbmdlKCkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBhZGQpO1xuICAgICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCByZW1vdmUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9uZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICDDpi5wYXJhbGxlbChbb25BbmltYXRpb25FbmQsIG9uVHJhbnNpdGlvbkVuZF0sIGRvbmUsIGVsZW1lbnQpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBseUNsc0NoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcHBseUNsc0NoYW5nZSgpO1xuICAgIH1cbn1cbi8qKlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IFtpbnZlcnNlXVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGV2ZXJ5Q2xhc3NuYW1lKG9iamVjdCwgaW52ZXJzZSkge1xuICAgIHZhciByZXMgPSBbXSwgaztcbiAgICBmb3IgKGsgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGludmVyc2UgPyAnLScgKyBvYmplY3Rba10gOiBvYmplY3Rba10pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuXG5mdW5jdGlvbiBtaW51cyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gJy0nICsgY2xhc3NOYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhZGRBbmltYXRlZENsYXNzOiBhZGRBbmltYXRlZENsYXNzLFxuICAgIG9uQW5pbWF0aW9uRW5kOiBvbkFuaW1hdGlvbkVuZCxcbiAgICBvblRyYW5zaXRpb25FbmQ6IG9uVHJhbnNpdGlvbkVuZCxcbiAgICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICAgIGV2ZXJ5Q2xhc3NuYW1lOiBldmVyeUNsYXNzbmFtZSxcbiAgICBtaW51czogbWludXMsXG4gICAgY2xzOiBjbHMsXG4gICAgaXNGdW5jdGlvbjogZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG4gICAgfVxufTtcbiIsInZhciBoID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG52YXIgYyA9IHJlcXVpcmUoJy4vY2xhc3NuYW1lcycpO1xuLyoqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0PX0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLmNscyBPbmUgb2YgaGlkZSBmdW5jdGlvbiBjb25zdGFudFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGlkZShzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtjbHM6IGMuaGlkZS5UUkFOU1BBUkVOVH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgICAgIHZpZXcuZmluZChzZWxlY3RvcikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGguYWRkQ2xhc3MoZWwsIG9wdGlvbnMuY2xzKVxuICAgICAgICB9KTtcbiAgICAgICAgZG9uZSgpO1xuICAgIH1cbn07XG4iLCJ2YXIgw6YgPSByZXF1aXJlKCcuLi9hc3luYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvbjogZnVuY3Rpb24gKGhvb2tOYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuaG9va3MgPSB0aGlzLmhvb2tzIHx8IHt9O1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5ob29rc1tob29rTmFtZV0pKSB7XG4gICAgICAgICAgICB0aGlzLmhvb2tzW2hvb2tOYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va3NbaG9va05hbWVdLnB1c2goaGFuZGxlcik7XG4gICAgfSxcbiAgICBob29rOiBmdW5jdGlvbiAobmFtZSwgZG9uZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaG9va3MgPSB0aGlzLmhvb2tzIHx8IHt9O1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmhvb2tzW25hbWVdKSAmJiB0aGlzLmhvb2tzW25hbWVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIMOmLmVhY2hTZXJpZXModGhpcy5ob29rc1tuYW1lXSwgZnVuY3Rpb24gKG9wZXJhdGlvbiwgY2IpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24oc2VsZiwgY2IpXG4gICAgICAgICAgICB9LCBkb25lKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9uZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBmaG9vazogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBzZWxmLmhvb2sobmFtZSwgY2IpO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vaGlkZScpO1xudmFyIGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbnZhciDDpiA9IHJlcXVpcmUoJy4uL2FzeW5jJyk7XG5cbnZhciBraW5lbWF0aWNzID0ge1xuICAgIHRyYW5zaXRpb25zOiByZXF1aXJlKCcuL3RyYW5zaXRpb25zJyksXG4gICAgYW5pbWF0ZUNzczogcmVxdWlyZSgnLi9hbmltYXRlJyksXG4gICAgaGlkZTogaGlkZSxcbiAgICBoZWxwZXJzOiBoZWxwZXJzLFxuICAgIGNsYXNzbmFtZXM6IHJlcXVpcmUoJy4vY2xhc3NuYW1lcycpLFxuICAgIHBhcmFsbGVsOiBmdW5jdGlvbiAob3BlcmF0aW9ucykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmlldywgZG9uZSl7XG4gICAgICAgICAgICDDpi5lYWNoUGFyYWxsZWwob3BlcmF0aW9ucywgZnVuY3Rpb24oZm4sIGNiKXtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGZuLCB2aWV3LCBjYik7XG4gICAgICAgICAgICB9LCBkb25lKVxuICAgICAgICB9XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0ga2luZW1hdGljcztcbiIsInZhciBoID0gcmVxdWlyZSgnLi4vaGVscGVycycpO1xudmFyIMOmID0gcmVxdWlyZSgnLi4vLi4vYXN5bmMnKTtcbnZhciBjID0gcmVxdWlyZSgnLi4vY2xhc3NuYW1lcycpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9oaWRlJyk7XG52YXIgY3JlYXRlTWFzayA9IHJlcXVpcmUoJy4vY3JlYXRlTWFzaycpO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtWaWV3fSBvcHRpb25zLmZyb21cbiAqIEBwYXJhbSB7Vmlld30gb3B0aW9ucy50b1xuICogQHBhcmFtIHtBcHBsaWNhdGlvbn0gb3B0aW9ucy5hcHBcbiAqIEBwYXJhbSB7c3RyaW5nPX0gW29wdGlvbnMubWFza09wYWNpdHldXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wbGV0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvdmVyVHJhbnNpdGlvbihvcHRpb25zLCBjb21wbGV0ZSkge1xuICAgIHZhciBmcm9tVmlldyA9IG9wdGlvbnMuZnJvbTtcbiAgICB2YXIgdG9WaWV3ID0gb3B0aW9ucy50bztcbiAgICB2YXIgZnJvbSA9IGZyb21WaWV3LmVsO1xuICAgIHZhciBhcHAgPSBvcHRpb25zLmFwcC5lbDtcbiAgICB2YXIgdG8gPSB0b1ZpZXcuZWw7XG4gICAgdmFyIG1hc2sgPSBjcmVhdGVNYXNrKCk7XG5cblxuICAgIG1hc2suc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJ2Vhc2Utb3V0JztcbiAgICDDpi5zZXJpZXMoW1xuXG4gICAgICAgIGZyb21WaWV3LmZob29rKCdiZWZvcmVFeGl0JyksIC8vIGV4ZWMgYmxvY2tpbmcgXCJiZWZvcmVFeGl0XCIgaG9va3NcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBmcm9tVmlldy5ob29rKCdvbkV4aXQnKTsgLy8gZXhlYyBOT04tYmxvY2tpbmcgXCJvbkV4aXRcIiBob29rc1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhmcm9tLCBjLmRlcHRoLkZBUlRIRVNUKTsgLy9mcm9tVmlldyB3aWxsIGJlIG92ZXJsYXBlZCBieSBib3RoIG1hc2sgYW5kIHRvVmlld1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhtYXNrLCBjLmRlcHRoLkZBUiwgYy5vcGFjaXR5LlRSQU5TUEFSRU5UKTtcbiAgICAgICAgICAgIGFwcC5hcHBlbmQobWFzayk7IC8vYWRkZWQgdG8gYXBwIGJlY2F1c2UgaXQncyBzaW1wbGVyIGZvciB0cmFuc2Zvcm0gbWFuYWdlbWVudFxuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9WaWV3LmZob29rKCdiZWZvcmVFbnRlcicpLCAvLyBleGVjIGJsb2NraW5nIFwiYmVmb3JlRW50ZXJcIiBob29rc1xuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGguYWRkQ2xhc3ModG8sIFsgLy8gdGhhdCdzIHdoZXJlIHdlIHByZXBhcmUgdGhlIG5leHQgdmlldy4gSXQgaXMuLi5cbiAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZS5SSUdIVCwgLy8gcGxhY2VkIG9uIHRoZSByaWdodFxuICAgICAgICAgICAgICAgIGMudHJhbnNpdGlvbi5XSVRILCAvLyBhbmltYXRlZFxuICAgICAgICAgICAgICAgIGMuZGVwdGguTkVBUkVTVCwgLy8gYWJvdmUgZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgYy5zaGFkb3cuQkFTRSAvLyBoYXMgYSBkcm9wIHNoYWRvd1xuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBoLnJlbW92ZUNsYXNzKHRvLCBoLmV2ZXJ5Q2xhc3NuYW1lKGMuaGlkZSkpOyAvLyBtYWtlIHN1cmUgaXQgaXMgdmlzaWJsZVxuICAgICAgICAgICAgLy8gdGhlIG1hc2sgd2lsbCBvcGFjaWZ5IGZvciB0aGUgc2FtZSBhbW91bnQgb2YgdGltZSB0aGUgdG9WaWV3IHdpbGwgYXJyaXZlXG4gICAgICAgICAgICBtYXNrLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUodG8pLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIG1hc2suc3R5bGUub3BhY2l0eSA9IG9wdGlvbnMubWFza09wYWNpdHkgfHwgJzAuNSc7IC8vIHRoaXMgbGluZSB0cmlnZ2VycyB0aGUgdHJhbnNpdGlvblxuICAgICAgICAgICAgdG9WaWV3Lmhvb2soJ29uRW50ZXInKTsgLy8gZXhlYyBOT04tYmxvY2tpbmcgb25FbnRlciBob29rXG4gICAgICAgICAgICBoLmNscyh0bywgW1xuICAgICAgICAgICAgICAgIGgubWludXMoYy50cmFuc2xhdGUuUklHSFQpLFxuICAgICAgICAgICAgICAgIGMuc2hhZG93Lk1FRElVTV9ESUZGVVNFIC8vIGFuZCBvcGFjaWZ5IHRoZSBkcm9wIHNoYWRvd1xuICAgICAgICAgICAgXSwgY2IpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHsgLy8gdHJhbnNpdGlvbiBpcyBmdWxmaWxsZWRcbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3MoZnJvbSwgaC5ldmVyeUNsYXNzbmFtZShjLmRlcHRoKSwgYy50cmFuc2l0aW9uLldJVEgpOyAvL3Jlc2V0IGNsYXNzZXMgb24gZnJvbSBlbGVtZW50XG4gICAgICAgICAgICBoLmFkZENsYXNzKGZyb20sIGMuaGlkZS5ESVNQTEFZX05PTkUpOyAvLyBoaWRlIHRoYXQgb2xkIGNodW1cbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3ModG8sIFtcbiAgICAgICAgICAgICAgICBjLnRyYW5zaXRpb24uV0lUSCxcbiAgICAgICAgICAgICAgICBjLmRlcHRoLk5FQVJFU1QsXG4gICAgICAgICAgICAgICAgYy5zaGFkb3cuTUVESVVNX0RJRkZVU0UsXG4gICAgICAgICAgICAgICAgYy5zaGFkb3cuQkFTRVxuICAgICAgICAgICAgXSk7IC8vcmVzZXQgY2xhc3NlcyBvbiBcInRvXCIgZWxlbWVudFxuICAgICAgICAgICAgYXBwLnJlbW92ZUNoaWxkKG1hc2spOyAvLyByZW1vdmUgdGhlIG1hc2sgPyBzaG91bGQgd2UgbnVsbCBpdD9cbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vZXhlYyBibG9ja2luZyBhZnRlciBob29rc1xuICAgICAgICB0b1ZpZXcuZmhvb2soJ2FmdGVyRW50ZXInKSxcbiAgICAgICAgZnJvbVZpZXcuZmhvb2soJ2FmdGVyRXhpdCcpXG4gICAgXSwgY29tcGxldGUpXG59OyIsIi8qKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVNYXNrKCl7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIHMgPSBlbC5zdHlsZTtcbiAgICBzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBzLndpZHRoID0gJzEwMCUnO1xuICAgIHMuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHMudG9wID0gJzAnO1xuICAgIHMubGVmdCA9ICcwJztcbiAgICBzLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMCwgMC41KSc7XG4gICAgcmV0dXJuIGVsO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY292ZXI6IHJlcXVpcmUoJy4vY292ZXInKSxcbiAgcmV2ZWFsOiByZXF1aXJlKCcuL3JldmVhbCcpLFxuICBtb2RhbDogcmVxdWlyZSgnLi9tb2RhbCcpLFxufTtcbiIsInZhciDDpiA9IHJlcXVpcmUoJy4uLy4uL2FzeW5jJyk7XG52YXIgY3JlYXRlTWFzayA9IHJlcXVpcmUoJy4vY3JlYXRlTWFzaycpO1xudmFyIGMgPSByZXF1aXJlKCcuLi9jbGFzc25hbWVzJyk7XG52YXIgaCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtb2RhbChvcHRpb25zLCBjb21wbGV0ZSkge1xuICAgIChvcHRpb25zLnRvKSA/IHNob3cob3B0aW9ucywgY29tcGxldGUpIDogaGlkZShvcHRpb25zLCBjb21wbGV0ZSk7XG59O1xuLyoqXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7Vmlld30gb3B0aW9ucy50b1xuICogQHBhcmFtIHtBcHBsaWNhdGlvbn0gb3B0aW9ucy5hcHBcbiAqIEBwYXJhbSBjb21wbGV0ZVxuICovXG5mdW5jdGlvbiBzaG93KG9wdGlvbnMsIGNvbXBsZXRlKSB7XG4gICAgdmFyIG1vZGFsVmlldyA9IG9wdGlvbnMudG87XG4gICAgdmFyIGFwcCA9IG9wdGlvbnMuYXBwO1xuICAgIHZhciBlbCA9IG1vZGFsVmlldy5lbDtcbiAgICB2YXIgbWFzayA9IGNyZWF0ZU1hc2soKTtcblxuICAgIMOmLnNlcmllcyhbXG4gICAgICAgIG1vZGFsVmlldy5maG9vaygnYmVmb3JlRW50ZXInKSxcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBhcHAuZWwuYXBwZW5kQ2hpbGQobWFzayk7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhtYXNrLCBjLmRlcHRoLk5FQVIsIGMudHJhbnNpdGlvbi5XSVRILCBjLm9wYWNpdHkuVFJBTlNQQVJFTlQpO1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhlbCwgYy5kZXB0aC5ORUFSRVNULCBjLnRyYW5zbGF0ZS5CT1RUT00sIGMudHJhbnNpdGlvbi5XSVRIKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgw6YucGFyYWxsZWwoW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChwYXJhbGxlbENiKSB7XG4gICAgICAgICAgICAgICAgICAgIGguY2xzKG1hc2ssIFtjLm9wYWNpdHkuSEVBVlksIGgubWludXMoYy5vcGFjaXR5LlRSQU5TUEFSRU5UKV0sIHBhcmFsbGVsQ2IpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocGFyYWxsZWxDYikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsVmlldy5ob29rKCdvbkVudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGguY2xzKGVsLCBbaC5taW51cyhjLnRyYW5zbGF0ZS5CT1RUT00pXSwgcGFyYWxsZWxDYik7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSwgY2IpXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhlbCwgYy50cmFuc2l0aW9uLldJVEgsIGMuZGVwdGguTkVBUkVTVCk7XG4gICAgICAgICAgICBhcHAuZWwucmVtb3ZlQ2hpbGQobWFzayk7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LFxuICAgICAgICBtb2RhbFZpZXcuZmhvb2soJ2FmdGVyRW50ZXInKVxuICAgIF0sIGNvbXBsZXRlKTtcbn1cblxuZnVuY3Rpb24gaGlkZShvcHRpb25zLCBjb21wbGV0ZSkge1xuICAgIHZhciBtb2RhbFZpZXcgPSBvcHRpb25zLmZyb207XG4gICAgdmFyIGFwcCA9IG9wdGlvbnMuYXBwO1xuICAgIHZhciBlbCA9IG1vZGFsVmlldy5lbDtcbiAgICB2YXIgbWFzayA9IGNyZWF0ZU1hc2soKTtcblxuICAgIMOmLnNlcmllcyhbXG4gICAgICAgIG1vZGFsVmlldy5maG9vaygnYmVmb3JlRXhpdCcpLFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGFwcC5lbC5hcHBlbmRDaGlsZChtYXNrKTtcbiAgICAgICAgICAgIGguYWRkQ2xhc3MobWFzaywgYy5kZXB0aC5ORUFSLCBjLnRyYW5zaXRpb24uV0lUSCwgYy5vcGFjaXR5LkhFQVZZKTtcbiAgICAgICAgICAgIGguYWRkQ2xhc3MoZWwsIGMuZGVwdGguTkVBUkVTVCwgYy50cmFuc2xhdGUuQk9UVE9NLCBjLnRyYW5zaXRpb24uV0lUSCk7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIMOmLnBhcmFsbGVsKFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocGFyYWxsZWxDYikge1xuICAgICAgICAgICAgICAgICAgICBoLmNscyhtYXNrLCBbYy5vcGFjaXR5LlRSQU5TUEFSRU5ULCBoLm1pbnVzKGMub3BhY2l0eS5IRUFWWSldLCBwYXJhbGxlbENiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHBhcmFsbGVsQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxWaWV3Lmhvb2soJ29uRXhpdCcpO1xuICAgICAgICAgICAgICAgICAgICBoLmNscyhlbCwgW2MudHJhbnNsYXRlLkJPVFRPTV0sIHBhcmFsbGVsQ2IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sIGNiKVxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGguY2xzKGVsLCBbYy50cmFuc2l0aW9uLldJVEgsIGMuaGlkZS5ESVNQTEFZX05PTkVdKTtcbiAgICAgICAgICAgIGFwcC5lbC5yZW1vdmVDaGlsZChtYXNrKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGFsVmlldy5maG9vaygnYWZ0ZXJFeGl0JylcbiAgICBdLCBjb21wbGV0ZSk7XG59IiwidmFyIGggPSByZXF1aXJlKCcuLi9oZWxwZXJzJyk7XG52YXIgw6YgPSByZXF1aXJlKCcuLi8uLi9hc3luYycpO1xuXG52YXIgYyA9IHJlcXVpcmUoJy4uL2NsYXNzbmFtZXMnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaGlkZScpO1xudmFyIGNyZWF0ZU1hc2sgPSByZXF1aXJlKCcuL2NyZWF0ZU1hc2snKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgY29tcGxldGUpIHtcbiAgICB2YXIgZnJvbVZpZXcgPSBvcHRpb25zLmZyb207XG4gICAgdmFyIHRvVmlldyA9IG9wdGlvbnMudG87XG4gICAgdmFyIGZyb20gPSBmcm9tVmlldy5lbDtcbiAgICB2YXIgdG8gPSB0b1ZpZXcuZWw7XG4gICAgdmFyIGFwcCA9IG9wdGlvbnMuYXBwLmVsO1xuICAgIHZhciBtYXNrID0gY3JlYXRlTWFzaygpO1xuICAgIHZhciBpbnRlcnZhbDtcbiAgICDDpi5zZXJpZXMoW1xuICAgICAgICBmcm9tVmlldy5maG9vaygnYmVmb3JlRXhpdCcpLFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGZyb21WaWV3Lmhvb2soJ29uRXhpdCcpO1xuICAgICAgICAgICAgLy90b1ZpZXcgaXMgYmVoaW5kXG4gICAgICAgICAgICBoLmFkZENsYXNzKGZyb20sIGMuZGVwdGguTkVBUkVTVCk7XG4gICAgICAgICAgICBoLmFkZENsYXNzKHRvLCBjLmRlcHRoLkZBUlRIRVNUKTtcbiAgICAgICAgICAgIC8vdG9WaWV3IGlzIHZpc2libGVcbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3ModG8sIGguZXZlcnlDbGFzc25hbWUoYy5oaWRlKSk7XG4gICAgICAgICAgICAvL2FkZCB0aGUgbWFzayB0byB0b1ZpZXdcbiAgICAgICAgICAgIGFwcC5hcHBlbmQobWFzayk7XG4gICAgICAgICAgICBoLmFkZENsYXNzKG1hc2ssIGMuZGVwdGguRkFSKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvVmlldy5maG9vaygnYmVmb3JlRW50ZXInKSxcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICAvL2Zyb21WaWV3IHdpbGwgbW92ZSwgYW5kIGlzIHRoZSBuZWFyZXN0IHZpZXdcbiAgICAgICAgICAgIC8vZnJvbVZpZXcgd2lsbCBjYXN0IGEgc2hhZG93IG9uIHRvVmlld1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhmcm9tLCBbYy50cmFuc2l0aW9uLldJVEgsIGMuZGVwdGguTkVBUkVTVCwgYy5zaGFkb3cuQkFTRSwgYy5zaGFkb3cuQklHX0RJRkZVU0VdKTtcbiAgICAgICAgICAgIC8vbWFzayB3aWxsIHRyYW5zaXRpb24gZm9yIHRoZSBzYW1lIGR1cmF0aW9uIHRoYXQgJGZyb20gd2lsbCBsZWF2ZVxuICAgICAgICAgICAgbWFzay5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKGZyb20pLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIG1hc2suc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ29wYWNpdHknO1xuICAgICAgICAgICAgbWFzay5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnZWFzZS1pbi1vdXQnO1xuICAgICAgICAgICAgLy90cmlnZ2VyIHRoZSBvbkVudGVyIGp1c3QgYmVmb3JlIHN0YXJ0aW5nIHRoZSB0cmFuc2l0aW9uXG4gICAgICAgICAgICB0b1ZpZXcuaG9vaygnb25FbnRlcicpO1xuICAgICAgICAgICAgLy90cmFuc2l0aW9uIGhhcHBlbnMgaGVyZSA6IG9sZFZpZXcgbW92ZSByaWdodFxuICAgICAgICAgICAgw6YucGFyYWxsZWwoW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHBhcmFsbGVsQ2Ipe1xuICAgICAgICAgICAgICAgICAgICBoLmNscyhmcm9tLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZS5SSUdIVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGgubWludXMoYy5zaGFkb3cuQklHX0RJRkZVU0UpXG4gICAgICAgICAgICAgICAgICAgIF0sIHBhcmFsbGVsQ2IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHBhcmFsbGVsQ2Ipe1xuICAgICAgICAgICAgICAgICAgICBoLmNscyhtYXNrLCBbYy5vcGFjaXR5LlRSQU5TUEFSRU5UXSwgcGFyYWxsZWxDYilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLCBjYik7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3MoZnJvbSxcbiAgICAgICAgICAgICAgICBjLnRyYW5zaXRpb24uV0lUSCxcbiAgICAgICAgICAgICAgICBoLmV2ZXJ5Q2xhc3NuYW1lKGMuZGVwdGgpLFxuICAgICAgICAgICAgICAgIGguZXZlcnlDbGFzc25hbWUoYy5zaGFkb3cpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhmcm9tLCBjLmhpZGUuRElTUExBWV9OT05FKTtcbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3ModG8sIGMudHJhbnNpdGlvbi5XSVRILCBoLmV2ZXJ5Q2xhc3NuYW1lKGMuZGVwdGgpKTtcbiAgICAgICAgICAgIC8vcmVtb3ZlIHRoZSBtYXNrXG4gICAgICAgICAgICBhcHAucmVtb3ZlQ2hpbGQobWFzayk7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LFxuICAgICAgICB0b1ZpZXcuZmhvb2soJ2FmdGVyRW50ZXInKSxcbiAgICAgICAgZnJvbVZpZXcuZmhvb2soJ2FmdGVyRXhpdCcpXG4gICAgXSwgY29tcGxldGUpO1xufTsiLCJ2YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyk7XG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hhbmRsZWJhcnMvcnVudGltZScpO1xuXG52YXIgaG9va3MgPSByZXF1aXJlKCcuLi9raW5lbWF0aWMvaG9va3MnKTtcbi8qKlxuICogQGNsYXNzIFZpZXdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgVGVtcGxhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5oYiA9IEhhbmRsZWJhcnMudGVtcGxhdGVzW25hbWVdO1xufTtcblxuZXh0ZW5kKFRlbXBsYXRlLnByb3RvdHlwZSwgaG9va3MpO1xuXG5UZW1wbGF0ZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzO1xuXG4gICAgdmFyIFZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjaGlsZFNlbGYgPSB0aGlzO1xuICAgICAgICBjaGlsZFNlbGYucGF0aCA9IHBhdGg7XG4gICAgICAgIGNoaWxkU2VsZi5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgY2hpbGRTZWxmLmVsLmNsYXNzTGlzdC5hZGQoJ3ZpZXcnKTtcbiAgICAgICAgY2hpbGRTZWxmLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgcGF0aCk7XG4gICAgfTtcblxuICAgIFZpZXcucHJvdG90eXBlID0gdGhpcztcbiAgICBWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUuaGIocGFyYW1zIHx8wqB0aGlzLmRhdGEpO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgVmlldygpO1xufTtcblxuXG5UZW1wbGF0ZS5wcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lcykge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZC5hcHBseSh0aGlzLmVsLmNsYXNzTGlzdCwgY2xhc3NOYW1lcy5zcGxpdCgnICcpKTtcbn07XG5cblRlbXBsYXRlLnByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWVzKSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlLmFwcGx5KHRoaXMuZWwuY2xhc3NMaXN0LCBjbGFzc05hbWVzLnNwbGl0KCcgJykpO1xufTtcblxuVGVtcGxhdGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGU7Il19
