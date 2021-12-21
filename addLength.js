function addLength(str) {
    let arr = str.split(' ')
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      newArr.push(arr[i].concat(' ', arr[i].length, ''))
      //newArr.push(arr[i].length)
    }
      return newArr
    }