function newAvg(arr, newavg) {
    if (arr.length != 0){
      
    
      let arr1Sum = (arr.reduce((a, b) => a + b))
      let goalNum = ((arr.length) + 1) * newavg
      let sum =  Math.ceil(goalNum - arr1Sum)
      if (sum <=0){
        throw '"Expected New Average is too low'
      }else{
        return sum
      }
      }else{
        return newavg
      }
  }