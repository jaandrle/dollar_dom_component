/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement, assign, createElement */
/* internal vars *//* global all_els_counter: true, container: true, add_out_methods */
/* out *//* global els, component_out */
/**
 * This is `Component` with aditional methods
 * @typedef instance_componentAdd
 * @memberof module:jaaJSU~$dom
 * @category types descriptions
 * @inner
 * @type module:jaaJSU~$dom~instance_component
 */
/**
 * This add element to component
 * @method add
 * @memberof module:jaaJSU~$dom~instance_component
 * @public
 * @chainable
 * @param {module:jaaJSU~$dom.EL_NAME} el_name `LI`, `P`, `A`, …, `svg`, `polyline`, `clipPath`, …
 * @param {module:jaaJSU~$dom~DomAssignObject} attrs Internally uses {@link module:jaaJSU~$dom.assign}, `null`\|`undefined` is also supported (`null` is probably better for readability).
 * @param {Number} [shift= 0] Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
 * @returns {module:jaaJSU~$dom~instance_componentAdd}
 * @example
 * const UL= document.getElementById('SOME UL');
 * const { add }= $dom.component("LI", { className: "list_item" });
 * //result: <li class="list_item">...</li>
 * add("DIV", { textContent: "Child of .list_item", className: "deep1" });
 * //result: <li class="list_item"><div class="deep1">...</div></li>
 *     add("DIV", { textContent: "Child of div.deep1", className: "deep2" });
 *     //result: ...<div class="deep1"><div class="deep2">...</div></div>...
 *         add("DIV", { textContent: "Child of div.deep2", className: "deep3" });
 *         //result: ...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
 *         add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);
 *         //result: ...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
 * //next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
 *     add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
 *     //result: this is on 2nd level
 * add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
 * //result: this is on 0 level
 *     add("DIV", null);
 *     //just DIV without attributes
 */
function add(el_name, attrs, shift= 0){
    recalculateDeep(shift);
    attrs= attrs || {};
    const prepare_el= createElement(el_name);
    if(!all_els_counter) container= els[0]= prepare_el;
    else els[all_els_counter]= getParentElement().appendChild(prepare_el);
    let el= els[all_els_counter];
    all_els_counter+= 1;
    assign(el, attrs);
    const add_out= Object.create(component_out);
    gulp_place("both/add_out_methods_registration.sub.js");/* global gulp_place */
    return add_out;
}