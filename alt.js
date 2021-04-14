// create a function that alternates the letters of a string based on their current capitalization
// i.e. if letter is A,make it small a
function alternateCase(s) {
  //this line initalizes an empty array 
    let arr = []
    // this line splits s into an array called arr2, using the split method
    let arr2 = s.split('')
    //this line initializes a for loop, setting i to 0, and iterates over the lenght of the array
    for (let i = 0; i < arr2.length; i++){
      // this line asks is arr[i] element is equal to lower case 
      if (arr2[i] == arr2[i].toLowerCase()){
        // if so it pushes the upper case to the empty array
        arr.push(arr2[i].toUpperCase())
        //this line asks if arr[i] element is equal to uppercase, 
      }else if (arr2[i] == arr2[i].toUpperCase()){
        //if so it pushes the lowercase letter to the array
        arr.push(arr2[i].toLowerCase())
      }
    }
    //this line uses the join method to join the arr into a string and returns it
    return arr.join('')
  }