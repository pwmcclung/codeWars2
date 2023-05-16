function mostLikely(prob1,prob2){
  let arr1 = prob1.split(':');
  let arr2 = prob2.split(':');
  let percent1 = Number(arr1[0]) / Number(arr1[1]);
  let percent2 = Number(arr2[0]) / Number(arr2[1]);
  if (percent1 > percent2){
    return true;
  }
  return false;
}