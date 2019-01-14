# $dom_component
Subrepository for jaandrle/jaaJSU ($dom namespace)
# [Dokumentation](https://jaandrle.github.io/dollar_dom_component/)
# [Examples](example/index.html)
## Output
```HTML
<ul id="main">
    <li>
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
    <li>
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
let counter= 1;
for(let i=0, test_update; i<1; i++){
    test_update= li({ nth: "A", first: counter++, last: counter++ });
    test_update.mount(main_el);
    li({ nth: "B", first: counter++, last: counter++ }).mount(main_el);
    test_update.update({ nth: "UPDATED", first: counter++, last: "Updated" });
}

function li({ nth, first, last }){
    let counter= 0;
    const { add, component, update, share }= $dom.component("LI", null);
        add("UL", null);
            component(sub_li({ nth, counter }));
            add("LI", null, -1);
                add("SPAN", { textContent: "First text in parent component (remove this span when clicked 2times): ", onupdate: [{counter}, removeThisElement] });
                add("STRONG", { 
                    onclick, 
                    style: {cursor: "pointer", 'border-bottom': "1px solid black" },
                    onupdate: [ {first, counter}, _=>({ textContent: "Element no.: "+_.first+", clicked: "+_.counter+"times" })]
                }, -1);
            add("LI", null, -2);
                add("SPAN", { textContent: "Last text in parent component: " });
                add("STRONG", { onupdate: [ { last }, _=>({ textContent: _.last })] }, -1);
    return share;
    
    function onclick(){ counter++; update({counter}); }
    function removeThisElement(input){ if(input.counter===2) this.remove(); }
}
function sub_li({ nth, counter }){
    const { add, share }= $dom.component("LI", null);
            add("SPAN", { textContent: "This is sub-component: " });
            add("STRONG", {
                style: "color: darkblue",
                onupdate: [{nth, counter}, _=>({ textContent: _.nth+" ('counter' is visible also here: "+_.counter+" ;-))" })]
            }, -1);
    return share;
}