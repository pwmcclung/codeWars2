function height(n) {
  let count = 0
  let newNum = 2000000
  let fact = newNum 
  let calc = 2000000
  while (count < n){
    count++
    fact = fact/2.5
    calc += fact
  }
  return calc.toFixed(3)
}
