/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o, $run}){
    return function(cb){
        let cmd;
        cmd= $o.spawn("node", ['node_modules/jsdoc-to-markdown/bin/cli', "-f", app.bin_folder+"$dom_component.js", "--private"], {});
        cmd.stdout.on('data', a=> $o.fs.writeFile("./DOCUMENTATION.md", a.toString(), ()=>{}))
        cmd.on('close', cb);
    };
};
