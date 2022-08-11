[$dom.component](../README.md) / [$dom](../modules/dom.md) / dynamicComponentGenerator

# Interface: dynamicComponentGenerator<DATA\>

[$dom](../modules/dom.md).dynamicComponentGenerator

## Type parameters

| Name |
| :------ |
| `DATA` |

## Callable

### dynamicComponentGenerator

▸ `Private` **dynamicComponentGenerator**<`iDATA`\>(`mount`, `current_component`, `data`, `current_value`): `iDATA`

This is function for registering component for [dynamicComponent](dom.component_main.md#dynamiccomponent)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `iDATA` | extends `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mount` | (`componentMainOut`: [`component_mainOut`](dom.component_mainOut.md)<`HTMLElement`\>) => `void` | Function which consumes [component_mainOut](dom.component_mainOut.md) |
| `current_component` | [`component_mainOut`](dom.component_mainOut.md)<`HTMLElement`\> | Previously registered component |
| `data` | `DATA` | Includes all subsribed keys from `data` see method [onupdate](dom.component_add.md#onupdate) |
| `current_value` | `iDATA` | Shared value across multiple calling |

#### Returns

`iDATA`

`current_value`
