const prevMultOfThree = n => {
    let str = String(n)
    let arr = str.split('')
    let numLen = arr.length
    
    if (n % 3 ==0){
      return n
    }else if (arr.length <=1){
      return null
    
    }else {
  
    while (numLen >2){
      arr.pop()
      if(Number(arr.join('')) % 3 ==0){
        return Number(arr.join(''))|| null
      }else{
        numLen - 1
      }
  
    }
    if (numLen ==2){
      arr.pop()
      if(Number(arr.join('')) % 3 == 0){
        return Number(arr.join(''))
      }else{
        return null
      }
    }
    }
      }
    