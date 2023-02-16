function inArray(array1,array2){
  let newArr1 = array1.filter(x => array2.some(y => y.includes(x)))
  let newArr2 = newArr1.sort()
  return newArr2
}