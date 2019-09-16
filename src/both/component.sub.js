/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement, initStorage */
/* internal vars *//* global all_els_counter: true, internal_storage: true */
/* global els, component_out */
/**
 * Method for including another component by usint its `share` key.
 * @method component
 * @memberof $dom.types.Component
 * @public
 * @param {$dom.types.Component.share} share
 * @param {Number} shift see {@link $dom.types.Component.add}
 * @return {$dom.types.Component}
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