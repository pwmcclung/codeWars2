var missingNumber = function(nums) {
    let sorted = nums.sort((a, b) =>{return a - b})
    let empty = []
    for (let i = 0; i<=sorted.length; i++){
        empty.push(i)
    }
   let difference = empty.filter(x => sorted.indexOf(x) === -1)
   return difference
};