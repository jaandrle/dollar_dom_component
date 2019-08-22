/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, -W027 */
/* global $dom, gulp_place */
gulp_place("${app.standalone}/$dom_emptyPseudoComponent.sub.js", "file");
/* global $dom_emptyPseudoComponent */
/**
 * This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.
 * @class gulp_place("'$dom.component'+(app.standalone==='cordova' ? ' [cordova]' : '')", "eval")
 * @version gulp_place("app.version", "eval")
 * @constructor
 * @param {String} el_name
 *  - Name of element (for example `LI`, `P`, `A`, …).
 *  - This is parent element of component.
 * @param {Object} attrs
 *  - The second argument for [`$dom.assign`](./$dom.{namespace}.html#methods_assign)
 * @param {Object} params
 * @param {Function|Boolean} params.mapUpdate
 *  - `[params.mapUpdate=undefined]`
 *  - This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see [`add`](#methods_add)
 * @return {$dom.component}
 *  - 'functional class instance': object `{ add, component, mount, update, share, onupdate }`
 *  - `share` is Object for transfering methods somewhere else (like for using in another component, see [`component`](#methods_component))
 *      - `share= { mount, update, destroy, isStatic }`
 *  - `onupdate`
 *      - It returns {$dom.component} and it is only one differnece against [`add`](#methods_add)
 *      - `onupdate` is function which accepts two params `object, function`, the function is called during creating element and evry `update`calls
 *      - It returns additional `attrs`, for example this `attrs`: `$dom.component("DIV", { className: "class" }).onupdate({ a }, _=>({ textContent: a }))` => final `attrs= { className: "class", textContent: "A" }` (if `a="A"`)
 *      - it use [`$dom.assign`](./$dom.{namespace}.html#methods_assign) (**no deep copy!!!**)
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
