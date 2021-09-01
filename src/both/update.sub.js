/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global internal_storage */
function update(new_data){
    if(!internal_storage) return false;
    return internal_storage.update(typeof new_data==="function" ? new_data(internal_storage.getData()) : new_data);
}