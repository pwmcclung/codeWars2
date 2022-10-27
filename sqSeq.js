//code walkthrough
//this line initializes a function, with two parameters(x,n)
function squares(x, n) {
    //this initializes an empty array called arr
    let arr =[]
    //count variable set to 1
    let count= 1
    //an if statement to test is number is less than or equal to zero
    if (n <=0){
        //if so, return an empty array
      return []
    }
    //a while loop, that will iterate while count is less than or equal to n
    while (count <= n){
        //while true, push x into arr, 
      arr.push(x)
      /// x will then be squared
       x = x**2
       //count is increased by one
      count++
    }
    //the while loop concludes and arr is returned
    return arr
}