function missingNo(nums) {
    let arr = nums.sort(function (a, b) {return a-b})
   
    let newArr = []
    let count = 0
    for (let i =0; i < arr.length ; i++){
      count++
      newArr.push(count)
    }
    let missing = newArr.filter( num => !nums.includes(num))
    return Number(missing)
  }
  
  