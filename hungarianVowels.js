function dative(word) {
  let vowels = 'eéiíöőüűaáoóuú';
  let frontVowels = 'eéiíöőüű';
  let backVowels = 'aáoóuú';
  let last = '*';
  let wordArr = word.split('');
  let wordArr1 = [];
  for (let i = 0; i < wordArr.length; i++){
    if(vowels.includes(wordArr[i])){
      wordArr1.push(last);
    }else{
      wordArr1.push(wordArr[i]);
    }
  }
  let spot = wordArr1.lastIndexOf(last);
  if(frontVowels.includes(word[spot])){
    return word + 'nek';
  }else if (backVowels.includes(word[spot])){
    return word + 'nak';
  }
}