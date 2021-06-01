function sum (numbers) {
    "use strict";
  let sum = 0
  if (numbers.length === 0){
    return 0
  }else{
  for (let i = 0; i < numbers.length; i ++){
    if (numbers === ''){
      return 0
    }else{
      sum += numbers[i]
      
    }
    
  }
    return sum
    }
    
};