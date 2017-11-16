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