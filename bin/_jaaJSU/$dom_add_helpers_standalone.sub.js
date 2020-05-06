/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxcomplexity: 19, maxparams: 5, maxdepth: 3 */
/* $dom *//* global $dom */
/* standalone= "standalone"; */
/**
 * In generall, all methods from {@link module:jaaJSU~$dom~instance_component} don't do anything. Also during "mounting" there are some changes see method {@link module:jaaJSU~$dom~instance_componentEmpty.mount}.
 * @typedef instance_componentEmpty
 * @memberof module:jaaJSU~$dom
 * @category types descriptions
 * @inner
 * @type {module:jaaJSU~$dom~instance_component}
 */
const $dom_emptyPseudoComponent= (function(){
    const share= { mount, update, destroy, ondestroy, isStatic };
    let component_out= { add, component, mount, update, ondestroy, share };
    return component_out;
    /**
     * The same syntax as {@link module:jaaJSU~$dom~instance_component.mount}. But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").
     * @method mount
     * @memberof module:jaaJSU~$dom~instance_componentEmpty
     */
    function mount(element, type= "childLast"){
        // let temp_el;
        switch ( type ) {
            case "replace":
                element.remove();
                break;
            case "replaceContent":
                $dom.empty(element);
                break;
            // case "before":
            //     temp_el= element.previousElementSibling;
            //     if(temp_el) temp_el.remove();
            //     break;
            // case "after":
            //     temp_el= element.nextElementSibling;
            //     if(temp_el) temp_el.remove();
            //     break;
            // default:
            //     if(element.childNodes.length) element.childNodes[type==="childFirst" ? 0 : element.childNodes.length-1].remove();
            //     break;
        }
        return null;
    }
    function add(){ return component_out; }
    function component(){ return component_out; }
    function update(){ return true; }
    function isStatic(){ return true; }
    function ondestroy(){ return true; }
    function destroy(){ component_out= null; return null; }
})();
/**
 * This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.
 * @method component
 * @memberof module:jaaJSU~$dom
 * @version 1.1.1
 * @see {@link https://github.com/jaandrle/dollar_dom_component}
 * @param {string} [el_name= EMPTY] Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. See {@link module:jaaJSU~$dom~instance_component.add}.
 * @param {module:jaaJSU~$dom~DomAssignObject} attrs The second argument for {@link module:jaaJSU~$dom.assign}
 * @param {Object} [params= {}] Parameters
 * @param {Function} [params.mapUpdate=undefined] This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method {@link module:jaaJSU~$dom~instance_component.add}
 * @param {string|undefined} [params.namespace_group=undefined] This parameter provides ability to defined elements for diferent [`namespaceURI`s](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI). Use "__SVG__" for "http://www.w3.org/2000/svg" (full list [Important Namespace URIs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS#Important_Namespace_URIs)).
 * @return {module:jaaJSU~$dom~instance_componentAdd|module:jaaJSU~$dom~instance_componentEmpty} Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!
 */
