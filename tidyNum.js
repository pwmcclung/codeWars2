function tidyNumber(n){
    let myFunc =num => Number(num)
    let numArr = Array.from(String(n), myFunc)
   
    let num = numArr.slice()
  
    let sorted = num.sort(function(a, b) {return a - b})
    let sortJoin = sorted.join('')
    let numS = Number(sortJoin)
    if (numS == n){
      return true 
    }
    if (numS != n){
      return false
    }
  }