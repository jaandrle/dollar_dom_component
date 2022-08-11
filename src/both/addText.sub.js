/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement */
/* internal vars *//* global all_els_counter: true */
/* global component_out, els */
function addText(text= "", shift= 0){
	recalculateDeep(shift);
	const text_node= document.createTextNode(text);
	let el= els[all_els_counter]= getParentElement().appendChild(text_node);
	all_els_counter+= 1;
	const add_out= Object.create(component_out);
	gulp_place("both/add_out_methods_registration.sub.js");/* global gulp_place */
	return add_out;
}
