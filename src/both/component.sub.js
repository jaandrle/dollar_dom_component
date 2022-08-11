/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* public methods *//* global isStatic */
/* internal methods *//* global recalculateDeep, getParentElement, initStorage, ondestroy */
/* internal vars *//* global all_els_counter: true, internal_storage: true */
/* global els, component_out */
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
