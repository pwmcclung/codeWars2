var arraySign = function(nums) {
    let ans = nums.reduce((a, b) => a * b)
    if (ans >0 ){
        return 1
    }else if (ans <0 ){
        return -1
    }else{
        return 0
    }
};