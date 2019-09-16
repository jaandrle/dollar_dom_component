/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global container */
/**
 * Method remove element form live DOM and returns null
 * @method destroy
 * @memberof ComponentShare
 * @public
 * @returns {Null}
 * @example
 *      let { share: test }= $dom.component("DIV", null);
 *      test.mount(document.body);
 *      test= test.destroy();
 */
function destroy(){
    container.remove();
    return null;
}