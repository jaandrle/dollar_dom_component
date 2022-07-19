[$dom.component](../README.md) / [$dom](../modules/dom.md) / componentParams

# Interface: componentParams

[$dom](../modules/dom.md).componentParams

Options for {@link}

## Table of contents

### Properties

- [mapUpdate](dom.componentParams.md#mapupdate)
- [namespace\_group](dom.componentParams.md#namespace_group)
- [safe\_el\_name\_only](dom.componentParams.md#safe_el_name_only)

## Properties

### mapUpdate

• `Optional` **mapUpdate**: (`data`: `object`) => `object`

#### Type declaration

▸ (`data`): `object`

This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [update](dom.component_mainOut.md#update).

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

##### Returns

`object`

___

### namespace\_group

• `Optional` **namespace\_group**: ``""`` \| ``"SVG"``

This parameter provides ability to defined elements for diferent [`namespaceURI`s](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI). Use "__SVG__" for "http://www.w3.org/2000/svg" (full list [Important Namespace URIs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS#Important_Namespace_URIs)).

___

### safe\_el\_name\_only

• `Optional` **safe\_el\_name\_only**: `boolean`

This parameter provides ability to disable long components names like `empty`, `fragment` – see module:jaaJSU~$dom.cEL_NAME.