$dom.component= function(el_name, attrs, { mapUpdate, namespace_group }={}){
    if(!el_name||el_name==="EMPTY"||el_name==="empty") return $dom_emptyPseudoComponent;
    if(el_name==="svg") namespace_group= "SVG";
    let assign, createElement;
    if(namespace_group==="SVG"){
        assign= $dom.assignNS.bind(null, "SVG");
        createElement= document.createElementNS.bind(document, "http://www.w3.org/2000/svg");
    } else {
        assign= $dom.assign;
        createElement= document.createElement.bind(document);
    }
    let /* holds `initStorage()` if `onupdate` was registered and other component related listeners */
        internal_storage= null,
        on_destroy_funs= null,
        /* on first mount */
        on_mount_funs= null,
        observer= null;
    const /* 'drawer' (container) for component elements */
        fragment= document.createDocumentFragment();
    let /* main parent (wrapper), container for children elements */
        container,
        /* store for all registered elements */
        els= [], all_els_counter= 0,
        /* current elements deep which holds indicies of elements:
            - add(...);add(...); = final deep=[0,1];
            - add(...);add(...,-1);add(...) = final deep=[1,2]; (by steps: [0], [0,1], [1,2])
            - see `shift` in `add`
        */
        deep= [];
    const share= { mount, update, destroy, ondestroy, isStatic };
    let component_out= { add, addText, component, dynamicComponent, setShift, mount, update, ondestroy, share };
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
            listeners.forEach(([ event_name, args ])=> add_out[event_name].apply(this, args));
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
    /**
     * Its purpose is to make easy transfering methods somewhere else (like for using in another component, see {@link module:jaaJSU~$dom~instance_component.component} method).
     * @typedef share
     * @memberof module:jaaJSU~$dom~instance_component
     * @borrows module:jaaJSU~$dom~instance_component.mount as mount
     * @borrows module:jaaJSU~$dom~instance_component.update as update
     * @type {Object}
     */
    /**
     * This is minimal export of "functional class" {@link module:jaaJSU~$dom.component} and its methods (if they are chainable).
     * @typedef instance_component
     * @memberof module:jaaJSU~$dom
     * @category types descriptions
     * @inner
     * @type {Object}
     */
    return add(el_name, attrs);
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
     * @param {String} el_name Name of element (for example `LI`, `P`, `A`, ...). For [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) you can use lowercase/uppercase convention (e. g. 'p', 'P', 'div', 'DIV'), for [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Element) use exact form (e. g. 'svg', 'polyline', 'clipPath')!
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
        if(!all_els_counter) container= els[0]= fragment.appendChild(prepare_el);
        else els[all_els_counter]= getParentElement().appendChild(prepare_el);
        let el= els[all_els_counter];
        all_els_counter+= 1;
        assign(el, attrs);
        const add_out= Object.create(component_out);
        
        add_out.getReference= add_out_methods.getReference.bind(null, add_out, el);
        add_out.on= add_out_methods.on.bind(null, add_out, el);
        add_out.oninit= add_out_methods.oninit.bind(null, add_out, el);
        add_out.onmount= add_out_methods.onmount.bind(null, add_out, el);
        add_out.onupdate= add_out_methods.onupdate.bind(null, add_out, el);
        return add_out;
    }
    
    /**
     * This add element to component
     * @method addText
     * @memberof module:jaaJSU~$dom~instance_component
     * @public
     * @chainable
     * @param {String} text Argument for `document.createTextNode`
     * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
     * @returns {module:jaaJSU~$dom~instance_componentAdd}
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
    function addText(text= "", shift= 0){
        recalculateDeep(shift);
        const text_node= document.createTextNode(text);
        let el= els[all_els_counter]= getParentElement().appendChild(text_node);
        all_els_counter+= 1;
        const add_out= Object.create(component_out);
        
        add_out.getReference= add_out_methods.getReference.bind(null, add_out, el);
        add_out.on= add_out_methods.on.bind(null, add_out, el);
        add_out.oninit= add_out_methods.oninit.bind(null, add_out, el);
        add_out.onmount= add_out_methods.onmount.bind(null, add_out, el);
        add_out.onupdate= add_out_methods.onupdate.bind(null, add_out, el);
        return add_out;
    }
    
    /**
     * Method for including another component by usint its `share` key.
     * @method component
     * @memberof module:jaaJSU~$dom~instance_component
     * @public
     * @chainable
     * @param {module:jaaJSU~$dom~instance_component.share} share
     * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
     * @return {module:jaaJSU~$dom~instance_component}
     * @example
     * function p({ textContent }){
     *      const cP= $dom.component("P", { textContent });
     *      return cP.share;
     * }
     * const c= $dom.component("DIV", null);
     * for(let i=0; i<3; i++){ c.component(p({ textContent: i })); }
     * c.mount(document.body, "replaceContent");
     * //= <body><div><p>0</p><p>1</p><p>2</p></div></body>
     */
    function component({ mount, update, isStatic }, shift= 0){
        recalculateDeep(shift);
        els[all_els_counter]= mount(getParentElement());
        if(!isStatic()){
            if(!internal_storage) internal_storage= initStorage();
            internal_storage.registerComponent(update);
        }
        all_els_counter+= 1;
        return component_out;
    }
    
    /**
     * Method for including another component by using `generator` function, which can change final `component` based on updated data `data`.
     * @method dynamicComponent
     * @memberof module:jaaJSU~$dom~instance_component
     * @public
     * @chainable
     * @param {Object} data Includes all subsribed keys from `data` see method {@link module:jaaJSU~$dom~instance_componentAdd.onupdate}
     * @param {module:jaaJSU~$dom~componentGenerator} generator Function for registering components based on updates of `data`.
     * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
     * @return {module:jaaJSU~$dom~instance_component}
     */
    function dynamicComponent(data, generator, shift= 0){
        recalculateDeep(shift);
        const parent= getParentElement();
        let current_value= null, current_component= null, current_element= null;
        function mount(component_share){
            current_component= component_share;
            if(current_element){
                current_element= current_component.mount(current_element, "replace");
            } else {
                current_element= current_component.mount(parent);
            }
        }
        return add_out_methods.onupdate(component_out, parent, data, function(data){
            /**
             * This is function for registering component for {@link module:jaaJSU~$dom~instance_component.dynamicComponent}.
             * @callback componentGenerator
             * @memberof module:jaaJSU~$dom
             * @category types descriptions
             * @inner
             * @param {Function} mount Function which consumes {@link module:jaaJSU~$dom~instance_component.share}.
             * @param {Null|module:jaaJSU~$dom~instance_component.share} current_component Previously registered component
             * @param {Object} data Includes all subsribed keys from `data` see method {@link module:jaaJSU~$dom~instance_componentAdd.onupdate}
             * @param {Null|Mixed} current_value Shared value across multiple calling
             * @returns {Mixed} current_value 
             */
            current_value= generator.call(parent, mount, current_component, data, current_value);
        });
    }
    
    /**
     * Add element to live DOM
     * @method mount
     * @memberof module:jaaJSU~$dom~instance_component
     * @public
     * @param {NodeElement} element Element where to places this component
     * @param {String} [type= "childLast"]
     *  <br/>- Change type of mounting
     *  <br/>- `childLast` places component as last child
     *  <br/>- `childFirst` places component as first child
     *  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)
     *  <br/>- `replace` replaces `element` by component
     *  <br/>- `before` places component before `element`
     *  <br/>- `after` places component after `element` (uses `$dom.insertAfter`)
     * @returns {NodeElement} `container`
     */
    function mount(element, type= "childLast"){
        if(observer) observer.disconnect();
        const component_el= !fragment.firstChild&&container ? container : fragment;
        let parent_node;
        switch ( type ) {
            case "replace":
                parent_node= element.parentNode;
                $dom.replace(element, component_el);
                break;
            case "replaceContent":
                $dom.empty(element);
                element.appendChild(component_el);
                parent_node= element;
                break;
            case "before":
                parent_node= element.parentNode;
                parent_node.insertBefore(component_el, element);
                break;
            case "after":
                $dom.insertAfter(component_el, element);
                parent_node= element.parentNode;
                break;
            default:
                if(type==="childFirst" && element.childNodes.length) element.insertBefore(component_el, element.childNodes[0]);
                else element.appendChild(component_el);
                parent_node= element;
                break;
        }
        observer= new MutationObserver(mutations=> mutations.forEach(function(record){
            if(!record.removedNodes||Array.prototype.indexOf.call(record.removedNodes, container)===-1) return false;
            destroy();
        }));
        observer.observe(parent_node, { childList: true, subtree: true, attributes: false, characterData: false });
        if(on_mount_funs){
            on_mount_funs.forEach(onMountFunctionCall);
            on_mount_funs= undefined;
        }
        return container;
        function onMountFunctionCall(onMountFunction, el){ return assign(el, onMountFunction.call(el, element, type)); }
    }
    
    /**
     * Method remove element form live DOM and returns null
     * @method destroy
     * @memberof module:jaaJSU~$dom~instance_component.share
     * @public
     * @returns {Null}
     * @example
     * let c= $dom.component("DIV", null);
     * c.mount(document.body, "replaceContent");
     * c= c.share.destroy();
     * //=> c===null AND <body></body>
     */
    function destroy(){
        if(on_destroy_funs){
            on_destroy_funs.forEach(onDestroyFunction=> onDestroyFunction.call(container));
        }
        if(container) {
            container.remove();
            els= [];
        }
        if(observer) observer.disconnect();
        observer= undefined;
        on_destroy_funs= undefined;
        assign= undefined;
        createElement= undefined;
        container= undefined;
        internal_storage= undefined;
        component_out= undefined;
        add_out_methods= undefined;
        return null;
    }
    
    /**
     * This provide ability to register function which should be called when the component will be destroyed.
     * @method ondestroy
     * @memberof module:jaaJSU~$dom~instance_component
     * @public
     * @param {Function} onDestroyFunction Function will be called when the component will be destroyed.
     */
    function ondestroy(onDestroyFunction){
        if(!on_destroy_funs) on_destroy_funs= new Set();
        on_destroy_funs.add(onDestroyFunction);
        return component_out;
    }
    
    /**
     * Updates `deep`
     * @private
     * @method recalculateDeep
     * @memberof module:jaaJSU~$dom~instance_component
     * @param {Number} shift see {@link module:jaaJSU~$dom~instance_component.add}
     */
    function recalculateDeep(shift){
        if(!shift) deep.push(all_els_counter);
        else { deep.splice(deep.length+1+shift); deep[deep.length-1]= all_els_counter; }
    }
    
    /**
     * Returns parent element (or "fragment pseudo element")
     * @method getParentElement
     * @memberof module:jaaJSU~$dom~instance_component
     * @private
     * @returns {NodeElement} Returns parent element (i. e. `DocumenFragment` if component is empty)
     */
    function getParentElement(){
        return els[deep[deep.length-2]] || fragment;
    }
    
    /**
     * Method provide way to change nesting behaviour. It can be helpful for loops
     * @method setShift
     * @memberof module:jaaJSU~$dom~instance_component
     * @public
     * @chainable
     * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
     * @returns {module:jaaJSU~$dom~instance_component}
     * @example
     * function testNesting(){
     *     const c= $dom.component("DIV", null);
     *         c.setShift(0);
     *     for(let i= 0; i<5; i++){
     *         c.add("P", { textContent: `Paragraph no. ${i}.` }, -1);
     *     }
     *     return c.share;
     * }
     * //=> div> 5*p
     * @example
     * function testNesting(){
     *     const c= $dom.component("DIV", null);
     *     for(let i= 0; i<5; i++){
     *         c.add("P", { textContent: `Paragraph no. ${i}.` });
     *          //c.setShift();//or 0 => div> p> p> p> …
     *       //c.setShift(-1); => div> p> p> p> …
     *     c.setShift(-2);
     *     }
     *     return c.share;
     * }
     * //=> div> 5*p
     */
    function setShift(shift= 0){
        let last;
        if(!shift){ last= deep.pop(); deep.push(last, last); }
        else deep.splice(deep.length+1+shift);
        return component_out;
    }
    
    /**
     * Initialize internal storage
     * @method initStorage
     * @memberof module:jaaJSU~$dom~instance_component
     * @private
     * @returns {Object} `{ register, registerComponent, update, unregister}`
     */
    function initStorage(){
        const /* storage for component, functions for updates and mapping data keys and corresponding elements */
            data= {},
            components= [], els= new Map(),
            functions= new Map(),
            listeners= new Map();
        let 
            counter= 0;
        return {
            register: function(el, init_data, fun){
                Object.assign(data, init_data);
                const ids= registerToMap(els, el)+"_"+registerToMap(functions, fun);
                const init_data_keys= Object.keys(init_data);
                for(let i=0, i_key, i_length= init_data_keys.length; i<i_length; i++){
                    i_key= init_data_keys[i];
                    if(!listeners.has(i_key)) listeners.set(i_key, [ ids ]);
                    else listeners.get(i_key).push(ids);
                }
                return fun.call(el, init_data) || {};
            },
            registerComponent: function(update){
                if(components.indexOf(update)===-1) components.push(update);
            },
            update: function(new_data_input){
                const new_data= typeof mapUpdate==="function" ? mapUpdate(new_data_input) : new_data_input;
                let out= false;
                for(let i=0, i_length= components.length; i<i_length; i++){ if(components[i](new_data)&&!out){out=true;} }
                if(!listeners.size) return out;
                const /* keys to update (subscribers exits and was changed) */
                    new_data_keys= Object.keys(new_data)
                        .filter(key=>listeners.has(key)&&data[key]!==new_data[key]),
                    new_data_keys_length= new_data_keys.length;
                if(!new_data_keys_length) return out;
                Object.assign(data, new_data);
                const els_for_redraw= [];
                for(let i=0, i_listeners; i<new_data_keys_length; i++){
                    i_listeners= listeners.get(new_data_keys[i]);
                    for(let j=0, ji_listener, j_length= i_listeners.length; j<j_length; j++){
                        ji_listener= i_listeners[j];
                        if(els_for_redraw.indexOf(ji_listener)===-1) els_for_redraw.push(ji_listener);
                    }
                }
                for(let i=0, i_length= els_for_redraw.length; i<i_length; i++){ processChanges(els_for_redraw[i]); }
                return true;
                
                function processChanges(ids){
                    const [ el_id, fun_id ]= ids.split("_").map(Number);
                    const el= els.get(el_id);
                    const new_data= functions.get(fun_id).call(el, data) || {};
                    if(el.parentNode===null) return unregister(el_id, fun_id, new_data_keys);
                    assign(el, new_data);
                }
            },
            getData: function(){
                return data;
            },
            unregister
        };
        function unregister(el_id, fun_id, data_keys){
            let funcs_counter= 0;
            els.delete(el_id);
            listeners.forEach(function(listeners_arr, i_key){
                if(data_keys.indexOf(i_key)===-1) return listeners_arr.forEach(function(ids){ if(Number(ids.split("_")[1])===fun_id){ funcs_counter+= 1; } });
                
                if(listeners_arr.length===1) listeners.delete(i_key);
                else listeners.set(i_key, listeners_arr.filter(el_idFilter));
            });
            if(!funcs_counter) functions.delete(fun_id);
            function el_idFilter(ids){ return Number(ids.split("_")[0])!==el_id; }
        }
        function registerToMap(store, current){
            let current_index= -1;
            store.forEach(function(v, i){ if(current_index===-1&&v===current) current_index= i; });
            if(current_index!==-1) return current_index;
            current_index= counter++;
            store.set(current_index, current);
            return current_index;
        }
    }
    
    /**
     * Method updates all registered varibles by keys `onupdates` and calls follower functions
     * @method update
     * @memberof module:jaaJSU~$dom~instance_component
     * @public
     * @param {Object|Function} new_data
     * <br/>- When `$dom.component` is initialized, it is possible to register `mapUpdate`
     * <br/>- **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!**
     * <br/>- It is also possible to register function to detect changes itself see examples
     * @returns {Boolean} If success `1`, else `0`.
     * @example
     * // SIMPLE example
     * const data_A= { a: "A" };
     * const data_A_update= { a: "AAA" };
     * const c= $dom.component("UL", null);
     *     c.add("LI", null)
     *          .onupdate(data_A, ({ a })=>({ textContent: a }));//`{ a }` add listener for "a"
     * c.mount(document.body);
     * c.update(data_A_update);
     * @example
     * // EXAMPLE WITH `mapUpdate`
     * const data_B= { a: { b: "A" }};
     * const data_B_update= { a: { b: "AAA" }};
     * const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
     *     c.add("LI", null)
     *          .onupdate(data_B, ({ a })=>({ textContent: a }));
     * c.mount(document.body);
     * c.update(data_B_update);
     * @example
     * // EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
     * const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
     *     c.add("LI", null)
     *          .onupdate({ a: 1 }, ({ a })=>({ textContent: a }));
     * c.mount(document.body);
     * c.update(({ a })=> { a: ++a });
     */
    function update(new_data){
        if(!internal_storage) return false;
        return internal_storage.update(typeof new_data==="function" ? new_data(internal_storage.getData()) : new_data);
    }
    
    /**
     * Methods returns if it was `onupdate` used
     * @method isStatic
     * @memberof module:jaaJSU~$dom~instance_component.share
     * @public
     * @return {Boolean} If there is some listeners `onupdate`
     */
    function isStatic(){
        return !internal_storage;
    }
    
};
/**
 * This is in fact argument for {@link module:jaaJSU~$dom~instance_componentAdd.on}.
 * 
 * In case of native events (e.g. "click"), is used `passive=true` and `this` refers to `{ update, getReference, removeEventListener }`.
 * @typedef component_listener
 * @memberof module:jaaJSU~$dom
 * @type {Array}
 * @param {String} 0 Name of method in {@link module:jaaJSU~$dom~instance_componentAdd}.
 * @param {Array} 1 In fact arguments for `on*` methods in {@link module:jaaJSU~$dom~instance_componentAdd} or arguments for [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
 * @category types descriptions
 * @inner
 */
