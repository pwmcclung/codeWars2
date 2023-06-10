function reverseBits (n) {
  let num = Number(n).toString(2);
  let numReversed = Array.from(num).reverse().join('');
  return parseInt(numReversed, 2);
}