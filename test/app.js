(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['friends'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <li>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<header>\n  <nav>\n    <a href=\"#/profile/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"arrow\">\n        <svg style=\"height: 1em; width: 1em\" viewBox=\"0 0 64 64\">\n          <polygon points=\"52 8.081 43.919 0 12 31.919 12.081 32 12 32.081 43.919 64 52 55.919 28.081 32 52 8.081\">\n          </polygon>\n        </svg>\n      </div>\n    </a>\n    <div class=\"spacer\"></div>\n  </nav>\n  <h1>Friends</h1>\n</header>\n<div class=\"content\">\n  <div class=\"container\">\n    <h1>Hello Romain</h1>\n  </div>\n  <div class=\"dashed-line\"></div>\n  <div class=\"container\">\n    <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.friends : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>";
},"useData":true});
templates['modal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content modal\">\n  <div class=\"container\">\n    <h1>Watch out! I'm a modal</h1>\n    <button onclick=\"app.hideModal()\">Close</button>\n  </div>\n</div>";
},"useData":true});
templates['profile'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header>\n  <div class=\"points\">\n    <span class=\"value\">1 257</span>\n    <button class=\"info\">i</button>\n    <span class=\"unit\">points</span>\n  </div>\n  <div style=\"position: relative; \">\n    <div class=\"progress\">\n      <div class=\"bar\" style=\"width: 55%;\"></div>\n    </div>\n    <div class=\"scale\">\n      <span style=\"left: 0;\">500</span>\n      <span style=\"left: 50%\">1000</span>\n      <span style=\"left: 100%\">1500</span>\n    </div>\n  </div>\n  <button class=\"btn\">Échanger</button>\n</header>\n<div class=\"content\">\n  <div class=\"container\">\n    <p><a href=\"#/profile/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "/friends\">Friends</a></p>\n    <button class=\"btn\" onclick=\"app.showModal()\">Mon Compte</button>\n    <button class=\"btn small\">Button small</button>\n    <h2>Checklist</h2>\n    <p>\n    <div class=\"progress\">\n      <div class=\"bar\" style=\"width: 28%\"></div>\n    </div>\n    <div class=\"legend\">\n      1/5 semaines de connexion\n    </div>\n    </p>\n    <p>Consulter le site chaque semaine vous rapporte des points, et même un bonus !</p>\n    <div class=\"centered\">\n      <div class=\"checklist\">\n        <div class=\"border\" style=\"animation-duration: 2s\"></div>\n        <ul>\n          <li class=\"checked\">\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 1</p>\n              <p><span class=\"reward\">+10</span></p>\n            </div>\n          </li>\n          <li class=\"checked active\">\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 2</p>\n              <p><span class=\"reward\">+15</span></p>\n            </div>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 3</p>\n              <p><span class=\"reward\">+15</span></p>\n            </div>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 4</p>\n              <p><span class=\"reward\">+15</span></p>\n            </div>\n          </li>\n          <li>\n            <svg viewBox=\"0 0 120 120\" class=\"check\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\"></circle>\n              <polyline points=\"86.875 44.063 53.75 76.563 37.157 60.843\"></polyline>\n            </svg>\n            <div class=\"detail\">\n              <p>Semaine 5</p>\n              <p><span class=\"reward\">livraison gratuite !</span></p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <h2>Progressbar mini</h2>\n    <div class=\"progress mini\">\n      <div class=\"bar\" style=\"width:80%\"></div>\n    </div>\n    <h2>Text</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloremque fugit natus necessitatibus neque, non,\n      obcaecati porro quis rem repellat, ullam veritatis voluptatibus. A beatae fugit impedit itaque, repellat\n      voluptatem!</p>\n  </div>\n  <div class=\"container full\">\n    <div class=\"badge\">\n      <div class=\"icon\">\n        <svg version=\"1.1\" viewBox=\"0 0 204 204\" class=\"circle\">\n          <path\n              stroke=\"#000000\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"rgba(0,0,0,0)\"\n              d=\"M 102, 102\n            m -100, 0\n            a 100,100 0 1,0 200,0\n            a 100,100 0 1,0 -200,0\">\n          </path>\n        </svg>\n        <img src=\"../assets/icons8-search.png\">\n      </div>\n      <div class=\"detail\">\n        <h3>Curieux</h3>\n        <div class=\"progress\">\n          <div class=\"bar\" style=\"width:40%\"></div>\n        </div>\n        <div class=\"legend\">\n          15/20 fiches produits consultées\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
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
            k.hide('h1, li'),
            k.animateCss('h1', 'fadeIn'),
            k.animateCss('li', 'fadeInRight', {delay: 200})
        ], done, view);
    }
});
app.templates.profile.on('onEnter', function (view, done) {
    æ.series([
        renderView,
        k.hide('li'),
        k.hide('.checklist .border'),
        k.parallel([
            k.animateCss('.checklist .border', 'expand'),
            k.animateCss('li', 'fadeInRight', {delay: 200})
        ])
    ], done, view);
});

