/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global container */
/**
 * Method remove element form live DOM and returns null
 * @method destroy
 * @memberof $dom.types.Component.share
 * @public
 * @returns {Null}
 * @example
 * let c= $dom.component("DIV", null);
 * c.mount(document.body, "replaceContent");
 * c= c.share.destroy();
 * //=> c===null AND <body></body>
 */
function destroy(){
    container.remove();
    return null;
}