# $dom_component
Subrepository for jaandrle/jaaJSU ($dom namespace)
# [Documentation](https://jaandrle.github.io/dollar_dom_component/)
# Playgrounds
- [Simple form](https://codepen.io/anon/pen/roPGpR?editors=0011)
- [Complex one (see below)](https://codepen.io/anon/pen/WLPZyJ?editors=1010)
# [Examples](example/index.html)
## Output
```HTML
<ul id="main">
    <li style='padding-left: 0px;'>
        <ul>
            <li>
                <span>This is sub-component: </span>
                <strong style="color: darkblue">UPDATED ('counter' is visible also here: 0 ;-))</strong>
            </li>
            <li>
                <span>First text in parent component (remove this span when clicked 2times): </span>
                <strong style="cursor: pointer; border-bottom: 1px solid black;">Element no.: 5, clicked: 0times</strong>
            </li>
            <li>
                <span>Last text in parent component: </span>
                <strong>Updated</strong>
            </li>
        </ul>
    </li>
    <li style='padding-left: 0px;'>
        <ul>
            <li>
                <span>This is sub-component: </span>
                <strong style="color: darkblue">B ('counter' is visible also here: 0 ;-))</strong>
            </li>
            <li>
                <span>First text in parent component (remove this span when clicked 2times): </span>
                <strong style="cursor: pointer; border-bottom: 1px solid black;">Element no.: 3, clicked: 0times</strong>
            </li>
            <li>
                <span>Last text in parent component: </span>
                <strong>4</strong>
            </li>
        </ul>
    </li>
</ul>
```
## Input
```JavaScript
const main_el= document.getElementById("main");
let global_counter= 1;
const test_update= li({ nth: "A", first: global_counter++, last: global_counter++ });
test_update.mount(main_el);
li({ nth: "B", first: global_counter++, last: global_counter++ }).mount(main_el);
test_update.update({ nth: "UPDATED", first: global_counter++, last: "Updated" });

function li({ nth, first, last }){
    let counter= 0;
    const { add, component, update, share }= $dom.component("LI", null)
        .onupdate({counter}, ({counter})=> ({ style: `padding-left: ${counter}px;` }));
        add("UL", null);
            component(sub_li({ nth, counter }));
            add("LI", null, -1);
                add("SPAN", { textContent: "First text in parent component (remove this span when clicked 2times): " })
                .onupdate({counter}, removeThisElement);
                add("STRONG", { onclick, style: {cursor: "pointer", 'border-bottom': "1px solid black" } }, -1)
                .onupdate({counter}, ({counter})=>({ textContent: `Element no.: ${first}, clicked: ${counter}times`, classList: { pokus: counter===3 } }));
            add("LI", null, -2);
                add("SPAN", { textContent: "Last text in parent component: " });
                add("STRONG", { textContent: last }, -1);
    return share;
    
    function onclick(){ counter++; update({ counter }); }
    function removeThisElement(input){ if(input.counter===2) this.remove(); }
}
function sub_li({ nth, counter }){
    const { add, share }= $dom.component("LI", null);
            add("SPAN", { textContent: "This is sub-component: " });
            add("STRONG", { style: "color: darkblue" }, -1)
                .onupdate({counter}, ({counter})=>({ textContent: `${nth} ('counter' is visible also here: ${counter} ;-))` }));
    return share;
}
