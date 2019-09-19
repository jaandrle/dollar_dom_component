/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement, initStorage */
/* internal vars *//* global all_els_counter: true, container: true, internal_storage: true */
/* out *//* global $dom, els, fragment, component_out */
/**
 * This is `Component` with aditional methods
 * @typedef instance_componentAdd
 * @memberof module:jaaJSU~$dom
 * @category virtual
 * @type module:jaaJSU~$dom.instance_component
 */
/**
 * This add element to component
 * @method add
 * @memberof module:jaaJSU~$dom.instance_component
 * @public
 * @chainable
 * @param {String} el_name Name of element (for example `LI`, `P`, `A`, ...).
 * @param {module:jaaJSU~$dom.DomAssignObject} attrs Internally uses {@link module:jaaJSU~$dom.assign}, `null`\|`undefined` is also supported (`null` is probably better for readability).
 * @param {Number} [shift= 0] Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
 * @returns {module:jaaJSU~$dom.instance_componentAdd}
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
         * @memberof module:jaaJSU~$dom.instance_componentAdd
         * @returns {NodeElement}
         */
        getReference: ()=> el,
        /**
         * This procedure allows to call given function `fn` during registering element.
         * @method oninit
         * @memberof module:jaaJSU~$dom.instance_componentAdd
         * @param {Function} fn
         * @returns {module:jaaJSU~$dom.instance_component}
         */
        oninit: function(fn){ fn(el); return component_out; },
        /**
         * This method allows to register function ({@link module:jaaJSU~$dom.onUpdateFunction}) which shoul be invoke when given **keys** in `data` will be changed (see {@link module:jaaJSU~$dom.instance_component.update}).
         * @method onupdate
         * @memberof module:jaaJSU~$dom.instance_componentAdd
         * @param {Object} data This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdateFunction` is called.
         * @param {module:jaaJSU~$dom.onUpdateFunction} onUpdateFunction This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element.
         * @returns {module:jaaJSU~$dom.instance_component}
         * @example
         * const c= $dom.component("DIV", null);
         * …
         * c.add("P", null).onupdate({ key: "This is init value" }, ({ key })=> ({ textContent: key }));//=> <p>This is init value</p>
         * …
         * c.update({ key: "Value changed" });//=> <p>Value changed</p>
         * @example
         * const c= $dom.component("DIV", null);
         * …
         * c.add("P", null).onupdate({ A: "A", B: "b" }, ({ A, B })=> ({ textContent: A+B }));//=> <p>Ab</p>
         * …
         * c.update({ B: "B" });//=> <p>AB</p>
         */
        /**
         * @callback onUpdateFunction
         * @memberof module:jaaJSU~$dom
         * @category virtual
         * @param {Object} data Includes all subsribed keys from `data` see method {@link module:jaaJSU~$dom.instance_componentAdd.onupdate}
         * @returns {*|module:jaaJSU~$dom.DomAssignObject} Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method {@link module:jaaJSU~$dom.instance_component.update} is called. This callback can be registered when element is created (see method {@link module:jaaJSU~$dom.instance_component.add}) see {@link module:jaaJSU~$dom.instance_componentAdd}.
         */
        onupdate: function(data, onUpdateFunction){
            if(!data) return component_out;
            if(!internal_storage) internal_storage= initStorage();
            $dom.assign(el, internal_storage.register(el, data, onUpdateFunction));
            return component_out;
        }
    }, component_out);
}