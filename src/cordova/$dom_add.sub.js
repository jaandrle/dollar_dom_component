/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom, parseHTML, c_CMD*/
/**
 * See {@link module:jaaJSU~$dom.add}
 * @method add_cordova
 * @memberof module:jaaJSU~$dom
 * @deprecated
 * @param {NodeElement} parent
 * @param {...Array} $$$ Works also with "jsif_var" and/or "data-cmd='condition-changeval'" see [$dom.assign \[cordova\]](#methods_$dom.assign [cordova])
 * @param {Boolean} [call_parseHTML=undefined] If **true** calls `parseHTML(parent.querySelectorAll(c_CMD))`
 * @return {NodeElement} First created element (usualy wrapper thanks nesting)
 */
$dom.add= function(parent,$$$, call_parseHTML){
    let fragment= document.createDocumentFragment();
    let prepare_els= [], els= [];
    for(var i=0, i_length= $$$.length; i<i_length;i++){
        prepare_els[i]= document.createElement($$$[i][0]);
        if(!i) els[i]= fragment.appendChild(prepare_els[i]);
        else if(typeof $$$[i][1].$!=="undefined"){
            els[i]= els[$$$[i][1].$].appendChild(prepare_els[i]);
            delete $$$[i][1].$;
        }
        else els[i]= els[i-1].appendChild(prepare_els[i]);
        $dom.assign(els[i], $$$[i][1]);
    }
    parent.appendChild(fragment);
    if(call_parseHTML) parseHTML(parent.querySelectorAll(c_CMD));
    if(i) return els[0];
};