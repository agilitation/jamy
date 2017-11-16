/**
 *
 * @param opacity
 * @param size
 * @return {Element}
 */
module.exports = function createDropShadow(opacity, size) {
    var el = document.createElement('div');
    var s = el.style;
    s.position = 'absolute';
    s.width = '100%';
    s.height = '100%';
    s.background = 'transparent';
    s.opacity = '0';
    s.boxShadow = '0 0 ' + size + ' rgba(0,0,0, ' + opacity.toFixed(2).toString() + ')';
    return el;
};