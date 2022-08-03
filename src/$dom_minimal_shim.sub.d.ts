/**
 * This NAMESPACE provides features for DOM elements.
 */
declare namespace $dom{
	/**
	 * Procedure removes all children of `container`
	 */
	function empty(container: HTMLElement): void;
	/**
	 * Procedure provide ways to insert elements into DOM in relation to `element_target`.
	 */
	function mount(element_target: HTMLElement | SVGElement, type: "after"|"before"|"replace"|"replaceContent"|"childFirst"|"childLast"):
		<T extends HTMLElement | SVGElement | $dom.componentOut<keyof $dom.T_DOM_HETNM>>(element: T) => T
}
