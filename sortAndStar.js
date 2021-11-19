function twoSort(s) {
    let sorted = s.sort()
    let first = sorted[0]
    let newArr = []
    let arr = first.split('') 
    for (let i = 0; i < arr.length; i++){
      if (i != arr.length - 1){
      newArr.push(arr[i] + "***")
        } else {
      newArr.push(arr[i])
    }  
  }
   return newArr.join('')
    }