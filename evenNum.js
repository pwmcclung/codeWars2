function evenNumbers(array, number) {
    let newArr =[]
    let arr = []
    for (let i = 0; i <array.length; i++){
      if (array[i] % 2 ==0){
        newArr.push(array[i])
      }
    }
    
    return newArr.slice(newArr.length - number,)
  }