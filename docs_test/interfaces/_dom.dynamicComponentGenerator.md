[dollar_dom_component](../README.md) / [%24dom](../modules/_dom.md) / dynamicComponentGenerator

# Interface: dynamicComponentGenerator<DATA\>

[$dom](../modules/_dom.md).dynamicComponentGenerator

## Type parameters

| Name |
| :------ |
| `DATA` |

## Callable

### dynamicComponentGenerator

▸ `Private` **dynamicComponentGenerator**<`iDATA`\>(`mount`, `current_component`, `data`, `current_value`): `iDATA`

This is function for registering component for [component_main.dynamicComponent](_dom.component_main.md#dynamiccomponent)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `iDATA` | extends `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mount` | (`componentMainOut`: `any`) => `void` | Function which consumes [component_mainOut](_dom.component_mainOut.md) |
| `current_component` | [`component_mainOut`](_dom.component_mainOut.md)<`HTMLElement`\> | Previously registered component |
| `data` | `DATA` | Includes all subsribed keys from `data` see method [component_add.onupdate](_dom.component_add.md#onupdate) |
| `current_value` | `iDATA` | Shared value across multiple calling |

#### Returns

`iDATA`

`current_value`

#### Defined in

types.d.ts:53
