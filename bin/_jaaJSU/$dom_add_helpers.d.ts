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
		 * Provide option to add/remove/toggle CSS clasess (index of object) using 1/0/-1. In fact `el.classList.toggle(class_name)` for `-1` and `el.classList.toggle(class_name, Boolean(...))` for others.
		 */
		classList: Record<string,-1|0|1>
	}
	/**
	 * Just element attributtes
	 * 
	 * In most cases, you can use native propertie such as [MDN WEB/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) and so on (e.g. [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text)).
	 * 
	 * There is added support for `data[A-Z].*`/`aria[A-Z].*` to be converted to the kebab-case alternatives.
	 * @private
	 */
	type T_DOM_ATTRS<T extends keyof T_DOM_HETNM | T_DOM_HETNM[keyof T_DOM_HETNM]>=
		T extends keyof T_DOM_HETNM ?
		Omit<T_DOM_HETNM[T],"classList"> & T_DOM_ATTRS_MODIFIED :
		Omit<T,"classList"> & T_DOM_ATTRS_MODIFIED;
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
		 *	   add("DIV", { textContent: "Child of div.deep1", className: "deep2" });
		 *	   //result: ...<div class="deep1"><div class="deep2">...</div></div>...
		 *		   add("DIV", { textContent: "Child of div.deep2", className: "deep3" });
		 *		   //result: ...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
		 *		   add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);
		 *		   //result: ...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
		 * //next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
		 *	   add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
		 *	   //result: this is on 2nd level
		 * add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
		 * //result: this is on 0 level
		 *	   add("DIV", null);
		 *	   //just DIV without attributes
		 * ```
		 * @param shift Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
		 */
		add <K extends keyof T_DOM_HETNM>(tag_name: K, attrs?: T_DOM_ATTRS<K>, shift?: number): component_add<K>
		/**
		 * This add element to component
		 * ```javascript
		 * const c1= $dom.component("P", { textContent: "TEXT" });
		 * const c2= $dom.component("P", null);
		 *	   c2.addText("TEXT");
		 * //c1-> <p>TEXT</p>  ===	<p>TEXT</p> <-c2
		 * ```
		 * ```javascript
		 * function testTextLi({ href= "https://www.seznam.cz" }= {}){
		 *	   const c= $dom.component("LI", null);
		 *		   c.add("P", { textContent: "Link test: " });
		 *			   c.add("A", { textContent: "link ", href });
		 *				   c.add("STRONG", { textContent: `(${href.replace("https://www.", "")})` });
		 *			   c.addText("!", -2);
		 *			   c.add("BR", null, -1);
		 *			   c.addText("Test new line.", -1);
		 *	   return c.share;
		 * }
		 * //result: '<p>Link test: <a href="...">link <strong>...</strong></a>!<br>Test new line.</p>'
		 * ```
		 */
		addText(text: string, shift?: number): component_add<"zzz_text">
		/**
		 * Method for including another component by usint its `share` key.
		 * ```javascript
		 * function p({ textContent }){
		 *		const cP= $dom.component("P", { textContent });
		 *		return cP.share;
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
		 *	   const c= $dom.component("DIV", null);
		 *		   c.setShift(0);
		 *	   for(let i= 0; i<5; i++){
		 *		   c.add("P", { textContent: `Paragraph no. ${i}.` }, -1);
		 *	   }
		 *	   return c.share;
		 * }
		 * //=> div> 5*p
		 * ```
		 * ```javascript
		 * function testNesting(){
		 *	   const c= $dom.component("DIV", null);
		 *	   for(let i= 0; i<5; i++){
		 *		   c.add("P", { textContent: `Paragraph no. ${i}.` });
		 *			//c.setShift();//or 0 => div> p> p> p> …
		 *		 //c.setShift(-1); => div> p> p> p> …
		 *	   c.setShift(-2);
		 *	   }
		 *	   return c.share;
		 * }
		 * //=> div> 5*p
		 * ```
		 * 
		 * @param shift See {@link component_main.add}
		 */
		setShift(shift: number): component_main<elOut>
		/**
		 * This provide ability to register function which should be called when the component will be destroyed.
		 * @param onDestroyFunction Function will be called when the component will be destroyed.
		 */
		ondestroy(cb: (onDestroyFunction: HTMLElement)=> void): component_main<elOut>
		share: component_mainOut<elOut>
	}
	/**
	 * @private
	 */
	interface component_add<cEL extends keyof T_DOM_HETNM> extends component_main<T_DOM_HETNM[cEL]>{
		/**
		 * Returns reference of currently added element
		 */
		getReference(): T_DOM_HETNM[cEL]
		/**
		 * Method for batch registering `on*` methods for current element.
		 * ```javascript
		 * const select_component= select();
		 * select_component.mount(parent);
		 * // default ⇣
		 * select_component.update({ value: "no_default_1" });
		 * // no_default_1 ⇣
		 * 
		 * function select(init= { value: "default" }){
		 *	   const default_value= $dom.componentListener("mount", ()=> init);
		 *	   const update_value= $dom.componentListener("update", init, ({ value })=> ({ value }));
		 *	   
		 *	   const c= $dom.component("SELECT", null).on( default_value, update_value );
		 *		   c.add("OPTION", { value: "no_default_1", textContent: "no_default_1" });
		 *		   c.add("OPTION", { value: "default", textContent: "default" }, -1);
		 *	   return share;
		 * }
		 * ```
		 * @param events Consumes {@link component_listener}.
		 */
		on(...events: component_listener[]): component_add<cEL>
		/**
		 * This method allows to register function which shoul be invoke when given **keys** in `data` will be changed (see {@link component_mainOut.update}).
		 * ```javascript
		 * const c= $dom.component("DIV", null);
		 * …
		 * c.add("P", null).onupdate({ key: "This is init value" }, ({ key })=> ({ textContent: key }));//=> <p>This is init value</p>
		 * …
		 * c.update({ key: "Value changed" });//=> <p>Value changed</p>
		 * ```
		 * 
		 * ```javascript
		 * const c= $dom.component("DIV", null);
		 * …
		 * c.add("P", null).onupdate({ A: "A", B: "b" }, ({ A, B })=> ({ textContent: A+B }));//=> <p>Ab</p>
		 * …
		 * c.update({ B: "B" });//=> <p>AB</p>
		 * ```
		 * 
		 * @param data This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdate` is called.
		 */
		onupdate<DATA extends object>(data: DATA, onUpdate: (data: DATA)=> T_DOM_ATTRS<cEL>): component_add<cEL>
		/**
		 * This procedure allows to call given function `cb` during registering element.
		 */
		oninit(cb: (el: T_DOM_HETNM[cEL])=> void): component_add<cEL>
		/**
		 * This procedure allows to call given function `cb` during mounting component.
		 * 
		 * It can for example solve problem setting default value for `select` (`option`s elements not exist when the `select` itself is declared!).
		 * 
		 * As alternative for some cases, you can use `active` label for `option`s instead.
		 * 
		 * **For now, only first mount!**
		 * ```javascript
		 * const select_component= select({ value: "default" });
		 * select_component.mount(parent);
		 * // default ⇣
		 * 
		 * function select(init){
		 *	   const c= $dom.component("SELECT", null)
		 *		.onmount(()=> init);
		 *		   c.add("OPTION", { value: "no_default_1", textContent: "no_default_1" });
		 *		   c.add("OPTION", { value: "no_default_2", textContent: "no_default_2" }, -1);
		 *		   c.add("OPTION", { value: "no_default_3", textContent: "no_default_3" }, -1);
		 *		   c.add("OPTION", { value: "default", textContent: "default" }, -1);
		 *	   return c.share;
		 * }
		 * ```
		 */
		onmount(cb: ()=> T_DOM_ATTRS<cEL>): component_add<cEL>
	}
	/**
	 * In generall, all methods from {@link component_add} don't do anything.
	 * In case of mounting only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").
	 * @private
	 */
	interface component_empty extends component_add<"">{}
	/**
	 * @private
	 */
	type componentOut<T extends keyof T_DOM_HETNM>= T extends '' ? component_empty : component_add<T>;
	/**
	 * Interface consumed by {@link component_add.on}.
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
		namespace_group?: "SVG"|""
		/**
		 * This parameter provides ability to disable long components names like `empty`, `fragment` – see {@link module:jaaJSU~$dom.cEL_NAME}.
		 */
		safe_el_name_only?: boolean
	}
	/**
	 * Procedure for merging object into the element properties.
	 * Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
	 * It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).
	 * 
	 * **#1: All together**
	 * ```javascript
	 * const el= document.body;
	 * const onclick= function(){ console.log(this.dataset.js_param); };
	 * $dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
	 * //result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
	 * //console output on click: "CLICKED"
	 * $dom.assign(el, { style: { color: "green" } });
	 * //result HTML: <body style="color: green;" data-js_param="CLICKED">BODY</body>
	 * //console output on click: "CLICKED"
	 * ```
	 * 
	 * **`\*.classList.toggle`**
	 * ```javascript
	 * const el= document.body;
	 * $dom.assign(el, { classList: { testClass: -1 } });
	 * //result HTML: <body class="testClass">…</body>
	 * $dom.assign(el, { classList: { testClass: -1 } });
	 * //result HTML: <body class="">…</body>
	 * 
	 * $dom.assign(el, { classList: { testClass: true } });//or 1
	 * //result HTML: <body class="testClass">…</body>
	 * $dom.assign(el, { classList: { testClass: false } });//or 0
	 * //result HTML: <body class="">…</body>
	 * //...
	 * ```
	 * 
	 * **#3 Links and images**
	 * ```javascript
	 * $dom.assign(A_ELEMENT, { href: "www.google.com" });//=> <a href="www.google.com" …
	 * $dom.assign(IMG_ELEMENT, { src: "image.png" });//=> <img src="image.png" …
	 *
	 * **#4 data\* and aria\***
	 * $dom.assign(el, { ariaLabel: "The aria-label", dataExample: "data-example" });//=> <body aria-label="The aria-label" data-example="data-example">
	 * ```
	 * @category Public
	 * @version 2.0.0
	 */
	function assign<EL extends HTMLElement>(element: EL, ...attrs_array: T_DOM_ATTRS<EL>[]): EL
	/**
	 * Procedure for merging object into the element properties (see `html` version {@link assign}).
	 * @category Public
	 * @version 2.0.0
	 * @param namespace_group Group representation of [`namespace`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS), use "__SVG__" for setting attributes for `svg`s.
	 */
	function assignNS<EL extends SVGElement>(namespace_group: string, element: EL, ...attrs_array: T_DOM_ATTRS<EL>[]): EL
	/**
	 * This 'functional class' is syntax sugar around ` document.createElement`(`NS`) and `document.createDocumentFragment` for creating DOM components and their adding to live DOM in performance friendly way.
	 * 
	 * So pseudo code:
	 * ```javascript
	 * function Component(…){
	 *	const { add, share }= $dom.component(…Parent Element…);
	 *		add(…Child Element…);
	 *		add(…Child Element…, -1);
	 *			add(…Child Element…);
	 *	…
	 *	return share;
	 * }
	 * ```
	 * 
	 * Yelds into:
	 * ```html
	 * <!--<Component>-->
	 *	<Parent Element>
	 *	 <Child Element></Child Element>
	 *	 <Child Element>
	 *		<Child Element></Child Element>
	 *	 </Child Element>
	 *	…
	 *	</Parent Element>
	 * <!--</Component>-->
	 * ```
	 * 
	 * @category Public
	 * @version 2.0.0
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
	/**
	 * @private
	 */
	interface T_DOM_ListenersAPI{
		/**
		 * Component element
		 */
		getReference(): HTMLOrSVGElement
		/**
		 * See {@link component_mainOut.update}
		 */
		update(data: object): boolean
		update(map: (data: object)=> object): boolean
		/**
		 * Remove this listener
		 */
		removeEventListener(): void
	}
	/**
	 * This provide more DRY way to register native events listeners inside {@link component} such as `click`, `touchemove`, ….
	 * @param event Browser events
	 * @param callback Callback with arguments based on [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
	 * @category Public
	 */
	function componentListener<K extends keyof DocumentEventMap>(event: K, callback: (this: T_DOM_ListenersAPI, ev: DocumentEventMap[K])=> any): component_listener
	/**
	 * This provide more DRY way to register events listeners for {@link component} such as `init`, `mount`, ….
	 * @param event Component lifecycle events
	 * @category Public
	 */
	function componentListener<K extends keyof T_DOM_ListenersMap>(event: K, ...attrs: T_DOM_ListenersMap[K]): component_listener
	/**
	 * This provide more DRY way to register `onupdate` handler inside {@link component}.
	 * @param data Inittial data similar to {@link component_add.onupdate}.
	 * @param onUpdate Callback simira to {@link component_add.onupdate}.
	 * @version 2.0.0
	 * @category Public
	 */
	function componentListener<DATA extends object>(event: "update", data: DATA, onUpdate: (data: DATA)=> T_DOM_ATTRS<HTMLElement>): component_listener
	/**
	 * Please stop using this
	 * @deprecated
	 * @category Public
	 */
	function add(): HTMLElement
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
		 * Add element to live DOM
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
		 *	   c.add("LI", null)
		 *			.onupdate(data_A, ({ a })=>({ textContent: a }));//`{ a }` add listener for "a"
		 * c.mount(document.body);
		 * c.update(data_A_update);
		 * ```
		 * 
		 * ```javascript
		 * // EXAMPLE WITH `mapUpdate`
		 * const data_B= { a: { b: "A" }};
		 * const data_B_update= { a: { b: "AAA" }};
		 * const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
		 *	   c.add("LI", null)
		 *			.onupdate(data_B, ({ a })=>({ textContent: a }));
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
		 *	   c.add("LI", null)
		 *			.onupdate({ a: 1 }, ({ a })=>({ textContent: a }));
		 * c.mount(document.body);
		 * c.update(({ a })=> { a: ++a });
		 * ```
		 * @param map Function takes as parameter previous internal storage and returns updated one (internally used `Object.assign` – no deep copy!)
		 */
		update(map: (data: object)=> object): boolean
	}
}

