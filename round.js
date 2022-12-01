//code walkthrough
//the first line establishes the function, called roundToNext5, it accepts one parameter=n
function roundToNext5(n){
    //we start by return 0 if n is 0
    if (n == 0){
        //return 0
      return 0
      //next we evaluate if  n % 5 == 0: if the remainer of 5 is zero
    }else if (n % 5 == 0){
        //retun n
      return n
      //an else statement
    }else{
        //if neither of the above conditions are true
        //we initiate a for loop to iterate starting at n and ending five numbers above n
      for (let i = n; i < n+ 6; i++){
        //if any of the numbers in the iteration modulo 5 equals 0
        if (i % 5==0){
            //return i
          return i
        }
      }
    }
  }