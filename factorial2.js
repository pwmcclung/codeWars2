function factorial(n){
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
  