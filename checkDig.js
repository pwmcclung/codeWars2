function checkDigit(number, index1, index2, digit) {
  let arr = Array.from(String(number),Number);
  let first = Math.min(index1, index2);
  let second = Math.max(index1, index2);
  let arrSlice = arr.slice(first, second+1);
  let ans = arrSlice.includes(digit);
  return ans 
};