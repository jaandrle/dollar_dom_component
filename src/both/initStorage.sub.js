/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom, mapUpdate */
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
        getData: function(){
            return data;
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