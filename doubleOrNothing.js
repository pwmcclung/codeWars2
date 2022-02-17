function doubleOrNothing(cash, wager, losses){
    let doubler = []
    for (let i = 0; i < losses; i++){
     doubler.push(wager)
      wager = wager * 2
    }
    
   if (doubler[doubler.length-1] < cash){
     return cash - doubler[doubler.length-1] 
   }else if (cash === doubler[doubler.length-1] ){
     return 0
   } else {
     return "I'll pay you back later"
   }
  }

  