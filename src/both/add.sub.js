/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement, initStorage */
/* internal vars *//* global all_els_counter: true, container: true, internal_storage: true */
/* out *//* global $dom, els, fragment, component_out */
/**
 * This add element to component
 * @method add
 * @public
 * @param {String} el_name
 *  - Name of element (for example `LI`, `P`, `A`, ...).
 * @param {Object} attrs
 *  - `null|undefined` is also supported (`null` is probably recommendet for better readability)
 *  - The second argument for [`$dom.assign`](./$dom.{namespace}.html#methods_assign)
 * @param {Number} [shift= 0]
 *  - Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
 * @returns {Object}
 *  - `getReference` {Function}: return NodeElement reference of added element
 *  - `onupdate`
 *      - Pattern: `add(...).onupdate(Values: Object, Retuns_attrs_keys: Function)`
 *      - This register listener/subscriber function (`Retuns_attrs_keys`) for keys (variables) in `Values`
 *      - Example: `add(...).onupdate({counter}, _=>({ textContent: counter }))` registers listerner to `counter`. When the `udate({ ... counter: something, ...})` is called this element changes `textContent`.
 *      - See [`update`](#methods_update)
 * @example
 *      const UL= document.getElementById('SOME UL');
 *      const { add }= $dom.component("LI", { className: "list_item" });
 *      //result: <li class="list_item">...</li>
 *      add("DIV", { textContent: "Child of .list_item", className: "deep1" });
 *      //result: <li class="list_item"><div class="deep1">...</div></li>
 *          add("DIV", { textContent: "Child of div.deep1", className: "deep2" });
 *          //result: ...<div class="deep1"><div class="deep2">...</div></div>...
 *              add("DIV", { textContent: "Child of div.deep2", className: "deep3" });
 *              //result: ...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
 *              add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);
 *              //result: ...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
 *      //next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
 *          add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
 *          //result: this is on 2nd level
 *      add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
 *      //result: this is on 0 level
 *          add("DIV", null);
 *          //just DIV without attributes
 */
function add(el_name, attrs, shift= 0){
    recalculateDeep(shift);
    attrs= attrs || {};
    const prepare_el= document.createElement(el_name);
    if(!all_els_counter) container= els[0]= fragment.appendChild(prepare_el);
    else els[all_els_counter]= getParentElement().appendChild(prepare_el);
    let el= els[all_els_counter];
    all_els_counter+= 1;
    $dom.assign(el, attrs);
    return Object.assign({
        getReference: ()=> el,
        oninit: function(fn){ fn(el); return component_out; },
        onupdate: function(data, onUpdateFunction){
            if(!data) return component_out;
            if(!internal_storage) internal_storage= initStorage();
            $dom.assign(el, internal_storage.register(el, data, onUpdateFunction));
            return component_out;
        }
    }, component_out);
}