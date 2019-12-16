/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global container: true, internal_storage: true, component_out: true, on_mount_funs: true, add_out_methods: true, els: true */
/**
 * Method remove element form live DOM and returns null
 * @method destroy
 * @memberof module:jaaJSU~$dom~instance_component.share
 * @public
 * @returns {Null}
 * @example
 * let c= $dom.component("DIV", null);
 * c.mount(document.body, "replaceContent");
 * c= c.share.destroy();
 * //=> c===null AND <body></body>
 */
function destroy(){
    if(container) {
        container.remove();
        container= null;
        els= [];
    }
    if(internal_storage) internal_storage= null;
    if(component_out) component_out= null;
    if(add_out_methods) add_out_methods= null;
    if(on_mount_funs) on_mount_funs= null;
    return null;
}