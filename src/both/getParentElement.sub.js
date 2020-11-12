/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global deep, els, container */
/**
 * Returns parent element (or "container pseudo element")
 * @method getParentElement
 * @memberof module:jaaJSU~$dom~instance_component
 * @private
 * @returns {NodeElement} Returns parent element (i. e. `DocumenFragment` if component is empty)
 */
function getParentElement(){
    return els[deep[deep.length-2]] || container;
}