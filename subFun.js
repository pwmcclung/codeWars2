function nthChar(words){
  if (words.length === 0){
    return '';
  }
 let arr =[];
  let count = 0;
  for ( let i = 0; i < words.length; i++){
    arr.push( words[i][count]);
    count++;
  }
  return arr.join('');
}