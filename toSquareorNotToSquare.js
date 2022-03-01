function squareOrSquareRoot(array) {
    let newArr = []
   for (let i = 0; i < array.length; i++){
     if (Math.sqrt(array[i]) % 1 === 0){
       newArr.push(Math.sqrt(array[i]))
     }else {
       newArr.push(array[i] ** 2)
     }
   }
     return newArr
  }