function findArray(arr1, arr2){
  let arr3 = [];
  if (arr1.length === 0 || arr2.length === 0){
    return [];
  }else{
  arr3= arr2.map(x => arr1[x]);
  }
  return arr3;
}