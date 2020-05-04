
const prepareEventListener= (function(){
    const EventListener_interface= {
        /*
         others: [],
         event_function: listener function,
         target_element: listener target element,
         */
        handleEvent: function(event){
            this.event_function.call(this.target_element, event, ...this.others);
        }
    };
    
    return function outer(event_name, event_function, options){
        return function inner(target_element, ...others){
            if(!others.length){
                target_element.addEventListener(event_name, event_function, options);
                return target_element.removeEventListener.bind(target_element, event_name, event_function);
            }
            const instance= Object.assign(Object.create(EventListener_interface), { others, target_element, event_function });
            target_element.addEventListener(event_name, instance, options);
            return target_element.removeEventListener.bind(target_element, event_name, instance);
        };
    };
})();