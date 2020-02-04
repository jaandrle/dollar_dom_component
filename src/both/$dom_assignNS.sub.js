/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxcomplexity: 20, maxdepth: 3 */
/* global $dom */
/**
 * Procedure for merging object into the element properties (see `html` version {@link module:jaaJSU~assign}).
 * @method assignNS
 * @memberof module:jaaJSU~$dom
 * @param {string} namespace_group Group representation of [`namespace`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS), use "__SVG__" for setting attributes for `svg`s.
 * @param {NodeElement} element
 * @param {...module:jaaJSU~$dom~DomAssignObject} object_attributes
 * @returns {NodeElement} Givven `element` (follows similar behaviour in `Object.assign`)
 */
$dom.assignNS= function(namespace, element, ...objects_attributes){
    const object_attributes= Object.assign({}, ...objects_attributes);
    const object_attributes_keys= Object.keys(object_attributes);
    for(let i=0, key, attr, i_length= object_attributes_keys.length; i<i_length; i++){
        key= object_attributes_keys[i];
        attr= object_attributes[key];
        if(typeof attr==="undefined"){ if(element.hasAttributeNS(null, key)){ element.removeAttributeNS(null, key); } continue; }
        switch(key){
            case "style":
                if(typeof attr==="string") element.setAttributeNS(null, "style", attr);
                else for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                break;
            case "style_vars":
                for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                break;
            case "classList":
                if(!element[key].toggle) break;
                for(let k=0, k_key, k_attr, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){
                    k_key= k_keys[k]; k_attr= attr[k_key];
                    if(k_attr===-1) element.classList.toggle(k_key);
                    else element.classList.toggle(k_key, Boolean(k_attr));
                }
                break;
            default:
                element.setAttributeNS(null, key, attr);
                break;
        }
    }
    return element;
};