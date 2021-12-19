function howMuchWater(W,L,C){
    if (C>(2*L)){
        return 'Too much clothes'
        }else if (C<L) {
      return 'Not enough clothes'
      }else{
   return  +((W * 1.1 ** (C - L)).toFixed(2))
        }
   }
   