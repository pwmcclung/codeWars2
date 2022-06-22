function scoreOfDive(scores, tariff) {
    let sorted = scores.sort(function(a, b) { return a - b})
    let sliced = sorted.slice(2, 5)
    let added = sliced.reduce((a, b) => a + b)
    let calc = added * tariff
    return String(calc.toFixed(2))
  }