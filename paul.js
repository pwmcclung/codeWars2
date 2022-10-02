//code walkthrough
//this line creates the function with one parameter
function paul(x){
   //this creates a scores dict, with scores for each activity
    let scores = {'kata': 5, 'Petes kata': 10, 'life':0, 'eating':1}
    //this creates a change variable and uses map to map the elements in x to the scores dict values
    let change = x.map((e) => scores[e])
    // variable sum equals zero
    let sum =0
    // a for loop to iterate over the change array
    for (let i =0; i <change.length; i++){
        //sum equals sum plus change element value
      sum = sum + change[i]
    }
    // an if statement. if sum is greater than 40
    if (sum <40){
        //return super happy
      return 'Super happy!'
      //else if sum is less than 70 and greater than 40
    }else if (sum <70 && sum >= 40){
        // return happy
      return 'Happy!'
      //else if sum is less and 100 and greateer than 70
    }else if (sum <100 && sum >= 70){
        //return sad
      return 'Sad!'
      //else
    }else{
        //return miserable
      return 'Miserable!'
    }
    }