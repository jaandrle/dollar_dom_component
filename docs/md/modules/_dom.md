[$dom.component](../README.md) / %24dom

# Namespace: $dom

This NAMESPACE provides features for DOM elements.

## Table of contents

### Interfaces

- [T\_DOM\_ListenersAPI](../interfaces/_dom.T_DOM_ListenersAPI.md)
- [T\_DOM\_ListenersMap](../interfaces/_dom.T_DOM_ListenersMap.md)
- [componentParams](../interfaces/_dom.componentParams.md)
- [component\_add](../interfaces/_dom.component_add.md)
- [component\_empty](../interfaces/_dom.component_empty.md)
- [component\_listener](../interfaces/_dom.component_listener.md)
- [component\_main](../interfaces/_dom.component_main.md)
- [component\_mainOut](../interfaces/_dom.component_mainOut.md)
- [dynamicComponentGenerator](../interfaces/_dom.dynamicComponentGenerator.md)

### Type aliases

- [T\_DOM\_ATTRS](_dom.md#t_dom_attrs)
- [T\_DOM\_ATTRS\_MODIFIED](_dom.md#t_dom_attrs_modified)
- [T\_DOM\_HETNM](_dom.md#t_dom_hetnm)
- [componentOut](_dom.md#componentout)

### Functions

- [add](_dom.md#add)
- [assign](_dom.md#assign)
- [assignNS](_dom.md#assignns)
- [component](_dom.md#component)
- [componentListener](_dom.md#componentlistener)
- [empty](_dom.md#empty)
- [insertAfter](_dom.md#insertafter)
- [replace](_dom.md#replace)

## Public

### add

▸ **add**(): `HTMLElement`

Please stop using this

**`deprecated`**

#### Returns

`HTMLElement`

___

### assign

▸ **assign**<`EL`\>(`element`, ...`attrs_array`): `EL`

Procedure for merging object into the element properties.
Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).

**#1: All together**
```javascript
const el= document.body;
const onclick= function(){ console.log(this.dataset.js_param); };
$dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
//result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
//console output on click: "CLICKED"
$dom.assign(el, { style: { color: "green" } });
//result HTML: <body style="color: green;" data-js_param="CLICKED">BODY</body>
//console output on click: "CLICKED"
```

**`\*.classList.toggle`**
```javascript
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

**#3 Links and images**
```javascript
$dom.assign(A_ELEMENT, { href: "www.google.com" });//=> <a href="www.google.com" …
$dom.assign(IMG_ELEMENT, { src: "image.png" });//=> <img src="image.png" …
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EL` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `EL` |
| `...attrs_array` | [`T_DOM_ATTRS`](_dom.md#t_dom_attrs)<`EL`\>[] |

#### Returns

`EL`

___

### assignNS

▸ **assignNS**<`EL`\>(`namespace_group`, `element`, ...`attrs_array`): `EL`

Procedure for merging object into the element properties (see `html` version [assign](_dom.md#assign)).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EL` | extends `SVGElement` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace_group` | `string` | Group representation of [`namespace`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS), use "__SVG__" for setting attributes for `svg`s. |
| `element` | `EL` | - |
| `...attrs_array` | [`T_DOM_ATTRS`](_dom.md#t_dom_attrs)<`EL`\>[] | - |

#### Returns

`EL`

___

### component

▸ **component**<`K`\>(`tag_name`, `attrs?`, `params?`): [`componentOut`](_dom.md#componentout)<`K`\>

This 'functional class' is syntax sugar around ` document.createElement`(`NS`) and `document.createDocumentFragment` for creating DOM components and their adding to live DOM in performance friendly way.

So pseudo code:
```javascript
function Component(…){
 const { add, share }= $dom.component(…Parent Element…);
     add(…Child Element…);
     add(…Child Element…, -1);
         add(…Child Element…);
 …
 return share;
}
```

Yelds into:
```html
<!--<Component>-->
 <Parent Element>
  <Child Element></Child Element>
  <Child Element>
     <Child Element></Child Element>
  </Child Element>
 …
 </Parent Element>
<!--</Component>-->
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``""`` \| ``"symbol"`` \| ``"object"`` \| ``"a"`` \| ``"abbr"`` \| ``"address"`` \| ``"applet"`` \| ``"area"`` \| ``"article"`` \| ``"aside"`` \| ``"audio"`` \| ``"b"`` \| ``"base"`` \| ``"basefont"`` \| ``"bdi"`` \| ``"bdo"`` \| ``"blockquote"`` \| ``"body"`` \| ``"br"`` \| ``"button"`` \| ``"canvas"`` \| ``"caption"`` \| ``"cite"`` \| ``"code"`` \| ``"col"`` \| ``"colgroup"`` \| ``"data"`` \| ``"datalist"`` \| ``"dd"`` \| ``"del"`` \| ``"details"`` \| ``"dfn"`` \| ``"dialog"`` \| ``"dir"`` \| ``"div"`` \| ``"dl"`` \| ``"dt"`` \| ``"em"`` \| ``"embed"`` \| ``"fieldset"`` \| ``"figcaption"`` \| ``"figure"`` \| ``"font"`` \| ``"footer"`` \| ``"form"`` \| ``"frame"`` \| ``"frameset"`` \| ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"head"`` \| ``"header"`` \| ``"hgroup"`` \| ``"hr"`` \| ``"html"`` \| ``"i"`` \| ``"iframe"`` \| ``"img"`` \| ``"input"`` \| ``"ins"`` \| ``"kbd"`` \| ``"label"`` \| ``"legend"`` \| ``"li"`` \| ``"link"`` \| ``"main"`` \| ``"map"`` \| ``"mark"`` \| ``"marquee"`` \| ``"menu"`` \| ``"meta"`` \| ``"meter"`` \| ``"nav"`` \| ``"noscript"`` \| ``"ol"`` \| ``"optgroup"`` \| ``"option"`` \| ``"output"`` \| ``"p"`` \| ``"param"`` \| ``"picture"`` \| ``"pre"`` \| ``"progress"`` \| ``"q"`` \| ``"rp"`` \| ``"rt"`` \| ``"ruby"`` \| ``"s"`` \| ``"samp"`` \| ``"script"`` \| ``"section"`` \| ``"select"`` \| ``"slot"`` \| ``"small"`` \| ``"source"`` \| ``"span"`` \| ``"strong"`` \| ``"style"`` \| ``"sub"`` \| ``"summary"`` \| ``"sup"`` \| ``"table"`` \| ``"tbody"`` \| ``"td"`` \| ``"template"`` \| ``"textarea"`` \| ``"tfoot"`` \| ``"th"`` \| ``"thead"`` \| ``"time"`` \| ``"title"`` \| ``"tr"`` \| ``"track"`` \| ``"u"`` \| ``"ul"`` \| ``"var"`` \| ``"video"`` \| ``"wbr"`` \| ``"circle"`` \| ``"clipPath"`` \| ``"defs"`` \| ``"desc"`` \| ``"ellipse"`` \| ``"feBlend"`` \| ``"feColorMatrix"`` \| ``"feComponentTransfer"`` \| ``"feComposite"`` \| ``"feConvolveMatrix"`` \| ``"feDiffuseLighting"`` \| ``"feDisplacementMap"`` \| ``"feDistantLight"`` \| ``"feFlood"`` \| ``"feFuncA"`` \| ``"feFuncB"`` \| ``"feFuncG"`` \| ``"feFuncR"`` \| ``"feGaussianBlur"`` \| ``"feImage"`` \| ``"feMerge"`` \| ``"feMergeNode"`` \| ``"feMorphology"`` \| ``"feOffset"`` \| ``"fePointLight"`` \| ``"feSpecularLighting"`` \| ``"feSpotLight"`` \| ``"feTile"`` \| ``"feTurbulence"`` \| ``"filter"`` \| ``"foreignObject"`` \| ``"g"`` \| ``"image"`` \| ``"line"`` \| ``"linearGradient"`` \| ``"marker"`` \| ``"mask"`` \| ``"metadata"`` \| ``"path"`` \| ``"pattern"`` \| ``"polygon"`` \| ``"polyline"`` \| ``"radialGradient"`` \| ``"rect"`` \| ``"stop"`` \| ``"svg"`` \| ``"switch"`` \| ``"text"`` \| ``"textPath"`` \| ``"tspan"`` \| ``"use"`` \| ``"view"`` \| ``"<>"`` \| ``"zzz_text"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag_name` | `K` | HTML Element tag name such as `p`, `li`, …, also `svg`, `polyline`, `clipPath`, …. **Important**: You must choose proper `params`, see [componentParams.namespace_group](../interfaces/_dom.componentParams.md#namespace_group)! |
| `attrs?` | [`T_DOM_ATTRS`](_dom.md#t_dom_attrs)<`K`\> | - |
| `params?` | [`componentParams`](../interfaces/_dom.componentParams.md) | - |

#### Returns

[`componentOut`](_dom.md#componentout)<`K`\>

___

### componentListener

▸ **componentListener**<`K`\>(`event`, `callback`): [`component_listener`](../interfaces/_dom.component_listener.md)

This provide more DRY way to register native events listeners inside [component](_dom.md#component) such as `click`, `touchemove`, ….

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"input"`` \| ``"progress"`` \| ``"select"`` \| ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"contextmenu"`` \| ``"cuechange"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragexit"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"error"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"gotpointercapture"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"load"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"wheel"`` \| ``"copy"`` \| ``"cut"`` \| ``"paste"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | Browser events |
| `callback` | (`this`: [`T_DOM_ListenersAPI`](../interfaces/_dom.T_DOM_ListenersAPI.md), `ev`: `DocumentEventMap`[`K`]) => `any` | Callback with arguments based on [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). |

#### Returns

[`component_listener`](../interfaces/_dom.component_listener.md)

▸ **componentListener**<`K`\>(`event`, ...`attrs`): [`component_listener`](../interfaces/_dom.component_listener.md)

This provide more DRY way to register events listeners for [component](_dom.md#component) such as `init`, `mount`, ….

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"init"`` \| ``"mount"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | Component lifecycle events |
| `...attrs` | [`T_DOM_ListenersMap`](../interfaces/_dom.T_DOM_ListenersMap.md)[`K`] | - |

#### Returns

[`component_listener`](../interfaces/_dom.component_listener.md)

▸ **componentListener**<`DATA`\>(`event`, `data`, `onUpdate`): [`component_listener`](../interfaces/_dom.component_listener.md)

This provide more DRY way to register `onupdate` handler inside [component](_dom.md#component).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DATA` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"update"`` | - |
| `data` | `DATA` | Inittial data similar to [component_add.onupdate](../interfaces/_dom.component_add.md#onupdate). |
| `onUpdate` | (`data`: `DATA`) => [`T_DOM_ATTRS`](_dom.md#t_dom_attrs)<`HTMLElement`\> | Callback simira to [component_add.onupdate](../interfaces/_dom.component_add.md#onupdate). |

#### Returns

[`component_listener`](../interfaces/_dom.component_listener.md)

## Private

### T\_DOM\_ATTRS

Ƭ `Private` **T\_DOM\_ATTRS**<`T`\>: `T` extends keyof [`T_DOM_HETNM`](_dom.md#t_dom_hetnm) ? `Omit`<[`T_DOM_HETNM`](_dom.md#t_dom_hetnm)[`T`], ``"classList"``\> & [`T_DOM_ATTRS_MODIFIED`](_dom.md#t_dom_attrs_modified) : `Omit`<`T`, ``"classList"``\> & [`T_DOM_ATTRS_MODIFIED`](_dom.md#t_dom_attrs_modified)

Just element attributtes

In most cases, you can use native propertie such as [MDN WEB/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) and so on (e.g. [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text)).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`T_DOM_HETNM`](_dom.md#t_dom_hetnm) \| [`T_DOM_HETNM`](_dom.md#t_dom_hetnm)[keyof [`T_DOM_HETNM`](_dom.md#t_dom_hetnm)] |

___

### T\_DOM\_ATTRS\_MODIFIED

Ƭ `Private` **T\_DOM\_ATTRS\_MODIFIED**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `classList` | `Record`<`string`, ``-1`` \| ``0`` \| ``1``\> | Provide option to add/remove/toggle CSS clasess (index of object) using 1/0/-1. In fact `el.classList.toggle(class_name)` for `-1` and `el.classList.toggle(class_name, Boolean(...))` for others. |
| `style` | `string` | In fact argumen for `*.setAttribute("style", *)`. |

___

### T\_DOM\_HETNM

Ƭ `Private` **T\_DOM\_HETNM**: `HTMLElementTagNameMap` & `SVGElementTagNameMap` & { ``: `HTMLElement` ; `<>`: `DocumentFragment` ; `zzz_text`: `Text`  }

___

### componentOut

Ƭ `Private` **componentOut**<`T`\>: `T` extends ``""`` ? [`component_empty`](../interfaces/_dom.component_empty.md) : [`component_add`](../interfaces/_dom.component_add.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`T_DOM_HETNM`](_dom.md#t_dom_hetnm) |

___

### empty

▸ **empty**(`container`): `void`

Procedure removes all children of `container`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `HTMLElement` |

#### Returns

`void`

___

### insertAfter

▸ **insertAfter**(`new_element`, `reference`): `void`

Procedure places `new_element` after `reference` elements

#### Parameters

| Name | Type |
| :------ | :------ |
| `new_element` | `HTMLElement` |
| `reference` | `HTMLElement` |

#### Returns

`void`

___

### replace

▸ **replace**(`el_old`, `le_new`): `void`

Procedure replaces `el_old` element by new one (`new_el`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `el_old` | `HTMLElement` |
| `le_new` | `HTMLElement` |

#### Returns

`void`
