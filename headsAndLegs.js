function animals(heads, legs){
    let Cows = (legs/2) - heads
    let Chickens = heads - Cows
    return Math.round(Cows) != Cows || Math.round(Chickens) != Chickens || Math.abs(Cows) != Cows || Math.abs(Chickens) != Chickens ? "No solutions" : [Chickens, Cows]
}