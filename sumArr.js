function arraySum(arr) {
  
  let newArr = JSON.stringify(arr);
  let newerArr = newArr.match(/[0-9\.]+/g);
  let summed = newerArr.reduce((a,b) => a + b * 1, 0);
  return summed;
}