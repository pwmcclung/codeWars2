function calculate(num1, operation, num2) {
    if (operation == '/' && num2 ==0){
        return null
      }
    if (operation != '/' && operation != '*' && operation != '+' && operation != '-'){
        return null
      }
    if (operation === '+'){
       return  num1 + num2
    }
     if (operation === '-'){
       return  num1 - num2
    }
    if (operation === '/'){
       return  num1 / num2
    }
    if (operation === '*'){
       return  num1 * num2
    }
  }