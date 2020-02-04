/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom, container: true, internal_storage: true, component_out: true, add_out_methods: true, els: true, on_destroy_funs: true, observer: true, assign: true, createElement: true */
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
    if(on_destroy_funs){
        on_destroy_funs.forEach(onDestroyFunction=> onDestroyFunction.call(container));
    }
    if(container) {
        container.remove();
        els= [];
    }
    if(observer) observer.disconnect();
    observer= undefined;
    on_destroy_funs= undefined;
    assign= undefined;
    createElement= undefined;
    container= undefined;
    internal_storage= undefined;
    component_out= undefined;
    add_out_methods= undefined;
    return null;
}