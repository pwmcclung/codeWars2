var sortedSquares = function(nums) {
    let sqr = []
    for (let i = 0; i <nums.length; i++){
      sqr.push(nums[i] **2)
    }
    let sorted = sqr.sort((a, b)=> {return a -b})
    return sorted
};