function sumOrProduct(array, n) {
    let sorted = array.sort(function(a, b) {return a - b})
    let smallest = sorted.slice(0, n )
    let longest = sorted.slice( sorted.length - n)
    let product  = smallest.reduce((a, b)=> a * b, 1)
    let sum = longest.reduce((a, b) => a + b, 0)
    if (product === sum){
      return 'same'
    }else if(sum > product){
      return 'sum'
    }else{
      return 'product'
    }
  }