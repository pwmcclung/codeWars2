function summy(stringOfInts){
    // this line uses the split method to split the string into an array called nums
    let nums = stringOfInts.split(" ")
    // this line uses the reduce method to reduce the nums array and uses the parseFloat method to convert the string numvers into numbers, summing the array
    let newNum = nums.reduce((acc, cur) => acc + parseFloat(cur), 0)
    // this returns the summed newNum variable
    return newNum
    }