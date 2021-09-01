declare namespace $dom{
    /**
     * @private
     */
    interface dynamicComponentGenerator<DATA>{
        /**
         * This is function for registering component for {@link component_main.dynamicComponent}
         * @param mount Function which consumes {@link component_mainOut}
         * @param current_component Previously registered component
         * @param data Includes all subsribed keys from `data` see method {@link component_add.onupdate}
         * @param current_value Shared value across multiple calling
         * @returns `current_value`
         */
        <iDATA extends any>(mount: (componentMainOut: component_mainOut)=> void, current_component: component_mainOut|null, data: DATA, current_value: iDATA): iDATA
    }
    /**
     * @private
     */
    interface component_mainOut<elOut extends T_DOM_HETNM[keyof T_DOM_HETNM]= HTMLElement>{
        /**
         * Method remove element form live DOM and returns null
         * ```javascript
         * let c= $dom.component("DIV", null);
         * c.mount(document.body, "replaceContent");
         * c= c.share.destroy();
         * //=> c===null AND <body></body>
         * ```
         */
        destroy(): void,
        /**
         * Methods returns if it was `onupdate` used
         */
        isStatic(): boolean,
        /**
         * 
         * @param el Element where to places this component
         * @param type Default `childLast`
         */
        mount(el: HTMLElement, type?: "childLast"|"childFirst"|"replaceContent"|"replace"|"before"|"after"): elOut
        /**
         * Method updates all registered varibles by keys `onupdates` and calls follower functions
         * ```javascript
         * // SIMPLE example
         * const data_A= { a: "A" };
         * const data_A_update= { a: "AAA" };
         * const c= $dom.component("UL", null);
         *     c.add("LI", null)
         *          .onupdate(data_A, ({ a })=>({ textContent: a }));//`{ a }` add listener for "a"
         * c.mount(document.body);
         * c.update(data_A_update);
         * ```
         * 
         * ```javascript
         * // EXAMPLE WITH `mapUpdate`
         * const data_B= { a: { b: "A" }};
         * const data_B_update= { a: { b: "AAA" }};
         * const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         *     c.add("LI", null)
         *          .onupdate(data_B, ({ a })=>({ textContent: a }));
         * c.mount(document.body);
         * c.update(data_B_update);
         * ```
         * @param data Updates internal storage (via `Object.assign` – no deep copy!)
         */
        update(data: object): boolean
        /**
         * Method updates all registered varibles by keys `onupdates` and calls follower functions
         * ```javascript
         * // EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
         * const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         *     c.add("LI", null)
         *          .onupdate({ a: 1 }, ({ a })=>({ textContent: a }));
         * c.mount(document.body);
         * c.update(({ a })=> { a: ++a });
         * ```
         * @param map Function takes as parameter previous internal storage and returns updated one (internally used `Object.assign` – no deep copy!)
         */
        update(map: (data: object)=> object): boolean
    }
}