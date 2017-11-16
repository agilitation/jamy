require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],2:[function(require,module,exports){
'use strict';
var strictUriEncode = require('strict-uri-encode');
var objectAssign = require('object-assign');

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

},{"object-assign":1,"strict-uri-encode":3}],3:[function(require,module,exports){
'use strict';
module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

},{}],4:[function(require,module,exports){
var Context = function () {
    this.params = {};
    this.i = 0;
    this.isLast = false;
    this.isFirst = true;
    this.title = '';
    this.exited = false;
};

Context.prototype.next = function () {
};

Context.prototype.exit = function(){
    this.exited = true;
};

module.exports = Context;
},{}],5:[function(require,module,exports){
function getValidLink(e) {
    var el = e.target;

    function isValidLink(el) {
        if (!el.getAttribute) {
            return false;
        }

        var href = el.getAttribute('href');
        var target = el.getAttribute('target');

        return !(
            el.tagName !== 'A'
            || href === null
            || target !== null
            || href.indexOf('://') !== -1
            || href[0] === '#'
            || el.getAttribute('rel') === 'external'
        );
    }

    while (el) {
        if (isValidLink(el))
            return el.getAttribute('href');
        el = el.parentNode;
    }
}

var Interceptor = function (options) {

    var self = this;
    self.handlers = [];
    self.settings = options || Interceptor.defaults;

};

Interceptor.prototype.change = function (handler) {
    this.handlers.push(handler);
    return this;
};

Interceptor.prototype.dispatch = function (event, link, formdata, action) {
    this.handlers.forEach(function (handler) {
        handler.call(null, event, link, formdata, action);
    });
    return this;
};

Interceptor.prototype.start = function () {

    var self = this;

    function onPopstate(event) {
        self.dispatch(event, location.pathname)
    }

    function onSubmit(event) {
        var attrs = {
            method: event.target.getAttribute('method') || 'get',
            action: event.target.getAttribute('action') || location.pathname,
            rel: event.target.getAttribute('rel'),
            target: event.target.getAttribute('target') || 'self'
        };

        if (self.settings.forms[attrs.method.toLowerCase()]
            && attrs.action.indexOf('://') === -1
            && attrs.rel !== 'external'
            && attrs.target === 'self'
        ) {
            self.dispatch(event, attrs.action, new FormData(event.target), attrs.action);
        }
    }

    /**
     * @param {MouseEvent} event
     */
    function onClick(event) {
        if (event.which !== 1 || event.metaKey || event.shiftKey || event.altKey) {
            return;
        }
        var link = getValidLink(event);
        if (typeof link !== 'undefined') {
            self.dispatch(event, link);
        }
    }
;
    window.addEventListener('popstate', onPopstate, false);
    document.addEventListener('touchstart', onClick, false);
    document.addEventListener('click', onClick, false);

    if (self.settings.forms) {
        document.addEventListener('submit', onSubmit, false);
    }

    return this;
};

Interceptor.defaults = {
    forms: {
        get: true,
        post: false
    },
    external: false
};

module.exports = Interceptor;
},{}],6:[function(require,module,exports){
function Path(path) {
    path = path || '';
    this.parts = Path.split(path).map(function (part) {
        return new PathPart(part);
    });
}

Path.prototype.match = function (pathParts, ctx) {
    var match = true;
    var parts = this.parts;
    pathParts = Path.split(pathParts);
    pathParts.forEach(function (part, i) {
        if (typeof parts[i] === 'undefined') return;
        if (!parts[i].match(part)) {
            match = false;
        } else if (parts[i].name) {
            ctx.params[parts[i].name] = part;
        }
    });
    return match;
};

Path.prototype.toString = function () {
    return this.parts.map(function (part) {
        return part.toString()
    }).join('/');
};

Path.prototype.part = function (index) {
    return this.parts[index];
};

Path.prototype.length = function () {
    return this.parts.length;
};

Path.prototype.minlength = function () {
    var l = 0;
    this.parts.forEach(function(part){
        if(!part.optional){
            l++;
        }
    });
    return l
};

function PathPart(part) {
    var lastChar = part.charAt(part.length - 1);
    this.resource = part.charAt(0) === ':';
    this.optional = lastChar === '?';
    this.wildcard = lastChar === '*';

    var substrLen = (this.optional || this.wildcard) ? part.length - 2 : part.length;
    if (this.resource) {
        this.name = part.substr(1, substrLen);
    } else {
        this.value = part.substr(0, substrLen + 1);
    }
    return this
}

PathPart.prototype.toString = function () {
    var str = this.resource ? ':' : '';
    str += this.name || this.value;
    str += this.optional ? '?' : '';
    str += this.wildcard ? '*' : '';
    return str;
};

PathPart.prototype.match = function (value) {
    if (this.resource && value || this.value === value) return true;
    return (this.optional && !value);
};

Path.split = function splitPath(path) {
    return path.split('/').filter(function (part) {
        return (part)
    });
};

module.exports = Path;
},{}],"router":[function(require,module,exports){
var Path = require('./path');
var Context = require('./context');
var Interceptor = require('./interceptor');
var QS = require('query-string');

var RoutingRequest = function(options){
    this.path = options.path;
    this.method = options.method || 'get';
    this.formData = options.formData;
    this.formData = options.formData;
};

/**
 * @method
 * @name Router#get
 * @param {string} path
 * @param {...Router|function} handler
 * @returns {Router} this
 */
/**
 * @method
 * @name Router#post
 * @param {string} path
 * @param {...Router|function} handler
 * @returns {Router} this
 */
/**
 * @method
 * @name Router#delete
 * @param {string} path
 * @param {...Router|function} handler
 * @returns {Router} this
 */
/**
 * @method
 * @name Router#put
 * @param {string} path
 * @param {...Router|function} handler
 * @returns {Router} this
 */

/**
 * @class
 * @param path
 * @param handlers
 * @method {OnFn} get
 * @method {OnFn} post
 * @method {OnFn} delete
 * @method {OnFn} put
 * @returns {Router}
 * @constructor
 */
var Router = function (path, handlers) {

    if (!(this instanceof Router)) {
        return new Router(path, handlers);
    }

    if (handlers) {
        handlers = Array.isArray(handlers) ? handlers : [handlers];
    } else {
        handlers = [];
    }
    this.path = new Path(path);
    this.routes = [];
    this.handlers = [];
    var self = this;
    handlers.forEach(function (handler) {
        self.use('/', handler);
    });

    return this;
};

Router.prototype.start = function () {
    var self = this;
    this.interceptor = new Interceptor().change(function (event, path, formData, method) {
        self.handle(event, path, formData, method)
    }).start();
};

Router.prototype.stop = function () {
    this.interceptor.stop();
};

/**
 *
 * @param {string} method
 * @param {string} path
 * @param {Array<function|Router>} handlers
 * @returns {Router}
 */
Router.prototype.on = function (method, path, handlers) {
    if (path === '/') {
        handlers.forEach(function (handler) {
            this[(handler instanceof Router) ? 'routes' : 'handlers'].push(handler);
        });
        return this;
    }
    this.routes.push(new Router(path, handlers));
    return this;
};

function parseRouteArgs(args) {
    var ret = {path: '/', handlers: []}, i = 0, l = args.length;
    for (; i < l; i++) {
        if (i === 0 && typeof args[i] === 'string') {
            ret.path = args[i];
        } else {
            ret.handlers.push(args[i]);
        }
    }
    return ret;
}

Router.prototype.use = function () {
    var args = parseRouteArgs(arguments);

};

var methods = ['get', 'post', 'put', 'delete'];
methods.forEach(function (method) {
    Router.prototype[method] = function () {
        var args = parseRouteArgs(arguments);
        return this.on(method, args.path, args.handlers);
    };
});

/**
 * @param {Context} ctx
 * @param {Array<Function>} handlers
 * @param {Function} done
 */
Router.prototype.dispatch = function (ctx, handlers, done) {
    var i = 0;

    ctx.exit = function () {
        ctx.exited = true;
        done();
    };

    ctx.next = function () {
        return (i < handlers.length) ? exec() : done();
    };

    function exec() {
        var tmp = i;
        ctx.isFirst = (i === 0);
        ctx.isLast = (i === handlers.length - 1);
        i++;
        if (typeof handlers[tmp] === 'function') {
            handlers[tmp].call(ctx, ctx);
        } else {
            return ctx.next();
        }
    }

    exec();
};

Router.prototype.dump = function () {
    var dump = {path: '/' + this.path.toString()};
    if (this.routes.length) {
        dump.routes = this.routes.map(function (r) {
            return r.dump()
        });
    }
    if (this.handlers.length) {
        dump.handlers = this.handlers.map(function (f) {
            var ret = f.toString();
            ret = ret.substr('function '.length);
            ret = ret.substr(0, ret.indexOf('('));
            return ret;
        });
    }
    return dump;
};

Router.prototype.getHandlers = function (path, ctx) {
    var handlers = [];
    var self = this;
    path = (typeof path === 'string') ? Path.split(path) : path;
    if (!this.path.match(path.join('/'), ctx)) return handlers;
    if (this.path.length() > path.length) {
        return handlers;
    }
    if (this.handlers.length) {
        handlers = handlers.concat(this.handlers);
    }
    this.routes.forEach(function (route) {
        handlers = handlers.concat(route.getHandlers(path.slice(self.path.length()), ctx));
    });
    return handlers.filter(function (handler) {
        return (typeof handler === 'function')
    });
};

Router.prototype.handle = function (event, path, formData, formMethod) {

    var ctx = new Context();
    ctx.formData = formData;
    ctx.formMethod = formMethod;

    if (formMethod === 'get') {

    }

    ctx.query = QS.parse(path);

    //todo GET parameters in path

    var handlers = this.getHandlers(path, ctx);

    this.dispatch(ctx, handlers, function () {
        if (ctx.exited) {
            return;
        }
        event.preventDefault();
        if (ctx.title) {
            document.title = ctx.title;
        }
        history.pushState(JSON.stringify(ctx), ctx.title, path);
    });
};

module.exports = Router;
},{"./context":4,"./interceptor":5,"./path":6,"query-string":2}]},{},[]);
