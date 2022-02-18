function doubleChar(str) {
  
    let arr = str.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      newArr.push(arr[i]+ arr[i])
    }
    return newArr.join('')
  }
  