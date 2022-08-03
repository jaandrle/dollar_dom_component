/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
const $dom= {
	empty: function(container){
		let len= container.childNodes.length;
		while(len--){ container.removeChild(container.lastChild); }
	},
	mount(element_target, type= "childLast"){
		return function mount_inner(element){
			if(!(element instanceof Element)){
				if(typeof element.mount !== "function") throw new TypeError("`element` must be `Element` or `share` of `$dom.component`.");
				return element.mount(element_target, type);
			}
			switch ( type ){
				case "after":
					const { parentNode, nextSibling }= element_target;
					if(nextSibling) parentNode.insertBefore(element, nextSibling);
					else parentNode.appendChild(element);
					break;
				case "before":
					element_target.parentNode.insertBefore(element, element_target);
					break;
				case "replace":
					element_target.parentNode.insertBefore(element, element_target);
					element_target.remove();
					break;
				case "replaceContent":
					$dom.empty(element_target);
					element_target.appendChild(element);
					break;
				default:
					if(type==="childFirst" && element_target.childNodes.length) element_target.insertBefore(element, element_target.childNodes[0]);
					else element_target.appendChild(element);
					break;
			}
			return element;
		};
	}
};
