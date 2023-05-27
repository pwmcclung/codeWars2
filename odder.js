function oddOne(arr) {
  let oddIdx = -1;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
      oddIdx = i;
    }
  };
  return oddIdx;
}