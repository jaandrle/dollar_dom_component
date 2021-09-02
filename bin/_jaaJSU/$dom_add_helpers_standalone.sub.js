/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxcomplexity: 19, maxparams: 5, maxdepth: 3 */
/* $dom *//* global $dom */
/* standalone= "standalone"; */
const component_utils= Object.freeze({
    registerToMap: function(store, current, indexGenerator){
        let current_index= -1;
        for(const [i, v] of store){
            if(v===current) current_index= i;
            if(current_index!==-1) break;
        }
        if(current_index!==-1) return current_index;
        current_index= indexGenerator();
        store.set(current_index, current);
        return current_index;
    },
    indexGenerator: (index= 0)=> ()=> index++
});
const $dom_emptyPseudoComponent= (function(){
    const share= { mount, update, destroy, ondestroy, isStatic };
    let component_out= { add, component, mount, update, ondestroy, share };
    return component_out;
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
const special_components_names= { empty: [ "", "empty" ], fragment: [ "<>", "fragment" ] };
function isInternalElement( target, candidate, safe_only ){
    const [ short, long ]= special_components_names[target];
    if(safe_only) return short===candidate;
    return short===candidate||long===candidate.toLowerCase();
} 
$dom.component= function(el_name, attrs, { mapUpdate, namespace_group, safe_el_name_only }={}){
    if(!el_name||isInternalElement("empty", el_name, safe_el_name_only)) return $dom_emptyPseudoComponent;
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
        getReference: function(add_out, el){ return el; },
        on: function(add_out, el, ...listeners){
            listeners.forEach(([ event_name, args ]= [])=> event_name && add_out[event_name].apply(this, args));
            return add_out;
        },
        oninit: function(add_out, el, fn){ fn.call(add_out, el); return add_out; },
        onmount: function(add_out, el, onMountFunction){
            if(!on_mount_funs) on_mount_funs= new Map();
            on_mount_funs.set(el, onMountFunction);
            return add_out;
        },
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
    if(!isInternalElement("fragment", el_name, safe_el_name_only)) return add(el_name, attrs);
    recalculateDeep(0);
    container= els[0]= document.createDocumentFragment();
    all_els_counter+= 1;
    return component_out;
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
        
        add_out.getReference= add_out_methods.getReference.bind(null, add_out, el);
        add_out.on= add_out_methods.on.bind(null, add_out, el);
        add_out.oninit= add_out_methods.oninit.bind(null, add_out, el);
        add_out.onmount= add_out_methods.onmount.bind(null, add_out, el);
        add_out.onupdate= add_out_methods.onupdate.bind(null, add_out, el);
        return add_out;
    }
    
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
    
    function component({ mount, update, isStatic: isStaticCandidate, destroy: destroyCandidate }, shift= 0){
        recalculateDeep(shift);
        const el_parent= getParentElement();
        els[all_els_counter]= mount(el_parent);
        if(el_parent instanceof DocumentFragment) ondestroy(destroyCandidate);
        if(!isStaticCandidate()){
            if(isStatic()) internal_storage= initStorage();
            internal_storage.registerComponent(update);
        }
        all_els_counter+= 1;
        return component_out;
    }
    
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
        let parent_node;
        switch ( type ) {
            case "replace":
                parent_node= element.parentNode;
                $dom.replace(element, container);
                break;
            case "replaceContent":
                $dom.empty(element);
                element.appendChild(container);
                parent_node= element;
                break;
            case "before":
                parent_node= element.parentNode;
                parent_node.insertBefore(container, element);
                break;
            case "after":
                $dom.insertAfter(container, element);
                parent_node= element.parentNode;
                break;
            default:
                if(type==="childFirst" && element.childNodes.length) element.insertBefore(container, element.childNodes[0]);
                else element.appendChild(container);
                parent_node= element;
                break;
        }
        if(!(element instanceof DocumentFragment)){//TODO/WIP
            const [ el_c, el_p ]= __observedEls(container, parent_node);
            observer= new MutationObserver(mutations=> mutations.forEach(function(record){
                if(!record.removedNodes||Array.prototype.indexOf.call(record.removedNodes, el_c)===-1) return false;
                destroy();
            }));
            observer.observe(el_p, { childList: true, subtree: true, attributes: false, characterData: false });
        }
        if(on_mount_funs){
            on_mount_funs.forEach(onMountFunctionCall);
            on_mount_funs= undefined;
        }
        
        function __observedEls(container, parent_node){
            if(!(container instanceof DocumentFragment)) return [ container, parent_node ];
            return [ parent_node, parent_node.parentNode ];
        }
        return container;
        function onMountFunctionCall(onMountFunction, el){ return assign(el, onMountFunction.call(el, element, type)); }
    }
    
    function destroy(){
        console.log('ZDE'); /* jshint devel: true *///gulp.keep.line
        if(on_destroy_funs){
            on_destroy_funs.forEach(onDestroyFunction=> onDestroyFunction.call(container));
        }
        if(container) {
            if(!(container instanceof DocumentFragment)) container.remove();
            els= [];
        }
        if(observer) observer.disconnect();
        observer= undefined;
        on_destroy_funs= undefined;
        assign= undefined;
        createElement= undefined;
        container= undefined;
        if(internal_storage&&internal_storage.clear){
            internal_storage.clear();
            internal_storage= undefined;
        }
        component_out= undefined;
        add_out_methods= undefined;
        return null;
    }
    
    function ondestroy(onDestroyFunction){
        if(!on_destroy_funs) on_destroy_funs= new Set();
        on_destroy_funs.add(onDestroyFunction);
        return component_out;
    }
    
    function recalculateDeep(shift){
        if(!shift) deep.push(all_els_counter);
        else { deep.splice(deep.length+1+shift); deep[deep.length-1]= all_els_counter; }
    }
    
    function getParentElement(){
        return els[deep[deep.length-2]] || container;
    }
    
    function setShift(shift= 0){
        let last;
        if(!shift){ last= deep.pop(); deep.push(last, last); }
        else deep.splice(deep.length+1+shift);
        return component_out;
    }
    
    function initStorage(){
        const
            { registerToMap, indexGenerator }= component_utils;
        let /* storage for component, functions for updates and mapping data keys and corresponding elements */
            data, components, els, functions, listeners, getIndex;
        internalVars(indexGenerator(0));
        return {
            register: function(el, init_data, fun){
                Object.assign(data, init_data);
                const ids= registerToMap(els, el, getIndex)+"_"+registerToMap(functions, fun, getIndex);
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
            clear: function(){
                internalVars();
            },
            getData: function(){
                return data;
            },
            unregister
        };
        function internalVars(initIndex){
            data= {};
            
            components= [];
            els= new Map();
            
            functions= new Map();
            listeners= new Map();
            
            getIndex= initIndex;
        }
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
    }
    
    function update(new_data){
        if(!internal_storage) return false;
        return internal_storage.update(typeof new_data==="function" ? new_data(internal_storage.getData()) : new_data);
    }
    
    function isStatic(){
        return !internal_storage;
    }
    
};
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