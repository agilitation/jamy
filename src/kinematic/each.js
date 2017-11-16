var æ = require('../async');

module.exports = function (selector, cls, options) {
    var that = this;
    options = options || {};
    return function sequenceInView(view, done) {
        var cnt = 0;
        var delay = options.delay;
        var elements = Array.from(view.find(selector));
        æ.eachParallel(elements, function (el, cb) {
            options.delay = delay * cnt;
            that.animate(el, cls, options)(view, cb);
            cnt++;
        }, done);
    };
};