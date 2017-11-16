/**
 *
 * @param selector
 * @constructor
 * @class
 */
var Application = function (selector) {
    this.templates = {};
    this.el = document.querySelector(selector);
    this.el.innerHTML = '<header></header><div class="views"></div><footer></footer>';
    this.views = {};
};

Application.prototype.addTemplate = function(template){
    this.templates[template.name] = template;
};

Application.prototype.createView = function(name, path){
    this.views[path] = this.templates[name].create(path);
    this.el.querySelector(':scope > .views').append(this.views[path].el);
    return this.views[path];
};

module.exports = Application;