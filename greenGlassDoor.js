function stepThroughWith(s) {
  let arr = s.split('')
  let same = 0
  for ( let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i + 1]){
      same++
    }
  }
  if (same > 0){
    return true;
  }
  return false;
}