function multiply(number){
    let newNum = Math.abs(number)
    let str = String(newNum)
    let arr = str.split('')
    let numLen = arr.length
    let fiveUp = 5 ** numLen
    return  number * fiveUp
  }