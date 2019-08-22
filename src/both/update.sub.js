/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global internal_storage */
/**
 * Method updates all registered varibles by keys `onupdates` and calls follower functions
 * @method update
 * @public
 * @param {Object} new_data
 *  - When `$dom.component` is initialized, it is possible to register `mapUpdate`
 *  - **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!**
 * @example
 *      const data_A= { a: "A" };
 *      const data_A_update= { a: "AAA" };
 *      const { add, mount, update }= $dom.component("UL", null);
 *          add("LI", { onupdate: [ { a }, ({ a })=>({ textContent: a }) ] });//`[ { a },` add listener for "a"
 *      mount(document.body);
 *      update(data_A_update);
 *      //BUT
 *      const data_B= { a: { b: "A" }};
 *      const data_B_update= { a: { b: "AAA" }};
 *      const { add, mount, update }= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
 *          add("LI", { onupdate: [ { a: data_B.a.b }, ({ a })=>({ textContent: a }) ] });//`[ { a },` add listener for "a"
 *      mount(document.body);
 *      update(data_B_update);
 */
function update(new_data){
    if(!internal_storage) return false;
    return internal_storage.update(typeof new_data==="function" ? new_data(internal_storage.getData()) : new_data);
}