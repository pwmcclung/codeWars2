function switcheroo(x){
    let newArr = []
    let arr = x.split('')
    for (let i = 0; i <arr.length; i++){
      if (arr[i] =='a'){
        newArr.push('b')
      }else if (arr[i]=='b'){
        newArr.push('a')
      }else{
        newArr.push(arr[i])
      }
    }
    return newArr.join('')
  }