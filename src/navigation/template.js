var extend = require('extend');
var Handlebars = require('handlebars/runtime');

var hooks = require('../kinematic/hooks');
/**
 * @class View
 * @constructor
 */
var Template = function (name) {
    this.name = name;
    this.hb = Handlebars.templates[name];
};

extend(Template.prototype, hooks);

Template.prototype.create = function (path) {
    var template = this;

    var View = function () {
        var childSelf = this;
        childSelf.path = path;
        childSelf.el = document.createElement('section');
        childSelf.el.classList.add('view');
        childSelf.el.setAttribute('data-path', path);
    };

    View.prototype = this;
    View.prototype.render = function (params) {
        this.el.innerHTML = template.hb(params || this.data);
    };
    View.prototype.empty = function () {
        this.el.innerHTML = '';
    };

    return new View();
};


Template.prototype.addClass = function (classNames) {
    this.el.classList.add.apply(this.el.classList, classNames.split(' '));
};

Template.prototype.removeClass = function (classNames) {
    this.el.classList.remove.apply(this.el.classList, classNames.split(' '));
};

Template.prototype.find = function (selector) {
    return this.el.querySelectorAll(selector);
};

module.exports = Template;