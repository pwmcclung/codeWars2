function redistributeWealth(wealth) {
    let sum = wealth.reduce((a, b) => a+ b)
    let av = sum / wealth.length
     for(let i = 0; i < wealth.length; i++){
       wealth[i] = av
     }
    return wealth
   
  }