function completeSeries(arr) {
  let arr1 = [];
  let lowest = 0;
  let match = (arr) => arr.length === new Set(arr).size;
  let highest = Math.max(...arr);
 while(highest >= lowest){
   arr1.push(lowest);
   lowest++;
 };
if (match(arr) == true){
  return arr1;
}
  return [0];
  
}