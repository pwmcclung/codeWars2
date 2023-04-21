function spacey(array){
  let newArr = [];
  let word = '';
  for (let i = 0; i < array.length; i++){
   word += array[i];
    newArr.push(word);
  }
  return newArr;
}