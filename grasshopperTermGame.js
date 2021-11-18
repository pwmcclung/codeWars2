function combat(health, damage) {
    let sum = health - damage
    if (sum > 0){
      return sum
    }else {
      return 0
    }
  }