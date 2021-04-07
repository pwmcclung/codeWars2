function getMissingElement(superImportantArray){

    //this line sums all the numbers from 0 to 9
    let sum2 = 0+1+2+3+4+5+6+7+8+9
    //this line uses reduce on the array to find the sum
    let sum1 = superImportantArray.reduce((a, b) => a + b)
    //this line subtracts the goal sum from what is and that should be the missing number
    let missing = sum2 - sum1
    //this line returns the missing number
    return missing
  }