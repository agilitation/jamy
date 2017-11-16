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