/**
 * This provide more DRY way to register events listeners for {@link module:jaaJSU~$dom.component} such as `onupdate`, `oninit`, ….
 * @method componentListener
 * @memberof module:jaaJSU~$dom
 * @param {String} event_name Name of component event (prefered way is to use without `on*` like native `addEventListener` – e.g. "update") or native `EventListener` name.
 * @param {...Mixed} args See {@link module:jaaJSU~$dom~component_listener}[1].
 * @returns {module:jaaJSU~$dom~component_listener}
 */
$dom.componentListener= (function(){
    const internal_component_events= [ "oninit", "onmount", "onupdate" ];
    const EventListener_interface= {
        /*
         api: {},
         event_function: listener function,
         */
        registerListener: function(target_element, api, event_name, event_function, event_options= { passive: true }){
            this.api= { getReference: api.getReference, update: api.update, removeEventListener: this.removeEventListener.bind(this) };
            this.event_name= event_name;
            this.event_function= event_function;
            target_element.addEventListener(event_name, this, event_options);
        },
        removeEventListener: function(){ this.api.getReference().removeEventListener(this.event_name, this); },
        handleEvent: function(event){ this.event_function.call(this.api, event); }
    };
    
    return function(event_name, ...args){
        const event_name_id= internal_component_events.indexOf((/^on/g.test(event_name) ? "" : "on")+event_name);
        if(event_name_id===-1) return Object.freeze([ "oninit", [ function(el){ Object.create(EventListener_interface).registerListener(el, this, event_name, ...args); } ] ]);
        return Object.freeze([ internal_component_events[event_name_id], args ]);
    };
})();
/**
 * Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for {@link module:jaaJSU~$dom.assign}. There are some notes and changes:
 *  - In most cases, you can use native propertie such as [MDN WEB/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element).
 *  - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 *  - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 *  - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 *  - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 *  - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
 *  - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;
 *  - **IMPORTANT!**: There is difference between [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) and [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text), ….
 * @typedef DomAssignObject
 * @memberof module:jaaJSU~$dom
 * @category types descriptions
 * @inner
 * @type {Object}
 */
