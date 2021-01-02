var flatten = function (array){
    let arr = Object.values(array)
    if (arr.length === 0){
  return []
      }else {
        return arr.reduce((acc, val) => acc.concat(val), [])
      }
  }