function evenChars(string) {
    if (string.length > 100 || string.length <2){
      return 'invalid string'
    }
    let arr = string.split('')
    let newArr = []
    for (let i = 0; i <arr.length; i++){
      if (i % 2 != 0){
        newArr.push(arr[i])
      }
    }
      return newArr
    }