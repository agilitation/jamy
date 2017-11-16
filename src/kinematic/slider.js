var hooks = require('./hooks');
var extend = require('extend');

var Slider = function (opts) {
    opts = opts || {};
    this.current = opts.current || 0;
    this.slides = [];
};
Slider.prototype.add = function(){

};

Slider.prototype.next = function (onComplete) {
    this.current = (this.current + 1 < this.items.length) ? this.current + 1 : 0;
    this.update(onComplete);
};

Slider.prototype.prev = function (onComplete) {
    this.current = (this.current > 0) ? this.current - 1 : this.current.length;
    this.update(onComplete);
};

Slider.prototype.update = function (onComplete) {

};

var Slide = function(){

};

extend(Slide.prototype, hooks);
