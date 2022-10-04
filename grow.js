function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0;
    let day;
    for(day=1;;day++){
    currentHeight += upSpeed;
    if(currentHeight >= desiredHeight){
        break;
      } else { 
        currentHeight -= downSpeed;
      }
    }
    
    return day;
    
  }