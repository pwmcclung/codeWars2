function multiplyAll(array){
  return function(num){
    let sum = [];
    for (let i = 0; i < array.length; i++){
      sum .push(array[i] * num);
    }
    return sum;
  }
}