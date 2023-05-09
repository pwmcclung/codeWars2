function add(num1, num2) {
  let numOne = num1.toString();
  let numTwo = num2.toString();
  let biggest = Math.max(numOne.length, numTwo.length);
  let string = '';
  
  for (let i = biggest -1; i >= 0; i-- ){
    let index1 = numOne.length - (i + 1);
    let index2 = numTwo.length - (i + 1);
    
    let valA = index1 >= 0 ? parseInt(numOne[index1]) : 0;
    let valB = index2 >= 0 ? parseInt(numTwo[index2]) : 0;
    
    string += valA + valB;
  }
  return Number(string);
}