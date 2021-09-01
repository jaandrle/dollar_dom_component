/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement, setShift */
/* global component_out, add_out_methods */
function dynamicComponent(data, generator, shift= 0){
    recalculateDeep(shift);
    const parent= getParentElement();
    let current_value= null, current_component= null, current_element= null;
    gulp_place("${app.standalone}/dynamicComponent_mount.sub.js", "file");/* global gulp_place, mount */
    return add_out_methods.onupdate(component_out, parent, data, function(data){
        current_value= generator.call(parent, mount, current_component, data, current_value);
    });
}