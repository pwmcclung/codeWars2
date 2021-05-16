//code walkthrough 
// this line creates the function, it takes one parameter - array
var number=function(array){
    //this line is an if statement that checks if the array is empty 
    if (array.length == 0){
        //it returns an empty array
      return []
    }
    //this line initializes a newArr, its empty
    let newArr = []
    //this line creates a count, set to 1
    let count = 1
    // a for loop that iterates over the array
    for (let i =0; i < array.length; i++){
    // this line uses a template literal to add count and the element with a colon to the newArr array
      newArr.push(`${count}: ${array[i]}`)
      // this line increments count by one
      count++
    }
    //this line returns the newArr array 
    return newArr
    }