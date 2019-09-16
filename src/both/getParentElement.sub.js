/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global deep, els, fragment */
/**
 * Returns parent element (or "fragment pseudo element")
 * @method getParentElement
 * @memberof $dom.types.Component
 * @private
 * @returns {NodeElement} Returns parent element (i. e. `DocumenFragment` if component is empty)
 */
function getParentElement(){
    return els[deep[deep.length-2]] || fragment;
}