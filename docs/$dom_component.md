<a name="module_jaaJSU"></a>

## jaaJSU

* [jaaJSU](#module_jaaJSU)
    * [~$dom](#module_jaaJSU..$dom) : <code>object</code>
        * [.empty(container)](#module_jaaJSU..$dom.empty)
        * [.insertAfter(new_element, reference)](#module_jaaJSU..$dom.insertAfter)
        * [.replace(el_old, el_new)](#module_jaaJSU..$dom.replace)
        * [.component([el_name], attrs, [params])](#module_jaaJSU..$dom.component) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) \| [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty)
        * [.assign(element, ...object_attributes)](#module_jaaJSU..$dom.assign)
        * _virtual_
            * [.ComponentEmpty](#module_jaaJSU..$dom.ComponentEmpty) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
                * [.mount()](#module_jaaJSU..$dom.ComponentEmpty.mount)
            * [.Component](#module_jaaJSU..$dom.Component) : <code>Object</code>
                * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom.Component.add) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add)
                * [.addText(text, [shift])](#module_jaaJSU..$dom.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText)
                * [.component(share, [shift])](#module_jaaJSU..$dom.Component.component) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
                * [.mount(element, [type])](#module_jaaJSU..$dom.Component.mount) ⇒ <code>NodeElement</code>
                * [.recalculateDeep(shift)](#module_jaaJSU..$dom.Component.recalculateDeep) ℗
                * [.getParentElement()](#module_jaaJSU..$dom.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
                * [.setShift([shift])](#module_jaaJSU..$dom.Component.setShift) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
                * [.initStorage()](#module_jaaJSU..$dom.Component.initStorage) ⇒ <code>Object</code> ℗
                * [.update(new_data)](#module_jaaJSU..$dom.Component.update) ⇒ <code>Boolean</code>
                * [.share](#module_jaaJSU..$dom.Component.share) : <code>Object</code>
                    * [.destroy()](#module_jaaJSU..$dom.Component.share.destroy) ⇒ <code>Null</code>
                    * [.isStatic()](#module_jaaJSU..$dom.Component.share.isStatic) ⇒ <code>Boolean</code>
                    * [.mount(element, [type])](#module_jaaJSU..$dom.Component.share.mount) ⇒ <code>NodeElement</code>
                    * [.update(new_data)](#module_jaaJSU..$dom.Component.share.update) ⇒ <code>Boolean</code>
            * [.Component__Add](#module_jaaJSU..$dom.Component__Add) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
                * [.getReference()](#module_jaaJSU..$dom.Component__Add.getReference) ⇒ <code>NodeElement</code>
                * [.oninit(fn)](#module_jaaJSU..$dom.Component__Add.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
                * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom.Component__Add.onupdate) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.onUpdateFunction](#module_jaaJSU..$dom.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject)
            * [.Component__AddText](#module_jaaJSU..$dom.Component__AddText) : <code>Component</code>
                * [.oninit(fn)](#module_jaaJSU..$dom.Component__AddText.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
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
    * [.component([el_name], attrs, [params])](#module_jaaJSU..$dom.component) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) \| [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty)
    * [.assign(element, ...object_attributes)](#module_jaaJSU..$dom.assign)
    * _virtual_
        * [.ComponentEmpty](#module_jaaJSU..$dom.ComponentEmpty) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.mount()](#module_jaaJSU..$dom.ComponentEmpty.mount)
        * [.Component](#module_jaaJSU..$dom.Component) : <code>Object</code>
            * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom.Component.add) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add)
            * [.addText(text, [shift])](#module_jaaJSU..$dom.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText)
            * [.component(share, [shift])](#module_jaaJSU..$dom.Component.component) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.mount(element, [type])](#module_jaaJSU..$dom.Component.mount) ⇒ <code>NodeElement</code>
            * [.recalculateDeep(shift)](#module_jaaJSU..$dom.Component.recalculateDeep) ℗
            * [.getParentElement()](#module_jaaJSU..$dom.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
            * [.setShift([shift])](#module_jaaJSU..$dom.Component.setShift) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.initStorage()](#module_jaaJSU..$dom.Component.initStorage) ⇒ <code>Object</code> ℗
            * [.update(new_data)](#module_jaaJSU..$dom.Component.update) ⇒ <code>Boolean</code>
            * [.share](#module_jaaJSU..$dom.Component.share) : <code>Object</code>
                * [.destroy()](#module_jaaJSU..$dom.Component.share.destroy) ⇒ <code>Null</code>
                * [.isStatic()](#module_jaaJSU..$dom.Component.share.isStatic) ⇒ <code>Boolean</code>
                * [.mount(element, [type])](#module_jaaJSU..$dom.Component.share.mount) ⇒ <code>NodeElement</code>
                * [.update(new_data)](#module_jaaJSU..$dom.Component.share.update) ⇒ <code>Boolean</code>
        * [.Component__Add](#module_jaaJSU..$dom.Component__Add) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.getReference()](#module_jaaJSU..$dom.Component__Add.getReference) ⇒ <code>NodeElement</code>
            * [.oninit(fn)](#module_jaaJSU..$dom.Component__Add.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
            * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom.Component__Add.onupdate) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
        * [.onUpdateFunction](#module_jaaJSU..$dom.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject)
        * [.Component__AddText](#module_jaaJSU..$dom.Component__AddText) : <code>Component</code>
            * [.oninit(fn)](#module_jaaJSU..$dom.Component__AddText.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
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

#### $dom.component([el_name], attrs, [params]) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) \| [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty)
This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.component" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L93" title="$dom_component.js:93"><small>(defined@93)</small></a>  
**Returns**: [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) \| [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty) - Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!  
**Version**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [el_name] | <code>String</code> | <code>&quot;EMPTY&quot;</code> | Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. |
| attrs | [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) |  | The second argument for [assign](#module_jaaJSU..$dom.assign) |
| [params] | <code>Object</code> | <code>{}</code> | Parameters |
| [params.mapUpdate] | <code>function</code> \| <code>Undefined</code> | <code>Undefined</code> | This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [add](#module_jaaJSU..$dom.Component.add) |


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

#### $dom.ComponentEmpty : [<code>Component</code>](#module_jaaJSU..$dom.Component)
In generall, all methods from [Component](#module_jaaJSU..$dom.Component) don't do anything. Also during "mounting" there are some changes see method [mount](#module_jaaJSU..$dom.ComponentEmpty.mount).

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.ComponentEmpty" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L48" title="$dom_component.js:48"><small>(defined@48)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$dom.ComponentEmpty.mount"></a>

##### ComponentEmpty.mount()
The same syntax as [mount](#module_jaaJSU..$dom.Component.mount). But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").

**Kind**: static method of [<code>ComponentEmpty</code>](#module_jaaJSU..$dom.ComponentEmpty) <a name="module_jaaJSU..$dom.ComponentEmpty.mount" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L59" title="$dom_component.js:59"><small>(defined@59)</small></a>  

* * *

<a name="module_jaaJSU..$dom.Component"></a>

#### $dom.Component : <code>Object</code>
This is minimal export of "functional class" [component](#module_jaaJSU..$dom.component) and its methods (if they are chainable).

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.Component" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L130" title="$dom_component.js:130"><small>(defined@130)</small></a>  
**Category**: virtual  

* [.Component](#module_jaaJSU..$dom.Component) : <code>Object</code>
    * [.add(el_name, attrs, [shift])](#module_jaaJSU..$dom.Component.add) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add)
    * [.addText(text, [shift])](#module_jaaJSU..$dom.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText)
    * [.component(share, [shift])](#module_jaaJSU..$dom.Component.component) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
    * [.mount(element, [type])](#module_jaaJSU..$dom.Component.mount) ⇒ <code>NodeElement</code>
    * [.recalculateDeep(shift)](#module_jaaJSU..$dom.Component.recalculateDeep) ℗
    * [.getParentElement()](#module_jaaJSU..$dom.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
    * [.setShift([shift])](#module_jaaJSU..$dom.Component.setShift) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
    * [.initStorage()](#module_jaaJSU..$dom.Component.initStorage) ⇒ <code>Object</code> ℗
    * [.update(new_data)](#module_jaaJSU..$dom.Component.update) ⇒ <code>Boolean</code>
    * [.share](#module_jaaJSU..$dom.Component.share) : <code>Object</code>
        * [.destroy()](#module_jaaJSU..$dom.Component.share.destroy) ⇒ <code>Null</code>
        * [.isStatic()](#module_jaaJSU..$dom.Component.share.isStatic) ⇒ <code>Boolean</code>
        * [.mount(element, [type])](#module_jaaJSU..$dom.Component.share.mount) ⇒ <code>NodeElement</code>
        * [.update(new_data)](#module_jaaJSU..$dom.Component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="module_jaaJSU..$dom.Component.add"></a>

##### Component.add(el_name, attrs, [shift]) ⇒ [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add)
This add element to component

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.add" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L145" title="$dom_component.js:145"><small>(defined@145)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_name | <code>String</code> |  | Name of element (for example `LI`, `P`, `A`, ...). |
| attrs | [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) |  | Internally uses [assign](#module_jaaJSU..$dom.assign), `null`\|`undefined` is also supported (`null` is probably better for readability). |
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

<a name="module_jaaJSU..$dom.Component.addText"></a>

##### Component.addText(text, [shift]) ⇒ [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText)
This add element to component

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.addText" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L243" title="$dom_component.js:243"><small>(defined@243)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>String</code> |  | Argument for `document.createTextNode` |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom.Component.add) |

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

<a name="module_jaaJSU..$dom.Component.component"></a>

##### Component.component(share, [shift]) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
Method for including another component by usint its `share` key.

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.component" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L287" title="$dom_component.js:287"><small>(defined@287)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| share | [<code>share</code>](#module_jaaJSU..$dom.Component.share) |  |  |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom.Component.add) |

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

<a name="module_jaaJSU..$dom.Component.mount"></a>

##### Component.mount(element, [type]) ⇒ <code>NodeElement</code>
Add element to live DOM

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.mount" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L317" title="$dom_component.js:317"><small>(defined@317)</small></a>  
**Returns**: <code>NodeElement</code> - `container`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="module_jaaJSU..$dom.Component.recalculateDeep"></a>

##### Component.recalculateDeep(shift) ℗
Updates `deep`

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.recalculateDeep" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L373" title="$dom_component.js:373"><small>(defined@373)</small></a>  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | see [add](#module_jaaJSU..$dom.Component.add) |


* * *

<a name="module_jaaJSU..$dom.Component.getParentElement"></a>

##### Component.getParentElement() ⇒ <code>NodeElement</code> ℗
Returns parent element (or "fragment pseudo element")

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.getParentElement" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L385" title="$dom_component.js:385"><small>(defined@385)</small></a>  
**Returns**: <code>NodeElement</code> - Returns parent element (i. e. `DocumenFragment` if component is empty)  
**Access**: private  

* * *

<a name="module_jaaJSU..$dom.Component.setShift"></a>

##### Component.setShift([shift]) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
Method provide way to change nesting behaviour. It can be helpful for loops

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.setShift" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L396" title="$dom_component.js:396"><small>(defined@396)</small></a>  
**Chainable**  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#module_jaaJSU..$dom.Component.add) |

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

<a name="module_jaaJSU..$dom.Component.initStorage"></a>

##### Component.initStorage() ⇒ <code>Object</code> ℗
Initialize internal storage

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.initStorage" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L434" title="$dom_component.js:434"><small>(defined@434)</small></a>  
**Returns**: <code>Object</code> - `{ register, registerComponent, update, unregister}`  
**Access**: private  

* * *

<a name="module_jaaJSU..$dom.Component.update"></a>

##### Component.update(new_data) ⇒ <code>Boolean</code>
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.update" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L512" title="$dom_component.js:512"><small>(defined@512)</small></a>  
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

<a name="module_jaaJSU..$dom.Component.share"></a>

##### Component.share : <code>Object</code>
Its purpose is to make easy transfering methods somewhere else (like for using in another component, see [component](#module_jaaJSU..$dom.Component.component) method).

**Kind**: static typedef of [<code>Component</code>](#module_jaaJSU..$dom.Component) <a name="module_jaaJSU..$dom.Component.share" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L122" title="$dom_component.js:122"><small>(defined@122)</small></a>  

* [.share](#module_jaaJSU..$dom.Component.share) : <code>Object</code>
    * [.destroy()](#module_jaaJSU..$dom.Component.share.destroy) ⇒ <code>Null</code>
    * [.isStatic()](#module_jaaJSU..$dom.Component.share.isStatic) ⇒ <code>Boolean</code>
    * [.mount(element, [type])](#module_jaaJSU..$dom.Component.share.mount) ⇒ <code>NodeElement</code>
    * [.update(new_data)](#module_jaaJSU..$dom.Component.share.update) ⇒ <code>Boolean</code>


* * *

<a name="module_jaaJSU..$dom.Component.share.destroy"></a>

###### share.destroy() ⇒ <code>Null</code>
Method remove element form live DOM and returns null

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom.Component.share) <a name="module_jaaJSU..$dom.Component.share.destroy" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L356" title="$dom_component.js:356"><small>(defined@356)</small></a>  
**Access**: public  
**Example**  
```js
let c= $dom.component("DIV", null);
c.mount(document.body, "replaceContent");
c= c.share.destroy();
//=> c===null AND <body></body>
```

* * *

<a name="module_jaaJSU..$dom.Component.share.isStatic"></a>

###### share.isStatic() ⇒ <code>Boolean</code>
Methods returns if it was `onupdate` used

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom.Component.share) <a name="module_jaaJSU..$dom.Component.share.isStatic" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L553" title="$dom_component.js:553"><small>(defined@553)</small></a>  
**Returns**: <code>Boolean</code> - If there is some listeners `onupdate`  
**Access**: public  

* * *

<a name="module_jaaJSU..$dom.Component.share.mount"></a>

###### share.mount(element, [type]) ⇒ <code>NodeElement</code>
Add element to live DOM

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom.Component.share) <a name="module_jaaJSU..$dom.Component.share.mount" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L317" title="$dom_component.js:317"><small>(defined@317)</small></a>  
**Returns**: <code>NodeElement</code> - `container`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="module_jaaJSU..$dom.Component.share.update"></a>

###### share.update(new_data) ⇒ <code>Boolean</code>
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>share</code>](#module_jaaJSU..$dom.Component.share) <a name="module_jaaJSU..$dom.Component.share.update" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L512" title="$dom_component.js:512"><small>(defined@512)</small></a>  
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

<a name="module_jaaJSU..$dom.Component__Add"></a>

#### $dom.Component\_\_Add : [<code>Component</code>](#module_jaaJSU..$dom.Component)
This is `Component` with aditional methods

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.Component__Add" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L138" title="$dom_component.js:138"><small>(defined@138)</small></a>  
**Category**: virtual  

* [.Component__Add](#module_jaaJSU..$dom.Component__Add) : [<code>Component</code>](#module_jaaJSU..$dom.Component)
    * [.getReference()](#module_jaaJSU..$dom.Component__Add.getReference) ⇒ <code>NodeElement</code>
    * [.oninit(fn)](#module_jaaJSU..$dom.Component__Add.oninit) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
    * [.onupdate(data, onUpdateFunction)](#module_jaaJSU..$dom.Component__Add.onupdate) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)


* * *

<a name="module_jaaJSU..$dom.Component__Add.getReference"></a>

##### Component__Add.getReference() ⇒ <code>NodeElement</code>
Returns reference of currently added element

**Kind**: static method of [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) <a name="module_jaaJSU..$dom.Component__Add.getReference" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L185" title="$dom_component.js:185"><small>(defined@185)</small></a>  

* * *

<a name="module_jaaJSU..$dom.Component__Add.oninit"></a>

##### Component__Add.oninit(fn) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) <a name="module_jaaJSU..$dom.Component__Add.oninit" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L192" title="$dom_component.js:192"><small>(defined@192)</small></a>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_jaaJSU..$dom.Component__Add.onupdate"></a>

##### Component__Add.onupdate(data, onUpdateFunction) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
This method allows to register function ([onUpdateFunction](#module_jaaJSU..$dom.onUpdateFunction)) which shoul be invoke when given **keys** in `data` will be changed (see [update](#module_jaaJSU..$dom.Component.update)).

**Kind**: static method of [<code>Component\_\_Add</code>](#module_jaaJSU..$dom.Component__Add) <a name="module_jaaJSU..$dom.Component__Add.onupdate" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L200" title="$dom_component.js:200"><small>(defined@200)</small></a>  

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
**Returns**: <code>\*</code> \| [<code>DomAssignObject</code>](#module_jaaJSU..$dom.DomAssignObject) - Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method [update](#module_jaaJSU..$dom.Component.update) is called. This callback can be registered when element is created (see method [add](#module_jaaJSU..$dom.Component.add)) see [Component__Add](#module_jaaJSU..$dom.Component__Add).  
**Category**: virtual  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Includes all subsribed keys from `data` see method [onupdate](#module_jaaJSU..$dom.Component__Add.onupdate) |


* * *

<a name="module_jaaJSU..$dom.Component__AddText"></a>

#### $dom.Component\_\_AddText : <code>Component</code>
This is `Component` with aditional methods

**Kind**: static typedef of [<code>$dom</code>](#module_jaaJSU..$dom) <a name="module_jaaJSU..$dom.Component__AddText" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L236" title="$dom_component.js:236"><small>(defined@236)</small></a>  
**Category**: virtual  

* * *

<a name="module_jaaJSU..$dom.Component__AddText.oninit"></a>

##### Component__AddText.oninit(fn) ⇒ [<code>Component</code>](#module_jaaJSU..$dom.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_AddText</code>](#module_jaaJSU..$dom.Component__AddText) <a name="module_jaaJSU..$dom.Component__AddText.oninit" href="https://github.com/jaandrle/dollar_dom_component/blob/master/bin/$dom_component.js#L276" title="$dom_component.js:276"><small>(defined@276)</small></a>  

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

