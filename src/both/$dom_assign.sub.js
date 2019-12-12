/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom, gulp_place */
/**
 * Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for {@link module:jaaJSU~$dom.assign}. There are some notes and changes:
 *  - In most cases, you can use native propertie such as [MDN WEB/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element).
 *  - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 *  - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 *  - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 *  - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 *  - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
 *  - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;
 * @typedef DomAssignObject
 * @memberof module:jaaJSU~$dom
 * @category types descriptions
 * @inner
 * @type {Object}
 */
/**
 * Procedure for merging object into the element properties.
 * Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
 * It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).
 * @method assign
 * @memberof module:jaaJSU~$dom
 * @param {NodeElement} element
 * @param {...module:jaaJSU~$dom~DomAssignObject} object_attributes
 * @example <caption>#1: All together</caption>
 * const el= document.body;
 * const onclick= function(){ console.log(this.dataset.js_param); };
 * $dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
 * //result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
 * //console output on click: "CLICKED"
 * $dom.assign(el, { style: { color: "green" } });
 * //result HTML: <body style="color: green;" data-js_param="CLICKED">BODY</body>
 * //console output on click: "CLICKED"
 * @example <caption>#2 **\*.classList.toggle**</caption>
 * const el= document.body;
 * $dom.assign(el, { classList: { testClass: -1 } });
 * //result HTML: <body class="testClass">…</body>
 * $dom.assign(el, { classList: { testClass: -1 } });
 * //result HTML: <body class="">…</body>
 * 
 * $dom.assign(el, { classList: { testClass: true } });//or 1
 * //result HTML: <body class="testClass">…</body>
 * $dom.assign(el, { classList: { testClass: false } });//or 0
 * //result HTML: <body class="">…</body>
 * //...
 * @example <caption>#3 Links and images</caption>
 * $dom.assign(A_ELEMENT, { href: "www.google.com" });//=> <a href="www.google.com" …
 * $dom.assign(IMG_ELEMENT, { src: "image.png" });//=> <img src="image.png" …
 */
$dom.assign= function(element, ...objects_attributes){
    const object_attributes= Object.assign({}, ...objects_attributes);
    const object_attributes_keys= Object.keys(object_attributes);
    for(let i=0, key, attr, i_length= object_attributes_keys.length; i<i_length; i++){
        key= object_attributes_keys[i];
        attr= object_attributes[key];
        if(typeof attr==="undefined"){ if(Reflect.has(element, key)){ Reflect.deleteProperty(element, key); } continue; }
        switch(key){
            case "style":
                if(typeof attr==="string") element.setAttribute("style", attr);
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
            case "dataset":
                gulp_place("${app.standalone}/$dom_assign_dataset.sub.js", "file");
                break;
            case "href" || "src" || "class":
                element.setAttribute(key, attr);
                break;
            default:
                element[key]= attr;
                break;
        }
    }
};