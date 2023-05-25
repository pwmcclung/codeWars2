Array.range = function(start, count) {
  let arr = [];
  for (let i = 0; i <count; i++){
    arr.push(start);
    start++;
  };
  return arr;
}

Array.prototype.sum = function() {
  return this.reduce((a,b) => a + b,0);
}