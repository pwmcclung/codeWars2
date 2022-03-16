function moveZeros(arr) {
    let newArr = arr.filter(e => e !== 0)
    let zeroArr = arr.filter(e => e === 0 )
    
    return newArr.concat(zeroArr)
  }