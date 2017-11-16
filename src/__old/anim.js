var AnimationController = function () {

};

/*
 PUSH_LEFT: 1,
 PUSH_RIGHT: 2,
 PUSH_UP: 3,
 PUSH_DOWN: 4,
 COVER_LEFT: 5,
 COVER_RIGHT: 6,
 COVER_UP: 7,
 COVER_DOWN: 8,
 REVEAL_LEFT: 9,
 REVEAL_RIGHT: 10,
 REVEAL_UP: 11,
 REVEAL_DOWN: 12

 */

var transitions = {};
transitions.openModal = function (fromView, toView, options, complete) {
    fromView.hook();
    complete();
};
transitions.closeModal = function (fromView, toView, options, complete) {
    complete();
};
function onTransitionEnd(element, callback) {
    if (element.style.transitionDuration == '0s') {
        setTimeout(callback, 1);
        return;
    }
    var handler = function (event) {
        callback(event);
        element.removeEventListener('transitionend', handler);
    };
    element.addEventListener('transitionend', handler);
}

transitions.cover = function (fromView, toView, options, complete) {
    async.series([
        fromView.willHook('beforeExit'),
        function(cb){
            fromView.hook('onExit');
            fromView.element.classList.add('darken');
            cb();
        },
        toView.willHook('beforeEnter'),
        function(cb){
            toView.element.classList.add('translate-right', 'animated');
            toView.hook('onEnter');
            toView.element.classList.remove('translate-right');
            onTransitionEnd(toView, cb)
        },
        function(cb){
            toView.element.classList.remove('animated');
            cb();
        },
        toView.willHook('afterEnter'),
        fromView.willHook('afterExit')
    ], complete)
};
transitions.slide = function (fromView, toView, options, complete) {
    async.series([
        fromView.willHook('beforeExit'),
        function(cb){
            fromView.hook('onExit');
            fromView.element.classList.add('translate-left', 'animated');
            cb();
        },
        toView.willHook('beforeEnter'),
        function(cb){
            toView.element.classList.add('translate-right', 'animated');
            toView.hook('onEnter');
            toView.element.classList.remove('translate-right');
            onTransitionEnd(toView, cb)
        },
        function(cb){
          toView.element.classList.remove('animated');
          cb();
        },
        toView.willHook('afterEnter'),
        fromView.willHook('afterExit')
    ], complete)
};

var slideInRight = function(view, cb){
  series([

  ], cb)
};

transitions.pop = function (fromView, toView, options, complete) {
    complete();
};

var transitionsCommons = {};
transitionsCommons.darken = function (view, complete) {

};

AnimationController.prototype.transitions = transitions;
AnimationController.prototype.performTransition = function (fromView, toView, options) {
    options.transition(fromView, toView, options, function () {

    });
};
var app = new Application();

app.router.on('/profile/:id', function(path){
    var profileView = app.views.profile.create(path);
    app.anim.performTransition(app.currentView, profileView, 'push');
});


app.views.profile = new View('#profile');
app.views.friends = new View('#friends');
app.views.friends.hook('beforeEnter', function(view, done){

});
