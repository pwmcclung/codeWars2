var countBits = function(n) {
    let bitty = n.toString(2)
    let arr = String(bitty).split('')
    let count = 0
    for (let i = 0; i <arr.length; i++){
      if(arr[i] == '1'){
        count++
      }
    }
    return count
  };