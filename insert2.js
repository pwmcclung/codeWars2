function insertDashII(num) {
   let arr = Array.from(String(num), Number);
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i])
    if ((arr[i] % 2 === 0 && arr[i] != 0) && ( arr[i + 1] % 2 === 0 && arr[i + 1] != 0)){
      newArr.push('*')
    }else if ((arr[i] % 2 != 0 && arr[i] != 0 )&& (arr[i + 1] % 2 != 0 && arr[i + 1] != 0)){
      newArr.push('-')
    }
  }
  if (newArr[newArr.length - 1] === '-'){
    return newArr.slice(0, newArr.length - 1).join('');
  }else{
    return newArr.join('');
  }
}