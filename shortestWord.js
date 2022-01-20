function findShort(s){
    let arr = s.split(' ')
    let newArr = []
    for (let x of arr){
      newArr.push(x.length)
    }
    let sorted = newArr.sort(function (a, b) {return a - b})
    return sorted[0]
  }