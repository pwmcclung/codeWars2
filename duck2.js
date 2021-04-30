// this is a walk through the duckshoot code
// this first line initializes the duckshoot function, with three parameters
function duckShoot(ammo, aim, ducks){
    //this line calculates the success rate, using math.trunc to just get the integer portion
    let success = Math.trunc(ammo*aim)
    //this line intializes a count variable
    let count = 0
    //this line uses the split method on ducks to turn ducks into an array
    let arr = ducks.split('')
    //this line initializes a n empty array called newArr
    let newArr = []
    //this line creates a for loop to iterate over the arr array
    for (let i = 0; i <arr.length; i++){
        // an if statement, first like tests is the element is ~ or |
      if (arr[i] == '|' || arr[i] == '~'){
        //if so they get pushed to newArr
        newArr.push(arr[i])
        //if the element is a duck and count is less than success rate
      }else if (arr[i] == '2' && count < success){
        // an x gets pushed to newArr 
        newArr.push('X')
        //count is incremented
        count ++
        // else if the element is a duck and count is equal to success
      }else if (arr[i] == '2'&& count == success){
        //the element gets pushed to the newArr
        newArr.push(arr[i])
      }
    }
 // this line returns the newArr and uses the join method to turn it into a string
 return newArr.join('')
}