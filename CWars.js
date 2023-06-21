function initials(n){
  let arr = n.split(' ');
  let first = arr.slice(0, arr.length-1);
   let last = String(arr[arr.length-1][0].toUpperCase()) + String(arr[arr.length-1].slice(1,));
let newArr = [];
  for (let i = 0; i < first.length; i++){
    newArr.push(String(arr[i][0].toUpperCase() + '.'));
  }
  return newArr.join('') + last;
}