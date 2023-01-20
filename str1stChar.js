function makeString(s){
    let strArr = s.split(' ')
    let newArr= []
    for(let i = 0; i < strArr.length; i++){
      newArr.push(strArr[i][0])
    }
    return newArr.join('')
  }