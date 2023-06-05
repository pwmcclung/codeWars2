function calculate(string) {
 let arr = string.split(' ').sort();
  let one = Number(arr[0]);
  let two = Number(arr[1]);
  if (arr.includes('gains')){
    return two + one;
  }else if ( arr.includes('loses')){
    return Math.abs(two - one);
  }
}