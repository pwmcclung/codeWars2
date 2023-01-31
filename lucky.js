function isLucky(n) {
    let num = String(n)
    let arr = num.split('')
    let sum = 0
    for (let i = 0 ; i < arr.length; i++){
      sum = sum + Number(arr[i])
    }
    if (sum ===0 || sum % 9 ===0){
      return true
    }else{
      return false
    }
  }