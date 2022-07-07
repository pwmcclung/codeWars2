function broken(x){
    let arr = x.split('')
    let newArr = []
    for (let i = 0; i <arr.length; i++){
      if (arr[i]=='1'){
         newArr.push('0')
      }else{
        newArr.push('1')
      }
    }
    return newArr.join('')
  }