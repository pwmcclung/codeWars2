function solve(arr){
    let arrSort = arr.sort((a,b) => b - a)
    let lengthOfArr = arrSort.slice().length;
    let newArr = []
    for (let i = 0; i < lengthOfArr; i++){
      newArr.push(arrSort.shift())
      newArr.push(arrSort.pop())
      }
  let newestArr = []
  for (let j = 0; j < newArr.length; j++){
    if (newArr[j] != undefined){
      newestArr.push(newArr[j])
    }
  }
    return newestArr
}

