[$dom.component](../README.md) / [%24dom](../modules/_dom.md) / component_main

# Interface: component\_main<elOut\>

[$dom](../modules/_dom.md).component_main

## Type parameters

| Name | Type |
| :------ | :------ |
| `elOut` | extends [`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[keyof [`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)] |

## Hierarchy

- [`component_mainOut`](_dom.component_mainOut.md)<`elOut`\>

  ↳ **`component_main`**

  ↳↳ [`component_add`](_dom.component_add.md)

## Table of contents

### Properties

- [share](_dom.component_main.md#share)

### Methods

- [add](_dom.component_main.md#add)
- [addText](_dom.component_main.md#addtext)
- [component](_dom.component_main.md#component)
- [destroy](_dom.component_main.md#destroy)
- [dynamicComponent](_dom.component_main.md#dynamiccomponent)
- [isStatic](_dom.component_main.md#isstatic)
- [mount](_dom.component_main.md#mount)
- [ondestroy](_dom.component_main.md#ondestroy)
- [setShift](_dom.component_main.md#setshift)
- [update](_dom.component_main.md#update)

## Properties

### share

• **share**: [`component_mainOut`](_dom.component_mainOut.md)<`elOut`\>

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

#### Defined in

$dom_component.d.ts:101

___

### component

▸ **component**(`share`, `shift`): [`component_main`](_dom.component_main.md)<`elOut`\>

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

[`component_main`](_dom.component_main.md)<`elOut`\>

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

[component_mainOut](_dom.component_mainOut.md).[destroy](_dom.component_mainOut.md#destroy)

#### Defined in

$dom_component.d.ts:434

___

### dynamicComponent

▸ **dynamicComponent**<`DATA`\>(`data`, `generator`, `shift`): [`component_main`](_dom.component_main.md)<`elOut`\>

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

[`component_main`](_dom.component_main.md)<`elOut`\>

#### Defined in

$dom_component.d.ts:121

___

### isStatic

▸ **isStatic**(): `boolean`

Methods returns if it was `onupdate` used

#### Returns

`boolean`

#### Inherited from

[component_mainOut](_dom.component_mainOut.md).[isStatic](_dom.component_mainOut.md#isstatic)

#### Defined in

$dom_component.d.ts:438

___

### mount

▸ **mount**(`el`, `type?`): `elOut`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | Element where to places this component |
| `type?` | ``"childLast"`` \| ``"childFirst"`` \| ``"replaceContent"`` \| ``"replace"`` \| ``"before"`` \| ``"after"`` | Default `childLast` |

#### Returns

`elOut`

#### Inherited from

[component_mainOut](_dom.component_mainOut.md).[mount](_dom.component_mainOut.md#mount)

#### Defined in

$dom_component.d.ts:444

___

### ondestroy

▸ **ondestroy**(`cb`): [`component_main`](_dom.component_main.md)<`elOut`\>

This provide ability to register function which should be called when the component will be destroyed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`onDestroyFunction`: `HTMLElement`) => `void` |

#### Returns

[`component_main`](_dom.component_main.md)<`elOut`\>

#### Defined in

$dom_component.d.ts:156

___

### setShift

▸ **setShift**(`shift`): [`component_main`](_dom.component_main.md)<`elOut`\>

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

[`component_main`](_dom.component_main.md)<`elOut`\>

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

[component_mainOut](_dom.component_mainOut.md).[update](_dom.component_mainOut.md#update)

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

[component_mainOut](_dom.component_mainOut.md).[update](_dom.component_mainOut.md#update)

#### Defined in

$dom_component.d.ts:483
