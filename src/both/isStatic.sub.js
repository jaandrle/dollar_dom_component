/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global internal_storage */
/**
 * Methods returns if it was `onupdate` used
 * @method isStatic
 * @memberof module:jaaJSU~$dom.Component.share
 * @public
 * @return {Boolean} If there is some listeners `onupdate`
 */
function isStatic(){
    return !internal_storage;
}