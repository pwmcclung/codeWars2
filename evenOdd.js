function solve(a){
  let odd = 0;
  let even = 0;
  for (let i = 0; i < a.length; i++){
    if (typeof a[i] === 'number' && a[i] % 2 === 0){
      even++;
    }else if(typeof a[i] === 'number' && a[i] % 2 !== 0){
      odd++;
    }
  }
  return even - odd;
};