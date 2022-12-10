//solution and walkthrough
//first the function is created. it takes one parameter: an array
function highestRank(arr){
    //this line initializes an empty object
    let newArr = {}
    //this is a for of loop iterating over the array
    for (let x of arr) {
        // an if statement, the uses the hasOwnProperty method to check if a key exists
        if (newArr.hasOwnProperty(x)) {
            //if so, it adds one to the keys value
            newArr[x]++
            //else, it adds the key and the value
        } else {
            newArr[x] = 1;
        }
    }
    //a variable called ans, set to zero
     let ans = 0;
     //a variable calls ans1 set to zero
      let ans1 = 0;
      //a for in loop to iterate over the newArr object
      for (let num in newArr) {
        //num in newArr is multiplied by one
        num = num * 1;
        //if statement, if newArr[num] is greater than or equal to ans
        if (newArr[num] >= ans) {
            //ans is then assigned the value of newArr[num]
          ans = newArr[num];
          //ans1 becomes num
          ans1 = num;
        }
      }
      //this loop will repeat oveer the length of newArr, finally selecting the most frequent or largest
      //and returning it
      return ans1;
      }