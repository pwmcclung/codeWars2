function rakeGarden(garden) {
    let arr = garden.split(' ')
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == 'gravel'|| arr[i] == 'rock'){
        newArr.push(arr[i])
      }else{
        newArr.push('gravel')
      }
    }
    return newArr.join(' ')
  
  }