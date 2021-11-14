var beeramid = function(bonus, price) {

    let interval = 0;
    while(true){
      interval +=1
      if (bonus-interval * interval *price<0) return interval -1
      bonus-=interval * interval * price
    }
  }