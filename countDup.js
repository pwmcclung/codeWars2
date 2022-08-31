function duplicateCount(text){
    text = text.toLowerCase()
    let arr = text.split('')
   let counts = {}
   arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })
    let vals = Object.values(counts)
    let newArr = vals.filter(x => x > 1)
    return newArr.length
  }