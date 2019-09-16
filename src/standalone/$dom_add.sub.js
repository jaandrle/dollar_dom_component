/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom */
/**
 * Procedure for adding elements into the `parent` (in background use `createDocumentFragment`, `createElement`, `appendChild`)
 * @method add
 * @memberof $dom
 * @deprecated
 * @param {NodeElement} parent Wrapper (for example `<ul>`) where to cerate children elements (for example `<li>`)
 * @param $$$ {...Array}
 *  <br/>* `[ [ __NAME__, __PARAMS__ ], [ __NAME__, __PARAMS__ ], ..., [ __NAME__, __PARAMS__ ] ]`
 *  <br/>* Element in array is automatically nested into the previous element. `[["UL",...], ["LI",...], ["SPAN",...]]` creates `<ul><li><span></span></li></ul>`
 *  <br/>* `__NAME__` **\<String\>**: Name of element (for example `LI`, `P`, `A`, ...)
 *  <br/>* `__PARAMS__` **\<Object\>**: Parameters for elements as "innerText", "className", "dataset", ...
 *  <br/>    * see [$dom.assign](#methods_assign)
 *  <br/>    * There is one change with using key "$", which modify elements order and it is not parsed by [$dom.assign](#methods_assign)
 *  <br/>        * `__PARAMS__.$`: Modify nesting behaviur (accepts index of element in `$$$`). `[["UL",...], ["LI",...], ["LI",{$:0,...}]]` creates `<ul><li></li><li></li></ul>`
 * @return {NodeElement} First created element (usualy wrapper thanks nesting)
 * @example
 * $dom.add(ul_element,[
 *     ["LI", {className: "nejake-tridy", onclick: clickFCE}],
 *         ["SPAN", {innerText: "Prvni SPAN v LI"}],
 *         ["SPAN", {$:0, innerText: "Druhy SPAN v LI"}]
 * ]);
 * // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI</span><span>Druhy SPAN v LI</span></li></ul>
 * // !!! VS !!!
 * $dom.add(ul_element,[
 *     ["LI", {className: "nejake-tridy", onclick: clickFCE}],
 *         ["SPAN", {innerText: "Prvni SPAN v LI"}],
 *             ["SPAN", {innerText: "Druhy SPAN v LI"}]
 * ]);
 * // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI<span>Druhy SPAN v LI</span></span></li></ul>
 */
$dom.add= function(parent,$$$){
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
    if(i) return els[0];
};