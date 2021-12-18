function longest(words) {
    let newArr = []
    for (let i = 0; i < words.length; i++){
      newArr.push(words[i].length)
    }
    let sorted = newArr.sort(function (a, b) {return a - b})
    return sorted[sorted.length -1]
  }