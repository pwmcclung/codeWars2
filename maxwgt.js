function calculate1RM(w, r){
    if (r == 1){
      return w
    }else if (r ==0 ){
      return 0
    }
    let epley = (w * ( 1 + (r/30)))
    let mcglothin = (100 * w) / (101.3 - (2.67123 * r))
    let lombardi = w * r ** 0.10
    let maxi = Math.max(epley, mcglothin, lombardi)
    return Math.round(maxi)
                          
  }