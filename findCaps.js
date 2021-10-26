var capitals = function (word) {
	let newArr = []
  let arr = word.split('')
  for (let i = 0; i <arr.length; i++){
    if (arr[i] == arr[i].toUpperCase()){
      newArr.push(arr.indexOf(arr[i]))
    }
  }
  return newArr
};