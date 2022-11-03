function checkParity(parity, bin){
    let count = 0
    let arr = bin.split('')
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == '1'){
        count++
      }
    }
    if (parity == 'even' &&count % 2 != 0){
      return 1
    }else if (parity == 'odd' && count % 2 == 0){
      return 1
    }else{
      return 0
    }
  }