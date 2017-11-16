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