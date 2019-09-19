/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement */
/* internal vars *//* global all_els_counter: true */
/* global component_out, els */
/**
 * This is `Component` with aditional methods
 * @typedef Component__AddText
 * @memberof module:jaaJSU~$dom
 * @category virtual
 * @type {Component}
 */
/**
 * This add element to component
 * @method addText
 * @memberof module:jaaJSU~$dom.Component
 * @public
 * @chainable
 * @param {String} text Argument for `document.createTextNode`
 * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom.Component.add}
 * @returns {module:jaaJSU~$dom.Component__AddText}
 * @example
 * const c1= $dom.component("P", { textContent: "TEXT" });
 * const c2= $dom.component("P", null);
 *     c2.addText("TEXT");
 * //c1-> <p>TEXT</p>  ===  <p>TEXT</p> <-c2
 * @example
 * function testTextLi({ href= "https://www.seznam.cz" }= {}){
 *     const c= $dom.component("LI", null);
 *         c.add("P", { textContent: "Link test: " });
 *             c.add("A", { textContent: "link ", href });
 *                 c.add("STRONG", { textContent: `(${href.replace("https://www.", "")})` });
 *             c.addText("!", -2);
 *             c.add("BR", null, -1);
 *             c.addText("Test new line.", -1);
 *     return c.share;
 * }
 * //result: '<p>Link test: <a href="...">link <strong>...</strong></a>!<br>Test new line.</p>'
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
         * @memberof module:jaaJSU~$dom.Component__AddText
         * @param {Function} fn
         * @returns {module:jaaJSU~$dom.Component}
         */
        oninit: function(fn){ fn(el); return component_out; }
    }, component_out);
}