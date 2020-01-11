/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom, fragment, parseHTML, c_CMD, container, destroy, on_mount_funs: true, observer: true */
/**
 * Add element to live DOM
 * @method mount
 * @memberof module:jaaJSU~$dom~instance_component
 * @public
 * @param {NodeElement} element Element where to places this component
 * @param {Boolean} call_parseHTML If call parseHTML
 * @param {String} [type= "childLast"]
 *  <br/>- Change type of mounting
 *  <br/>- `childLast` places component as last child
 *  <br/>- `childFirst` places component as first child
 *  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)
 *  <br/>- `replace` replaces `element` by component
 *  <br/>- `before` places component before `element`
 *  <br/>- `after` places component after `element` (uses `$dom.insertAfter`)
 */
function mount(element, call_parseHTML, type= "childLast"){
    if(observer) observer.disconnect();
    const component_el= !fragment.firstChild&&container ? container : fragment;
    switch ( type ) {
        case "replace":
            $dom.replace(element, component_el);
            if(call_parseHTML) parseHTML(element.parentNode.querySelectorAll(c_CMD));
            break;
        case "replaceContent":
            $dom.empty(element);
            element.appendChild(component_el);
            if(call_parseHTML) parseHTML(element.querySelectorAll(c_CMD));
            break;
        case "before":
            element.parentNode.insertBefore(component_el, element);
            if(call_parseHTML) parseHTML(element.parentNode.querySelectorAll(c_CMD));
            break;
        case "after":
            $dom.insertAfter(component_el, element);
            if(call_parseHTML) parseHTML(element.parentNode.querySelectorAll(c_CMD));
            break;
        default:
            if(type==="childFirst" && element.childNodes.length) element.insertBefore(component_el, element.childNodes[0]);
            else element.appendChild(component_el);
            if(call_parseHTML) parseHTML(element.querySelectorAll(c_CMD));
            break;
    }
    observer= new MutationObserver(mutations=> mutations.forEach(function(record){
        if(!record.removedNodes||Array.prototype.indexOf.call(record.removedNodes, container)===-1) return false;
        destroy();
    }));
    observer.observe(container.parentNode, { childList: true, subtree: true, attributes: false, characterData: false });
    if(on_mount_funs){
        on_mount_funs.forEach((onMountFunction, el)=> $dom.assign(el, onMountFunction.call(el, element, call_parseHTML, type)));
        on_mount_funs= undefined;
    }
    return container;
}