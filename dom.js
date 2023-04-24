function dominator(arr) {
   let arr1 ={};
  
  arr.forEach( e => arr1[e] ? arr1[e]++ : arr1[e] = 1);
  
  let key = Object.keys(arr1);
  let value = Object.values(arr1);
  
 if (Math.max(...value) < arr.length / 2) return -1;
  
  let highVal = value.indexOf(Math.max(...value)) === 0 ? -1 : key[value.indexOf(Math.max(...value))] * 1;
  
  return highVal;
}