/**
 * Procedure for merging object into the element properties.
 * Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
 * It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).
 * @method assign
 * @memberof module:jaaJSU~$dom
 * @param {Element|Text} element See [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node).
 * @param {...module:jaaJSU~$dom~DomAssignObject} object_attributes
 * @returns {NodeElement} Givven `element` (follows similar behaviour in `Object.assign`)
 * @example <caption>#1: All together</caption>
 * const el= document.body;
 * const onclick= function(){ console.log(this.dataset.js_param); };
 * $dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
 * //result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
 * //console output on click: "CLICKED"
 * $dom.assign(el, { style: { color: "green" } });
 * //result HTML: <body style="color: green;" data-js_param="CLICKED">BODY</body>
 * //console output on click: "CLICKED"
 * @example <caption>#2 **\*.classList.toggle**</caption>
 * const el= document.body;
 * $dom.assign(el, { classList: { testClass: -1 } });
 * //result HTML: <body class="testClass">…</body>
 * $dom.assign(el, { classList: { testClass: -1 } });
 * //result HTML: <body class="">…</body>
 * 
 * $dom.assign(el, { classList: { testClass: true } });//or 1
 * //result HTML: <body class="testClass">…</body>
 * $dom.assign(el, { classList: { testClass: false } });//or 0
 * //result HTML: <body class="">…</body>
 * //...
 * @example <caption>#3 Links and images</caption>
 * $dom.assign(A_ELEMENT, { href: "www.google.com" });//=> <a href="www.google.com" …
 * $dom.assign(IMG_ELEMENT, { src: "image.png" });//=> <img src="image.png" …
 */
