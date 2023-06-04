//the problem leetcode 283 says: Given an integer array,nums, move all zeros to the end of it while 
//maintaining the relative order of the non zero elements, this must be done in place


var moveZeroes = function(nums) {
//    for(let i = 0, j = 0; i< nums.length; i++){
//        while(nums[j] === 0)j++;
//        nums[i] = nums[j++] ?? 0;
//    };
//    return nums;
let low = 0; 
let high = low + 1;
while (high <=nums.length- 1){
    if (nums[low] !== 0){
        low++;
        high++;
    }else{
        if (nums[high] !== 0){
            [nums[low], nums[high]] = [nums[high], nums[low]];
            low++;
        }
        high++;
    }
};
return nums;
};

console.log(moveZeroes([0,1,0,2,0,6]));