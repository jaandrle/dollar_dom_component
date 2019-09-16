/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global deep */
/**
 * Method provide way to change nesting behaviour. It can be helpful for loops
 * @method setShift
 * @memberof $dom.types.Component
 * @public
 * @param {Number} [shift= 0] see {@link $dom.types.Component.add}
 * @example
 * function testNesting(){
 *     const c= $dom.component("DIV", null);
 *         c.setShift(0);
 *     for(let i= 0; i<5; i++){
 *         c.add("P", { textContent: `Paragraph no. ${i}.` }, -1);
 *     }
 *     return c.share;
 * }
 * //=> div> 5*p
 * @example
 * function testNesting(){
 *     const c= $dom.component("DIV", null);
 *     for(let i= 0; i<5; i++){
 *         c.add("P", { textContent: `Paragraph no. ${i}.` });
 *          //c.setShift();//or 0 => div> p> p> p> …
 *       //c.setShift(-1); => div> p> p> p> …
 *     c.setShift(-2);
 *     }
 *     return c.share;
 * }
 * //=> div> 5*p
 */
function setShift(shift= 0){
    let last;
    if(!shift){ last= deep.pop(); deep.push(last, last); }
    else deep.splice(deep.length+1+shift);
}