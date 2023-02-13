function balance(left,right){ 
  let arrLeft = left.split('')
  let arrRight = right.split('')
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < arrLeft.length;i++){
    if (arrLeft[i] === '!'){
      leftArr.push(2)
    }else if (arrLeft[i] === '?'){
      leftArr.push(3)
    }
  }
  for (let j = 0; j < arrRight.length;j++){
    if (arrRight[j] === '!'){
      rightArr.push(2)
    }else if (arrRight[j] === '?'){
      rightArr.push(3)
    }
  }
  let leftArrSum = leftArr.reduce((a,b) => a + b, 0 )
  let rightArrSum = rightArr.reduce((a,b) => a + b, 0 )
  if (leftArrSum > rightArrSum){
    return "Left"
  }else if (leftArrSum < rightArrSum){
    return "Right"
  }else{
    return "Balance"
  }
}