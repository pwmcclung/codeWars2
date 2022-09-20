function flyBy(lamps, drone){
    let arr = lamps.split('')
    let lenD = drone.length
    let newArr = [] 
    let count = 0
    for (let i = 0; i < arr.length; i++){
      if (count < lenD){
        newArr.push('o') 
        count ++
      }else {
        newArr.push('x') 
      }
    }
   return newArr.join('')
  }