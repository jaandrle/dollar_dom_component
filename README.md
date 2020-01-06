# $dom_component
Subrepository for [jaandrle/jaaJSU ($dom namespace)](https://github.com/jaandrle/jaaJSU).

## Overview
This library provide ability to write HTML/DOM components without using _OOP/class_ syntax and _jsx_.

The main reasons for another library like [React](https://reactjs.org/) are
1. React is too "complex" for __some__ user cases: this is solved for example by [litedom](https://github.com/mardix/litedom).
1. You want using Vanilla JavaScript syntax as much as is possible: this is solved by JS itsel see [webcomponents](https://www.webcomponents.org).
1. You don't need virtual DOM: this is solved for example by [Svelte](https://svelte.dev/).

    1. In some user cases, it can be quicker to complementy remove component with old state and create it again instead of updating some properties.

    1. You know changes because of another part of you app (e.g. API) are able to provide only changes.
1. You prefer functional way of programming: this is solved for example by [h0](https://github.com/jxnblk/h0), [rdom](https://github.com/buzzdecafe/rdom), [fp-dom](https://github.com/fp-dom/fp-dom) and [React itself](https://reactjs.org/docs/hooks-intro.html).
1. __Previous point(s) + you would like avoid big function’s call stack (e.g. [h0](https://github.com/jxnblk/h0)), recursion, …: this is solved by this lib__


Non-mentioned libs: [hybrids](https://github.com/hybridsjs/hybrids), [Switzerland](https://github.com/Wildhoney/Switzerland), [fun-component](https://github.com/tornqvist/fun-component), [sigil](https://github.com/sigiljs/sigil), [dom-fn](https://github.com/raphaelfaria/dom-fn).
## How to start
1) library files: [$dom_component.js](bin/$dom_component.js) and [$dom_component-min.js](bin/$dom_component-min.js).
1) basics and playgrounds can be found in [Examples](https://jaandrle.github.io/dollar_dom_component/examples.html)

## Usage / Philosophy overview
```JavaScript
textInputComponent({ label_type: "name", placeholder: "Peter" })
.mount(document.body);
/* result:
<body>
    <div>
        <label>
            Type your name: <input type="text" placeholder="Peter">
        </label>
        <p>Your name is: <strong> - </strong></p>
    </div>
</body>
*/
function textInputComponent({ label_type= "name", placeholder= "Type text" }){
    const { add, share, update }= $dom.component("DIV");
        add("LABEL", { textContent: `Type your ${label_type}: ` });
            add("INPUT", { type: "text", placeholder, onkeyup });
        add("P", { textContent: `Your ${label_type} is: ` }, -2);
            add("STRONG", null).onupdate({ textContent: " - " }, ({ textContent })=> ({ textContent }));
    return share;

    function onkeyup(){ update({ textContent: this.value }); }
}
```

## Resources
- __[Examples](https://jaandrle.github.io/dollar_dom_component/examples.html)__
- __[Documentation](docs/$dom_component.md)__
