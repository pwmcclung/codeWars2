function whoIsPaying(name){
    if (name.length > 2){
      let me = name.substring(0,2)
   let newArr = []
   newArr.push(name)
     newArr.push(me)
   return newArr
      
    }else if(name.length === 2){
      return [name]
    }else if (name.length ===1){
      return [name]
    }else {
      return ['']
    }
    