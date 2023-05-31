function makePassword(phrase) {
  let str = phrase.split(' ');
  let newArr = [];
  for (let i = 0; i < str.length; i++){
    newArr.push(str[i][0]);
  }
  for (let j = 0; j < newArr.length; j++){
    if(newArr[j] === 'i' || newArr[j] === 'I'){
      newArr[j] = '1';
    }else if (newArr[j] === 'o' || newArr[j] === 'O'){
      newArr[j] = '0';
    }else if (newArr[j] === 's' || newArr[j] === 'S'){
      newArr[j] = '5';
    }
  }
  return newArr.join('');
}