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
