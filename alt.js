function alternateCase(s) {
    let arr = []
    let arr2 = s.split('')
    for (let i = 0; i < arr2.length; i++){
      if (arr2[i] == arr2[i].toLowerCase()){
        arr.push(arr2[i].toUpperCase())
      }else if (arr2[i] == arr2[i].toUpperCase()){
        arr.push(arr2[i].toLowerCase())
      }
    }
    return arr.join('')
  }