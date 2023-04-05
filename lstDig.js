function lastDigit(n, d) {
  
  let arr = Array.from(String(n), Number);

  if (d > arr.length){
    return arr;
  }else if (d <= 0){
    return [];
  }
  
   return arr.slice(arr.length-d);
}