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