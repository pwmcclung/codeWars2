function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
    let arr1 = arr.map(x => x * x)
    const initialValue = 0;
  const sum = arr1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  )
  let sqrt = Math.sqrt(sum)
  return Math.floor(sqrt / 2)
    
  }