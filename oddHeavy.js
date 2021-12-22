function isOddHeavy(n) {
    let odd = n.filter(v => v % 2 !== 0).sort((a, b) => a - b);
    let even = n.filter(v => v % 2 == 0);
    if (!odd.length) return false;
    return even.every(v => v < odd[0]);
  }