/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
init(window);
function init(global){
    "use strict";
    gulp_place("$dom_minimal_shim.sub.js"); /* global $dom, gulp_place */
    /* standalone= gulp_place("app.standalone=`standalone`", "variable"); */
    gulp_place("$dom_component.sub.js");
    global.$dom= $dom;
}