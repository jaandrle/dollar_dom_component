<a name="$dom"></a>

## $dom : <code>object</code>
This NAMESPACE provides features for DOM elemnts.

**Kind**: global namespace  

* [$dom](#$dom) : <code>object</code>
    * [.types](#$dom.types) : <code>object</code> ℗
        * [.ComponentEmpty](#$dom.types.ComponentEmpty) : [<code>Component</code>](#$dom.types.Component)
            * [.mount()](#$dom.types.ComponentEmpty.mount)
        * [.Component](#$dom.types.Component) : <code>Object</code>
            * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
            * [.addText(text, [shift])](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
            * [.component(share, [shift])](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
            * [.mount(element, [type])](#$dom.types.Component.mount) ⇒ <code>NodeElement</code>
            * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
            * [.getParentElement()](#$dom.types.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
            * [.setShift([shift])](#$dom.types.Component.setShift)
            * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
            * [.update(new_data)](#$dom.types.Component.update)
            * [.share](#$dom.types.Component.share) : <code>Object</code>
                * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
                * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
                * [.mount(element, [type])](#$dom.types.Component.share.mount) ⇒ <code>NodeElement</code>
                * [.update(new_data)](#$dom.types.Component.share.update)
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
    * [.component([el_name], attrs, [params])](#$dom.component) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add) \| [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty)
    * [.assign(element, ...object_attributes)](#$dom.assign)


* * *

<a name="$dom.types"></a>

### $dom.types : <code>object</code> ℗
Just virtual key!!! This is overwiev of all internal types for better description.

**Kind**: static namespace of [<code>$dom</code>](#$dom)  
**Access**: private  

* [.types](#$dom.types) : <code>object</code> ℗
    * [.ComponentEmpty](#$dom.types.ComponentEmpty) : [<code>Component</code>](#$dom.types.Component)
        * [.mount()](#$dom.types.ComponentEmpty.mount)
    * [.Component](#$dom.types.Component) : <code>Object</code>
        * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
        * [.addText(text, [shift])](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
        * [.component(share, [shift])](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.mount(element, [type])](#$dom.types.Component.mount) ⇒ <code>NodeElement</code>
        * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
        * [.getParentElement()](#$dom.types.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
        * [.setShift([shift])](#$dom.types.Component.setShift)
        * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
        * [.update(new_data)](#$dom.types.Component.update)
        * [.share](#$dom.types.Component.share) : <code>Object</code>
            * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
            * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
            * [.mount(element, [type])](#$dom.types.Component.share.mount) ⇒ <code>NodeElement</code>
            * [.update(new_data)](#$dom.types.Component.share.update)
    * [.Component__Add](#$dom.types.Component__Add) : [<code>Component</code>](#$dom.types.Component)
        * [.getReference()](#$dom.types.Component__Add.getReference) ⇒ <code>NodeElement</code>
        * [.oninit(fn)](#$dom.types.Component__Add.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
        * [.onupdate(data, onUpdateFunction)](#$dom.types.Component__Add.onupdate) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.onUpdateFunction](#$dom.types.onUpdateFunction) ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject)
    * [.Component__AddText](#$dom.types.Component__AddText) : <code>Component</code>
        * [.oninit(fn)](#$dom.types.Component__AddText.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.DomAssignObject](#$dom.types.DomAssignObject) : <code>Object</code>


* * *

<a name="$dom.types.ComponentEmpty"></a>

#### types.ComponentEmpty : [<code>Component</code>](#$dom.types.Component)
In generall, all methods from [Component](#$dom.types.Component) don't do anything. Also during "mounting" there are some changes see method [mount](#$dom.types.ComponentEmpty.mount).

**Kind**: static typedef of [<code>types</code>](#$dom.types)  

* * *

<a name="$dom.types.ComponentEmpty.mount"></a>

##### ComponentEmpty.mount()
The same syntax as [mount](#$dom.types.Component.mount). But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").

**Kind**: static method of [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty)  

* * *

<a name="$dom.types.Component"></a>

#### types.Component : <code>Object</code>
This is minimal export of "functional class" [component](#$dom.component) and its methods (if they are chainable).

**Kind**: static typedef of [<code>types</code>](#$dom.types)  

* [.Component](#$dom.types.Component) : <code>Object</code>
    * [.add(el_name, attrs, [shift])](#$dom.types.Component.add) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
    * [.addText(text, [shift])](#$dom.types.Component.addText) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
    * [.component(share, [shift])](#$dom.types.Component.component) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.mount(element, [type])](#$dom.types.Component.mount) ⇒ <code>NodeElement</code>
    * [.recalculateDeep(shift)](#$dom.types.Component.recalculateDeep) ℗
    * [.getParentElement()](#$dom.types.Component.getParentElement) ⇒ <code>NodeElement</code> ℗
    * [.setShift([shift])](#$dom.types.Component.setShift)
    * [.initStorage()](#$dom.types.Component.initStorage) ⇒ <code>Object</code> ℗
    * [.update(new_data)](#$dom.types.Component.update)
    * [.share](#$dom.types.Component.share) : <code>Object</code>
        * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
        * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
        * [.mount(element, [type])](#$dom.types.Component.share.mount) ⇒ <code>NodeElement</code>
        * [.update(new_data)](#$dom.types.Component.share.update)


* * *

<a name="$dom.types.Component.add"></a>

##### Component.add(el_name, attrs, [shift]) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add)
This add element to component

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el_name | <code>String</code> |  | Name of element (for example `LI`, `P`, `A`, ...). |
| attrs | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) |  | Internally uses [assign](#$dom.assign), `null`\|`undefined` is also supported (`null` is probably better for readability). |
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

<a name="$dom.types.Component.addText"></a>

##### Component.addText(text, [shift]) ⇒ [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)
This add element to component

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>String</code> |  | Argument for `document.createTextNode` |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#$dom.types.Component.add) |

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

<a name="$dom.types.Component.component"></a>

##### Component.component(share, [shift]) ⇒ [<code>Component</code>](#$dom.types.Component)
Method for including another component by usint its `share` key.

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| share | [<code>share</code>](#$dom.types.Component.share) |  |  |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#$dom.types.Component.add) |

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


* * *

<a name="$dom.types.Component.recalculateDeep"></a>

##### Component.recalculateDeep(shift) ℗
Updates `deep`

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| shift | <code>Number</code> | see [add](#$dom.types.Component.add) |


* * *

<a name="$dom.types.Component.getParentElement"></a>

##### Component.getParentElement() ⇒ <code>NodeElement</code> ℗
Returns parent element (or "fragment pseudo element")

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Returns**: <code>NodeElement</code> - Returns parent element (i. e. `DocumenFragment` if component is empty)  
**Access**: private  

* * *

<a name="$dom.types.Component.setShift"></a>

##### Component.setShift([shift])
Method provide way to change nesting behaviour. It can be helpful for loops

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [shift] | <code>Number</code> | <code>0</code> | see [add](#$dom.types.Component.add) |

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

<a name="$dom.types.Component.initStorage"></a>

##### Component.initStorage() ⇒ <code>Object</code> ℗
Initialize internal storage

**Kind**: static method of [<code>Component</code>](#$dom.types.Component)  
**Returns**: <code>Object</code> - `{ register, registerComponent, update, unregister}`  
**Access**: private  

* * *

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

<a name="$dom.types.Component.share"></a>

##### Component.share : <code>Object</code>
Its purpose is to make easy transfering methods somewhere else (like for using in another component, see [component](#$dom.types.Component.component) method).

**Kind**: static typedef of [<code>Component</code>](#$dom.types.Component)  

* [.share](#$dom.types.Component.share) : <code>Object</code>
    * [.destroy()](#$dom.types.Component.share.destroy) ⇒ <code>Null</code>
    * [.isStatic()](#$dom.types.Component.share.isStatic) ⇒ <code>Boolean</code>
    * [.mount(element, [type])](#$dom.types.Component.share.mount) ⇒ <code>NodeElement</code>
    * [.update(new_data)](#$dom.types.Component.share.update)


* * *

<a name="$dom.types.Component.share.destroy"></a>

###### share.destroy() ⇒ <code>Null</code>
Method remove element form live DOM and returns null

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share)  
**Access**: public  
**Example**  
```js
let c= $dom.component("DIV", null);
c.mount(document.body, "replaceContent");
c= c.destroy();
//=> c===null AND <body></body>
```

* * *

<a name="$dom.types.Component.share.isStatic"></a>

###### share.isStatic() ⇒ <code>Boolean</code>
Methods returns if it was `onupdate` used

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share)  
**Returns**: <code>Boolean</code> - If there is some listeners `onupdate`  
**Access**: public  

* * *

<a name="$dom.types.Component.share.mount"></a>

###### share.mount(element, [type]) ⇒ <code>NodeElement</code>
Add element to live DOM

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share)  
**Returns**: <code>NodeElement</code> - `container`  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>NodeElement</code> |  | Element where to places this component |
| [type] | <code>String</code> | <code>&quot;childLast&quot;</code> | <br/>- Change type of mounting  <br/>- `childLast` places component as last child  <br/>- `childFirst` places component as first child  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)  <br/>- `replace` replaces `element` by component  <br/>- `before` places component before `element`  <br/>- `after` places component after `element` (uses `$dom.insertAfter`) |


* * *

<a name="$dom.types.Component.share.update"></a>

###### share.update(new_data)
Method updates all registered varibles by keys `onupdates` and calls follower functions

**Kind**: static method of [<code>share</code>](#$dom.types.Component.share)  
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

<a name="$dom.types.Component__Add"></a>

#### types.Component\_\_Add : [<code>Component</code>](#$dom.types.Component)
This is `Component` with aditional methods

**Kind**: static typedef of [<code>types</code>](#$dom.types)  

* [.Component__Add](#$dom.types.Component__Add) : [<code>Component</code>](#$dom.types.Component)
    * [.getReference()](#$dom.types.Component__Add.getReference) ⇒ <code>NodeElement</code>
    * [.oninit(fn)](#$dom.types.Component__Add.oninit) ⇒ [<code>Component</code>](#$dom.types.Component)
    * [.onupdate(data, onUpdateFunction)](#$dom.types.Component__Add.onupdate) ⇒ [<code>Component</code>](#$dom.types.Component)


* * *

<a name="$dom.types.Component__Add.getReference"></a>

##### Component__Add.getReference() ⇒ <code>NodeElement</code>
Returns reference of currently added element

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add)  

* * *

<a name="$dom.types.Component__Add.oninit"></a>

##### Component__Add.oninit(fn) ⇒ [<code>Component</code>](#$dom.types.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="$dom.types.Component__Add.onupdate"></a>

##### Component__Add.onupdate(data, onUpdateFunction) ⇒ [<code>Component</code>](#$dom.types.Component)
This method allows to register function ([onUpdateFunction](#$dom.types.onUpdateFunction)) which shoul be invoke when given **keys** in `data` will be changed (see [update](#$dom.types.Component.update)).

**Kind**: static method of [<code>Component\_\_Add</code>](#$dom.types.Component__Add)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdateFunction` is called. |
| onUpdateFunction | [<code>onUpdateFunction</code>](#$dom.types.onUpdateFunction) | This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element. |

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

<a name="$dom.types.onUpdateFunction"></a>

#### types.onUpdateFunction ⇒ <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject)
**Kind**: static typedef of [<code>types</code>](#$dom.types)  
**Returns**: <code>\*</code> \| [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) - Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method [update](#$dom.types.Component.update) is called. This callback can be registered when element is created (see method [add](#$dom.types.Component.add)) see [Component__Add](#$dom.types.Component__Add).  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Includes all subsribed keys from `data` see method [onupdate](#$dom.types.Component__Add.onupdate) |


* * *

<a name="$dom.types.Component__AddText"></a>

#### types.Component\_\_AddText : <code>Component</code>
This is `Component` with aditional methods

**Kind**: static typedef of [<code>types</code>](#$dom.types)  

* * *

<a name="$dom.types.Component__AddText.oninit"></a>

##### Component__AddText.oninit(fn) ⇒ [<code>Component</code>](#$dom.types.Component)
This procedure allows to call given function `fn` during registering element.

**Kind**: static method of [<code>Component\_\_AddText</code>](#$dom.types.Component__AddText)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="$dom.types.DomAssignObject"></a>

#### types.DomAssignObject : <code>Object</code>
Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for [assign](#$dom.assign). There are some notes and changes:
 - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
 - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
 - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
 - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;

**Kind**: static typedef of [<code>types</code>](#$dom.types)  

* * *

<a name="$dom.empty"></a>

### $dom.empty(container)
Procedure removes all children of `container`

**Kind**: static method of [<code>$dom</code>](#$dom)  

| Param | Type |
| --- | --- |
| container | <code>NodeElement</code> | 


* * *

<a name="$dom.insertAfter"></a>

### $dom.insertAfter(new_element, reference)
Procedure places `new_element` after `reference` elements

**Kind**: static method of [<code>$dom</code>](#$dom)  

| Param | Type |
| --- | --- |
| new_element | <code>NodeElement</code> | 
| reference | <code>NodeElement</code> | 


* * *

<a name="$dom.replace"></a>

### $dom.replace(el_old, el_new)
Procedure replaces `el_old` element by new one (`new_el`)

**Kind**: static method of [<code>$dom</code>](#$dom)  

| Param | Type |
| --- | --- |
| el_old | <code>NodeElement</code> | 
| el_new | <code>NodeElement</code> | 


* * *

<a name="$dom.component"></a>

### $dom.component([el_name], attrs, [params]) ⇒ [<code>Component\_\_Add</code>](#$dom.types.Component__Add) \| [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty)
This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.

**Kind**: static method of [<code>$dom</code>](#$dom)  
**Returns**: [<code>Component\_\_Add</code>](#$dom.types.Component__Add) \| [<code>ComponentEmpty</code>](#$dom.types.ComponentEmpty) - Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!  
**Version**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [el_name] | <code>String</code> | <code>&quot;EMPTY&quot;</code> | Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated. |
| attrs | [<code>DomAssignObject</code>](#$dom.types.DomAssignObject) |  | The second argument for [assign](#$dom.assign) |
| [params] | <code>Object</code> | <code>{}</code> | Parameters |
| [params.mapUpdate] | <code>function</code> \| <code>Undefined</code> | <code>Undefined</code> | This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [add](#$dom.types.Component.add) |


* * *

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

