// a walkthrough of my code
// this line creates the vapor code funtion with string as a parameter
function vaporcode(string) {
    //this line uses the regex replace method on the string and removes spaces from within
    string = string.replace(/ /g, "")
    // this line turns the string into uppercase using the to uppercase string method
    string = string.toUpperCase()
    // this line uses the split method to turn the string into an array
    let arr = string.split('')
    //this line initializes an empty array called newArr
    let newArr = []
    //this line initializes a for loop
    for (let i = 0; i < arr.length; i++){
        //inside the for loop we have an if statement
      if (arr[i] == arr.indexOf(arr[0])){
        // if arr[i] equals index 0 push just the element. this really didnt work so I can remove it
        newArr.push(arr[i])
      }else{
       // this line pushes two spaces and then the element in to the new array
        newArr.push('  ' )
        newArr.push(arr[i])
      }
    }
// this line uses the join method and trimstart methos to format the array back in to a string with no white space at the beginning
// and returns the newArr string
    return newArr.join('').trimStart()
  }