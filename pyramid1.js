function towerBuilder(nFloors) {
  let pyramid = [...Array(nFloors)].map((_,i)=>" ".repeat(nFloors - 1 - i) + "*".repeat(i* 2 + 1) + " ".repeat(nFloors - 1 - i));
  return pyramid
}