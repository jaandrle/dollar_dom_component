/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({ app, $gulp_folder, gulp, error, $g, $o }){
	/* jshint -W061 */const gulp_place= $g.place({ variable_eval: (str)=> eval(str) });/* jshint +W061 */
	const folder= app.directories.src;
	return async function(){
		if(error.getNum()) return;
		await gulp.src([ `${folder}*.d.ts`, `${folder}*/*.d.ts`, `!${folder}*.sub.d.ts`, `!${folder}*/*.sub.d.ts` ])
		.pipe(gulp_place({ folder, string_wrapper: '' }))
		.pipe(gulp.dest(app.directories.dist));

		return new Promise(function(resolve, reject){
			gulp.src([ app.directories.dist+"$dom_component.d.ts" ])
			.pipe($g.typedoc({
				out: app.directories.docs+"md",
				readme: "none",
				name: app.name,
				version: true,
				plugin: [ "typedoc-plugin-markdown" ],
				categorizeByGroup: false,
				defaultCategory: "Private",
				categoryOrder: [ "Public", "Private", "*" ],
				disableSources: true,
				logger(message, level){
					error.addText(message);
					if(level>2) error.handler(message);
				}
			}))
			.on('error', error.handler)
			.on("end", code=> code ? reject(code) : resolve());
		});
	};
};
