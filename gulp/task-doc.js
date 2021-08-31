/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o, $run}){
    return function(cb){
        return gulp.src([ "src/*/*.d.ts" ])
            .pipe($g.typedoc({
                out: "docs",
                name: app.name,
                version: true,
                plugin: [ "typedoc-plugin-markdown" ],
                categorizeByGroup: false,
                defaultCategory: "Private",
                categoryOrder: [ "Public", "Private", "*" ]
            }));
    };
};
