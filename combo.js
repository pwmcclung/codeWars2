function mergeArrays(a, b) {
  let combo= [];
  let one = a.length;
  let two = b.length;
  let longest = Math.max(one, two);
  for (let i = 0; i < longest; i++){
    combo.push(a[i], b[i]);
  }
  return combo.filter((x) => x !== undefined);
}