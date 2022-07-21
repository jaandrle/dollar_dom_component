/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxcomplexity: 19, maxparams: 5, maxdepth: 3 */
init(window);
function init(global){
	"use strict";
	gulp_place("$dom_minimal_shim.sub.js"); /* global $dom, gulp_place */
	gulp_place("$dom_component.sub.js");
	global.$dom= $dom;
}
