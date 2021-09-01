/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
const $dom= {
    empty: function(container){
        let len= container.childNodes.length;
        while(len--){ container.removeChild(container.lastChild); }
    },
    insertAfter: function(new_element, reference){
        const { parentNode, nextSibling }= reference;
        if(nextSibling) parentNode.insertBefore(new_element, nextSibling);
        else parentNode.appendChild(new_element);
    },
    replace: function(el_old, el_new){
        $dom.insertAfter(el_new, el_old);
        el_old.remove();
    }
};