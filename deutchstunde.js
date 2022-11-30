function derDieDas(wort){
    //imagine 'abc' is the string passed in for the wort parameter
    //this line intializes an object, with the vowels as keys and their values as 1
    let vowels = { 'a':1, 'A':1, 'e':1, 'E':1, 'i':1, 'I':1, 'o':1, 'O':1, 'u':1, 'U':1, 'ä':1, 'ö':1, 'ü':1}
    //this line uses the string split method to split the string into an array of letters
   let arr = wort.split('')//['a', 'b', 'c']
   //this method used the array.map method to iterate over the elements in the array and through the use of an 
   //arrow function, sees if the element is in the vowels object, if so the element in arr.map becomes 1
   //else it becomes zero, this creates a new array of ones and zeros
   let arr1 = arr.map((x)=> vowels[x]||0) //[1,0,0]
   //this uses the array.reduce method to calculate the total value of the numbers in arr1, creates the sum 
   let sum = arr1.reduce((a,b) => a + b, 0)//[1]
   //this line creates an empty string for the eventual value of the count
   let ans = ''
   //an if statement, 
   if(sum < 2){
    //if sum is less than two, ans is das
     ans = 'das'
   }else if (sum > 3){
    //else if sum is greater than 3, ans is der
     ans = 'der'
   }else{//2 and 3
     ans = 'die'
   }
   //using template literal, we return the ans and wort
   return `${ans} ${wort}`//das abc
  }