//code walkthrough 
//this line establishes the function and accepts one parameter, missiles
function prioritizeMissiles(missiles){
    //this line creates a variable called sorted, it uses missles object, and applies the sort method,
    //sort sets iterates through the object and using javascript dot notation divides the elements distance 
    // by its speed. it puts these items in order by largest to smallest
    let sorted = missiles.sort((x,y)=>x.distance/ x.speed - y.distance / y.speed)
    //next we create a variable, ans use map to return the name
    let ans = sorted.map(z=>z.name)
   return ans
  }