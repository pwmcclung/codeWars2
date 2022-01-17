function findSum(n) {
    let newArr= []
    for (let i = 1; i <=n; i++){
      if (i %3 ===0 || i %5===0){
        newArr.push(i)
      }
    }
    let initialValue = 0;
  let sum = newArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
    return sum
  }