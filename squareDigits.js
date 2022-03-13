function squareDigits(num){
    let empty = []
    let str = String(num)
    let arr1 = Array.from(str)
    let arr = arr1.map(x => x * x)
    let  strArr = arr.map(x => String(x))
    let str1 = strArr.join('')
    return Number(str1)
    
   
  }