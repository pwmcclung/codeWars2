function bubblesortOnce(a) {
  let arr = a.slice();
  for ( let i = 0; i < arr.length; i++){
    if (arr[i] > arr[i + 1]){
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }
  }
  return arr;
}