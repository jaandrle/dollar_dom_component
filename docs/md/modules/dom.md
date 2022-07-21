[$dom.component](../README.md) / $dom

# Namespace: $dom

This NAMESPACE provides features for DOM elements.

## Table of contents

### Interfaces

- [T\_DOM\_ListenersAPI](../interfaces/dom.T_DOM_ListenersAPI.md)
- [T\_DOM\_ListenersMap](../interfaces/dom.T_DOM_ListenersMap.md)
- [componentParams](../interfaces/dom.componentParams.md)
- [component\_add](../interfaces/dom.component_add.md)
- [component\_empty](../interfaces/dom.component_empty.md)
- [component\_listener](../interfaces/dom.component_listener.md)
- [component\_main](../interfaces/dom.component_main.md)
- [component\_mainOut](../interfaces/dom.component_mainOut.md)
- [dynamicComponentGenerator](../interfaces/dom.dynamicComponentGenerator.md)

### Type Aliases

- [T\_DOM\_ATTRS](dom.md#t_dom_attrs)
- [T\_DOM\_ATTRS\_MODIFIED](dom.md#t_dom_attrs_modified)
- [T\_DOM\_HETNM](dom.md#t_dom_hetnm)
- [componentOut](dom.md#componentout)

### Functions

- [add](dom.md#add)
- [assign](dom.md#assign)
- [assignNS](dom.md#assignns)
- [component](dom.md#component)
- [componentListener](dom.md#componentlistener)
- [empty](dom.md#empty)
- [insertAfter](dom.md#insertafter)
- [replace](dom.md#replace)

## Public

### add

▸ **add**(): `HTMLElement`

Please stop using this

**`Deprecated`**

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

**#4 data\* and aria\***
$dom.assign(el, { ariaLabel: "The aria-label", dataExample: "data-example" });//=> <body aria-label="The aria-label" data-example="data-example">
```

**`Version`**

1.3.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EL` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `EL` |
| `...attrs_array` | [`T_DOM_ATTRS`](dom.md#t_dom_attrs)<`EL`\>[] |

#### Returns

`EL`

___

### assignNS

▸ **assignNS**<`EL`\>(`namespace_group`, `element`, ...`attrs_array`): `EL`

Procedure for merging object into the element properties (see `html` version [assign](dom.md#assign)).

**`Version`**

1.3.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EL` | extends `SVGElement` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace_group` | `string` | Group representation of [`namespace`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS), use "__SVG__" for setting attributes for `svg`s. |
| `element` | `EL` | - |
| `...attrs_array` | [`T_DOM_ATTRS`](dom.md#t_dom_attrs)<`EL`\>[] | - |

#### Returns

`EL`

___

### component

▸ **component**<`K`\>(`tag_name`, `attrs?`, `params?`): [`componentOut`](dom.md#componentout)<`K`\>

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

**`Version`**

1.3.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``""`` \| ``"symbol"`` \| ``"object"`` \| ``"link"`` \| ``"small"`` \| ``"sub"`` \| ``"sup"`` \| ``"map"`` \| ``"filter"`` \| ``"input"`` \| ``"set"`` \| ``"code"`` \| ``"data"`` \| ``"progress"`` \| ``"stop"`` \| ``"track"`` \| ``"source"`` \| ``"button"`` \| ``"address"`` \| ``"view"`` \| ``"clipPath"`` \| ``"font"`` \| ``"marker"`` \| ``"mask"`` \| ``"a"`` \| ``"abbr"`` \| ``"area"`` \| ``"article"`` \| ``"aside"`` \| ``"audio"`` \| ``"b"`` \| ``"base"`` \| ``"bdi"`` \| ``"bdo"`` \| ``"blockquote"`` \| ``"body"`` \| ``"br"`` \| ``"canvas"`` \| ``"caption"`` \| ``"cite"`` \| ``"col"`` \| ``"colgroup"`` \| ``"datalist"`` \| ``"dd"`` \| ``"del"`` \| ``"details"`` \| ``"dfn"`` \| ``"dialog"`` \| ``"dir"`` \| ``"div"`` \| ``"dl"`` \| ``"dt"`` \| ``"em"`` \| ``"embed"`` \| ``"fieldset"`` \| ``"figcaption"`` \| ``"figure"`` \| ``"footer"`` \| ``"form"`` \| ``"frame"`` \| ``"frameset"`` \| ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"head"`` \| ``"header"`` \| ``"hgroup"`` \| ``"hr"`` \| ``"html"`` \| ``"i"`` \| ``"iframe"`` \| ``"img"`` \| ``"ins"`` \| ``"kbd"`` \| ``"label"`` \| ``"legend"`` \| ``"li"`` \| ``"main"`` \| ``"mark"`` \| ``"marquee"`` \| ``"menu"`` \| ``"meta"`` \| ``"meter"`` \| ``"nav"`` \| ``"noscript"`` \| ``"ol"`` \| ``"optgroup"`` \| ``"option"`` \| ``"output"`` \| ``"p"`` \| ``"param"`` \| ``"picture"`` \| ``"pre"`` \| ``"q"`` \| ``"rp"`` \| ``"rt"`` \| ``"ruby"`` \| ``"s"`` \| ``"samp"`` \| ``"script"`` \| ``"section"`` \| ``"select"`` \| ``"slot"`` \| ``"span"`` \| ``"strong"`` \| ``"style"`` \| ``"summary"`` \| ``"table"`` \| ``"tbody"`` \| ``"td"`` \| ``"template"`` \| ``"textarea"`` \| ``"tfoot"`` \| ``"th"`` \| ``"thead"`` \| ``"time"`` \| ``"title"`` \| ``"tr"`` \| ``"u"`` \| ``"ul"`` \| ``"var"`` \| ``"video"`` \| ``"wbr"`` \| ``"animate"`` \| ``"animateMotion"`` \| ``"animateTransform"`` \| ``"circle"`` \| ``"defs"`` \| ``"desc"`` \| ``"ellipse"`` \| ``"feBlend"`` \| ``"feColorMatrix"`` \| ``"feComponentTransfer"`` \| ``"feComposite"`` \| ``"feConvolveMatrix"`` \| ``"feDiffuseLighting"`` \| ``"feDisplacementMap"`` \| ``"feDistantLight"`` \| ``"feDropShadow"`` \| ``"feFlood"`` \| ``"feFuncA"`` \| ``"feFuncB"`` \| ``"feFuncG"`` \| ``"feFuncR"`` \| ``"feGaussianBlur"`` \| ``"feImage"`` \| ``"feMerge"`` \| ``"feMergeNode"`` \| ``"feMorphology"`` \| ``"feOffset"`` \| ``"fePointLight"`` \| ``"feSpecularLighting"`` \| ``"feSpotLight"`` \| ``"feTile"`` \| ``"feTurbulence"`` \| ``"foreignObject"`` \| ``"g"`` \| ``"image"`` \| ``"line"`` \| ``"linearGradient"`` \| ``"metadata"`` \| ``"mpath"`` \| ``"path"`` \| ``"pattern"`` \| ``"polygon"`` \| ``"polyline"`` \| ``"radialGradient"`` \| ``"rect"`` \| ``"svg"`` \| ``"switch"`` \| ``"text"`` \| ``"textPath"`` \| ``"tspan"`` \| ``"use"`` \| ``"<>"`` \| ``"zzz_text"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag_name` | `K` | HTML Element tag name such as `p`, `li`, …, also `svg`, `polyline`, `clipPath`, …. **Important**: You must choose proper `params`, see [namespace_group](../interfaces/dom.componentParams.md#namespace_group)! |
| `attrs?` | [`T_DOM_ATTRS`](dom.md#t_dom_attrs)<`K`\> | - |
| `params?` | [`componentParams`](../interfaces/dom.componentParams.md) | - |

#### Returns

[`componentOut`](dom.md#componentout)<`K`\>

___

### componentListener

▸ **componentListener**<`K`\>(`event`, `callback`): [`component_listener`](../interfaces/dom.component_listener.md)

This provide more DRY way to register native events listeners inside [component](dom.md#component) such as `click`, `touchemove`, ….

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | Browser events |
| `callback` | (`this`: [`T_DOM_ListenersAPI`](../interfaces/dom.T_DOM_ListenersAPI.md), `ev`: `DocumentEventMap`[`K`]) => `any` | Callback with arguments based on [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). |

#### Returns

[`component_listener`](../interfaces/dom.component_listener.md)

▸ **componentListener**<`K`\>(`event`, ...`attrs`): [`component_listener`](../interfaces/dom.component_listener.md)

This provide more DRY way to register events listeners for [component](dom.md#component) such as `init`, `mount`, ….

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`T_DOM_ListenersMap`](../interfaces/dom.T_DOM_ListenersMap.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | Component lifecycle events |
| `...attrs` | [`T_DOM_ListenersMap`](../interfaces/dom.T_DOM_ListenersMap.md)[`K`] | - |

#### Returns

[`component_listener`](../interfaces/dom.component_listener.md)

▸ **componentListener**<`DATA`\>(`event`, `data`, `onUpdate`): [`component_listener`](../interfaces/dom.component_listener.md)

This provide more DRY way to register `onupdate` handler inside [component](dom.md#component).

**`Version`**

1.3.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DATA` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"update"`` | - |
| `data` | `DATA` | Inittial data similar to [onupdate](../interfaces/dom.component_add.md#onupdate). |
| `onUpdate` | (`data`: `DATA`) => `Omit`<`HTMLElement`, ``"classList"``\> & [`T_DOM_ATTRS_MODIFIED`](dom.md#t_dom_attrs_modified) | Callback simira to [onupdate](../interfaces/dom.component_add.md#onupdate). |

#### Returns

[`component_listener`](../interfaces/dom.component_listener.md)

## Private

### T\_DOM\_ATTRS

Ƭ `Private` **T\_DOM\_ATTRS**<`T`\>: `T` extends keyof [`T_DOM_HETNM`](dom.md#t_dom_hetnm) ? `Omit`<[`T_DOM_HETNM`](dom.md#t_dom_hetnm)[`T`], ``"classList"``\> & [`T_DOM_ATTRS_MODIFIED`](dom.md#t_dom_attrs_modified) : `Omit`<`T`, ``"classList"``\> & [`T_DOM_ATTRS_MODIFIED`](dom.md#t_dom_attrs_modified)

Just element attributtes

In most cases, you can use native propertie such as [MDN WEB/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) and so on (e.g. [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text)).

There is added support for `data[A-Z].*`/`aria[A-Z].*` to be converted to the kebab-case alternatives.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`T_DOM_HETNM`](dom.md#t_dom_hetnm) \| [`T_DOM_HETNM`](dom.md#t_dom_hetnm)[keyof [`T_DOM_HETNM`](dom.md#t_dom_hetnm)] |

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

Ƭ `Private` **componentOut**<`T`\>: `T` extends ``""`` ? [`component_empty`](../interfaces/dom.component_empty.md) : [`component_add`](../interfaces/dom.component_add.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`T_DOM_HETNM`](dom.md#t_dom_hetnm) |

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

▸ **replace**(`el_old`, `le_new`): `void`

Procedure replaces `el_old` element by new one (`new_el`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `el_old` | `HTMLElement` |
| `le_new` | `HTMLElement` |

#### Returns

`void`
