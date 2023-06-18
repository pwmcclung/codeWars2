function countSmileys(arr) {
  if (arr.length === 0){
    return 0;
  }
  let faces = [':)', ';)', ';D',':D',':-)', ';-)', ':-D',';-D',';~)', ':~)', ';~D', ':~D'];

  let count = 0;
  for (let i = 0; i< arr.length; i++){
    if (faces.includes(arr[i])){
      count++;
    }
  };
  return count;
}