function rowWeights(array){
    let team1 = []
    let team2 = []
    let newArr = []
    if (array.length == 1){
      return [array[0], 0]
    }
    for (let i = 0; i < array.length; i++){
      if (i % 2 == 0){
        team1.push(array[i])
      }else if (i % 2 != 0){
        team2.push(array[i])
      }
    }
    let team3 = team1.reduce((a, b) => a + b)
    let team4 = team2.reduce((a, b) => a + b)
    return [team3, team4]
  }