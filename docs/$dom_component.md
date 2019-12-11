## Modules

<dl>
<dt><a href="#module_jaaJSU">jaaJSU</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#$dom">$dom</a> : <code>object</code></dt>
<dd><p>Exported name of <a href="#module_jaaJSU..$dom">$dom</a> namespace.</p>
</dd>
</dl>

<a name="module_jaaJSU"></a>

## jaaJSU

* [jaaJSU](#module_jaaJSU)
    * [~$dom](#module_jaaJSU..$dom) : <code>object</code>
        * _static_
            * [.empty(container)](#module_jaaJSU..$dom.empty)
            * [.insertAfter(new_element, reference)](#module_jaaJSU..$dom.insertAfter)
            * [.replace(el_old, el_new)](#module_jaaJSU..$dom.replace)
            * [.component([el_name], attrs, [params])](#module_jaaJSU..$dom.component) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) \| [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty)
            * [.assign(element, ...object_attributes)](#module_jaaJSU..$dom.assign)
        * _inner_
            * _types descriptions_
                * [~instance_componentEmpty](#module_jaaJSU..$dom..instance_componentEmpty) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                    * [.mount()](#module_jaaJSU..$dom..instance_componentEmpty.mount)
                * [~instance_component](#module_jaaJSU..$dom..instance_component) : <code>Object</code>
                    * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom..instance_component.add) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                    * [.addText(text, [shift])](#module_jaaJSU..$dom..instance_component.addText) ⇒ [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText)
                    * [.component(share, [shift])](#module_jaaJSU..$dom..instance_component.component) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                    * [.mount(element, [type])](#module_jaaJSU..$dom..instance_component.mount) ⇒ <code>NodeElement</code>
                    * [.recalculateDeep(shift)](#module_jaaJSU..$dom..instance_component.recalculateDeep) ℗
                    * [.getParentElement()](#module_jaaJSU..$dom..instance_component.getParentElement) ⇒ <code>NodeElement</code> ℗
                    * [.setShift([shift])](#module_jaaJSU..$dom..instance_component.setShift) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                    * [.initStorage()](#module_jaaJSU..$dom..instance_component.initStorage) ⇒ <code>Object</code> ℗
                    * [.update(new_data)](#module_jaaJSU..$dom..instance_component.update) ⇒ <code>Boolean</code>
                    * [.share](#module_jaaJSU..$dom..instance_component.share) : <code>Object</code>
                        * [.destroy()](#module_jaaJSU..$dom..instance_component.share.destroy) ⇒ <code>Null</code>
                        * [.isStatic()](#module_jaaJSU..$dom..instance_component.share.isStatic) ⇒ <code>Boolean</code>
                        * [.mount(element, [type])](#module_jaaJSU..$dom..instance_component.share.mount) ⇒ <code>NodeElement</code>
                        * [.update(new_data)](#module_jaaJSU..$dom..instance_component.share.update) ⇒ <code>Boolean</code>
                * [~instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                    * [.getReference()](#module_jaaJSU..$dom..instance_componentAdd.getReference) ⇒ <code>NodeElement</code>
                    * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAdd.oninit) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                    * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom..instance_componentAdd.onupdate) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [~onUpdateFunction](#module_jaaJSU..$dom..onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject)
                * [~instance_componentAddText](#module_jaaJSU..$dom..instance_componentAddText) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                    * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAddText.oninit) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [~DomAssignObject](#module_jaaJSU..$dom..DomAssignObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$dom"></a>

### jaaJSU~$dom : <code>object</code>
>This NAMESPACE provides features for DOM elements.

**Kind**: inner namespace of [<code>jaaJSU</code>](#module_jaaJSU) <a name="module_jaaJSU..$dom" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L8" title="$dom_component.js:8"><small>(defined@8)</small></a>  
**Category**: namespaces  

* [~$dom](#module_jaaJSU..$dom) : <code>object</code>
    * _static_
        * [.empty(container)](#module_jaaJSU..$dom.empty)
        * [.insertAfter(new_element, reference)](#module_jaaJSU..$dom.insertAfter)
        * [.replace(el_old, el_new)](#module_jaaJSU..$dom.replace)
        * [.component([el_name], attrs, [params])](#module_jaaJSU..$dom.component) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) \| [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty)
        * [.assign(element, ...object_attributes)](#module_jaaJSU..$dom.assign)
    * _inner_
        * _types descriptions_
            * [~instance_componentEmpty](#module_jaaJSU..$dom..instance_componentEmpty) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.mount()](#module_jaaJSU..$dom..instance_componentEmpty.mount)
            * [~instance_component](#module_jaaJSU..$dom..instance_component) : <code>Object</code>
                * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom..instance_component.add) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
                * [.addText(text, [shift])](#module_jaaJSU..$dom..instance_component.addText) ⇒ [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText)
                * [.component(share, [shift])](#module_jaaJSU..$dom..instance_component.component) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.mount(element, [type])](#module_jaaJSU..$dom..instance_component.mount) ⇒ <code>NodeElement</code>
                * [.recalculateDeep(shift)](#module_jaaJSU..$dom..instance_component.recalculateDeep) ℗
                * [.getParentElement()](#module_jaaJSU..$dom..instance_component.getParentElement) ⇒ <code>NodeElement</code> ℗
                * [.setShift([shift])](#module_jaaJSU..$dom..instance_component.setShift) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.initStorage()](#module_jaaJSU..$dom..instance_component.initStorage) ⇒ <code>Object</code> ℗
                * [.update(new_data)](#module_jaaJSU..$dom..instance_component.update) ⇒ <code>Boolean</code>
                * [.share](#module_jaaJSU..$dom..instance_component.share) : <code>Object</code>
                    * [.destroy()](#module_jaaJSU..$dom..instance_component.share.destroy) ⇒ <code>Null</code>
                    * [.isStatic()](#module_jaaJSU..$dom..instance_component.share.isStatic) ⇒ <code>Boolean</code>
                    * [.mount(element, [type])](#module_jaaJSU..$dom..instance_component.share.mount) ⇒ <code>NodeElement</code>
                    * [.update(new_data)](#module_jaaJSU..$dom..instance_component.share.update) ⇒ <code>Boolean</code>
            * [~instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.getReference()](#module_jaaJSU..$dom..instance_componentAdd.getReference) ⇒ <code>NodeElement</code>
                * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAdd.oninit) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom..instance_componentAdd.onupdate) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
            * [~onUpdateFunction](#module_jaaJSU..$dom..onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject)
            * [~instance_componentAddText](#module_jaaJSU..$dom..instance_componentAddText) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
                * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAddText.oninit) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
            * [~DomAssignObject](#module_jaaJSU..$dom..DomAssignObject) : <code>Object</code>


* * *

<a name="module_jaaJSU..$dom.empty"></a>

#### $dom.empty(container)
>Procedure removes all children of `container`

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.empty" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L14" title="$dom_component.js:14"><small>(defined@14)</small></a>  

| Param | Type |
| --- | --- |
| container | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.insertAfter"></a>

#### $dom.insertAfter(new_element, reference)
>Procedure places `new_element` after `reference` elements

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.insertAfter" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L24" title="$dom_component.js:24"><small>(defined@24)</small></a>  

| Param | Type |
| --- | --- |
| new_element | <code>NodeElement</code> | 
| reference | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.replace"></a>

#### $dom.replace(el_old, el_new)
>Procedure replaces `el_old` element by new one (`new_el`)

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.replace" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L36" title="$dom_component.js:36"><small>(defined@36)</small></a>  

| Param | Type |
| --- | --- |
| el_old | <code>NodeElement</code> | 
| el_new | <code>NodeElement</code> | 


* * *

<a name="module_jaaJSU..$dom.component"></a>

#### $dom.component([el_name], attrs, [params]) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) \| [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty)
>This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.component" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L100" title="$dom_component.js:100"><small>(defined@100)</small></a>  
**Returns**: [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) \| [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty) - Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!  
**See**: [https://github.com/jaandrle/dollar_dom_component](https://github.com/jaandrle/dollar_dom_component)  
**Version**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [el_name] | <code>String</code> | <code>&quot;EMPTY&quot;</code> | Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. |
| attrs | [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject) |  | The second argument for [assign](#module_jaaJSU..$dom.assign) |
| [params] | <code>Object</code> | <code>{}</code> | Parameters |
| [params.mapUpdate] | <code>function</code> \| <code>Undefined</code> | <code>Undefined</code> | This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [add](#module_jaaJSU..$dom..instance_component.add) |


* * *

<a name="module_jaaJSU..$dom.assign"></a>

#### $dom.assign(element, ...object_attributes)
>Procedure for merging object into the element properties.
Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.assign" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L609" title="$dom_component.js:609"><small>(defined@609)</small></a>  

| Param | Type |
| --- | --- |
| element | <code>NodeElement</code> | 
| ...object_attributes | [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject) | 

**Example** *(#1: All together)*  
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
**Example** *(#2 **\*.classList.toggle**)*  
```js
const el= document.body;
$dom.assign(el, { classList: { testClass: -1 } });
//result HTML: <body class="testClass">…</body>
$dom.assign(el, { classList: { testClass: -1 } });
//result HTML: <body class="">…</body>

$dom.assign(el, { classList: { testClass: true } });//or 1
//result HTML: <body class="testClass">…</body>
$dom.assign(el, { classList: { testClass: false } });//or 0
//result HTML: <body class="">…</body>
//...
```
**Example** *(#3 Links and images)*  
```js
$dom.assign(A_ELEMENT, { href: "www.google.com" });//=> <a href="www.google.com" …
$dom.assign(IMG_ELEMENT, { src: "image.png" });//=> <img src="image.png" …
```

* * *

<a name="module_jaaJSU..$dom..instance_componentEmpty"></a>

#### $dom~instance\_componentEmpty : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>In generall, all methods from [instance_component](#module_jaaJSU..$dom..instance_component) don't do anything. Also during "mounting" there are some changes see method [mount](#module_jaaJSU..$dom..instance_componentEmpty.mount).

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..instance_componentEmpty" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L54" title="$dom_component.js:54"><small>(defined@54)</small></a>  
**Category**: types descriptions  

* * *

<a name="module_jaaJSU..$dom..instance_componentEmpty.mount"></a>

##### instance_componentEmpty.mount()
>The same syntax as [mount](#module_jaaJSU..$dom..instance_component.mount). But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").

**Kind**: static method of [<code>instance\_componentEmpty</code>](#module_jaaJSU..$dom..instance_componentEmpty) <a name="module_jaaJSU..$dom..instance_componentEmpty.mount" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L66" title="$dom_component.js:66"><small>(defined@66)</small></a>  

* * *

<a name="module_jaaJSU..$dom..instance_component"></a>

#### $dom~instance\_component : <code>Object</code>
>This is minimal export of "functional class" [component](#module_jaaJSU..$dom.component) and its methods (if they are chainable).

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..instance_component" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L138" title="$dom_component.js:138"><small>(defined@138)</small></a>  
**Category**: types descriptions  

* [~instance_component](#module_jaaJSU..$dom..instance_component) : <code>Object</code>
    * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom..instance_component.add) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
    * [.addText(text, [shift])](#module_jaaJSU..$dom..instance_component.addText) ⇒ [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText)
    * [.component(share, [shift])](#module_jaaJSU..$dom..instance_component.component) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
    * [.mount(element, [type])](#module_jaaJSU..$dom..instance_component.mount) ⇒ <code>NodeElement</code>
    * [.recalculateDeep(shift)](#module_jaaJSU..$dom..instance_component.recalculateDeep) ℗
    * [.getParentElement()](#module_jaaJSU..$dom..instance_component.getParentElement) ⇒ <code>NodeElement</code> ℗
    * [.setShift([shift])](#module_jaaJSU..$dom..instance_component.setShift) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
    * [.initStorage()](#module_jaaJSU..$dom..instance_component.initStorage) ⇒ <code>Object</code> ℗
    * [.update(new_data)](#module_jaaJSU..$dom..instance_component.update) ⇒ <code>Boolean</code>
    * [.share](#module_jaaJSU..$dom..instance_component.share) : <code>Object</code>
        * [.destroy()](#module_jaaJSU..$dom..instance_component.share.destroy) ⇒ <code>Null</code>
        * [.isStatic()](#module_jaaJSU..$dom..instance_component.share.isStatic) ⇒ <code>Boolean</code>
        * [.mount(element, [type])](#module_jaaJSU..$dom..instance_component.share.mount) ⇒ <code>NodeElement</code>
        * [.update(new_data)](#module_jaaJSU..$dom..instance_component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="module_jaaJSU..$dom..instance_component.add"></a>

##### instance_component.add(el_name, attrs, [shift]) ⇒ [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd)
>This add element to component

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.add" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L155" title="$dom_component.js:155"><small>(defined@155)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_name | <code>String</code> |  | Name of element (for example `LI`, `P`, `A`, ...). |
| attrs | [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject) |  | Internally uses [assign](#module_jaaJSU..$dom.assign), `null`\|`undefined` is also supported (`null` is probably better for readability). |
| [shift] | <code>Number</code> | <code>0</code> | Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example. |

**Example**  
```js
const UL= document.getElementById('SOME UL');
const { add }= $dom.component("LI", { className: "list_item" });
//result: <li class="list_item">...</li>
add("DIV", { textContent: "Child of .list_item", className: "deep1" });
//result: <li class="list_item"><div class="deep1">...</div></li>
    add("DIV", { textContent: "Child of div.deep1", className: "deep2" });
    //result: ...<div class="deep1"><div class="deep2">...</div></div>...
        add("DIV", { textContent: "Child of div.deep2", className: "deep3" });
        //result: ...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
        add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);
        //result: ...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
//next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
    add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
    //result: this is on 2nd level
add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
//result: this is on 0 level
    add("DIV", null);
    //just DIV without attributes
```

* * *

<a name="module_jaaJSU..$dom..instance_component.addText"></a>

##### instance_component.addText(text, [shift]) ⇒ [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText)
>This add element to component

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.addText" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L255" title="$dom_component.js:255"><small>(defined@255)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>String</code> |  | Argument for `document.createTextNode` |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom..instance_component.add) |

**Example**  
```js
const c1= $dom.component("P", { textContent: "TEXT" });
const c2= $dom.component("P", null);
    c2.addText("TEXT");
//c1-> <p>TEXT</p>  ===  <p>TEXT</p> <-c2
```
**Example**  
```js
function testTextLi({ href= "https://www.seznam.cz" }= {}){
    const c= $dom.component("LI", null);
        c.add("P", { textContent: "Link test: " });
            c.add("A", { textContent: "link ", href });
                c.add("STRONG", { textContent: `(${href.replace("https://www.", "")})` });
            c.addText("!", -2);
            c.add("BR", null, -1);
            c.addText("Test new line.", -1);
    return c.share;
}
//result: '<p>Link test: <a href="...">link <strong>...</strong></a>!<br>Test new line.</p>'
```

* * *

<a name="module_jaaJSU..$dom..instance_component.component"></a>

##### instance_component.component(share, [shift]) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>Method for including another component by usint its `share` key.

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.component" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L299" title="$dom_component.js:299"><small>(defined@299)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| share | [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) |  |  |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom..instance_component.add) |

**Example**  
```js
function p({ textContent }){
     const cP= $dom.component("P", { textContent });
     return cP.share;
}
const c= $dom.component("DIV", null);
for(let i=0; i<3; i++){ c.component(p({ textContent: i })); }
c.mount(document.body, "replaceContent");
//= <body><div><p>0</p><p>1</p><p>2</p></div></body>
```

* * *

<a name="module_jaaJSU..$dom..instance_component.mount"></a>

##### instance_component.mount(element, [type]) ⇒ <code>NodeElement</code>
>Add element to live DOM

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.mount" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L329" title="$dom_component.js:329"><small>(defined@329)</small></a>  
**Returns**: <code>NodeElement</code> - `container`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="module_jaaJSU..$dom..instance_component.recalculateDeep"></a>

##### instance_component.recalculateDeep(shift) ℗
>Updates `deep`

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.recalculateDeep" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L393" title="$dom_component.js:393"><small>(defined@393)</small></a>  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | see [add](#module_jaaJSU..$dom..instance_component.add) |


* * *

<a name="module_jaaJSU..$dom..instance_component.getParentElement"></a>

##### instance_component.getParentElement() ⇒ <code>NodeElement</code> ℗
>Returns parent element (or "fragment pseudo element")

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.getParentElement" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L405" title="$dom_component.js:405"><small>(defined@405)</small></a>  
**Returns**: <code>NodeElement</code> - Returns parent element (i. e. `DocumenFragment` if component is empty)  
**Access**: private  

* * *

<a name="module_jaaJSU..$dom..instance_component.setShift"></a>

##### instance_component.setShift([shift]) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>Method provide way to change nesting behaviour. It can be helpful for loops

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.setShift" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L416" title="$dom_component.js:416"><small>(defined@416)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom..instance_component.add) |

**Example**  
```js
function testNesting(){
    const c= $dom.component("DIV", null);
        c.setShift(0);
    for(let i= 0; i<5; i++){
        c.add("P", { textContent: `Paragraph no. ${i}.` }, -1);
    }
    return c.share;
}
//=> div> 5*p
```
**Example**  
```js
function testNesting(){
    const c= $dom.component("DIV", null);
    for(let i= 0; i<5; i++){
        c.add("P", { textContent: `Paragraph no. ${i}.` });
         //c.setShift();//or 0 => div> p> p> p> …
      //c.setShift(-1); => div> p> p> p> …
    c.setShift(-2);
    }
    return c.share;
}
//=> div> 5*p
```

* * *

<a name="module_jaaJSU..$dom..instance_component.initStorage"></a>

##### instance_component.initStorage() ⇒ <code>Object</code> ℗
>Initialize internal storage

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.initStorage" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L454" title="$dom_component.js:454"><small>(defined@454)</small></a>  
**Returns**: <code>Object</code> - `{ register, registerComponent, update, unregister}`  
**Access**: private  

* * *

<a name="module_jaaJSU..$dom..instance_component.update"></a>

##### instance_component.update(new_data) ⇒ <code>Boolean</code>
>Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.update" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L542" title="$dom_component.js:542"><small>(defined@542)</small></a>  
**Returns**: <code>Boolean</code> - If success `1`, else `0`.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| new_data | <code>Object</code> \| <code>function</code> | <br/>- When `$dom.component` is initialized, it is possible to register `mapUpdate` <br/>- **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!** <br/>- It is also possible to register function to detect changes itself see examples |

**Example**  
```js
// SIMPLE example
const data_A= { a: "A" };
const data_A_update= { a: "AAA" };
const c= $dom.component("UL", null);
    c.add("LI", null)
         .onupdate(data_A, ({ a })=>({ textContent: a }));//`{ a }` add listener for "a"
c.mount(document.body);
c.update(data_A_update);
```
**Example**  
```js
// EXAMPLE WITH `mapUpdate`
const data_B= { a: { b: "A" }};
const data_B_update= { a: { b: "AAA" }};
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate(data_B, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(data_B_update);
```
**Example**  
```js
// EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate({ a: 1 }, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(({ a })=> { a: ++a });
```

* * *

<a name="module_jaaJSU..$dom..instance_component.share"></a>

##### instance_component.share : <code>Object</code>
>Its purpose is to make easy transfering methods somewhere else (like for using in another component, see [component](#module_jaaJSU..$dom..instance_component.component) method).

**Kind**: static typedef of [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component) <a name="module_jaaJSU..$dom..instance_component.share" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L130" title="$dom_component.js:130"><small>(defined@130)</small></a>  

* [.share](#module_jaaJSU..$dom..instance_component.share) : <code>Object</code>
    * [.destroy()](#module_jaaJSU..$dom..instance_component.share.destroy) ⇒ <code>Null</code>
    * [.isStatic()](#module_jaaJSU..$dom..instance_component.share.isStatic) ⇒ <code>Boolean</code>
    * [.mount(element, [type])](#module_jaaJSU..$dom..instance_component.share.mount) ⇒ <code>NodeElement</code>
    * [.update(new_data)](#module_jaaJSU..$dom..instance_component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="module_jaaJSU..$dom..instance_component.share.destroy"></a>

###### share.destroy() ⇒ <code>Null</code>
>Method remove element form live DOM and returns null

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) <a name="module_jaaJSU..$dom..instance_component.share.destroy" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L374" title="$dom_component.js:374"><small>(defined@374)</small></a>  
**Access**: public  
**Example**  
```js
let c= $dom.component("DIV", null);
c.mount(document.body, "replaceContent");
c= c.share.destroy();
//=> c===null AND <body></body>
```

* * *

<a name="module_jaaJSU..$dom..instance_component.share.isStatic"></a>

###### share.isStatic() ⇒ <code>Boolean</code>
>Methods returns if it was `onupdate` used

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) <a name="module_jaaJSU..$dom..instance_component.share.isStatic" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L583" title="$dom_component.js:583"><small>(defined@583)</small></a>  
**Returns**: <code>Boolean</code> - If there is some listeners `onupdate`  
**Access**: public  

* * *

<a name="module_jaaJSU..$dom..instance_component.share.mount"></a>

###### share.mount(element, [type]) ⇒ <code>NodeElement</code>
>Add element to live DOM

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) <a name="module_jaaJSU..$dom..instance_component.share.mount" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L329" title="$dom_component.js:329"><small>(defined@329)</small></a>  
**Returns**: <code>NodeElement</code> - `container`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="module_jaaJSU..$dom..instance_component.share.update"></a>

###### share.update(new_data) ⇒ <code>Boolean</code>
>Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom..instance_component.share) <a name="module_jaaJSU..$dom..instance_component.share.update" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L542" title="$dom_component.js:542"><small>(defined@542)</small></a>  
**Returns**: <code>Boolean</code> - If success `1`, else `0`.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| new_data | <code>Object</code> \| <code>function</code> | <br/>- When `$dom.component` is initialized, it is possible to register `mapUpdate` <br/>- **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!** <br/>- It is also possible to register function to detect changes itself see examples |

**Example**  
```js
// SIMPLE example
const data_A= { a: "A" };
const data_A_update= { a: "AAA" };
const c= $dom.component("UL", null);
    c.add("LI", null)
         .onupdate(data_A, ({ a })=>({ textContent: a }));//`{ a }` add listener for "a"
c.mount(document.body);
c.update(data_A_update);
```
**Example**  
```js
// EXAMPLE WITH `mapUpdate`
const data_B= { a: { b: "A" }};
const data_B_update= { a: { b: "AAA" }};
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate(data_B, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(data_B_update);
```
**Example**  
```js
// EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate({ a: 1 }, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(({ a })=> { a: ++a });
```

* * *

<a name="module_jaaJSU..$dom..instance_componentAdd"></a>

#### $dom~instance\_componentAdd : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>This is `Component` with aditional methods

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..instance_componentAdd" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L147" title="$dom_component.js:147"><small>(defined@147)</small></a>  
**Category**: types descriptions  

* [~instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd) : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
    * [.getReference()](#module_jaaJSU..$dom..instance_componentAdd.getReference) ⇒ <code>NodeElement</code>
    * [.oninit(fn)](#module_jaaJSU..$dom..instance_componentAdd.oninit) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
    * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom..instance_componentAdd.onupdate) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)


* * *

<a name="module_jaaJSU..$dom..instance_componentAdd.getReference"></a>

##### instance_componentAdd.getReference() ⇒ <code>NodeElement</code>
>Returns reference of currently added element

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) <a name="module_jaaJSU..$dom..instance_componentAdd.getReference" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L195" title="$dom_component.js:195"><small>(defined@195)</small></a>  

* * *

<a name="module_jaaJSU..$dom..instance_componentAdd.oninit"></a>

##### instance_componentAdd.oninit(fn) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) <a name="module_jaaJSU..$dom..instance_componentAdd.oninit" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L202" title="$dom_component.js:202"><small>(defined@202)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_jaaJSU..$dom..instance_componentAdd.onupdate"></a>

##### instance_componentAdd.onupdate(data, onUpdateFunction) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>This method allows to register function ([module:jaaJSU~$dom.onUpdateFunction](module:jaaJSU~$dom.onUpdateFunction)) which shoul be invoke when given **keys** in `data` will be changed (see [update](#module_jaaJSU..$dom..instance_component.update)).

**Kind**: static method of [<code>instance\_componentAdd</code>](#module_jaaJSU..$dom..instance_componentAdd) <a name="module_jaaJSU..$dom..instance_componentAdd.onupdate" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L210" title="$dom_component.js:210"><small>(defined@210)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdateFunction` is called. |
| onUpdateFunction | [<code>onUpdateFunction</code>](#module_jaaJSU..$dom..onUpdateFunction) | This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element. |

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

<a name="module_jaaJSU..$dom..onUpdateFunction"></a>

#### $dom~onUpdateFunction ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject)
**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..onUpdateFunction" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L230" title="$dom_component.js:230"><small>(defined@230)</small></a>  
**Returns**: <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom..DomAssignObject) - Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method [update](#module_jaaJSU..$dom..instance_component.update) is called. This callback can be registered when element is created (see method [add](#module_jaaJSU..$dom..instance_component.add)) see [instance_componentAdd](#module_jaaJSU..$dom..instance_componentAdd).  
**Category**: types descriptions  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Includes all subsribed keys from `data` see method [onupdate](#module_jaaJSU..$dom..instance_componentAdd.onupdate) |


* * *

<a name="module_jaaJSU..$dom..instance_componentAddText"></a>

#### $dom~instance\_componentAddText : [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>This is `Component` with aditional methods

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..instance_componentAddText" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L247" title="$dom_component.js:247"><small>(defined@247)</small></a>  
**Category**: types descriptions  

* * *

<a name="module_jaaJSU..$dom..instance_componentAddText.oninit"></a>

##### instance_componentAddText.oninit(fn) ⇒ [<code>instance\_component</code>](#module_jaaJSU..$dom..instance_component)
>This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>instance\_componentAddText</code>](#module_jaaJSU..$dom..instance_componentAddText) <a name="module_jaaJSU..$dom..instance_componentAddText.oninit" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L288" title="$dom_component.js:288"><small>(defined@288)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_jaaJSU..$dom..DomAssignObject"></a>

#### $dom~DomAssignObject : <code>Object</code>
>Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for [assign](#module_jaaJSU..$dom.assign). There are some notes and changes:
 - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
 - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;

**Kind**: inner typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom..DomAssignObject" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L595" title="$dom_component.js:595"><small>(defined@595)</small></a>  
**Category**: types descriptions  

* * *

<a name="$dom"></a>

## $dom : <code>object</code>
>Exported name of [$dom](#module_jaaJSU..$dom) namespace.

**Kind**: global namespace <a name="$dom" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L48" title="$dom_component.js:48"><small>(defined@48)</small></a>  

* * *

