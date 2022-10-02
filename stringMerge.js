//code walk through 
//This line creates a function with three parameters
function stringMerge(string1, string2, letter){
    //this line creates a variable and sets it to the value of the index of letter in string 1
    let indy1 = string1.indexOf(letter)
    //this line creates a variable and sets it to the value of the index of letter in string 2
    let indy2 = string2.indexOf(letter)
    //this line uses slicing to slice the first string from 0 to indy 1
    let first = string1.slice(0, indy1)
    //this line uses slicing to slice the second string from 0 to indy 2
    let second = string2.slice(indy2)
    //this line returns the value of the first variable concatated with the second variable
    //this shoudl be a string that contains the first part of string1- up to and indcluding
    //th letter and the second part with everyting after the letter
    return first.concat(second)
  }