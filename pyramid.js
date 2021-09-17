function longestSlideDown (pyramid) {
    return pyramid.reduceRight((last,current)=>current.map(
      (x,i)=>x+Math.max(last[i],last[i+1])
    ))[0];
  }