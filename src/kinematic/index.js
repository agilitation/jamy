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
