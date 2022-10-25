var FilterNumbers = function(str) {
    let arr =  str.split('').filter(c => !parseInt(c));
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] != '0'){
        newArr.push(arr[i])
      }
    }
    return newArr.join('')
  }