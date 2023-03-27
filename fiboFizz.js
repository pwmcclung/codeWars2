var fibsFizzBuzz = function(n) {
    let arrFib = []
    let arrAns = []
    let a = 1, b= 0, temp;
    while(n-1 >=0){
      temp = a
      a = a + b;
      b = temp;
      n--
       arrFib.push(b)
    }
   
    for (let i = 0; i < arrFib.length; i++){
      if (arrFib[i] % 3 ==0 && arrFib[i] % 5 ==0){
        arrAns.push('FizzBuzz')
      }else if (arrFib[i] % 3 ==0){
        arrAns.push('Fizz')
      }else if (arrFib[i] % 5 ==0){
        arrAns.push('Buzz')
      }else{
        arrAns.push(arrFib[i])
      }
    }
    return arrAns
  }