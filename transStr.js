function stringTransformer(str) {
  let arr1 = str.split('');
  let arr2 = []
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr1[i].length; j++){
      if(arr1[i][j] == arr1[i][j].toUpperCase()){
        arr2.push(arr1[i][j].toLowerCase())
      }else if (arr1[i][j] == arr1[i][j].toLowerCase()){
        arr2.push(arr1[i][j].toUpperCase())
      }else{
        arr2.push(arr1[i][j])
      }
    }
  }
  let newStr = arr2.join('')
  let arr = newStr.split(' ').reverse().join(' ')
  let newArr = []
  return arr
}