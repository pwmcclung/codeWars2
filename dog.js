function crap(x, bags, cap){
    let flatX = x.flat()
    let crap = 0
    let noPoop = 0
    let d = 0
   for (let i = 0; i < flatX.length; i++){
     if(flatX[i] === '_'){
       noPoop+=1
     }else if (flatX[i] === '@'){
       crap+=1
     }else if (flatX[i] === 'D'){
          d+=1
      }
   }
    let capacity = bags * cap
     if (d > 0){
      return 'Dog!!'
    }else if (crap > capacity){
     return'Cr@p'
   }else if (crap <= capacity){
      return 'Clean'
    }
  
    }