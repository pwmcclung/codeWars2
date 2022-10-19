function evaporator(content, evap_per_day, threshold){ 
    let days = 0
    let threshVol = content * (threshold / 100)
    while (content >= threshVol){
      content = content - (content * (evap_per_day/100))
      days++
    }
    return days
  }