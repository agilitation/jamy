var hooks = require('./hooks');
var extend = require('extend');
var h = require('./helpers');
var c = require('./classnames');
var æ = require('../async');

var Slider = function (el, opts) {
    opts = opts || {};
    this.current = opts.current || 0;
    this.prev = opts.prev || 0;
    this.el = el;
    this.slides = [];
    this.createSlides();
    var self = this;
    this.el.querySelector('a.prev').addEventListener('click', function (event) {
        self.previous();
        event.preventDefault();
    });
    this.el.querySelector('a.next').addEventListener('click', function (event) {
        self.next();
        event.preventDefault();
    });

    this.slides.forEach(function (slide, index) {
        if (index !== self.current) {
            h.addClass(slide.el, c.translate.RIGHT);
        }
    })

};
Slider.prototype.createSlides = function () {
    var slideElements = this.el.querySelectorAll('.slides > .slide');
    var self = this;
    slideElements.forEach(function (el) {
        var slide = new Slide(el);
        self.slides.push(slide);
    });
};
Slider.prototype.add = function () {

};

Slider.prototype.next = function (onComplete) {
    this.prev = this.current;
    this.current = (this.current + 1 < this.slides.length) ? this.current + 1 : 0;
    this.update('next', onComplete);
};

Slider.prototype.previous = function (onComplete) {
    this.prev = this.current;
    this.current = (this.current > 0) ? this.current - 1 : this.slides.length - 1;
    this.update('prev', onComplete);
};

Slider.prototype.update = function (direction, onComplete) {
    var prevSlide = this.slides[this.prev].el;
    var currentSlide = this.slides[this.current].el;
    currentSlide.style.display = 'none';
    h.removeClass(currentSlide, h.everyClassname(c.translate));
    h.addClass(currentSlide, (direction === 'prev') ? c.translate.LEFT : c.translate.RIGHT);
    // horrible hack to make the currentSlide actually move to the opposite side
    // setTimeout(function () {
    //     window.requestAnimationFrame(function () {
    console.info('force layout thrashing', getComputedStyle(currentSlide).transform);
    currentSlide.style.display = 'block';
    currentSlide.style.transitionTimingFunction = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    prevSlide.style.transitionTimingFunction = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    h.addClass(prevSlide, c.transition.WITH);
    h.addClass(currentSlide, c.transition.WITH);
    æ.parallel([
        function (parallelCb) {
            setTimeout(function () {
                h.cls(currentSlide, h.everyClassname(c.translate, true), parallelCb)
            }, 200);
        }, function (parallelCb) {
            h.cls(prevSlide, [(direction === 'prev') ? c.translate.RIGHT : c.translate.LEFT], parallelCb)
        }
    ], function () {
        currentSlide.fhook('afterEnter');
        prevSlide.fhook('afterExit');
        h.removeClass(prevSlide, c.transition.WITH);
        h.removeClass(currentSlide, c.transition.WITH);
        if (typeof onComplete === 'function') {
            onComplete()
        }
    });
};

var Slide = function (el) {
    this.el = el;
};

extend(Slide.prototype, hooks);


module.exports = Slider;