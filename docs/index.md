## Objects

<dl>
<dt><a href="#$dom">$dom</a> : <code>object</code></dt>
<dd><p>This NAMESPACE provides features for DOM elemnts.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ComponentShare">ComponentShare</a> : <code>Object</code></dt>
<dd><p>Is key <code>share</code> in <a href="#component"><code>Component</code></a>. Its purpose is to make easy transfering methods somewhere else (like for using in another component, see <a href="#componentcomponent"><code>component</code></a> method).</p>
<p>In additional, it includes <code>mount</code>, <code>update</code> from <a href="#component"><code>Component</code></a>.</p>
</dd>
<dt><a href="#Component">Component</a> : <code>Object</code></dt>
<dd><p>This is output of &quot;functional class&quot; <a href="#domcomponent">$dom.component</a>.</p>
<p>Some methods can add another methods! For example, for <code>$dom.component</code> it also includes methods from <a href="#componentadd">Component.add</a>.</p>
</dd>
<dt><a href="#Component__Add">Component__Add</a> : <code><a href="#Component">Component</a></code></dt>
<dd><p>This is <code>Component</code> with aditional methods</p>
</dd>
<dt><a href="#Component__AddText">Component__AddText</a> : <code><a href="#Component">Component</a></code></dt>
<dd><p>This is <code>Component</code> with aditional methods</p>
</dd>
</dl>

<a name="$dom"></a>

## $dom : <code>object</code>
This NAMESPACE provides features for DOM elemnts.

**Kind**: global namespace  

