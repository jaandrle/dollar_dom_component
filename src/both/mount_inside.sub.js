/* global $dom, fragment, container, destroy, on_mount_funs: true, observer: true */
/* function arguments *//* global element, type */
/* inside functions *//* global onMountFunctionCall */
if(observer) observer.disconnect();
const component_el= !fragment.firstChild&&container ? container : fragment;
let parent_node;
switch ( type ) {
    case "replace":
        $dom.replace(element, component_el);
        parent_node= element.parentNode;
        break;
    case "replaceContent":
        $dom.empty(element);
        element.appendChild(component_el);
        parent_node= element;
        break;
    case "before":
        element.parentNode.insertBefore(component_el, element);
        parent_node= element.parentNode;
        break;
    case "after":
        $dom.insertAfter(component_el, element);
        parent_node= element.parentNode;
        break;
    default:
        if(type==="childFirst" && element.childNodes.length) element.insertBefore(component_el, element.childNodes[0]);
        else element.appendChild(component_el);
        parent_node= element;
        break;
}
observer= new MutationObserver(mutations=> mutations.forEach(function(record){
    if(!record.removedNodes||Array.prototype.indexOf.call(record.removedNodes, container)===-1) return false;
    destroy();
}));
observer.observe(parent_node, { childList: true, subtree: true, attributes: false, characterData: false });
if(on_mount_funs){
    on_mount_funs.forEach(onMountFunctionCall);
    on_mount_funs= undefined;
}