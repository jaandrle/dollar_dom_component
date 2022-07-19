/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, -W027 */
/* global $dom, gulp_place */
gulp_place("both/$dom_component_utils.sub.js", "file");
gulp_place("${app.standalone}/$dom_emptyPseudoComponent.sub.js", "file"); /* global $dom_emptyPseudoComponent */
gulp_place("both/$dom_special_components_names.sub.js", "file"); /* global isInternalElement */
$dom.component= function(el_name, attrs, { mapUpdate, namespace_group, safe_el_name_only }={}){
	if(!el_name||isInternalElement("empty", el_name, safe_el_name_only)) return $dom_emptyPseudoComponent;
	if(el_name==="svg") namespace_group= "SVG";
	let assign, createElement;
	if(namespace_group==="SVG"){
		assign= $dom.assignNS.bind(null, "SVG");
		createElement= document.createElementNS.bind(document, "http://www.w3.org/2000/svg");
	} else {
		assign= $dom.assign;
		createElement= document.createElement.bind(document);
	}
	let /* holds `initStorage()` if `onupdate` was registered and other component related listeners */
		internal_storage= null,
		on_destroy_funs= null,
		/* on first mount */
		on_mount_funs= null,
		observer= null;
	let /* main parent (wrapper), container for children elements */
		container,
		/* store for all registered elements */
		els= [], all_els_counter= 0,
		/* current elements deep which holds indicies of elements:
			- add(...);add(...); = final deep=[0,1];
			- add(...);add(...,-1);add(...) = final deep=[1,2]; (by steps: [0], [0,1], [1,2])
			- see `shift` in `add`
		*/
		deep= [];
	const share= { mount, update, destroy, ondestroy, isStatic };
	let component_out= { add, addText, component, dynamicComponent, setShift, mount, update, ondestroy, share };
	gulp_place("both/add_out_methods.sub.js", "file");
	/**
	 * Its purpose is to make easy transfering methods somewhere else (like for using in another component, see {@link module:jaaJSU~$dom~instance_component.component} method).
	 * @typedef share
	 * @memberof module:jaaJSU~$dom~instance_component
	 * @borrows module:jaaJSU~$dom~instance_component.mount as mount
	 * @borrows module:jaaJSU~$dom~instance_component.update as update
	 * @type {Object}
	 */
	/**
	 * This is minimal export of "functional class" {@link module:jaaJSU~$dom.component} and its methods (if they are chainable).
	 * @typedef instance_component
	 * @memberof module:jaaJSU~$dom
	 * @category types descriptions
	 * @inner
	 * @type {Object}
	 */
	if(!isInternalElement("fragment", el_name, safe_el_name_only)) return add(el_name, attrs);
	return _addElement(document.createDocumentFragment(), attrs, 0);
	gulp_place("both/add.sub.js", "file");
	/* global add, _addElement */
	gulp_place("both/addText.sub.js", "file");
	/* global addText */
	gulp_place("both/component.sub.js", "file");
	/* global component */
	gulp_place("both/dynamicComponent.sub.js", "file");
	/* global dynamicComponent */
	gulp_place("${app.standalone}/mount.sub.js", "file");
	/* global mount */
	gulp_place("both/destroy.sub.js", "file");
	/* global destroy */
	gulp_place("both/ondestroy.sub.js", "file");
	/* global ondestroy */
	gulp_place("both/recalculateDeep.sub.js", "file");
	/* global recalculateDeep */
	gulp_place("both/getParentElement.sub.js", "file");
	/* global getParentElement */
	gulp_place("both/setShift.sub.js", "file");
	/* global setShift */
	gulp_place("both/initStorage.sub.js", "file");
	/* global initStorage */
	gulp_place("both/update.sub.js", "file");
	/* global update */
	gulp_place("both/isStatic.sub.js", "file");
	/* global isStatic */
};
gulp_place("both/$dom_componentListener.sub.js", "file");
gulp_place("both/$dom_assign.sub.js", "file");
gulp_place("both/$dom_assignNS.sub.js", "file");
/* global $dom_assign */
