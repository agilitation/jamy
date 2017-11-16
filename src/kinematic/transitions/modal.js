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