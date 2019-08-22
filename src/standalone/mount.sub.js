/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom, fragment, container */
/**
 * Add element to live DOM
 * @method mount
 * @public
 * @param {NodeElement} element
 *  - Element where to places this component
 * @param {String} [type= "childLast"]
 *  - Change type of mounting
 *  - `childLast` places component as last child
 *  - `childFirst` places component as first child
 *  - `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)
 *  - `replace` replaces `element` by component
 *  - `before` places component before `element`
 *  - `after` places component after `element` (uses `$dom.insertAfter`)
 */
function mount(element, type= "childLast"){
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
    return container;
}