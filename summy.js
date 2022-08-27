function summy(stringOfInts){
  
    let nums = stringOfInts.split(" ")
    let newNum = nums.reduce((acc, cur) => acc + parseFloat(cur), 0)
    return newNum
    }