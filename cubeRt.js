function cutCube(volume,n){
    let ans =  Math.round(Math.cbrt(volume/n)) ** 3 === volume/n && Math.round(Math.cbrt(n)) ** 3 ===n
    return ans
  }