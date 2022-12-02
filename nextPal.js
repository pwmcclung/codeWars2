function nextPal(val) {
    let pal = val
    for (let i = val; i = pal; i++){
      pal += 1
      if (String(pal).split('').reverse().join('') == pal){
        return pal
      }
    }
   }