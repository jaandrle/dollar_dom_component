/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global deep, component_out */
function setShift(shift= 0){
    let last;
    if(!shift){ last= deep.pop(); deep.push(last, last); }
    else deep.splice(deep.length+1+shift);
    return component_out;
}