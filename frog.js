function solution(a) {
    if (a.length  === 0){
      return -1
    }
    let hopCount = 0;
    for (let i = 0; i < a.length; i += a[i]){
      if (i<0){
        break
      }
      hopCount++
      if (hopCount > 1000){
        return -1
      }
    }
    return hopCount
  }