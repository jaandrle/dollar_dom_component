/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement, initStorage */
/* internal vars *//* global all_els_counter: true, container: true, internal_storage: true */
/* out *//* global $dom, els, fragment, component_out */
/**
 * This is `Component` with aditional methods
 * @typedef Component__Add
 * @type Component
 */
/**
 * This add element to component
 * @method add
 * @memberof Component
 * @public
 * @param {String} el_name Name of element (for example `LI`, `P`, `A`, ...).
 * @param {Object} attrs
 * <br/>- `null|undefined` is also supported (`null` is probably recommendet for better readability)
 * <br/>- The second argument for [`$dom.assign`](#domassign)
 * @param {Number} [shift= 0] Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
 * @returns {Component__Add}
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
        /**
         * Returns reference of currently added element
         * @method getReference
         * @memberof Component__Add
         * @returns {NodeElement}
         */
        getReference: ()=> el,
        /**
         * This procedure allows to call given function `fn` during registering element.
         * @method oninit
         * @memberof Component__Add
         * @param {Function} fn
         * @returns {Component}
         */
        oninit: function(fn){ fn(el); return component_out; },
        /**
         * This procedure allows to call given function `fn` during registering element.
         * @method onupdate
         * @memberof Component__Add
         * @param {Object} data This allows register listener for given keys of Object `data`
         * @param {Function} onUpdateFunction This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element.
         * @returns {Component}
         * @example
         *      const c= $dom.component("DIV", null);
         *      …
         *      c.add("P", null).onupdate({ key: "This is init value" }, ({ key })=> ({ textContent: key }));//=> <p>This is init value</p>
         *      …
         *      c.update({ key: "Value changed" });//=> <p>Value changed</p>
         */
        onupdate: function(data, onUpdateFunction){
            if(!data) return component_out;
            if(!internal_storage) internal_storage= initStorage();
            $dom.assign(el, internal_storage.register(el, data, onUpdateFunction));
            return component_out;
        }
    }, component_out);
}