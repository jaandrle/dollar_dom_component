/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o, $run}){
    /* jshint -W061 */const gulp_place= $g.place({ variable_eval: (str)=> eval(str) });/* jshint +W061 */
    return function(done){
        gulp.src([app.src_folder+"*.d.ts", app.src_folder+"*/*.d.ts", '!'+app.src_folder+'*.sub.d.ts', '!'+app.src_folder+'*/*.sub.d.ts'])
            .pipe(gulp_place({folder: "src/", string_wrapper: '"'}))
            .pipe(gulp.dest(app.bin_folder))
            .on('end', typedoc.bind(null, done));
    };
    function typedoc(done, code){
        if(code) return done(code);

        return gulp.src([ "bin/$dom_component.d.ts" ])
            .pipe($g.typedoc({
                out: "docs/md",
                readme: "none",
                name: app.name,
                version: true,
                plugin: [ "typedoc-plugin-markdown" ],
                categorizeByGroup: false,
                defaultCategory: "Private",
                categoryOrder: [ "Public", "Private", "*" ],
                disableSources: true
            }))
            .on("end", done);
    };
};
