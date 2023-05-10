function explode(x){
  // intialize an empty array
  let newArr = [];
  //test to see if both elements are not numbers, if true, return void
  if (typeof x[0] != 'number' && typeof x[1] != 'number'){
    return 'Void!';
  };
  //test if one element is zero and the other is not a number, if so, return empty array
  if ((x[0] == 0 && typeof x[1] != 'number') || (x[1] == 0 && typeof x[0] != 'number')){
    return [];
  };
  //calculate a sum
  let sum = (parseInt(x[0]) || 0) + (parseInt(x[1])||0);
  //initialize a count variable 
  let count = 0;
  //use a while loop to increment count upto being just below sum
while (count < sum){
  //for each iteration, we will push the original array into a new array
  newArr.push(x);
  //increment count on each iteration
  count++;
}
  //return the newArr;
  return newArr;
}