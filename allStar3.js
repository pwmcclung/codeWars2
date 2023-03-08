var removeVowels = function(str){
  str = str.toLowerCase()
  let arr = str.split('')
let newArr = []
for (let i = 0; i < arr.length;i++){
  if (arr[i] !== 'a'&& arr[i] !== 'e' && arr[i] !== 'i' && arr[i] !== 'o' && arr[i] !== 'u'){
    newArr.push(arr[i])
  }
}
  return newArr.join('')
}