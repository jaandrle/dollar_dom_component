[dollar_dom_component](../README.md) / [%24dom](../modules/_dom.md) / component_add

# Interface: component\_add<cEL\>

[$dom](../modules/_dom.md).component_add

## Type parameters

| Name | Type |
| :------ | :------ |
| `cEL` | extends keyof [`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm) |

## Hierarchy

- [`component_main`](_dom.component_main.md)<[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]\>

  ↳ **`component_add`**

  ↳↳ [`component_empty`](_dom.component_empty.md)

## Table of contents

### Properties

- [share](_dom.component_add.md#share)

### Methods

- [add](_dom.component_add.md#add)
- [addText](_dom.component_add.md#addtext)
- [component](_dom.component_add.md#component)
- [destroy](_dom.component_add.md#destroy)
- [dynamicComponent](_dom.component_add.md#dynamiccomponent)
- [getReference](_dom.component_add.md#getreference)
- [isStatic](_dom.component_add.md#isstatic)
- [mount](_dom.component_add.md#mount)
- [on](_dom.component_add.md#on)
- [oninit](_dom.component_add.md#oninit)
- [onmount](_dom.component_add.md#onmount)
- [onupdate](_dom.component_add.md#onupdate)
- [setShift](_dom.component_add.md#setshift)
- [update](_dom.component_add.md#update)

## Properties

### share

• **share**: [`component_mainOut`](_dom.component_mainOut.md)<[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]\>

#### Inherited from

[component_main](_dom.component_main.md).[share](_dom.component_main.md#share)

#### Defined in

types.d.ts:157

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

[component_main](_dom.component_main.md).[add](_dom.component_main.md#add)

#### Defined in

types.d.ts:83

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

[component_main](_dom.component_main.md).[addText](_dom.component_main.md#addtext)

#### Defined in

types.d.ts:106

___

### component

▸ **component**(`share`, `shift`): [`component_main`](_dom.component_main.md)<[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]\>

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

[`component_main`](_dom.component_main.md)<[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]\>

#### Inherited from

[component_main](_dom.component_main.md).[component](_dom.component_main.md#component)

#### Defined in

types.d.ts:120

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[component_main](_dom.component_main.md).[destroy](_dom.component_main.md#destroy)

#### Defined in

types.d.ts:30

___

### dynamicComponent

▸ **dynamicComponent**<`DATA`\>(`data`, `generator`, `shift`): [`component_main`](_dom.component_main.md)<[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]\>

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

[`component_main`](_dom.component_main.md)<[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]\>

#### Inherited from

[component_main](_dom.component_main.md).[dynamicComponent](_dom.component_main.md#dynamiccomponent)

#### Defined in

types.d.ts:126

___

### getReference

▸ **getReference**(): [`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]

#### Returns

[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]

#### Defined in

types.d.ts:163

___

### isStatic

▸ **isStatic**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[component_main](_dom.component_main.md).[isStatic](_dom.component_main.md#isstatic)

#### Defined in

types.d.ts:31

___

### mount

▸ **mount**(`el`, `call_parseHTML?`, `type?`): [`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | Element where to places this component |
| `call_parseHTML?` | `boolean` | If call parseHTML (default: `false`) |
| `type?` | ``"childLast"`` \| ``"childFirst"`` \| ``"replaceContent"`` \| ``"replace"`` \| ``"before"`` \| ``"after"`` | Default `childLast` |

#### Returns

[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]

#### Inherited from

[component_main](_dom.component_main.md).[mount](_dom.component_main.md#mount)

#### Defined in

types.d.ts:38

___

### on

▸ **on**(...`events`): [`component_add`](_dom.component_add.md)<`cEL`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...events` | [`component_listener`](_dom.component_listener.md)[] |

#### Returns

[`component_add`](_dom.component_add.md)<`cEL`\>

#### Defined in

types.d.ts:164

___

### oninit

▸ **oninit**(`cb`): [`component_add`](_dom.component_add.md)<`cEL`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`el`: [`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]) => `void` |

#### Returns

[`component_add`](_dom.component_add.md)<`cEL`\>

#### Defined in

types.d.ts:166

___

### onmount

▸ **onmount**(`cb`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => [`T_DOM_ATTRS`](../modules/_dom.md#t_dom_attrs)<`cEL`\> |

#### Returns

`any`

#### Defined in

types.d.ts:167

___

### onupdate

▸ **onupdate**<`DATA`\>(`data`, `onUpdate`): [`component_add`](_dom.component_add.md)<`cEL`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DATA` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DATA` |
| `onUpdate` | (`data`: `DATA`) => [`T_DOM_ATTRS`](../modules/_dom.md#t_dom_attrs)<`cEL`\> |

#### Returns

[`component_add`](_dom.component_add.md)<`cEL`\>

#### Defined in

types.d.ts:165

___

### setShift

▸ **setShift**(`shif`): [`component_main`](_dom.component_main.md)<[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]\>

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
| `shif` | `number` | See [component_main.add](_dom.component_main.md#add) |

#### Returns

[`component_main`](_dom.component_main.md)<[`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[`cEL`]\>

#### Inherited from

[component_main](_dom.component_main.md).[setShift](_dom.component_main.md#setshift)

#### Defined in

types.d.ts:156

___

### update

▸ **update**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`boolean`

#### Inherited from

[component_main](_dom.component_main.md).[update](_dom.component_main.md#update)

#### Defined in

types.d.ts:39
