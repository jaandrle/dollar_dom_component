<a name="module_jaaJSU"></a>

## jaaJSU

* [jaaJSU](#module_jaaJSU)
    * [~$dom](#module_jaaJSU..$dom) : <code>object</code>
        * [.empty(container)](#module_jaaJSU..$dom.empty)
        * [.insertAfter(new_element, reference)](#module_jaaJSU..$dom.insertAfter)
        * [.replace(el_old, el_new)](#module_jaaJSU..$dom.replace)
        * [.component([el_name], attrs, [params])](#module_jaaJSU..$dom.component) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom.instance_componentAdd) \| <code>module:jaaJSU~$dom.instance\_componentEmpty</code>
        * [.assign(element, ...object_attributes)](#module_jaaJSU..$dom.assign)
        * _virtual_
            * [.ComponentEmpty](#module_jaaJSU..$dom.ComponentEmpty) : <code>module:jaaJSU~$dom.instance\_component</code>
            * [.Component](#module_jaaJSU..$dom.Component) : <code>Object</code>
            * [.instance_componentAdd](#module_jaaJSU..$dom.instance_componentAdd) : <code>module:jaaJSU~$dom.instance\_component</code>
                * [.getReference()](#module_jaaJSU..$dom.instance_componentAdd.getReference) ⇒ <code>NodeElement</code>
                * [.oninit(fn)](#module_jaaJSU..$dom.instance_componentAdd.oninit) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
                * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom.instance_componentAdd.onupdate) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
            * [.onUpdateFunction](#module_jaaJSU..$dom.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject)
            * [.instance_componentAddText](#module_jaaJSU..$dom.instance_componentAddText) : <code>Component</code>
                * [.oninit(fn)](#module_jaaJSU..$dom.instance_componentAddText.oninit) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
            * [.DomAssignObject](#module_jaaJSU..$dom.DomAssignObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$dom"></a>

### jaaJSU~$dom : <code>object</code>
This NAMESPACE provides features for DOM elements.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$dom" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L8" title="$dom_component.js:8"><small>(defined@8)</small></a>  

* [~$dom](#module_jaaJSU..$dom) : <code>object</code>
    * [.empty(container)](#module_jaaJSU..$dom.empty)
    * [.insertAfter(new_element, reference)](#module_jaaJSU..$dom.insertAfter)
    * [.replace(el_old, el_new)](#module_jaaJSU..$dom.replace)
    * [.component([el_name], attrs, [params])](#module_jaaJSU..$dom.component) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom.instance_componentAdd) \| <code>module:jaaJSU~$dom.instance\_componentEmpty</code>
    * [.assign(element, ...object_attributes)](#module_jaaJSU..$dom.assign)
    * _virtual_
        * [.ComponentEmpty](#module_jaaJSU..$dom.ComponentEmpty) : <code>module:jaaJSU~$dom.instance\_component</code>
        * [.Component](#module_jaaJSU..$dom.Component) : <code>Object</code>
        * [.instance_componentAdd](#module_jaaJSU..$dom.instance_componentAdd) : <code>module:jaaJSU~$dom.instance\_component</code>
            * [.getReference()](#module_jaaJSU..$dom.instance_componentAdd.getReference) ⇒ <code>NodeElement</code>
            * [.oninit(fn)](#module_jaaJSU..$dom.instance_componentAdd.oninit) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
            * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom.instance_componentAdd.onupdate) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
        * [.onUpdateFunction](#module_jaaJSU..$dom.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject)
        * [.instance_componentAddText](#module_jaaJSU..$dom.instance_componentAddText) : <code>Component</code>
            * [.oninit(fn)](#module_jaaJSU..$dom.instance_componentAddText.oninit) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
        * [.DomAssignObject](#module_jaaJSU..$dom.DomAssignObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$dom.empty"></a>

#### $dom.empty(container)
Procedure removes all children of `container`

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.empty" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L13" title="$dom_component.js:13"><small>(defined@13)</small></a>  

| Param | Type |
| --- | --- |
| container | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.insertAfter"></a>

#### $dom.insertAfter(new_element, reference)
Procedure places `new_element` after `reference` elements

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.insertAfter" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L23" title="$dom_component.js:23"><small>(defined@23)</small></a>  

| Param | Type |
| --- | --- |
| new_element | <code>NodeElement</code> | 
| reference | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.replace"></a>

#### $dom.replace(el_old, el_new)
Procedure replaces `el_old` element by new one (`new_el`)

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.replace" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L35" title="$dom_component.js:35"><small>(defined@35)</small></a>  

| Param | Type |
| --- | --- |
| el_old | <code>NodeElement</code> | 
| el_new | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.component"></a>

#### $dom.component([el_name], attrs, [params]) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom.instance_componentAdd) \| <code>module:jaaJSU~$dom.instance\_componentEmpty</code>
This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.component" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L93" title="$dom_component.js:93"><small>(defined@93)</small></a>  
**Returns**: [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom.instance_componentAdd) \| <code>module:jaaJSU~$dom.instance\_componentEmpty</code> - Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!  
**Version**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [el_name] | <code>String</code> | <code>&quot;EMPTY&quot;</code> | Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. |
| attrs | [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) |  | The second argument for [assign](#module_jaaJSU..$dom.assign) |
| [params] | <code>Object</code> | <code>{}</code> | Parameters |
| [params.mapUpdate] | <code>function</code> \| <code>Undefined</code> | <code>Undefined</code> | This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [add](#module_jaaJSU..$dom.instance_component.add) |


* * *

<a name="module_jaaJSU..$dom.assign"></a>

#### $dom.assign(element, ...object_attributes)
Procedure for merging object into the element properties.
Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.assign" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L578" title="$dom_component.js:578"><small>(defined@578)</small></a>  

| Param | Type |
| --- | --- |
| element | <code>NodeElement</code> | 
| ...object_attributes | [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) | 

**Example**  
```js
const el= document.body;
const onclick= function(){ console.log(this.dataset.js_param); };
$dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
//result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
//console output on click: "CLICKED"
$dom.assign(el, { style: { color: "green" } });
//result HTML: <body style="color: green;" data-js_param="CLICKED">BODY</body>
//console output on click: "CLICKED"
```
**Example**  
```js
const el= document.body;
$dom.assign(el, { classList: { testClass: -1 } });
//result HTML: <body class="testClass">…</body>
$dom.assign(el, { classList: { testClass: -1 } });
//result HTML: <body class="">…</body>
```
**Example**  
```js
const el= document.body;
$dom.assign(el, { classList: { testClass: true } });//or 1
//result HTML: <body class="testClass">…</body>
$dom.assign(el, { classList: { testClass: false } });//or 0
//result HTML: <body class="">…</body>
//...
```
**Example**  
```js
$dom.assign(A_ELEMENT, { href: "www.google.com" });//=> <a href="www.google.com" …
$dom.assign(IMG_ELEMENT, { src: "image.png" });//=> <img src="image.png" …
```

* * *

<a name="module_jaaJSU..$dom.ComponentEmpty"></a>

#### $dom.ComponentEmpty : <code>module:jaaJSU~$dom.instance\_component</code>
In generall, all methods from [module:jaaJSU~$dom.instance_component](module:jaaJSU~$dom.instance_component) don't do anything. Also during "mounting" there are some changes see method [mount](#module_jaaJSU..$dom.instance_componentEmpty.mount).

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.ComponentEmpty" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L48" title="$dom_component.js:48"><small>(defined@48)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$dom.Component"></a>

#### $dom.Component : <code>Object</code>
This is minimal export of "functional class" [component](#module_jaaJSU..$dom.component) and its methods (if they are chainable).

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.Component" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L130" title="$dom_component.js:130"><small>(defined@130)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$dom.instance_componentAdd"></a>

#### $dom.instance\_componentAdd : <code>module:jaaJSU~$dom.instance\_component</code>
This is `Component` with aditional methods

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.instance_componentAdd" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L138" title="$dom_component.js:138"><small>(defined@138)</small></a>  
**Category**: virtual  

* [.instance_componentAdd](#module_jaaJSU..$dom.instance_componentAdd) : <code>module:jaaJSU~$dom.instance\_component</code>
    * [.getReference()](#module_jaaJSU..$dom.instance_componentAdd.getReference) ⇒ <code>NodeElement</code>
    * [.oninit(fn)](#module_jaaJSU..$dom.instance_componentAdd.oninit) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
    * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom.instance_componentAdd.onupdate) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>


* * *

<a name="module_jaaJSU..$dom.instance_componentAdd.getReference"></a>

##### instance_componentAdd.getReference() ⇒ <code>NodeElement</code>
Returns reference of currently added element

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom.instance_componentAdd) <a name="module_jaaJSU..$dom.instance_componentAdd.getReference" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L185" title="$dom_component.js:185"><small>(defined@185)</small></a>  

* * *

<a name="module_jaaJSU..$dom.instance_componentAdd.oninit"></a>

##### instance_componentAdd.oninit(fn) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom.instance_componentAdd) <a name="module_jaaJSU..$dom.instance_componentAdd.oninit" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L192" title="$dom_component.js:192"><small>(defined@192)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_jaaJSU..$dom.instance_componentAdd.onupdate"></a>

##### instance_componentAdd.onupdate(data, onUpdateFunction) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
This method allows to register function ([onUpdateFunction](#module_jaaJSU..$dom.onUpdateFunction)) which shoul be invoke when given **keys** in `data` will be changed (see [update](#module_jaaJSU..$dom.instance_component.update)).

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom.instance_componentAdd) <a name="module_jaaJSU..$dom.instance_componentAdd.onupdate" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L200" title="$dom_component.js:200"><small>(defined@200)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdateFunction` is called. |
| onUpdateFunction | [<code>onUpdateFunction</code>](#module_jaaJSU..$dom.onUpdateFunction) | This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element. |

**Example**  
```js
const c= $dom.component("DIV", null);
…
c.add("P", null).onupdate({ key: "This is init value" }, ({ key })=> ({ textContent: key }));//=> <p>This is init value</p>
…
c.update({ key: "Value changed" });//=> <p>Value changed</p>
```
**Example**  
```js
const c= $dom.component("DIV", null);
…
c.add("P", null).onupdate({ A: "A", B: "b" }, ({ A, B })=> ({ textContent: A+B }));//=> <p>Ab</p>
…
c.update({ B: "B" });//=> <p>AB</p>
```

* * *

<a name="module_jaaJSU..$dom.onUpdateFunction"></a>

#### $dom.onUpdateFunction ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject)
**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.onUpdateFunction" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L220" title="$dom_component.js:220"><small>(defined@220)</small></a>  
**Returns**: <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) - Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method [update](#module_jaaJSU..$dom.instance_component.update) is called. This callback can be registered when element is created (see method [add](#module_jaaJSU..$dom.instance_component.add)) see [instance_componentAdd](#module_jaaJSU..$dom.instance_componentAdd).  
**Category**: virtual  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Includes all subsribed keys from `data` see method [onupdate](#module_jaaJSU..$dom.instance_componentAdd.onupdate) |


* * *

<a name="module_jaaJSU..$dom.instance_componentAddText"></a>

#### $dom.instance\_componentAddText : <code>Component</code>
This is `Component` with aditional methods

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.instance_componentAddText" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L236" title="$dom_component.js:236"><small>(defined@236)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$dom.instance_componentAddText.oninit"></a>

##### instance_componentAddText.oninit(fn) ⇒ <code>module:jaaJSU~$dom.instance\_component</code>
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom.instance_componentAddText) <a name="module_jaaJSU..$dom.instance_componentAddText.oninit" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L276" title="$dom_component.js:276"><small>(defined@276)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_jaaJSU..$dom.DomAssignObject"></a>

#### $dom.DomAssignObject : <code>Object</code>
Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for [$dom.assign]($dom.assign). There are some notes and changes:
 - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
 - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.DomAssignObject" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L565" title="$dom_component.js:565"><small>(defined@565)</small></a>  
**Category**: virtual  

* * *

