function sumOfDifferences(arr) {
    if (arr.length === 0){
      return 0
    }else{
    let sorted = arr.sort(function(a, b) {return a - b})
    let one = sorted[0]
    let two = sorted[sorted.length -1]
    return two - one
      }
    }