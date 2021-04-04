function dotCalculator (equation) {
    //this first line splits the string into an array of three elements
    let eqArr = equation.split(' ')
    //this line establishes a variable for the left part by using the first element in the array 
    let left = eqArr[0]
    //this line initializes the operator by using the 2nd element in the array
    let op = eqArr[1]
    //this line initializes the right part of our equation
    let right = eqArr[2]
    // this line initializes the left number by splitting the left portion and using the length funciton to get a number
    let numLeft = left.split('').length
    // this line initializes the right number by splitting the right number and using the length funtion to get a number
    let numRight = right.split('').length
    //this line initializes the answer variable, setting it to zero
    let ans = 0
    // this line initializes the str variable and sets it to a dot
    let str = '.'
    // this if statement asks if the op equals plus and then if so adds num left to right and sets that to equal ans
  if (op=='+'){
    ans = numLeft + numRight 
  }
  //this if statement asks if the op equals minus and subtracts, numright from numleft, 
    if (op=='-'){
    ans = numLeft - numRight 
  }
  //this if statement does multiplication
    if (op=='*'){
    ans = numLeft * numRight 
  }
  //this if statement does division
    if (op=='//'){
    ans = numLeft / numRight 
  }
  //this line returns the value from str multiplying it by the number in ans, using the repeat method
    return str.repeat(ans)
  }