function minSum(arr) {
    arr = arr.sort((a,b) => b - a)
    let summed = 0
    let midSum = 0
    let num1 = 0
    let num2 = 0
    while (arr.length >0){
      num1 = arr.shift()
      num2 = arr.pop()
      midSum = num1* num2
      summed += Number(midSum)
    }
    return summed
  }