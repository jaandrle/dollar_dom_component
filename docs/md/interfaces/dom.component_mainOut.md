[$dom.component](../README.md) / [$dom](../modules/dom.md) / component\_mainOut

# Interface: component\_mainOut<elOut\>

[$dom](../modules/dom.md).component_mainOut

## Type parameters

| Name | Type |
| :------ | :------ |
| `elOut` | extends [`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)[keyof [`T_DOM_HETNM`](../modules/dom.md#t_dom_hetnm)] = `HTMLElement` |

## Hierarchy

- **`component_mainOut`**

  ↳ [`component_main`](dom.component_main.md)

## Table of contents

### Methods

- [destroy](dom.component_mainOut.md#destroy)
- [isStatic](dom.component_mainOut.md#isstatic)
- [mount](dom.component_mainOut.md#mount)
- [update](dom.component_mainOut.md#update)

## Methods

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

___

### isStatic

▸ **isStatic**(): `boolean`

Methods returns if it was `onupdate` used

#### Returns

`boolean`

___

### mount

▸ **mount**(`el`, `type?`): `elOut`

Add element to live DOM

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | Element where to places this component |
| `type?` | ``"replace"`` \| ``"after"`` \| ``"before"`` \| ``"childLast"`` \| ``"childFirst"`` \| ``"replaceContent"`` | Default `childLast` |

#### Returns

`elOut`

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
