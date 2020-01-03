/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom */
/**
 * This is in fact argument for {@link module:jaaJSU~$dom~instance_componentAdd.on}.
 * @typedef component_listener
 * @memberof module:jaaJSU~$dom
 * @type {Array}
 * @param {String} 0 Name of method in {@link module:jaaJSU~$dom~instance_componentAdd}.
 * @param {Array} 1 In fact arguments for `on*` methods in {@link module:jaaJSU~$dom~instance_componentAdd}.
 * @category types descriptions
 * @inner
 */
/**
 * This provide more DRY way to register events listeners for {@link module:jaaJSU~$dom.component} such as `onupdate`, `oninit`, ….
 * @method componentListener
 * @memberof module:jaaJSU~$dom
 * @param {String} event_name Name of event (prefered way is to use without `on*` like native `addEventListener`)
 * @param {...Mixed} args See {@link module:jaaJSU~$dom~component_listener}[1].
 * @returns {module:jaaJSU~$dom~component_listener}
 */
$dom.componentListener= function(event_name, ...args){
    const supported= [ "oninit", "onmount", "onupdate" ];
    const event_name_id= supported.indexOf((/^on/g.test(event_name) ? "" : "on")+event_name);
    if(event_name_id===-1) throw new Error(`Unsupported event name '${event_name}'!`);
    return Object.freeze([ supported[event_name_id], args ]);
};