//this is the function declaration, it accepts one parameter(x) which 
//is an object with two or more name value pairs representing 
//members of the group and their payment
//we want to return the bill split, and how much each member
// is owed or owes to make it evenly split
function splitTheBill(x) {
//this line creates an array of the money values paid by the members
    let arr = Object.values(x)
    //this line creates an array of each member
    let arr1 = Object.keys(x)
    //this line sums the total bill by using the reduce method on the array of values
    let sum = arr.reduce((a, b) => a + b, 0)
    //this line creates an average for how much each member should pay
    let amtDue = sum / arr.length
    //this line creates an empty array 
    let amt2 = []
    //we next use a for loop to iterate over the array of original values
    for (let i = 0; i < arr.length; i ++){
        //in each iteration, how much each member needs to pay or be paid 
        //is calculated. we use the parse float method and to fixed to 
        //format the number in the correct value and then
        //push the value into the empty array
      amt2.push(parseFloat((arr[i] - amtDue).toFixed(2)))
    }
    //an if statement is used to ensure the arrays are of the same length, 
    // and each array has information in it
   if(arr1.length != amt2.length || arr1.length == 0 || amt2.length == 0){
        //null is returned if the arrays are no good
        return null;
       }
       /// this line creates an empty object
       let obj = {};
    //the for each method is called on arr1(the array of names)
    //for each element in arr1, the appropriate value is assigned 
    //at the proper index. this creates an object with key value pairs
       arr1.forEach((k, i) => {obj[k] = amt2[i]})
       // the object is then returned
       return obj;
 }