function differenceOfSquares(n){
    let stepCount = 0
    let sum = 0
    let sqArr = []
    while(stepCount <=n){
      sum += stepCount;
      sqArr.push(stepCount**2)
      stepCount++
    }
     let sq1 = sum**2
    let sumOfSq = sqArr.reduce((a,b) => a + b, 0)
    return sq1 - sumOfSq
      
    }