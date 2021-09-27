function going(n) {
    let theEnd = 1,
    plus1 = 1;
  for (let i = n; i > 1; i--) {
    plus1 /= i;
    theEnd += plus1;
  }
  return parseFloat(theEnd.toString().substring(0, 8));
}