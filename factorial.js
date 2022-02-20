function factorial(n){
    if (n <0 || n >12){
      throw new RangeError('n is out of bounds')
    }else if (n === 0){
      return 1
    }
    else{
       let newArr = []
       for (let i = n; i>0; i--){
         newArr.push(i)
       }
      let initialValue = 1;
  let product = newArr.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    initialValue
  );
   return product
    }
  }