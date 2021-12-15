function remainder(n, m){
    let max = Math.max(n,m)
    let min = Math.min(n, m)
    if (min === 0 ){
      return NaN
    }else{
      return max % min
    }
      
      
    }