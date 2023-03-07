function nerdify(txt){
  
  let arr = txt.split('')
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'a' || arr[i] === 'A'){
      newArr.push('4')
    }else if (arr[i] === 'e' || arr[i] === 'E'){
      newArr.push('3')
    }else if (arr[i] === 'l' ){
      newArr.push('1')
    }else{
      newArr.push(arr[i])
    }
  }
  return newArr.join('')

}