function shorter_reverse_longer(a,b){
    if (a.length >= b.length){
      a = a.split('').reverse().join('')
      return b.concat(a).concat(b)
    }else{
      b = b.split('').reverse().join('')
      return a.concat(b).concat(a)
    }
   
  }