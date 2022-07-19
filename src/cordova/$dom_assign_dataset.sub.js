/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global attr, element, __internal_switch_values_holder, active_page */
for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){
	k_key= k_keys[k];
	if(k_key==="jsif_var"&&element.dataset.cmd!=="condition-changeval") element.dataset.jsif_eq= attr.jsif_val.indexOf(__internal_switch_values_holder.get(active_page+attr.jsif_var)) !== -1;
	element.dataset[k_key]= attr[k_key];
}
