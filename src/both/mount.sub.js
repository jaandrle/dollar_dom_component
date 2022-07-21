/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global container, assign, $dom, destroy, on_mount_funs: true, observer: true */
function mount(element, type= "childLast"){
	if(observer) observer.disconnect();
	let parent_node;
	switch ( type ) {
		case "replace":
			parent_node= element.parentNode;
			$dom.replace(element, container);
			break;
		case "replaceContent":
			$dom.empty(element);
			element.appendChild(container);
			parent_node= element;
			break;
		case "before":
			parent_node= element.parentNode;
			parent_node.insertBefore(container, element);
			break;
		case "after":
			$dom.insertAfter(container, element);
			parent_node= element.parentNode;
			break;
		default:
			if(type==="childFirst" && element.childNodes.length) element.insertBefore(container, element.childNodes[0]);
			else element.appendChild(container);
			parent_node= element;
			break;
	}
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
