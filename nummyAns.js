// nummy walkthrough
//this creates the function, with two params
var findDigit = function(num, nth){
    // an if statement to test if the nth is below zero and will return -1 if so
    if (nth <= 0){
        //return -1
      return -1
    } 
    // this creates the nummy variable by using the Math.abs function on num
    let nummy = "" + Math.abs(num);
    // this creates the ans variable, uses slicing to get the correct value from nummy variable
    let ans =  nummy.slice(nummy.length - nth, nummy.length - nth + 1) * 1   
    //return ans
    return ans
  }