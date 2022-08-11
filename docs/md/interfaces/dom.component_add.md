[$dom.component](../README.md) / [$dom](../modules/dom.md) / component\_add

# Interface: component\_add<cEL\>

[$dom](../modules/dom.md).component_add

## Type parameters

| Name | Type |
| :------ | :------ |
| `cEL` | extends keyof [`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm) |

## Hierarchy

- [`component_main`](dom.component_main.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

  ↳ **`component_add`**

  ↳↳ [`component_empty`](dom.component_empty.md)

## Table of contents

### Properties

- [share](dom.component_add.md#share)

### Methods

- [add](dom.component_add.md#add)
- [addText](dom.component_add.md#addtext)
- [component](dom.component_add.md#component)
- [destroy](dom.component_add.md#destroy)
- [dynamicComponent](dom.component_add.md#dynamiccomponent)
- [getReference](dom.component_add.md#getreference)
- [isStatic](dom.component_add.md#isstatic)
- [mount](dom.component_add.md#mount)
- [on](dom.component_add.md#on)
- [ondestroy](dom.component_add.md#ondestroy)
- [oninit](dom.component_add.md#oninit)
- [onmount](dom.component_add.md#onmount)
- [onupdate](dom.component_add.md#onupdate)
- [setShift](dom.component_add.md#setshift)
- [update](dom.component_add.md#update)

## Properties

### share

• **share**: [`component_mainOut`](dom.component_mainOut.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

#### Inherited from

[component_main](dom.component_main.md).[share](dom.component_main.md#share)

## Methods

### add

▸ **add**<`K`\>(`tag_name`, `attrs?`, `shift?`): [`component_add`](dom.component_add.md)<`K`\>

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
| `K` | extends ``""`` \| ``"symbol"`` \| ``"object"`` \| ``"link"`` \| ``"small"`` \| ``"sub"`` \| ``"sup"`` \| ``"map"`` \| ``"filter"`` \| ``"input"`` \| ``"set"`` \| ``"code"`` \| ``"data"`` \| ``"progress"`` \| ``"stop"`` \| ``"track"`` \| ``"source"`` \| ``"button"`` \| ``"address"`` \| ``"view"`` \| ``"clipPath"`` \| ``"font"`` \| ``"marker"`` \| ``"mask"`` \| ``"a"`` \| ``"abbr"`` \| ``"area"`` \| ``"article"`` \| ``"aside"`` \| ``"audio"`` \| ``"b"`` \| ``"base"`` \| ``"bdi"`` \| ``"bdo"`` \| ``"blockquote"`` \| ``"body"`` \| ``"br"`` \| ``"canvas"`` \| ``"caption"`` \| ``"cite"`` \| ``"col"`` \| ``"colgroup"`` \| ``"datalist"`` \| ``"dd"`` \| ``"del"`` \| ``"details"`` \| ``"dfn"`` \| ``"dialog"`` \| ``"dir"`` \| ``"div"`` \| ``"dl"`` \| ``"dt"`` \| ``"em"`` \| ``"embed"`` \| ``"fieldset"`` \| ``"figcaption"`` \| ``"figure"`` \| ``"footer"`` \| ``"form"`` \| ``"frame"`` \| ``"frameset"`` \| ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"head"`` \| ``"header"`` \| ``"hgroup"`` \| ``"hr"`` \| ``"html"`` \| ``"i"`` \| ``"iframe"`` \| ``"img"`` \| ``"ins"`` \| ``"kbd"`` \| ``"label"`` \| ``"legend"`` \| ``"li"`` \| ``"main"`` \| ``"mark"`` \| ``"marquee"`` \| ``"menu"`` \| ``"meta"`` \| ``"meter"`` \| ``"nav"`` \| ``"noscript"`` \| ``"ol"`` \| ``"optgroup"`` \| ``"option"`` \| ``"output"`` \| ``"p"`` \| ``"param"`` \| ``"picture"`` \| ``"pre"`` \| ``"q"`` \| ``"rp"`` \| ``"rt"`` \| ``"ruby"`` \| ``"s"`` \| ``"samp"`` \| ``"script"`` \| ``"section"`` \| ``"select"`` \| ``"slot"`` \| ``"span"`` \| ``"strong"`` \| ``"style"`` \| ``"summary"`` \| ``"table"`` \| ``"tbody"`` \| ``"td"`` \| ``"template"`` \| ``"textarea"`` \| ``"tfoot"`` \| ``"th"`` \| ``"thead"`` \| ``"time"`` \| ``"title"`` \| ``"tr"`` \| ``"u"`` \| ``"ul"`` \| ``"var"`` \| ``"video"`` \| ``"wbr"`` \| ``"animate"`` \| ``"animateMotion"`` \| ``"animateTransform"`` \| ``"circle"`` \| ``"defs"`` \| ``"desc"`` \| ``"ellipse"`` \| ``"feBlend"`` \| ``"feColorMatrix"`` \| ``"feComponentTransfer"`` \| ``"feComposite"`` \| ``"feConvolveMatrix"`` \| ``"feDiffuseLighting"`` \| ``"feDisplacementMap"`` \| ``"feDistantLight"`` \| ``"feDropShadow"`` \| ``"feFlood"`` \| ``"feFuncA"`` \| ``"feFuncB"`` \| ``"feFuncG"`` \| ``"feFuncR"`` \| ``"feGaussianBlur"`` \| ``"feImage"`` \| ``"feMerge"`` \| ``"feMergeNode"`` \| ``"feMorphology"`` \| ``"feOffset"`` \| ``"fePointLight"`` \| ``"feSpecularLighting"`` \| ``"feSpotLight"`` \| ``"feTile"`` \| ``"feTurbulence"`` \| ``"foreignObject"`` \| ``"g"`` \| ``"image"`` \| ``"line"`` \| ``"linearGradient"`` \| ``"metadata"`` \| ``"mpath"`` \| ``"path"`` \| ``"pattern"`` \| ``"polygon"`` \| ``"polyline"`` \| ``"radialGradient"`` \| ``"rect"`` \| ``"svg"`` \| ``"switch"`` \| ``"text"`` \| ``"textPath"`` \| ``"tspan"`` \| ``"use"`` \| ``"<>"`` \| ``"zzz_text"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag_name` | `K` | - |
| `attrs?` | [`T_DOM_ATTRS`](../modules/dom.md#t_dom_attrs)<`K`\> | - |
| `shift?` | `number` | Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example. |

#### Returns

[`component_add`](dom.component_add.md)<`K`\>

#### Inherited from

[component_main](dom.component_main.md).[add](dom.component_main.md#add)

___

### addText

▸ **addText**(`text`, `shift?`): [`component_add`](dom.component_add.md)<``"zzz_text"``\>

This add element to component
```javascript
const c1= $dom.component("P", { textContent: "TEXT" });
const c2= $dom.component("P", null);
	   c2.addText("TEXT");
//c1-> <p>TEXT</p>  ===	<p>TEXT</p> <-c2
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

[`component_add`](dom.component_add.md)<``"zzz_text"``\>

#### Inherited from

[component_main](dom.component_main.md).[addText](dom.component_main.md#addtext)

___

### component

▸ **component**(`share`, `shift`): [`component_main`](dom.component_main.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

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
| `share` | [`component_mainOut`](dom.component_mainOut.md)<`HTMLElement`\> |
| `shift` | `number` |

#### Returns

[`component_main`](dom.component_main.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

#### Inherited from

[component_main](dom.component_main.md).[component](dom.component_main.md#component)

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

[component_main](dom.component_main.md).[destroy](dom.component_main.md#destroy)

___

### dynamicComponent

▸ **dynamicComponent**<`DATA`\>(`data`, `generator`, `shift`): [`component_main`](dom.component_main.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

Method for including another component by using `generator` function, which can change final `component` based on updated data `data`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DATA` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `DATA` | Includes all subsribed keys from `data` see method [onupdate](dom.component_add.md#onupdate) |
| `generator` | [`dynamicComponentGenerator`](dom.dynamicComponentGenerator.md)<`DATA`\> | Function for registering components based on updates of `data`. |
| `shift` | `number` | - |

#### Returns

[`component_main`](dom.component_main.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

#### Inherited from

[component_main](dom.component_main.md).[dynamicComponent](dom.component_main.md#dynamiccomponent)

___

### getReference

▸ **getReference**(): [`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]

Returns reference of currently added element

#### Returns

[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]

___

### isStatic

▸ **isStatic**(): `boolean`

Methods returns if it was `onupdate` used

#### Returns

`boolean`

#### Inherited from

[component_main](dom.component_main.md).[isStatic](dom.component_main.md#isstatic)

___

### mount

▸ **mount**(`el`, `type?`): [`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]

Add element to live DOM

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | Element where to places this component |
| `type?` | ``"replace"`` \| ``"after"`` \| ``"before"`` \| ``"replaceContent"`` \| ``"childFirst"`` \| ``"childLast"`` | Default `childLast` |

#### Returns

[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]

#### Inherited from

[component_main](dom.component_main.md).[mount](dom.component_main.md#mount)

___

### on

▸ **on**(...`events`): [`component_add`](dom.component_add.md)<`cEL`\>

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
| `...events` | [`component_listener`](dom.component_listener.md)[] | Consumes [component_listener](dom.component_listener.md). |

#### Returns

[`component_add`](dom.component_add.md)<`cEL`\>

___

### ondestroy

▸ **ondestroy**(`cb`): [`component_main`](dom.component_main.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

This provide ability to register function which should be called when the component will be destroyed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`onDestroyFunction`: `HTMLElement`) => `void` |

#### Returns

[`component_main`](dom.component_main.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

#### Inherited from

[component_main](dom.component_main.md).[ondestroy](dom.component_main.md#ondestroy)

___

### oninit

▸ **oninit**(`cb`): [`component_add`](dom.component_add.md)<`cEL`\>

This procedure allows to call given function `cb` during registering element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`el`: [`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]) => `void` |

#### Returns

[`component_add`](dom.component_add.md)<`cEL`\>

___

### onmount

▸ **onmount**(`cb`): [`component_add`](dom.component_add.md)<`cEL`\>

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
| `cb` | () => [`T_DOM_ATTRS`](../modules/dom.md#t_dom_attrs)<`cEL`\> |

#### Returns

[`component_add`](dom.component_add.md)<`cEL`\>

___

### onupdate

▸ **onupdate**<`DATA`\>(`data`, `onUpdate`): [`component_add`](dom.component_add.md)<`cEL`\>

This method allows to register function which shoul be invoke when given **keys** in `data` will be changed (see [update](dom.component_mainOut.md#update)).
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
| `onUpdate` | (`data`: `DATA`) => [`T_DOM_ATTRS`](../modules/dom.md#t_dom_attrs)<`cEL`\> | - |

#### Returns

[`component_add`](dom.component_add.md)<`cEL`\>

___

### setShift

▸ **setShift**(`shift`): [`component_main`](dom.component_main.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

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
| `shift` | `number` | See [add](dom.component_main.md#add) |

#### Returns

[`component_main`](dom.component_main.md)<[`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[`cEL`]\>

#### Inherited from

[component_main](dom.component_main.md).[setShift](dom.component_main.md#setshift)

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

[component_main](dom.component_main.md).[update](dom.component_main.md#update)

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

[component_main](dom.component_main.md).[update](dom.component_main.md#update)
