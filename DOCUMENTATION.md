<a name="$dom"></a>

## $dom : <code>object</code>
This NAMESPACE provides features for DOM elemnts.

**Kind**: global namespace  

* [$dom](#$dom) : <code>object</code>
    * [.types](#$dom.types) : <code>object</code> ℗
        * [.Component](#$dom.types.Component) : <code>Object</code>
            * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
            * [.addText(text, shift)](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
            * [.component(share, shift)](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
            * [.mount(element, [type])](#$dom.types.Component.mount) ⇒ <code>NodeElement</code>
            * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
            * [.getParentElement()](#$dom.types.Component.getParentElement) ℗
            * [.setShift(shift)](#$dom.types.Component.setShift)
            * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
            * [.update(new_data)](#$dom.types.Component.update)
            * [.share](#$dom.types.Component.share) : <code>Object</code>
                * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
                * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
        * [.Component__Add](#$dom.types.Component__Add) : [<code>Component</code>](#$dom.types.Component)
            * [.getReference()](#$dom.types.Component__Add.getReference) ⇒ <code>NodeElement</code>
            * [.oninit(fn)](#$dom.types.Component__Add.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
            * [.onupdate(data, onUpdateFunction)](#$dom.types.Component__Add.onupdate) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.onUpdateFunction](#$dom.types.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject)
        * [.Component__AddText](#$dom.types.Component__AddText) : <code>Component</code>
            * [.oninit(fn)](#$dom.types.Component__AddText.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.DomAssignObject](#$dom.types.DomAssignObject) : <code>Object</code>
    * [.empty(container)](#$dom.empty)
    * [.insertAfter(new_element, reference)](#$dom.insertAfter)
    * [.replace(el_old, el_new)](#$dom.replace)
    * [.component(el_name, attrs, params)](#$dom.component) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
    * [.assign(element, ...object_attributes)](#$dom.assign)

<a name="$dom.types"></a>

### $dom.types : <code>object</code> ℗
Just virtual key!!! This is overwiev of all internal types for better description.

**Kind**: static namespace of [<code>$dom</code>](#$dom)  
**Access**: private  

* [.types](#$dom.types) : <code>object</code> ℗
    * [.Component](#$dom.types.Component) : <code>Object</code>
        * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
        * [.addText(text, shift)](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
        * [.component(share, shift)](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.mount(element, [type])](#$dom.types.Component.mount) ⇒ <code>NodeElement</code>
        * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
        * [.getParentElement()](#$dom.types.Component.getParentElement) ℗
        * [.setShift(shift)](#$dom.types.Component.setShift)
        * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
        * [.update(new_data)](#$dom.types.Component.update)
        * [.share](#$dom.types.Component.share) : <code>Object</code>
            * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
            * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
    * [.Component__Add](#$dom.types.Component__Add) : [<code>Component</code>](#$dom.types.Component)
        * [.getReference()](#$dom.types.Component__Add.getReference) ⇒ <code>NodeElement</code>
        * [.oninit(fn)](#$dom.types.Component__Add.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.onupdate(data, onUpdateFunction)](#$dom.types.Component__Add.onupdate) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.onUpdateFunction](#$dom.types.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject)
    * [.Component__AddText](#$dom.types.Component__AddText) : <code>Component</code>
        * [.oninit(fn)](#$dom.types.Component__AddText.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.DomAssignObject](#$dom.types.DomAssignObject) : <code>Object</code>

<a name="$dom.types.Component"></a>

#### types.Component : <code>Object</code>
This is minimal export of "functional class" [component](#$dom.component) and its methods (if they are chainable).

**Kind**: static typedef of [<code>types</code>](#$dom.types)  

* [.Component](#$dom.types.Component) : <code>Object</code>
    * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
    * [.addText(text, shift)](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
    * [.component(share, shift)](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.mount(element, [type])](#$dom.types.Component.mount) ⇒ <code>NodeElement</code>
    * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
    * [.getParentElement()](#$dom.types.Component.getParentElement) ℗
    * [.setShift(shift)](#$dom.types.Component.setShift)
    * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
    * [.update(new_data)](#$dom.types.Component.update)
    * [.share](#$dom.types.Component.share) : <code>Object</code>
        * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
        * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>

<a name="$dom.types.Component.add"></a>

##### Component.add(el_name, attrs, [shift]) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
This add element to component

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_name | <code>String</code> |  | Name of element (for example `LI`, `P`, `A`, ...). |
| attrs | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) |  | Internally uses [assign](#$dom.assign), <code>null|undefined</code> is also supported (`null` is probably better readability) |
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
<a name="$dom.types.Component.addText"></a>

##### Component.addText(text, shift) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
This add element to component

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Argument for `document.createTextNode` |
| shift | <code>Number</code> | see [add](#$dom.types.Component.add) |

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
<a name="$dom.types.Component.component"></a>

##### Component.component(share, shift) ⇒ [<code>Component</code>](#$dom.types.Component)
Method for including another component by usint its `share` key.

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| share | [<code>share</code>](#$dom.types.Component.share) |  |
| shift | <code>Number</code> | see [add](#$dom.types.Component.add) |

<a name="$dom.types.Component.mount"></a>

##### Component.mount(element, [type]) ⇒ <code>NodeElement</code>
Add element to live DOM

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Returns**: <code>NodeElement</code> - `container`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |

<a name="$dom.types.Component.recalculateDeep"></a>

##### Component.recalculateDeep(shift) ℗
Updates `deep`

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | see [add](#$dom.types.Component.add) |

<a name="$dom.types.Component.getParentElement"></a>

##### Component.getParentElement() ℗
Returns parent element (or "fragment pseudo element")

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: private  
<a name="$dom.types.Component.setShift"></a>

##### Component.setShift(shift)
Method provide way to change nesting behaviour. It can be helpful for loops

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | see [add](#$dom.types.Component.add) |

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
<a name="$dom.types.Component.initStorage"></a>

##### Component.initStorage() ⇒ <code>Object</code> ℗
Initialize internal storage

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Returns**: <code>Object</code> - `{ register, registerComponent, update, unregister}`  
**Access**: private  
<a name="$dom.types.Component.update"></a>

##### Component.update(new_data)
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| new_data | <code>Object</code> \| <code>function</code> | <br/>- When `$dom.component` is initialized, it is possible to register `mapUpdate` <br/>- **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!** <br/>- It is also possible to register function to detect changes itself see examples |

**Example**  
```js
// SIMPLE example
     const data_A= { a: "A" };
     const data_A_update= { a: "AAA" };
     const { add, mount, update }= $dom.component("UL", null);
         add("LI", null).onupdate(data_A, ({ a })=>({ textContent: a }));//`[ { a },` add listener for "a"
     mount(document.body);
     update(data_A_update);
     // EXAMPLE WITH `mapUpdate`
     const data_B= { a: { b: "A" }};
     const data_B_update= { a: { b: "AAA" }};
     const { add, mount, update }= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         add("LI", null).onupdate(data_B, ({ a })=>({ textContent: a }));//`[ { a },` add listener for "a" see `mapUpdate`
     mount(document.body);
     update(data_B_update);
     // EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
     const { add, mount, update }= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         add("LI", null).onupdate({ a: 1 }, ({ a })=>({ textContent: a }));//`[ { a },` add listener for "a" see `mapUpdate`
     mount(document.body);
     update(({ a })=> { a: ++a });
```
<a name="$dom.types.Component.share"></a>

##### Component.share : <code>Object</code>
Its purpose is to make easy transfering methods somewhere else (like for using in another component, see [component](#$dom.types.Component.component) method).

In additional, it includes `mount`, `update` from [Component](Component).

**Kind**: static typedef of [<code>Component</code>](#$dom.types.Component)  

* [.share](#$dom.types.Component.share) : <code>Object</code>
    * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
    * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>

<a name="$dom.types.Component.share.destroy"></a>

###### share.destroy() ⇒ <code>Null</code>
Method remove element form live DOM and returns null

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share)  
**Access**: public  
**Example**  
```js
let { share: test }= $dom.component("DIV", null);
test.mount(document.body);
test= test.destroy();
```
<a name="$dom.types.Component.share.isStatic"></a>

###### share.isStatic() ⇒ <code>Boolean</code>
Methods returns if it was `onupdate` used

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share)  
**Returns**: <code>Boolean</code> - If there is some listeners `onupdate`  
**Access**: public  
<a name="$dom.types.Component__Add"></a>

#### types.Component\_\_Add : [<code>Component</code>](#$dom.types.Component)
This is `Component` with aditional methods

**Kind**: static typedef of [<code>types</code>](#$dom.types)  

* [.Component__Add](#$dom.types.Component__Add) : [<code>Component</code>](#$dom.types.Component)
    * [.getReference()](#$dom.types.Component__Add.getReference) ⇒ <code>NodeElement</code>
    * [.oninit(fn)](#$dom.types.Component__Add.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.onupdate(data, onUpdateFunction)](#$dom.types.Component__Add.onupdate) ⇒ [<code>Component</code>](#$dom.types.Component)

<a name="$dom.types.Component__Add.getReference"></a>

##### Component__Add.getReference() ⇒ <code>NodeElement</code>
Returns reference of currently added element

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add)  
<a name="$dom.types.Component__Add.oninit"></a>

##### Component__Add.oninit(fn) ⇒ [<code>Component</code>](#$dom.types.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

<a name="$dom.types.Component__Add.onupdate"></a>

##### Component__Add.onupdate(data, onUpdateFunction) ⇒ [<code>Component</code>](#$dom.types.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | This allows register listener for given keys of Object `data` |
| onUpdateFunction | [<code>onUpdateFunction</code>](#$dom.types.onUpdateFunction) | This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element. |

**Example**  
```js
const c= $dom.component("DIV", null);
     …
     c.add("P", null).onupdate({ key: "This is init value" }, ({ key })=> ({ textContent: key }));//=> <p>This is init value</p>
     …
     c.update({ key: "Value changed" });//=> <p>Value changed</p>
```
<a name="$dom.types.onUpdateFunction"></a>

#### types.onUpdateFunction ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject)
**Kind**: static typedef of [<code>types</code>](#$dom.types)  
**Returns**: <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) - Primary should use `DomAssignObject`, but in generall this can do anything what make sence when [update](#$dom.types.Component.update) is called. This callback can be registered when element is created (see [add](#$dom.types.Component.add)) see [Component__Add](#$dom.types.Component__Add).  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Includes all subsribed keys from `data` see [onupdate](#$dom.types.Component__Add.onupdate) |

<a name="$dom.types.Component__AddText"></a>

#### types.Component\_\_AddText : <code>Component</code>
This is `Component` with aditional methods

**Kind**: static typedef of [<code>types</code>](#$dom.types)  
<a name="$dom.types.Component__AddText.oninit"></a>

##### Component__AddText.oninit(fn) ⇒ [<code>Component</code>](#$dom.types.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

<a name="$dom.types.DomAssignObject"></a>

#### types.DomAssignObject : <code>Object</code>
Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for [assign](#$dom.assign). There are some notes and changes:
 - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).

**Kind**: static typedef of [<code>types</code>](#$dom.types)  
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

### $dom.component(el_name, attrs, params) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#$dom)  
**Version**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| el_name | <code>String</code> | Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. |
| attrs | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) | The second argument for [assign](#$dom.assign) |
| params | <code>Object</code> |  |
| [params.mapUpdate] | <code>function</code> \| <code>Boolean</code> | This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see [Component.add](Component.add) |

<a name="$dom.assign"></a>

### $dom.assign(element, ...object_attributes)
Procedure for merging object into the element properties.
Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).

**Kind**: static method of [<code>$dom</code>](#$dom)  

| Param | Type |
| --- | --- |
| element | <code>NodeElement</code> | 
| ...object_attributes | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) | 

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
