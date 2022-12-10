// code walkthrough 
// this line creates the function
function findMissingLetter(array)
{
  // this line initializes the first variable
  let first
  //this line creates an array of string letters
  let lowArr = ['a', 'b','c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z']
 // this line is a forloop that iterates over the original array 
  for(let i = 0; i< array.length; i++) {
    // using the indexOf method, the element at array[i] is made lower case and assigned to the first variable
       first = lowArr.indexOf(array[i].toLowerCase())
     if(array[0] === array[0].toUpperCase()){
     if(lowArr[first+1].toUpperCase() !== array[i+1])
     return lowArr[first+1].toUpperCase()
} else if(array[0] === array[0].toLowerCase()) {
      if(lowArr[first+1] !== array[i+1])
      return lowArr[first+1].toLowerCase()
}
}
  }
  