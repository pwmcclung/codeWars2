function alternate(n, firstValue, secondValue){
    let i = 1;
    let newArr = []
    while (i <=n){
      if (i %2 ==0){
        newArr.push(secondValue)
        i++
      }else if (i %2 !=0){
        newArr.push(firstValue)
        i++
      }
    }
    return newArr
  }