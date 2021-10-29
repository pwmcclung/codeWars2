function removeSmallest(numbers) {
    if (numbers.length == 0 ){
      return [ ]
    }else{
      let newArr= numbers.slice()
      let min = Math.min(...newArr)
      let find = newArr.findIndex(p => p ==min)
      let removed = newArr.splice(find,1)
      return newArr
    }
  
  }