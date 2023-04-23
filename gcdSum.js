function solve(s,g){
  let num1 = s - g;
  if (num1 % g === 0){
    return [g, num1];
  }else{
    return -1;
  }
}