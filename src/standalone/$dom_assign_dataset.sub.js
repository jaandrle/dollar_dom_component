/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global attr, element */
for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.dataset[k_key]= attr[k_key]; }
