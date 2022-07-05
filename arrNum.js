function toNumberArray(stringarray){
    let newArr = []
    for (let i = 0; i < stringarray.length; i++){
      newArr.push(Number(stringarray[i]))
    }
    return newArr
  }