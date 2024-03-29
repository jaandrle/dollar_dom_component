/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxparams: 5 */
/* global $dom */
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
