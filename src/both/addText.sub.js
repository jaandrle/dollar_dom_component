/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement */
/* internal vars *//* global all_els_counter: true */
/* global component_out, els */
/**
 * This is `Component` with aditional methods
 * @typedef instance_componentAddText
 * @memberof module:jaaJSU~$dom
 * @category types descriptions
 * @inner
 * @type {module:jaaJSU~$dom~instance_component}
 */
/**
 * This add element to component
 * @method addText
 * @memberof module:jaaJSU~$dom~instance_component
 * @public
 * @chainable
 * @param {String} text Argument for `document.createTextNode`
 * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
 * @returns {module:jaaJSU~$dom~instance_componentAddText}
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
    return Object.assign(Object.create(component_out), {
        /**
         * This procedure allows to call given function `fn` during registering element.
         * @method oninit
         * @memberof module:jaaJSU~$dom~instance_componentAddText
         * @param {Function} fn
         * @returns {module:jaaJSU~$dom~instance_component}
         */
        oninit: function(fn){ fn.call(this, el); return component_out; }
    });
}