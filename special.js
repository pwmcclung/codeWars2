function specialNumber(n){
  let arr = Array.from(String(n),Number);
  let count = 0
  for (let i= 0; i < arr.length; i++){
    if (arr[i] === 0||arr[i] === 1||arr[i] === 2||arr[i] === 3||arr[i] === 4||arr[i] === 5){
      count++
    }
  }
  if (count === arr.length){
    return "Special!!"
  }else{
    return "NOT!!"
  }
}