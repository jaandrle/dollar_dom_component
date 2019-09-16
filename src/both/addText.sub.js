/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement */
/* internal vars *//* global all_els_counter: true */
/* global component_out, els */
/**
 * This is `Component` with aditional methods
 * @typedef Component__AddText
 * @type Component
 */
/**
 * This add element to component
 * @method addText
 * @memberof Component
 * @public
 * @param {String} text
 *  - Argument for `document.createTextNode`
 * @param {Number} shift
 *  - see [`add`](#componentadd)
 * @returns {Component__AddText}
 * @example
 *      function testTextLi({ href= "https://www.seznam.cz" }= {}){
 *          const { add, addText, share }= $dom.component("LI", null);
 *              add("P", { textContent: "Link test: " });
 *                  add("A", { textContent: "link ", href });
 *                      add("STRONG", { textContent: `(${href.replace("https://www.", "")})` });
 *                  addText("!", -2);
 *                  add("BR", null, -1);
 *                  addText("Test new line.", -1);
 *          return share;
 *      }
 *      //result: '<p>Link test: <a href="...">link <strong>...</strong></a>!<br>Test new line.</p>'
 */
function addText(text, shift= 0){
    recalculateDeep(shift);
    const text_node= document.createTextNode(text);
    let el= els[all_els_counter]= getParentElement().appendChild(text_node);
    all_els_counter+= 1;
    return Object.assign({
        /**
         * This procedure allows to call given function `fn` during registering element.
         * @method oninit
         * @memberof Component__AddText
         * @param {Function} fn
         * @returns {Component}
         */
        oninit: function(fn){ fn(el); return component_out; }
    }, component_out);
}