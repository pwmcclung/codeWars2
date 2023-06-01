function isPrimeNumber(n){
let num = Math.sqrt(n)
  for (let i = 2; i <= num; i++){
    if (n % i === 0) return false;
  }
  return n !== 1;
}


function minimumNumber(numbers){
  let numSum = numbers.reduce((a,b) => a + b, 0);
  let number= numSum;
  for (let i = 0;;i++){
    if (isPrimeNumber(number + i)) {return i}
  }
}
