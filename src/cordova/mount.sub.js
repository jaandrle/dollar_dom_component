/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global container, assign, parseHTML, c_CMD */
/**
 * Add element to live DOM
 * @method mount
 * @memberof module:jaaJSU~$dom~instance_component
 * @public
 * @param {NodeElement} element Element where to places this component
 * @param {Boolean} call_parseHTML If call parseHTML
 * @param {String} [type= "childLast"]
 *	<br/>- Change type of mounting
 *	<br/>- `childLast` places component as last child
 *	<br/>- `childFirst` places component as first child
 *	<br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)
 *	<br/>- `replace` replaces `element` by component
 *	<br/>- `before` places component before `element`
 *	<br/>- `after` places component after `element` (uses `$dom.insertAfter`)
 */
function mount(element, call_parseHTML, type= "childLast"){
	gulp_place("both/mount_inside.sub.js", "file");/* global gulp_place, parent_node */
	if(call_parseHTML) parseHTML(parent_node.querySelectorAll(c_CMD));
	return container;
	function onMountFunctionCall(onMountFunction, el){ return assign(el, onMountFunction.call(el, element, call_parseHTML, type)); }
}
