declare namespace $dom {
    /**
     * @private
     */
    type T_DOM_HETNM= HTMLElementTagNameMap & SVGElementTagNameMap & {
        '<>': DocumentFragment,
        '': HTMLElement,
        'zzz_text': Text
    }
    /**
     * @private
     */
    type T_DOM_ATTRS_MODIFIED= {
        /**
         * In fact argumen for `*.setAttribute("style", *)`.
         */
        style: string
        /**
         * Provide option to add/remove/toggle CSS clasess (index of object) using 1/0/-1.
         */
        classList: Record<string,-1|0|1>
    }
    /**
     * Just element attributtes
     * @private
     */
    type T_DOM_ATTRS<T extends keyof T_DOM_HETNM | T_DOM_HETNM[keyof T_DOM_HETNM]>=
        T extends keyof T_DOM_HETNM ?
        Omit<T_DOM_HETNM[T],"classList"> & T_DOM_ATTRS_MODIFIED :
        Omit<T,"classList"> & T_DOM_ATTRS_MODIFIED;
    /**
     * @private
     */
    interface component_mainOut<elOut extends T_DOM_HETNM[keyof T_DOM_HETNM]= HTMLElement>{
        destroy(): void,
        isStatic(): boolean,
        /**
         * 
         * @param el Element where to places this component
         * @param call_parseHTML If call parseHTML (default: `false`)
         * @param type Default `childLast`
         */
        mount(el: HTMLElement, call_parseHTML?: boolean, type?: "childLast"|"childFirst"|"replaceContent"|"replace"|"before"|"after"): elOut
        update(data: object): boolean
    }
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
    interface component_main<elOut extends T_DOM_HETNM[keyof T_DOM_HETNM]> extends component_mainOut<elOut>{
        /**
         * This add element to component
         * ```javascript
         * const UL= document.getElementById('SOME UL');
         * const { add }= $dom.component("LI", { className: "list_item" });
         * //result: <li class="list_item">...</li>
         * add("DIV", { textContent: "Child of .list_item", className: "deep1" });
         * //result: <li class="list_item"><div class="deep1">...</div></li>
         *     add("DIV", { textContent: "Child of div.deep1", className: "deep2" });
         *     //result: ...<div class="deep1"><div class="deep2">...</div></div>...
         *         add("DIV", { textContent: "Child of div.deep2", className: "deep3" });
         *         //result: ...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
         *         add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);
         *         //result: ...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
         * //next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
         *     add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
         *     //result: this is on 2nd level
         * add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
         * //result: this is on 0 level
         *     add("DIV", null);
         *     //just DIV without attributes
         * ```
         * @param shift Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
         */
        add <K extends keyof T_DOM_HETNM>(tag_name: K, attrs?: T_DOM_ATTRS<K>, shift?: number): component_add<K>
        /**
         * This add element to component
         * ```javascript
         * const c1= $dom.component("P", { textContent: "TEXT" });
         * const c2= $dom.component("P", null);
         *     c2.addText("TEXT");
         * //c1-> <p>TEXT</p>  ===  <p>TEXT</p> <-c2
         * ```
         * ```javascript
         * function testTextLi({ href= "https://www.seznam.cz" }= {}){
         *     const c= $dom.component("LI", null);
         *         c.add("P", { textContent: "Link test: " });
         *             c.add("A", { textContent: "link ", href });
         *                 c.add("STRONG", { textContent: `(${href.replace("https://www.", "")})` });
         *             c.addText("!", -2);
         *             c.add("BR", null, -1);
         *             c.addText("Test new line.", -1);
         *     return c.share;
         * }
         * //result: '<p>Link test: <a href="...">link <strong>...</strong></a>!<br>Test new line.</p>'
         * ```
         */
        addText(text: string, shift?: number): component_add<"zzz_text">
        /**
         * Method for including another component by usint its `share` key.
         * ```javascript
         * function p({ textContent }){
         *      const cP= $dom.component("P", { textContent });
         *      return cP.share;
         * }
         * const c= $dom.component("DIV", null);
         * for(let i=0; i<3; i++){ c.component(p({ textContent: i })); }
         * c.mount(document.body, "replaceContent");
         * //= <body><div><p>0</p><p>1</p><p>2</p></div></body>
         * ```
         */
        component(share: component_mainOut, shift: number): component_main<elOut>
        /**
         * Method for including another component by using `generator` function, which can change final `component` based on updated data `data`.
         * @param data Includes all subsribed keys from `data` see method {@link component_add.onupdate}
         * @param generator Function for registering components based on updates of `data`.
         */
        dynamicComponent<DATA extends object>(data: DATA, generator: dynamicComponentGenerator<DATA>, shift: number): component_main<elOut>
        /**
         * Method provide way to change nesting behaviour. It can be helpful for loops
         * ```javascript
         * function testNesting(){
         *     const c= $dom.component("DIV", null);
         *         c.setShift(0);
         *     for(let i= 0; i<5; i++){
         *         c.add("P", { textContent: `Paragraph no. ${i}.` }, -1);
         *     }
         *     return c.share;
         * }
         * //=> div> 5*p
         * ```
         * ```javascript
         * function testNesting(){
         *     const c= $dom.component("DIV", null);
         *     for(let i= 0; i<5; i++){
         *         c.add("P", { textContent: `Paragraph no. ${i}.` });
         *          //c.setShift();//or 0 => div> p> p> p> …
         *       //c.setShift(-1); => div> p> p> p> …
         *     c.setShift(-2);
         *     }
         *     return c.share;
         * }
         * //=> div> 5*p
         * ```
         * 
         * @param shif See {@link component_main.add}
         */
        setShift(shif: number): component_main<elOut>
        share: component_mainOut<elOut>
    }
    /**
     * @private
     */
    interface component_add<cEL extends keyof T_DOM_HETNM> extends component_main<T_DOM_HETNM[cEL]>{
        getReference(): T_DOM_HETNM[cEL]
        on(...events: component_listener[]): component_add<cEL>
        onupdate<DATA extends object>(data: DATA, onUpdate: (data: DATA)=> T_DOM_ATTRS<cEL>): component_add<cEL>
        oninit(cb: (el: T_DOM_HETNM[cEL])=> void): component_add<cEL>
        onmount(cb: ()=> T_DOM_ATTRS<cEL>): component_add<cEL>
    }
    /**
     * @private
     */
    interface component_empty extends component_add<"">{}
    /**
     * @private
     */
    type componentOut<T extends keyof T_DOM_HETNM>= T extends '' ? component_empty : component_add<T>;
    /**
     * @private
     */
    interface component_listener{
        0: string
        1: any[]
    }
    /**
     * Options for {@link}
     * @category Public
     */
    interface componentParams{
        /**
         * This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method {@link component_mainOut.update}.
         */
        mapUpdate?: (data: object)=> object
        /**
         * This parameter provides ability to defined elements for diferent [`namespaceURI`s](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI). Use "__SVG__" for "http://www.w3.org/2000/svg" (full list [Important Namespace URIs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS#Important_Namespace_URIs)).
         */
        namespace_group?: string
        /**
         * This parameter provides ability to disable long components names like `empty`, `fragment` – see {@link module:jaaJSU~$dom.cEL_NAME}.
         */
        safe_el_name_only?: boolean
    }
    /**
     * 
     * @category Public
     * @param element 
     * @param attrs_array 
     */
    function assign<EL extends HTMLElement>(element: EL, ...attrs_array: T_DOM_ATTRS<EL>[]): EL
    function assignNS<EL extends HTMLElement>(namespace_group: string, element: EL, ...attrs_array: EL[]): EL
    /**
     * This 'functional class' is syntax sugar around ` document.createElement`(`NS`) and `document.createDocumentFragment` for creating DOM components and their adding to live DOM in performance friendly way.
     * 
     * So pseudo code:
     * ```javascript
     * function Component(…){
     *  const { add, share }= $dom.component(…Parent Element…);
     *      add(…Child Element…);
     *      add(…Child Element…, -1);
     *          add(…Child Element…);
     *  …
     *  return share;
     * }
     * ```
     * 
     * Yelds into:
     * ```html
     * <!--<Component>-->
     *  <Parent Element>
     *   <Child Element></Child Element>
     *   <Child Element>
     *      <Child Element></Child Element>
     *   </Child Element>
     *  …
     *  </Parent Element>
     * <!--</Component>-->
     * ```
     * 
     * @category Public
     * @param tag_name HTML Element tag name such as `p`, `li`, …, also `svg`, `polyline`, `clipPath`, …. **Important**: You must choose proper `params`, see {@link componentParams.namespace_group}!
     */
    function component <K extends keyof T_DOM_HETNM>(tag_name: K, attrs?: T_DOM_ATTRS<K>, params?: componentParams): componentOut<K>
    /**
     * @private
     */
    interface T_DOM_ListenersMap{
        init: [ (el: HTMLElement)=> void ]
        mount: [ ()=> HTMLElement ]
    }
    function componentListener<K extends keyof DocumentEventMap>(event: K, callback: (ev: DocumentEventMap[K])=> any): component_listener
    function componentListener<K extends keyof T_DOM_ListenersMap>(event: K, ...attrs: T_DOM_ListenersMap[K]): component_listener
    function componentListener<DATA extends object>(event: "update", data: DATA, onUpdate: (data: DATA)=> HTMLElement): component_listener
}