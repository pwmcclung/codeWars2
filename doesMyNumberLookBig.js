function narcissistic(value) {
    let arr1 = String(value).split('')
    arr1.length
    let newArr = []
    for (let i = 0; i < arr1.length; i++){
      newArr.push(arr1[i] ** arr1.length)
    }
   let initialValue = 0;
  let sum = newArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  if (sum === value){
    return true
  }else{
    return false
  }
    
  }
  