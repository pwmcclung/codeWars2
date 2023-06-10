function liftoff(instructions){
  let newArr = instructions.sort((a,b) => b - a);
  let newStr = '';
  for (let i = 0; i < newArr.length; i++){
    newStr = newStr + newArr[i] + ' ';
  }
  return `${newStr}liftoff!`;
}