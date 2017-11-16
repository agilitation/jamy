/**
 * @return {Element}
 */
module.exports = function createMask(){
    var el = document.createElement('div');
    var s = el.style;
    s.position = 'absolute';
    s.width = '100%';
    s.height = '100%';
    s.top = '0';
    s.left = '0';
    s.background = 'rgb(0,0,0)';
    return el;
};