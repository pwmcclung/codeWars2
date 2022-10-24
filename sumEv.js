function sumEvenNumbers(input) {
    let newArr = []
    for (let i = 0; i < input.length;i++){
      if(input[i] % 2 ==0 ){
        newArr.push(input[i])
      }
    }
    let red = newArr.reduce((a, b) => a + b, 0)
    return red
  }
  