function initializeNames(name){
  let arr = name.split(' ');
  if (arr.length <= 2){
    return name
  }
  let first = arr[0]
  let last = arr[arr.length - 1]
  let newArr = []
  for (let i = 1; i < arr.length - 1; i++){
    newArr.push( arr[i][0] + '.')
  }
  let newerArr = Array.from(newArr)
  newerArr.unshift(first)
  newerArr.push(last)
  return newerArr.join(' ')
}