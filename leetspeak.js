// leet walkthrough
// this line initializes a funciton 
function toLeetSpeak(str) {
    // this line uses the split method to turn the string into an array
    //split method takes a pattern and divides a string into an ordered list of substrings by searching th 
    //pattern and  putting them in to an array
    let arr = str.split('')
    // this line creates an object of the leet language
    let leet = {
   'A': '@',
    'B': '8',
   'C': '(',
    'D' : 'D',
   'E': '3',
    'F': 'F',
    'G' : '6',
    'H' : '#',
    'I' : '!',
    'J' : 'J',
    'K' : 'K',
    'L' : '1',
    'M' : 'M',
    'N' : 'N',
    'O' : '0',
    'P' : 'P',
    'Q' : 'Q',
    'R' : 'R',
    'S' : '$',
    'T' : '7',
    'U' : 'U',
    'V' : 'V',
    'W' : 'W',
    'X' : 'X',
    'Y' : 'Y',
    'Z' : '2',
      ' ': ' '
  }
  // this line uses map method to iterate over the array and if the element is in leet, it exchanges the 
  //element for the leet element
    arr = arr.map((e) => leet[e])
    //this line uses the join method to turn the array into a string
    arr = arr.join('')
    // this line returns the arr string 
    return arr;
  }