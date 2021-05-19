//code walkthrough
//this line creates a function that accepts three params
function stickyCalc (operation, val1, val2){
   // this line usesd the round function to round val1
    val1 = Math.round(val1)
    //this line uses the round function to round val2
    val2 = Math.round(val2)
    //this line creates a variable called concatenated, using ths string method on val1 and val2
     let concatenated = String(val1) + String(val2)
     //this line creates a varible and uses Number to turn concatenate into a number
     let num = Number(concatenated)
     //this line rounds num
     num = Math.round(num)
     //this line creates a varable called ans
    let ans = 0
    //an if statement, if op is plus
   if (operation == '+'){
    // ans equals num plys val2
    ans = num + val2
   }
   //an if for subtraction
    if (operation == '-'){
        //ans equals num - val2
     ans = num - val2

   }
   //muliplication if statement
    if (operation == '*'){
        //and num * val2
     ans = num * val2
   }
    if (operation == '/'){
     ans = num / val2
   }
   //return ans rounded
   return Math.round(ans)
  }