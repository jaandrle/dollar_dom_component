const special_components_names= { empty: [ "", "empty" ], fragment: [ "<>", "fragment" ] };
function isInternalElement( target, candidate, safe_only ){
    const [ short, long ]= special_components_names[target];
    if(safe_only) return short===candidate;
    return short===candidate||long===candidate.toLowerCase();
}