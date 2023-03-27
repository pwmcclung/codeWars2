function sumOfIntegersInString(s){
    let theNums = s.replace(/\D/g, ' ')
    let arr = theNums.split(' ')
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      if (arr[i] != ''){
       sum += Number(arr[i])
      }
    }
    return sum
  }