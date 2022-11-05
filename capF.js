function capitalsFirst(str){
    let arr = str.split(' ')
    console.log(arr)
    let noGood = []
    let arr2 = []
    let arr3 =[]
    let wordReg = /[a-zA-Z]/
    for (let i = 0; i < arr.length; i++){
      if(!arr[i][0].match(wordReg)){
        noGood.push(arr[i])
      }else if (arr[i][0] == arr[i][0].toUpperCase()){
        arr2.push(arr[i])
      }else if (arr[i][0] == arr[i][0].toLowerCase()){
        arr3.push(arr[i])
      }
    }
    return arr2.concat(arr3).join(' ')
  }