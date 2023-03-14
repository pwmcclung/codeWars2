function firstNonRepeated(s) {
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++){
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]))
      return arr[i]
  }
  return null
}

//This is a pretty straightforward problem, 
//first we split the string into an arry
//then we use a for loop to iterate over the array. if
//the index of the element at array i is equal to the last index of the element at array[i]
//return the elemene
//or return null