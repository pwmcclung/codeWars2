// a little review since this problem made me think a bit. 
//not really hard looking back, just a little confusing.
// the goal is to take the weight of a chicken in kilograms
// and turn that into a cook time. 
// it takes the chicken 20 mins per 450 grams plus 20 mins to fully cook, must return a time
//first, we have the function declaration with one parameter, the weight of the chicken in kilograms
function cookingTime(weight){
    //the first goal is to turn the weight in kg to grams
    //this is achieved by multiplying the weight by 1000
let grams = weight * 1000;
// next an if statement to evaluate if there really is a chicken, if not return there is no chicken
if (grams === 0){
  return 'There is no chicken!'
}
//i next decided to get how many sets of 5 minutes a chicken had to cook based on weight
// this is done by dividing the number of grams by 112.50(which is 450 / 4 => 4 sets of 5 min in 20mins)
let sets = grams / 112.50
//next i create a variable for the unadjusted time, sets * 5 mins
let unAd = Math.ceil(sets * 5)
//then I adjust the time to a number divisable by five, 
//using an if statement, if the unadjusted num is not cleanly divisible by five
if (unAd % 5 != 0){
    //a while loop will add one until it is divisible by five
  while(unAd % 5 != 0){
    unAd = unAd + 1
  }
}
//I next add 20 minutes to the adjusted time to get the total time
 let totalTime = unAd + 20
 //if the total time is less than 60, I can return the total time, it is done
 if (totalTime <60){
    //using a string template i can return the totoal time in minutes
   return `${totalTime} mins`
  }
  // since we are now working with numbers greater than 60, i needed to be a little creative.
  //first I got the integer portion of the decimal.
  //i created a variable, divided the total time by 60, used the to string method to turn the number into a sting
  // then I split it on the decimal point and finally selected the first element in the array
let decFirst = (totalTime/ 60).toString().split('.')[0]
// then to get the minutes portion, i substracted the number of total hours(in minutes) from the totalnumber of minutes
let mins = totalTime - (decFirst * 60)
// i next use if statements and string templating to return the correct answers
// first if there is only one hour and no minutes
if (decFirst === 1 && mins === 0){
    //return 1 hour
  return `${decFirst} hr`
  // if there is only one hour but some minutes
}else if (decFirst <2 && mins >0){
    //return one hour and the number of minutes
  return `${decFirst} hr ${mins} mins`
  //if there is more than one hour but no minutes
}else if (decFirst >1 && mins ===0){
    //return the number of hours
  return `${decFirst} hrs`
  //finally if we have more than one hour and more than zero minutes
}else if (decFirst >1 && mins > 0){
    //return the number of hours and minutes
  return `${decFirst} hrs ${mins} mins`
}
}