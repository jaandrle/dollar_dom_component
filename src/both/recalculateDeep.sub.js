/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global deep, all_els_counter, els, fragment */
/**
 * Updates `deep`
 * @private
 * @method recalculateDeep
 * @memberof Component
 * @param {Number} shift
 *  - see [`add`](#componentadd)
 */
function recalculateDeep(shift){
    if(!shift) deep.push(all_els_counter);
    else { deep.splice(deep.length+1+shift); deep[deep.length-1]= all_els_counter; }
}