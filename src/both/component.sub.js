/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement, initStorage */
/* internal vars *//* global all_els_counter: true, internal_storage: true */
/* global els, component_out */
/**
 * Method for including another component by usint its `share` key.
 * @method component
 * @memberof module:jaaJSU~$dom.instance_component
 * @public
 * @chainable
 * @param {module:jaaJSU~$dom.instance_component.share} share
 * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom.instance_component.add}
 * @return {module:jaaJSU~$dom.instance_component}
 * @example
 * function p({ textContent }){
 *      const cP= $dom.component("P", { textContent });
 *      return cP.share;
 * }
 * const c= $dom.component("DIV", null);
 * for(let i=0; i<3; i++){ c.component(p({ textContent: i })); }
 * c.mount(document.body, "replaceContent");
 * //= <body><div><p>0</p><p>1</p><p>2</p></div></body>
 */
function component({ mount, update, isStatic }, shift= 0){
    recalculateDeep(shift);
    els[all_els_counter]= mount(getParentElement());
    if(!isStatic()){
        if(!internal_storage) internal_storage= initStorage();
        internal_storage.registerComponent(update);
    }
    all_els_counter+= 1;
    return component_out;
}