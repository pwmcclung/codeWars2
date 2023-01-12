function foldTo(distance) {
    if (distance < 0){
      return null
    }
    let thicky = 0.0001
    let count = 0
    while (thicky <distance){
      thicky = thicky*2
      count++
    }
    return count
  }