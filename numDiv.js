const divisions = (n, divisor) => {
    if (n < divisor){
      return 0
    }else if (n == divisor){
      return 1
    }else{
    let count = 0;
    while (n > 1) {
      count++;
      n = n / divisor;
    }
      return count - 1
   }
  };