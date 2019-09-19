/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global deep, els, fragment */
/**
 * Returns parent element (or "fragment pseudo element")
 * @method getParentElement
 * @memberof module:jaaJSU~$dom.Component
 * @private
 * @returns {NodeElement} Returns parent element (i. e. `DocumenFragment` if component is empty)
 */
function getParentElement(){
    return els[deep[deep.length-2]] || fragment;
}