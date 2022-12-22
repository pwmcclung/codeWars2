function adjust(coin,price) {
    if (price == 0){
      return 0
    }
    if (price % coin == 0){
      return price
    }else{
      let a = price
      while(price % coin != 0){
        price +=1
      }
    }
    return price
  }