YUI().use('node', function(Y) {
    Y.all= function(arg, parent= document){let els= typeof arg==='string' ? parent.querySelectorAll(arg) : arg;els.size= ()=>els.length;els.each= (fn)=>[].forEach.call(els, el=> fn(Y.all(el)));els.all= (arg)=>Y.all(arg, els);els.addClass= (arg)=>[].forEach.call(els, el=> el.classList.add(arg));els.prepend= (arg)=>els.innerHTML= arg+els.innerHTML;return els;};
    var code = Y.all('.prettyprint.linenums');
    if (code.size()) {
        code.each(function(c) {
            var lis = c.all('ol li'),
                l = 1;
            lis.each(function(n) {
                n.prepend('<a name="l' + l + '"></a>');
                l++;
            });
        });
    }
});
