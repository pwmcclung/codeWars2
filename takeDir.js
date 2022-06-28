function derive(coefficient,exponent) {
    let dir = exponent - 1
    let mult = coefficient * exponent
    return `${mult}x^${dir}`
  }