function dotCalculator (equation) {
    let eqArr = equation.split(' ')
    let left = eqArr[0]
    let op = eqArr[1]
    let right = eqArr[2]
    let numLeft = left.split('').length
    let numRight = right.split('').length
    let ans = 0
    let str = '.'
  if (op=='+'){
    ans = numLeft + numRight 
  }
    if (op=='-'){
    ans = numLeft - numRight 
  }
    if (op=='*'){
    ans = numLeft * numRight 
  }
    if (op=='//'){
    ans = numLeft / numRight 
  }
    return str.repeat(ans)
  }