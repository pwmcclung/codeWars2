// the purpose of this function is to take in three parameters: a start, a difference, and a stop
//it will return a string of items, set to the length of n
//here we see the classic function declaration
function arithmeticSequenceElements(a, d, n) {
    // this line creates an empty array
let arr = []
//this line creates a variable called start and it is set to a
let start = a
// first we test if d or difference is zero, to do that we use an if statement
if (d == 0){
    //inside the if statement we have a forloop
  for (let i = 0; i < n; i++){
    //since difference is zero, the amount does not change, so for each iteration of the loop we 
    //simply push the value of a into the array
    arr.push(a)
  }
}
// the next test is if difference is greater than zero, this meaans we iterate upwards
  if (d > 0 ){
    //using a classic for loop
    for (let i = 0; i< n; i++){
      //we start by pushing the value of start into the array
      arr.push(start)
      //we then increase start by the value of d and it will be pushed into the array in each iteration
      start = start + d
    }
  }
  //the final test is to see if d is greater than zero
  if (d < 0){
    //we will use a for looop again but decrement i each iteration, notice how we begin with making i equal to n?
    for (let i = n; i >0; i--){
        //the value of start is pushed into the array
      arr.push(start)
      //then start is increased by d
      start = start + d
    }
  }
  // we finally return the array, using the string.join method on the array to turn it into a string
 return arr.join(', ')
}