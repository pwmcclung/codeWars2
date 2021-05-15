//code walkthrough
//this line initalizes the function, taking two parameters - string, char
function countChar(string, char) {
    // this line makes string all lowercase
    let str = string.toLowerCase()
    //this line makes char all lower case
    char = char.toLowerCase()
    //this line uses the split method on the str to make it into an array
    let arr = str.split('')
    // this line sets the count variable to zero
    let count = 0
    // this lineis a for loop , iterating over the arr array
    for (let i = 0; i < arr.length; i++){
        // if arr[i] <- the element is equal to the char
      if (arr[i] == char){
        //increase count
        count++
      }
    }
    //this returns the count of how many times the char is in the string
    return count
  }