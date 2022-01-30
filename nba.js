function pointsPer48(ppg, mpg) {
    if (ppg ===0 || mpg === 0){
      return 0
    }else{
       let points = (ppg / mpg) * 48
       points = points
       points = points.toFixed(1)
       return parseFloat(points)
      }
 }