/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement, assign, createElement */
/* internal vars *//* global all_els_counter: true, container: true, add_out_methods */
/* out *//* global els, component_out */
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
    gulp_place("both/add_out_methods_registration.sub.js");/* global gulp_place */
    return add_out;
}
