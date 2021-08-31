[dollar_dom_component](../README.md) / [%24dom](../modules/_dom.md) / component_mainOut

# Interface: component\_mainOut<elOut\>

[$dom](../modules/_dom.md).component_mainOut

## Type parameters

| Name | Type |
| :------ | :------ |
| `elOut` | extends [`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)[keyof [`T_DOM_HETNM`](../modules/_dom.md#t_dom_hetnm)]`HTMLElement` |

## Hierarchy

- **`component_mainOut`**

  ↳ [`component_main`](_dom.component_main.md)

## Table of contents

### Methods

- [destroy](_dom.component_mainOut.md#destroy)
- [isStatic](_dom.component_mainOut.md#isstatic)
- [mount](_dom.component_mainOut.md#mount)
- [update](_dom.component_mainOut.md#update)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

types.d.ts:30

___

### isStatic

▸ **isStatic**(): `boolean`

#### Returns

`boolean`

#### Defined in

types.d.ts:31

___

### mount

▸ **mount**(`el`, `call_parseHTML?`, `type?`): `elOut`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | Element where to places this component |
| `call_parseHTML?` | `boolean` | If call parseHTML (default: `false`) |
| `type?` | ``"childLast"`` \| ``"childFirst"`` \| ``"replaceContent"`` \| ``"replace"`` \| ``"before"`` \| ``"after"`` | Default `childLast` |

#### Returns

`elOut`

#### Defined in

types.d.ts:38

___

### update

▸ **update**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`boolean`

#### Defined in

types.d.ts:39
