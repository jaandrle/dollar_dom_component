/* jshint esversion: 8,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o}){
	/* jshint -W061 */const gulp_place= $g.place({
		variable_eval: (str)=> eval(str),
		filesCleaner: require("./gulp_cleanJSHINT.js")
	});/* jshint +W061 */
	const folder= app.directories.src;
	const folder_dist= app.directories.dist;
	return function(){
		if(error.getNum()) return;
		return jshint_(folder)
		.then(()=> gulp.src([ folder+"*.js", folder+"*/*.js", '!'+folder+'*.sub.js', '!'+folder+'*/*.sub.js' ])
			.pipe(gulp_place({ folder, string_wrapper: '"' }))
			.pipe($g.replace(/\/\* gulp \*\/\/\* global gulp_place \*\/\r?\n/g,""))
			.on('error', error.handler)
			.pipe($g.rename(function(p){
				if(p.dirname==="_jaaJSU") p.basename+= ".sub";
				return p;
			}))
			.pipe(gulp.dest(folder_dist)))
		.then(()=> gulp.src([folder_dist+"*js", "!"+folder_dist+"*-min.js"])
			.pipe($g.minify_js({ noSource : true }))
			.on('error', error.handler)
			//.pipe($g.rename({suffix: ".min"}))
			.pipe(gulp.dest(folder_dist)));
	};
	function jshint_(folder_target){ return new Promise(function(resolve, reject){
		const cmd= $o.spawn("npm", [ "run", "jshint", folder_target ], {});
		cmd.stdout.on('data', function(data){ error.addText(data.toString()+"\n"); });
		cmd.on('close', code=> code ? reject() : resolve());
	}); }
};
