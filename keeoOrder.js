function keepOrder(ary, val) {
  ary.push(val)
  return ary.sort((a,b) => a - b).indexOf(val)
  }