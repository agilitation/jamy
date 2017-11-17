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