function find_average(array) {
    let sum = 0;
    let avg = 0
    for (let i = 0; i < array.length; i++){
       sum += array[i]
       avg = sum / array.length
    
    }
      return avg
    }