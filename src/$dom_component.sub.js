/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, -W027 */
/* global $dom, gulp_place */
gulp_place("${app.standalone}/$dom_emptyPseudoComponent.sub.js", "file");
/* global $dom_emptyPseudoComponent */
/**
 * Just virtual key!!! This is overwiev of all internal types for better description.
 * @namespace types
 * @private
 * @memberof $dom
 */
/**
 * This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.
 * @method gulp_place("'component'+(app.standalone==='cordova' ? '_cordova' : '')", "eval")
 * @memberof $dom
 * @version gulp_place("app.version", "eval")
 * @param {String} [el_name="EMPTY"] Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated.
 * @param {$dom.types.DomAssignObject} attrs The second argument for {@link $dom.assign}
 * @param {Object} [params= {}] Parameters
 * @param {Function|Undefined} [params.mapUpdate=Undefined] This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method {@link $dom.types.Component.add}
 * @return {$dom.types.Component__Add|$dom.types.ComponentEmpty} Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!
 */
$dom.component= function(el_name, attrs, { mapUpdate }={}){
    if(typeof el_name==="undefined" || el_name.toUpperCase()==="EMPTY") return $dom_emptyPseudoComponent;
    let /* holds `initStorage()` if `onupdate` was registered */
        internal_storage= null;
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
    const share= { mount, update, destroy, isStatic };
    const component_out= { add, addText, component, setShift, mount, update, share };
    /**
     * Its purpose is to make easy transfering methods somewhere else (like for using in another component, see {@link $dom.types.Component.component} method).
     * @typedef share
     * @memberof $dom.types.Component
     * @type {Object}
     * @property {Function} mount {@link $dom.types.Component.mount}
     * @property {Function} update {@link $dom.types.Component.update}
     */
    /**
     * This is minimal export of "functional class" {@link $dom.component} and its methods (if they are chainable).
     * @typedef Component
     * @memberof $dom.types
     * @type {Object}
     */
    return add(el_name, attrs);
    gulp_place("both/add.sub.js", "file");
    /* global add */
    gulp_place("both/addText.sub.js", "file");
    /* global addText */
    gulp_place("both/component.sub.js", "file");
    /* global component */
    gulp_place("${app.standalone}/mount.sub.js", "file");
    /* global mount */
    gulp_place("both/destroy.sub.js", "file");
    /* global destroy */
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
gulp_place("both/$dom_assign.sub.js", "file");
/* global $dom_assign */