$dom.assign= function(element, ...objects_attributes){
    const object_attributes= Object.assign({}, ...objects_attributes);
    const object_attributes_keys= Object.keys(object_attributes);
    for(let i=0, key, attr, i_length= object_attributes_keys.length; i<i_length; i++){
        key= object_attributes_keys[i];
        attr= object_attributes[key];
        if(typeof attr==="undefined"){ if(Reflect.has(element, key)){ Reflect.deleteProperty(element, key); } continue; }
        switch(key){
            case "style":
                if(typeof attr==="string") element.setAttribute("style", attr);
                else for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                break;
            case "style_vars":
                for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                break;
            case "classList":
                if(!element[key].toggle) break;
                for(let k=0, k_key, k_attr, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){
                    k_key= k_keys[k]; k_attr= attr[k_key];
                    if(k_attr===-1) element.classList.toggle(k_key);
                    else element.classList.toggle(k_key, Boolean(k_attr));
                }
                break;
            case "dataset":
                for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.dataset[k_key]= attr[k_key]; }
                break;
            case "href" || "src" || "class":
                element.setAttribute(key, attr);
                break;
            default:
                element[key]= attr;
                break;
        }
    }
    return element;
};
/**
 * Procedure for merging object into the element properties (see `html` version {@link module:jaaJSU~$dom.assign}).
 * @method assignNS
 * @memberof module:jaaJSU~$dom
 * @param {string} namespace_group Group representation of [`namespace`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS), use "__SVG__" for setting attributes for `svg`s.
 * @param {NodeElement} element
 * @param {...module:jaaJSU~$dom~DomAssignObject} object_attributes
 * @returns {NodeElement} Givven `element` (follows similar behaviour in `Object.assign`)
 */
