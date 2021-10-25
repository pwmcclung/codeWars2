function billboard(name, price = 30){
    let totalCost = 0
    let len = name.length
    for (let i = 1; i <= len; i++){
      totalCost += price
    }
      return totalCost
    } 