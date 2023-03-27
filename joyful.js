function numberJoy(n) {
    let sorted = n.toString().split('').map(Number).reduce((a,b) => a + b, 0);
    return n - sorted * sorted.toString().split('').reverse().join('') === 0
 }