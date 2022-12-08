function ballTest(s, r) {
    let spedReduce = [...r.slice(0, s)].filter(x => x == 'x').length
    if (s<=0){return false}
    if (s >= r.length){return true}else{return ballTest( s - 1 - spedReduce, r.slice(s))} 
   }