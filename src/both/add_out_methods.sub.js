/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxparams: 4 */
/* internal methods *//* global initStorage, assign */
/* internal vars *//* global on_mount_funs: true, internal_storage: true */
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
