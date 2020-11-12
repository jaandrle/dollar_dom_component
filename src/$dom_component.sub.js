/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, -W027 */
/* global $dom, gulp_place */
gulp_place("both/$dom_component_utils.sub.js", "file");
gulp_place("${app.standalone}/$dom_emptyPseudoComponent.sub.js", "file"); /* global $dom_emptyPseudoComponent */
gulp_place("both/$dom_special_components_names.sub.js", "file"); /* global isInternalElement */
/**
 * Name of element supproted by this library – so {@link module:jaaJSU~$dom.component} and {@link module:jaaJSU~$dom~instance_component.add}. You can use:
 * 
 * - For HTML tags you can use lowercase/uppercase convention (e. g. `p`, `P`, `div`, `DIV`) – all possibilities can be found at [HTML | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
 * - For SVG tags use exact form (e. g. `svg`, `polyline`, `clipPath`)! All possibilities can be found at [SVG | MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element).
 * @typedef {String} EL_NAME
 * @memberof module:jaaJSU~$dom
 */
/**
 * Name of component main element. In addition to {@link module:jaaJSU~$dom.EL_NAME}, it is possible to use special keywords:
 * 
 * - undefined, "" (, "empty", "EMPTY"): Empty placeholder component (see {@link module:jaaJSU~$dom~instance_componentEmpty})
 * - "<>" (, "fragment", "FRAGMENT"): see [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
 * 
 * Keywords inside round parentheses are not preferred because of collision risk with Custom Elements names.
 * 
 * The `$dom.component` can disable these keywords by `safe_el_name_only` option (by default `false` – backward compability).
 * @typedef {module:jaaJSU~$dom.EL_NAME|String|undefined} cEL_NAME
 * @memberof module:jaaJSU~$dom
 */
/**
 * This 'functional class' is syntax sugar around ` document.createElement`(`NS`) and `document.createDocumentFragment` for creating DOM components and their adding to live DOM in performance friendly way.
 * 
 * So pseudo code:
 * ```JavaScript
 * function Component(…){
 *  const { add, share }= $dom.component(…Parent Element…);
 *      add(…Child Element…);
 *      add(…Child Element…, -1);
 *          add(…Child Element…);
 *  …
 *  return share;
 * }
 * ```
 * Yelds into:
 * ```HTML
 * <!--<Component>-->
 *  <Parent Element>
 *   <Child Element></Child Element>
 *   <Child Element>
 *      <Child Element></Child Element>
 *   </Child Element>
 *  …
 *  </Parent Element>
 * <!--</Component>-->
 * ```
 * @method component
 * @memberof module:jaaJSU~$dom
 * @version gulp_place("app.version", "eval_out")
 * @see {@link gulp_place("app.homepage", "eval_out")}
 * @param {module:jaaJSU~$dom.cEL_NAME} [el_name= undefined] `LI`, `P`, `A`, …, `svg`, `polyline`, `clipPath`, …, "", "<>"
 * @param {module:jaaJSU~$dom~DomAssignObject} attrs The second argument for {@link module:jaaJSU~$dom.assign}
 * @param {Object} [params= {}] Parameters
 * @param {Function} [params.mapUpdate=undefined] This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method {@link module:jaaJSU~$dom~instance_component.add}
 * @param {string|undefined} [params.namespace_group=undefined] This parameter provides ability to defined elements for diferent [`namespaceURI`s](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI). Use "__SVG__" for "http://www.w3.org/2000/svg" (full list [Important Namespace URIs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS#Important_Namespace_URIs)).
 * @param {boolean} [params.safe_el_name_only=undefined] This parameter provides ability to disable long components names like `empty`, `fragment` – see {@link module:jaaJSU~$dom.cEL_NAME}.
 * @return {module:jaaJSU~$dom~instance_componentAdd|module:jaaJSU~$dom~instance_componentEmpty} Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!
 */
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
    recalculateDeep(0);
    container= els[0]= document.createDocumentFragment();
    all_els_counter+= 1;
    return component_out;
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
