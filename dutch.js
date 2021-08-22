function sc(floor){
    let str = ''
    if (floor <=1){
      return ""
    }else if(floor > 1 && floor <7){
      for (let i = 0; i < floor-1; i++){
        str += "Aa~ "
      }
      str += 'Pa! Aa!'
     return str
    }else if(floor > 1 && floor >=7){
      for (let i = 0; i < floor-1; i++){
        str += "Aa~ "
      }
      str += 'Pa!'
      return str
    }
    
  }