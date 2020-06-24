/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxparams: 4 */
/* internal methods *//* global initStorage, assign */
/* internal vars *//* global on_mount_funs: true, internal_storage: true */
let add_out_methods= {
    /**
     * Returns reference of currently added element
     * @method getReference
     * @memberof module:jaaJSU~$dom~instance_componentAdd
     * @returns {Element|Text} See [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node).
     */
    getReference: function(add_out, el){ return el; },
    /**
     * Method for batch registering `on*` methods for current element.
     * @method on
     * @memberof module:jaaJSU~$dom~instance_componentAdd
     * @param  {...module:jaaJSU~$dom~component_listener} listeners
     * @returns {module:jaaJSU~$dom~instance_componentAdd}
     * @example
     * const select_component= select();
     * select_component.mount(parent);
     * // default ⇣
     * select_component.update({ value: "no_default_1" });
     * // no_default_1 ⇣
     * 
     * function select(init= { value: "default" }){
     *     const default_value= $dom.componentListener("mount", ()=> init);
     *     const update_value= $dom.componentListener("update", init, ({ value })=> ({ value }));
     *     
     *     const c= $dom.component("SELECT", null).on( default_value, update_value );
     *         c.add("OPTION", { value: "no_default_1", textContent: "no_default_1" });
     *         c.add("OPTION", { value: "default", textContent: "default" }, -1);
     *     return share;
     * }
     */
    on: function(add_out, el, ...listeners){
        listeners.forEach(([ event_name, args ]= [])=> event_name && add_out[event_name].apply(this, args));
        return add_out;
    },
    /**
     * This procedure allows to call given function `fn` during registering element.
     * @method oninit
     * @memberof module:jaaJSU~$dom~instance_componentAdd
     * @param {Function} fn
     * @returns {module:jaaJSU~$dom~instance_componentAdd}
     */
    oninit: function(add_out, el, fn){ fn.call(add_out, el); return add_out; },
    /**
     * This procedure allows to call given function `onMountFunction` during mounting component.
     * 
     * It can for example solve problem setting default value for `select` (`option`s elements not exist when the `select` itself is declared!).
     * 
     * As alternative for some cases, you can use `active` label for `option`s instead.
     * 
     * For now, only first mount!
     * @method onmount
     * @memberof module:jaaJSU~$dom~instance_componentAdd
     * @param {Function} onMountFunction
     * @returns {module:jaaJSU~$dom~instance_componentAdd}
     * @example
     * const select_component= select({ value: "default" });
     * select_component.mount(parent);
     * // default ⇣
     * 
     * function select(init){
     *     const c= $dom.component("SELECT", null)
     *      .onmount(()=> init);
     *         c.add("OPTION", { value: "no_default_1", textContent: "no_default_1" });
     *         c.add("OPTION", { value: "no_default_2", textContent: "no_default_2" }, -1);
     *         c.add("OPTION", { value: "no_default_3", textContent: "no_default_3" }, -1);
     *         c.add("OPTION", { value: "default", textContent: "default" }, -1);
     *     return c.share;
     * }
     */
    onmount: function(add_out, el, onMountFunction){
        if(!on_mount_funs) on_mount_funs= new Map();
        on_mount_funs.set(el, onMountFunction);
        return add_out;
    },
    /**
     * This method allows to register function ({@link module:jaaJSU~$dom.onUpdateFunction}) which shoul be invoke when given **keys** in `data` will be changed (see {@link module:jaaJSU~$dom~instance_component.update}).
     * @method onupdate
     * @memberof module:jaaJSU~$dom~instance_componentAdd
     * @param {Object} data This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdateFunction` is called.
     * @param {module:jaaJSU~$dom~onUpdateFunction} onUpdateFunction This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element.
     * @returns {module:jaaJSU~$dom~instance_componentAdd}
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
     * @category types descriptions
     * @inner
     * @param {Object} data Includes all subsribed keys from `data` see method {@link module:jaaJSU~$dom~instance_componentAdd.onupdate}
     * @returns {*|module:jaaJSU~$dom~DomAssignObject} Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method {@link module:jaaJSU~$dom~instance_component.update} is called. This callback can be registered when element is created (see method {@link module:jaaJSU~$dom~instance_component.add}) see {@link module:jaaJSU~$dom~instance_componentAdd}.
     */
    onupdate: function(add_out, el, data, onUpdateFunction){
        if(!data) return add_out;
        if(!internal_storage) internal_storage= initStorage();
        assign(el, internal_storage.register(el, data, onUpdateFunction));
        return add_out;
    }
};