app.templates.profile.on('beforeEnter', function (view, done) {
    view.data = {
        id: 1,
        name: 'Romain'
    };
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
 * @param {number} options.delay time to wait before firing the animation, in ms
 * @param {string} options.addClass add class(es) to the element after the animation finishes
 * @param {string} options.removeClass remove class(es) to the element after the animation finishes
 * @param {function|undefined} options.after exec a callback for each animated element
 * @return {function}
 */
module.exports = function animateCss(selector, cls, options) {
    options = options || {delay: 1};
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

        if(targets.length === 0){
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
                h.cls(el, [cls], function () {
                    h.addClass(el, options.addClass);
                    h.removeClass(el, options.removeClass);
                    h.removeClass(el, ['animated', cls]);
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
    s.background = 'rgb(0,0,0)';
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
        modalView.fhook('beforeEnter'),
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
                    modalView.hook('onEnter');
                    h.cls(el, [c.translate.BOTTOM], parallelCb);
                }
            ], cb)
        },
        function (cb) {
            h.cls(el, [c.transition.WITH, c.hide.DISPLAY_NONE]);
            app.el.removeChild(mask);
            cb();
        },
        modalView.fhook('afterEnter')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL2dlbi90ZW1wbGF0ZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMucnVudGltZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9kZWNvcmF0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvZGVjb3JhdG9ycy9pbmxpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9leGNlcHRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9oZWxwZXJzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9oZWxwZXJzL2lmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvaGVscGVycy9sb2cuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvbGliL2hhbmRsZWJhcnMvdXRpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwiYXBwLmpzIiwiYXBwbGljYXRpb24vaW5kZXguanMiLCJhc3luYy9pbmRleC5qcyIsImtpbmVtYXRpYy9hbmltYXRlLmpzIiwia2luZW1hdGljL2NsYXNzbmFtZXMuanMiLCJraW5lbWF0aWMvaGVscGVycy5qcyIsImtpbmVtYXRpYy9oaWRlLmpzIiwia2luZW1hdGljL2hvb2tzLmpzIiwia2luZW1hdGljL2luZGV4LmpzIiwia2luZW1hdGljL3RyYW5zaXRpb25zL2NvdmVyLmpzIiwia2luZW1hdGljL3RyYW5zaXRpb25zL2NyZWF0ZU1hc2suanMiLCJraW5lbWF0aWMvdHJhbnNpdGlvbnMvaW5kZXguanMiLCJraW5lbWF0aWMvdHJhbnNpdGlvbnMvbW9kYWwuanMiLCJraW5lbWF0aWMvdHJhbnNpdGlvbnMvcmV2ZWFsLmpzIiwibmF2aWdhdGlvbi90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFycy9ydW50aW1lXCIpOyAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy50ZW1wbGF0ZSwgdGVtcGxhdGVzID0gSGFuZGxlYmFycy50ZW1wbGF0ZXMgPSBIYW5kbGViYXJzLnRlbXBsYXRlcyB8fCB7fTtcbnRlbXBsYXRlc1snZnJpZW5kcyddID0gdGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlcjtcblxuICByZXR1cm4gXCIgICAgICAgIDxsaT5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5uYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwibmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2xpPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiPGhlYWRlcj5cXG4gIDxuYXY+XFxuICAgIDxhIGhyZWY9XFxcIiMvcHJvZmlsZS9cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYXJyb3dcXFwiPlxcbiAgICAgICAgPHN2ZyBzdHlsZT1cXFwiaGVpZ2h0OiAxZW07IHdpZHRoOiAxZW1cXFwiIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCI+XFxuICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cXFwiNTIgOC4wODEgNDMuOTE5IDAgMTIgMzEuOTE5IDEyLjA4MSAzMiAxMiAzMi4wODEgNDMuOTE5IDY0IDUyIDU1LjkxOSAyOC4wODEgMzIgNTIgOC4wODFcXFwiPlxcbiAgICAgICAgICA8L3BvbHlnb24+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzcGFjZXJcXFwiPjwvZGl2PlxcbiAgPC9uYXY+XFxuICA8aDE+RnJpZW5kczwvaDE+XFxuPC9oZWFkZXI+XFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8aDE+SGVsbG8gUm9tYWluPC9oMT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZGFzaGVkLWxpbmVcXFwiPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPHVsPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZnJpZW5kcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC91bD5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG50ZW1wbGF0ZXNbJ21vZGFsJ10gPSB0ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50IG1vZGFsXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxoMT5XYXRjaCBvdXQhIEknbSBhIG1vZGFsPC9oMT5cXG4gICAgPGJ1dHRvbiBvbmNsaWNrPVxcXCJhcHAuaGlkZU1vZGFsKClcXFwiPkNsb3NlPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xudGVtcGxhdGVzWydwcm9maWxlJ10gPSB0ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiBcIjxoZWFkZXI+XFxuICA8ZGl2IGNsYXNzPVxcXCJwb2ludHNcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidmFsdWVcXFwiPjEgMjU3PC9zcGFuPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJpbmZvXFxcIj5pPC9idXR0b24+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ1bml0XFxcIj5wb2ludHM8L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxkaXYgc3R5bGU9XFxcInBvc2l0aW9uOiByZWxhdGl2ZTsgXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJhclxcXCIgc3R5bGU9XFxcIndpZHRoOiA1NSU7XFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjYWxlXFxcIj5cXG4gICAgICA8c3BhbiBzdHlsZT1cXFwibGVmdDogMDtcXFwiPjUwMDwvc3Bhbj5cXG4gICAgICA8c3BhbiBzdHlsZT1cXFwibGVmdDogNTAlXFxcIj4xMDAwPC9zcGFuPlxcbiAgICAgIDxzcGFuIHN0eWxlPVxcXCJsZWZ0OiAxMDAlXFxcIj4xNTAwPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIj7DiWNoYW5nZXI8L2J1dHRvbj5cXG48L2hlYWRlcj5cXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxwPjxhIGhyZWY9XFxcIiMvcHJvZmlsZS9cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCIvZnJpZW5kc1xcXCI+RnJpZW5kczwvYT48L3A+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgb25jbGljaz1cXFwiYXBwLnNob3dNb2RhbCgpXFxcIj5Nb24gQ29tcHRlPC9idXR0b24+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBzbWFsbFxcXCI+QnV0dG9uIHNtYWxsPC9idXR0b24+XFxuICAgIDxoMj5DaGVja2xpc3Q8L2gyPlxcbiAgICA8cD5cXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJhclxcXCIgc3R5bGU9XFxcIndpZHRoOiAyOCVcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibGVnZW5kXFxcIj5cXG4gICAgICAxLzUgc2VtYWluZXMgZGUgY29ubmV4aW9uXFxuICAgIDwvZGl2PlxcbiAgICA8L3A+XFxuICAgIDxwPkNvbnN1bHRlciBsZSBzaXRlIGNoYXF1ZSBzZW1haW5lIHZvdXMgcmFwcG9ydGUgZGVzIHBvaW50cywgZXQgbcOqbWUgdW4gYm9udXMgITwvcD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2VudGVyZWRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrbGlzdFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3JkZXJcXFwiIHN0eWxlPVxcXCJhbmltYXRpb24tZHVyYXRpb246IDJzXFxcIj48L2Rpdj5cXG4gICAgICAgIDx1bD5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJjaGVja2VkXFxcIj5cXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxMjAgMTIwXFxcIiBjbGFzcz1cXFwiY2hlY2tcXFwiPlxcbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNjBcXFwiIGN5PVxcXCI2MFxcXCIgcj1cXFwiNTBcXFwiPjwvY2lyY2xlPlxcbiAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cXFwiODYuODc1IDQ0LjA2MyA1My43NSA3Ni41NjMgMzcuMTU3IDYwLjg0M1xcXCI+PC9wb2x5bGluZT5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWxcXFwiPlxcbiAgICAgICAgICAgICAgPHA+U2VtYWluZSAxPC9wPlxcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3M9XFxcInJld2FyZFxcXCI+KzEwPC9zcGFuPjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJjaGVja2VkIGFjdGl2ZVxcXCI+XFxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTIwIDEyMFxcXCIgY2xhc3M9XFxcImNoZWNrXFxcIj5cXG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjYwXFxcIiBjeT1cXFwiNjBcXFwiIHI9XFxcIjUwXFxcIj48L2NpcmNsZT5cXG4gICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XFxcIjg2Ljg3NSA0NC4wNjMgNTMuNzUgNzYuNTYzIDM3LjE1NyA2MC44NDNcXFwiPjwvcG9seWxpbmU+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsXFxcIj5cXG4gICAgICAgICAgICAgIDxwPlNlbWFpbmUgMjwvcD5cXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzPVxcXCJyZXdhcmRcXFwiPisxNTwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxMjAgMTIwXFxcIiBjbGFzcz1cXFwiY2hlY2tcXFwiPlxcbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNjBcXFwiIGN5PVxcXCI2MFxcXCIgcj1cXFwiNTBcXFwiPjwvY2lyY2xlPlxcbiAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cXFwiODYuODc1IDQ0LjA2MyA1My43NSA3Ni41NjMgMzcuMTU3IDYwLjg0M1xcXCI+PC9wb2x5bGluZT5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWxcXFwiPlxcbiAgICAgICAgICAgICAgPHA+U2VtYWluZSAzPC9wPlxcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3M9XFxcInJld2FyZFxcXCI+KzE1PC9zcGFuPjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cXFwiMCAwIDEyMCAxMjBcXFwiIGNsYXNzPVxcXCJjaGVja1xcXCI+XFxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI2MFxcXCIgY3k9XFxcIjYwXFxcIiByPVxcXCI1MFxcXCI+PC9jaXJjbGU+XFxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVxcXCI4Ni44NzUgNDQuMDYzIDUzLjc1IDc2LjU2MyAzNy4xNTcgNjAuODQzXFxcIj48L3BvbHlsaW5lPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbFxcXCI+XFxuICAgICAgICAgICAgICA8cD5TZW1haW5lIDQ8L3A+XFxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzcz1cXFwicmV3YXJkXFxcIj4rMTU8L3NwYW4+PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTIwIDEyMFxcXCIgY2xhc3M9XFxcImNoZWNrXFxcIj5cXG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjYwXFxcIiBjeT1cXFwiNjBcXFwiIHI9XFxcIjUwXFxcIj48L2NpcmNsZT5cXG4gICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XFxcIjg2Ljg3NSA0NC4wNjMgNTMuNzUgNzYuNTYzIDM3LjE1NyA2MC44NDNcXFwiPjwvcG9seWxpbmU+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsXFxcIj5cXG4gICAgICAgICAgICAgIDxwPlNlbWFpbmUgNTwvcD5cXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzPVxcXCJyZXdhcmRcXFwiPmxpdnJhaXNvbiBncmF0dWl0ZSAhPC9zcGFuPjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8aDI+UHJvZ3Jlc3NiYXIgbWluaTwvaDI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzIG1pbmlcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJhclxcXCIgc3R5bGU9XFxcIndpZHRoOjgwJVxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8aDI+VGV4dDwvaDI+XFxuICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbSBkb2xvcmVtcXVlIGZ1Z2l0IG5hdHVzIG5lY2Vzc2l0YXRpYnVzIG5lcXVlLCBub24sXFxuICAgICAgb2JjYWVjYXRpIHBvcnJvIHF1aXMgcmVtIHJlcGVsbGF0LCB1bGxhbSB2ZXJpdGF0aXMgdm9sdXB0YXRpYnVzLiBBIGJlYXRhZSBmdWdpdCBpbXBlZGl0IGl0YXF1ZSwgcmVwZWxsYXRcXG4gICAgICB2b2x1cHRhdGVtITwvcD5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGZ1bGxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJiYWRnZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICA8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDIwNCAyMDRcXFwiIGNsYXNzPVxcXCJjaXJjbGVcXFwiPlxcbiAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgc3Ryb2tlPVxcXCIjMDAwMDAwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgZmlsbD1cXFwicmdiYSgwLDAsMCwwKVxcXCJcXG4gICAgICAgICAgICAgIGQ9XFxcIk0gMTAyLCAxMDJcXG4gICAgICAgICAgICBtIC0xMDAsIDBcXG4gICAgICAgICAgICBhIDEwMCwxMDAgMCAxLDAgMjAwLDBcXG4gICAgICAgICAgICBhIDEwMCwxMDAgMCAxLDAgLTIwMCwwXFxcIj5cXG4gICAgICAgICAgPC9wYXRoPlxcbiAgICAgICAgPC9zdmc+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vYXNzZXRzL2ljb25zOC1zZWFyY2gucG5nXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWxcXFwiPlxcbiAgICAgICAgPGgzPkN1cmlldXg8L2gzPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MCVcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWdlbmRcXFwiPlxcbiAgICAgICAgICAxNS8yMCBmaWNoZXMgcHJvZHVpdHMgY29uc3VsdMOpZXNcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcbiIsImltcG9ydCAqIGFzIGJhc2UgZnJvbSAnLi9oYW5kbGViYXJzL2Jhc2UnO1xuXG4vLyBFYWNoIG9mIHRoZXNlIGF1Z21lbnQgdGhlIEhhbmRsZWJhcnMgb2JqZWN0LiBObyBuZWVkIHRvIHNldHVwIGhlcmUuXG4vLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuaW1wb3J0IFNhZmVTdHJpbmcgZnJvbSAnLi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9oYW5kbGViYXJzL2V4Y2VwdGlvbic7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL2hhbmRsZWJhcnMvdXRpbHMnO1xuaW1wb3J0ICogYXMgcnVudGltZSBmcm9tICcuL2hhbmRsZWJhcnMvcnVudGltZSc7XG5cbmltcG9ydCBub0NvbmZsaWN0IGZyb20gJy4vaGFuZGxlYmFycy9uby1jb25mbGljdCc7XG5cbi8vIEZvciBjb21wYXRpYmlsaXR5IGFuZCB1c2FnZSBvdXRzaWRlIG9mIG1vZHVsZSBzeXN0ZW1zLCBtYWtlIHRoZSBIYW5kbGViYXJzIG9iamVjdCBhIG5hbWVzcGFjZVxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICBsZXQgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuICBVdGlscy5leHRlbmQoaGIsIGJhc2UpO1xuICBoYi5TYWZlU3RyaW5nID0gU2FmZVN0cmluZztcbiAgaGIuRXhjZXB0aW9uID0gRXhjZXB0aW9uO1xuICBoYi5VdGlscyA9IFV0aWxzO1xuICBoYi5lc2NhcGVFeHByZXNzaW9uID0gVXRpbHMuZXNjYXBlRXhwcmVzc2lvbjtcblxuICBoYi5WTSA9IHJ1bnRpbWU7XG4gIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24oc3BlYykge1xuICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcbiAgfTtcblxuICByZXR1cm4gaGI7XG59XG5cbmxldCBpbnN0ID0gY3JlYXRlKCk7XG5pbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxubm9Db25mbGljdChpbnN0KTtcblxuaW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdDtcbiIsImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjExJztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cbmV4cG9ydCBjb25zdCBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcbiAgNzogJz49IDQuMC4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKGBBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCIke25hbWV9XCIgYXMgdW5kZWZpbmVkYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHtjcmVhdGVGcmFtZSwgbG9nZ2VyfTtcbiIsImltcG9ydCByZWdpc3RlcklubGluZSBmcm9tICcuL2RlY29yYXRvcnMvaW5saW5lJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMoaW5zdGFuY2UpIHtcbiAgcmVnaXN0ZXJJbmxpbmUoaW5zdGFuY2UpO1xufVxuXG4iLCJpbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckRlY29yYXRvcignaW5saW5lJywgZnVuY3Rpb24oZm4sIHByb3BzLCBjb250YWluZXIsIG9wdGlvbnMpIHtcbiAgICBsZXQgcmV0ID0gZm47XG4gICAgaWYgKCFwcm9wcy5wYXJ0aWFscykge1xuICAgICAgcHJvcHMucGFydGlhbHMgPSB7fTtcbiAgICAgIHJldCA9IGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhcnRpYWxzIHN0YWNrIGZyYW1lIHByaW9yIHRvIGV4ZWMuXG4gICAgICAgIGxldCBvcmlnaW5hbCA9IGNvbnRhaW5lci5wYXJ0aWFscztcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gZXh0ZW5kKHt9LCBvcmlnaW5hbCwgcHJvcHMucGFydGlhbHMpO1xuICAgICAgICBsZXQgcmV0ID0gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9yaWdpbmFsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm9wcy5wYXJ0aWFsc1tvcHRpb25zLmFyZ3NbMF1dID0gb3B0aW9ucy5mbjtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuIiwiXG5jb25zdCBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgbGV0IGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIGxldCB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAobG9jKSB7XG4gICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xuXG4gICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29sdW1uJywge1xuICAgICAgICAgIHZhbHVlOiBjb2x1bW4sXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAobm9wKSB7XG4gICAgLyogSWdub3JlIGlmIHRoZSBicm93c2VyIGlzIHZlcnkgcGFydGljdWxhciAqL1xuICB9XG59XG5cbkV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjZXB0aW9uO1xuIiwiaW1wb3J0IHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJFYWNoIGZyb20gJy4vaGVscGVycy9lYWNoJztcbmltcG9ydCByZWdpc3RlckhlbHBlck1pc3NpbmcgZnJvbSAnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJztcbmltcG9ydCByZWdpc3RlcklmIGZyb20gJy4vaGVscGVycy9pZic7XG5pbXBvcnQgcmVnaXN0ZXJMb2cgZnJvbSAnLi9oZWxwZXJzL2xvZyc7XG5pbXBvcnQgcmVnaXN0ZXJMb29rdXAgZnJvbSAnLi9oZWxwZXJzL2xvb2t1cCc7XG5pbXBvcnQgcmVnaXN0ZXJXaXRoIGZyb20gJy4vaGVscGVycy93aXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgcmVnaXN0ZXJCbG9ja0hlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlckVhY2goaW5zdGFuY2UpO1xuICByZWdpc3RlckhlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlcklmKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb2coaW5zdGFuY2UpO1xuICByZWdpc3Rlckxvb2t1cChpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyV2l0aChpbnN0YW5jZSk7XG59XG4iLCJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBjcmVhdGVGcmFtZSwgaXNBcnJheX0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGxldCBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZuKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoY29udGV4dCA9PT0gZmFsc2UgfHwgY29udGV4dCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgIGlmIChjb250ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgICAgb3B0aW9ucy5pZHMgPSBbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzLmVhY2goY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBsZXQgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgIG9wdGlvbnMgPSB7ZGF0YTogZGF0YX07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHthcHBlbmRDb250ZXh0UGF0aCwgYmxvY2tQYXJhbXMsIGNyZWF0ZUZyYW1lLCBpc0FycmF5LCBpc0Z1bmN0aW9ufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG4gICAgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbixcbiAgICAgICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJldCA9ICcnLFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb250ZXh0UGF0aDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IGJsb2NrUGFyYW1zKFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLCBbY29udGV4dFBhdGggKyBmaWVsZCwgbnVsbF0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcmlvcktleTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29udGV4dCkge1xuICAgICAgICAgIGlmIChjb250ZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIHJ1bm5pbmcgdGhlIGl0ZXJhdGlvbnMgb25lIHN0ZXAgb3V0IG9mIHN5bmMgc28gd2UgY2FuIGRldGVjdFxuICAgICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuICAgICAgICAgICAgLy8gYW4gaXRlcm1lZGlhdGUga2V5cyBhcnJheS5cbiAgICAgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaW9yS2V5ID0ga2V5O1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuIiwiaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaGVscGVyTWlzc2luZycsIGZ1bmN0aW9uKC8qIFthcmdzLCBdb3B0aW9ucyAqLykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0cnVjdC5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvbWVvbmUgaXMgYWN0dWFsbHkgdHJ5aW5nIHRvIGNhbGwgc29tZXRoaW5nLCBibG93IHVwLlxuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignTWlzc2luZyBoZWxwZXI6IFwiJyArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0ubmFtZSArICdcIicpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQge2lzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihjb25kaXRpb25hbCkpIHsgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpOyB9XG5cbiAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXG4gICAgLy8gVGhlIGBpbmNsdWRlWmVyb2Agb3B0aW9uIG1heSBiZSBzZXQgdG8gdHJlYXQgdGhlIGNvbmR0aW9uYWwgYXMgcHVyZWx5IG5vdCBlbXB0eSBiYXNlZCBvbiB0aGVcbiAgICAvLyBiZWhhdmlvciBvZiBpc0VtcHR5LiBFZmZlY3RpdmVseSB0aGlzIGRldGVybWluZXMgaWYgMCBpcyBoYW5kbGVkIGJ5IHRoZSBwb3NpdGl2ZSBwYXRoIG9yIG5lZ2F0aXZlLlxuICAgIGlmICgoIW9wdGlvbnMuaGFzaC5pbmNsdWRlWmVybyAmJiAhY29uZGl0aW9uYWwpIHx8IGlzRW1wdHkoY29uZGl0aW9uYWwpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5mbih0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd1bmxlc3MnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHtmbjogb3B0aW9ucy5pbnZlcnNlLCBpbnZlcnNlOiBvcHRpb25zLmZuLCBoYXNoOiBvcHRpb25zLmhhc2h9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9nJywgZnVuY3Rpb24oLyogbWVzc2FnZSwgb3B0aW9ucyAqLykge1xuICAgIGxldCBhcmdzID0gW3VuZGVmaW5lZF0sXG4gICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsID0gMTtcbiAgICBpZiAob3B0aW9ucy5oYXNoLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5oYXNoLmxldmVsO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YS5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuZGF0YS5sZXZlbDtcbiAgICB9XG4gICAgYXJnc1swXSA9IGxldmVsO1xuXG4gICAgaW5zdGFuY2UubG9nKC4uLiBhcmdzKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKEhhbmRsZWJhcnMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgbGV0IHJvb3QgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyxcbiAgICAgICRIYW5kbGViYXJzID0gcm9vdC5IYW5kbGViYXJzO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBIYW5kbGViYXJzLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocm9vdC5IYW5kbGViYXJzID09PSBIYW5kbGViYXJzKSB7XG4gICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcbiAgICB9XG4gICAgcmV0dXJuIEhhbmRsZWJhcnM7XG4gIH07XG59XG4iLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQ09NUElMRVJfUkVWSVNJT04sIFJFVklTSU9OX0NIQU5HRVMsIGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgbGV0IGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbihkZXB0aHMsIG5hbWUpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIGxldCBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0LyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICB9XG4gICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSxcbiAgICAgICAgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IHJldHVybiAnJzsgfVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICBsZXQgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG4iLCIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiIsImNvbnN0IGVzY2FwZSA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyYjeDI3OycsXG4gICdgJzogJyYjeDYwOycsXG4gICc9JzogJyYjeDNEOydcbn07XG5cbmNvbnN0IGJhZENoYXJzID0gL1smPD5cIidgPV0vZyxcbiAgICAgIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob2JqLyogLCAuLi5zb3VyY2UgKi8pIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmV4cG9ydCBsZXQgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vLyBTb3VyY2VkIGZyb20gbG9kYXNoXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmVzdGllanMvbG9kYXNoL2Jsb2IvbWFzdGVyL0xJQ0VOU0UudHh0XG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLXN0eWxlICovXG5sZXQgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59O1xuLy8gZmFsbGJhY2sgZm9yIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKGlzRnVuY3Rpb24oL3gvKSkge1xuICBpc0Z1bmN0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9O1xufVxuZXhwb3J0IHtpc0Z1bmN0aW9ufTtcbi8qIGVzbGludC1lbmFibGUgZnVuYy1zdHlsZSAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA6IGZhbHNlO1xufTtcblxuLy8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVFeHByZXNzaW9uKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBlc2NhcGUgU2FmZVN0cmluZ3MsIHNpbmNlIHRoZXkncmUgYWxyZWFkeSBzYWZlXG4gICAgaWYgKHN0cmluZyAmJiBzdHJpbmcudG9IVE1MKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnRvSFRNTCgpO1xuICAgIH0gZWxzZSBpZiAoc3RyaW5nID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcgKyAnJztcbiAgICB9XG5cbiAgICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcbiAgICAvLyB0aGUgcmVnZXggdGVzdCB3aWxsIGRvIHRoaXMgdHJhbnNwYXJlbnRseSBiZWhpbmQgdGhlIHNjZW5lcywgY2F1c2luZyBpc3N1ZXMgaWZcbiAgICAvLyBhbiBvYmplY3QncyB0byBzdHJpbmcgaGFzIGVzY2FwZWQgY2hhcmFjdGVycyBpbiBpdC5cbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZztcbiAgfVxuXG4gIGlmICghcG9zc2libGUudGVzdChzdHJpbmcpKSB7IHJldHVybiBzdHJpbmc7IH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG4gIGxldCBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcbiAgcGFyYW1zLnBhdGggPSBpZHM7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4iLCIvLyBDcmVhdGUgYSBzaW1wbGUgcGF0aCBhbGlhcyB0byBhbGxvdyBicm93c2VyaWZ5IHRvIHJlc29sdmVcbi8vIHRoZSBydW50aW1lIG9uIGEgc3VwcG9ydGVkIHBhdGguXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9janMvaGFuZGxlYmFycy5ydW50aW1lJylbJ2RlZmF1bHQnXTtcbiIsInZhciBBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJy4vYXBwbGljYXRpb24nKTtcbnZhciDDpiA9IHJlcXVpcmUoJy4vYXN5bmMnKTtcbnZhciBUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vbmF2aWdhdGlvbi90ZW1wbGF0ZScpO1xucmVxdWlyZSgnLi4vZ2VuL3RlbXBsYXRlcycpO1xuXG52YXIgYXBwID0gbmV3IEFwcGxpY2F0aW9uKCcjYXBwJyk7XG52YXIgayA9IHJlcXVpcmUoJy4va2luZW1hdGljJyk7XG52YXIgaCA9IHJlcXVpcmUoJy4va2luZW1hdGljL2hlbHBlcnMnKTtcblxuLyphcHAucm91dGVyLm9uKCcvcHJvZmlsZS86aWQnLCBmdW5jdGlvbihwYXRoKXtcbiB2YXIgcHJvZmlsZVZpZXcgPSBhcHAudGVtcGxhdGVzLnByb2ZpbGUuY3JlYXRlKHBhdGgpO1xuIGFwcC5hbmltLnBlcmZvcm1UcmFuc2l0aW9uKGFwcC5jdXJyZW50VmlldywgcHJvZmlsZVZpZXcsICdwdXNoJyk7XG4gfSk7Ki9cblxuYXBwLmFkZFRlbXBsYXRlKG5ldyBUZW1wbGF0ZSgncHJvZmlsZScpKTtcbmFwcC5hZGRUZW1wbGF0ZShuZXcgVGVtcGxhdGUoJ2ZyaWVuZHMnKSk7XG5hcHAuYWRkVGVtcGxhdGUobmV3IFRlbXBsYXRlKCdtb2RhbCcpKTtcblxuYXBwLnRlbXBsYXRlcy5mcmllbmRzLm9uKCdiZWZvcmVFbnRlcicsIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgdmlldy5lbXB0eSgpO1xuICAgIHZpZXcuZGF0YSA9IG51bGw7XG4gICAgbG9hZEZyaWVuZHModmlldyk7XG4gICAgZG9uZSgpO1xufSk7XG5cbmFwcC50ZW1wbGF0ZXMuZnJpZW5kcy5vbignb25FbnRlcicsIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgdmlldy5kYXRhID8gb25EYXRhKCkgOiB2aWV3Lm9uKCdkYXRhJywgb25EYXRhKTtcbiAgICBmdW5jdGlvbiBvbkRhdGEoKSB7XG4gICAgICAgIMOmLnNlcmllcyhbXG4gICAgICAgICAgICByZW5kZXJWaWV3LFxuICAgICAgICAgICAgay5oaWRlKCdoMSwgbGknKSxcbiAgICAgICAgICAgIGsuYW5pbWF0ZUNzcygnaDEnLCAnZmFkZUluJyksXG4gICAgICAgICAgICBrLmFuaW1hdGVDc3MoJ2xpJywgJ2ZhZGVJblJpZ2h0Jywge2RlbGF5OiAyMDB9KVxuICAgICAgICBdLCBkb25lLCB2aWV3KTtcbiAgICB9XG59KTtcbmFwcC50ZW1wbGF0ZXMucHJvZmlsZS5vbignb25FbnRlcicsIGZ1bmN0aW9uICh2aWV3LCBkb25lKSB7XG4gICAgw6Yuc2VyaWVzKFtcbiAgICAgICAgcmVuZGVyVmlldyxcbiAgICAgICAgay5oaWRlKCdsaScpLFxuICAgICAgICBrLmhpZGUoJy5jaGVja2xpc3QgLmJvcmRlcicpLFxuICAgICAgICBrLnBhcmFsbGVsKFtcbiAgICAgICAgICAgIGsuYW5pbWF0ZUNzcygnLmNoZWNrbGlzdCAuYm9yZGVyJywgJ2V4cGFuZCcpLFxuICAgICAgICAgICAgay5hbmltYXRlQ3NzKCdsaScsICdmYWRlSW5SaWdodCcsIHtkZWxheTogMjAwfSlcbiAgICAgICAgXSlcbiAgICBdLCBkb25lLCB2aWV3KTtcbn0pO1xuXG5hcHAudGVtcGxhdGVzLnByb2ZpbGUub24oJ2JlZm9yZUVudGVyJywgZnVuY3Rpb24gKHZpZXcsIGRvbmUpIHtcbiAgICB2aWV3LmRhdGEgPSB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnUm9tYWluJ1xuICAgIH07XG4gICAgZG9uZSgpO1xufSk7XG5cbmFwcC50ZW1wbGF0ZXMuZnJpZW5kcy5vbignb25FeGl0JywgZnVuY3Rpb24gKHZpZXcsIGRvbmUpIHtcbiAgICBrLmFuaW1hdGVDc3MoJ2gxLCBsaScsICdmYWRlT3V0UmlnaHQnLCB7XG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIGFkZENsYXNzOiBrLmNsYXNzbmFtZXMuaGlkZS5UUkFOU1BBUkVOVFxuICAgIH0pKHZpZXcsIGRvbmUpXG59KTtcblxuYXBwLnRlbXBsYXRlcy5tb2RhbC5vbignYmVmb3JlRW50ZXInLCBmdW5jdGlvbiAodmlldywgZG9uZSkge1xuICAgIHZpZXcucmVuZGVyKCk7XG4gICAgZG9uZSgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlbmRlclZpZXcodmlldywgZG9uZSkge1xuICAgIHZpZXcucmVuZGVyKCk7XG4gICAgZG9uZSgpO1xufVxuXG5hcHAuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cubXlQcm9maWxlVmlldyA9IGFwcC5jcmVhdGVWaWV3KCdwcm9maWxlJywgJyMvcHJvZmlsZS8xJyk7XG4gICAgd2luZG93LmZyaWVuZHNWaWV3ID0gYXBwLmNyZWF0ZVZpZXcoJ2ZyaWVuZHMnLCAnIy9wcm9maWxlLzEvZnJpZW5kcycpO1xuICAgIHdpbmRvdy5tb2RhbFZpZXcgPSBhcHAuY3JlYXRlVmlldygnbW9kYWwnLCAnIy9tb2RhbCcpO1xuICAgIGguYWRkQ2xhc3Mod2luZG93Lm1vZGFsVmlldy5lbCwgJ2tpbmVtYXRpYy10cmFuc2xhdGUtYm90dG9tJyk7XG59O1xuXG5hcHAuZ290b0ZyaWVuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgay50cmFuc2l0aW9ucy5jb3Zlcih7YXBwOiBhcHAsIGZyb206IG15UHJvZmlsZVZpZXcsIHRvOiBmcmllbmRzVmlld30pXG59O1xuXG5hcHAuZ290b1Byb2ZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgay50cmFuc2l0aW9ucy5yZXZlYWwoe2FwcDogYXBwLCBmcm9tOiBmcmllbmRzVmlldywgdG86IG15UHJvZmlsZVZpZXd9KVxufTtcblxuYXBwLnNob3dNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBrLnRyYW5zaXRpb25zLm1vZGFsKHthcHA6IGFwcCwgdG86IG1vZGFsVmlld30pXG59O1xuXG5hcHAuaGlkZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGsudHJhbnNpdGlvbnMubW9kYWwoe2FwcDogYXBwLCBmcm9tOiBtb2RhbFZpZXd9KVxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZpZXcgPSBhcHAudmlld3NbbG9jYXRpb24uaGFzaF07XG4gICAgaWYgKHZpZXcgPT09IHdpbmRvdy5teVByb2ZpbGVWaWV3KSB7XG4gICAgICAgIGFwcC5nb3RvUHJvZmlsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcC5nb3RvRnJpZW5kcygpO1xuICAgIH1cbn0pO1xuXG5hcHAuaW5pdCgpO1xuXG53aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgSGFzaENoYW5nZUV2ZW50KFwiaGFzaGNoYW5nZVwiKSk7XG5cbmZ1bmN0aW9uIGxvYWRGcmllbmRzKHZpZXcpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmlldy5kYXRhID0ge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBmcmllbmRzOiBbXG4gICAgICAgICAgICAgICAge25hbWU6IFwiUm9tYWluXCJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIkRlbHBoaW5lXCJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIkxhdXJlbnRcIn0sXG4gICAgICAgICAgICAgICAge25hbWU6IFwiR3VpbGxhdW1lXCJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIkNocmlzdG9waGVcIn0sXG4gICAgICAgICAgICAgICAge25hbWU6IFwiTGF1cmFcIn1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgdmlldy5ob29rKCdkYXRhJyk7XG4gICAgfSwgMzUwKTtcbn1cblxuXG4vLyBQcm9kdWN0aW9uIHN0ZXBzIG9mIEVDTUEtMjYyLCBFZGl0aW9uIDYsIDIyLjEuMi4xXG4vLyBSw6lmw6lyZW5jZSA6IGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1hcnJheS5mcm9tXG5pZiAoIUFycmF5LmZyb20pIHtcbiAgICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICAgICAgdmFyIGlzQ2FsbGFibGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBudW1iZXIgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChudW1iZXIgPiAwID8gMSA6IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gICAgICAgIHZhciB0b0xlbmd0aCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIExhIHByb3ByacOpdMOpIGxlbmd0aCBkZSBsYSBtw6l0aG9kZSB2YXV0IDEuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgICAgICAgICAgLy8gMS4gU29pdCBDLCBsYSB2YWxldXIgdGhpc1xuICAgICAgICAgICAgdmFyIEMgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyAyLiBTb2l0IGl0ZW1zIGxlIFRvT2JqZWN0KGFycmF5TGlrZSkuXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKTtcblxuICAgICAgICAgICAgLy8gMy4gUmV0dXJuSWZBYnJ1cHQoaXRlbXMpLlxuICAgICAgICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LmZyb20gZG9pdCB1dGlsaXNlciB1biBvYmpldCBzZW1ibGFibGUgw6AgdW4gdGFibGVhdSAtIG51bGwgb3UgdW5kZWZpbmVkIG5lIHBldXZlbnQgcGFzIMOqdHJlIHV0aWxpc8Opc1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gNC4gU2kgbWFwZm4gZXN0IHVuZGVmaW5lZCwgbGUgbWFwcGluZyBzZXJhIGZhbHNlLlxuICAgICAgICAgICAgdmFyIG1hcEZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBUO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAvLyA1LiBzaW5vblxuICAgICAgICAgICAgICAgIC8vIDUuIGEuIHNpIElzQ2FsbGFibGUobWFwZm4pIGVzdCBmYWxzZSwgb24gbMOodmUgdW5lIFR5cGVFcnJvci5cbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb206IGxvcnNxdSBpbCBlc3QgdXRpbGlzw6kgbGUgZGV1eGnDqG1lIGFyZ3VtZW50IGRvaXQgw6p0cmUgdW5lIGZvbmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gNS4gYi4gc2kgdGhpc0FyZyBhIMOpdMOpIGZvdXJuaSwgVCBzZXJhIHRoaXNBcmcgOyBzaW5vbiBUIHNlcmEgdW5kZWZpbmVkLlxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICBUID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gMTAuIFNvaXQgbGVuVmFsdWUgcG91ciBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgICAgICAgLy8gMTEuIFNvaXQgbGVuIHBvdXIgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIC8vIDEzLiBTaSBJc0NvbnN0cnVjdG9yKEMpIHZhdXQgdHJ1ZSwgYWxvcnNcbiAgICAgICAgICAgIC8vIDEzLiBhLiBTb2l0IEEgbGUgcsOpc3VsdGF0IGRlIGwnYXBwZWwgw6AgbGEgbcOpdGhvZGUgaW50ZXJuZSBbW0NvbnN0cnVjdF1dIGF2ZWMgdW5lIGxpc3RlIGVuIGFyZ3VtZW50IHF1aSBjb250aWVudCBsJ8OpbMOpbWVudCBsZW4uXG4gICAgICAgICAgICAvLyAxNC4gYS4gU2lub24sIHNvaXQgQSBsZSByw6lzdWx0YXQgZGUgQXJyYXlDcmVhdGUobGVuKS5cbiAgICAgICAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pO1xuXG4gICAgICAgICAgICAvLyAxNi4gU29pdCBrIMOpZ2FsIMOgIDAuXG4gICAgICAgICAgICB2YXIgayA9IDA7ICAvLyAxNy4gT24gcsOpcMOodGUgdGFudCBxdWUgayA8IGxlbuKAplxuICAgICAgICAgICAgdmFyIGtWYWx1ZTtcbiAgICAgICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAga1ZhbHVlID0gaXRlbXNba107XG4gICAgICAgICAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgICAgICAgICAgIEFba10gPSB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCcgPyBtYXBGbihrVmFsdWUsIGspIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEFba10gPSBrVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIDE4LiBTb2l0IHB1dFN0YXR1cyDDqWdhbCDDoCBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgICAgICAgIEEubGVuZ3RoID0gbGVuOyAgLy8gMjAuIE9uIHJlbnZvaWUgQS5cbiAgICAgICAgICAgIHJldHVybiBBO1xuICAgICAgICB9O1xuICAgIH0oKSk7XG59XG5cbndpbmRvdy5hcHAgPSBhcHA7XG53aW5kb3cuayA9IGs7IiwiLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAY29uc3RydWN0b3JcbiAqIEBjbGFzc1xuICovXG52YXIgQXBwbGljYXRpb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB0aGlzLnRlbXBsYXRlcyA9IHt9O1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8aGVhZGVyPjwvaGVhZGVyPjxkaXYgY2xhc3M9XCJ2aWV3c1wiPjwvZGl2Pjxmb290ZXI+PC9mb290ZXI+JztcbiAgICB0aGlzLnZpZXdzID0ge307XG59O1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuYWRkVGVtcGxhdGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSl7XG4gICAgdGhpcy50ZW1wbGF0ZXNbdGVtcGxhdGUubmFtZV0gPSB0ZW1wbGF0ZTtcbn07XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5jcmVhdGVWaWV3ID0gZnVuY3Rpb24obmFtZSwgcGF0aCl7XG4gICAgdGhpcy52aWV3c1twYXRoXSA9IHRoaXMudGVtcGxhdGVzW25hbWVdLmNyZWF0ZShwYXRoKTtcbiAgICB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC52aWV3cycpLmFwcGVuZCh0aGlzLnZpZXdzW3BhdGhdLmVsKTtcbiAgICByZXR1cm4gdGhpcy52aWV3c1twYXRoXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwbGljYXRpb247IiwiXG5mdW5jdGlvbiBlYWNoUGFyYWxsZWxPYmoob2JqLCBmbiwgZG9uZSkge1xuICAgIGVhY2hQYXJhbGxlbEFycihPYmplY3Qua2V5cyhvYmopLCBmdW5jdGlvbiAoa2V5LCBjYikge1xuICAgICAgICBmbihrZXksIG9ialtrZXldLCBjYik7XG4gICAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGVhY2hTZXJpZXNPYmoob2JqLCBmbiwgZG9uZSkge1xuICAgIGVhY2hTZXJpZXNBcnIoT2JqZWN0LmtleXMob2JqKSwgZnVuY3Rpb24gKGtleSwgY2IpIHtcbiAgICAgICAgZm4oa2V5LCBvYmpba2V5XSwgY2IpO1xuICAgIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBlYWNoUGFyYWxsZWxBcnIoYXJyLCBmbiwgZG9uZSkge1xuICAgIHZhciBpID0gMCwgY29tcGxldGVkID0gMCwgbCA9IGFyci5sZW5ndGgsIGNiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb21wbGV0ZWQrKztcbiAgICAgICAgaWYgKGNvbXBsZXRlZCA9PT0gbCkge1xuICAgICAgICAgICAgY2FsbElmRnVuY3Rpb24oZG9uZSlcbiAgICAgICAgfVxuICAgIH07XG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZm4oYXJyW2ldLCBjYik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlYWNoUGFyYWxsZWwoc3ViamVjdCwgZm4sIGRvbmUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJqZWN0KSkge1xuICAgICAgICByZXR1cm4gZWFjaFBhcmFsbGVsQXJyKHN1YmplY3QsIGZuLCBkb25lKTtcbiAgICB9XG4gICAgZWFjaFBhcmFsbGVsT2JqKHN1YmplY3QsIGZuLCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcGFyYWxsZWwoZnVuY3Rpb25zLCBkb25lKSB7XG4gICAgdmFyIGFkZGl0aW9uYWxBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICBlYWNoUGFyYWxsZWxBcnIoZnVuY3Rpb25zLCBmdW5jdGlvbiAoZm4sIGNiLCBwcmV2KSB7XG4gICAgICAgIHZhciBhcmdzID0gW2NiLCBwcmV2XTtcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxBcmdzLmxlbmd0aCl7XG4gICAgICAgICAgICBhcmdzID0gYWRkaXRpb25hbEFyZ3MuY29uY2F0KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGZuLmFwcGx5KGZuLCBhcmdzKTtcbiAgICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gZWFjaFNlcmllcyhzdWJqZWN0LCBmbiwgZG9uZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN1YmplY3QpKSB7XG4gICAgICAgIHJldHVybiBlYWNoU2VyaWVzQXJyKHN1YmplY3QsIGZuLCBkb25lKTtcbiAgICB9XG4gICAgZWFjaFNlcmllc09iaihzdWJqZWN0LCBmbiwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGVhY2hTZXJpZXNBcnIoYXJyLCBmbiwgZG9uZSkge1xuICAgIHZhciBpID0gMCwgcHJldiwgY2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgcHJldiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIGV4ZWMoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgICAgaWYgKGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBmbihhcnJbaV0sIGNiLCBwcmV2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxJZkZ1bmN0aW9uKGRvbmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlYygpO1xufVxuXG4vKipcbiAqIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB3aWxsIGJlIHBhc3NlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICogQHBhcmFtIGZ1bmN0aW9uc1xuICogQHBhcmFtIGRvbmVcbiAqL1xuZnVuY3Rpb24gc2VyaWVzKGZ1bmN0aW9ucywgZG9uZSkge1xuICAgIHZhciBhZGRpdGlvbmFsQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgZWFjaFNlcmllc0FycihmdW5jdGlvbnMsIGZ1bmN0aW9uIChmbiwgY2IsIHByZXYpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbY2IsIHByZXZdO1xuICAgICAgICBpZiAoYWRkaXRpb25hbEFyZ3MubGVuZ3RoKXtcbiAgICAgICAgICAgIGFyZ3MgPSBhZGRpdGlvbmFsQXJncy5jb25jYXQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZm4uYXBwbHkoZm4sIGFyZ3MpO1xuICAgIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBjYWxsSWZGdW5jdGlvbihmbikge1xuICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBmbigpO1xuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBlYWNoU2VyaWVzOiBlYWNoU2VyaWVzLFxuICAgIHNlcmllczogc2VyaWVzLFxuICAgIGVhY2hQYXJhbGxlbDogZWFjaFBhcmFsbGVsLFxuICAgIHBhcmFsbGVsOiBwYXJhbGxlbFxufTsiLCJ2YXIgaCA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xudmFyIMOmID0gcmVxdWlyZSgnLi4vYXN5bmMnKTtcbnZhciBjbGFzc25hbWVzID0gcmVxdWlyZSgnLi9jbGFzc25hbWVzJyk7XG5cblxuLyoqXG4gKiBAZnVuY3Rpb24gYW5pbWF0ZUNzc1xuICogQGRlc2NyaXB0aW9uXG4gKiBAcGFyYW0ge05vZGVMaXN0fEhUTUxFbGVtZW50fEhUTUxFbGVtZW50W118c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGNsc1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmRlbGF5IHRpbWUgdG8gd2FpdCBiZWZvcmUgZmlyaW5nIHRoZSBhbmltYXRpb24sIGluIG1zXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hZGRDbGFzcyBhZGQgY2xhc3MoZXMpIHRvIHRoZSBlbGVtZW50IGFmdGVyIHRoZSBhbmltYXRpb24gZmluaXNoZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnJlbW92ZUNsYXNzIHJlbW92ZSBjbGFzcyhlcykgdG8gdGhlIGVsZW1lbnQgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBmaW5pc2hlc1xuICogQHBhcmFtIHtmdW5jdGlvbnx1bmRlZmluZWR9IG9wdGlvbnMuYWZ0ZXIgZXhlYyBhIGNhbGxiYWNrIGZvciBlYWNoIGFuaW1hdGVkIGVsZW1lbnRcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFuaW1hdGVDc3Moc2VsZWN0b3IsIGNscywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtkZWxheTogMX07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFuaW1hdGVJblZpZXcodmlldywgZG9uZSkge1xuICAgICAgICAvLyB0YXJnZXRzIG1heSBiZSBhIHNpbmdsZSBkb20gZWxlbWVudCBvciBhIG5vZGUgbGlzdFxuICAgICAgICB2YXIgdGFyZ2V0cztcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRhcmdldHMgPSBBcnJheS5mcm9tKHZpZXcuZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICB9IGVsc2UgeyAvLyBjYXNlIGlzQXJyYXkgb3IgTm9kZUxpc3RcbiAgICAgICAgICAgIHRhcmdldHMgPSBzZWxlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRhcmdldHMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiBkb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjdXJyZW50IGVsZW1lbnQgaXRlcmF0aW9uLCB1c2VkIHRvIGRlbGF5XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgw6YuZWFjaFBhcmFsbGVsKHRhcmdldHMsIGZ1bmN0aW9uIChlbCwgY2IpIHtcbiAgICAgICAgICAgIC8vd2UgdXNlIGEgc2V0VGltZW91dCB0byBkZWxheSB0aGUgYXBwbGljYXRpb24gb2YgdGhlIGNsYXNzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKGVsLCBoLmV2ZXJ5Q2xhc3NuYW1lKGNsYXNzbmFtZXMuaGlkZSkpO1xuICAgICAgICAgICAgICAgIGguYWRkQ2xhc3MoZWwsICdhbmltYXRlZCcpO1xuICAgICAgICAgICAgICAgIC8vIHZvaWQgZWwub2Zmc2V0V2lkdGg7IC8vIGZvcmNlIHRoZSBicm93c2VyIHRvIGRvIGEgcmVmbG93XG4gICAgICAgICAgICAgICAgaC5jbHMoZWwsIFtjbHNdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGguYWRkQ2xhc3MoZWwsIG9wdGlvbnMuYWRkQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKGVsLCBvcHRpb25zLnJlbW92ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhlbCwgWydhbmltYXRlZCcsIGNsc10pO1xuICAgICAgICAgICAgICAgICAgICBoLmlzRnVuY3Rpb24ob3B0aW9ucy5hZnRlcikgPyBvcHRpb25zLmFmdGVyKGVsLCBjYikgOiBjYigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgb3B0aW9ucy5kZWxheSAqIGkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9LCBkb25lKTtcbiAgICB9XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIFdJVEg6ICdraW5lbWF0aWMtd2l0aC10cmFuc2l0aW9uJyxcbiAgICAgICAgV0lUSE9VVDogJ2tpbmVtYXRpYy13aXRob3V0LXRyYW5zaXRpb24nXG4gICAgfSxcbiAgICBvcGFjaXR5OiB7XG4gICAgICAgIFRSQU5TUEFSRU5UOiAna2luZW1hdGljLW9wYWNpdHktdHJhbnNwYXJlbnQnLFxuICAgICAgICBPUEFRVUU6ICdraW5lbWF0aWMtb3BhY2l0eS1vcGFxdWUnLFxuICAgICAgICBMSUdIVDogJ2tpbmVtYXRpYy1vcGFjaXR5LWxpZ2h0JyxcbiAgICAgICAgSEVBVlk6ICdraW5lbWF0aWMtb3BhY2l0eS1oZWF2eSdcbiAgICB9LFxuICAgIGRlcHRoOiB7XG4gICAgICAgIEZBUlRIRVNUOiAna2luZW1hdGljLWZhcnRoZXN0JyxcbiAgICAgICAgRkFSOiAna2luZW1hdGljLWZhcicsXG4gICAgICAgIE5FQVI6ICdraW5lbWF0aWMtbmVhcicsXG4gICAgICAgIE5FQVJFU1Q6ICdraW5lbWF0aWMtbmVhcmVzdCdcbiAgICB9LFxuICAgIHNoYWRvdzoge1xuICAgICAgICBCQVNFOiAna2luZW1hdGljLXNoYWRvdycsXG4gICAgICAgIEJJR19ESUZGVVNFOiAna2luZW1hdGljLXNoYWRvdy1iaWctZGlmZnVzZScsXG4gICAgICAgIE1FRElVTV9ESUZGVVNFOiAna2luZW1hdGljLXNoYWRvdy1tZWRpdW0tZGlmZnVzZScsXG4gICAgICAgIFRSQU5TUEFSRU5UOiAna2luZW1hdGljLXNoYWRvdy10cmFuc3BhcmVudCdcbiAgICB9LFxuICAgIGhpZGU6IHtcbiAgICAgICAgRElTUExBWV9OT05FOiAna2luZW1hdGljLW5vLWRpc3BsYXknLFxuICAgICAgICBUUkFOU1BBUkVOVDogJ2tpbmVtYXRpYy1oaWRlLXRyYW5zcGFyZW50JyxcbiAgICAgICAgQ09MTEFQU0VfSEVJR0hUOiAna2luZW1hdGljLWNvbGxhcHNlLWhlaWdodCcsXG4gICAgICAgIENPTExBUFNFX1dJRFRIOiAna2luZW1hdGljLWNvbGxhcHNlLXdpZHRoJ1xuICAgIH0sXG4gICAgdHJhbnNsYXRlOiB7XG4gICAgICAgIFJJR0hUOiAna2luZW1hdGljLXRyYW5zbGF0ZS1yaWdodCcsXG4gICAgICAgIFRPUDogJ2tpbmVtYXRpYy10cmFuc2xhdGUtdG9wJyxcbiAgICAgICAgTEVGVDogJ2tpbmVtYXRpYy10cmFuc2xhdGUtbGVmdCcsXG4gICAgICAgIEJPVFRPTTogJ2tpbmVtYXRpYy10cmFuc2xhdGUtYm90dG9tJ1xuICAgIH1cbn07IiwidmFyIMOmID0gcmVxdWlyZSgnLi4vYXN5bmMnKTtcblxuZnVuY3Rpb24gYmluZEFuaW1hdGlvbk9yVHJhbnNpdGlvbihlbGVtZW50LCBjYWxsYmFjaywgY29tcHV0ZWRQcm9wZXJ0eU5hbWUsIGRvbUV2ZW50TmFtZSkge1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICB2YXIgZHVyYXRpb24gPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoY29tcHV0ZWRQcm9wZXJ0eU5hbWUpO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gJycgfHwgZHVyYXRpb24gPT0gJzBzJykge1xuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tRXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH07XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGRvbUV2ZW50TmFtZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChlbGVtZW50LCBjYWxsYmFjaykge1xuICAgIGJpbmRBbmltYXRpb25PclRyYW5zaXRpb24oZWxlbWVudCwgY2FsbGJhY2ssICd0cmFuc2l0aW9uLWR1cmF0aW9uJywgd2hpY2hUcmFuc2l0aW9uRXZlbnQoKSk7XG59XG5cbmZ1bmN0aW9uIG9uQW5pbWF0aW9uRW5kKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgYmluZEFuaW1hdGlvbk9yVHJhbnNpdGlvbihlbGVtZW50LCBjYWxsYmFjaywgJ2FuaW1hdGlvbi1kdXJhdGlvbicsIHdoaWNoQW5pbWF0aW9uRXZlbnQoKSk7XG59XG5cbmZ1bmN0aW9uIGFkZEFuaW1hdGVkQ2xhc3MoZWxlbWVudCwgY2xzLCBjYWxsYmFjaykge1xuICAgIG9uQW5pbWF0aW9uRW5kKGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDbGFzc25hbWVzRnJvbUFyZ3MoYXJncykge1xuICAgIHZhciBhcmdzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKSwgY2xhc3NuYW1lcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gZmlsdGVyQXJyKGFycikge1xuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgYXJnICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNsYXNzbmFtZXMucHVzaChhcmcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJBcnIoYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlsdGVyQXJyKGFyZ3NBcnJheSk7XG4gICAgcmV0dXJuIGNsYXNzbmFtZXM7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNscykge1xuICAgIG1hbmFnZUNsYXNzKGVsZW1lbnQsIGdldENsYXNzbmFtZXNGcm9tQXJncyhhcmd1bWVudHMpLCAnYWRkJyk7XG59XG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbHMpIHtcbiAgICBtYW5hZ2VDbGFzcyhlbGVtZW50LCBnZXRDbGFzc25hbWVzRnJvbUFyZ3MoYXJndW1lbnRzKSwgJ3JlbW92ZScpO1xufVxuLyoqXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjbHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBhZGRPclJlbW92ZVxuICovXG5mdW5jdGlvbiBtYW5hZ2VDbGFzcyhlbGVtZW50LCBjbHMsIGFkZE9yUmVtb3ZlKSB7XG4gICAgaWYgKGNscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0W2FkZE9yUmVtb3ZlXS5hcHBseShlbGVtZW50LmNsYXNzTGlzdCwgY2xzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHdoaWNoQW5pbWF0aW9uRXZlbnQoKSB7XG4gICAgdmFyIHQ7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHtcbiAgICAgICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnLFxuICAgICAgICAnT0FuaW1hdGlvbic6ICdvQW5pbWF0aW9uRW5kJyxcbiAgICAgICAgJ01vekFuaW1hdGlvbic6ICdBbmltYXRpb25lbmQnLFxuICAgICAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCdcbiAgICB9O1xuXG4gICAgZm9yICh0IGluIGFuaW1hdGlvbnMpIHtcbiAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb25zW3RdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aGljaFRyYW5zaXRpb25FdmVudCgpIHtcbiAgICB2YXIgdDtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpO1xuICAgIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgICdNb3pUcmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgIH07XG5cbiAgICBmb3IgKHQgaW4gdHJhbnNpdGlvbnMpIHtcbiAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBhcHBseSBjbGFzc2xpc3QgdHJhbnNmb3JtYXRpb25zIGZyb20gc3RyaW5nXG4gKiBAZnVuY3Rpb24gY2xzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gb3BlcmF0aW9ucyBBIHN0cmluZyBjb250YWluaW5nIGNsYXNzbmFtZXMuIElmIGEgbWludXMgc2lnbiBwcmVjZWRlcyB0aGUgY2xhc3MgbmFtZXMsIGl0IGlzIHJlbW92ZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb249fSBbZG9uZT11bmRlZmluZWRdIElmIHNwZWNpZmllZCwgYW5pbWF0aW9uICYgdHJhbnNpdGlvbiBsaXN0ZW5lcnMgYXJlIGFkZGVkLlxuICogQHBhcmFtIHtmdW5jdGlvbj19IFtzdGFydD11bmRlZmluZWRdIElmIHNwZWNpZmllZCwgY2FsbGVkIHdoZW4gdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0ZWQgaXMgZ2l2ZW4gYnkgdGhlIGJyb3dzZXIuXG4gKiBUaGUgYGRvbmVgIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIGJvdGggcHJvcGVydGllcyBhcmUgZmluZVxuICovXG5mdW5jdGlvbiBjbHMoZWxlbWVudCwgb3BlcmF0aW9ucywgZG9uZSwgc3RhcnQpIHtcbiAgICB2YXIgYWRkID0gW10sIHJlbW92ZSA9IFtdLCBvcHMgPSBBcnJheS5pc0FycmF5KG9wZXJhdGlvbnMpID8gb3BlcmF0aW9ucyA6IG9wZXJhdGlvbnMuc3BsaXQoJyAnKTtcblxuICAgIGZ1bmN0aW9uIHBhcnNlT3BzKG9wc0FycmF5KSB7XG4gICAgICAgIG9wc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKG9wKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VPcHMob3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wWzBdID09PSAnLScpIHtcbiAgICAgICAgICAgICAgICByZW1vdmUucHVzaChvcC5zdWJzdHJpbmcoMSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZC5wdXNoKG9wKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXJzZU9wcyhvcHMpO1xuXG4gICAgZnVuY3Rpb24gYXBwbHlDbHNDaGFuZ2UoKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGFkZCk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHJlbW92ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb25lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIMOmLnBhcmFsbGVsKFtvbkFuaW1hdGlvbkVuZCwgb25UcmFuc2l0aW9uRW5kXSwgZG9uZSwgZWxlbWVudCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGx5Q2xzQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGx5Q2xzQ2hhbmdlKCk7XG4gICAgfVxufVxuLyoqXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtib29sZWFuPX0gW2ludmVyc2VdXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZXZlcnlDbGFzc25hbWUob2JqZWN0LCBpbnZlcnNlKSB7XG4gICAgdmFyIHJlcyA9IFtdLCBrO1xuICAgIGZvciAoayBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgcmVzLnB1c2goaW52ZXJzZSA/ICctJyArIG9iamVjdFtrXSA6IG9iamVjdFtrXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG5cbmZ1bmN0aW9uIG1pbnVzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiAnLScgKyBjbGFzc05hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFkZEFuaW1hdGVkQ2xhc3M6IGFkZEFuaW1hdGVkQ2xhc3MsXG4gICAgb25BbmltYXRpb25FbmQ6IG9uQW5pbWF0aW9uRW5kLFxuICAgIG9uVHJhbnNpdGlvbkVuZDogb25UcmFuc2l0aW9uRW5kLFxuICAgIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG4gICAgZXZlcnlDbGFzc25hbWU6IGV2ZXJ5Q2xhc3NuYW1lLFxuICAgIG1pbnVzOiBtaW51cyxcbiAgICBjbHM6IGNscyxcbiAgICBpc0Z1bmN0aW9uOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG59O1xuIiwidmFyIGggPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbnZhciBjID0gcmVxdWlyZSgnLi9jbGFzc25hbWVzJyk7XG4vKipcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIHtvYmplY3Q9fSBvcHRpb25zXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdGlvbnMuY2xzIE9uZSBvZiBoaWRlIGZ1bmN0aW9uIGNvbnN0YW50XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoaWRlKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge2NsczogYy5oaWRlLlRSQU5TUEFSRU5UfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZpZXcsIGRvbmUpIHtcbiAgICAgICAgdmlldy5maW5kKHNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgaC5hZGRDbGFzcyhlbCwgb3B0aW9ucy5jbHMpXG4gICAgICAgIH0pO1xuICAgICAgICBkb25lKCk7XG4gICAgfVxufTtcbiIsInZhciDDpiA9IHJlcXVpcmUoJy4uL2FzeW5jJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9uOiBmdW5jdGlvbiAoaG9va05hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IHRoaXMuaG9va3MgfHwge307XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmhvb2tzW2hvb2tOYW1lXSkpIHtcbiAgICAgICAgICAgIHRoaXMuaG9va3NbaG9va05hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rc1tob29rTmFtZV0ucHVzaChoYW5kbGVyKTtcbiAgICB9LFxuICAgIGhvb2s6IGZ1bmN0aW9uIChuYW1lLCBkb25lKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ob29rcyA9IHRoaXMuaG9va3MgfHwge307XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuaG9va3NbbmFtZV0pICYmIHRoaXMuaG9va3NbbmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgw6YuZWFjaFNlcmllcyh0aGlzLmhvb2tzW25hbWVdLCBmdW5jdGlvbiAob3BlcmF0aW9uLCBjYikge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbihzZWxmLCBjYilcbiAgICAgICAgICAgIH0sIGRvbmUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb25lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGZob29rOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHNlbGYuaG9vayhuYW1lLCBjYik7XG4gICAgICAgIH1cbiAgICB9XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9oaWRlJyk7XG52YXIgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xudmFyIMOmID0gcmVxdWlyZSgnLi4vYXN5bmMnKTtcblxudmFyIGtpbmVtYXRpY3MgPSB7XG4gICAgdHJhbnNpdGlvbnM6IHJlcXVpcmUoJy4vdHJhbnNpdGlvbnMnKSxcbiAgICBhbmltYXRlQ3NzOiByZXF1aXJlKCcuL2FuaW1hdGUnKSxcbiAgICBoaWRlOiBoaWRlLFxuICAgIGhlbHBlcnM6IGhlbHBlcnMsXG4gICAgY2xhc3NuYW1lczogcmVxdWlyZSgnLi9jbGFzc25hbWVzJyksXG4gICAgcGFyYWxsZWw6IGZ1bmN0aW9uIChvcGVyYXRpb25zKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih2aWV3LCBkb25lKXtcbiAgICAgICAgICAgIMOmLmVhY2hQYXJhbGxlbChvcGVyYXRpb25zLCBmdW5jdGlvbihmbiwgY2Ipe1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoZm4sIHZpZXcsIGNiKTtcbiAgICAgICAgICAgIH0sIGRvbmUpXG4gICAgICAgIH1cbiAgICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBraW5lbWF0aWNzO1xuIiwidmFyIGggPSByZXF1aXJlKCcuLi9oZWxwZXJzJyk7XG52YXIgw6YgPSByZXF1aXJlKCcuLi8uLi9hc3luYycpO1xudmFyIGMgPSByZXF1aXJlKCcuLi9jbGFzc25hbWVzJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4uL2hpZGUnKTtcbnZhciBjcmVhdGVNYXNrID0gcmVxdWlyZSgnLi9jcmVhdGVNYXNrJyk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1ZpZXd9IG9wdGlvbnMuZnJvbVxuICogQHBhcmFtIHtWaWV3fSBvcHRpb25zLnRvXG4gKiBAcGFyYW0ge0FwcGxpY2F0aW9ufSBvcHRpb25zLmFwcFxuICogQHBhcmFtIHtzdHJpbmc9fSBbb3B0aW9ucy5tYXNrT3BhY2l0eV1cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBsZXRlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY292ZXJUcmFuc2l0aW9uKG9wdGlvbnMsIGNvbXBsZXRlKSB7XG4gICAgdmFyIGZyb21WaWV3ID0gb3B0aW9ucy5mcm9tO1xuICAgIHZhciB0b1ZpZXcgPSBvcHRpb25zLnRvO1xuICAgIHZhciBmcm9tID0gZnJvbVZpZXcuZWw7XG4gICAgdmFyIGFwcCA9IG9wdGlvbnMuYXBwLmVsO1xuICAgIHZhciB0byA9IHRvVmlldy5lbDtcbiAgICB2YXIgbWFzayA9IGNyZWF0ZU1hc2soKTtcblxuXG4gICAgbWFzay5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnZWFzZS1vdXQnO1xuICAgIMOmLnNlcmllcyhbXG5cbiAgICAgICAgZnJvbVZpZXcuZmhvb2soJ2JlZm9yZUV4aXQnKSwgLy8gZXhlYyBibG9ja2luZyBcImJlZm9yZUV4aXRcIiBob29rc1xuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGZyb21WaWV3Lmhvb2soJ29uRXhpdCcpOyAvLyBleGVjIE5PTi1ibG9ja2luZyBcIm9uRXhpdFwiIGhvb2tzXG4gICAgICAgICAgICBoLmFkZENsYXNzKGZyb20sIGMuZGVwdGguRkFSVEhFU1QpOyAvL2Zyb21WaWV3IHdpbGwgYmUgb3ZlcmxhcGVkIGJ5IGJvdGggbWFzayBhbmQgdG9WaWV3XG4gICAgICAgICAgICBoLmFkZENsYXNzKG1hc2ssIGMuZGVwdGguRkFSLCBjLm9wYWNpdHkuVFJBTlNQQVJFTlQpO1xuICAgICAgICAgICAgYXBwLmFwcGVuZChtYXNrKTsgLy9hZGRlZCB0byBhcHAgYmVjYXVzZSBpdCdzIHNpbXBsZXIgZm9yIHRyYW5zZm9ybSBtYW5hZ2VtZW50XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LFxuICAgICAgICB0b1ZpZXcuZmhvb2soJ2JlZm9yZUVudGVyJyksIC8vIGV4ZWMgYmxvY2tpbmcgXCJiZWZvcmVFbnRlclwiIGhvb2tzXG4gICAgICAgIGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgaC5hZGRDbGFzcyh0bywgWyAvLyB0aGF0J3Mgd2hlcmUgd2UgcHJlcGFyZSB0aGUgbmV4dCB2aWV3LiBJdCBpcy4uLlxuICAgICAgICAgICAgICAgIGMudHJhbnNsYXRlLlJJR0hULCAvLyBwbGFjZWQgb24gdGhlIHJpZ2h0XG4gICAgICAgICAgICAgICAgYy50cmFuc2l0aW9uLldJVEgsIC8vIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgYy5kZXB0aC5ORUFSRVNULCAvLyBhYm92ZSBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICBjLnNoYWRvdy5CQVNFIC8vIGhhcyBhIGRyb3Agc2hhZG93XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3ModG8sIGguZXZlcnlDbGFzc25hbWUoYy5oaWRlKSk7IC8vIG1ha2Ugc3VyZSBpdCBpcyB2aXNpYmxlXG4gICAgICAgICAgICAvLyB0aGUgbWFzayB3aWxsIG9wYWNpZnkgZm9yIHRoZSBzYW1lIGFtb3VudCBvZiB0aW1lIHRoZSB0b1ZpZXcgd2lsbCBhcnJpdmVcbiAgICAgICAgICAgIG1hc2suc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0bykudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgbWFzay5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5tYXNrT3BhY2l0eSB8fCAnMC41JzsgLy8gdGhpcyBsaW5lIHRyaWdnZXJzIHRoZSB0cmFuc2l0aW9uXG4gICAgICAgICAgICB0b1ZpZXcuaG9vaygnb25FbnRlcicpOyAvLyBleGVjIE5PTi1ibG9ja2luZyBvbkVudGVyIGhvb2tcbiAgICAgICAgICAgIGguY2xzKHRvLCBbXG4gICAgICAgICAgICAgICAgaC5taW51cyhjLnRyYW5zbGF0ZS5SSUdIVCksXG4gICAgICAgICAgICAgICAgYy5zaGFkb3cuTUVESVVNX0RJRkZVU0UgLy8gYW5kIG9wYWNpZnkgdGhlIGRyb3Agc2hhZG93XG4gICAgICAgICAgICBdLCBjYik7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChjYikgeyAvLyB0cmFuc2l0aW9uIGlzIGZ1bGZpbGxlZFxuICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhmcm9tLCBoLmV2ZXJ5Q2xhc3NuYW1lKGMuZGVwdGgpLCBjLnRyYW5zaXRpb24uV0lUSCk7IC8vcmVzZXQgY2xhc3NlcyBvbiBmcm9tIGVsZW1lbnRcbiAgICAgICAgICAgIGguYWRkQ2xhc3MoZnJvbSwgYy5oaWRlLkRJU1BMQVlfTk9ORSk7IC8vIGhpZGUgdGhhdCBvbGQgY2h1bVxuICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyh0bywgW1xuICAgICAgICAgICAgICAgIGMudHJhbnNpdGlvbi5XSVRILFxuICAgICAgICAgICAgICAgIGMuZGVwdGguTkVBUkVTVCxcbiAgICAgICAgICAgICAgICBjLnNoYWRvdy5NRURJVU1fRElGRlVTRSxcbiAgICAgICAgICAgICAgICBjLnNoYWRvdy5CQVNFXG4gICAgICAgICAgICBdKTsgLy9yZXNldCBjbGFzc2VzIG9uIFwidG9cIiBlbGVtZW50XG4gICAgICAgICAgICBhcHAucmVtb3ZlQ2hpbGQobWFzayk7IC8vIHJlbW92ZSB0aGUgbWFzayA/IHNob3VsZCB3ZSBudWxsIGl0P1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9leGVjIGJsb2NraW5nIGFmdGVyIGhvb2tzXG4gICAgICAgIHRvVmlldy5maG9vaygnYWZ0ZXJFbnRlcicpLFxuICAgICAgICBmcm9tVmlldy5maG9vaygnYWZ0ZXJFeGl0JylcbiAgICBdLCBjb21wbGV0ZSlcbn07IiwiLyoqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZU1hc2soKXtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgcyA9IGVsLnN0eWxlO1xuICAgIHMucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHMud2lkdGggPSAnMTAwJSc7XG4gICAgcy5oZWlnaHQgPSAnMTAwJSc7XG4gICAgcy50b3AgPSAnMCc7XG4gICAgcy5sZWZ0ID0gJzAnO1xuICAgIHMuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICByZXR1cm4gZWw7XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjb3ZlcjogcmVxdWlyZSgnLi9jb3ZlcicpLFxuICByZXZlYWw6IHJlcXVpcmUoJy4vcmV2ZWFsJyksXG4gIG1vZGFsOiByZXF1aXJlKCcuL21vZGFsJyksXG59O1xuIiwidmFyIMOmID0gcmVxdWlyZSgnLi4vLi4vYXN5bmMnKTtcbnZhciBjcmVhdGVNYXNrID0gcmVxdWlyZSgnLi9jcmVhdGVNYXNrJyk7XG52YXIgYyA9IHJlcXVpcmUoJy4uL2NsYXNzbmFtZXMnKTtcbnZhciBoID0gcmVxdWlyZSgnLi4vaGVscGVycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1vZGFsKG9wdGlvbnMsIGNvbXBsZXRlKSB7XG4gICAgKG9wdGlvbnMudG8pID8gc2hvdyhvcHRpb25zLCBjb21wbGV0ZSkgOiBoaWRlKG9wdGlvbnMsIGNvbXBsZXRlKTtcbn07XG4vKipcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtWaWV3fSBvcHRpb25zLnRvXG4gKiBAcGFyYW0ge0FwcGxpY2F0aW9ufSBvcHRpb25zLmFwcFxuICogQHBhcmFtIGNvbXBsZXRlXG4gKi9cbmZ1bmN0aW9uIHNob3cob3B0aW9ucywgY29tcGxldGUpIHtcbiAgICB2YXIgbW9kYWxWaWV3ID0gb3B0aW9ucy50bztcbiAgICB2YXIgYXBwID0gb3B0aW9ucy5hcHA7XG4gICAgdmFyIGVsID0gbW9kYWxWaWV3LmVsO1xuICAgIHZhciBtYXNrID0gY3JlYXRlTWFzaygpO1xuXG4gICAgw6Yuc2VyaWVzKFtcbiAgICAgICAgbW9kYWxWaWV3LmZob29rKCdiZWZvcmVFbnRlcicpLFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGFwcC5lbC5hcHBlbmRDaGlsZChtYXNrKTtcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBoLmFkZENsYXNzKG1hc2ssIGMuZGVwdGguTkVBUiwgYy50cmFuc2l0aW9uLldJVEgsIGMub3BhY2l0eS5UUkFOU1BBUkVOVCk7XG4gICAgICAgICAgICBoLmFkZENsYXNzKGVsLCBjLmRlcHRoLk5FQVJFU1QsIGMudHJhbnNsYXRlLkJPVFRPTSwgYy50cmFuc2l0aW9uLldJVEgpO1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICDDpi5wYXJhbGxlbChbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHBhcmFsbGVsQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgaC5jbHMobWFzaywgW2Mub3BhY2l0eS5IRUFWWSwgaC5taW51cyhjLm9wYWNpdHkuVFJBTlNQQVJFTlQpXSwgcGFyYWxsZWxDYilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChwYXJhbGxlbENiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxWaWV3Lmhvb2soJ29uRW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgaC5jbHMoZWwsIFtoLm1pbnVzKGMudHJhbnNsYXRlLkJPVFRPTSldLCBwYXJhbGxlbENiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLCBjYilcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBoLnJlbW92ZUNsYXNzKGVsLCBjLnRyYW5zaXRpb24uV0lUSCwgYy5kZXB0aC5ORUFSRVNUKTtcbiAgICAgICAgICAgIGFwcC5lbC5yZW1vdmVDaGlsZChtYXNrKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGFsVmlldy5maG9vaygnYWZ0ZXJFbnRlcicpXG4gICAgXSwgY29tcGxldGUpO1xufVxuXG5mdW5jdGlvbiBoaWRlKG9wdGlvbnMsIGNvbXBsZXRlKSB7XG4gICAgdmFyIG1vZGFsVmlldyA9IG9wdGlvbnMuZnJvbTtcbiAgICB2YXIgYXBwID0gb3B0aW9ucy5hcHA7XG4gICAgdmFyIGVsID0gbW9kYWxWaWV3LmVsO1xuICAgIHZhciBtYXNrID0gY3JlYXRlTWFzaygpO1xuXG4gICAgw6Yuc2VyaWVzKFtcbiAgICAgICAgbW9kYWxWaWV3LmZob29rKCdiZWZvcmVFbnRlcicpLFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGFwcC5lbC5hcHBlbmRDaGlsZChtYXNrKTtcbiAgICAgICAgICAgIGguYWRkQ2xhc3MobWFzaywgYy5kZXB0aC5ORUFSLCBjLnRyYW5zaXRpb24uV0lUSCwgYy5vcGFjaXR5LkhFQVZZKTtcbiAgICAgICAgICAgIGguYWRkQ2xhc3MoZWwsIGMuZGVwdGguTkVBUkVTVCwgYy50cmFuc2xhdGUuQk9UVE9NLCBjLnRyYW5zaXRpb24uV0lUSCk7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIMOmLnBhcmFsbGVsKFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocGFyYWxsZWxDYikge1xuICAgICAgICAgICAgICAgICAgICBoLmNscyhtYXNrLCBbYy5vcGFjaXR5LlRSQU5TUEFSRU5ULCBoLm1pbnVzKGMub3BhY2l0eS5IRUFWWSldLCBwYXJhbGxlbENiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHBhcmFsbGVsQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxWaWV3Lmhvb2soJ29uRW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgaC5jbHMoZWwsIFtjLnRyYW5zbGF0ZS5CT1RUT01dLCBwYXJhbGxlbENiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLCBjYilcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBoLmNscyhlbCwgW2MudHJhbnNpdGlvbi5XSVRILCBjLmhpZGUuRElTUExBWV9OT05FXSk7XG4gICAgICAgICAgICBhcHAuZWwucmVtb3ZlQ2hpbGQobWFzayk7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LFxuICAgICAgICBtb2RhbFZpZXcuZmhvb2soJ2FmdGVyRW50ZXInKVxuICAgIF0sIGNvbXBsZXRlKTtcbn0iLCJ2YXIgaCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKTtcbnZhciDDpiA9IHJlcXVpcmUoJy4uLy4uL2FzeW5jJyk7XG5cbnZhciBjID0gcmVxdWlyZSgnLi4vY2xhc3NuYW1lcycpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9oaWRlJyk7XG52YXIgY3JlYXRlTWFzayA9IHJlcXVpcmUoJy4vY3JlYXRlTWFzaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjb21wbGV0ZSkge1xuICAgIHZhciBmcm9tVmlldyA9IG9wdGlvbnMuZnJvbTtcbiAgICB2YXIgdG9WaWV3ID0gb3B0aW9ucy50bztcbiAgICB2YXIgZnJvbSA9IGZyb21WaWV3LmVsO1xuICAgIHZhciB0byA9IHRvVmlldy5lbDtcbiAgICB2YXIgYXBwID0gb3B0aW9ucy5hcHAuZWw7XG4gICAgdmFyIG1hc2sgPSBjcmVhdGVNYXNrKCk7XG4gICAgdmFyIGludGVydmFsO1xuICAgIMOmLnNlcmllcyhbXG4gICAgICAgIGZyb21WaWV3LmZob29rKCdiZWZvcmVFeGl0JyksXG4gICAgICAgIGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgZnJvbVZpZXcuaG9vaygnb25FeGl0Jyk7XG4gICAgICAgICAgICAvL3RvVmlldyBpcyBiZWhpbmRcbiAgICAgICAgICAgIGguYWRkQ2xhc3MoZnJvbSwgYy5kZXB0aC5ORUFSRVNUKTtcbiAgICAgICAgICAgIGguYWRkQ2xhc3ModG8sIGMuZGVwdGguRkFSVEhFU1QpO1xuICAgICAgICAgICAgLy90b1ZpZXcgaXMgdmlzaWJsZVxuICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyh0bywgaC5ldmVyeUNsYXNzbmFtZShjLmhpZGUpKTtcbiAgICAgICAgICAgIC8vYWRkIHRoZSBtYXNrIHRvIHRvVmlld1xuICAgICAgICAgICAgYXBwLmFwcGVuZChtYXNrKTtcbiAgICAgICAgICAgIGguYWRkQ2xhc3MobWFzaywgYy5kZXB0aC5GQVIpO1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9WaWV3LmZob29rKCdiZWZvcmVFbnRlcicpLFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIC8vZnJvbVZpZXcgd2lsbCBtb3ZlLCBhbmQgaXMgdGhlIG5lYXJlc3Qgdmlld1xuICAgICAgICAgICAgLy9mcm9tVmlldyB3aWxsIGNhc3QgYSBzaGFkb3cgb24gdG9WaWV3XG4gICAgICAgICAgICBoLmFkZENsYXNzKGZyb20sIFtjLnRyYW5zaXRpb24uV0lUSCwgYy5kZXB0aC5ORUFSRVNULCBjLnNoYWRvdy5CQVNFLCBjLnNoYWRvdy5CSUdfRElGRlVTRV0pO1xuICAgICAgICAgICAgLy9tYXNrIHdpbGwgdHJhbnNpdGlvbiBmb3IgdGhlIHNhbWUgZHVyYXRpb24gdGhhdCAkZnJvbSB3aWxsIGxlYXZlXG4gICAgICAgICAgICBtYXNrLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoZnJvbSkudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgbWFzay5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnb3BhY2l0eSc7XG4gICAgICAgICAgICBtYXNrLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9ICdlYXNlLWluLW91dCc7XG4gICAgICAgICAgICAvL3RyaWdnZXIgdGhlIG9uRW50ZXIganVzdCBiZWZvcmUgc3RhcnRpbmcgdGhlIHRyYW5zaXRpb25cbiAgICAgICAgICAgIHRvVmlldy5ob29rKCdvbkVudGVyJyk7XG4gICAgICAgICAgICAvL3RyYW5zaXRpb24gaGFwcGVucyBoZXJlIDogb2xkVmlldyBtb3ZlIHJpZ2h0XG4gICAgICAgICAgICDDpi5wYXJhbGxlbChbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24ocGFyYWxsZWxDYil7XG4gICAgICAgICAgICAgICAgICAgIGguY2xzKGZyb20sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMudHJhbnNsYXRlLlJJR0hULFxuICAgICAgICAgICAgICAgICAgICAgICAgaC5taW51cyhjLnNoYWRvdy5CSUdfRElGRlVTRSlcbiAgICAgICAgICAgICAgICAgICAgXSwgcGFyYWxsZWxDYik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocGFyYWxsZWxDYil7XG4gICAgICAgICAgICAgICAgICAgIGguY2xzKG1hc2ssIFtjLm9wYWNpdHkuVFJBTlNQQVJFTlRdLCBwYXJhbGxlbENiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sIGNiKTtcblxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhmcm9tLFxuICAgICAgICAgICAgICAgIGMudHJhbnNpdGlvbi5XSVRILFxuICAgICAgICAgICAgICAgIGguZXZlcnlDbGFzc25hbWUoYy5kZXB0aCksXG4gICAgICAgICAgICAgICAgaC5ldmVyeUNsYXNzbmFtZShjLnNoYWRvdylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoLmFkZENsYXNzKGZyb20sIGMuaGlkZS5ESVNQTEFZX05PTkUpO1xuICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyh0bywgYy50cmFuc2l0aW9uLldJVEgsIGguZXZlcnlDbGFzc25hbWUoYy5kZXB0aCkpO1xuICAgICAgICAgICAgLy9yZW1vdmUgdGhlIG1hc2tcbiAgICAgICAgICAgIGFwcC5yZW1vdmVDaGlsZChtYXNrKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvVmlldy5maG9vaygnYWZ0ZXJFbnRlcicpLFxuICAgICAgICBmcm9tVmlldy5maG9vaygnYWZ0ZXJFeGl0JylcbiAgICBdLCBjb21wbGV0ZSk7XG59OyIsInZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKTtcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGFuZGxlYmFycy9ydW50aW1lJyk7XG5cbnZhciBob29rcyA9IHJlcXVpcmUoJy4uL2tpbmVtYXRpYy9ob29rcycpO1xuLyoqXG4gKiBAY2xhc3MgVmlld1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBUZW1wbGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmhiID0gSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV07XG59O1xuXG5leHRlbmQoVGVtcGxhdGUucHJvdG90eXBlLCBob29rcyk7XG5cblRlbXBsYXRlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXM7XG5cbiAgICB2YXIgVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoaWxkU2VsZiA9IHRoaXM7XG4gICAgICAgIGNoaWxkU2VsZi5wYXRoID0gcGF0aDtcbiAgICAgICAgY2hpbGRTZWxmLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBjaGlsZFNlbGYuZWwuY2xhc3NMaXN0LmFkZCgndmlldycpO1xuICAgICAgICBjaGlsZFNlbGYuZWwuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCBwYXRoKTtcbiAgICB9O1xuXG4gICAgVmlldy5wcm90b3R5cGUgPSB0aGlzO1xuICAgIFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5oYihwYXJhbXMgfHzCoHRoaXMuZGF0YSk7XG4gICAgfTtcbiAgICBWaWV3LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBWaWV3KCk7XG59O1xuXG5cblRlbXBsYXRlLnByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWVzKSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkLmFwcGx5KHRoaXMuZWwuY2xhc3NMaXN0LCBjbGFzc05hbWVzLnNwbGl0KCcgJykpO1xufTtcblxuVGVtcGxhdGUucHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZXMpIHtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUuYXBwbHkodGhpcy5lbC5jbGFzc0xpc3QsIGNsYXNzTmFtZXMuc3BsaXQoJyAnKSk7XG59O1xuXG5UZW1wbGF0ZS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZW1wbGF0ZTsiXX0=
