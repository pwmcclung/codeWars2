var isSquare = function(arr){
    let newArr = []
    let newArr2 = []
    if(arr.length == 0){
      return undefined
    }
    for (let i = 0 ; i < arr.length; i++){
      newArr.push(Math.sqrt(arr[i]))
    }
    for (let j = 0; j < newArr.length; j++){
      if (Number.isInteger(newArr[j])){
        newArr2.push(newArr[j])
      }
    }
    if (newArr2.length === arr.length){
      return true
    }else{
      return false
    }
  }