function reverseVowels(str) {
  let vowelStr = 'aeiouAEIOU';
  let holder = [];
  let newStr = [];
  let vowels = [];
  let trash = [];
  for (let i = 0; i < str.length; i++){
    if (vowelStr.includes(str[i]) ){
      holder.push('*');
      vowels.push(str[i]);
    }else{
      holder.push(str[i]);
    }
  }
  vowels.reverse();
  for (let j = 0; j < holder.length; j++){
    if (holder[j] == '*'){
      newStr.push(vowels[0])
      trash.push(vowels.shift())
    }else{
      newStr.push(holder[j]);
    }
  }
  return newStr.join('');
}