/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, -W027 */
/* global $dom, gulp_place */
gulp_place("${app.standalone}/$dom_emptyPseudoComponent.sub.js", "file");
/* global $dom_emptyPseudoComponent */
/**
 * This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.
 * @method component
 * @memberof module:jaaJSU~$dom
 * @version gulp_place("app.version", "eval_out")
 * @see {@link gulp_place("app.homepage", "eval_out")}
 * @param {string} [el_name= EMPTY] Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. See {@link module:jaaJSU~$dom~instance_component.add}.
 * @param {module:jaaJSU~$dom~DomAssignObject} attrs The second argument for {@link module:jaaJSU~$dom.assign}
 * @param {Object} [params= {}] Parameters
 * @param {Function} [params.mapUpdate=undefined] This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method {@link module:jaaJSU~$dom~instance_component.add}
 * @param {string|undefined} [params.namespace_group=undefined] This parameter provides ability to defined elements for diferent [`namespaceURI`s](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI). Use "__SVG__" for "http://www.w3.org/2000/svg" (full list [Important Namespace URIs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS#Important_Namespace_URIs)).
 * @return {module:jaaJSU~$dom~instance_componentAdd|module:jaaJSU~$dom~instance_componentEmpty} Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!
 */
$dom.component= function(el_name, attrs, { mapUpdate, namespace_group }={}){
    if(!el_name||el_name==="EMPTY"||el_name==="empty") return $dom_emptyPseudoComponent;
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
    const /* 'drawer' (container) for component elements */
        fragment= document.createDocumentFragment();
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
    return add(el_name, attrs);
    gulp_place("both/add.sub.js", "file");
    /* global add */
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
