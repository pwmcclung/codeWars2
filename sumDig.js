function getSumOfDigits(integer) {
    var sum = 0;
  
    var digits =  Math.floor(integer).toString();
    digits = digits.split('')
    
    for(let i = 0; i < digits.length; i++){
      sum += Number(digits[i])
    }
    return sum
  
  }