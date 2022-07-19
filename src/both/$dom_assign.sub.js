/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true, maxcomplexity: 20, maxdepth: 3 */
/* global $dom, gulp_place */
$dom.assign= function(element, ...objects_attributes){
	const object_attributes= Object.assign({}, ...objects_attributes);
	const object_attributes_keys= Object.keys(object_attributes);
	for(let i=0, key, attr, i_length= object_attributes_keys.length; i<i_length; i++){
		key= object_attributes_keys[i];
		attr= object_attributes[key];
		const key_aria_data= /(aria|data)([A-Z])/.test(key) ? key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : false;
		if(typeof attr==="undefined"){
			if(key_aria_data) element.removeAttribute(key_aria_data);
			if(Reflect.has(element, key)) Reflect.deleteProperty(element, key);
			continue;
		}
		switch(key){
			case "style":
				if(typeof attr==="string") element.setAttribute("style", attr);
				else for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
				break;
			case "style_vars":
				for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
				break;
			case "classList":
				if(!element[key].toggle) break;
				for(let k=0, k_key, k_attr, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){
					k_key= k_keys[k]; k_attr= attr[k_key];
					if(k_attr===-1) element.classList.toggle(k_key);
					else element.classList.toggle(k_key, Boolean(k_attr));
				}
				break;
			case "dataset":
				gulp_place("${app.standalone}/$dom_assign_dataset.sub.js", "file");
				break;
			case "href" || "src" || "class":
				element.setAttribute(key, attr);
				break;
			default:
				if(key_aria_data) element.setAttribute(key_aria_data, attr);
				else element[key]= attr;
				break;
		}
	}
	return element;
};
