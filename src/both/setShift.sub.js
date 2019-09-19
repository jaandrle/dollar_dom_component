/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global deep, component_out */
/**
 * Method provide way to change nesting behaviour. It can be helpful for loops
 * @method setShift
 * @memberof module:jaaJSU~$dom~instance_component
 * @public
 * @chainable
 * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
 * @returns {module:jaaJSU~$dom~instance_component}
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
    return component_out;
}