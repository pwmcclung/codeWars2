function isDivisible(...args){
  let first = args[0];
  let newArr = args.slice(1,)
  let count = 0
  for (let i = 0; i < newArr.length; i++){
    if (first %  newArr[i] ==0){
      count++
    }
  }
  return count === newArr.length;
}