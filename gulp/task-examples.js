/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true, maxparams: 4 */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o}){
	/* jshint -W061 */const gulp_place= $g.place({
		variable_eval: (str)=> eval(str)
	});/* jshint +W061 */
	const 
		to_folder= app.directories.docs,
		from_folder= app.directories.examples;
	let links_paragraphs_buffer= [];
	return async function(){
		if(error.getNum()) return;
		await gulp.src([ from_folder+"*.html", '!'+from_folder+'*.sub.html' ])
			.pipe(gulp_place({ folder: from_folder, string_wrapper: '' }))
			.pipe($g.replace(/(\/\/EXAMPLE START|<!-- example source links -->)/g, addSourceLink))
			.pipe(gulp.dest(to_folder));
		
		return gulp.src([app.directories.dist+"$dom_component.js"])
		.pipe(gulp.dest(to_folder));
	};
	function addSourceLink(match, type, chars, file_text){
		if(type==="<!-- example source links -->"){
			return links_paragraphs_buffer.shift();
		}
		const line= String((t=> t&&t.length+1||1)(file_text.substring(0, chars).match(/\r?\n/g)));
		const link= "https://github.com/jaandrle/dollar_dom_component/blob/master/docs/examples.html#L"+line;
		links_paragraphs_buffer.push(`<p class="notes"><a href="${link}" target="_blank">View with highliting (link to source of this file)</a></p>`);
		return match;
	}
	function toELID(str){ return "example_element_"+pad(str, 3, "0"); }
	function toKeyUp(el_str){ return `onKeyup(this, '${el_str}')`; }
	function pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}
};
