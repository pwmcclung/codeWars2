function min(arr, toReturn) {
    let smallest = Math.min(...arr)
    if (toReturn == 'value'){
      return smallest
    }else if (toReturn == 'index')
      return arr.indexOf(smallest)
  }