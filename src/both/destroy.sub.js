/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global container, internal_storage: true, component_out: true */
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
    if(container) container.remove();
    if(internal_storage) internal_storage= null;
    if(component_out) component_out= null;
    return null;
}