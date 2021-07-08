function unusedDigits(...nums) {
 let nums1 = nums.join('')
  let nummys = [0,1,2,3,4,5,6,7,8,9]
  return nummys.filter(x => !nums1.includes(x)).join("");
}