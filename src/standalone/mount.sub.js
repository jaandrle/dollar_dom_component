/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom, fragment, container, destroy, on_mount_funs: true, observer: true */
/**
 * Add element to live DOM
 * @method mount
 * @memberof module:jaaJSU~$dom~instance_component
 * @public
 * @param {NodeElement} element Element where to places this component
 * @param {String} [type= "childLast"]
 *  <br/>- Change type of mounting
 *  <br/>- `childLast` places component as last child
 *  <br/>- `childFirst` places component as first child
 *  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)
 *  <br/>- `replace` replaces `element` by component
 *  <br/>- `before` places component before `element`
 *  <br/>- `after` places component after `element` (uses `$dom.insertAfter`)
 * @returns {NodeElement} `container`
 */
function mount(element, type= "childLast"){
    if(observer) observer.disconnect();
    switch ( type ) {
        case "replace":
            $dom.replace(element, fragment);
            break;
        case "replaceContent":
            $dom.empty(element);
            element.appendChild(fragment);
            break;
        case "before":
            element.parentNode.insertBefore(fragment, element);
            break;
        case "after":
            $dom.insertAfter(fragment, element);
            break;
        default:
            if(type==="childFirst" && element.childNodes.length) element.insertBefore(fragment, element.childNodes[0]);
            else element.appendChild(fragment);
            break;
    }
    observer= new MutationObserver(mutations=> mutations.forEach(function(record){
        if(!record.removedNodes||Array.prototype.indexOf.call(record.removedNodes, container)===-1) return false;
        destroy();
    }));
    observer.observe(container.parentNode, { childList: true, subtree: true, attributes: false, characterData: false });
    if(on_mount_funs){
        on_mount_funs.forEach((onMountFunction, el)=> $dom.assign(el, onMountFunction.call(el, element, type)));
        on_mount_funs= null;
    }
    return container;
}