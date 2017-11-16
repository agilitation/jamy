/**
 * Created by romain on 23/10/2017.
 */

$.fn.extend({
    hasTransition: function(){
        var prop = this.css('transition');
        return !(prop == '' || prop == 'all 0s ease 0s');
    },
    animationEnd: function (callback) {
        this.one('animationend', callback);
        return this;
    },
    transitionEnd: function (callback) {
        if(this.hasTransition()){
            this.one('transitionend', callback);
        } else {
            setTimeout(callback, 1);
        }
        return this;
    },
    animateCss: function (animationName, animationComplete) {
        animationComplete = animationComplete || $.noop;
        if (this.length === 0) {
            animationComplete();
            return this;
        }
        this.addClass('animated ' + animationName).animationEnd(function () {
            $(this).removeClass('animated ' + animationName);
            animationComplete();
        });
        return this;
    }
});