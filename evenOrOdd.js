function oddOrEven(array) {
    if (array.length === 0 ){
      return 'even'
    }else{
    let initialValue = 0;
  let sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
   if (sum === 0){
     return 'even'
   }else if (sum % 2 === 0){
     return 'even'
   }else{
     return 'odd'
   }
      }
  }