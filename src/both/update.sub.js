/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global internal_storage */
/**
 * Method updates all registered varibles by keys `onupdates` and calls follower functions
 * @method update
 * @memberof $dom.types.Component
 * @public
 * @param {Object|Function} new_data
 * <br/>- When `$dom.component` is initialized, it is possible to register `mapUpdate`
 * <br/>- **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!**
 * <br/>- It is also possible to register function to detect changes itself see examples
 * @example
 *      // SIMPLE example
 *      const data_A= { a: "A" };
 *      const data_A_update= { a: "AAA" };
 *      const { add, mount, update }= $dom.component("UL", null);
 *          add("LI", null).onupdate(data_A, ({ a })=>({ textContent: a }));//`[ { a },` add listener for "a"
 *      mount(document.body);
 *      update(data_A_update);
 *      // EXAMPLE WITH `mapUpdate`
 *      const data_B= { a: { b: "A" }};
 *      const data_B_update= { a: { b: "AAA" }};
 *      const { add, mount, update }= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
 *          add("LI", null).onupdate(data_B, ({ a })=>({ textContent: a }));//`[ { a },` add listener for "a" see `mapUpdate`
 *      mount(document.body);
 *      update(data_B_update);
 *      // EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
 *      const { add, mount, update }= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
 *          add("LI", null).onupdate({ a: 1 }, ({ a })=>({ textContent: a }));//`[ { a },` add listener for "a" see `mapUpdate`
 *      mount(document.body);
 *      update(({ a })=> { a: ++a });
 */
function update(new_data){
    if(!internal_storage) return false;
    return internal_storage.update(typeof new_data==="function" ? new_data(internal_storage.getData()) : new_data);
}