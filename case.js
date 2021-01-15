function swap(str){
    let arr = str.split('')
    let newArr =[]
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == arr[i].toUpperCase()){
        newArr.push(arr[i].toLowerCase())
      }else if (arr[i] == arr[i].toLowerCase()){
        newArr.push(arr[i].toUpperCase())
      }else{
        newArr.push(arr[i])
      }
    
    }

  return newArr.join('')
  }