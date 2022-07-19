/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global deep, els, container */
function getParentElement(){
	return els[deep[deep.length-2]] || container;
}
