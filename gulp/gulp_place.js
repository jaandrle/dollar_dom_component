"use stric";
/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true *//* global module */
/*  @module
        gulp_place
    @depends_on
        'gulp-replace'
        'fs'
    @version
        0.9.0
    @examples
        gulp_place("file_path") === gulp_place("file_path", "file"): replaced by "file_path" content
        gulp_place("file_path${some_var_inside_gulp}") === gulp_place("file_path${some_var_inside_gulp}", "file"): replaced by '"file_path"+some_var_inside_gulp' content
        gulp_place("files_subfolder/*.js", "files") === gulp_place("files_subfolder/*.js", "blob"): replaced by js files content on "files_subfolder"
        gulp_place("some_var_inside_gulp", "variable"): replaced by value of 'some_var_inside_gulp'
        gulp_place("file_path", "file_once") === only first match will be replaced by file content
    @info
        Returned function 'gulp_place' must be used in gulp.pipe and replacing 'gulp_place' in source files by another files content or eval inputed data (i.e. variables inside gulpfile).
        In case of file replacing and situation "^    gulp_place("file");" also spaces and new line (and ";" if writted) is replaced (see "gulp_place_regex").
        The varibale (in case gulp_place("***", "variable")) is replaced by '"'+***+'"' (means as string)
    
    @param <object>init= {gulp_replace, fs, variable_eval}
        @key <function>gulp_replace= require('gulp-replace')
        @key <object>fs= require('fs')
        @key <function>variable_eval= function for eval ${...} (in file mode) and/or vars in variable mode
    
    @return <function>gulp_place
        @param <object>init= {folder, string_wrapper}
            @key <string>folder= relative path for contend folder against actual path (like gulpgile.js)
            @key <string>string_wrapper= when evals 
*/
module.exports= function({gulp_replace= false, fs= false, variable_eval= false}= {}){
    if(!gulp_replace) throw Error("Missing 'gulp-replace' function!");
    if(!fs) throw Error("Missing 'fs' object!");
    if(!variable_eval) throw Error("Missing 'variable_eval' function!");
    const files_added= new Set();

    return function gulp_place({folder= "js/", string_wrapper= '"'}= {}){
        const gulp_place_regex= /( *)gulp_place\(\s*(?:\"|\')([^\"]+)(?:\"|\')(?:\s*,\s*(?:\"|\')([^\"]+)(?:\"|\'))?\s*\)(;?)([^\r\n]*\/\*[^\*]*\*\/)?/g;
        const gulp_remove_line= /[^\n]*\/\/gulp\.remove\.line\r?\n?/g;
        const gulp_remove_jshint= /([^\n]*)(\/\*\s(?=jshint|global)[^\*]*\*\/)([^\n\r]*)(\r?\n)/g;
        return gulp_replace(gulp_place_regex,function(full_match, spaces= "", name= false, type="file", semicol= "", jshint_global= ""){
            return parseFileHandler({name, full_match, type, spaces, string_wrapper, semicol, jshint_global});

            function parseFileHandler({name, full_match, type, spaces, string_wrapper, semicol, jshint_global}){
                if(!name) return full_match;
                else if(type==="files"||type==="glob") return parseFile(parseGlob(folder, [name, name.lastIndexOf("/")+1], spaces).replace(gulp_remove_line, "")).replace(gulp_remove_jshint, parseJSHINT);
                else if(type==="file") return fileHandler(false, folder, fileNameVarHandler(name), spaces);
                else if(type==="file_once") return fileHandler(true, folder, fileNameVarHandler(name), spaces);
                else if(type==="variable") return spaces+string_wrapper+variable_eval(name)+string_wrapper+semicol+jshint_global;
            }
            function parseFile(file_data){
                return file_data.replace(gulp_place_regex, function(full_match, spaces= "", name= false, type="file", semicol= "", jshint_global= ""){
                    return parseFileHandler({name, full_match, type, spaces, string_wrapper, semicol, jshint_global});
                });
            }
            function fileHandler(once, folder, file_name, spaces){
                if(once&&files_added.has(file_name)) return "";
                files_added.add(file_name);
                return parseFile(spaces+fs.readFileSync(folder+file_name, 'utf8').replace(gulp_remove_line, "").replace(gulp_remove_jshint, parseJSHINT).replace(/\r?\n/gm, "\n"+spaces));
            }
        });
    };
    function parseGlob(main_folder, match, spaces){
        const folder_glob_reg= /\*\/$/g;
        const [ name, last_slash ] = match;
        let [ sub_folder, files ] = [ name.substr(0, last_slash), name.substr(last_slash) ];
        if(!last_slash) return "";
        files= new RegExp(files
            .replace(/[\.\(\)]/g, m=> "\\"+m)
            .replace(/\*/g, ".*")
        );
        let folders= [];
        if(folder_glob_reg.test(sub_folder)) folders= getFolders(main_folder+sub_folder);
        else folders[0]= main_folder+sub_folder;
        
        const out= folders.reduce((acc, folder)=> acc+(acc?"\n":"")+parseFolder(folder), "");
        return out;

        function parseFolder(folder){
            return spaces+fs.readdirSync(folder)
                    .filter(file_candidate=> files.test(file_candidate))
                    .map(file_name => { files_added.add(sub_folder+file_name); return file_name;})
                    .map(file_name=> fs.readFileSync(folder+file_name, 'utf8').replace(/\r?\n/gm, "\n"+spaces))
                    .join("\n");
        }
        function getFolders(folders_pattern){
            const parent_folder= folders_pattern.replace(folder_glob_reg, "");
            return fs.readdirSync(parent_folder).filter(item=> fs.statSync(parent_folder+item).isDirectory()).map(folder_name=> parent_folder+folder_name+"/");
        }
    }
    function fileNameVarHandler(str){
        if(typeof str !== "string") throw Error("Type of 'str' is not string!");
        const reg= /\$\{([\s]*[^;\s\{]+[\s]*)\}/g;
        return str.replace(reg, replaceHandler);
        function replaceHandler(_, match){return variable_eval(match);}
    }
    function parseJSHINT(full_match, left, center, right, eol){
        if(/\/\/gulp\.keep\.line/.test(right)) return left+center+right+eol;
        const out= [left, center, right].map(item=> /\/\*[^\*]*\*\//g.test(item) || /gulp_place/g.test(item) ? "" : item).join("");
        return out ? out+eol : out;
    }
};