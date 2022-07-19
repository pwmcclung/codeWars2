function gimme (triplet) {
    let sorted1 = triplet.slice()
       let sorted = sorted1.sort(function(a, b)  {return a - b})
       return triplet.indexOf(sorted[1])
  }