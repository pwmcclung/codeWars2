function jumpingNumber(n){
    let arr = Array.from(String(n), Number)
    if (arr.length == 1){
      return "Jumping!!"
    }
    
      if (arr.every((x, y, z) => !y || Math.abs(x - z[y - 1]) === 1)){
        return "Jumping!!"
      }else {
         return "Not!!"
      }
    }
  