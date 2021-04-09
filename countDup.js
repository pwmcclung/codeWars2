function duplicateCount(text){
    //this line of code initializes a variable called text that makes all letters lowercase
    text = text.toLowerCase()
    //this line of code intiallizes a variable arr ,using the split method to turn text into an array 
    let arr = text.split('')
    // this line initializes an empty object called counts
   let counts = {}
   //this line uses the forEach method to return a count of each unique element in the array, and how many times the element is present
   arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })
   //this line turns the object into an array of the nums in the counts object
    let vals = Object.values(counts)
    //this line uses the filter method to return an array of the elements that are greater than 1
    let newArr = vals.filter(x => x > 1)
    //this line returns the number of elements that are in the newArr array
    return newArr.length
  }