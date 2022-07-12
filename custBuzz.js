var fizzBuzzCustom = function(stringOne = 'Fizz', stringTwo='Buzz', numOne=3, numTwo=5) {
    let i = 1
    let newArr = []
      while ( i <=100){
        if (i % numOne ==0 && i % numTwo == 0){
          newArr.push(stringOne+stringTwo)
        }else if ( i % numOne ==0){
          newArr.push(stringOne)
        }else if (i % numTwo ==0 ){
          newArr.push(stringTwo)
        }else{
          newArr.push(i)
        }
        i++
      }
    return newArr
  };