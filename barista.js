function barista(coffees){
    let sorted = coffees.sort((a, b) => a - b)
    let totalTime = coffees.reduce((acc, t, i) => acc + t * (coffees.length-i) + 2*i, 0)
    return totalTime
  }