$dom.assignNS= function(namespace, element, ...objects_attributes){
    const on_keys_regexp= /^on[a-z]+/;
    const object_attributes= Object.assign({}, ...objects_attributes);
    const object_attributes_keys= Object.keys(object_attributes);
    for(let i=0, key, attr, i_length= object_attributes_keys.length; i<i_length; i++){
        key= object_attributes_keys[i];
        attr= object_attributes[key];
        if(typeof attr==="undefined"){ if(element.hasAttributeNS(null, key)){ element.removeAttributeNS(null, key); } continue; }
        switch(key){
            case "textContent" || "innerText":
                element.appendChild(document.createTextNode(attr));
                break;
            case "style":
                if(typeof attr==="string") element.setAttributeNS(null, "style", attr);
                else for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                break;
            case "style_vars":
                for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                break;
            case "className":
                element.setAttributeNS(null, "class", attr);
                break;
            case "classList":
                if(!element[key].toggle) break;
                for(let k=0, k_key, k_attr, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){
                    k_key= k_keys[k]; k_attr= attr[k_key];
                    if(k_attr===-1) element.classList.toggle(k_key);
                    else element.classList.toggle(k_key, Boolean(k_attr));
                }
                break;
            case "xlink:href":
                element.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", attr);
                break;
            default:
                if(on_keys_regexp.test(key)) element[key]= attr;
                else element.setAttributeNS(null, key, attr);
                break;
        }
    }
    return element;
};

