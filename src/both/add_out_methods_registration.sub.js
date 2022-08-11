/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* internal vars *//* global add_out_methods */

/* parent *//* global add_out, el */
add_out.getReference= add_out_methods.getReference.bind(null, add_out, el);
add_out.on= add_out_methods.on.bind(null, add_out, el);
add_out.oninit= add_out_methods.oninit.bind(null, add_out, el);
add_out.onmount= add_out_methods.onmount.bind(null, add_out, el);
add_out.onupdate= add_out_methods.onupdate.bind(null, add_out, el);
