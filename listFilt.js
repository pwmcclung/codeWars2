function filter_list(l) {
    let newArr = []
    for (let i = 0; i < l.length; i++){
      if (typeof l[i] === 'number' ){
        newArr.push(l[i])
      }
        
    
    }
    
    return newArr
  }