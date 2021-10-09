function uniTotal (string) {
    let total = 0 
    if (string.length === 0){
      return 0
    }else{
      for (let x of string){
        total += x.charCodeAt()
      }
    }
     return total
    }