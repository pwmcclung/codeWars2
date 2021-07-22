function integrate(coefficient, exponent) {
  
    let newX = exponent + 1
    let rem = coefficient / newX
    return `${rem}x^${newX}`
  }