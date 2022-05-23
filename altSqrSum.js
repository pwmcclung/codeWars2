function alternateSqSum(arr){
    let oddPos = []
    let evenPos = []
    for (let i = 0; i< arr.length; i++){
      if (i %2 ===0){
        oddPos.push(arr[i])
      }else{
        evenPos.push(arr[i])
      } 
    }
    let square = evenPos.map(x => x **2)
    let sumSq = square.reduce((a, b) => a + b, 0)
    let sumOdd = oddPos.reduce((a, b) => a + b, 0)
    return sumOdd + sumSq
  }