function add(...nums) {
  if (nums.length ===0){
    return 0;
  }
  let newArr = []
  let sum = 0
  for (let i = 0; i < nums.length; i++){
    sum += nums[i] / (i+ 1)
  }
  return Math.round(sum)
}
