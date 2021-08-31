[dollar_dom_component](../README.md) / %24dom

# Namespace: $dom

## Table of contents

### Interfaces

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

- [assign](_dom.md#assign)
- [assignNS](_dom.md#assignns)
- [component](_dom.md#component)
- [componentListener](_dom.md#componentlistener)

## Public

### assign

▸ **assign**<`EL`\>(`element`, ...`attrs_array`): `EL`

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

#### Defined in

types.d.ts:208

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

#### Defined in

types.d.ts:241

## Other

### T\_DOM\_ATTRS

Ƭ `Private` **T\_DOM\_ATTRS**<`T`\>: `T` extends keyof [`T_DOM_HETNM`](_dom.md#t_dom_hetnm) ? `Omit`<[`T_DOM_HETNM`](_dom.md#t_dom_hetnm)[`T`], ``"classList"``\> & [`T_DOM_ATTRS_MODIFIED`](_dom.md#t_dom_attrs_modified) : `Omit`<`T`, ``"classList"``\> & [`T_DOM_ATTRS_MODIFIED`](_dom.md#t_dom_attrs_modified)

Just attributtes

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`T_DOM_HETNM`](_dom.md#t_dom_hetnm) \| [`T_DOM_HETNM`](_dom.md#t_dom_hetnm)[keyof [`T_DOM_HETNM`](_dom.md#t_dom_hetnm)] |

#### Defined in

types.d.ts:22

___

### T\_DOM\_ATTRS\_MODIFIED

Ƭ `Private` **T\_DOM\_ATTRS\_MODIFIED**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `classList` | `Record`<`string`, ``-1`` \| ``0`` \| ``1``\> | - |
| `style` | `string` | test |

#### Defined in

types.d.ts:13

___

### T\_DOM\_HETNM

Ƭ `Private` **T\_DOM\_HETNM**: `HTMLElementTagNameMap` & `SVGElementTagNameMap` & { ``: `HTMLElement` ; `<>`: `DocumentFragment` ; `zzz_text`: `Text`  }

#### Defined in

types.d.ts:5

___

### componentOut

Ƭ `Private` **componentOut**<`T`\>: `T` extends ``""`` ? [`component_empty`](../interfaces/_dom.component_empty.md) : [`component_add`](../interfaces/_dom.component_add.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`T_DOM_HETNM`](_dom.md#t_dom_hetnm) |

#### Defined in

types.d.ts:176

___

### assignNS

▸ **assignNS**<`EL`\>(`namespace_group`, `element`, ...`attrs_array`): `EL`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EL` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace_group` | `string` |
| `element` | `EL` |
| `...attrs_array` | `EL`[] |

#### Returns

`EL`

#### Defined in

types.d.ts:209

___

### componentListener

▸ **componentListener**<`K`\>(`event`, `callback`): [`component_listener`](../interfaces/_dom.component_listener.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"input"`` \| ``"progress"`` \| ``"select"`` \| ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"contextmenu"`` \| ``"cuechange"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragexit"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"error"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"gotpointercapture"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"load"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"wheel"`` \| ``"copy"`` \| ``"cut"`` \| ``"paste"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `callback` | (`ev`: `DocumentEventMap`[`K`]) => `any` |

#### Returns

[`component_listener`](../interfaces/_dom.component_listener.md)

#### Defined in

types.d.ts:249

▸ **componentListener**<`K`\>(`event`, ...`attrs`): [`component_listener`](../interfaces/_dom.component_listener.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"init"`` \| ``"mount"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `...attrs` | [`T_DOM_ListenersMap`](../interfaces/_dom.T_DOM_ListenersMap.md)[`K`] |

#### Returns

[`component_listener`](../interfaces/_dom.component_listener.md)

#### Defined in

types.d.ts:250

▸ **componentListener**<`DATA`\>(`event`, `data`, `onUpdate`): [`component_listener`](../interfaces/_dom.component_listener.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DATA` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"update"`` |
| `data` | `DATA` |
| `onUpdate` | (`data`: `DATA`) => `HTMLElement` |

#### Returns

[`component_listener`](../interfaces/_dom.component_listener.md)

#### Defined in

types.d.ts:251
