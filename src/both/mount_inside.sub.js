/* global $dom, container, destroy, on_mount_funs: true, observer: true */
/* function arguments *//* global element, type */
/* inside functions *//* global onMountFunctionCall */
if(observer) observer.disconnect();
let parent_node;
switch ( type ) {
    case "replace":
        parent_node= element.parentNode;
        $dom.replace(element, container);
        break;
    case "replaceContent":
        $dom.empty(element);
        element.appendChild(container);
        parent_node= element;
        break;
    case "before":
        parent_node= element.parentNode;
        parent_node.insertBefore(container, element);
        break;
    case "after":
        $dom.insertAfter(container, element);
        parent_node= element.parentNode;
        break;
    default:
        if(type==="childFirst" && element.childNodes.length) element.insertBefore(container, element.childNodes[0]);
        else element.appendChild(container);
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