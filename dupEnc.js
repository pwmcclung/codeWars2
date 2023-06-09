function duplicateEncode(word){
  let arr = word.toLowerCase().split('');
  let newArr = arr.map(function(x,i,arr){
    return arr.indexOf(x) == arr.lastIndexOf(x) ? '(' : ')';
  }).join('');
  return newArr;
}
