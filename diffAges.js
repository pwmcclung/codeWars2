function differenceInAges(ages){
    let arr = Array.from(ages)
    let sorted = arr.sort(function(a, b) {return a - b})
    let min = sorted[0]
    let max = sorted[sorted.length-1]
    let diff = max - min
    return [min, max, diff]
  }
  