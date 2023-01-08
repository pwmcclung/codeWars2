var seqlist = function(first,c,l){
    let arr =[first,]
    while (arr.length < l){
      first = first + c
      arr.push(first)
    }
  return arr
  }