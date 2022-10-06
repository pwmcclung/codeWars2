function swap (string) {
    if(string.length==0){
      return string
    }
    let newArr = []
    let arr = string.split('')
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == 'a'){
        newArr.push(arr[i] = 'A')
      }else if (arr[i] == 'e'){
        newArr.push(arr[i] = 'E')
    }else if (arr[i] == 'i'){
        newArr.push(arr[i] = 'I')
    }else if (arr[i] == 'o'){
        newArr.push(arr[i] = 'O')
    }else if (arr[i] == 'u'){
        newArr.push(arr[i] = 'U')
    }else{
      newArr.push(arr[i])
    }
    
  }
   return newArr.join('')
    }