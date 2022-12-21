function infected(s) {
  
    let infected = 0
    let notInfected = 0
    let arr = s.split('X')
    arr = arr.map(x=>{
      if (x.includes(1)){
        infected+=x.length
        return x.replace(/0/g,1)
      }
      notInfected+=x.length
      return x
    })
   if (infected === 0 )return 0
    return (infected / (infected + notInfected)) * 100
  }