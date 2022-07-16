var number = function(busStops){
    let newBus = busStops.flat()
    let onBus = []
    let offBus = []
    for (let i = 0; i <newBus.length; i++){
      if (i %2==0){
        onBus.push(newBus[i])
      }else if (i % 2 != 0){
        offBus.push(newBus[i])
      }
    }
     let one = onBus.reduce((a, b) => a + b)
     let two = offBus.reduce((a, b) => a + b)
     return one - two
   }