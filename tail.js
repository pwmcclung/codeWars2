function tailSwap(arr) {
  
let firstHalfOfOne = arr[0].split(':')[0];
 let secondHalfOfOne = arr[0].split(':')[1];
  let firstHalfOfTwo = arr[1].split(':')[0];
  let secondHalfOfTwo = arr[1].split(':')[1];
  
  let newOne = firstHalfOfOne + ':' + secondHalfOfTwo;
  let newTwo = firstHalfOfTwo + ':' + secondHalfOfOne;
  
  return [newOne, newTwo];
  
}