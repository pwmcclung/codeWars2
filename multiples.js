function multiples(s1,s2,s3){
  let arr = [];
  let min = Math.min(s1,s2);
  let count = min;
  while (count < s3){
      if (count % s1 ===0 && count % s2 ===0){
          arr.push(count);
      }
    count++;
  }
  return arr;
}