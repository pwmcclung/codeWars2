function kebabize(str) {
    str = str.replace(/\d/g,'')
    let arr = str.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == arr[i].toLowerCase()){
        newArr.push(arr[i])
      }else if (arr[i] == arr[i].toUpperCase()){
        newArr.push('-')
        newArr.push(arr[i])
      }
    }
    if (newArr[0] == '-'){
      newArr.shift()
       return newArr.join('').toLowerCase()
    }else{
       return newArr.join('').toLowerCase() 
    }
  
  }