function geometricSequenceElements(a, r, n){
    let arr = []
    let count = 0
    let newS = a
    while(count < n){
      
      arr.push(newS)
      newS = newS * r
      count++
    }
   return arr.join(', ')
  }