function isPowerOfTwo(n){
  // the if statement asks if n equals 0 and if so return false
    if (n == 0){
      return false
    }
    // this statement returns n and n and -1 if n ==0
    return n && (n & (n - 1)) === 0
  }