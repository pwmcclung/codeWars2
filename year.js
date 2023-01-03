function nextHappyYear(year){
    //create a variable
    let newYear = 0
    //use a for loop to increment year by one
    for (let x = year + 1; ; x++){
      //use an if statement, the set() method lalong with the spread, split('') and lenght to create a set 
      //from the array  and if the length is four newyear is x
      if ([...new Set((""+ x).split(''))].length == 4){
        newYear = x
        //break out of loop
        break;
      }
    }
      //return newYear
    return newYear
    }