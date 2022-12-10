const sumAverage = (arr) => {
    return Math.floor(arr.map(num=>num.reduce((a,b)=>a+b,0)/num.length).reduce((a,b)=>a+b,0))
  }