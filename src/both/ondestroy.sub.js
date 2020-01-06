/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global on_destroy_funs: true, component_out */
/**
 * 
 * @method ondestroy
 * @memberof module:jaaJSU~$dom~instance_component
 * @public
 * @param {Function} fun Function will be called when the component will be destroyed.
 */
function ondestroy(onDestroyFunction){
    if(!on_destroy_funs) on_destroy_funs= new Set();
    on_destroy_funs.add(onDestroyFunction);
    return component_out;
}