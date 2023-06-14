function factors(x){
  if (x % 1 === 0 && x > 0){
     let numArr = [];
  for (let  i = x; i > 0; i--){
    if (x % i === 0){
      numArr.push(i);
    }
  }
  return numArr; 
  }
  return -1;
  
}