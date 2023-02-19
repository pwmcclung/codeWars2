function remove (string) {
  let arr = string.split('')
  let exclaimArr = []
  let wordArr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] != '!'){
      wordArr.push(arr[i])
    }else{
      exclaimArr.push(arr[i])
    }
  }
  return wordArr.concat(exclaimArr).join('')
}