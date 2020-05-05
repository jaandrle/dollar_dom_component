/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxparams: 5 */
/* global $dom */
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
            console.log(event_options); /* jshint devel: true *///gulp.keep.line
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