/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
init(window);
function init(global){
    "use strict";
    /**
     * This NAMESPACE provides features for DOM elemnts.
     * @class $dom.{namespace}
     * @static
     */
    let $dom= {
        /**
         * Procedure removes all children of `container`
         * @method empty
         * @param {NodeElement} container
         */
        empty: function(container){
            let len= container.childNodes.length;
            while(len--){ container.removeChild(container.lastChild); }
        },
        /**
         * Procedure places `new_element` after `reference` elements
         * @method insertAfter
         * @param {NodeElement} new_element
         * @param {NodeElement} reference
         */
        insertAfter: function(new_element, reference){
            const { parentNode, nextSibling }= reference;
            if(nextSibling) parentNode.insertBefore(new_element, nextSibling);
            else parentNode.appendChild(new_element);
        },
        /**
         * Procedure replaces `el_old` element by new one (`new_el`)
         * @method replace
         * @param {NodeElement} el_old
         * @param {NodeElement} el_new
         */
        replace: function(el_old, el_new){
            $dom.insertAfter(el_new, el_old);
            el_old.remove();
        }
    };
    /**
     * This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.
     * @class $dom.component
     * @constructor
     * @param {String} el_name
     *  - Name of element (for example `LI`, `P`, `A`, ...).
     *  - This is parent element of component.
     * @param {Object} attrs
     *  - The second argument for [`$dom.assign`](./$dom.{namespace}.html#methods_assign)
     *  - There is one change. It is supported using `onupdate` key ... see [`add`](#methods_add)
     *      - `onupdate` is array `[ object, function]`, the function is called during creating element and evry `update`calls
     *      - It returns additional `attrs`, for example this `attrs`: `{ className: "class", onupdate: [ { a }, _=>({ textContent: a }) ] }` => final `attrs= { className: "class", textContent: "A" }` (if `a="A"`)
     *      - it use similar algorithm like [`$dom.assign`](./$dom.{namespace}.html#methods_assign) (**no deep copy!!!**)
     * @param {Object} params
     * @param {Function|Boolean} params.mapUpdate
     *  - `[params.mapUpdate=undefined]`
     *  - This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` ... see [`add`](#methods_add)
     * @return {$dom.component}
     *  - 'functional class instance': object `{ add, component, mount, update, share }`
     *  - `share` is Object for transfering methods somewhere else (like for using in another component, see [`component`](#methods_component))
     *      - `share= { mount, update, destroy, isStatic }`
     */
    /** */
    $dom.component= function(el_name, attrs, { mapUpdate }={}){
        let /* holds `initStorage()` if `onupdate` was registered */
            internal_storage= null;
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
        add(el_name, attrs);
        const share= { mount, update, destroy, isStatic };
        return { add, component, mount, update, share };
        /**
         * This add element to component
         * @method add
         * @public
         * @param {String} el_name
         *  - Name of element (for example `LI`, `P`, `A`, ...).
         * @param {Object} attrs
         *  - `null|undefined` is also supported (`null` is probably recommendet for better readability)
         *  - The second argument for [`$dom.assign`](./$dom.{namespace}.html#methods_assign)
         * @param {Array} attrs.onupdate
         *  - Pattern: `attrs.onupdate= [ Values: Object, Retuns_attrs_keys: Function ]`
         *  - This register listener/subscriber function (`Retuns_attrs_keys`) for keys (variables) in `Values`
         *  - Example: `[ {counter}, _=>({ textContent: counter }) ]` registers listerner to `counter`. When the `udate({ ... counter: something, ...})` is called this element changes `textContent`.
         *  - See [`update`](#methods_update)
         * @param {Number} [shift= 0]
         *  - Modify nesting behaviur. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
         * @example
         *      //#1
         *      const UL= document.getElementById('SOME UL');
         *      const { add }= $dom.component("LI", { className: "list_item" });//<li class="list_item">...</li>
         *      add("DIV", { textContent: "Child of .list_item", className: "deep1" });//<li class="list_item"><div class="deep1">...</div></li>
         *          add("DIV", { textContent: "Child of div.deep1", className: "deep2" });//...<div class="deep1"><div class="deep2">...</div></div>...
         *              add("DIV", { textContent: "Child of div.deep2", className: "deep3" });//...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
         *              add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);//...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
         *      //next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
         *          add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);//this is on 2nd level
         *      add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);//this is on 0 level
         *          add("DIV", null); // just DIV without attributes
         *      ...
         */
        function add(el_name, attrs, shift= 0){
            recalculateDeep(shift);
            attrs= attrs || {};
            const prepare_el= document.createElement(el_name);
            if(!all_els_counter) container= els[0]= fragment.appendChild(prepare_el);
            else els[all_els_counter]= els[getParentIndex()].appendChild(prepare_el);
            let el= els[all_els_counter];
            if(attrs.onupdate){
                if(!internal_storage) internal_storage= initStorage();
                attrs_assign(attrs, internal_storage.register(el, ...attrs.onupdate));
                delete attrs.onupdate;
            }
            all_els_counter++;
            $dom.assign(el, attrs);
            return el;
        }
        /**
         * Method for including another component by usint its `share` key.
         * @method component
         * @public
         * @param {Object} share
         * @param {Number} shift
         *  - see [`add`](#methods_add)
         */
        function component({ mount, update, isStatic }, shift= 0){
            recalculateDeep(shift);
            els[all_els_counter]= mount(els[getParentIndex()]);
            if(!isStatic()){
                if(!internal_storage) internal_storage= initStorage();
                internal_storage.registerComponent(update);
            }
            all_els_counter+= 1;
        }
        /**
         * Add element to live DOM
         * @method mount
         * @public
         * @param {NodeElement} element
         *  - Element where to places this component
         * @param {String} [type= "childLast"]
         *  - Change type of mounting
         *  - `childLast` places component as last child
         *  - `childFirst` places component as first child
         *  - `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)
         *  - `replace` replaces `element` by component
         *  - `before` places component before `element`
         *  - `after` places component after `element` (uses `$dom.insertAfter`)
         */
        function mount(element, type= "childLast"){
            switch ( type ) {
                case "replace":
                    $dom.replace(element, fragment);
                    break;
                case "replaceContent":
                    $dom.empty(element);
                    element.appendChild(fragment);
                    break;
                case "before":
                    element.parentNode.insertBefore(fragment, element);
                    break;
                case "after":
                    $dom.insertAfter(fragment, element);
                    break;
                default:
                    if(type==="childFirst" && element.childNodes.length) element.insertBefore(fragment, element.childNodes[0]);
                    else element.appendChild(fragment);
                    break;
            }
            return container;
        }
        /**
         * Method remove element form live DOM and returns null
         * @method destroy
         * @public
         * @example
         *  let { share: test }= $dom.component("DIV", null);
         *  test.mount(document.body);
         *  test= test.destroy();
         */
        function destroy(){
            container.remove();
            return null;
        }
        /**
         * Updates `deep`
         * @private
         * @method recalculateDeep
         * @param {Number} shift
         *  - see [`add`](#methods_add)
         */
        function recalculateDeep(shift){
            if(!shift) deep.push(all_els_counter);
            else { deep.splice(deep.length+1+shift); deep[deep.length-1]= all_els_counter; }
        }
        /**
         * Returns current `deep` (last element in array)
         * @method getParentIndex
         * @private
         */
        function getParentIndex(){
            return deep[deep.length-2];
        }
        /**
         * Initialize internal storage
         * @method initStorage
         * @private
         * @returns {Object}
         *  - `{ register, registerComponent, update, unregister}`
         */
        function initStorage(){
            const /* storage for component, functions for updates and mapping data keys and corresponding elements */
                data= {},
                components= [], els= new Map(),
                functions= new Map(),
                listeners= new Map();
            let 
                els_counter= 0;
            return {
                register: function(el, init_data, fun){
                    Object.assign(data, init_data);
                    const el_id= els_counter++; els.set(el_id,el);
                    const init_data_keys= Object.keys(init_data);
                    for(let i=0, i_key, i_length= init_data_keys.length; i<i_length; i++){
                        i_key= init_data_keys[i];
                        if(!listeners.has(i_key)) listeners.set(i_key, [ el_id ]);
                        else listeners.set(i_key, [ ...listeners.get(i_key), el_id ]);
                    }
                    functions.set(el_id, fun);
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
                    
                    function processChanges(el_id){
                        const new_attrs= functions.get(el_id).call(els.get(el_id), data) || {};
                        const el= els.get(el_id);
                        if(el.parentNode===null) return unregister(el_id, new_data_keys);
                        else $dom.assign(el, new_attrs);
                    }
                },
                unregister
            };
            function unregister(el_id, data_keys){
                functions.delete(el_id);
                els.delete(el_id);
                for(let i=0, i_key, listener, i_length= data_keys.length; i<i_length; i++){
                    i_key= data_keys[i];
                    listener= listeners.get(i_key);
                    if(listener.length===1) listeners.delete(i_key);
                    else listeners.set(i_key, listener.filter(el_idFilter));
                }
                function el_idFilter(v){ return v!==el_id; }
            }
        }
        /**
         * Method updates all registered varibles by keys `onupdates` and calls follower functions
         * @method update
         * @public
         * @param {Object} new_data
         *  - When `$dom.component` is initialized, it is possible to register `mapUpdate`
         *  - **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!**
         * @example
         *      const data_A= { a: "A" };
         *      const data_A_update= { a: "AAA" };
         *      const { add, mount, update }= $dom.component("UL", null);
         *          add("LI", { onupdate: [ { a }, ({ a })=>({ textContent: a }) ] });//`[ { a },` add listener for "a"
         *      mount(document.body);
         *      update(data_A_update);
         *      //BUT
         *      const data_B= { a: { b: "A" }};
         *      const data_B_update= { a: { b: "AAA" }};
         *      const { add, mount, update }= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         *          add("LI", { onupdate: [ { a: data_B.a.b }, ({ a })=>({ textContent: a }) ] });//`[ { a },` add listener for "a"
         *      mount(document.body);
         *      update(data_B_update);
         */
        function update(new_data){
            if(!internal_storage) return false;
            return internal_storage.update(new_data);
        }
        /**
         * Methods returns if it was `onupdate` used
         * @method isStatic
         * @public
         * @return {Boolean}
         *  - If there is some listeners `onupdate`
         */
        function isStatic(){
            return !internal_storage;
        }
        function attrs_assign(attrs_A, attrs_B){
            const attrs_B_keys= Object.keys(attrs_B);
            for(let i=0, key, attr, i_length= attrs_B_keys.length; i<i_length; i++){
                key= attrs_B_keys[i];
                attr= attrs_B[key];
                switch(key){
                    case "style":
                        if(typeof attr==="string"){
                            attrs_A[key]= attr;
                        } else {
                            if(typeof attrs_A[key]!=="object") attrs_A[key]= {};
                            for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; attrs_A[key][k_key]= attr[k_key]; }
                        }
                        break;
                    case "style_vars":
                        if(typeof attrs_A[key]!=="object") attrs_A[key]= {};
                        for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; attrs_A[key][k_key]= attr[k_key]; }
                        break;
                    case "dataset":
                        if(typeof attrs_A[key]!=="object") attrs_A[key]= {};
                        for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; attrs_A[key][k_key]= attr[k_key]; }
                        break;
                    default:
                        attrs_A[key]= attr;
                        break;
                }
            }
        }
    };
    /**
     * Procedure for merging object into the element properties.
     * Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
     * It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).
     * @method assign
     * @for $dom.{namespace}
     * @param {NodeElement} element
     * @param {Object} object_attributes
     *  - Object shall holds **NodeElement** properties like `className`, `textContent`, ...
     *  - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
     *  - The same notation can be used for **CSS variables** (the key is called `style_vars`).
     *  - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
     *  - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
     * @example
     *      const el= document.body;
     *      const onclick= function(){ console.log(this.dataset.js_param); };
     *      $dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
     *      //result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
     *      //console output on click: "CLICKED"
     */
    $dom.assign= function(element, object_attributes){
        const object_attributes_keys= Object.keys(object_attributes);
        for(let i=0, key, attr, i_length= object_attributes_keys.length; i<i_length; i++){
            key= object_attributes_keys[i];
            attr= object_attributes[key];
            if(typeof attr==="undefined"){ if(element[key]){ delete element[key]; } continue; }
            switch(key){
                case "style":
                    if(typeof attr==="string") element.setAttribute("style", attr);
                    else for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                    break;
                case "style_vars":
                    for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
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
    };
    global.$dom= $dom;
}
