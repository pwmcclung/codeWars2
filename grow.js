//grow function walkthrough
//this line creates the growingPlant function, three parameters
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    //this line initializes the current height variable set to zero
    let currentHeight = 0;
    //this line initializes the day variable
    let day;
    //a for loop that counts the days
    for(day=1;;day++){
        //current height is current height plus growth speed
    currentHeight += upSpeed;
    //an if statement that evaluates if currentHeight is greater of equal to desiredHeight
    if(currentHeight >= desiredHeight){
        //if so, break out of the loop
        break;
        //if not, subtract downspeed for one day has passed
      } else { 
        currentHeight -= downSpeed;
      }
    }
    //return the number of days
    return day;
    
  }