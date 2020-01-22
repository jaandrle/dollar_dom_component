# $dom_component
Subrepository for [jaandrle/jaaJSU ($dom namespace)](https://github.com/jaandrle/jaaJSU).

## Overview
This library provide ability to write HTML/DOM components without using _OOP/class_ syntax and _jsx_.

1. Why not use framework such as [React](https://reactjs.org/), [Angular](https://github.com/angular/angular), [MithrilJS](https://github.com/MithrilJS/mithril.js), [vue](https://github.com/vuejs/vue), [Stimulus](https://github.com/stimulusjs/stimulus)…?
    1. It has some pros and __cons__, see [Why You Shouldn't Use A Web Framework](https://dev.to/gypsydave5/why-you-shouldnt-use-a-web-framework-3g24)
    1. They are too "complex" for __some__ user cases.
    1. It can be overkill for small projects.
    1. __Ofcourse:__ They have also lots of pros, so if it's OK for you, you don't need this library.
    1. [Do we still need JavaScript frameworks?](https://www.freecodecamp.org/news/do-we-still-need-javascript-frameworks-42576735949b/)
1. OK, why do not use some small library such as [RE:DOM](https://github.com/redom/redom/), [litedom](https://github.com/mardix/litedom) or native [webcomponents](https://www.webcomponents.org)?
    1. Still, it can be better to use combinations of libraries instead of full predefined solution
1. OK, why do not use existing libraries such as [h0](https://github.com/jxnblk/h0), [rdom](https://github.com/buzzdecafe/rdom), [fp-dom](https://github.com/fp-dom/fp-dom), [domchanger](https://github.com/creationix/domchanger), [Domcom](https://github.com/taijiweb/domcom), [domc](https://github.com/Freak613/domc), [hybrids](https://github.com/hybridsjs/hybrids), [Switzerland](https://github.com/Wildhoney/Switzerland), [fun-component](https://github.com/tornqvist/fun-component), [sigil](https://github.com/sigiljs/sigil), [dom-fn](https://github.com/raphaelfaria/dom-fn), …?
    1. You don't need virtual DOM: this is solved for example by [Svelte](https://svelte.dev/).
        1. In some user cases, it can be quicker to complementy remove component with old state and create it again instead of updating some properties.
        1. You know changes because of another part of you app (e.g. API) are able to provide only changes.
    1. You prefer functional way of programming (now it is possible use this way also in [React itself](https://reactjs.org/docs/hooks-intro.html)).
    1. You would like avoid big function’s call stack and recursion calling
    1. You would like to use native JavaScript names as much as is possible.
    1. You would like to have minimum restriction how to write your code.

## Performance (TBD)
[js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)

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

## Contribute
- [Contributor Covenant Code of Conduc](./CODE_OF_CONDUCT.md)
- [How to contribute](./CONTRIBUTING.md)