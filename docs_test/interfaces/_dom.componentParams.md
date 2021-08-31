[dollar_dom_component](../README.md) / [%24dom](../modules/_dom.md) / componentParams

# Interface: componentParams

[$dom](../modules/_dom.md).componentParams

Options for {@link}

## Table of contents

### Properties

- [namespace\_group](_dom.componentParams.md#namespace_group)
- [safe\_el\_name\_only](_dom.componentParams.md#safe_el_name_only)

### Methods

- [mapUpdate](_dom.componentParams.md#mapupdate)

## Properties

### namespace\_group

• `Optional` **namespace\_group**: `string`

This parameter provides ability to defined elements for diferent [`namespaceURI`s](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI). Use "__SVG__" for "http://www.w3.org/2000/svg" (full list [Important Namespace URIs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS#Important_Namespace_URIs)).

#### Defined in

types.d.ts:196

___

### safe\_el\_name\_only

• `Optional` **safe\_el\_name\_only**: `boolean`

This parameter provides ability to disable long components names like `empty`, `fragment` – see {@link module:jaaJSU~$dom.cEL_NAME}.

#### Defined in

types.d.ts:200

## Methods

### mapUpdate

▸ `Optional` **mapUpdate**(`data`): `object`

This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method [component_mainOut.update](_dom.component_mainOut.md#update).

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`object`

#### Defined in

types.d.ts:192
