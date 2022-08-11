/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global container, assign, $dom, destroy, on_mount_funs: true, observer: true */
function mount(element, type= "childLast"){
	if(observer) observer.disconnect();
	$dom.mount(element, type)(container);
	const parent_node= type==="after"||type==="before" ? element.parentNode : element;
	if(!(element instanceof DocumentFragment)){//TODO/WIP
		const [ el_c, el_p ]= __observedEls(container, parent_node);
		observer= new MutationObserver(mutations=> mutations.forEach(function(record){
			if(!record.removedNodes||Array.prototype.indexOf.call(record.removedNodes, el_c)===-1) return false;
			destroy();
		}));
		observer.observe(el_p, { childList: true, subtree: true, attributes: false, characterData: false });
	}
	if(on_mount_funs){
		on_mount_funs.forEach(onMountFunctionCall);
		on_mount_funs= undefined;
	}

	function __observedEls(container, parent_node){
		if(!(container instanceof DocumentFragment)) return [ container, parent_node ];
		return [ parent_node, parent_node.parentNode ];
	}
	return container;
	function onMountFunctionCall(onMountFunction, el){ return assign(el, onMountFunction.call(el, element, type)); }
}
