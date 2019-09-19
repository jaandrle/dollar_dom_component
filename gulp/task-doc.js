/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o, $run}){
    const /* params */
        docs_folder= "docs/",
        docs_modifications= docs_folder+"modifications/",
        global_options= { private: true, separators: true, partial: docs_modifications+"*.hbs", helper: docs_modifications+"helpers.js" };
    const /* documentation functions */
        jsdoc2md= require('jsdoc-to-markdown'),
        generateDoc= files=> jsdoc2md.render(Object.assign({ files }, global_options)),
        writeDoc= file=> markdown=> new Promise(function(resolve,reject){ $o.fs.writeFile(file, markdown, err=> !err ? resolve() : reject(err)); });
    /* jshint -W061 */const gulp_place= require("./gulp_place.js")({gulp_replace: $g.replace, fs: $o.fs, variable_eval: (str)=> eval(str)});/* jshint +W061 */
    return function(cb){
        gulp.src([docs_modifications+"*_pre.js"])
            .pipe(gulp_place({folder: docs_modifications, string_wrapper: '"'}))
            .pipe($g.rename(function(p){
                p.basename= p.basename.replace(/_pre/ig, "");
                return p;
            }))
            .pipe(gulp.dest(docs_modifications))
            .on('end', function(){
                const file= "$dom_component";
                generateDoc(app.bin_folder+file+".js")
                .then(writeDoc(docs_folder+file+".md"))
                .catch(error.handler)
                .then(cb);
            });
    };
};
