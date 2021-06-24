function amIWilson(p) {
    let primeW = (n)=>{
      if (n < 0) return -1
      if (n === 0) return 1
  
      return n * primeW(n - 1)
    }
  
    if( ((primeW(p-1) + 1) % (p * p)) == 0) return true
  
    return false
  }