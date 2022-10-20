function howManyGifts(maxBudget, gifts){
    let sortedGifts = gifts.sort(function(a,b) {return a - b})
    let total = 0
    let count = 0
   for(let i = 0; i < sortedGifts.length; i ++){
    total += sortedGifts[i] 
     if (total <= maxBudget){
       count++  
     }
   }
     return count
   }