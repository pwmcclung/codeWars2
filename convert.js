function convertHashToArray(hash){
    let arr = Object.keys(hash).map((key) => [key, hash[key]])
    return arr.sort((a,b) => a > b)
  }