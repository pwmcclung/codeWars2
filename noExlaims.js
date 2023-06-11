function remove (string) {
 let arr = [];
  for (let i = 0; i < string.length; i++){
    if (string[i] !== '!'){
      arr.push('*');
    }else { arr.push('!');}
  }
  let last = arr.lastIndexOf('*');
  let workString = string.slice(0, last+1);
  let exclaims = string.slice(last+1,);
  let noExclaims = [];
  for(let i = 0; i < workString.length; i++){
    if (workString[i] !== '!'){
      noExclaims.push(workString[i]);
    }
  }
  let newStr = noExclaims.join('') + exclaims;
  return newStr;
}