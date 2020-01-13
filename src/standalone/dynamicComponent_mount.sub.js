/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global current_component: true, current_element: true */
function mount(component_share){
    current_component= component_share;
    if(current_element){
        current_element= current_component.mount(current_element, "replace");
    } else {
        current_element= current_component.mount(parent);
    }
}