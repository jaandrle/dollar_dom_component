/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global deep */
/**
 * Method provide way to change nesting behaviour. It can be helpful for loops
 * @method setShift
 * @memberof Component
 * @public
 * @param {Number} shift
 *  - see [`add`](#componentadd)
 * @example
 *      function testNesting(){
 *          const { add, setShift, share }= $dom.component("DIV", null);
 *              setShift(0);
 *          for(let i= 0; i<5; i++){
 *              add("P", { textContent: `Paragraph no. ${i}.` }, -1);
 *          }
 *          return share;
 *      }
 */
function setShift(shift= 0){
    let last;
    if(!shift){ last= deep.pop(); deep.push(last, last); }
    else deep.splice(deep.length+1+shift);
}