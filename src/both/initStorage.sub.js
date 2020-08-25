/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxdepth: 3 */
/* parent *//* global assign, mapUpdate, component_utils */
/**
 * Initialize internal storage
 * @method initStorage
 * @memberof module:jaaJSU~$dom~instance_component
 * @private
 * @returns {Object} `{ register, registerComponent, update, unregister}`
 */
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