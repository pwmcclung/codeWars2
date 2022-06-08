function stairsIn20(s){
    return   s.reduce((arr, day) => arr.concat(...day), []).reduce((total, stairs) => total + stairs, 0) * 20
   }