* [$dom](#$dom) : <code>object</code>
    * [.empty(container)](#$dom.empty)
    * [.insertAfter(new_element, reference)](#$dom.insertAfter)
    * [.replace(el_old, el_new)](#$dom.replace)
    * [.component(el_name, attrs, params)](#$dom.component) ⇒ [<code>Component</code>](#Component)
    * [.assign(element, ...object_attributes)](#$dom.assign)

<a name="$dom.empty"></a>

### $dom.empty(container)
Procedure removes all children of `container`

**Kind**: static method of [<code>$dom</code>](#$dom)  

| Param | Type |
| --- | --- |
| container | <code>NodeElement</code> | 

<a name="$dom.insertAfter"></a>

### $dom.insertAfter(new_element, reference)
Procedure places `new_element` after `reference` elements

**Kind**: static method of [<code>$dom</code>](#$dom)  

| Param | Type |
| --- | --- |
| new_element | <code>NodeElement</code> | 
| reference | <code>NodeElement</code> | 

<a name="$dom.replace"></a>

### $dom.replace(el_old, el_new)
Procedure replaces `el_old` element by new one (`new_el`)

**Kind**: static method of [<code>$dom</code>](#$dom)  

| Param | Type |
| --- | --- |
| el_old | <code>NodeElement</code> | 
| el_new | <code>NodeElement</code> | 

<a name="$dom.component"></a>

### $dom.component(el_name, attrs, params) ⇒ [<code>Component</code>](#Component)
This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#$dom)  
**Version**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| el_name | <code>String</code> | - Name of element (for example `LI`, `P`, `A`, …).  - This is parent element of component. |
| attrs | <code>Object</code> | - The second argument for [`$dom.assign`](./$dom.{namespace}.html#methods_assign) |
| params | <code>Object</code> |  |
| params.mapUpdate | <code>function</code> \| <code>Boolean</code> | - `[params.mapUpdate=undefined]`  - This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see [`add`](#methods_add) |

<a name="$dom.assign"></a>

### $dom.assign(element, ...object_attributes)
Procedure for merging object into the element properties.
Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).

**Kind**: static method of [<code>$dom</code>](#$dom)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>NodeElement</code> |  |
| ...object_attributes | <code>Object</code> | <br/>- Object shall holds **NodeElement** properties like `className`, `textContent`, ...  <br/>- For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.  <br/>- The same notation can be used for **CSS variables** (the key is called `style_vars`).  <br/>- **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`  <br/>- **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList(class_name)` others `el.classList(class_name, Booleans(...))`  <br/>- *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`). |

**Example**  
```js
const el= document.body;
     const onclick= function(){ console.log(this.dataset.js_param); };
     $dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
     //result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
     //console output on click: "CLICKED"
     $dom.assign(el, { classList: { testClass: -1 } });
     //result HTML: <body class="testClass" style="color: red;" data-js_param="CLICKED">BODY</body>
     $dom.assign(el, { classList: { testClass: -1 } });
     //result HTML: <body class="" style="color: red;" data-js_param="CLICKED">BODY</body>
     $dom.assign(el, { classList: { testClass: true } });//or 1
     //result HTML: <body class="testClass" style="color: red;" data-js_param="CLICKED">BODY</body>
     //...
```
<a name="ComponentShare"></a>

## ComponentShare : <code>Object</code>
Is key `share` in [`Component`](#component). Its purpose is to make easy transfering methods somewhere else (like for using in another component, see [`component`](#componentcomponent) method).

In additional, it includes `mount`, `update` from [`Component`](#component).

**Kind**: global typedef  

* [ComponentShare](#ComponentShare) : <code>Object</code>
    * [.destroy()](#ComponentShare.destroy) ⇒ <code>Null</code>
    * [.isStatic()](#ComponentShare.isStatic) ⇒ <code>Boolean</code>

<a name="ComponentShare.destroy"></a>

### ComponentShare.destroy() ⇒ <code>Null</code>
Method remove element form live DOM and returns null

**Kind**: static method of [<code>ComponentShare</code>](#ComponentShare)  
**Access**: public  
**Example**  
```js
let { share: test }= $dom.component("DIV", null);
     test.mount(document.body);
     test= test.destroy();
```
<a name="ComponentShare.isStatic"></a>

### ComponentShare.isStatic() ⇒ <code>Boolean</code>
Methods returns if it was `onupdate` used

**Kind**: static method of [<code>ComponentShare</code>](#ComponentShare)  
**Returns**: <code>Boolean</code> - If there is some listeners `onupdate`  
**Access**: public  
<a name="Component"></a>

## Component : <code>Object</code>
This is output of "functional class" [$dom.component](#domcomponent).

Some methods can add another methods! For example, for `$dom.component` it also includes methods from [Component.add](#componentadd).

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| share | [<code>ComponentShare</code>](#ComponentShare) | 


* [Component](#Component) : <code>Object</code>
    * [.add(el_name, attrs, [shift])](#Component.add) ⇒ [<code>Component\_\_Add</code>](#Component__Add)
    * [.addText(text, shift)](#Component.addText) ⇒ [<code>Component\_\_AddText</code>](#Component__AddText)
    * [.component(share, shift)](#Component.component) ⇒ [<code>Component</code>](#Component)
    * [.mount(element, [type])](#Component.mount) ⇒ <code>NodeElement</code>
    * [.setShift(shift)](#Component.setShift)
    * [.update(new_data)](#Component.update)

<a name="Component.add"></a>

### Component.add(el_name, attrs, [shift]) ⇒ [<code>Component\_\_Add</code>](#Component__Add)
This add element to component

**Kind**: static method of [<code>Component</code>](#Component)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_name | <code>String</code> |  | Name of element (for example `LI`, `P`, `A`, ...). |
| attrs | <code>Object</code> |  | <br/>- `null|undefined` is also supported (`null` is probably recommendet for better readability) <br/>- The second argument for [`$dom.assign`](#domassign) |
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
<a name="Component.addText"></a>

### Component.addText(text, shift) ⇒ [<code>Component\_\_AddText</code>](#Component__AddText)
This add element to component

**Kind**: static method of [<code>Component</code>](#Component)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | - Argument for `document.createTextNode` |
| shift | <code>Number</code> | - see [`add`](#componentadd) |

**Example**  
```js
function testTextLi({ href= "https://www.seznam.cz" }= {}){
         const { add, addText, share }= $dom.component("LI", null);
             add("P", { textContent: "Link test: " });
                 add("A", { textContent: "link ", href });
                     add("STRONG", { textContent: `(${href.replace("https://www.", "")})` });
                 addText("!", -2);
                 add("BR", null, -1);
                 addText("Test new line.", -1);
         return share;
     }
     //result: '<p>Link test: <a href="...">link <strong>...</strong></a>!<br>Test new line.</p>'
```
<a name="Component.component"></a>

### Component.component(share, shift) ⇒ [<code>Component</code>](#Component)
Method for including another component by usint its `share` key.

**Kind**: static method of [<code>Component</code>](#Component)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| share | <code>Object</code> |  |
| shift | <code>Number</code> | - see [`add`](#methods_add) |

<a name="Component.mount"></a>

### Component.mount(element, [type]) ⇒ <code>NodeElement</code>
Add element to live DOM

**Kind**: static method of [<code>Component</code>](#Component)  
**Returns**: <code>NodeElement</code> - `container`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | - Element where to places this component |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |

<a name="Component.setShift"></a>

### Component.setShift(shift)
Method provide way to change nesting behaviour. It can be helpful for loops

**Kind**: static method of [<code>Component</code>](#Component)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | - see [`add`](#methods_add) |

**Example**  
```js
function testNesting(){
         const { add, setShift, share }= $dom.component("DIV", null);
             setShift(0);
         for(let i= 0; i<5; i++){
             add("P", { textContent: `Paragraph no. ${i}.` }, -1);
         }
         return share;
     }
```
<a name="Component.update"></a>

### Component.update(new_data)
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>Component</code>](#Component)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| new_data | <code>Object</code> \| <code>function</code> | - When `$dom.component` is initialized, it is possible to register `mapUpdate`  - **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!**  - It is also possible to register function to detect changes itself see examples |

**Example**  
```js
// SIMPLE example
     const data_A= { a: "A" };
     const data_A_update= { a: "AAA" };
     const { add, mount, update }= $dom.component("UL", null);
         add("LI", { onupdate: [ data_A, ({ a })=>({ textContent: a }) ] });//`[ { a },` add listener for "a"
     mount(document.body);
     update(data_A_update);
     // EXAMPLE WITH `mapUpdate`
     const data_B= { a: { b: "A" }};
     const data_B_update= { a: { b: "AAA" }};
     const { add, mount, update }= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         add("LI", { onupdate: [ data_B, ({ a })=>({ textContent: a }) ] });//`[ { a },` add listener for "a" see `mapUpdate`
     mount(document.body);
     update(data_B_update);
     // EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
     const { add, mount, update }= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         add("LI", { onupdate: [ { a: 1 }, ({ a })=>({ textContent: a }) ] });//`[ { a },` add listener for "a" see `mapUpdate`
     mount(document.body);
     update(({ a })=> { a: ++a });
```
<a name="Component__Add"></a>

## Component\_\_Add : [<code>Component</code>](#Component)
This is `Component` with aditional methods

**Kind**: global typedef  

* [Component__Add](#Component__Add) : [<code>Component</code>](#Component)
    * [.getReference()](#Component__Add.getReference) ⇒ <code>NodeElement</code>
    * [.oninit(fn)](#Component__Add.oninit) ⇒ [<code>Component</code>](#Component)
    * [.onupdate(data, onUpdateFunction)](#Component__Add.onupdate) ⇒ [<code>Component</code>](#Component)

<a name="Component__Add.getReference"></a>

### Component__Add.getReference() ⇒ <code>NodeElement</code>
Returns reference of currently added element

**Kind**: static method of [<code>Component\_\_Add</code>](#Component__Add)  
<a name="Component__Add.oninit"></a>

### Component__Add.oninit(fn) ⇒ [<code>Component</code>](#Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_Add</code>](#Component__Add)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

<a name="Component__Add.onupdate"></a>

### Component__Add.onupdate(data, onUpdateFunction) ⇒ [<code>Component</code>](#Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_Add</code>](#Component__Add)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | This allows register listener for given keys of Object `data` |
| onUpdateFunction | <code>function</code> | This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element. |

**Example**  
```js
const c= $dom.component("DIV", null);
     …
     c.add("P", null).onupdate({ key: "This is init value" }, ({ key })=> ({ textContent: key }));//=> <p>This is init value</p>
     …
     c.update({ key: "Value changed" });//=> <p>Value changed<p>
```
<a name="Component__AddText"></a>

## Component\_\_AddText : [<code>Component</code>](#Component)
This is `Component` with aditional methods

**Kind**: global typedef  
<a name="Component__AddText.oninit"></a>

### Component__AddText.oninit(fn) ⇒ [<code>Component</code>](#Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_AddText</code>](#Component__AddText)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

