function disariumNumber(n){
  let newNum = String(n).split('');
  let newArr = [];
  let count = 1;
  for (let i = 0; i < newNum.length; i++){
    newArr.push(parseInt(newNum[i]) ** count)
    count++
  }
 let sum = newArr.reduce((a,b)=> a + b,0);
  if (sum === n){
    return "Disarium !!"
  }else{
    return "Not !!"
  }
  //   return sum === n ? "Disarium !!" : "Not !!"; This can replace the if statement.
}