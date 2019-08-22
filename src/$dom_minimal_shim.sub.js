/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/**
 * This NAMESPACE provides features for DOM elemnts.
 * @class $dom.{namespace}
 * @static
 */
const $dom= {
    /**
     * Procedure removes all children of `container`
     * @method empty
     * @param {NodeElement} container
     */
    empty: function(container){
        let len= container.childNodes.length;
        while(len--){ container.removeChild(container.lastChild); }
    },
    /**
     * Procedure places `new_element` after `reference` elements
     * @method insertAfter
     * @param {NodeElement} new_element
     * @param {NodeElement} reference
     */
    insertAfter: function(new_element, reference){
        const { parentNode, nextSibling }= reference;
        if(nextSibling) parentNode.insertBefore(new_element, nextSibling);
        else parentNode.appendChild(new_element);
    },
    /**
     * Procedure replaces `el_old` element by new one (`new_el`)
     * @method replace
     * @param {NodeElement} el_old
     * @param {NodeElement} el_new
     */
    replace: function(el_old, el_new){
        $dom.insertAfter(el_new, el_old);
        el_old.remove();
    }
};