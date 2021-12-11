function arrayLowerCase(arr) {
    let newArr = []
    for (let i =0; i<arr.length; i++){
      if (typeof arr[i] === 'string'){
        newArr.push(arr[i].toLowerCase())
      }else{
        newArr.push(arr[i])
      }
    }
    return newArr
  }