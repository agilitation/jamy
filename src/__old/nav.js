var NavigationController = function (container) {
    this.templates = {};

    this.$el = $(container);

    this.containers = {
        views: this.$el.find('> main'),
        header: this.$el.find('> header'),
        footer: this.$el.find('> footer'),
        modals: this.$el.find('> aside')
    };
    var self = this;
    this.containers.templates.children().each(function(i, viewEl){
        var $view = $(viewEl);
         self.templates[$view.data('name')] = new View($view);
    });
};

NavigationController.prototype.openModal = function (selector, options, complete) {
    complete();
};

NavigationController.prototype.closeModal = function (complete) {
    complete();
};

NavigationController.prototype.setHeader = function (header) {

};

NavigationController.prototype.showView = function (name, options, complete) {
    /* Defaults and options management */
    var defaults = {modal: false, back: false};
    complete = complete || new Function();
    if (typeof options === 'undefined') {
        options = defaults;
    } else if (typeof options === 'function') {
        complete = options;
        options = defaults;
    }
    /* args parsed */

    var view = this.templates[name];
    var $el = $(view.element);

    view.options = options;

    this.containers.templates.find('> .active').removeClass('active');

    // this.hideView(this.currentView, {back: options.back}, execBeforeEnter);
    this.currentView = name;

    function execBeforeEnter() {
        view.hook('beforeEnter', startTransition);
    }

    execBeforeEnter();
    function startTransition() {
        view.hook('onEnter');
        $el.addClass('active').transitionEnd(function () {
            view.hook('afterEnter', complete);
        });
    }
};

NavigationController.prototype.hideView = function (selector, options, complete) {
    var defaults = {
        back: false
    };
    complete = complete || new Function();

    if (typeof options === 'undefined') {
        options = defaults;
    } else if (typeof options === 'function') {
        complete = options;
        options = defaults;
    }

    var view = this.getView(selector);

    view.hook('beforeExit', startTransition);

    function startTransition() {
        view.hook('onExit');
        $(selector).removeClass('active');
        //todo real nav
        if (!options.back) {
            $(selector).addClass('prev');
        }
        view.hook('afterExit', complete);
    }
};

NavigationController.SELECTOR_ROOT = ':root';

NavigationController.ops = {

    showView: function (navigationController, view, options) {
        return function (_view, done) {
            navigationController.show(view, options, done);
        }
    },
    wait: function (delay) {
        return function (view, done) {
            setTimeout(done, delay)
        }
    },
    debug: function (message) {
        var that = this;
        return function (view, done) {
            console.info(message);
            that.wait(0)(view, done);
        }
    },
    sync: function (ops) {
        return function syncInView(view, done) {
            eachParallel(ops, function (operation, cb) {
                operation(view, cb);
            }, done)
        }
    },
    each: function (selector, cls, options) {
        var that = this;
        options = options || {};
        return function sequenceInView(view, done) {
            var cnt = 0;
            var delay = options.delay;
            var elements = view.find(selector).toArray();
            eachParallel(elements, function (el, cb) {
                options.delay = delay * cnt;
                that.animate(el, cls, options)(view, cb);
                cnt++;
            }, done);
        };
    },
    sequence: function (operations) {
        return function sequenceInView(view, done) {
            eachSeries(operations, function (operation, cb) {
                operation(view, cb);
            }, done);
        };
    },
    animate: function (selector, cls, options) {
        options = options || {};
        return function animateInView(view, done) {
            setTimeout(function () {
                var $el = view.find(selector);
                $el.removeClass('animation-hide').animateCss(cls, function () {
                    if (options.addClass) {
                        $el.addClass(options.addClass);
                    }
                    if (options.removeClass) {
                        $el.removeClass(options.removeClass);
                    }
                    if (typeof options.after === 'function') {
                        options.after($el, done);
                    } else {
                        done();
                    }
                });
            }, options.delay ? options.delay : 1);
        }
    },
    hide: function (selector) {
        // todo options opacity | display none | height / etc.
        return function hideInView(view, done) {
            view.find(selector).addClass('animation-hide');
            done(); // wait for frame ?
        }
    },
    show: function (selector) {
        return function hideInView(view, done) {
            view.find(selector).removeClass('animation-no-display animation-hide');
            done(); // wait for frame ?
        }
    }
};

/**
 * @param el
 * @constructor
 */
var View = function (el) {
    this.element = el;
    this.hooks = [];
    var self = this;
    View.HOOKS.forEach(function (name) {
        self.hooks[name] = [];
    });

    $(el).data('view', this);
};

View.HOOKS = ['beforeEnter', 'onEnter', 'afterEnter', 'beforeExit', 'onExit', 'afterExit'];

var createHookMethod = function (hook) {
    return function (operation) {
        return View.prototype.on.call(this, hook, operation);
    }
};

View.prototype.beforeEnter = createHookMethod('beforeEnter');
View.prototype.onEnter = createHookMethod('onEnter');
View.prototype.afterEnter = createHookMethod('afterEnter');
View.prototype.beforeExit = createHookMethod('beforeExit');
View.prototype.onExit = createHookMethod('onExit');
View.prototype.afterExit = createHookMethod('aftExit');

View.prototype.hook = function (hook, done) {
    var self = this;
    done = done || new Function();
    if (this.hooks[hook].length > 0) {
        eachSeries(self.hooks[hook], function (operation, cb) {
            // todo operation(self, *** options ***, cb);
            operation(self, cb);
        }, done)
    } else {
        done();
    }
};

View.prototype.willHook = function(hook){
    var self = this;
    return function(cb){
        self.hook(hook, cb)
    }
};

View.prototype.find = function (selector) {
    if (typeof selector == 'string' && selector.indexOf(NavigationController.SELECTOR_ROOT) === 0) {
        return $(selector.substr(NavigationController.SELECTOR_ROOT.length))
    }
    return $(this.element).find(selector);
};

View.prototype.on = function (event, operation) {
    this.hooks[event].push(operation);
    return this;
};