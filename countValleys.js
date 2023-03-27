//code walkthrough

function countingValleys(s) {
    let arr = s.split('')
    let valleys = 0
    let height = 0;
    let inValley = false
    for (let i = 0; i < arr.length; i++){
      if (arr[i ] == 'U'){
        height += 1
      }else if (arr[i] == 'D'){
        height -= 1
      }else{
        continue
      }
       if (height < 0 ){
      inValley = true
    }
    if (inValley == true && height >=0){
      valleys += 1
      inValley = false
    }
    }
   
    return valleys
  }