/**
 * Procedure for adding elements into the `parent` (in background use `createDocumentFragment`, `createElement`, `appendChild`)
 * @method add
 * @memberof module:jaaJSU~$dom
 * @deprecated Please use {@link module:jaaJSU~$dom.component}
 * @param {NodeElement} parent Wrapper (for example `<ul>`) where to cerate children elements (for example `<li>`)
 * @param $$$ {...Array}
 *  <br/>* `[ [ __NAME__, __PARAMS__ ], [ __NAME__, __PARAMS__ ], ..., [ __NAME__, __PARAMS__ ] ]`
 *  <br/>* Element in array is automatically nested into the previous element. `[["UL",...], ["LI",...], ["SPAN",...]]` creates `<ul><li><span></span></li></ul>`
 *  <br/>* `__NAME__` **\<String\>**: Name of element (for example `LI`, `P`, `A`, ...)
 *  <br/>* `__PARAMS__` **\<Object\>**: Parameters for elements as "innerText", "className", "dataset", ...
 *  <br/>    * see {@link module:jaaJSU~$dom.assign}
 *  <br/>    * There is one change with using key "$", which modify elements order and it is not parsed by {@link module:jaaJSU~$dom.assign}
 *  <br/>        * `__PARAMS__.$`: Modify nesting behaviur (accepts index of element in `$$$`). `[["UL",...], ["LI",...], ["LI",{$:0,...}]]` creates `<ul><li></li><li></li></ul>`
 * @return {NodeElement} First created element (usualy wrapper thanks nesting)
 * @example
 * $dom.add(ul_element,[
 *     ["LI", {className: "nejake-tridy", onclick: clickFCE}],
 *         ["SPAN", {innerText: "Prvni SPAN v LI"}],
 *         ["SPAN", {$:0, innerText: "Druhy SPAN v LI"}]
 * ]);
 * // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI</span><span>Druhy SPAN v LI</span></li></ul>
 * // !!! VS !!!
 * $dom.add(ul_element,[
 *     ["LI", {className: "nejake-tridy", onclick: clickFCE}],
 *         ["SPAN", {innerText: "Prvni SPAN v LI"}],
 *             ["SPAN", {innerText: "Druhy SPAN v LI"}]
 * ]);
 * // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI<span>Druhy SPAN v LI</span></span></li></ul>
 */
$dom.add= function(parent,$$$){
    let fragment= document.createDocumentFragment();
    let prepare_els= [], els= [];
    for(var i=0, i_length= $$$.length; i<i_length;i++){
        prepare_els[i]= document.createElement($$$[i][0]);
        if(!i) els[i]= fragment.appendChild(prepare_els[i]);
        else if(typeof $$$[i][1].$!=="undefined"){
            els[i]= els[$$$[i][1].$].appendChild(prepare_els[i]);
            delete $$$[i][1].$;
        }
        else els[i]= els[i-1].appendChild(prepare_els[i]);
        $dom.assign(els[i], $$$[i][1]);
    }
    parent.appendChild(fragment);
    if(i) return els[0];
};