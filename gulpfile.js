/* jshint esversion: 6, undef: true, node: true */
/* \CONFIG\ */
const config= (function(){
        let $o_default= {spawn: require('child_process').spawn, fs: require("fs")};
        const gulp= require('gulp'),
              $gulp_folder= "./gulp/",
              { fullName, name, version, build, standalone, directories, sequence, dependencies, devDependencies, homepage }= JSON.parse($o_default.fs.readFileSync('./package.json')),
              { $g, $o }= mapDependencies(Object.assign({}, dependencies, devDependencies), $o_default);
        const app= { name: fullName, folderName: name, version, build, directories, standalone, sequence, homepage };
        return {gulp, $gulp_folder, $g, $o, app, error: error()};
})();
/* /CONFIG/ */
/* \Tasks\ */
var c_output= "", if_error= 0;
const tasks= ['default', 'doc', 'javascript', 'examples'], tasks_length= tasks.length;
for(let i=0, task; i<tasks_length; i++){ task= tasks[i]; config.gulp.task(task, require(config.$gulp_folder+'task-'+task)(config)); }
/* /Tasks/ */
/* \Global functions\ */
function error(){
    function getText(){     return c_output; }
    function addText(err){  c_output+= err; }
    function getNum(){      return if_error; }
    function addNum(num=1){ if_error+= num; }
    function handler(err){  addNum(); config.$g.util.log(config.$g.util.colors.red('[Error]'), err.toString()); }
    return { getText, addText, getNum, addNum, handler };
}
function mapDependencies(dependencies, $o_default){
    const dependencies_keys= Object.keys(dependencies);
    const pre= "gulp-";
    const rename= {"gulp-minify": "gulp-minify_js", "gulp-javascript-obfuscator": "gulp-js_obfuscator"}, rename_keys= Object.keys(rename);
    let out= {$g: {} /* for "gulp-" */ , $o: $o_default /* for others */};

    dependencies_keys.forEach(cmd=>{
        if(cmd==="gulp") return false;
        let out_key= "$o";
        const name= rename_keys.indexOf(cmd)!==-1 ? rename[cmd].replace(pre, setTo$g) : cmd.replace(pre, setTo$g);
        out[out_key][name]= require(cmd);

        function setTo$g(...arg){ if(arg.length){ out_key= "$g"; } return ""; }
    });
    return out;
}
/* /Global functions/ */
