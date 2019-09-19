/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom */
/**
 * In generall, all methods from {@link module:jaaJSU~$dom.instance_component} don't do anything. Also during "mounting" there are some changes see method {@link module:jaaJSU~$dom.instance_componentEmpty.mount}.
 * @typedef ComponentEmpty
 * @memberof module:jaaJSU~$dom
 * @category virtual
 * @type {module:jaaJSU~$dom.instance_component}
 */
const $dom_emptyPseudoComponent= (function(){
    const share= { mount, update, destroy, isStatic };
    const component_out= { add, component, mount, update, share };
    return component_out;
    /**
     * The same syntax as {@link module:jaaJSU~$dom.instance_component.mount}. But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").
     * @method mount
     * @memberof module:jaaJSU~$dom.instance_componentEmpty
     */
    function mount(element, type= "childLast"){
        // let temp_el;
        switch ( type ) {
            case "replace":
                element.remove();
                break;
            case "replaceContent":
                $dom.empty(element);
                break;
            // case "before":
            //     temp_el= element.previousElementSibling;
            //     if(temp_el) temp_el.remove();
            //     break;
            // case "after":
            //     temp_el= element.nextElementSibling;
            //     if(temp_el) temp_el.remove();
            //     break;
            // default:
            //     if(element.childNodes.length) element.childNodes[type==="childFirst" ? 0 : element.childNodes.length-1].remove();
            //     break;
        }
        return null;
    }
    function add(){ return component_out; }
    function component(){ return component_out; }
    function update(){ return true; }
    function isStatic(){ return true; }
    function destroy(){ return null; }
})();