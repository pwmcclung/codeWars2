function borrow(s){
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  s = s.toLowerCase();
  let arr = s.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (letters.includes(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr.join('');
}