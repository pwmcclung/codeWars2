//code walkthrough 
//first line initializes a function, accepting one parameter-num
function insertDash(num) {
    //this line uses the String object and the split method to turn the string into an array of strings
    let arr = String(num).split('')
    //this line intializes a new array - its empty
    let newArr = []
    //this is a for loop that will iterate over the arr
    for (let i = 0; i < arr.length; i++){
        //it first pushes the string of array element at the i index into the new array
      newArr.push(String(arr[i]))
      // a conditional - testing if the Number at arr[i] is odd and
      if ((Number(arr[i]) % 2 !== 0 ) && 
      //the number at index arr[i] plus one is odd and 
          (Number(arr[i + 1 ] ) % 2 !== 0)&&
          //the the number at index i plus one is not undfined
          (Number(arr[i + 1 ] ) % 2 !== undefined)){
            //then push a dash into the array 
        newArr.push('-')
        }   
      }
    //after the new array is populated with the elements from array and the dashes, if
    // the last element in the new array is a dash
  if (newArr[newArr.length-1] =='-'){
    // initaliaze a new variable and pop off the last element
    let en = newArr.pop()
    //return the newArr as a string using the join method
   return newArr.join('')
    
  }
  //or return the newarr as string using the join method
   return newArr.join('')
   }

   