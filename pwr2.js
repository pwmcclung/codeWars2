function isPowerOfTwo(n){
    if (n == 0){
      return false
    }
    return n && (n & (n - 1)) === 0
  }