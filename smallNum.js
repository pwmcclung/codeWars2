function minValue(values){
    let newSet = [...new Set(values)]
    let sorted = newSet.sort(function(a, b) {return a - b})
    let num = Number(sorted.join(''))
    return num
   }