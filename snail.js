function snail(column, day, night) {

    let newDay= day
    let count = 1
    while (newDay < column){
      newDay += day - night
      count += 1
    }
      return count
    }