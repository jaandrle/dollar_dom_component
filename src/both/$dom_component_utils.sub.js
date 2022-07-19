const component_utils= Object.freeze({
	registerToMap: function(store, current, indexGenerator){
		let current_index= -1;
		for(const [i, v] of store){
			if(v===current) current_index= i;
			if(current_index!==-1) break;
		}
		if(current_index!==-1) return current_index;
		current_index= indexGenerator();
		store.set(current_index, current);
		return current_index;
	},
	indexGenerator: (index= 0)=> ()=> index++
});
