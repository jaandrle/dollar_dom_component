/* jshint esversion: 6,-W097, -W040, browser: true, expr: true */
module.exports= function({app, $gulp_folder, $o, $run, gulp}){
    return function(cb){
        $o.fs.writeFileSync($gulp_folder+'build.log', "");
        $o.fs.readFile($gulp_folder+'gulpfile.log', function(err,data){
            if(err){
                $o.fs.writeFile($gulp_folder+'gulpfile.log', JSON.stringify(app), ()=>{});
                if($run.github) $o.spawn($run.github, [], {});
            } else {
                data= JSON.parse(data.toString());
                if(data.build!==app.build){
                    $o.fs.writeFile($gulp_folder+'gulpfile.log', JSON.stringify(app), ()=>{});
                    if($run.github) $o.spawn($run.github, [], {});
                }
            }
            let sequence= [];
            for(let i= 0, i_length= app.sequence.length; i < i_length; i++){
                if(app.sequence[i].charAt(0)!=="!") sequence[sequence.length]= app.sequence[i];
            }
            gulp.series(...sequence)(cb);
        });
    };
};
