/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal methods *//* global recalculateDeep, getParentElement, setShift */
/* global component_out, add_out_methods */
/**
 * Method for including another component by using `generator` function, which can change final `component` based on updated data `data`.
 * @method dynamicComponent
 * @memberof module:jaaJSU~$dom~instance_component
 * @public
 * @chainable
 * @param {Object} data Includes all subsribed keys from `data` see method {@link module:jaaJSU~$dom~instance_componentAdd.onupdate}
 * @param {module:jaaJSU~$dom~componentGenerator} generator Function for registering components based on updates of `data`.
 * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
 * @return {module:jaaJSU~$dom~instance_component}
 */
function dynamicComponent(data, generator, shift= 0){
    recalculateDeep(shift);
    const parent= getParentElement();
    setShift(1);
    let current_value= null, current_component= null, current_element= null;
    gulp_place("${app.standalone}/dynamicComponent_mount.sub.js", "file");/* global gulp_place, mount */
    return add_out_methods.onupdate(component_out, parent, data, function(data){
        /**
         * This is function for registering component for {@link module:jaaJSU~$dom~instance_component.dynamicComponent}.
         * @callback componentGenerator
         * @memberof module:jaaJSU~$dom
         * @category types descriptions
         * @inner
         * @param {Function} mount Function which consumes {@link module:jaaJSU~$dom~instance_component.share}.
         * @param {Null|module:jaaJSU~$dom~instance_component.share} current_component Previously registered component
         * @param {Object} data Includes all subsribed keys from `data` see method {@link module:jaaJSU~$dom~instance_componentAdd.onupdate}
         * @param {Null|Mixed} current_value Shared value across multiple calling
         * @returns {Mixed} current_value 
         */
        current_value= generator.call(parent, mount, current_component, data, current_value);
    });
}