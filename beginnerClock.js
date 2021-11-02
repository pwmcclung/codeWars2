function past(h, m, s){
  
    let total = 0
    if (h ===0 && m ===0 && s === 0 ){
      return total
    }else{
       total = (h * 3600000) + (m * 60000) + (s * 1000)
      return total
  }
    }