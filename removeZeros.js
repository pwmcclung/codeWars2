function removeZeros(array) {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < array.length;  i++){
      if(array[i] === 0 || array[i] === '0'){
        arr2[arr2.length] = array[i]
      }else{
        arr1[arr1.length] = array[i]
      }
    }
  let newArr = []
  for (let x of arr1){
    newArr[newArr.length] = x
  }
  for (let y of arr2){
    newArr[newArr.length] = y
  }
  return newArr

}