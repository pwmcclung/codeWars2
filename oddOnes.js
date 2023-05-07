function oddOnesOut(nums) {
  let freqArr = {};
  nums.forEach(e => freqArr[e] ? freqArr[e]++: freqArr[e] = 1);
  for (let i in freqArr){
    if (freqArr[i] % 2 !== 0){
      nums = nums.filter(v => v !== i * 1)
    }
  }
  return nums;
}