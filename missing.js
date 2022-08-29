function getMissingElement(superImportantArray){
    let sum2 = 0+1+2+3+4+5+6+7+8+9
    let sum1 = superImportantArray.reduce((a, b) => a + b)
    let missing = sum2 - sum1
    return missing
  }