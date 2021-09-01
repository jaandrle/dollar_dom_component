/**
 * This NAMESPACE provides features for DOM elements.
 */
declare namespace $dom{
    /**
     * Procedure removes all children of `container`
     */
    function empty(container: HTMLElement): void;
    /**
     * Procedure places `new_element` after `reference` elements
     */
    function insertAfter(new_element: HTMLElement, reference: HTMLElement): void;
    /**
     * Procedure replaces `el_old` element by new one (`new_el`)
     */
    function replace(el_old: HTMLElement, le_new: HTMLElement): void;
}