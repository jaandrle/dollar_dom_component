[$dom.component](../README.md) / [%24dom](../modules/_dom.md) / component_empty

# Interface: component\_empty

[$dom](../modules/_dom.md).component_empty

In generall, all methods from [component_add](_dom.component_add.md) don't do anything.
In case of mounting only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").

## Hierarchy

- [`component_add`](_dom.component_add.md)<``""``\>

  ↳ **`component_empty`**

## Table of contents

### Properties

- [share](_dom.component_empty.md#share)

### Methods

- [add](_dom.component_empty.md#add)
- [addText](_dom.component_empty.md#addtext)
- [component](_dom.component_empty.md#component)
- [destroy](_dom.component_empty.md#destroy)
- [dynamicComponent](_dom.component_empty.md#dynamiccomponent)
- [getReference](_dom.component_empty.md#getreference)
- [isStatic](_dom.component_empty.md#isstatic)
- [mount](_dom.component_empty.md#mount)
- [on](_dom.component_empty.md#on)
- [ondestroy](_dom.component_empty.md#ondestroy)
- [oninit](_dom.component_empty.md#oninit)
- [onmount](_dom.component_empty.md#onmount)
- [onupdate](_dom.component_empty.md#onupdate)
- [setShift](_dom.component_empty.md#setshift)
- [update](_dom.component_empty.md#update)

## Properties

### share

• **share**: [`component_mainOut`](_dom.component_mainOut.md)<`HTMLElement`\>

#### Inherited from

[component_add](_dom.component_add.md).[share](_dom.component_add.md#share)

#### Defined in

$dom_component.d.ts:157

## Methods

### add

▸ **add**<`K`\>(`tag_name`, `attrs?`, `shift?`): [`component_add`](_dom.component_add.md)<`K`\>

This add element to component
```javascript
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

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``""`` \| ``"symbol"`` \| ``"object"`` \| ``"a"`` \| ``"abbr"`` \| ``"address"`` \| ``"applet"`` \| ``"area"`` \| ``"article"`` \| ``"aside"`` \| ``"audio"`` \| ``"b"`` \| ``"base"`` \| ``"basefont"`` \| ``"bdi"`` \| ``"bdo"`` \| ``"blockquote"`` \| ``"body"`` \| ``"br"`` \| ``"button"`` \| ``"canvas"`` \| ``"caption"`` \| ``"cite"`` \| ``"code"`` \| ``"col"`` \| ``"colgroup"`` \| ``"data"`` \| ``"datalist"`` \| ``"dd"`` \| ``"del"`` \| ``"details"`` \| ``"dfn"`` \| ``"dialog"`` \| ``"dir"`` \| ``"div"`` \| ``"dl"`` \| ``"dt"`` \| ``"em"`` \| ``"embed"`` \| ``"fieldset"`` \| ``"figcaption"`` \| ``"figure"`` \| ``"font"`` \| ``"footer"`` \| ``"form"`` \| ``"frame"`` \| ``"frameset"`` \| ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"head"`` \| ``"header"`` \| ``"hgroup"`` \| ``"hr"`` \| ``"html"`` \| ``"i"`` \| ``"iframe"`` \| ``"img"`` \| ``"input"`` \| ``"ins"`` \| ``"kbd"`` \| ``"label"`` \| ``"legend"`` \| ``"li"`` \| ``"link"`` \| ``"main"`` \| ``"map"`` \| ``"mark"`` \| ``"marquee"`` \| ``"menu"`` \| ``"meta"`` \| ``"meter"`` \| ``"nav"`` \| ``"noscript"`` \| ``"ol"`` \| ``"optgroup"`` \| ``"option"`` \| ``"output"`` \| ``"p"`` \| ``"param"`` \| ``"picture"`` \| ``"pre"`` \| ``"progress"`` \| ``"q"`` \| ``"rp"`` \| ``"rt"`` \| ``"ruby"`` \| ``"s"`` \| ``"samp"`` \| ``"script"`` \| ``"section"`` \| ``"select"`` \| ``"slot"`` \| ``"small"`` \| ``"source"`` \| ``"span"`` \| ``"strong"`` \| ``"style"`` \| ``"sub"`` \| ``"summary"`` \| ``"sup"`` \| ``"table"`` \| ``"tbody"`` \| ``"td"`` \| ``"template"`` \| ``"textarea"`` \| ``"tfoot"`` \| ``"th"`` \| ``"thead"`` \| ``"time"`` \| ``"title"`` \| ``"tr"`` \| ``"track"`` \| ``"u"`` \| ``"ul"`` \| ``"var"`` \| ``"video"`` \| ``"wbr"`` \| ``"circle"`` \| ``"clipPath"`` \| ``"defs"`` \| ``"desc"`` \| ``"ellipse"`` \| ``"feBlend"`` \| ``"feColorMatrix"`` \| ``"feComponentTransfer"`` \| ``"feComposite"`` \| ``"feConvolveMatrix"`` \| ``"feDiffuseLighting"`` \| ``"feDisplacementMap"`` \| ``"feDistantLight"`` \| ``"feFlood"`` \| ``"feFuncA"`` \| ``"feFuncB"`` \| ``"feFuncG"`` \| ``"feFuncR"`` \| ``"feGaussianBlur"`` \| ``"feImage"`` \| ``"feMerge"`` \| ``"feMergeNode"`` \| ``"feMorphology"`` \| ``"feOffset"`` \| ``"fePointLight"`` \| ``"feSpecularLighting"`` \| ``"feSpotLight"`` \| ``"feTile"`` \| ``"feTurbulence"`` \| ``"filter"`` \| ``"foreignObject"`` \| ``"g"`` \| ``"image"`` \| ``"line"`` \| ``"linearGradient"`` \| ``"marker"`` \| ``"mask"`` \| ``"metadata"`` \| ``"path"`` \| ``"pattern"`` \| ``"polygon"`` \| ``"polyline"`` \| ``"radialGradient"`` \| ``"rect"`` \| ``"stop"`` \| ``"svg"`` \| ``"switch"`` \| ``"text"`` \| ``"textPath"`` \| ``"tspan"`` \| ``"use"`` \| ``"view"`` \| ``"<>"`` \| ``"zzz_text"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag_name` | `K` | - |
| `attrs?` | [`T_DOM_ATTRS`](../modules/_dom.md#t_dom_attrs)<`K`\> | - |
| `shift?` | `number` | Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example. |

#### Returns

[`component_add`](_dom.component_add.md)<`K`\>

#### Inherited from

[component_add](_dom.component_add.md).[add](_dom.component_add.md#add)

#### Defined in

$dom_component.d.ts:78

___

### addText

▸ **addText**(`text`, `shift?`): [`component_add`](_dom.component_add.md)<``"zzz_text"``\>

This add element to component
```javascript
const c1= $dom.component("P", { textContent: "TEXT" });
const c2= $dom.component("P", null);
    c2.addText("TEXT");
//c1-> <p>TEXT</p>  ===  <p>TEXT</p> <-c2
```
```javascript
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `shift?` | `number` |

#### Returns

[`component_add`](_dom.component_add.md)<``"zzz_text"``\>

#### Inherited from

[component_add](_dom.component_add.md).[addText](_dom.component_add.md#addtext)

#### Defined in

$dom_component.d.ts:101

___

### component

▸ **component**(`share`, `shift`): [`component_main`](_dom.component_main.md)<`HTMLElement`\>

Method for including another component by usint its `share` key.
```javascript
function p({ textContent }){
     const cP= $dom.component("P", { textContent });
     return cP.share;
}
const c= $dom.component("DIV", null);
for(let i=0; i<3; i++){ c.component(p({ textContent: i })); }
c.mount(document.body, "replaceContent");
//= <body><div><p>0</p><p>1</p><p>2</p></div></body>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `share` | [`component_mainOut`](_dom.component_mainOut.md)<`HTMLElement`\> |
| `shift` | `number` |

#### Returns

[`component_main`](_dom.component_main.md)<`HTMLElement`\>

#### Inherited from

[component_add](_dom.component_add.md).[component](_dom.component_add.md#component)

#### Defined in

$dom_component.d.ts:115

___

### destroy

▸ **destroy**(): `void`

Method remove element form live DOM and returns null
```javascript
let c= $dom.component("DIV", null);
c.mount(document.body, "replaceContent");
c= c.share.destroy();
//=> c===null AND <body></body>
```

#### Returns

`void`

#### Inherited from

[component_add](_dom.component_add.md).[destroy](_dom.component_add.md#destroy)

#### Defined in

$dom_component.d.ts:434

___

### dynamicComponent

▸ **dynamicComponent**<`DATA`\>(`data`, `generator`, `shift`): [`component_main`](_dom.component_main.md)<`HTMLElement`\>

Method for including another component by using `generator` function, which can change final `component` based on updated data `data`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DATA` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `DATA` | Includes all subsribed keys from `data` see method [component_add.onupdate](_dom.component_add.md#onupdate) |
| `generator` | [`dynamicComponentGenerator`](_dom.dynamicComponentGenerator.md)<`DATA`\> | Function for registering components based on updates of `data`. |
| `shift` | `number` | - |

#### Returns

[`component_main`](_dom.component_main.md)<`HTMLElement`\>

#### Inherited from

[component_add](_dom.component_add.md).[dynamicComponent](_dom.component_add.md#dynamiccomponent)

#### Defined in

$dom_component.d.ts:121

___

### getReference

▸ **getReference**(): `HTMLElement`

Returns reference of currently added element

#### Returns

`HTMLElement`

#### Inherited from

[component_add](_dom.component_add.md).[getReference](_dom.component_add.md#getreference)

#### Defined in

$dom_component.d.ts:166

___

### isStatic

▸ **isStatic**(): `boolean`

Methods returns if it was `onupdate` used

#### Returns

`boolean`

#### Inherited from

[component_add](_dom.component_add.md).[isStatic](_dom.component_add.md#isstatic)

#### Defined in

$dom_component.d.ts:438

___

### mount

▸ **mount**(`el`, `type?`): `HTMLElement`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | Element where to places this component |
| `type?` | ``"childLast"`` \| ``"childFirst"`` \| ``"replaceContent"`` \| ``"replace"`` \| ``"before"`` \| ``"after"`` | Default `childLast` |

#### Returns

`HTMLElement`

#### Inherited from

[component_add](_dom.component_add.md).[mount](_dom.component_add.md#mount)

#### Defined in

$dom_component.d.ts:444

___

### on

▸ **on**(...`events`): [`component_add`](_dom.component_add.md)<``""``\>

Method for batch registering `on*` methods for current element.
```javascript
const select_component= select();
select_component.mount(parent);
// default ⇣
select_component.update({ value: "no_default_1" });
// no_default_1 ⇣

function select(init= { value: "default" }){
    const default_value= $dom.componentListener("mount", ()=> init);
    const update_value= $dom.componentListener("update", init, ({ value })=> ({ value }));
    
    const c= $dom.component("SELECT", null).on( default_value, update_value );
        c.add("OPTION", { value: "no_default_1", textContent: "no_default_1" });
        c.add("OPTION", { value: "default", textContent: "default" }, -1);
    return share;
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...events` | [`component_listener`](_dom.component_listener.md)[] | Consumes [component_listener](_dom.component_listener.md). |

#### Returns

[`component_add`](_dom.component_add.md)<``""``\>

#### Inherited from

[component_add](_dom.component_add.md).[on](_dom.component_add.md#on)

#### Defined in

$dom_component.d.ts:188

___

### ondestroy

▸ **ondestroy**(`cb`): [`component_main`](_dom.component_main.md)<`HTMLElement`\>

This provide ability to register function which should be called when the component will be destroyed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`onDestroyFunction`: `HTMLElement`) => `void` |

#### Returns

[`component_main`](_dom.component_main.md)<`HTMLElement`\>

#### Inherited from

[component_add](_dom.component_add.md).[ondestroy](_dom.component_add.md#ondestroy)

#### Defined in

$dom_component.d.ts:156

___

### oninit

▸ **oninit**(`cb`): [`component_add`](_dom.component_add.md)<``""``\>

This procedure allows to call given function `cb` during registering element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`el`: `HTMLElement`) => `void` |

#### Returns

[`component_add`](_dom.component_add.md)<``""``\>

#### Inherited from

[component_add](_dom.component_add.md).[oninit](_dom.component_add.md#oninit)

#### Defined in

$dom_component.d.ts:213

___

### onmount

▸ **onmount**(`cb`): [`component_add`](_dom.component_add.md)<``""``\>

This procedure allows to call given function `cb` during mounting component.

It can for example solve problem setting default value for `select` (`option`s elements not exist when the `select` itself is declared!).

As alternative for some cases, you can use `active` label for `option`s instead.

**For now, only first mount!**
```javascript
const select_component= select({ value: "default" });
select_component.mount(parent);
// default ⇣

function select(init){
    const c= $dom.component("SELECT", null)
     .onmount(()=> init);
        c.add("OPTION", { value: "no_default_1", textContent: "no_default_1" });
        c.add("OPTION", { value: "no_default_2", textContent: "no_default_2" }, -1);
        c.add("OPTION", { value: "no_default_3", textContent: "no_default_3" }, -1);
        c.add("OPTION", { value: "default", textContent: "default" }, -1);
    return c.share;
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `Pick`<`HTMLElement`, ``"dir"`` \| ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"blur"`` \| ``"click"`` \| ``"focus"`` \| ``"scroll"`` \| ``"before"`` \| ``"after"`` \| ``"accessKey"`` \| ``"accessKeyLabel"`` \| ``"autocapitalize"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"innerText"`` \| ``"lang"`` \| ``"offsetHeight"`` \| ``"offsetLeft"`` \| ``"offsetParent"`` \| ``"offsetTop"`` \| ``"offsetWidth"`` \| ``"spellcheck"`` \| ``"translate"`` \| ``"addEventListener"`` \| ``"removeEventListener"`` \| ``"assignedSlot"`` \| ``"attributes"`` \| ``"className"`` \| ``"clientHeight"`` \| ``"clientLeft"`` \| ``"clientTop"`` \| ``"clientWidth"`` \| ``"id"`` \| ``"localName"`` \| ``"namespaceURI"`` \| ``"onfullscreenchange"`` \| ``"onfullscreenerror"`` \| ``"outerHTML"`` \| ``"ownerDocument"`` \| ``"prefix"`` \| ``"scrollHeight"`` \| ``"scrollLeft"`` \| ``"scrollTop"`` \| ``"scrollWidth"`` \| ``"shadowRoot"`` \| ``"tagName"`` \| ``"attachShadow"`` \| ``"closest"`` \| ``"getAttribute"`` \| ``"getAttributeNS"`` \| ``"getAttributeNames"`` \| ``"getAttributeNode"`` \| ``"getAttributeNodeNS"`` \| ``"getBoundingClientRect"`` \| ``"getClientRects"`` \| ``"getElementsByClassName"`` \| ``"getElementsByTagName"`` \| ``"getElementsByTagNameNS"`` \| ``"hasAttribute"`` \| ``"hasAttributeNS"`` \| ``"hasAttributes"`` \| ``"hasPointerCapture"`` \| ``"insertAdjacentElement"`` \| ``"insertAdjacentHTML"`` \| ``"insertAdjacentText"`` \| ``"matches"`` \| ``"msGetRegionContent"`` \| ``"releasePointerCapture"`` \| ``"removeAttribute"`` \| ``"removeAttributeNS"`` \| ``"removeAttributeNode"`` \| ``"requestFullscreen"`` \| ``"requestPointerLock"`` \| ``"scrollBy"`` \| ``"scrollIntoView"`` \| ``"scrollTo"`` \| ``"setAttribute"`` \| ``"setAttributeNS"`` \| ``"setAttributeNode"`` \| ``"setAttributeNodeNS"`` \| ``"setPointerCapture"`` \| ``"toggleAttribute"`` \| ``"webkitMatchesSelector"`` \| ``"baseURI"`` \| ``"childNodes"`` \| ``"firstChild"`` \| ``"isConnected"`` \| ``"lastChild"`` \| ``"nextSibling"`` \| ``"nodeName"`` \| ``"nodeType"`` \| ``"nodeValue"`` \| ``"parentElement"`` \| ``"parentNode"`` \| ``"previousSibling"`` \| ``"textContent"`` \| ``"appendChild"`` \| ``"cloneNode"`` \| ``"compareDocumentPosition"`` \| ``"contains"`` \| ``"getRootNode"`` \| ``"hasChildNodes"`` \| ``"insertBefore"`` \| ``"isDefaultNamespace"`` \| ``"isEqualNode"`` \| ``"isSameNode"`` \| ``"lookupNamespaceURI"`` \| ``"lookupPrefix"`` \| ``"normalize"`` \| ``"removeChild"`` \| ``"replaceChild"`` \| ``"ATTRIBUTE_NODE"`` \| ``"CDATA_SECTION_NODE"`` \| ``"COMMENT_NODE"`` \| ``"DOCUMENT_FRAGMENT_NODE"`` \| ``"DOCUMENT_NODE"`` \| ``"DOCUMENT_POSITION_CONTAINED_BY"`` \| ``"DOCUMENT_POSITION_CONTAINS"`` \| ``"DOCUMENT_POSITION_DISCONNECTED"`` \| ``"DOCUMENT_POSITION_FOLLOWING"`` \| ``"DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC"`` \| ``"DOCUMENT_POSITION_PRECEDING"`` \| ``"DOCUMENT_TYPE_NODE"`` \| ``"ELEMENT_NODE"`` \| ``"ENTITY_NODE"`` \| ``"ENTITY_REFERENCE_NODE"`` \| ``"NOTATION_NODE"`` \| ``"PROCESSING_INSTRUCTION_NODE"`` \| ``"TEXT_NODE"`` \| ``"dispatchEvent"`` \| ``"animate"`` \| ``"getAnimations"`` \| ``"remove"`` \| ``"replaceWith"`` \| ``"innerHTML"`` \| ``"nextElementSibling"`` \| ``"previousElementSibling"`` \| ``"childElementCount"`` \| ``"children"`` \| ``"firstElementChild"`` \| ``"lastElementChild"`` \| ``"append"`` \| ``"prepend"`` \| ``"querySelector"`` \| ``"querySelectorAll"`` \| ``"oncopy"`` \| ``"oncut"`` \| ``"onpaste"`` \| ``"contentEditable"`` \| ``"inputMode"`` \| ``"isContentEditable"`` \| ``"onabort"`` \| ``"onanimationcancel"`` \| ``"onanimationend"`` \| ``"onanimationiteration"`` \| ``"onanimationstart"`` \| ``"onauxclick"`` \| ``"onblur"`` \| ``"oncancel"`` \| ``"oncanplay"`` \| ``"oncanplaythrough"`` \| ``"onchange"`` \| ``"onclick"`` \| ``"onclose"`` \| ``"oncontextmenu"`` \| ``"oncuechange"`` \| ``"ondblclick"`` \| ``"ondrag"`` \| ``"ondragend"`` \| ``"ondragenter"`` \| ``"ondragexit"`` \| ``"ondragleave"`` \| ``"ondragover"`` \| ``"ondragstart"`` \| ``"ondrop"`` \| ``"ondurationchange"`` \| ``"onemptied"`` \| ``"onended"`` \| ``"onerror"`` \| ``"onfocus"`` \| ``"ongotpointercapture"`` \| ``"oninput"`` \| ``"oninvalid"`` \| ``"onkeydown"`` \| ``"onkeypress"`` \| ``"onkeyup"`` \| ``"onload"`` \| ``"onloadeddata"`` \| ``"onloadedmetadata"`` \| ``"onloadstart"`` \| ``"onlostpointercapture"`` \| ``"onmousedown"`` \| ``"onmouseenter"`` \| ``"onmouseleave"`` \| ``"onmousemove"`` \| ``"onmouseout"`` \| ``"onmouseover"`` \| ``"onmouseup"`` \| ``"onpause"`` \| ``"onplay"`` \| ``"onplaying"`` \| ``"onpointercancel"`` \| ``"onpointerdown"`` \| ``"onpointerenter"`` \| ``"onpointerleave"`` \| ``"onpointermove"`` \| ``"onpointerout"`` \| ``"onpointerover"`` \| ``"onpointerup"`` \| ``"onprogress"`` \| ``"onratechange"`` \| ``"onreset"`` \| ``"onresize"`` \| ``"onscroll"`` \| ``"onsecuritypolicyviolation"`` \| ``"onseeked"`` \| ``"onseeking"`` \| ``"onselect"`` \| ``"onselectionchange"`` \| ``"onselectstart"`` \| ``"onstalled"`` \| ``"onsubmit"`` \| ``"onsuspend"`` \| ``"ontimeupdate"`` \| ``"ontoggle"`` \| ``"ontouchcancel"`` \| ``"ontouchend"`` \| ``"ontouchmove"`` \| ``"ontouchstart"`` \| ``"ontransitioncancel"`` \| ``"ontransitionend"`` \| ``"ontransitionrun"`` \| ``"ontransitionstart"`` \| ``"onvolumechange"`` \| ``"onwaiting"`` \| ``"onwheel"`` \| ``"autofocus"`` \| ``"dataset"`` \| ``"nonce"`` \| ``"tabIndex"``\> & [`T_DOM_ATTRS_MODIFIED`](../modules/_dom.md#t_dom_attrs_modified) |

#### Returns

[`component_add`](_dom.component_add.md)<``""``\>

#### Inherited from

[component_add](_dom.component_add.md).[onmount](_dom.component_add.md#onmount)

#### Defined in

$dom_component.d.ts:238

___

### onupdate

▸ **onupdate**<`DATA`\>(`data`, `onUpdate`): [`component_add`](_dom.component_add.md)<``""``\>

This method allows to register function which shoul be invoke when given **keys** in `data` will be changed (see [component_mainOut.update](_dom.component_mainOut.md#update)).
```javascript
const c= $dom.component("DIV", null);
…
c.add("P", null).onupdate({ key: "This is init value" }, ({ key })=> ({ textContent: key }));//=> <p>This is init value</p>
…
c.update({ key: "Value changed" });//=> <p>Value changed</p>
```

```javascript
const c= $dom.component("DIV", null);
…
c.add("P", null).onupdate({ A: "A", B: "b" }, ({ A, B })=> ({ textContent: A+B }));//=> <p>Ab</p>
…
c.update({ B: "B" });//=> <p>AB</p>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DATA` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `DATA` | This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdate` is called. |
| `onUpdate` | (`data`: `DATA`) => `Pick`<`HTMLElement`, ``"dir"`` \| ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"blur"`` \| ``"click"`` \| ``"focus"`` \| ``"scroll"`` \| ``"before"`` \| ``"after"`` \| ``"accessKey"`` \| ``"accessKeyLabel"`` \| ``"autocapitalize"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"innerText"`` \| ``"lang"`` \| ``"offsetHeight"`` \| ``"offsetLeft"`` \| ``"offsetParent"`` \| ``"offsetTop"`` \| ``"offsetWidth"`` \| ``"spellcheck"`` \| ``"translate"`` \| ``"addEventListener"`` \| ``"removeEventListener"`` \| ``"assignedSlot"`` \| ``"attributes"`` \| ``"className"`` \| ``"clientHeight"`` \| ``"clientLeft"`` \| ``"clientTop"`` \| ``"clientWidth"`` \| ``"id"`` \| ``"localName"`` \| ``"namespaceURI"`` \| ``"onfullscreenchange"`` \| ``"onfullscreenerror"`` \| ``"outerHTML"`` \| ``"ownerDocument"`` \| ``"prefix"`` \| ``"scrollHeight"`` \| ``"scrollLeft"`` \| ``"scrollTop"`` \| ``"scrollWidth"`` \| ``"shadowRoot"`` \| ``"tagName"`` \| ``"attachShadow"`` \| ``"closest"`` \| ``"getAttribute"`` \| ``"getAttributeNS"`` \| ``"getAttributeNames"`` \| ``"getAttributeNode"`` \| ``"getAttributeNodeNS"`` \| ``"getBoundingClientRect"`` \| ``"getClientRects"`` \| ``"getElementsByClassName"`` \| ``"getElementsByTagName"`` \| ``"getElementsByTagNameNS"`` \| ``"hasAttribute"`` \| ``"hasAttributeNS"`` \| ``"hasAttributes"`` \| ``"hasPointerCapture"`` \| ``"insertAdjacentElement"`` \| ``"insertAdjacentHTML"`` \| ``"insertAdjacentText"`` \| ``"matches"`` \| ``"msGetRegionContent"`` \| ``"releasePointerCapture"`` \| ``"removeAttribute"`` \| ``"removeAttributeNS"`` \| ``"removeAttributeNode"`` \| ``"requestFullscreen"`` \| ``"requestPointerLock"`` \| ``"scrollBy"`` \| ``"scrollIntoView"`` \| ``"scrollTo"`` \| ``"setAttribute"`` \| ``"setAttributeNS"`` \| ``"setAttributeNode"`` \| ``"setAttributeNodeNS"`` \| ``"setPointerCapture"`` \| ``"toggleAttribute"`` \| ``"webkitMatchesSelector"`` \| ``"baseURI"`` \| ``"childNodes"`` \| ``"firstChild"`` \| ``"isConnected"`` \| ``"lastChild"`` \| ``"nextSibling"`` \| ``"nodeName"`` \| ``"nodeType"`` \| ``"nodeValue"`` \| ``"parentElement"`` \| ``"parentNode"`` \| ``"previousSibling"`` \| ``"textContent"`` \| ``"appendChild"`` \| ``"cloneNode"`` \| ``"compareDocumentPosition"`` \| ``"contains"`` \| ``"getRootNode"`` \| ``"hasChildNodes"`` \| ``"insertBefore"`` \| ``"isDefaultNamespace"`` \| ``"isEqualNode"`` \| ``"isSameNode"`` \| ``"lookupNamespaceURI"`` \| ``"lookupPrefix"`` \| ``"normalize"`` \| ``"removeChild"`` \| ``"replaceChild"`` \| ``"ATTRIBUTE_NODE"`` \| ``"CDATA_SECTION_NODE"`` \| ``"COMMENT_NODE"`` \| ``"DOCUMENT_FRAGMENT_NODE"`` \| ``"DOCUMENT_NODE"`` \| ``"DOCUMENT_POSITION_CONTAINED_BY"`` \| ``"DOCUMENT_POSITION_CONTAINS"`` \| ``"DOCUMENT_POSITION_DISCONNECTED"`` \| ``"DOCUMENT_POSITION_FOLLOWING"`` \| ``"DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC"`` \| ``"DOCUMENT_POSITION_PRECEDING"`` \| ``"DOCUMENT_TYPE_NODE"`` \| ``"ELEMENT_NODE"`` \| ``"ENTITY_NODE"`` \| ``"ENTITY_REFERENCE_NODE"`` \| ``"NOTATION_NODE"`` \| ``"PROCESSING_INSTRUCTION_NODE"`` \| ``"TEXT_NODE"`` \| ``"dispatchEvent"`` \| ``"animate"`` \| ``"getAnimations"`` \| ``"remove"`` \| ``"replaceWith"`` \| ``"innerHTML"`` \| ``"nextElementSibling"`` \| ``"previousElementSibling"`` \| ``"childElementCount"`` \| ``"children"`` \| ``"firstElementChild"`` \| ``"lastElementChild"`` \| ``"append"`` \| ``"prepend"`` \| ``"querySelector"`` \| ``"querySelectorAll"`` \| ``"oncopy"`` \| ``"oncut"`` \| ``"onpaste"`` \| ``"contentEditable"`` \| ``"inputMode"`` \| ``"isContentEditable"`` \| ``"onabort"`` \| ``"onanimationcancel"`` \| ``"onanimationend"`` \| ``"onanimationiteration"`` \| ``"onanimationstart"`` \| ``"onauxclick"`` \| ``"onblur"`` \| ``"oncancel"`` \| ``"oncanplay"`` \| ``"oncanplaythrough"`` \| ``"onchange"`` \| ``"onclick"`` \| ``"onclose"`` \| ``"oncontextmenu"`` \| ``"oncuechange"`` \| ``"ondblclick"`` \| ``"ondrag"`` \| ``"ondragend"`` \| ``"ondragenter"`` \| ``"ondragexit"`` \| ``"ondragleave"`` \| ``"ondragover"`` \| ``"ondragstart"`` \| ``"ondrop"`` \| ``"ondurationchange"`` \| ``"onemptied"`` \| ``"onended"`` \| ``"onerror"`` \| ``"onfocus"`` \| ``"ongotpointercapture"`` \| ``"oninput"`` \| ``"oninvalid"`` \| ``"onkeydown"`` \| ``"onkeypress"`` \| ``"onkeyup"`` \| ``"onload"`` \| ``"onloadeddata"`` \| ``"onloadedmetadata"`` \| ``"onloadstart"`` \| ``"onlostpointercapture"`` \| ``"onmousedown"`` \| ``"onmouseenter"`` \| ``"onmouseleave"`` \| ``"onmousemove"`` \| ``"onmouseout"`` \| ``"onmouseover"`` \| ``"onmouseup"`` \| ``"onpause"`` \| ``"onplay"`` \| ``"onplaying"`` \| ``"onpointercancel"`` \| ``"onpointerdown"`` \| ``"onpointerenter"`` \| ``"onpointerleave"`` \| ``"onpointermove"`` \| ``"onpointerout"`` \| ``"onpointerover"`` \| ``"onpointerup"`` \| ``"onprogress"`` \| ``"onratechange"`` \| ``"onreset"`` \| ``"onresize"`` \| ``"onscroll"`` \| ``"onsecuritypolicyviolation"`` \| ``"onseeked"`` \| ``"onseeking"`` \| ``"onselect"`` \| ``"onselectionchange"`` \| ``"onselectstart"`` \| ``"onstalled"`` \| ``"onsubmit"`` \| ``"onsuspend"`` \| ``"ontimeupdate"`` \| ``"ontoggle"`` \| ``"ontouchcancel"`` \| ``"ontouchend"`` \| ``"ontouchmove"`` \| ``"ontouchstart"`` \| ``"ontransitioncancel"`` \| ``"ontransitionend"`` \| ``"ontransitionrun"`` \| ``"ontransitionstart"`` \| ``"onvolumechange"`` \| ``"onwaiting"`` \| ``"onwheel"`` \| ``"autofocus"`` \| ``"dataset"`` \| ``"nonce"`` \| ``"tabIndex"``\> & [`T_DOM_ATTRS_MODIFIED`](../modules/_dom.md#t_dom_attrs_modified) | - |

#### Returns

[`component_add`](_dom.component_add.md)<``""``\>

#### Inherited from

[component_add](_dom.component_add.md).[onupdate](_dom.component_add.md#onupdate)

#### Defined in

$dom_component.d.ts:209

___

### setShift

▸ **setShift**(`shift`): [`component_main`](_dom.component_main.md)<`HTMLElement`\>

Method provide way to change nesting behaviour. It can be helpful for loops
```javascript
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
```javascript
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | `number` | See [component_main.add](_dom.component_main.md#add) |

#### Returns

[`component_main`](_dom.component_main.md)<`HTMLElement`\>

#### Inherited from

[component_add](_dom.component_add.md).[setShift](_dom.component_add.md#setshift)

#### Defined in

$dom_component.d.ts:151

___

### update

▸ **update**(`data`): `boolean`

Method updates all registered varibles by keys `onupdates` and calls follower functions
```javascript
// SIMPLE example
const data_A= { a: "A" };
const data_A_update= { a: "AAA" };
const c= $dom.component("UL", null);
    c.add("LI", null)
         .onupdate(data_A, ({ a })=>({ textContent: a }));//`{ a }` add listener for "a"
c.mount(document.body);
c.update(data_A_update);
```

```javascript
// EXAMPLE WITH `mapUpdate`
const data_B= { a: { b: "A" }};
const data_B_update= { a: { b: "AAA" }};
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate(data_B, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(data_B_update);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | Updates internal storage (via `Object.assign` – no deep copy!) |

#### Returns

`boolean`

#### Inherited from

[component_add](_dom.component_add.md).[update](_dom.component_add.md#update)

#### Defined in

$dom_component.d.ts:470

▸ **update**(`map`): `boolean`

Method updates all registered varibles by keys `onupdates` and calls follower functions
```javascript
// EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
    c.add("LI", null)
         .onupdate({ a: 1 }, ({ a })=>({ textContent: a }));
c.mount(document.body);
c.update(({ a })=> { a: ++a });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | (`data`: `object`) => `object` | Function takes as parameter previous internal storage and returns updated one (internally used `Object.assign` – no deep copy!) |

#### Returns

`boolean`

#### Inherited from

[component_add](_dom.component_add.md).[update](_dom.component_add.md#update)

#### Defined in

$dom_component.d.ts:483
