/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom */
const $dom_emptyPseudoComponent= (function(){
    const share= { mount, update, destroy, ondestroy, isStatic };
    let component_out= { add, component, mount, update, ondestroy, share };
    return component_out;
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
    function ondestroy(){ return true; }
    function destroy(){ component_out= null; return null; }
})();