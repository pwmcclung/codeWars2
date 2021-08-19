let ops = {
    AND: (a, b) => a&&b,
    OR: (a, b) =>a ||b,
    XOR: (a, b) => a !== b
  }
  
  function logicalCalc(array, op){
    return array.reduce(ops[op])
  }