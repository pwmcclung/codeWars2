function opposite(number) {
    if(number ===0){
      return 0
    }else if (+number){
      return -number
    }else if (-number){
      return +number
    }
  }