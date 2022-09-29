var number=function(array){
    if (array.length == 0){
      return []
    }
    let newArr = []
    let count = 1
    
    for (let i =0; i < array.length; i++){
      newArr.push(`${count}: ${array[i]}`)
      count++
    }
    return newArr
    }