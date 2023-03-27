function minMinMax(array) {
    let largest = Math.max(...array)
    let smallest = Math.min(...array)
    let filtered = []
    for (let i = smallest; i <= largest; i++){
      filtered.push(i)
    }
    let filteredArr = filtered.filter(x => !array.includes(x))
   let minAbsent = filteredArr[0]
   return [smallest, minAbsent, largest]
  }