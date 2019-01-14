/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global console, $dom */
const main_el= document.getElementById("main");
let counter= 1;
console.time();
for(let i=0, test_update; i<1; i++){
    test_update= li({ nth: "A", first: counter++, last: counter++ });
    test_update.mount(main_el);
    li({ nth: "B", first: counter++, last: counter++ }).mount(main_el);
    test_update.update({ nth: "UPDATED", first: counter++, last: "Updated" });
}
console.timeEnd();

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